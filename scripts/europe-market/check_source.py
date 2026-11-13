#!/usr/bin/env python3
"""Monitor Ember's public dataset update date; do not modify published rankings."""
import datetime, json, pathlib, re, urllib.request
URL="https://ember-energy.org/data/monthly-ev-sales-data/"
request=urllib.request.Request(URL,headers={"User-Agent":"electricos.eu source freshness monitor/1.0"})
with urllib.request.urlopen(request,timeout=25) as response:
    html=response.read(2_000_000).decode("utf-8","replace")
match=re.search(r"Last Updated.{0,300}?(\d{1,2}\s+[A-Za-z]+\s+20\d{2})",re.sub(r"<[^>]+>"," ",html),re.I|re.S)
result={"checked_at":datetime.datetime.now(datetime.timezone.utc).isoformat(),"source":URL,"last_updated":match.group(1) if match else None,"status":"date_found" if match else "needs_manual_review","publication":"disabled","note":"Country totals only; no model-level data"}
path=pathlib.Path("reports/europe-market-source-check.json")
path.parent.mkdir(parents=True,exist_ok=True)
path.write_text(json.dumps(result,indent=2)+"\n",encoding="utf-8")
print(json.dumps(result))
if not match: raise SystemExit("Unable to parse source update date: review page format")
