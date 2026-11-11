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
    p.add_argument("--since-year", type=int, default=2024, help="Retain all monthly archives from this year onward")
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
    # Fill only the latest missing closed month from official daily archives.
    daily_url = "https://www.dgt.es/menusecundario/dgt-en-cifras/matraba-listados/matriculaciones-automoviles-diario.html"
    daily_pattern = re.compile(r"https://www\\.dgt\\.es/microdatos/salida/(20\\d{2})/(\\d{1,2})/vehiculos/matriculaciones/export_mat_(20\\d{6})\\.zip")
    with urllib.request.urlopen(urllib.request.Request(daily_url, headers={"User-Agent":"electricos.eu public data archive indexer"}), timeout=45) as response:
        daily_page=response.read().decode("utf-8","replace")
    daily_parser=Links();daily_parser.feed(daily_page)
    daily_by_month={}
    for raw in daily_parser.urls:
        url=urljoin(daily_url,raw)
        match=daily_pattern.fullmatch(url)
        if not match:continue
        year,month,stamp=match.groups()
        if stamp[:6]!=f"{year}{int(month):02d}":continue
        daily_by_month.setdefault(f"{year}{int(month):02d}",{})[stamp]=url
    today=dt.date.today()
    for code,files in daily_by_month.items():
        if code in records or int(code[:4])<args.since_year:continue
        year=int(code[:4]);month=int(code[4:])
        if (year,month)>=(today.year,today.month):continue
        # Require end-of-month coverage and a useful number of published daily files.
        import calendar
        last=calendar.monthrange(year,month)[1]
        if len(files)<15 or max(int(day[-2:]) for day in files)<last-2:continue
        records[code]={"period":f"{year}-{month:02d}","daily_urls":[files[k] for k in sorted(files)],"provisional":True}
    if not records:
        raise RuntimeError("No valid official DGT monthly ZIP links found; preserving previous index")
    selected = [records[key] for key in sorted(records) if int(key[:4]) >= args.since_year]
    output = {"source":"DGT — microdatos de matriculaciones mensuales","source_url":LIST_URL,"status":"archive-discovery-only","since_year":args.since_year,"note":"Archive discovery is NOT validated sales data. No figures should be derived from this index without record-layout validation.","archives":selected}
    target = Path(args.output)
    target.parent.mkdir(parents=True,exist_ok=True)
    new = json.dumps(output,ensure_ascii=False,indent=2)+"\n"
    if not target.exists() or target.read_text(encoding="utf-8") != new:
        target.write_text(new,encoding="utf-8")
    print(f"Found {len(records)} official monthly archives; indexed {len(selected)} since {args.since_year}. No published statistics changed.")
if __name__=="__main__": main()
