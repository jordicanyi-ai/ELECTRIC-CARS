const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const os = require('node:os');
const path = require('node:path');
const {spawnSync} = require('node:child_process');
const root = path.resolve(__dirname,'..');
test('end-to-end review preserves source and reports candidates', () => {
 const dir=fs.mkdtempSync(path.join(os.tmpdir(),'price-run-'));
 try {
  const source=path.join(dir,'cars.js'), proposals=path.join(dir,'proposals.json');
  const original='const carsData = '+JSON.stringify([{id:1,brand:'Demo',model:'EV',priceMin:20000,priceMax:30000,trims:[{name:'BASE',priceValue:20000}]}])+';';
  fs.writeFileSync(source,original);
  fs.writeFileSync(proposals,JSON.stringify([{id:1,trimName:'BASE',newPrice:21000,market:'ES',currency:'EUR',includesVat:true,includesAid:false,financingRequired:false,conditionalDiscount:false,officialSource:true,evidenceReviewed:true,evidenceQuote:'PVP al contado con IVA y sin ayudas públicas',exactTrimMatched:true,priceConditionsReviewed:true,sourceUrl:'https://www.example.es',checkedAt:'2026-11-05'}]));
  const r=spawnSync(process.execPath,[path.join(root,'scripts/price-review-run.cjs'),source,proposals],{encoding:'utf8'});
  assert.equal(r.status,0,r.stderr);
  const result=JSON.parse(r.stdout);
  assert.equal(result.counts.proposed,1);
  assert.equal(result.audit.issueCount,0);
  assert.equal(result.proposals[0].delta,1000);
  assert.equal(fs.readFileSync(source,'utf8'),original);
 } finally {fs.rmSync(dir,{recursive:true,force:true});}
});
