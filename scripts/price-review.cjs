#!/usr/bin/env node
// Offline, read-only price proposal verifier. No network, email, git writes or deployments.
const fs = require('node:fs');
const path = require('node:path');
const sourcePath = path.resolve(process.argv[2] || 'data/cars.js');
const proposalPath = process.argv[3];
if (!proposalPath) { console.error('Usage: node scripts/price-review.cjs data/cars.js proposals.json'); process.exit(2); }
function extractArray(source) {
  const marker = /\bconst\s+carsData\s*=\s*\[/g;
  const match = marker.exec(source);
  if (!match) throw new Error('carsData array not found');
  const start = source.indexOf('[', match.index), stack = [];
  let quote = false, escape = false;
  for (let i = start; i < source.length; i++) {
    const c = source[i];
    if (quote) { if (escape) escape = false; else if (c === '\\') escape = true; else if (c === '"') quote = false; continue; }
    if (c === '"') { quote = true; continue; }
    if (c === '[' || c === '{') stack.push(c);
    if (c === ']' || c === '}') {
      const open = stack.pop();
      if (open !== (c === ']' ? '[' : '{')) throw new Error('Malformed carsData');
      if (!stack.length) return JSON.parse(source.slice(start, i + 1));
    }
  }
  throw new Error('Unclosed carsData array');
}
const cars = extractArray(fs.readFileSync(sourcePath, 'utf8'));
const proposals = JSON.parse(fs.readFileSync(proposalPath, 'utf8'));
if (!Array.isArray(proposals)) throw new Error('Proposals must be an array');
const validPrice = n => typeof n === 'number' && Number.isFinite(n) && n > 0;
const results = proposals.map(p => {
  const car = cars.find(c => String(c.id) === String(p.id));
  const out = { id: p.id, model: car ? car.brand + ' ' + car.model : null, status: 'rejected', reason: '' };
  if (!car) { out.reason = 'Vehicle not found'; return out; }
  if (p.market !== 'ES' || p.currency !== 'EUR' || p.includesVat !== true || p.includesAid !== false || p.financingRequired !== false || p.conditionalDiscount !== false) { out.reason = 'Spanish unconditional VAT-inclusive price without aid not established'; return out; }
  if (!/^https:\/\//.test(p.sourceUrl || '') || !p.checkedAt || Number.isNaN(Date.parse(p.checkedAt)) || p.officialSource !== true) { out.reason = 'Official source URL or verification date missing'; return out; }
  if (!validPrice(p.newPrice)) { out.reason = 'New price missing or invalid'; return out; }
  if (p.evidenceReviewed !== true || typeof p.evidenceQuote !== 'string' || p.evidenceQuote.trim().length < 15 || p.exactTrimMatched !== true || p.priceConditionsReviewed !== true) { out.reason = 'Documentary evidence, exact trim and conditions not independently reviewed; research only'; out.status = 'research_only'; return out; }
  let oldPrice;
  if (p.trimName) {
    const trim = (car.trims || []).find(t => t.name === p.trimName);
    if (!trim) { out.reason = 'Exact trim not found'; return out; }
    oldPrice = trim.priceValue;
  } else if (p.field === 'priceMin' || p.field === 'priceMax') oldPrice = car[p.field];
  else { out.reason = 'Specify exact trimName or priceMin/priceMax field'; return out; }
  if (!validPrice(oldPrice)) { out.reason = 'Existing price unavailable; manual review required'; return out; }
  out.oldPrice = oldPrice; out.newPrice = p.newPrice; out.delta = p.newPrice - oldPrice;
  out.sourceUrl = p.sourceUrl; out.checkedAt = p.checkedAt;
  out.status = out.delta === 0 ? 'unchanged' : 'needs_manual_approval';
  return out;
});
const report = { generatedAt: new Date().toISOString(), mode: 'READ_ONLY', recipientPlanned: 'electricos.eu@gmail.com', proposals: results };
process.stdout.write(JSON.stringify(report, null, 2) + '\n');
