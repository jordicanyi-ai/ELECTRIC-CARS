#!/usr/bin/env node
// Read-only discovery: fetch an explicitly supplied official Spanish URL and report possible price text.
// This does NOT verify price-to-trim matching or approve any change.
const fs = require('node:fs');
const input = process.argv[2];
if (!input) { console.error('Usage: node scripts/price-source-check.cjs docs/price-sources.json'); process.exit(2); }
const sources = JSON.parse(fs.readFileSync(input,'utf8'));
if (!Array.isArray(sources)) throw new Error('Expected array of sources');
const maxBytes = 2_000_000;
const delay = ms => new Promise(r=>setTimeout(r,ms));
function safeUrl(raw) {
  const u = new URL(raw);
  if (u.protocol !== 'https:' || u.username || u.password || u.port || !u.hostname.endsWith('.es')) throw new Error('Only public HTTPS .es domains allowed');
  if (/(^|\.)(localhost|local|internal)\./.test(u.hostname)) throw new Error('Private host');
  return u;
}
async function inspect(s) {
  const result = {brand:s.brand,sourceUrl:s.url,status:'unverified',reason:'',candidatePrices:[]};
  try {
    const url=safeUrl(s.url);
    const allowed = (s.allowedHost||'').toLowerCase();
    if (!allowed || url.hostname !== allowed) throw new Error('Hostname not in explicit allowlist');
    const ctrl=new AbortController(); const timer=setTimeout(()=>ctrl.abort(),12000);
    let response;
    try {response=await fetch(url,{redirect:'manual',signal:ctrl.signal,headers:{'user-agent':'electricos.eu-price-research/0.1 (read-only; manual review required)','accept':'text/html'}});}
    finally {clearTimeout(timer);}
    if (!response.ok) throw new Error('HTTP '+response.status+' (redirects not followed)');
    const type=response.headers.get('content-type')||'';
    if (!type.includes('text/html')) throw new Error('Not HTML');
    const declared=Number(response.headers.get('content-length')||0);
    if (declared>maxBytes) throw new Error('Page too large');
    const html=await response.text();
    if (Buffer.byteLength(html)>maxBytes) throw new Error('Page too large');
    const text=html.replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi,' ').replace(/<style\b[^>]*>[\s\S]*?<\/style>/gi,' ').replace(/<[^>]+>/g,' ').replace(/&nbsp;/gi,' ').replace(/\s+/g,' ');
    const matches=[...text.matchAll(/(?:\d{1,3}(?:\.\d{3})+|\d{4,6})(?:,\d{2})?\s*€/g)].slice(0,20);
    result.candidatePrices=[...new Set(matches.map(m=>m[0]))];
    result.status='manual_review_only';
    result.reason='Price candidates are unverified; VAT, aid, financing, exact trim and conditions require documentary verification';
  } catch(e) { result.reason=String(e.message||e); }
  return result;
}
(async()=>{const out=[];for(const source of sources){out.push(await inspect(source));await delay(800);}process.stdout.write(JSON.stringify({mode:'READ_ONLY_DISCOVERY',recipientPlanned:'electricos.eu@gmail.com',checkedAt:new Date().toISOString(),results:out},null,2)+'\n');})().catch(e=>{console.error(e);process.exitCode=1;});
