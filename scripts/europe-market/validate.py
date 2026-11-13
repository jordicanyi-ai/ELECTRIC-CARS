#!/usr/bin/env python3
"""Validate and stage monthly European BEV registration data without publishing."""
import argparse, csv, json, pathlib, datetime
from collections import defaultdict

def main():
    p=argparse.ArgumentParser()
    p.add_argument("csv_file",type=pathlib.Path)
    p.add_argument("--output",type=pathlib.Path,default=pathlib.Path("reports/europe-market-preview.json"))
    args=p.parse_args()
    rows=list(csv.DictReader(args.csv_file.open(encoding="utf-8-sig",newline="")))
    required={"Area","Date","Drivetrain","Registrations","Area type"}
    if not rows or not required.issubset(rows[0]): raise SystemExit("Missing required Ember CSV columns")
    out=defaultdict(dict)
    for r in rows:
        if r["Drivetrain"].strip().lower() not in ("battery electric","bev"): continue
        if r["Area type"].strip().lower() not in ("country or economy", "region"): continue
        try:
            date=datetime.date.fromisoformat(r["Date"][:10])
            count=int(float(r["Registrations"].replace(",","")))
        except (ValueError,KeyError): continue
        if count<0: raise SystemExit("Negative registrations")
        key=date.strftime("%Y-%m")
        country=r["Area"].strip()
        if country in out[key]: raise SystemExit(f"Duplicate {country} {key}")
        out[key][country]=count
    if not out: raise SystemExit("No BEV records found; check schema")
    payload={"source":"Ember Monthly EV Sales Data","source_url":"https://ember-energy.org/data/monthly-ev-sales-data/","status":"preview_only","scope":"country BEV totals; not model rankings","months":dict(sorted(out.items()))}
    args.output.parent.mkdir(parents=True,exist_ok=True)
    args.output.write_text(json.dumps(payload,ensure_ascii=False,indent=2)+"\n",encoding="utf-8")
    print(f"Validated {len(out)} months; wrote preview to {args.output}. No website data changed.")
if __name__=="__main__":main()
