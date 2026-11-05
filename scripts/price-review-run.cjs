#!/usr/bin/env node
'use strict';
// Offline end-to-end review. Only reads input files; writes a report to stdout.
const { spawnSync } = require('node:child_process');
const path = require('node:path');
const root = path.resolve(__dirname, '..');
const catalog = process.argv[2] || path.join(root, 'data/cars.js');
const proposals = process.argv[3];
if (!proposals) { console.error('Usage: node scripts/price-review-run.cjs data/cars.js proposals.json'); process.exit(2); }
function run(script, args) {
  const result = spawnSync(process.execPath, [path.join(root, 'scripts', script), ...args], {
    encoding: 'utf8', maxBuffer: 12 * 1024 * 1024
  });
  if (result.status !== 0) throw new Error(`${script}: ${result.stderr || result.stdout}`);
  return result.stdout;
}
const audit = JSON.parse(run('price-catalog-audit.cjs', [catalog]));
const review = JSON.parse(run('price-review.cjs', [catalog, proposals]));
const report = {
  mode: 'READ_ONLY',
  generatedAt: review.generatedAt,
  recipientPlanned: 'electricos.eu@gmail.com',
  audit: audit.summary,
  proposals: review.proposals,
  counts: {
    proposed: review.proposals.filter(p => p.status === 'needs_manual_approval').length,
    rejected: review.proposals.filter(p => p.status === 'rejected').length,
    unchanged: review.proposals.filter(p => p.status === 'unchanged').length
  },
  disclaimer: 'Candidates are NOT independently verified against manufacturer documentation. No prices have been modified and no email has been sent.'
};
process.stdout.write(JSON.stringify(report, null, 2) + '\n');
