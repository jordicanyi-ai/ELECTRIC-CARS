#!/usr/bin/env python3
"""Aggregate DGT electric passenger-car registrations from fixed-width monthly TXT.

Official layout: MATRICULACIONES_MATRABA.pdf (DGT), fields 1-9.
Only ordinary plates (0), passenger cars (40), electric propulsion (2).
This is a review dataset, not a verified BEV publication: DGT electric category
(BEV/PHEV/HEV) must be checked before public release.
"""
import argparse
import io
import json
import re
import urllib.request
import zipfile
from collections import Counter
from pathlib import Path

from inspect_dgt_zip import DGT_URL

def parse_record(line):
    if len(line) != 714:
        raise ValueError("Unexpected DGT record width")
    return {
        "plate_class":line[8:9].decode("latin-1").strip(),
        "brand":line[17:47].decode("latin-1").strip().upper(),
        "model":line[47:69].decode("latin-1").strip().upper(),
        "vehicle_type":line[91:93].decode("latin-1").strip(),
        "propulsion":line[93:94].decode("latin-1").strip(),
        "electric_category":line[453:457].decode("latin-1").strip(),
    }

def aggregate(url):
    if not DGT_URL.fullmatch(url):
        raise ValueError("Not a DGT official monthly ZIP")
    with urllib.request.urlopen(urllib.request.Request(url,headers={"User-Agent":"electricos.eu public data validator"}),timeout=120) as response:
        data=response.read(250_000_001)
    if len(data)>250_000_000:
        raise ValueError("Archive too large")
    brands=Counter(); models=Counter(); total=0; scanned=0
    with zipfile.ZipFile(io.BytesIO(data)) as z:
        names=[n for n in z.namelist() if n.lower().endswith(".txt")]
        if len(names)!=1: raise ValueError("Expected one TXT")
        with z.open(names[0]) as stream:
            first=stream.readline().rstrip(b"\r\n")
            if len(first)!=79: raise ValueError("Unexpected header")
            for raw in stream:
                scanned+=1
                row=parse_record(raw.rstrip(b"\r\n"))
                if row["plate_class"]!="0" or row["vehicle_type"]!="40" or row["propulsion"]!="2" or row["electric_category"]!="BEV":continue
                if not row["brand"] or not row["model"]:continue
                total+=1
                brands[row["brand"]]+=1
                models[(row["brand"],row["model"])]+=1
    return {"source":url,"records_scanned":scanned,"bev_turismos":total,
            "brand_counts":[{"brand":k,"count":v} for k,v in brands.most_common()],
            "model_counts":[{"brand":b,"model":m,"count":v} for (b,m),v in models.most_common()],
            "status":"review-only","bev_category_validated":True,
            "warning":"DGT BEV category filter applied; still review period, registration class and model normalization before publication."}

def main():
    p=argparse.ArgumentParser()
    p.add_argument("--url",required=True)
    p.add_argument("--output",default="data/market/dgt-electric-review.json")
    a=p.parse_args()
    result=aggregate(a.url)
    target=Path(a.output);target.parent.mkdir(parents=True,exist_ok=True)
    target.write_text(json.dumps(result,ensure_ascii=False,indent=2)+"\n",encoding="utf-8")
    print(f"Reviewed {result['records_scanned']} records; electric propulsion candidates: {result['bev_turismos']}. Not published.")

if __name__=="__main__":main()
