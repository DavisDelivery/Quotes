#!/usr/bin/env python3
"""
Pull Uline DAS delivery rows from Firestore (REST runQuery) for a date range
and write them to data/das_<start>_<end>.json. build_model.py consumes every
JSON array in data/.

The Firestore project and web API key are the public web config (read-only,
public rules). Set DAVIS_FIRESTORE_KEY in the environment rather than hardcoding:

    export DAVIS_FIRESTORE_KEY=<public web api key>
    python3 model/build/pull_das.py 2025-01-01 2026-01-01
    python3 model/build/pull_das.py 2026-01-01 2026-06-23
"""
import os, sys, json, urllib.request

PROJECT = "davismarginiq"
KEY = os.environ.get("DAVIS_FIRESTORE_KEY", "")
START = sys.argv[1] if len(sys.argv) > 1 else "2025-01-01"
END = sys.argv[2] if len(sys.argv) > 2 else "2026-01-01"
URL = ("https://firestore.googleapis.com/v1/projects/%s/databases/(default)/"
       "documents:runQuery?key=%s" % (PROJECT, KEY))


def run(cursor=None):
    sq = {
        "from": [{"collectionId": "das_line_items"}],
        "where": {"compositeFilter": {"op": "AND", "filters": [
            {"fieldFilter": {"field": {"fieldPath": "pu_date"}, "op": "GREATER_THAN_OR_EQUAL", "value": {"stringValue": START}}},
            {"fieldFilter": {"field": {"fieldPath": "pu_date"}, "op": "LESS_THAN", "value": {"stringValue": END}}},
        ]}},
        "orderBy": [{"field": {"fieldPath": "pu_date"}}, {"field": {"fieldPath": "__name__"}}],
        "limit": 1000,
    }
    if cursor:
        sq["startAt"] = {"values": cursor, "before": False}
    req = urllib.request.Request(URL, data=json.dumps({"structuredQuery": sq}).encode(),
                                 headers={"Content-Type": "application/json"})
    return json.load(urllib.request.urlopen(req))


def val(v):
    for t in ("stringValue", "integerValue", "doubleValue", "booleanValue"):
        if t in v:
            return v[t]
    return None


def main():
    if not KEY:
        raise SystemExit("Set DAVIS_FIRESTORE_KEY (public web API key) in the environment.")
    out, cursor, pages = [], None, 0
    while True:
        res = run(cursor)
        got, lastdoc = 0, None
        for e in res:
            d = e.get("document")
            if not d:
                continue
            row = {k: val(x) for k, x in d["fields"].items()}
            for nk in ("cost", "rate", "new_cost", "extra_cost", "weight", "skid", "loose"):
                if row.get(nk) is not None:
                    try:
                        row[nk] = float(row[nk])
                    except (TypeError, ValueError):
                        pass
            out.append(row); got += 1; lastdoc = d
        pages += 1
        if got < 1000 or pages > 400:
            break
        cursor = [{"stringValue": lastdoc["fields"]["pu_date"]["stringValue"]},
                  {"referenceValue": lastdoc["name"]}]
    os.makedirs("data", exist_ok=True)
    fn = "data/das_%s_%s.json" % (START, END)
    json.dump(out, open(fn, "w"))
    print("wrote %s  rows: %d  pages: %d" % (fn, len(out), pages))


if __name__ == "__main__":
    main()
