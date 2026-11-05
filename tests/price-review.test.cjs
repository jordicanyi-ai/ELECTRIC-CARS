const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const os = require('node:os');
const path = require('node:path');
const {spawnSync} = require('node:child_process');
const root = path.resolve(__dirname, '..');
const script = path.join(root, 'scripts/price-review.cjs');
function run(proposals) {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'price-review-'));
  try {
    const data = path.join(dir, 'cars.js'), input = path.join(dir, 'proposals.json');
    fs.writeFileSync(data, 'const carsData = '+JSON.stringify([{id:1,brand:'Test',model:'EV',priceMin:20000,priceMax:30000,trims:[{name:'BASE',priceValue:20000}]}])+';');
    fs.writeFileSync(input, JSON.stringify(proposals));
    const result = spawnSync(process.execPath, [script, data, input], {encoding:'utf8'});
    assert.equal(result.status, 0, result.stderr);
    assert.match(fs.readFileSync(data,'utf8'), /"priceMin":20000/); // source remains unchanged
    return JSON.parse(result.stdout).proposals[0];
  } finally { fs.rmSync(dir,{recursive:true,force:true}); }
}
const valid = {id:1,trimName:'BASE',newPrice:19000,market:'ES',currency:'EUR',includesVat:true,includesAid:false,financingRequired:false,conditionalDiscount:false,officialSource:true,evidenceReviewed:true,evidenceQuote:'PVP al contado con IVA y sin ayudas públicas',exactTrimMatched:true,priceConditionsReviewed:true,sourceUrl:'https://example.com/',checkedAt:'2026-11-05'};
test('verified-looking proposal requires manual approval',()=>{const x=run([valid]);assert.equal(x.status,'needs_manual_approval');assert.equal(x.delta,-1000);});
test('no price rejects',()=>assert.equal(run([{...valid,newPrice:null}]).status,'rejected'));
test('aid rejects',()=>assert.equal(run([{...valid,includesAid:true}]).status,'rejected'));
test('financing rejects',()=>assert.equal(run([{...valid,financingRequired:true}]).status,'rejected'));
test('unknown trim rejects',()=>assert.equal(run([{...valid,trimName:'UNKNOWN'}]).status,'rejected'));
test('unchanged is not a change',()=>assert.equal(run([{...valid,newPrice:20000}]).status,'unchanged'));
