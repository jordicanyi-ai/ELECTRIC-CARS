#!/usr/bin/env python3
"""Prepare review-only transparent ranking thumbnails from a manually verified source manifest.
No scraping, no publishing, no overwriting existing site thumbnails.
"""
import argparse, csv, io, json, pathlib, urllib.parse, urllib.request
from PIL import Image, ImageOps
from rembg import remove, new_session

ROOT=pathlib.Path(__file__).resolve().parents[1]
MANIFEST=ROOT/"data/ranking-thumbnail-sources.csv"
OUTPUT=ROOT/"tmp/ranking-thumbnails-review"
SIZE=(600,320)
def main():
    parser=argparse.ArgumentParser()
    parser.add_argument("--model",help="Optional model slug")
    args=parser.parse_args()
    OUTPUT.mkdir(parents=True,exist_ok=True)
    session=None
    report=[]
    with MANIFEST.open(newline="",encoding="utf-8") as f:
        entries=list(csv.DictReader(f))
    for entry in entries:
        slug=entry["slug"].strip()
        url=entry["image_url"].strip()
        if args.model and slug!=args.model: continue
        if not url:
            report.append({"slug":slug,"status":"pending_source"});continue
        parsed=urllib.parse.urlparse(url)
        if parsed.scheme!="https" or not parsed.netloc:
            report.append({"slug":slug,"status":"invalid_https_url"});continue
        if entry["usage_checked"].strip().lower()!="yes" or entry["left_facing_verified"].strip().lower()!="yes":
            report.append({"slug":slug,"status":"requires_license_and_orientation_review"});continue
        try:
            req=urllib.request.Request(url,headers={"User-Agent":"electricos.eu thumbnail preparation contact electricos.eu@gmail.com"})
            with urllib.request.urlopen(req,timeout=25) as response:
                raw=response.read(12_000_001)
            if len(raw)>12_000_000: raise ValueError("source too large")
            original=ImageOps.exif_transpose(Image.open(io.BytesIO(raw))).convert("RGBA")
            if session is None: session=new_session("u2net")
            cut=remove(original,session=session).convert("RGBA")
            bbox=cut.getchannel("A").getbbox()
            if not bbox: raise ValueError("no visible foreground")
            cut=cut.crop(bbox)
            cut.thumbnail((510,255),Image.Resampling.LANCZOS)
            canvas=Image.new("RGBA",SIZE,(255,255,255,0))
            canvas.alpha_composite(cut,((SIZE[0]-cut.width)//2,(SIZE[1]-cut.height)//2))
            target=OUTPUT/(slug+".webp")
            canvas.save(target,"WEBP",quality=88,method=6)
            report.append({"slug":slug,"status":"review_required","file":str(target.relative_to(ROOT)),"source":url,"attribution":entry["attribution"]})
        except Exception as e:
            report.append({"slug":slug,"status":"error","reason":str(e)[:180]})
    (OUTPUT/"report.json").write_text(json.dumps(report,ensure_ascii=False,indent=2),encoding="utf-8")
    print(json.dumps({"ready_for_review":sum(x["status"]=="review_required" for x in report),"pending":sum(x["status"]!="review_required" for x in report)},indent=2))
if __name__=="__main__":main()
