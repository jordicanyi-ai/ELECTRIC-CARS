#!/usr/bin/env node
// Formats a JSON review report as a plain-text email draft. Does not send email.
const fs = require('node:fs');
const file = process.argv[2];
if (!file) { console.error('Usage: node scripts/price-report-email.cjs report.json'); process.exit(2); }
const report = JSON.parse(fs.readFileSync(file, 'utf8'));
if (report.mode !== 'READ_ONLY' || !Array.isArray(report.proposals)) throw new Error('Invalid read-only report');
const fmt = v => typeof v === 'number' ? new Intl.NumberFormat('es-ES',{style:'currency',currency:'EUR',maximumFractionDigits:0}).format(v) : 'No disponible';
const changes = report.proposals.filter(x=>x.status==='needs_manual_approval');
const rejected = report.proposals.filter(x=>x.status==='rejected');
const lines = [
  'To: electricos.eu@gmail.com',
  'Subject: [electricos.eu] Informe de revisió de preus — PENDENT D’APROVACIÓ',
  '',
  'INFORME INFORMATIU. No s’ha modificat cap preu.',
  'Data de generació: '+report.generatedAt,
  'Canvis proposats: '+changes.length,
  'Propostes descartades o no verificades: '+rejected.length,
  '',
  ...changes.flatMap(x=>[
    x.model+' (ID '+x.id+')',
    'Anterior: '+fmt(x.oldPrice)+' | Proposat: '+fmt(x.newPrice)+' | Diferència: '+fmt(x.delta),
    'Font declarada: '+(x.sourceUrl||'No disponible'),
    'Data comprovació declarada: '+(x.checkedAt||'No disponible'),
    'Estat: PENDENT DE VALIDACIÓ DOCUMENTAL I APROVACIÓ',
    ''
  ]),
  ...(rejected.length?['Sense actualitzar (es conserva el preu publicat):',...rejected.map(x=>'- '+(x.model||x.id)+': '+x.reason),'']:[]),
  'IMPORTANT: la font i el preu encara han de ser comprovats contra la documentació oficial.',
  'Aquest fitxer és un esborrany de correu; no s’ha enviat.'
];
process.stdout.write(lines.join('\n')+'\n');
