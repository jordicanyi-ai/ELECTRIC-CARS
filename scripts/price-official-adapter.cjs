#!/usr/bin/env node
'use strict';
/**
 * Read-only official-price discovery adapter. Outputs candidates, NEVER verified prices.
 * Usage: node scripts/price-official-adapter.cjs config.json
 * Config: {"sources":[{"brand":"Peugeot","url":"https://www.peugeot.es/...","model":"E-RIFTER"}]}
 */
const fs=require('node:fs');
const {URL}=require('node:url');
const dns=require('node:dns').promises;
const net=require('node:net');
function privateIp(ip){
 if(net.isIP(ip)===4){const a=ip.split('.').map(Number);return a[0]===0||a[0]===10||a[0]===127||a[0]>=224||(a[0]===169&&a[1]===254)||(a[0]===172&&a[1]>=16&&a[1]<=31)||(a[0]===192&&a[1]===168)||(a[0]===100&&a[1]>=64&&a[1]<=127);}
 if(net.isIP(ip)===6)return ip==='::1'||ip==='::'||ip.toLowerCase().startsWith('fc')||ip.toLowerCase().startsWith('fd')||ip.toLowerCase().startsWith('fe80')||ip.toLowerCase().startsWith('::ffff:');
 return true;
}
async function inspect(source){
 const u=new URL(source.url);
 if(u.protocol!=='https:'||u.username||u.password||u.port||net.isIP(u.hostname))throw Error('HTTPS public hostname required');
 if(!/^[a-z0-9.-]+\.es$/i.test(u.hostname))throw Error('Spanish official domain required');
 const ips=await dns.lookup(u.hostname,{all:true});
 if(!ips.length||ips.some(x=>privateIp(x.address)))throw Error('Non-public DNS address');
 const response=await fetch(u,{redirect:'error',signal:AbortSignal.timeout(12000),headers:{'user-agent':'ElectricosEU-PriceResearch/0.1 (read-only)'}});
 if(!response.ok)throw Error('HTTP '+response.status);
 const type=response.headers.get('content-type')||'';
 if(!type.includes('text/html'))throw Error('Not HTML');
 const max=750000;
 const reader=response.body.getReader();let size=0;const chunks=[];
 try{while(true){const {done,value}=await reader.read();if(done)break;size+=value.byteLength;if(size>max)throw Error('Response too large');chunks.push(value);}}finally{reader.releaseLock();}
 const html=Buffer.concat(chunks).toString('utf8');
 const plain=html.replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi,' ').replace(/<style\b[^>]*>[\s\S]*?<\/style>/gi,' ').replace(/<[^>]+>/g,' ').replace(/\s+/g,' ');
 const regex=/(?:PVP|precio|desde|al contado|tarifa)[^€]{0,110}?(\d{1,3}(?:\.\d{3})+(?:,\d{2})?|\d{4,6}(?:,\d{2})?)\s*€/gi;
 const candidates=[...plain.matchAll(regex)].slice(0,30).map(m=>({amountText:m[1],evidence:m[0].slice(0,160),status:'UNVERIFIED_CANDIDATE'}));
 return {brand:source.brand,model:source.model,url:source.url,status:'RESEARCH_ONLY',candidates};
}
async function main(){
 const config=JSON.parse(fs.readFileSync(process.argv[2]||'docs/price-official-sources.json','utf8'));
 if(!Array.isArray(config.sources))throw Error('sources must be array');
 const out=[];
 for(const source of config.sources){try{out.push(await inspect(source));}catch(e){out.push({brand:source.brand,model:source.model,url:source.url,status:'SOURCE_ERROR',error:e.message});}}
 process.stdout.write(JSON.stringify({mode:'READ_ONLY',checked:out.length,results:out},null,2)+'\n');
}
if(require.main===module)main().catch(e=>{console.error(e.message);process.exitCode=1;});
module.exports={privateIp,inspect};
