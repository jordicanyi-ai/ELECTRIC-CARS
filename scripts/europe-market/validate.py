#!/usr/bin/env python3
"""Stage Ember monthly BEV registrations by country. Does not publish to website."""
import argparse, csv, datetime, json, pathlib
from collections import defaultdict

def main():
    p=argparse.ArgumentParser()
    p.add_argument("csv_file",type=pathlib.Path)
    p.add_argument("--output",type=pathlib.Path,default=pathlib.Path("reports/europe-market-preview.json"))
    args=p.parse_args()
    with args.csv_file.open(encoding="utf-8-sig",newline="") as f:
        reader=csv.DictReader(f)
        required={"Area","Date","Drivetrain","Registrations","Area type"}
        if not reader.fieldnames or not required.issubset(reader.fieldnames):
            raise SystemExit("Ember CSV schema changed: "+str(reader.fieldnames))
        data=defaultdict(dict)
        for row in reader:
            if row["Area type"].strip()!="Country or economy": continue
            if row["Drivetrain"].strip()!="Battery electric": continue
            try:
                month=datetime.date.fromisoformat(row["Date"][:10]).strftime("%Y-%m")
                value=int(float(row["Registrations"].replace(",","")))
            except (ValueError,KeyError) as exc:
                raise SystemExit("Invalid monthly registration: "+str(row)) from exc
            if value<0: raise SystemExit("Negative registrations")
            area=row["Area"].strip()
            if area in data[month]: raise SystemExit("Duplicate area/month: "+area+" "+month)
            data[month][area]=value
    if not data: raise SystemExit("No country BEV records; check CSV format")
    output={"source":"Ember Monthly EV Sales Data","source_url":"https://ember-energy.org/data/monthly-ev-sales-data/","license":"CC BY 4.0","publication":"disabled","scope":"country-level BEV registrations, NOT model rankings","monthly":dict(sorted(data.items()))}
    args.output.parent.mkdir(parents=True,exist_ok=True)
    args.output.write_text(json.dumps(output,ensure_ascii=False,indent=2)+"\n",encoding="utf-8")
    print("Validated",len(data),"months and",sum(map(len,data.values())),"records. Website unchanged.")
if __name__=="__main__":main()
