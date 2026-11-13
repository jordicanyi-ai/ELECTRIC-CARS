#!/usr/bin/env python3
"""Discover Ember's official CSV download link, download and validate its signature."""
import html, pathlib, re, urllib.parse, urllib.request
from html.parser import HTMLParser
PAGE="https://ember-energy.org/data/monthly-ev-sales-data/"
class Links(HTMLParser):
    def __init__(self): super().__init__();self.href=None;self.label="";self.links=[]
    def handle_starttag(self,tag,attrs):
        if tag=="a":self.href=dict(attrs).get("href");self.label=""
    def handle_data(self,data):
        if self.href is not None:self.label+=data
    def handle_endtag(self,tag):
        if tag=="a" and self.href:self.links.append((self.label.strip(),html.unescape(self.href)))
        if tag=="a":self.href=None
def request(url):
    req=urllib.request.Request(url,headers={"User-Agent":"Mozilla/5.0 (compatible; electricos.eu-data-check/1.0)"})
    with urllib.request.urlopen(req,timeout=45) as r:return r.read(35_000_000),r.geturl()
page,_=request(PAGE)
parser=Links();parser.feed(page.decode("utf-8","replace"))
candidates=[urllib.parse.urljoin(PAGE,u) for label,u in parser.links if ("monthly ev sales" in label.lower() and ("csv" in label.lower() or ".csv" in u.lower()))]
if len(candidates)!=1:raise SystemExit("Expected exactly one official Monthly EV sales CSV link; found "+str(len(candidates))+"; manual review required")
url=candidates[0]
if urllib.parse.urlparse(url).scheme!="https":raise SystemExit("Unsafe CSV URL")
data,final_url=request(url)
if not data[:1000].lstrip().lower().startswith(b"area,") and b"drivetrain" not in data[:2000].lower():raise SystemExit("Downloaded file is not an expected CSV; no publication")
out=pathlib.Path("reports/ember-monthly-ev-sales.csv");out.parent.mkdir(parents=True,exist_ok=True);out.write_bytes(data)
print("Downloaded",len(data),"bytes from",final_url,"to",out)
