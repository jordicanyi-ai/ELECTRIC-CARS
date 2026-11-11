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

# DGT COD_PROVINCIA_VEH: provincia de domicilio, no oficina de matriculación.
COMMUNITY_PROVINCES = {
    "Andalucía": "AL CA CO GR H J MA SE",
    "Aragón": "HU TE Z",
    "Asturias": "O",
    "Illes Balears": "IB PM",
    "Canarias": "GC TF",
    "Cantabria": "S",
    "Castilla-La Mancha": "AB CR CU GU TO",
    "Castilla y León": "AV BU LE P SA SG SO VA ZA",
    "Catalunya": "B GI L T",
    "Comunitat Valenciana": "A CS V",
    "Extremadura": "BA CC",
    "Galicia": "C LU OU PO",
    "Madrid": "M",
    "Murcia": "MU",
    "Navarra": "NA",
    "País Vasco": "BI SS VI",
    "La Rioja": "LO",
    "Ceuta": "CE",
    "Melilla": "ML",
}
PROVINCE_COMMUNITY = {province: name for name, codes in COMMUNITY_PROVINCES.items() for province in codes.split()}

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
        "new_used":line[178:179].decode("latin-1").strip(),
        "province":line[152:154].decode("latin-1").strip().upper(),
    }

# Official DGT electric category and propulsion dictionaries.
TECHNOLOGIES = ("BEV","PHEV","HEV","GASOLINA","DIESEL","GAS","OTROS")
def technology(row):
    electric=row["electric_category"]
    propulsion=row["propulsion"]
    if electric in ("BEV","PHEV","HEV"):
        return electric
    if propulsion=="0":return "GASOLINA"
    if propulsion=="1":return "DIESEL"
    if propulsion in ("4","6","7","8"):return "GAS"
    return "OTROS"

def aggregate(url):
    if not (DGT_URL.fullmatch(url) or re.fullmatch(r"https://www\.dgt\.es/microdatos/salida/20\d{2}/(?:[1-9]|1[0-2])/vehiculos/matriculaciones/export_mat_20\d{6}\.zip",url)):
        raise ValueError("Not an official DGT matriculation ZIP")
    with urllib.request.urlopen(urllib.request.Request(url,headers={"User-Agent":"electricos.eu public data validator"}),timeout=120) as response:
        data=response.read(250_000_001)
    if len(data)>250_000_000:
        raise ValueError("Archive too large")
    brands=Counter(); models=Counter(); total=0; scanned=0; all_new_cars=0
    regions={}; unknown_provinces=Counter(); technology_counts=Counter(); category_pairs=Counter()
    with zipfile.ZipFile(io.BytesIO(data)) as z:
        names=[n for n in z.namelist() if n.lower().endswith(".txt")]
        if len(names)!=1: raise ValueError("Expected one TXT")
        with z.open(names[0]) as stream:
            first=stream.readline().rstrip(b"\r\n")
            if len(first)==714:
                # Some official monthly archives have no explanatory header.
                stream.seek(0)
            elif not (len(first)==79 and first.startswith(b"Veh")):
                raise ValueError("Unexpected header or record layout")
            for raw in stream:
                scanned+=1
                row=parse_record(raw.rstrip(b"\r\n"))
                if row["plate_class"]!="0" or row["vehicle_type"]!="40" or row["new_used"]!="N":continue
                community=PROVINCE_COMMUNITY.get(row['province'])
                if not community:
                    unknown_provinces[row['province']]+=1
                else:
                    region=regions.setdefault(community, {'total':0,'all_new_turismos':0,'brands':Counter(),'models':Counter()})
                    region['all_new_turismos']+=1
                all_new_cars+=1
                technology_counts[technology(row)]+=1
                category_pairs[(row['propulsion'],row['electric_category'])]+=1
                if row["propulsion"]!="2" or row["electric_category"]!="BEV":continue
                if not row["brand"] or not row["model"]:continue
                total+=1
                if community:
                    region['total']+=1
                    region['brands'][row['brand']]+=1
                    region['models'][(row['brand'],row['model'])]+=1
                brands[row["brand"]]+=1
                models[(row["brand"],row["model"])]+=1
    return {"source":url,"records_scanned":scanned,"bev_turismos":total,"all_new_turismos":all_new_cars,
            "regions":{name:{"total":d["total"],"all_new_turismos":d["all_new_turismos"],"brand_counts":[{"brand":b,"count":n} for b,n in d["brands"].most_common()],"model_counts":[{"brand":b,"model":m,"count":n} for (b,m),n in d["models"].most_common()]} for name,d in sorted(regions.items())},
            "unknown_provinces":dict(unknown_provinces),
            "technologies":dict(technology_counts),
            "technology_source_pairs":[{"propulsion":p,"electric_category":e,"count":n} for (p,e),n in category_pairs.most_common()],
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
