#!/usr/bin/env python3
"""
Build src/geo.json: ZIP -> [lat, lng] centroids for the area we quote.

Coverage rule:
  - every ZIP within RADIUS_MI miles of the depot (great-circle), PLUS
  - all of the KEEP_WHOLE states regardless of distance (so home-state lanes
    that sit just past the ring don't fall off the map).

This feeds the distance regime: any ZIP with a centroid gets a real
depot-to-destination distance, so out-of-area quotes scale with mileage.

Source: U.S. Census ZCTA Gazetteer (public domain).
    python3 model/build/build_geo.py
"""
import urllib.request, zipfile, io, json, os, math

GAZ = "https://www2.census.gov/geo/docs/maps-data/data/gazetteer/2023_Gazetteer/2023_Gaz_zcta_national.zip"
ORIGIN = (34.12, -83.79)        # Buford / Braselton depot
RADIUS_MI = 200                 # geocode everything within this ring of the depot
# states kept whole regardless of distance, by 3-digit ZIP prefix: GA + SC
KEEP_WHOLE = set([f"{p:03d}" for p in list(range(300, 320)) + [398, 399]] + [f"{p:03d}" for p in range(290, 300)])
OUT = os.path.join(os.path.dirname(__file__), "..", "..", "src", "geo.json")


def miles(a, b):
    R = 3958.8
    (la1, lo1), (la2, lo2) = a, b
    p1, p2 = math.radians(la1), math.radians(la2)
    dphi, dl = math.radians(la2 - la1), math.radians(lo2 - lo1)
    x = math.sin(dphi / 2) ** 2 + math.cos(p1) * math.cos(p2) * math.sin(dl / 2) ** 2
    return 2 * R * math.asin(math.sqrt(x))


def main(local_zip=None):
    raw = open(local_zip, "rb").read() if local_zip else urllib.request.urlopen(GAZ).read()
    zf = zipfile.ZipFile(io.BytesIO(raw))
    name = [n for n in zf.namelist() if n.endswith(".txt")][0]
    lines = zf.read(name).decode("latin-1").splitlines()
    hdr = lines[0].split("\t")

    def idx(k):
        return next(i for i, h in enumerate(hdr) if h.strip().upper() == k)

    gi, la, lo = idx("GEOID"), idx("INTPTLAT"), idx("INTPTLONG")
    geo = {}
    for ln in lines[1:]:
        c = ln.split("\t")
        if len(c) <= max(gi, la, lo):
            continue
        z = c[gi].strip()
        try:
            lat, lng = float(c[la]), float(c[lo].strip())
        except (ValueError, IndexError):
            continue
        if z[:3] in KEEP_WHOLE or miles(ORIGIN, (lat, lng)) <= RADIUS_MI:
            geo[z] = [round(lat, 4), round(lng, 4)]
    json.dump(geo, open(OUT, "w"), separators=(",", ":"))
    print("wrote", os.path.relpath(OUT), "zips:", len(geo))


if __name__ == "__main__":
    import sys
    main(sys.argv[1] if len(sys.argv) > 1 else None)
