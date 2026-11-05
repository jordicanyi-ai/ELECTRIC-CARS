#!/usr/bin/env node
'use strict';
/**
 * Safe, read-only weekly research report. Never edits the catalog.
 * Run: node scripts/price-weekly-report.cjs
 * Optionally: PRICE_SOURCE_FILE=docs/price-official-sources.json
 */
const fs=require('node:fs'),cp=require('node:child_process'),path=require('node:path');
const root=path.resolve(__dirname,'..');
function run(file,args=[],opts={}){
 const p=cp.spawnSync(process.execPath,[path.join(__dirname,file),...args],{cwd:root,encoding:'utf8',maxBuffer:12*1024*1024,...opts});
 if(p.status!==0)throw Error(file+': '+(p.stderr||p.stdout||p.error?.message));
 return JSON.parse(p.stdout);
}
async function main(){
 const queue=run('price-research-queue.cjs');
 const sourceFile=process.env.PRICE_SOURCE_FILE||'docs/price-official-sources.json';
 const config=JSON.parse(fs.readFileSync(path.resolve(root,sourceFile),'utf8'));
 const {inspect}=require('./price-official-adapter.cjs');
 const results=[];
 for(const s of config.sources){
  try{results.push(await inspect(s));}
  catch(e){results.push({brand:s.brand,model:s.model,url:s.url,status:'SOURCE_ERROR',error:e.message});}
 }
 const names=new Set(results.map(x=>(x.brand+'|'+x.model).toLowerCase()));
 const missing=queue.batches.flatMap(b=>b.vehicles).filter(c=>!names.has((c.brand+'|'+c.model).toLowerCase()));
 const report={generatedAt:new Date().toISOString(),mode:'READ_ONLY_NO_PUBLICATION',catalogTotal:queue.totalVehicles,sourceCoverage:results.length,notConfigured:missing.length,verifiedChanges:0,warning:'All extracted amounts are unverified; never use them to update prices.',sources:results,unconfiguredModels:missing.map(x=>({id:x.id,brand:x.brand,model:x.model}))};
 const output=process.env.PRICE_REPORT_PATH||'price-weekly-report.json';
 fs.writeFileSync(path.resolve(root,output),JSON.stringify(report,null,2)+'\n');
 console.log(JSON.stringify({report:output,catalogTotal:report.catalogTotal,configured:results.length,notConfigured:missing.length,verifiedChanges:0},null,2));
}
if(require.main===module)main().catch(e=>{console.error(e.stack);process.exitCode=1;});
