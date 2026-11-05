#!/usr/bin/env node
// Offline inventory audit. Prints JSON to stdout; never changes vehicle data.
const fs=require('node:fs');
const file=process.argv[2]||'data/cars.js';
const raw=fs.readFileSync(file,'utf8');
const marker=/\bconst\s+carsData\s*=\s*\[/g.exec(raw);
if(!marker) throw new Error('carsData not found');
const start=raw.indexOf('[',marker.index);
let depth=0,quote=false,escape=false,end=-1;
for(let i=start;i<raw.length;i++){
 const c=raw[i];
 if(quote){if(escape)escape=false;else if(c==='\\')escape=true;else if(c==='"')quote=false;continue;}
 if(c==='"'){quote=true;continue;}
 if(c==='[')depth++;
 if(c===']'){depth--;if(depth===0){end=i+1;break;}}
}
if(end<0)throw new Error('Incomplete carsData');
const cars=JSON.parse(raw.slice(start,end));
const issues=[], ids=new Set();
const good=n=>typeof n==='number'&&Number.isFinite(n)&&n>0;
for(const car of cars){
 const label=car.brand+' '+car.model;
 if(ids.has(String(car.id)))issues.push({id:car.id,model:label,type:'duplicate_id'});
 ids.add(String(car.id));
 if(!good(car.priceMin)||!good(car.priceMax))issues.push({id:car.id,model:label,type:'missing_or_invalid_range'});
 else if(car.priceMin>car.priceMax)issues.push({id:car.id,model:label,type:'inverted_range'});
 const trimPrices=(car.trims||[]).filter(t=>good(t.priceValue)).map(t=>t.priceValue);
 if(trimPrices.length&&good(car.priceMin)&&good(car.priceMax)){
  const min=Math.min(...trimPrices),max=Math.max(...trimPrices);
  if(min<car.priceMin||max>car.priceMax)issues.push({id:car.id,model:label,type:'trim_outside_range',trimMin:min,trimMax:max,rangeMin:car.priceMin,rangeMax:car.priceMax});
 }
}
process.stdout.write(JSON.stringify({mode:'READ_ONLY_AUDIT',totalVehicles:cars.length,issues,summary:{issueCount:issues.length,vehiclesWithIssues:new Set(issues.map(x=>String(x.id))).size},note:'Warnings only. No prices changed.'},null,2)+'\n');
