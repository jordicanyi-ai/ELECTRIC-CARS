const test=require('node:test');
const assert=require('node:assert/strict');
const fs=require('node:fs');
const os=require('node:os');
const path=require('node:path');
const {spawnSync}=require('node:child_process');
const script=path.resolve(__dirname,'../scripts/price-catalog-audit.cjs');
test('audit reports inconsistencies without changing source',()=>{
 const dir=fs.mkdtempSync(path.join(os.tmpdir(),'price-audit-'));
 try{
  const file=path.join(dir,'cars.js');
  const original='const carsData = '+JSON.stringify([
   {id:1,brand:'Demo',model:'A',priceMin:20000,priceMax:30000,trims:[{name:'BASIC',priceValue:19000}]},
   {id:2,brand:'Demo',model:'B',priceMin:25000,priceMax:20000,trims:[]}
  ])+';';
  fs.writeFileSync(file,original);
  const r=spawnSync(process.execPath,[script,file],{encoding:'utf8'});
  assert.equal(r.status,0,r.stderr);
  const report=JSON.parse(r.stdout);
  assert.equal(report.totalVehicles,2);
  assert.ok(report.issues.some(x=>x.type==='trim_outside_range'));
  assert.ok(report.issues.some(x=>x.type==='inverted_range'));
  assert.equal(fs.readFileSync(file,'utf8'),original);
 }finally{fs.rmSync(dir,{recursive:true,force:true});}
});
