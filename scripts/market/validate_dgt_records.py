#!/usr/bin/env python3
"""Validate the physical structure of official DGT monthly files.

This does not interpret vehicle fields or publish market totals. DGT's official
fixed-width field specification must be applied before aggregating BEV counts.
"""
import argparse
import io
import json
import urllib.request
import zipfile
from collections import Counter
from pathlib import Path

from inspect_dgt_zip import DGT_URL

def validate(url):
    if not DGT_URL.fullmatch(url):
        raise ValueError("Not an official DGT monthly matriculation URL")
    request = urllib.request.Request(url, headers={"User-Agent":"electricos.eu public DGT data validator"})
    with urllib.request.urlopen(request, timeout=120) as response:
        data = response.read(250_000_001)
    if len(data) > 250_000_000:
        raise ValueError("Compressed archive exceeds limit")
    with zipfile.ZipFile(io.BytesIO(data)) as archive:
        names = [name for name in archive.namelist() if name.lower().endswith(".txt")]
        if len(names) != 1:
            raise ValueError("Expected exactly one DGT TXT file")
        counts = Counter()
        rows = 0
        with archive.open(names[0]) as handle:
            header = handle.readline(10000).rstrip(b"\r\n")
            for raw in handle:
                rows += 1
                counts[len(raw.rstrip(b"\r\n"))] += 1
        if not rows or len(counts) != 1:
            raise ValueError(f"Unexpected record lengths: {dict(counts)}")
        width = next(iter(counts))
        if width != 714:
            raise ValueError(f"Unexpected record width {width}; schema review required")
        return {"source":url,"header_bytes":len(header),"record_bytes":width,
                "record_count":rows,"physical_layout_validated":True,
                "vehicle_type_classified":False,"market_totals_validated":False}

def main():
    p = argparse.ArgumentParser()
    p.add_argument("--url", required=True)
    p.add_argument("--output",default="data/market/dgt-layout-validation.json")
    args=p.parse_args()
    result=validate(args.url)
    target=Path(args.output)
    target.parent.mkdir(parents=True,exist_ok=True)
    target.write_text(json.dumps(result,indent=2)+"\n",encoding="utf-8")
    print(json.dumps(result,indent=2))

if __name__=="__main__":
    main()
