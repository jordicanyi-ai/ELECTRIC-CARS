#!/usr/bin/env python3
"""Build public monthly DGT BEV passenger-car series from official microdata.

Only ordinary registrations of new passenger cars with DGT category BEV.
No personal records leave memory; output is aggregated counts only.
"""
import json
import sys
from collections import Counter,defaultdict
from datetime import date
from pathlib import Path

sys.path.insert(0,str(Path(__file__).resolve().parent))
from aggregate_dgt_review import aggregate

ROOT=Path(__file__).resolve().parents[2]
INDEX=ROOT/"data/market/dgt-archive-index.json"
OUT=ROOT/"data/market/dgt-bev-series.json"
JS=ROOT/"data/sales-ranking.js"

def build():
    index=json.loads(INDEX.read_text())
    periods={}
    for item in index["archives"]:
        period=item["period"]
        print("Processing",period,flush=True)
        if item.get("daily_urls"):
            parts=[aggregate(url) for url in item["daily_urls"]]
            data={"records_scanned":sum(d["records_scanned"] for d in parts),"bev_turismos":sum(d["bev_turismos"] for d in parts),"all_new_turismos":sum(d["all_new_turismos"] for d in parts)}
            def merge_counts(rows,keys):
                counts=Counter()
                for d in rows:
                    for x in d:counts[tuple(x[k] for k in keys)]+=x["count"]
                return [dict(zip(keys,key),count=count) for key,count in counts.most_common()]
            data["brand_counts"]=merge_counts([d["brand_counts"] for d in parts],["brand"])
            data["model_counts"]=merge_counts([d["model_counts"] for d in parts],["brand","model"])
            regions={}
            for part in parts:
                for name,region in part["regions"].items():
                    group=regions.setdefault(name,[]);group.append(region)
            data["regions"]={name:{"total":sum(d["total"] for d in group),"all_new_turismos":sum(d["all_new_turismos"] for d in group),"brand_counts":merge_counts([d["brand_counts"] for d in group],["brand"]),"model_counts":merge_counts([d["model_counts"] for d in group],["brand","model"])} for name,group in regions.items()}
            tech=Counter()
            for part in parts:tech.update(part["technologies"])
            data["technologies"]=dict(tech)
            data["provisional"]=True
        else:
            data=aggregate(item["url"])
        if data["records_scanned"]<1000 or data["bev_turismos"]<50:
            raise RuntimeError("Unexpectedly small month "+period)
        if sum(data["technologies"].values())!=data["all_new_turismos"]:
            raise RuntimeError("Technology totals do not reconcile with all new cars: "+period)
        if data["technologies"].get("BEV",0)<data["bev_turismos"]:
            raise RuntimeError("BEV technology total lower than validated BEV count: "+period)
        periods[period]=data
    if len(periods)<24: raise RuntimeError("Historical coverage too short")
    if any("regions" not in d for d in periods.values()): raise RuntimeError("Regional breakdown missing")
    latest=max(periods)
    year=latest[:4]
    months=[p for p in sorted(periods) if p.startswith(year)]
    yearly=Counter()
    for p in months:
        for item in periods[p]["model_counts"]:
            yearly[(item["brand"],item["model"])]+=item["count"]
    def top(counter,n=20):
        return [{"model":(model if model.startswith(brand+" ") else brand+" "+model).strip(),"units":count} for (brand,model),count in counter.most_common(n)]
    last=periods[latest]
    monthly=Counter({(x["brand"],x["model"]):x["count"] for x in last["model_counts"]})
    series={"source":"DGT · Microdatos de matriculaciones mensuales","source_url":index["source_url"],
      "method":"COD_CLASE_MAT=0; COD_TIPO=40; COD_PROPULSION_ITV=2; CATEGORIA_VEHICULO_ELECTRICO=BEV; IND_NUEVO_USADO=N",
      "latest_period":latest,"region_method":"COD_PROVINCIA_VEH (domicilio del vehículo) agrupado por comunidad autónoma","months":{p:{"total":d["bev_turismos"],"all_new_turismos":d["all_new_turismos"],"bev_share_pct":round(100*d["bev_turismos"]/d["all_new_turismos"],2) if d["all_new_turismos"] else None,"brands":d["brand_counts"],"models":d["model_counts"],"provisional":d.get("provisional",False),"technologies":d["technologies"],"regions":{name:{"total":region["total"],"all_new_turismos":region["all_new_turismos"],"brands":region["brand_counts"],"models":region["model_counts"]} for name,region in d["regions"].items()}} for p,d in sorted(periods.items())}}
    # Guard against regressions: only replace after all downloads and validation succeed.
    text=json.dumps(series,ensure_ascii=False,separators=(",",":"))+"\n"
    ranking={"source":"DGT · Microdatos de matriculaciones mensuales","updatedAt":date.today().isoformat(),
      "monthly":{"label":latest+" · DGT · Turismos BEV nuevos","models":top(monthly,20)},
      "yearly":{"label":year+" · Enero–"+latest[5:]+" · DGT · Turismos BEV nuevos","models":top(yearly,20)}}
    OUT.parent.mkdir(parents=True,exist_ok=True)
    OUT.write_text(text,encoding="utf-8")
    JS.write_text("window.electricosSalesRanking = "+json.dumps(ranking,ensure_ascii=False,indent=2)+";\n",encoding="utf-8")
    print("SUCCESS",len(periods),"months",latest,last["bev_turismos"],"BEV",flush=True)

if __name__=="__main__":build()
