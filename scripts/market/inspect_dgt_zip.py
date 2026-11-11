#!/usr/bin/env python3
"""Inspect DGT monthly ZIP format without publishing unvalidated totals or personal data."""
import argparse
import io
import json
from collections import Counter
import re
import urllib.request
import zipfile
from pathlib import Path

DGT_URL = re.compile(r"^https://www\.dgt\.es/microdatos/salida/20\d{2}/(?:[1-9]|1[0-2])/vehiculos/matriculaciones/export_mensual_mat_20\d{4}\.zip$")

def inspect(url):
    if not DGT_URL.fullmatch(url):
        raise ValueError("Only official monthly DGT matriculation ZIP URLs are accepted")
    request = urllib.request.Request(url, headers={"User-Agent": "electricos.eu DGT data validation"})
    with urllib.request.urlopen(request, timeout=120) as response:
        content = response.read(100_000_001)
    if len(content) > 100_000_000:
        raise ValueError("ZIP exceeds safety limit")
    result = {"source":url,"validated_statistics":False,"files":[]}
    with zipfile.ZipFile(io.BytesIO(content)) as archive:
        for entry in archive.infolist():
            if entry.is_dir():
                continue
            if entry.file_size > 500_000_000:
                raise ValueError("Uncompressed file exceeds safety limit")
            with archive.open(entry) as handle:
                sample = handle.readline(10000)
                lengths = Counter([len(sample.rstrip(b'\r\n'))])
                for _ in range(199):
                    row = handle.readline(10000)
                    if not row: break
                    lengths[len(row.rstrip(b'\r\n'))] += 1
            result["files"].append({
                "name":Path(entry.filename).name,
                "bytes":entry.file_size,
                "first_record_bytes":len(sample.rstrip(b"\r\n")),
                "first_record_encoding_latin1":True,
                "first_record_content_excluded":True,
                "sampled_record_lengths":dict(sorted(lengths.items())),
                "first_record_delimiter_counts":{d:sample.count(d.encode()) for d in (";", "|", ",")},
                "first_record_hex_prefix":sample[:16].hex()
            })
    if not result["files"]:
        raise ValueError("No files in archive")
    return result

def main():
    p=argparse.ArgumentParser()
    p.add_argument("--url",required=True)
    p.add_argument("--output",default="data/market/dgt-format-report.json")
    args=p.parse_args()
    result=inspect(args.url)
    target=Path(args.output)
    target.parent.mkdir(parents=True,exist_ok=True)
    target.write_text(json.dumps(result,indent=2,ensure_ascii=False)+"\n",encoding="utf-8")
    print("Archive structure inspected; no personal records stored or market totals published.")

if __name__=="__main__":main()
