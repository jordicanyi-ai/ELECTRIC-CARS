#!/usr/bin/env node
'use strict';
// Deterministic, read-only weekly review queue; does not guess or alter prices.
const fs=require('node:fs');
const src=fs.readFileSync(process.argv[2]||'data/cars.js','utf8');
const match=/\bconst\s+carsData\s*=\s*(\[)/.exec(src);
if(!match)throw new Error('carsData not found');
const start=match.index+match[0].length-1;
let end=-1,depth=0,quote=false,esc=false;
for(let i=start;i<src.length;i++){
 const c=src[i];
 if(quote){if(esc)esc=false;else if(c==='\\')esc=true;else if(c==='"')quote=false;continue;}
 if(c==='"'){quote=true;continue;}
 if(c==='[')depth++;
 if(c===']'){depth--;if(depth===0){end=i+1;break;}}
}
if(end<0)throw new Error('Unclosed catalog');
const cars=JSON.parse(src.slice(start,end));
const batchSize=Number(process.env.PRICE_BATCH_SIZE||20);
if(!Number.isInteger(batchSize)||batchSize<1||batchSize>100)throw new Error('Invalid batch size');
const rows=cars.map(c=>({
 id:c.id,brand:c.brand,model:c.model,
 published:{min:c.priceMin??null,max:c.priceMax??null},
 trims:(c.trims||[]).map(t=>({name:t.name,publishedPrice:t.priceValue??null})),
 status:'pending_research',sourceUrl:null,verifiedPrice:null,
 rule:'ES; EUR; IVA included; no subsidies; no conditional financing; exact trim'
}));
const batches=[];
for(let i=0;i<rows.length;i+=batchSize)batches.push({batch:batches.length+1,vehicles:rows.slice(i,i+batchSize)});
process.stdout.write(JSON.stringify({mode:'READ_ONLY_RESEARCH_QUEUE',totalVehicles:rows.length,batchSize,batchCount:batches.length,batches},null,2)+'\n');
