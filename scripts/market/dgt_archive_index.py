#!/usr/bin/env python3
"""Discover official DGT monthly registration archives; do not infer sales figures."""
import argparse
import datetime as dt
import json
import re
import urllib.request
from pathlib import Path
from html.parser import HTMLParser

LIST_URL = "https://www.dgt.es/menusecundario/dgt-en-cifras/matraba-listados/matriculaciones-automoviles-mensual.html"
PATTERN = re.compile(r"https://www\.dgt\.es/microdatos/salida/(20\d{2})/(\d{1,2})/vehiculos/matriculaciones/export_mensual_mat_(20\d{4})\.zip")
class Links(HTMLParser):
    def __init__(self):
        super().__init__(); self.urls = []
    def handle_starttag(self, tag, attrs):
        if tag == "a":
            value = dict(attrs).get("href", "")
            if value: self.urls.append(value)

def main():
    p = argparse.ArgumentParser()
    p.add_argument("--output", default="data/market/dgt-archive-index.json")
    p.add_argument("--max-months", type=int, default=36)
    args = p.parse_args()
    req = urllib.request.Request(LIST_URL, headers={"User-Agent":"electricos.eu public data archive indexer (+https://electricos.eu/)"})
    with urllib.request.urlopen(req, timeout=45) as response:
        page = response.read().decode("utf-8", "replace")
    parser = Links(); parser.feed(page)
    from urllib.parse import urljoin
    records = {}
    for raw in parser.urls:
        url = urljoin(LIST_URL, raw)
        match = PATTERN.fullmatch(url)
        if not match: continue
        year, month, code = match.groups()
        if f"{year}{int(month):02d}" != code: continue
        records[code] = {"period":f"{year}-{int(month):02d}", "url":url}
    if not records:
        raise RuntimeError("No valid official DGT monthly ZIP links found; preserving previous index")
    selected = [records[key] for key in sorted(records, reverse=True)[:args.max_months]]
    output = {"source":"DGT — microdatos de matriculaciones mensuales","source_url":LIST_URL,"status":"archive-discovery-only","note":"Archive discovery is NOT validated sales data. No figures should be derived from this index without record-layout validation.","archives":selected}
    target = Path(args.output)
    target.parent.mkdir(parents=True,exist_ok=True)
    new = json.dumps(output,ensure_ascii=False,indent=2)+"\n"
    if not target.exists() or target.read_text(encoding="utf-8") != new:
        target.write_text(new,encoding="utf-8")
    print(f"Found {len(records)} official monthly archives; indexed {len(selected)}. No published statistics changed.")
if __name__=="__main__": main()
