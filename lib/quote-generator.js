// Built artifact — Uline rate console library (ESM). React is external.
// Source: src/UlineQuoteConsole.jsx + src/model.json. Rebuild: npm run build:lib
import React, { useState, useMemo, useEffect, useRef } from "react";
const M = {
  "zone5": {
    "30318": 68.67,
    "30144": 68.67,
    "30288": 68.67,
    "30297": 68.67,
    "30139": 71.58,
    "30071": 65.77,
    "30336": 68.67,
    "30530": 65.77,
    "30253": 71.58,
    "30009": 65.77,
    "30122": 68.67,
    "30184": 68.67,
    "30308": 68.67,
    "30349": 68.67,
    "30252": 71.58,
    "30143": 71.58,
    "30188": 68.67,
    "30024": 65.77,
    "30005": 65.77,
    "30092": 65.77,
    "30701": 71.58,
    "30312": 68.67,
    "30152": 68.67,
    "30340": 68.67,
    "30066": 68.67,
    "30094": 65.77,
    "30263": 71.58,
    "30106": 68.67,
    "30534": 68.67,
    "30337": 68.67,
    "30107": 68.67,
    "30331": 68.67,
    "30044": 65.77,
    "30518": 65.77,
    "30120": 71.58,
    "30326": 68.67,
    "30290": 68.67,
    "30060": 68.67,
    "30121": 71.58,
    "30022": 65.77,
    "30350": 68.67,
    "30041": 65.77,
    "30303": 68.67,
    "30097": 65.77,
    "30096": 65.77,
    "30354": 68.67,
    "30260": 65.77,
    "30650": 71.58,
    "30004": 65.77,
    "30080": 65.77,
    "30062": 68.67,
    "30339": 68.67,
    "30341": 68.67,
    "30361": 68.67,
    "30047": 65.77,
    "30601": 68.67,
    "30046": 65.77,
    "30012": 65.77,
    "30553": 71.58,
    "30093": 65.77,
    "30040": 65.77,
    "30067": 68.67,
    "30082": 65.77,
    "30501": 65.77,
    "30084": 65.77,
    "30548": 65.77,
    "30720": 71.58,
    "30043": 65.77,
    "30168": 68.67,
    "30126": 68.67,
    "30045": 65.77,
    "30542": 65.77,
    "30014": 68.67,
    "30017": 68.67,
    "30344": 68.67,
    "30621": 71.58,
    "30360": 68.67,
    "30269": 71.58,
    "30214": 68.67,
    "30517": 65.77,
    "30622": 68.67,
    "30034": 65.77,
    "30313": 68.67,
    "30135": 68.67,
    "30078": 65.77,
    "30338": 68.67,
    "30316": 68.67,
    "30054": 68.67,
    "30281": 71.58,
    "30566": 65.77,
    "30606": 68.67,
    "30265": 71.58,
    "30013": 65.77,
    "30213": 68.67,
    "30607": 68.67,
    "30132": 68.67,
    "30028": 65.77,
    "30025": 65.77,
    "30102": 68.67,
    "30305": 68.67,
    "30030": 68.67,
    "30567": 65.77,
    "30083": 65.77,
    "30329": 68.67,
    "30019": 65.77,
    "30346": 68.67,
    "30655": 68.67,
    "30504": 65.77,
    "30307": 68.67,
    "30236": 68.67,
    "30549": 65.77,
    "30721": 71.58,
    "30294": 68.67,
    "30291": 68.67,
    "30332": 68.67,
    "30068": 68.67,
    "30519": 65.77,
    "30038": 65.77,
    "30087": 65.77,
    "30605": 68.67,
    "30507": 65.77,
    "30315": 68.67,
    "30327": 68.67,
    "30540": 71.58,
    "30680": 65.77,
    "30076": 65.77,
    "30052": 68.67,
    "30008": 65.77,
    "30032": 68.67,
    "30103": 71.58,
    "30309": 68.67,
    "30228": 68.67,
    "30079": 65.77,
    "30101": 68.67,
    "30134": 68.67,
    "30677": 103.01,
    "30319": 68.67,
    "30529": 65.77,
    "30058": 65.77,
    "30705": 71.58,
    "30141": 68.67,
    "30021": 68.67,
    "30115": 68.67,
    "30189": 65.77,
    "30666": 68.67,
    "30656": 68.67,
    "30114": 68.67,
    "30328": 68.67,
    "30345": 68.67,
    "30531": 103.01,
    "30663": 71.58,
    "30064": 68.67,
    "30033": 68.67,
    "30322": 68.67,
    "30506": 65.77,
    "30127": 68.67,
    "30215": 68.67,
    "30317": 68.67,
    "30075": 65.77,
    "30274": 68.67,
    "30620": 68.67,
    "30011": 65.77,
    "30306": 68.67,
    "30554": 68.67,
    "30543": 68.67,
    "30324": 68.67,
    "30268": 68.67,
    "30342": 68.67,
    "30039": 65.77,
    "30320": 68.67,
    "30069": 68.67,
    "30724": 71.58,
    "30157": 68.67,
    "30035": 65.77,
    "30314": 68.67,
    "30510": 103.01,
    "30063": 68.67,
    "30310": 68.67,
    "30558": 65.77,
    "30511": 103.01,
    "30536": 71.58,
    "30602": 68.67,
    "30171": 68.67,
    "30088": 65.77,
    "30311": 68.67,
    "30183": 68.67,
    "30521": 68.67,
    "30002": 68.67,
    "30238": 68.67,
    "30575": 71.58,
    "30177": 68.67,
    "30148": 68.67,
    "30137": 71.58,
    "30547": 71.58,
    "30273": 68.67,
    "30334": 68.67,
    "30175": 68.67,
    "30363": 71.58,
    "30296": 65.77,
    "30734": 71.58
  },
  "zone3": {
    "303": 68.67,
    "301": 68.67,
    "302": 71.58,
    "300": 65.77,
    "305": 65.77,
    "307": 71.58,
    "306": 68.67
  },
  "global_": 68.67,
  "fuel_embedded": 0.28,
  "KN": [0, 100, 200, 300, 400, 460, 500, 540, 580, 620, 660, 700, 740, 780, 840, 920, 1000, 1080, 1160, 1240, 1320, 1420, 1520, 1650, 1800, 2000, 2300, 2800, 3500, 5000, 8000, 99999],
  "curves": {
    "65.77": [[0, 51.383], [100, 51.383], [200, 51.383], [300, 51.383], [400, 51.383], [460, 52.067], [500, 54.56], [540, 58.712], [580, 62.832], [620, 66.592], [660, 71.158], [700, 75.217], [740, 77.742], [780, 77.789], [840, 77.789], [920, 77.742], [1000, 80.267], [1080, 85.837], [1160, 93.352], [1240, 98.867], [1320, 104.754], [1420, 115.342], [1520, 119.293], [1650, 119.293], [1800, 119.42], [2000, 123.089], [2300, 149.122], [2800, 170.635], [3500, 228.043]],
    "68.67": [[0, 53.65], [100, 53.65], [200, 53.65], [300, 53.65], [400, 53.65], [460, 53.65], [500, 55.128], [540, 59.4], [580, 62.575], [620, 68.073], [660, 70.016], [700, 73.592], [740, 76.333], [780, 75.492], [840, 74.629], [920, 74.682], [1000, 79.711], [1080, 88.951], [1160, 90.22], [1240, 95.583], [1320, 105.116], [1420, 109.919], [1520, 112.528], [1650, 112.492], [1800, 126.537], [2000, 126.789], [2300, 140.728], [2800, 172.9], [3500, 230.308]],
    "103.01": [[0, 80.48], [100, 80.483], [200, 80.483], [300, 80.483], [400, 80.48], [460, 80.48], [500, 80.483], [540, 80.483], [580, 80.483], [620, 80.482], [660, 98.47], [700, 102.404], [740, 81.187], [780, 104.728], [840, 104.682], [920, 80.483], [1000, 107.466], [1080, 113.245], [1160, 120.105], [1240, 94.398], [1320, 133.228], [1420, 138.569], [1520, 146.121], [1650, 146.121], [1800, 146.694], [2000, 153.344], [2300, 170.796], [2800, 199.729], [3500, 257.136]],
    "71.58": [[0, 55.917], [100, 55.917], [200, 55.917], [300, 55.919], [400, 55.919], [460, 55.919], [500, 56.719], [540, 60.592], [580, 65.167], [620, 68.817], [660, 74.235], [700, 78.195], [740, 80.958], [780, 82.072], [840, 82.488], [920, 80.233], [1000, 82.224], [1080, 87.846], [1160, 95.462], [1240, 102.87], [1320, 107.483], [1420, 128.919], [1520, 134.775], [1650, 122.122], [1800, 135.569], [2000, 135.147], [2300, 152.333], [2800, 175.174], [3500, 232.582]]
  },
  "pk": [[0, 53.65], [100, 53.65], [200, 53.65], [300, 53.65], [400, 53.65], [460, 53.65], [500, 55.341], [540, 59.219], [580, 63.152], [620, 67.21], [660, 71.642], [700, 75.576], [740, 77.792], [780, 77.9], [840, 77.854], [920, 77.792], [1000, 80.638], [1080, 86.417], [1160, 93.276], [1240, 98.837], [1320, 106.4], [1420, 111.741], [1520, 119.293], [1650, 119.293], [1800, 119.865], [2000, 126.516], [2300, 143.967], [2800, 172.9], [3500, 230.308]],
  "SKB": [1, 2, 3, 4, 6, 9, 99],
  "LOB": [0, 1, 2, 4, 8, 16, 999],
  "WBc": [0, 500, 800, 1200, 2000, 4000, 99999],
  "resM": {
    "68.67|0|0|0": 0.0,
    "65.77|4|0|3": 0.049,
    "68.67|1|0|2": 1.659,
    "68.67|0|0|4": -12.639,
    "65.77|0|0|0": 0.0,
    "65.77|2|0|2": -0.456,
    "71.58|0|0|0": -0.005,
    "65.77|0|4|0": 22.442,
    "65.77|1|0|1": -1.74,
    "68.67|1|3|3": 12.793,
    "68.67|1|0|1": -0.187,
    "68.67|0|2|0": 0.0,
    "68.67|1|0|0": 0.0,
    "65.77|3|0|2": -0.665,
    "65.77|0|0|1": -2.352,
    "68.67|1|1|2": 7.281,
    "71.58|2|1|2": 8.725,
    "65.77|0|1|0": 0.0,
    "68.67|3|0|1": 18.066,
    "71.58|0|1|0": -0.003,
    "65.77|1|0|0": 0.0,
    "65.77|2|1|5": -110.086,
    "68.67|0|0|1": -1.478,
    "65.77|1|0|2": -0.021,
    "68.67|1|0|3": 0.519,
    "68.67|3|0|3": 1.069,
    "71.58|2|0|3": -3.998,
    "71.58|0|0|1": -1.966,
    "65.77|3|0|4": -8.104,
    "65.77|4|0|4": -8.272,
    "65.77|0|3|0": 2.415,
    "68.67|2|3|2": 21.477,
    "68.67|0|1|0": 0.0,
    "68.67|2|0|3": 2.08,
    "68.67|3|0|2": 7.005,
    "65.77|1|0|3": -1.699,
    "71.58|0|2|0": -0.003,
    "65.77|3|0|5": -84.054,
    "103.01|0|0|0": -0.0,
    "71.58|1|0|3": -3.985,
    "68.67|0|4|0": 25.405,
    "68.67|0|3|0": 0.0,
    "68.67|4|0|4": -4.739,
    "65.77|2|0|1": 0.503,
    "65.77|5|0|4": -9.914,
    "71.58|1|0|2": -0.855,
    "65.77|0|0|2": -0.616,
    "68.67|2|0|0": 1.28,
    "65.77|0|0|3": -2.242,
    "65.77|3|1|4": -7.673,
    "71.58|1|0|0": -0.003,
    "65.77|2|2|4": 4.59,
    "71.58|0|3|0": 0.0,
    "68.67|1|2|0": 14.092,
    "71.58|0|3|1": 43.341,
    "65.77|2|0|0": 2.605,
    "65.77|3|0|1": 24.46,
    "68.67|0|1|3": -1.407,
    "65.77|2|1|1": 12.817,
    "71.58|3|0|3": -4.757,
    "71.58|1|0|1": -1.916,
    "68.67|1|1|1": 6.664,
    "68.67|3|0|4": -4.692,
    "68.67|4|0|0": 30.64,
    "65.77|2|3|2": 29.398,
    "68.67|2|0|2": 2.004,
    "71.58|3|0|1": 22.492,
    "71.58|2|0|2": -1.09,
    "65.77|2|0|4": -7.295,
    "65.77|2|1|0": 14.25,
    "68.67|0|0|3": -0.127,
    "68.67|3|0|0": 13.586,
    "65.77|2|0|3": -1.055,
    "65.77|1|3|1": 38.299,
    "68.67|0|0|2": -0.744,
    "65.77|0|5|1": 74.259,
    "65.77|3|0|3": -0.709,
    "65.77|0|2|0": 0.0,
    "65.77|0|1|2": -0.947,
    "65.77|0|3|1": 32.897,
    "65.77|5|0|5": -128.182,
    "68.67|2|0|4": -1.993,
    "68.67|3|2|3": 17.481,
    "65.77|0|2|1": 18.063,
    "65.77|1|0|4": -7.933,
    "68.67|3|3|2": 55.223,
    "68.67|0|1|1": 2.42,
    "68.67|1|1|0": 0.0,
    "71.58|1|1|0": -0.003,
    "71.58|3|0|5": -124.194,
    "65.77|1|1|0": 0.0,
    "68.67|1|0|4": -9.616,
    "71.58|0|0|2": -1.292,
    "68.67|0|1|2": 1.896,
    "68.67|2|1|2": 8.375,
    "68.67|2|2|3": 18.534,
    "65.77|3|0|0": 16.309,
    "65.77|2|1|3": 1.763,
    "65.77|5|2|4": -2.441,
    "65.77|1|1|2": 5.39,
    "65.77|3|1|3": 0.441,
    "65.77|0|1|1": 4.752,
    "68.67|0|2|1": 14.401,
    "68.67|4|1|3": 13.934,
    "68.67|1|2|1": 17.189,
    "65.77|4|0|0": 0.0,
    "68.67|4|0|2": 31.481,
    "71.58|0|0|3": -3.299,
    "65.77|3|2|2": 11.891,
    "65.77|1|1|1": 6.83,
    "71.58|5|0|4": -6.366,
    "65.77|2|3|1": 56.571,
    "68.67|1|5|2": 39.322,
    "68.67|2|0|1": 3.173,
    "71.58|1|0|4": -8.988,
    "68.67|3|0|5": -90.987,
    "68.67|1|4|2": 33.017,
    "65.77|2|2|2": 16.777,
    "68.67|1|2|4": 12.033,
    "65.77|1|3|3": 27.977,
    "68.67|4|0|5": -106.361,
    "71.58|4|1|3": -10.591,
    "71.58|4|0|4": -7.655,
    "68.67|1|2|3": 14.903,
    "71.58|1|1|1": -1.448,
    "68.67|5|0|5": -123.296,
    "65.77|4|2|4": 4.033,
    "65.77|0|0|4": -8.605,
    "71.58|2|0|1": 10.765,
    "68.67|0|2|2": 12.349,
    "65.77|1|4|1": 48.851,
    "71.58|0|0|4": -9.136,
    "103.01|1|0|1": -0.006,
    "71.58|2|0|4": -10.334,
    "68.67|2|4|1": 24.896,
    "68.67|2|5|3": 35.921,
    "68.67|3|1|3": 2.206,
    "68.67|3|1|2": 6.201,
    "71.58|0|2|1": 21.066,
    "68.67|1|3|1": 25.771,
    "65.77|1|3|0": 24.039,
    "71.58|3|0|0": 19.103,
    "65.77|1|1|3": 0.09,
    "65.77|0|4|1": 58.452,
    "65.77|2|3|3": 31.616,
    "65.77|4|5|4": 92.593,
    "65.77|1|5|1": 74.532,
    "103.01|0|0|1": -0.675,
    "68.67|1|2|2": 14.921,
    "68.67|1|3|0": 24.459,
    "103.01|0|3|0": 0.0,
    "68.67|0|4|1": 35.041,
    "68.67|5|2|4": 14.687,
    "103.01|1|0|0": 0.0,
    "65.77|2|1|2": 4.583,
    "68.67|2|1|3": 6.309,
    "68.67|5|1|4": -9.422,
    "65.77|1|2|2": 17.744,
    "65.77|1|2|1": 18.199,
    "68.67|5|0|4": -6.258,
    "65.77|0|2|2": 14.792,
    "68.67|2|2|2": 15.668,
    "65.77|2|2|3": 17.016,
    "65.77|3|1|2": 0.506,
    "65.77|1|4|0": 36.372,
    "71.58|0|4|1": 45.259,
    "68.67|4|2|4": 16.775,
    "68.67|4|2|3": 23.618,
    "71.58|3|5|1": 92.607,
    "65.77|1|2|0": 16.631,
    "71.58|1|1|4": -27.057,
    "71.58|2|1|1": 24.948,
    "65.77|0|3|2": 14.852,
    "65.77|3|2|3": 16.23,
    "65.77|0|1|3": -2.642,
    "65.77|1|2|3": 9.434,
    "68.67|4|1|4": -4.62,
    "68.67|3|2|4": -5.142,
    "68.67|0|1|4": -12.87,
    "71.58|5|0|5": -116.375,
    "68.67|1|1|3": 5.36,
    "65.77|3|4|3": 46.118,
    "65.77|3|2|4": 2.926,
    "65.77|4|0|5": -78.366,
    "65.77|1|2|4": -4.389,
    "71.58|4|0|5": -107.023,
    "65.77|1|5|2": 66.875,
    "68.67|4|0|3": 8.711,
    "71.58|4|0|3": -1.08,
    "71.58|5|0|3": 38.202,
    "103.01|0|2|0": -0.003,
    "71.58|1|2|3": 12.464,
    "71.58|3|5|3": 181.305,
    "65.77|0|4|2": 42.734,
    "68.67|3|3|3": 57.934,
    "71.58|0|1|1": -0.642,
    "103.01|1|0|2": -23.812,
    "71.58|2|0|0": 5.631,
    "65.77|0|5|0": 74.617,
    "65.77|4|1|4": -8.978,
    "68.67|2|1|1": 7.348,
    "71.58|3|0|2": 0.856,
    "68.67|3|4|3": 66.451,
    "71.58|3|0|4": -7.89,
    "68.67|3|1|4": -0.724,
    "65.77|2|0|5": -84.621,
    "71.58|0|1|2": -1.954,
    "68.67|1|4|0": 26.9,
    "65.77|4|0|1": 40.572,
    "65.77|5|0|2": 51.3,
    "65.77|5|0|3": 65.424,
    "68.67|2|0|5": -102.628,
    "65.77|5|1|4": -6.319,
    "103.01|0|1|0": 0.0,
    "65.77|3|3|3": 34.592,
    "68.67|3|5|4": 120.805,
    "71.58|2|1|0": -0.004,
    "71.58|1|3|0": 20.964,
    "68.67|3|2|2": 39.227,
    "65.77|3|4|4": 48.384,
    "68.67|5|3|5": -62.237,
    "68.67|5|5|5": 37.457,
    "65.77|2|3|4": 45.826,
    "71.58|0|1|4": -12.437,
    "68.67|5|0|3": 53.048,
    "68.67|1|1|4": -11.924,
    "68.67|2|2|0": 29.242,
    "65.77|2|5|2": 53.738,
    "65.77|4|1|3": 0.925,
    "65.77|2|1|4": -6.668,
    "71.58|0|4|0": 19.228,
    "68.67|2|3|1": 25.167,
    "65.77|5|4|5": -107.592,
    "68.67|0|3|1": 25.275,
    "71.58|1|2|2": 10.852,
    "71.58|1|1|2": 5.997,
    "65.77|4|4|4": 70.611,
    "71.58|1|2|0": 6.228,
    "65.77|2|5|3": 52.561,
    "103.01|4|0|4": -30.93,
    "68.67|3|4|2": 38.729,
    "68.67|1|5|1": 37.042,
    "68.67|5|0|2": 46.018,
    "65.77|3|1|5": -74.152,
    "65.77|0|4|3": 15.702,
    "68.67|2|4|2": 28.618,
    "65.77|3|5|3": 91.162,
    "68.67|2|4|3": 35.063,
    "103.01|3|0|4": -41.065,
    "68.67|0|5|1": 106.514,
    "103.01|2|0|3": -33.729,
    "71.58|0|5|2": 74.742,
    "68.67|3|1|1": 40.339,
    "71.58|0|1|3": -3.672,
    "65.77|1|3|2": 34.583,
    "65.77|1|0|5": -114.643,
    "65.77|4|0|2": 41.442,
    "71.58|2|2|2": 19.356,
    "68.67|4|4|4": 86.123,
    "65.77|4|3|4": 19.396,
    "68.67|1|4|1": 30.045,
    "68.67|2|3|4": 41.757,
    "71.58|1|5|2": 95.445,
    "68.67|2|1|0": 5.67,
    "68.67|1|3|2": 24.304,
    "68.67|0|5|0": 32.428,
    "65.77|3|4|2": 112.141,
    "65.77|3|5|4": 27.289,
    "71.58|0|5|1": 186.958,
    "68.67|1|0|5": -130.545,
    "65.77|5|1|3": 15.29,
    "68.67|2|3|3": 23.223,
    "68.67|3|1|0": 23.759,
    "65.77|1|4|2": 37.277,
    "68.67|3|2|1": 15.329,
    "103.01|0|0|4": -43.428,
    "65.77|2|4|2": 40.499,
    "68.67|3|5|3": 118.112,
    "68.67|5|0|1": 187.108,
    "68.67|4|0|1": 39.861,
    "65.77|5|2|5": -86.637,
    "65.77|4|3|3": 25.091,
    "65.77|5|1|5": -102.93,
    "71.58|4|0|2": 50.638,
    "65.77|3|3|4": 12.139,
    "65.77|1|1|5": -114.64,
    "65.77|1|1|4": -7.577,
    "103.01|3|0|3": -26.661,
    "68.67|5|3|4": 9.66,
    "71.58|1|1|3": -5.482,
    "71.58|1|3|3": 11.715,
    "68.67|2|1|5": -52.888,
    "65.77|4|5|3": 97.56,
    "68.67|4|3|4": 32.259,
    "103.01|0|0|2": -18.758,
    "65.77|2|4|3": 37.792,
    "68.67|5|2|5": -155.755,
    "65.77|2|4|1": 47.888,
    "68.67|2|2|1": 29.668,
    "68.67|2|1|4": -4.479,
    "71.58|1|0|5": -100.91,
    "103.01|2|0|4": -42.473,
    "71.58|0|4|2": 26.691,
    "68.67|1|1|5": -103.19,
    "65.77|3|3|2": 35.488,
    "71.58|2|4|3": 59.654,
    "71.58|1|3|1": 25.841,
    "71.58|3|1|3": 0.474,
    "68.67|0|5|2": 204.334,
    "65.77|5|3|5": -214.359,
    "68.67|0|4|2": 57.886,
    "68.67|4|5|3": 73.342,
    "68.67|0|2|3": 25.378,
    "71.58|2|4|2": 37.931,
    "68.67|0|3|2": 25.848,
    "71.58|1|2|1": 19.021,
    "68.67|1|4|3": 25.131,
    "65.77|2|2|1": 19.679,
    "71.58|4|5|4": 164.498,
    "71.58|0|5|0": 92.311,
    "71.58|1|4|2": 60.413,
    "71.58|3|4|3": 52.134,
    "103.01|2|0|2": -18.975,
    "65.77|0|1|4": -3.936,
    "71.58|2|1|4": -9.934,
    "103.01|3|0|2": -32.476,
    "68.67|2|5|4": 142.574,
    "65.77|0|2|3": 8.607,
    "71.58|1|3|2": 32.924,
    "68.67|0|4|3": 15.91,
    "103.01|2|0|0": -0.001,
    "68.67|5|1|3": 0.829,
    "71.58|4|1|4": -12.161,
    "65.77|2|4|4": 65.607,
    "71.58|1|4|3": 33.419,
    "71.58|2|1|3": -3.923,
    "71.58|3|1|1": 36.114,
    "71.58|3|1|2": 19.186,
    "65.77|2|2|0": 35.998,
    "65.77|3|1|1": 10.13,
    "103.01|2|0|1": -0.902,
    "103.01|5|0|4": 45.029,
    "103.01|1|0|3": -28.812,
    "71.58|2|3|2": 39.376,
    "71.58|4|0|1": 35.898,
    "65.77|3|1|0": 31.333,
    "68.67|5|1|5": -50.246,
    "71.58|2|5|0": 106.346,
    "65.77|1|4|4": 66.484,
    "65.77|0|5|2": 127.428,
    "65.77|4|1|2": 46.57,
    "71.58|4|0|0": 34.048,
    "68.67|4|3|3": 45.061,
    "65.77|1|4|3": 81.381,
    "65.77|4|1|1": 42.981,
    "71.58|3|3|2": 29.097,
    "71.58|0|2|2": 7.194,
    "65.77|5|4|4": 34.485,
    "68.67|2|5|2": 85.159,
    "71.58|4|1|5": -105.547,
    "71.58|5|5|5": 88.53,
    "103.01|5|0|5": -101.68,
    "68.67|5|4|4": 45.659,
    "71.58|1|4|1": 23.114,
    "103.01|5|0|3": 36.078,
    "68.67|3|1|5": -142.089,
    "71.58|1|5|3": 76.157,
    "71.58|2|0|5": -97.433,
    "71.58|2|5|1": 95.866,
    "68.67|4|2|5": -70.91,
    "71.58|3|1|4": -3.51,
    "65.77|0|3|3": 4.966,
    "103.01|0|0|3": -26.21,
    "68.67|4|1|5": -50.944,
    "103.01|4|0|1": 28.718,
    "65.77|2|3|0": 47.245,
    "68.67|0|3|3": 32.875,
    "68.67|2|2|4": 13.113,
    "68.67|1|4|4": 45.222,
    "65.77|2|5|4": 81.591
  },
  "resG": {
    "0|0|0": 0.0,
    "4|0|3": 1.065,
    "1|0|2": 0.012,
    "0|0|4": -11.348,
    "2|0|2": -0.106,
    "0|4|0": 23.706,
    "1|0|1": -1.496,
    "1|3|3": 17.661,
    "0|2|0": 0.0,
    "1|0|0": 0.0,
    "3|0|2": 1.216,
    "0|0|1": -2.091,
    "1|1|2": 6.075,
    "2|1|2": 7.245,
    "0|1|0": 0.0,
    "3|0|1": 21.144,
    "2|1|5": -105.197,
    "1|0|3": -1.311,
    "3|0|3": -0.101,
    "2|0|3": -0.074,
    "3|0|4": -7.743,
    "4|0|4": -7.925,
    "0|3|0": 0.0,
    "2|3|2": 27.171,
    "3|0|5": -89.352,
    "2|0|1": 1.913,
    "5|0|4": -8.936,
    "0|0|2": -0.872,
    "2|0|0": 2.45,
    "0|0|3": -2.145,
    "3|1|4": -4.099,
    "2|2|4": 5.32,
    "1|2|0": 14.855,
    "0|3|1": 31.281,
    "0|1|3": -2.694,
    "2|1|1": 12.159,
    "1|1|1": 6.621,
    "4|0|0": 17.819,
    "2|0|4": -7.563,
    "2|1|0": 5.67,
    "3|0|0": 15.933,
    "1|3|1": 28.868,
    "0|5|1": 101.075,
    "0|1|2": -0.145,
    "5|0|5": -123.296,
    "3|2|3": 16.23,
    "0|2|1": 17.087,
    "1|0|4": -8.69,
    "3|3|2": 54.521,
    "0|1|1": 3.028,
    "1|1|0": 0.0,
    "2|2|3": 17.016,
    "2|1|3": 2.19,
    "5|2|4": 12.731,
    "3|1|3": 0.723,
    "4|1|3": 3.187,
    "1|2|1": 17.853,
    "4|0|2": 33.053,
    "3|2|2": 25.871,
    "2|3|1": 29.474,
    "1|5|2": 66.875,
    "1|4|2": 38.04,
    "2|2|2": 16.325,
    "1|2|4": 11.014,
    "4|0|5": -102.401,
    "1|2|3": 11.921,
    "4|2|4": 7.911,
    "0|2|2": 13.325,
    "1|4|1": 34.27,
    "2|4|1": 34.451,
    "2|5|3": 52.393,
    "3|1|2": 4.912,
    "1|3|0": 23.825,
    "1|1|3": 0.564,
    "0|4|1": 53.478,
    "2|3|3": 30.212,
    "4|5|4": 97.108,
    "1|5|1": 59.402,
    "1|2|2": 15.793,
    "5|1|4": -5.597,
    "1|4|0": 35.466,
    "4|2|3": 14.832,
    "3|5|1": 92.607,
    "1|1|4": -10.818,
    "0|3|2": 19.969,
    "4|1|4": -5.523,
    "3|2|4": -1.606,
    "3|4|4": 39.432,
    "0|1|4": -12.459,
    "3|4|3": 53.34,
    "5|0|3": 49.731,
    "3|5|3": 94.103,
    "0|4|2": 49.811,
    "3|3|3": 40.582,
    "0|5|0": 70.111,
    "2|5|1": 95.866,
    "2|0|5": -96.343,
    "4|0|1": 36.929,
    "5|0|2": 47.12,
    "3|5|4": 41.91,
    "5|3|5": -83.575,
    "0|3|3": 14.247,
    "5|5|5": 50.855,
    "2|3|4": 43.791,
    "2|2|0": 35.59,
    "2|5|2": 64.119,
    "2|1|4": -5.661,
    "5|4|5": -106.513,
    "4|4|4": 71.079,
    "5|0|1": 65.091,
    "3|4|2": 57.547,
    "3|1|5": -94.028,
    "0|4|3": 17.554,
    "1|5|3": 61.56,
    "2|4|2": 35.56,
    "2|4|3": 37.453,
    "4|1|5": -106.628,
    "0|5|2": 78.261,
    "3|1|1": 31.348,
    "1|3|2": 31.767,
    "1|0|5": -114.643,
    "4|1|1": 42.55,
    "4|3|4": 26.723,
    "1|1|5": -102.899,
    "5|1|3": 7.409,
    "3|1|0": 25.308,
    "3|2|1": 18.241,
    "5|2|5": -97.959,
    "4|3|3": 39.52,
    "5|1|5": -90.119,
    "3|3|4": 20.303,
    "5|3|4": 11.825,
    "4|5|3": 93.653,
    "2|2|1": 25.898,
    "0|2|3": 18.703,
    "1|4|3": 64.358,
    "3|5|2": 100.047,
    "2|5|4": 107.666,
    "1|5|0": 85.134,
    "2|3|0": 41.203,
    "2|4|4": 62.9,
    "4|2|5": -70.91,
    "2|5|0": 106.346,
    "1|4|4": 45.224,
    "3|2|0": 13.337,
    "5|5|4": 49.308,
    "4|1|2": 31.126,
    "5|4|4": 36.896
  },
  "resW": {
    "0|0": 0.0,
    "4|0": -2.812,
    "1|0": 0.0,
    "2|0": 0.0,
    "0|4": 27.163,
    "1|3": 27.809,
    "0|2": 0.0,
    "3|0": -0.084,
    "1|1": 2.606,
    "2|1": 4.655,
    "0|1": 0.0,
    "0|3": 3.317,
    "2|3": 30.093,
    "5|0": -26.541,
    "3|1": 1.519,
    "2|2": 17.222,
    "1|2": 16.025,
    "0|5": 72.542,
    "3|2": 13.238,
    "3|3": 50.791,
    "5|2": -2.441,
    "4|1": -0.505,
    "1|5": 66.392,
    "1|4": 36.161,
    "4|2": 8.678,
    "2|4": 35.798,
    "2|5": 68.575,
    "4|5": 96.323,
    "5|1": -9.887,
    "3|5": 93.332,
    "3|4": 51.384,
    "5|4": -27.436,
    "5|3": -8.112,
    "5|5": 49.308,
    "4|4": 68.791,
    "4|3": 27.82
  },
  "rateSheet": {
    "Z1": {
      "< 500": 65.77,
      "500 - 999": 83.79,
      "1,000 - 2,499": 123.73,
      "2,500 - 4,999": 190.88,
      "5,000 - 9,999": 659.31,
      "10,000 +": 1184.18
    },
    "Z2": {
      "< 500": 68.67,
      "500 - 999": 84.63,
      "1,000 - 2,499": 121.42,
      "2,500 - 4,999": 180.29,
      "5,000 - 9,999": 662.21,
      "10,000 +": 1187.08
    },
    "Z3": {
      "< 500": 71.57,
      "500 - 999": 87.19,
      "1,000 - 2,499": 125.11,
      "2,500 - 4,999": 194.99,
      "5,000 - 9,999": 665.12,
      "10,000 +": 1189.99
    },
    "Z4": {
      "< 500": 103.01,
      "500 - 999": 103.02,
      "1,000 - 2,499": 120.51,
      "2,500 - 4,999": 189.35,
      "5,000 - 9,999": 696.54,
      "10,000 +": 1221.4
    }
  },
  "breaks": ["< 500", "500 - 999", "1,000 - 2,499", "2,500 - 4,999", "5,000 - 9,999", "10,000 +"],
  "estCells": {
    "Z1": ["5,000 - 9,999", "10,000 +"],
    "Z2": ["5,000 - 9,999", "10,000 +"],
    "Z3": ["5,000 - 9,999", "10,000 +"],
    "Z4": ["2,500 - 4,999", "5,000 - 9,999", "10,000 +"]
  },
  "zoneMin": {
    "Z1": 65.77,
    "Z2": 68.67,
    "Z3": 71.58,
    "Z4": 103.01
  },
  "classMult": {
    "50": 0.63,
    "55": 0.69,
    "60": 0.74,
    "65": 0.8,
    "70": 0.86,
    "77.5": 0.94,
    "85": 1.0,
    "92.5": 1.06,
    "100": 1.14,
    "110": 1.22,
    "125": 1.35,
    "150": 1.51,
    "175": 1.71,
    "200": 1.94,
    "250": 2.29,
    "300": 2.69
  },
  "classDefault": 85,
  "classMix": {
    "70": 6.2,
    "77.5": 39.0,
    "85": 30.2,
    "92.5": 13.2,
    "100": 5.3,
    "110": 2.0,
    "125": 1.4,
    "150": 1.3,
    "175": 0.8
  }
};

// ─────────────────────────────────────────────────────────────
// Uline final-mile rate console — Davis Delivery Service
// Now UI Dashboard styling: light canvas, soft white cards,
// Montserrat, dark gradient hero with a live rate curve, pill
// controls, switchable accent. Pricing model from 226,073 Uline
// DAS shipments (Jan 2025 – Jun 2026). Customer profiles persist via browser storage.
// ─────────────────────────────────────────────────────────────
const APP_VERSION = "v0.9";
const br = (a, x) => {
  let lo = 0,
    hi = a.length;
  while (lo < hi) {
    const m = lo + hi >> 1;
    if (a[m] <= x) lo = m + 1;else hi = m;
  }
  return lo;
};
const bnd = (a, x) => br(a, x) - 1;
function interp(kn, w) {
  if (w <= kn[0][0]) return kn[0][1];
  const L = kn.length;
  if (w >= kn[L - 1][0]) {
    const [x0, y0] = kn[L - 2],
      [x1, y1] = kn[L - 1];
    return x1 === x0 ? y1 : y0 + (y1 - y0) * (w - x0) / (x1 - x0);
  }
  for (let i = 1; i < L; i++) {
    if (w <= kn[i][0]) {
      const [x0, y0] = kn[i - 1],
        [x1, y1] = kn[i];
      return x1 > x0 ? y0 + (y1 - y0) * (w - x0) / (x1 - x0) : y0;
    }
  }
  return kn[L - 1][1];
}
const ZN = {
  65.77: "Z1",
  68.67: "Z2",
  71.58: "Z3",
  103.01: "Z4"
};
const zoneLabel = zb => ZN[Math.round(zb * 100) / 100] || "Z?";
const money = n => n.toLocaleString("en-US", {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2
});
const intc = n => Math.round(n).toLocaleString("en-US");

// --- pure pricing over an explicit model (single source of truth) ---
const zbaseM = (m, z) => {
  z = String(z);
  return m.zone5[z] ?? m.zone3[z.slice(0, 3)] ?? m.global_;
};
const spineM = (m, zb, w) => Math.max(interp(m.curves[String(Math.round(zb * 100) / 100)] || m.pk, w), zb / 1.28);
function residM(m, zb, sk, lo, w) {
  const B = Math.round(zb * 100) / 100,
    sb = bnd(m.SKB, Math.max(sk, 1)),
    lb = bnd(m.LOB, lo),
    wb = bnd(m.WBc, w);
  const k1 = `${B}|${sb}|${lb}|${wb}`;
  if (k1 in m.resM) return m.resM[k1];
  const k2 = `${sb}|${lb}|${wb}`;
  if (k2 in m.resG) return m.resG[k2];
  const k3 = `${sb}|${lb}`;
  if (k3 in m.resW) return m.resW[k3];
  return 0;
}
function computeM(m, zip, w, sk, lo) {
  const zb = zbaseM(m, zip);
  return {
    zb,
    lh: spineM(m, zb, w) + residM(m, zb, sk, lo, w)
  };
}
function buildZonesM(m) {
  const z = {
    Z1: {
      min: 65.77,
      zips: [],
      pfx: []
    },
    Z2: {
      min: 68.67,
      zips: [],
      pfx: []
    },
    Z3: {
      min: 71.58,
      zips: [],
      pfx: []
    },
    Z4: {
      min: 103.01,
      zips: [],
      pfx: []
    }
  };
  for (const [zip, base] of Object.entries(m.zone5)) {
    const l = ZN[Math.round(base * 100) / 100];
    if (z[l]) z[l].zips.push(zip);
  }
  for (const [p, base] of Object.entries(m.zone3)) {
    const l = ZN[Math.round(base * 100) / 100];
    if (z[l]) z[l].pfx.push(p);
  }
  for (const k in z) {
    z[k].zips.sort();
    z[k].pfx.sort();
  }
  return z;
}

// Pure quote function — exported so host apps can price without the UI.
export function priceQuote(model, {
  zip,
  weight,
  skids = 1,
  loose = 0,
  fuelPct = 28,
  marginPct = 0
}) {
  const w = Number(weight) || 0,
    f = (Number(fuelPct) || 0) / 100,
    p = (Number(marginPct) || 0) / 100;
  const c = computeM(model, zip, w, skids, loose);
  const allIn = c.lh * (1 + f);
  return {
    zone: ZN[Math.round(c.zb * 100) / 100] || "Z?",
    zb: c.zb,
    linehaul: c.lh,
    fuelAmt: c.lh * f,
    allIn,
    quoted: allIn * (1 + p)
  };
}

// Active model: the bundled one by default; overridable per-instance via the
// `model` or `modelUrl` props on UlineQuoteConsole. The console reads this so a
// live model fetch updates the same pricing path the standalone app uses.
export const defaultModel = M;
let MODEL = M;
const zbase = z => zbaseM(MODEL, z);
const spine = (zb, w) => spineM(MODEL, zb, w);
const resid = (zb, sk, lo, w) => residM(MODEL, zb, sk, lo, w);
const compute = (zip, w, sk, lo) => computeM(MODEL, zip, w, sk, lo);
function confidence(zipFound, tp, weight, loose) {
  if (!zipFound) return {
    key: "est",
    label: "estimate",
    note: "This ZIP isn't in the recent Uline data — rate is estimated from the surrounding area zone."
  };
  const tail = tp > 6 || weight > 2500 || loose > 4;
  if (tail) return {
    key: "est",
    label: "estimate",
    note: "Heavy or high-piece freight prices with wider variance — treat this as a starting figure."
  };
  if (loose > 0) return {
    key: "std",
    label: "has loose freight",
    note: "Loose pieces run looser than pallet freight — within $5 on ~69% vs ~94% pallet-only."
  };
  const core = tp <= 4 && weight <= 1500;
  if (core) return {
    key: "core",
    label: "high confidence",
    note: "Pallet freight in the core range — matches Uline within $5 on ~94% of shipments."
  };
  return {
    key: "std",
    label: "standard",
    note: "Weight-and-zone estimate — Uline's basis for this lane."
  };
}
const ACCENTS = {
  orange: "#f96332",
  blue: "#2ca8ff",
  green: "#18ce0f",
  purple: "#9368e9",
  red: "#ff3636"
};
const ACCENTS_D = {
  orange: "#e8521f",
  blue: "#1f93e6",
  green: "#15b30d",
  purple: "#7e52d8",
  red: "#e62a2a"
};
const ACCENTS_RING = {
  orange: "#f9633233",
  blue: "#2ca8ff33",
  green: "#18ce0f33",
  purple: "#9368e933",
  red: "#ff363633"
};
const CSS = `
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap');

.rc-root{ --s1:4px;--s2:8px;--s3:12px;--s4:16px;--s5:20px;--s6:24px;--s8:32px;
  --rc:12px;--ri:10px;--pill:30px; --t:200ms cubic-bezier(.2,.7,.3,1);
  --bg:#f5f6fa; --card:#ffffff;
  --ink:#2c2c2c; --muted:#8a8a8a; --faint:#b3b3b3; --line:#ededed; --line-2:#e3e3e3;
  --ok:#18ce0f; --warn:#ffb236;
  --hero1:#1f2148; --hero2:#2c2f63;
  font-family:'Montserrat',-apple-system,BlinkMacSystemFont,sans-serif;
  min-height:100vh; background:var(--bg); color:var(--ink); -webkit-font-smoothing:antialiased; }
.rc-root *{ box-sizing:border-box; }
.rc-root button{ font:inherit;cursor:pointer;border:none;background:none;color:inherit; }
.rc-root input,.rc-root select{ font:inherit; }
@media (prefers-reduced-motion: reduce){ .rc-root *{ transition:none !important; animation:none !important; } }
.rc-root.rc-embedded{ min-height:0; background:transparent; }
.rc-root.rc-embedded .rc-wrap{ padding-top:var(--s4); padding-bottom:var(--s5); }

.rc-wrap{ max-width:468px;margin:0 auto;padding:var(--s6) var(--s4) var(--s8); }

/* header */
.rc-head{ display:flex;align-items:center;justify-content:space-between;margin-bottom:var(--s5); }
.rc-brand{ display:flex;align-items:center;gap:var(--s3); }
.rc-logo{ width:34px;height:34px;border-radius:9px;background:linear-gradient(135deg,var(--accent),var(--accent-d));display:grid;place-items:center;color:#fff;font-weight:700;font-size:16px;box-shadow:0 4px 12px -2px var(--accent-ring); }
.rc-bk{ font-size:14px;font-weight:700;line-height:1.1;color:var(--ink); }
.rc-bs{ font-size:11px;color:var(--muted);font-weight:500; }
.rc-right{ display:flex;align-items:center;gap:var(--s3); }
.rc-ver{ font-size:11px;font-weight:600;color:var(--muted);padding:3px 9px;border-radius:var(--pill);background:var(--card);box-shadow:0 1px 6px rgba(0,0,0,.05); }

/* accent picker */
.rc-accents{ display:inline-flex;gap:6px;padding:5px 7px;background:var(--card);border-radius:var(--pill);box-shadow:0 1px 6px rgba(0,0,0,.05); }
.rc-acc{ width:16px;height:16px;border-radius:50%;transition:transform var(--t),box-shadow var(--t);box-shadow:0 0 0 0 rgba(0,0,0,0); }
.rc-acc:hover{ transform:scale(1.15); }
.rc-acc.on{ box-shadow:0 0 0 2px var(--card),0 0 0 4px currentColor;transform:scale(1.05); }
.rc-acc:focus-visible{ outline:none;box-shadow:0 0 0 2px var(--card),0 0 0 4px var(--ink); }

/* tabs */
.rc-tabs{ display:flex;gap:var(--s1);background:#eceef3;border-radius:var(--pill);padding:5px;margin-bottom:var(--s5); }
.rc-tab{ flex:1;text-align:center;font-size:12.5px;font-weight:600;color:var(--muted);padding:9px 0;border-radius:var(--pill);transition:color var(--t),background var(--t),box-shadow var(--t); }
.rc-tab:hover{ color:var(--ink); }
.rc-tab.on{ background:var(--card);color:var(--ink);box-shadow:0 3px 10px -2px rgba(0,0,0,.12); }
.rc-tab:focus-visible{ outline:none;box-shadow:0 0 0 2px var(--accent-ring); }

/* cards */
.rc-card{ background:var(--card);border-radius:var(--rc);box-shadow:0 1px 20px 0 rgba(0,0,0,.06);overflow:hidden;margin-bottom:var(--s4); }
.rc-chead{ padding:var(--s5) var(--s5) 0; }
.rc-ccat{ font-size:10.5px;font-weight:600;color:var(--faint);text-transform:uppercase;letter-spacing:.07em; }
.rc-ctitle{ margin:3px 0 0;font-size:17px;font-weight:600;color:var(--ink); }
.rc-csub{ margin:4px 0 0;font-size:12px;color:var(--muted);line-height:1.5; }

/* hero (dark gradient) */
.rc-hero{ position:relative;background:linear-gradient(135deg,var(--hero1),var(--hero2));border-radius:var(--rc);overflow:hidden;padding:var(--s6) var(--s5) 0;margin-bottom:var(--s4);box-shadow:0 8px 30px -10px rgba(31,33,72,.55); }
.rc-cat{ font-size:10.5px;font-weight:600;color:rgba(255,255,255,.55);text-transform:uppercase;letter-spacing:.08em; }
.rc-price{ display:flex;align-items:baseline;gap:6px;margin-top:8px; }
.rc-cur{ font-size:24px;font-weight:600;color:rgba(255,255,255,.6); }
.rc-amt{ font-size:50px;font-weight:600;letter-spacing:-.02em;line-height:1;color:#fff;font-variant-numeric:tabular-nums; }
.rc-sub{ margin-top:9px;font-size:12.5px;color:rgba(255,255,255,.72);font-weight:500; }
@keyframes rc-pop{ 0%{opacity:.4;transform:translateY(3px);} 100%{opacity:1;transform:none;} }
.rc-anim{ animation:rc-pop var(--t); }
.rc-hstatus{ display:flex;flex-wrap:wrap;gap:var(--s2);margin-top:var(--s4); }
.rc-hpill{ display:inline-flex;align-items:center;gap:6px;font-size:11px;font-weight:600;padding:4px 10px;border-radius:var(--pill);background:rgba(255,255,255,.10);color:#fff; }
.rc-hdot{ width:6px;height:6px;border-radius:50%;background:rgba(255,255,255,.6); }
.rc-hpill.ok .rc-hdot{ background:var(--ok); } .rc-hpill.warn .rc-hdot{ background:var(--warn); }
.rc-sparkwrap{ margin:16px -20px 0; }
.rc-spark{ display:block;width:100%;height:auto; }

/* ledger */
.rc-ledger{ padding:var(--s4) var(--s5); }
.rc-lrow{ display:flex;justify-content:space-between;align-items:center;padding:7px 0; }
.rc-lk{ font-size:12.5px;color:var(--muted);font-weight:500; }
.rc-lv{ font-size:13px;color:var(--ink);font-weight:600;font-variant-numeric:tabular-nums; }
.rc-lv.disc{ color:var(--ok); }
.rc-lrow.tot{ margin-top:4px;padding-top:13px;border-top:1px solid var(--line); }
.rc-lrow.tot .rc-lk{ font-weight:700;color:var(--ink);font-size:13px; }
.rc-lrow.tot .rc-lv{ font-size:16px;font-weight:700; }

/* form */
.rc-divhd{ padding:var(--s2) var(--s5) 0;font-size:10.5px;font-weight:600;color:var(--faint);text-transform:uppercase;letter-spacing:.07em;border-top:1px solid var(--line);margin-top:var(--s2);padding-top:var(--s4); }
.rc-form{ padding:var(--s4) var(--s5) var(--s5);display:grid;grid-template-columns:1fr 1fr;gap:var(--s4); }
.rc-field{ display:flex;flex-direction:column;gap:7px;min-width:0; }
.rc-field.col{ grid-column:1 / -1; }
.rc-grid2{ display:grid;grid-template-columns:1fr 1fr;gap:var(--s4); }
.rc-label{ font-size:12px;font-weight:600;color:var(--ink);display:flex;flex-direction:column;gap:2px; }
.rc-hint{ font-size:11px;font-weight:500;color:var(--faint);line-height:1.35; }

/* inputs */
.rc-input{ width:100%;font-size:14.5px;font-weight:500;color:var(--ink);background:#fff;border:1px solid var(--line-2);border-radius:var(--ri);padding:10px 13px;transition:border-color var(--t),box-shadow var(--t);font-variant-numeric:tabular-nums; }
.rc-input::placeholder{ color:var(--faint); }
.rc-input:hover{ border-color:#cfcfcf; }
.rc-input:focus{ outline:none;border-color:var(--accent);box-shadow:0 0 0 3px var(--accent-ring); }
.rc-sfx{ display:flex;align-items:center;gap:6px;background:#fff;border:1px solid var(--line-2);border-radius:var(--ri);padding:0 13px;transition:border-color var(--t),box-shadow var(--t); }
.rc-sfx:focus-within{ border-color:var(--accent);box-shadow:0 0 0 3px var(--accent-ring); }
.rc-sfx input{ flex:1;min-width:0;border:none;background:transparent;font-size:14.5px;font-weight:500;color:var(--ink);padding:10px 0;outline:none;font-variant-numeric:tabular-nums; }
.rc-unit{ font-size:12px;color:var(--faint);font-weight:600; }
.rc-narrow{ max-width:170px; }
.rc-select{ appearance:none;-webkit-appearance:none;width:100%;font-size:14px;font-weight:500;color:var(--ink);background-color:#fff;border:1px solid var(--line-2);border-radius:var(--ri);padding:10px 36px 10px 13px;transition:border-color var(--t),box-shadow var(--t);background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%23999' stroke-width='2.5' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'/%3E%3C/svg%3E");background-repeat:no-repeat;background-position:right 13px center; }
.rc-select:hover{ border-color:#cfcfcf; }
.rc-select:focus{ outline:none;border-color:var(--accent);box-shadow:0 0 0 3px var(--accent-ring); }

/* stepper */
.rc-step{ display:flex;align-items:center;justify-content:space-between;background:#fff;border:1px solid var(--line-2);border-radius:var(--ri);padding:4px; }
.rc-step button{ width:38px;height:34px;border-radius:8px;font-size:18px;color:var(--muted);display:grid;place-items:center;transition:background var(--t),color var(--t),transform var(--t); }
.rc-step button:hover:not(:disabled){ background:var(--bg);color:var(--ink); }
.rc-step button:active:not(:disabled){ transform:scale(.9); }
.rc-step button:disabled{ opacity:.3;cursor:not-allowed; }
.rc-step button:focus-visible{ outline:none;box-shadow:0 0 0 2px var(--accent-ring); }
.rc-count{ font-size:16px;font-weight:700;font-variant-numeric:tabular-nums;color:var(--ink); }

/* presets */
.rc-fuelrow{ display:flex;align-items:center;gap:var(--s2);flex-wrap:wrap; }
.rc-presets{ display:inline-flex;gap:4px;background:#eceef3;border-radius:var(--pill);padding:4px; }
.rc-preset{ font-size:12.5px;font-weight:600;color:var(--muted);padding:6px 12px;border-radius:var(--pill);transition:background var(--t),color var(--t); }
.rc-preset:hover{ color:var(--ink); }
.rc-preset.on{ background:var(--accent);color:#fff;box-shadow:0 4px 10px -3px var(--accent-ring); }
.rc-preset:focus-visible{ outline:none;box-shadow:0 0 0 2px var(--accent-ring); }
.rc-fuelrow .rc-sfx{ margin-left:auto;width:90px; }

/* buttons + links */
.rc-btn{ font-size:12.5px;font-weight:600;padding:9px 16px;border-radius:var(--pill);background:#eceef3;color:var(--ink);transition:background var(--t),transform var(--t),box-shadow var(--t); }
.rc-btn:hover{ background:#e2e5ec; }
.rc-btn:active{ transform:translateY(1px); }
.rc-btn:focus-visible{ outline:none;box-shadow:0 0 0 2px var(--accent-ring); }
.rc-btn.primary{ background:var(--accent);color:#fff;box-shadow:0 4px 12px -3px var(--accent-ring); }
.rc-btn.primary:hover{ background:var(--accent-d); }
.rc-link{ align-self:flex-start;font-size:12px;font-weight:600;color:var(--accent);transition:color var(--t); }
.rc-link:hover{ color:var(--accent-d); }
.rc-addbox{ display:flex;gap:var(--s2);flex-wrap:wrap;margin-top:var(--s1); }
.rc-addbox .nm{ flex:1 1 130px; } .rc-addbox .mk{ width:74px;flex:0 0 auto;text-align:center; }

/* disclosure */
.rc-adv{ display:flex;align-items:center;gap:var(--s2);width:100%;padding:13px var(--s5);border-top:1px solid var(--line);color:var(--muted);font-size:12.5px;font-weight:600;text-align:left;transition:color var(--t); }
.rc-adv:hover{ color:var(--ink); }
.rc-tw{ font-size:9px;color:var(--faint);transition:transform var(--t); }
.rc-adv.open .rc-tw{ transform:rotate(90deg); }
.rc-advbody{ padding:0 var(--s5) var(--s4);display:flex;flex-direction:column;gap:var(--s4); }
.rc-advnote{ font-size:11.5px;color:var(--muted);line-height:1.55;background:var(--bg);border-radius:var(--ri);padding:12px 13px; }

/* footer */
.rc-foot{ padding:var(--s4) var(--s5) var(--s5);border-top:1px solid var(--line); }
.rc-note{ display:flex;gap:8px;align-items:flex-start;font-size:12px;color:var(--muted);line-height:1.55;font-weight:500; }
.rc-notedot{ flex:0 0 auto;width:7px;height:7px;border-radius:50%;margin-top:5px;background:var(--muted); }
.rc-note.ok .rc-notedot{ background:var(--ok); } .rc-note.warn .rc-notedot{ background:var(--warn); }
.rc-prov{ margin-top:var(--s3);font-size:11px;color:var(--faint);line-height:1.6;font-weight:500; }
.rc-prov b{ color:var(--muted);font-weight:700; }

/* tables */
.rc-tblwrap{ padding:var(--s2) var(--s5) var(--s4);overflow-x:auto; }
.rc-tbl{ width:100%;border-collapse:collapse; }
.rc-tbl th,.rc-tbl td{ padding:10px 8px;text-align:right;border-bottom:1px solid var(--line); }
.rc-tbl th{ font-size:10px;font-weight:700;color:var(--faint);text-transform:uppercase;letter-spacing:.05em; }
.rc-tbl td{ font-size:13px;font-weight:600;color:var(--ink);font-variant-numeric:tabular-nums; }
.rc-tbl th:first-child,.rc-tbl td:first-child{ text-align:left; }
.rc-tbl td.brk{ font-size:12.5px;color:var(--muted);font-weight:600; }
.rc-tbl td.est{ color:var(--faint);font-style:italic;font-weight:500; }
.rc-tbl tr:last-child td{ border-bottom:none; }

/* charts */
.rc-barlbl{ fill:var(--muted);font-size:11px;font-weight:600;font-family:'Montserrat',sans-serif; }
.rc-barval{ fill:var(--ink);font-size:11px;font-weight:700;font-family:'Montserrat',sans-serif; }

/* zone cards */
.rc-zwrap{ display:flex;flex-direction:column;gap:var(--s4); }
.rc-zhd{ display:flex;justify-content:space-between;align-items:flex-start;padding:var(--s5) var(--s5) 0;gap:var(--s3); }
.rc-zname{ font-size:15px;font-weight:600;color:var(--ink); }
.rc-zct{ font-size:11.5px;color:var(--muted);margin-top:2px;font-weight:500; }
.rc-zmin{ font-size:22px;font-weight:700;color:var(--ink);text-align:right;font-variant-numeric:tabular-nums; }
.rc-zminl{ font-size:10px;color:var(--faint);text-align:right;text-transform:uppercase;letter-spacing:.05em;margin-top:1px;font-weight:600; }
.rc-zbody{ padding:var(--s3) var(--s5) var(--s5); }
.rc-zrate{ font-size:11.5px;color:var(--muted);line-height:1.6;font-weight:500; }
.rc-zrate b{ color:var(--ink);font-weight:700; }
.rc-zips{ display:flex;flex-wrap:wrap;gap:5px;margin-top:var(--s3); }
.rc-zchip{ font-size:11px;font-weight:600;color:var(--muted);background:var(--bg);border-radius:6px;padding:3px 8px; }
.rc-zmore{ margin-top:var(--s3);font-size:11.5px;font-weight:600;color:var(--accent);transition:color var(--t); }
.rc-zmore:hover{ color:var(--accent-d); }
.rc-pfx{ margin-top:var(--s3);font-size:11px;color:var(--faint);font-weight:500; }
.rc-pfx b{ color:var(--muted);font-weight:700; }

.rc-pagefoot{ text-align:center;margin-top:var(--s4);font-size:11px;color:var(--faint);font-weight:500; }
`;
function Stepper({
  value,
  set,
  min = 0
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "rc-step"
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => set(Math.max(min, value - 1)),
    disabled: value <= min,
    "aria-label": "decrease"
  }, "−"), /*#__PURE__*/React.createElement("span", {
    className: "rc-count"
  }, value), /*#__PURE__*/React.createElement("button", {
    onClick: () => set(value + 1),
    "aria-label": "increase"
  }, "+"));
}
const STORE_KEY = "uline_customer_profiles_v1";
const DEFAULTS = [{
  id: "list",
  name: "List (Uline)",
  markup: 0,
  locked: true
}, {
  id: "retail",
  name: "Retail +15%",
  markup: 15
}];
const store = (() => {
  if (typeof window !== "undefined" && window.storage && typeof window.storage.get === "function") {
    return {
      get: k => window.storage.get(k),
      set: (k, v) => window.storage.set(k, v)
    };
  }
  if (typeof window !== "undefined" && window.localStorage) {
    return {
      get: async k => {
        const v = window.localStorage.getItem(k);
        return v == null ? null : {
          value: v
        };
      },
      set: async (k, v) => {
        window.localStorage.setItem(k, v);
        return {
          value: v
        };
      }
    };
  }
  return {
    get: async () => null,
    set: async () => null
  };
})();
const hasStore = true;
function Field({
  label,
  hint,
  children,
  full
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "rc-field" + (full ? " col" : "")
  }, /*#__PURE__*/React.createElement("span", {
    className: "rc-label"
  }, label, hint && /*#__PURE__*/React.createElement("span", {
    className: "rc-hint"
  }, hint)), children);
}
function AccentSwitcher({
  accent,
  setAccent
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "rc-accents",
    role: "group",
    "aria-label": "Accent color"
  }, Object.entries(ACCENTS).map(([k, hex]) => /*#__PURE__*/React.createElement("button", {
    key: k,
    className: "rc-acc" + (accent === k ? " on" : ""),
    style: {
      background: hex,
      color: hex
    },
    "aria-label": k,
    "aria-pressed": accent === k,
    onClick: () => setAccent(k)
  })));
}
function Tabs({
  tab,
  setTab
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "rc-tabs",
    role: "tablist"
  }, [["quote", "Quote"], ["zones", "Zones"], ["sheet", "Rate sheet"]].map(([k, l]) => /*#__PURE__*/React.createElement("button", {
    key: k,
    role: "tab",
    "aria-selected": tab === k,
    className: "rc-tab" + (tab === k ? " on" : ""),
    onClick: () => setTab(k)
  }, l)));
}
function RateCurve({
  zip,
  skids,
  loose,
  weight,
  accentHex
}) {
  const W = 320,
    H = 64,
    pad = 5;
  const xs = [];
  for (let w = 120; w <= 2500; w += 95) xs.push(w);
  const ys = xs.map(w => compute(zip, w, skids, loose).lh);
  const ymin = Math.min(...ys),
    ymax = Math.max(...ys),
    span = ymax - ymin || 1;
  const sx = i => pad + (W - 2 * pad) * i / (xs.length - 1);
  const sy = v => H - pad - (H - 2 * pad) * (v - ymin) / span;
  const line = xs.map((w, i) => `${i ? "L" : "M"}${sx(i).toFixed(1)} ${sy(ys[i]).toFixed(1)}`).join(" ");
  const area = `${line} L ${sx(xs.length - 1).toFixed(1)} ${H} L ${sx(0).toFixed(1)} ${H} Z`;
  const cw = Number(weight) || 0;
  let ci = 0,
    best = Infinity;
  xs.forEach((w, i) => {
    const d = Math.abs(w - cw);
    if (d < best) {
      best = d;
      ci = i;
    }
  });
  return /*#__PURE__*/React.createElement("svg", {
    className: "rc-spark",
    viewBox: `0 0 ${W} ${H}`,
    role: "img",
    "aria-label": "Rate by weight for the selected zone"
  }, /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("linearGradient", {
    id: "rcfill",
    x1: "0",
    y1: "0",
    x2: "0",
    y2: "1"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0%",
    stopColor: "#fff",
    stopOpacity: "0.20"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "100%",
    stopColor: "#fff",
    stopOpacity: "0"
  }))), /*#__PURE__*/React.createElement("path", {
    d: area,
    fill: "url(#rcfill)"
  }), /*#__PURE__*/React.createElement("path", {
    d: line,
    fill: "none",
    stroke: "#fff",
    strokeOpacity: "0.92",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: sx(ci),
    cy: sy(ys[ci]),
    r: "4",
    fill: accentHex,
    stroke: "#fff",
    strokeWidth: "1.6"
  }));
}
function ZoneBars({
  accentHex
}) {
  const data = [["Z1", 65.77], ["Z2", 68.67], ["Z3", 71.58], ["Z4", 103.01]];
  const max = 103.01,
    W = 320,
    H = 96,
    bw = 46,
    gap = (W - 4 * bw) / 5;
  return /*#__PURE__*/React.createElement("svg", {
    viewBox: `0 0 ${W} ${H}`,
    style: {
      display: "block",
      width: "100%",
      height: "auto"
    },
    role: "img",
    "aria-label": "Minimum charge by zone"
  }, data.map(([k, v], i) => {
    const h = (H - 30) * (v / max);
    const x = gap + i * (bw + gap);
    const y = H - 20 - h;
    return /*#__PURE__*/React.createElement("g", {
      key: k
    }, /*#__PURE__*/React.createElement("rect", {
      x: x,
      y: y,
      width: bw,
      height: h,
      rx: "5",
      fill: accentHex,
      opacity: "0.88"
    }), /*#__PURE__*/React.createElement("text", {
      x: x + bw / 2,
      y: H - 5,
      textAnchor: "middle",
      className: "rc-barlbl"
    }, k), /*#__PURE__*/React.createElement("text", {
      x: x + bw / 2,
      y: y - 5,
      textAnchor: "middle",
      className: "rc-barval"
    }, "$", Math.round(v)));
  }));
}
function LedgerRow({
  k,
  v,
  disc
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "rc-lrow"
  }, /*#__PURE__*/React.createElement("span", {
    className: "rc-lk"
  }, k), /*#__PURE__*/React.createElement("span", {
    className: "rc-lv" + (disc ? " disc" : "")
  }, v));
}
function ProfilePicker({
  profiles,
  profileId,
  marginPct,
  curProfile,
  showAdd,
  newName,
  newMk,
  selectProfile,
  saveProfile,
  deleteProfile,
  setShowAdd,
  setNewName,
  setNewMk
}) {
  return /*#__PURE__*/React.createElement(Field, {
    full: true,
    label: "Customer profile",
    hint: "Applies a saved markup or discount"
  }, /*#__PURE__*/React.createElement("select", {
    className: "rc-select",
    value: profileId,
    onChange: e => selectProfile(e.target.value)
  }, profiles.map(p => /*#__PURE__*/React.createElement("option", {
    key: p.id,
    value: p.id
  }, p.name, p.id !== "list" ? `  (${p.markup > 0 ? "+" : ""}${p.markup}%)` : "")), profileId === "__custom__" && /*#__PURE__*/React.createElement("option", {
    value: "__custom__"
  }, "Custom (", marginPct > 0 ? "+" : "", marginPct, "%)"), /*#__PURE__*/React.createElement("option", {
    value: "__add__"
  }, "+ Add customer profile…")), showAdd && /*#__PURE__*/React.createElement("div", {
    className: "rc-addbox"
  }, /*#__PURE__*/React.createElement("input", {
    className: "rc-input nm",
    placeholder: "Customer name",
    value: newName,
    onChange: e => setNewName(e.target.value)
  }), /*#__PURE__*/React.createElement("input", {
    className: "rc-input mk",
    inputMode: "decimal",
    placeholder: "%",
    value: newMk,
    onChange: e => setNewMk(e.target.value.replace(/[^0-9.\-]/g, ""))
  }), /*#__PURE__*/React.createElement("button", {
    className: "rc-btn primary",
    onClick: saveProfile
  }, "Save"), /*#__PURE__*/React.createElement("button", {
    className: "rc-btn",
    onClick: () => {
      setShowAdd(false);
      setNewName("");
      setNewMk("");
    }
  }, "Cancel")), curProfile && !curProfile.locked && profileId !== "__custom__" && !showAdd && /*#__PURE__*/React.createElement("button", {
    className: "rc-link",
    onClick: deleteProfile
  }, "Delete \"", curProfile.name, "\""));
}
function ZoneCard({
  name,
  info,
  rateRow
}) {
  const [open, setOpen] = useState(false);
  return /*#__PURE__*/React.createElement("div", {
    className: "rc-card",
    style: {
      marginBottom: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "rc-zhd"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "rc-zname"
  }, "Zone ", name), /*#__PURE__*/React.createElement("div", {
    className: "rc-zct"
  }, info.zips.length, " ZIPs", info.pfx.length ? ` · ${info.pfx.length} area fallbacks` : "")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "rc-zmin"
  }, "$", money(info.min)), /*#__PURE__*/React.createElement("div", {
    className: "rc-zminl"
  }, "min charge"))), /*#__PURE__*/React.createElement("div", {
    className: "rc-zbody"
  }, /*#__PURE__*/React.createElement("div", {
    className: "rc-zrate"
  }, "All-in @ 28%, single pallet — ", /*#__PURE__*/React.createElement("b", null, "$", rateRow["500 - 999"]), " at 500–999 lb · ", /*#__PURE__*/React.createElement("b", null, "$", rateRow["1,000 - 2,499"]), " at 1,000–2,499 lb"), /*#__PURE__*/React.createElement("div", {
    className: "rc-zips"
  }, (open ? info.zips : info.zips.slice(0, 24)).map(z => /*#__PURE__*/React.createElement("span", {
    className: "rc-zchip",
    key: z
  }, z))), info.zips.length > 24 && /*#__PURE__*/React.createElement("button", {
    className: "rc-zmore",
    onClick: () => setOpen(!open)
  }, open ? "Show fewer" : `Show all ${info.zips.length} ZIPs`), info.pfx.length > 0 && /*#__PURE__*/React.createElement("div", {
    className: "rc-pfx"
  }, "Area fallbacks (3-digit): ", /*#__PURE__*/React.createElement("b", null, info.pfx.join(", ")))));
}
function RateTable() {
  return /*#__PURE__*/React.createElement("div", {
    className: "rc-card"
  }, /*#__PURE__*/React.createElement("div", {
    className: "rc-chead"
  }, /*#__PURE__*/React.createElement("div", {
    className: "rc-ccat"
  }, "All-in @ 28% fuel"), /*#__PURE__*/React.createElement("h3", {
    className: "rc-ctitle"
  }, "Rate sheet by weight break"), /*#__PURE__*/React.createElement("p", {
    className: "rc-csub"
  }, "Single pallet, normalized across 18 months. Italic cells (5,000 lb+) are thin on Uline volume — loose and bulky freight rates higher.")), /*#__PURE__*/React.createElement("div", {
    className: "rc-tblwrap"
  }, /*#__PURE__*/React.createElement("table", {
    className: "rc-tbl"
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", null, "Weight (lb)"), /*#__PURE__*/React.createElement("th", null, "Z1"), /*#__PURE__*/React.createElement("th", null, "Z2"), /*#__PURE__*/React.createElement("th", null, "Z3"), /*#__PURE__*/React.createElement("th", null, "Z4"))), /*#__PURE__*/React.createElement("tbody", null, MODEL.breaks.map(b => /*#__PURE__*/React.createElement("tr", {
    key: b
  }, /*#__PURE__*/React.createElement("td", {
    className: "brk"
  }, b), ["Z1", "Z2", "Z3", "Z4"].map(zk => /*#__PURE__*/React.createElement("td", {
    key: zk,
    className: MODEL.estCells[zk].includes(b) ? "est" : ""
  }, "$", money(MODEL.rateSheet[zk][b])))))))));
}
function UlineQuoteConsole({
  model,
  modelUrl,
  initialZip,
  initialWeight,
  initialSkids,
  initialLoose,
  embedded
} = {}) {
  const [accent, setAccent] = useState("orange");
  const [tab, setTab] = useState("quote");
  const [zip, setZip] = useState(initialZip != null ? String(initialZip).replace(/[^0-9]/g, "").slice(0, 5) : "30127");
  const [weight, setWeight] = useState(initialWeight != null ? String(Math.max(0, Math.round(Number(initialWeight) || 0))) : "1330");
  const [skids, setSkids] = useState(initialSkids != null ? Number(initialSkids) : 3);
  const [loose, setLoose] = useState(initialLoose != null ? Number(initialLoose) : 0);
  const [fuel, setFuel] = useState("28");
  const [margin, setMargin] = useState("0");
  const [profiles, setProfiles] = useState(DEFAULTS);
  const [profileId, setProfileId] = useState("list");
  const [showAdd, setShowAdd] = useState(false);
  const [newName, setNewName] = useState("");
  const [newMk, setNewMk] = useState("");

  // Live model override: a `model` object wins immediately; otherwise a
  // `modelUrl` is fetched once on mount (falling back to the bundled model on
  // error). Single console instance per page, so a module-level active model
  // is safe and keeps every pricing path — quote, curve, zones, sheet — in sync.
  const [modelTick, setModelTick] = useState(0);
  useEffect(() => {
    if (model && model.zone5) {
      MODEL = model;
      setModelTick(t => t + 1);
      return;
    }
    if (modelUrl) {
      let live = true;
      fetch(modelUrl).then(r => r.json()).then(m => {
        if (live && m && m.zone5) {
          MODEL = m;
          setModelTick(t => t + 1);
        }
      }).catch(() => {});
      return () => {
        live = false;
      };
    }
  }, [model, modelUrl]);
  useEffect(() => {
    if (!hasStore) return;
    (async () => {
      try {
        const r = await store.get(STORE_KEY);
        if (r && r.value) {
          const list = JSON.parse(r.value);
          if (Array.isArray(list) && list.length) setProfiles(list);
        } else {
          await store.set(STORE_KEY, JSON.stringify(DEFAULTS));
        }
      } catch (e) {/* storage unavailable — defaults stay in memory */}
    })();
  }, []);
  const persist = async list => {
    setProfiles(list);
    if (!hasStore) return;
    try {
      await store.set(STORE_KEY, JSON.stringify(list));
    } catch (e) {}
  };
  const selectProfile = id => {
    if (id === "__add__") {
      setShowAdd(true);
      return;
    }
    const p = profiles.find(x => x.id === id);
    if (p) {
      setProfileId(id);
      setMargin(String(p.markup));
    }
  };
  const saveProfile = () => {
    const nm = newName.trim();
    if (!nm) return;
    const mk = Number(newMk) || 0;
    const id = "p" + Date.now();
    const list = [...profiles, {
      id,
      name: nm,
      markup: mk
    }];
    persist(list);
    setProfileId(id);
    setMargin(String(mk));
    setShowAdd(false);
    setNewName("");
    setNewMk("");
  };
  const deleteProfile = () => {
    const p = profiles.find(x => x.id === profileId);
    if (!p || p.locked) return;
    const list = profiles.filter(x => x.id !== profileId);
    persist(list);
    setProfileId("list");
    setMargin("0");
  };
  const onMarginEdit = v => {
    setMargin(v);
    setProfileId("__custom__");
  };
  const q = useMemo(() => {
    const w = Number(weight) || 0;
    const f = (Number(fuel) || 0) / 100;
    const p = (Number(margin) || 0) / 100;
    const c = compute(zip, w, skids, loose);
    const allIn = c.lh * (1 + f);
    const quoted = allIn * (1 + p);
    const tp = Math.max(skids + loose, 1);
    const zipFound = String(zip) in MODEL.zone5;
    return {
      zb: c.zb,
      lh: c.lh,
      fuelAmt: c.lh * f,
      allIn,
      quoted,
      marginAmt: quoted - allIn,
      zipFound,
      conf: confidence(zipFound, tp, w, loose)
    };
  }, [zip, weight, skids, loose, fuel, margin, modelTick]);
  const priceRef = useRef(null);
  useEffect(() => {
    const el = priceRef.current;
    if (!el) return;
    el.classList.remove("rc-anim");
    void el.offsetWidth;
    el.classList.add("rc-anim");
  }, [q.quoted]);
  const fuelPct = Number(fuel) || 0;
  const marginPct = Number(margin) || 0;
  const marginLabel = marginPct === 0 ? "" : marginPct > 0 ? `+${marginPct}% margin` : `${marginPct}% discount`;
  const curProfile = profiles.find(x => x.id === profileId);
  const profName = curProfile && curProfile.id !== "list" && curProfile.id !== "__custom__" ? " · " + curProfile.name : "";
  const subline = `${marginPct === 0 ? "all-in" : "quote"} · ${fuelPct}% fuel${marginLabel ? " · " + marginLabel : ""}${profName}`;
  const confTone = q.conf.key === "core" ? "ok" : q.conf.key === "est" ? "warn" : "";
  const ZONES = useMemo(() => buildZonesM(MODEL), [modelTick]);
  const accVars = {
    ["--accent"]: ACCENTS[accent],
    ["--accent-d"]: ACCENTS_D[accent],
    ["--accent-ring"]: ACCENTS_RING[accent]
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "rc-root" + (embedded ? " rc-embedded" : ""),
    style: accVars
  }, /*#__PURE__*/React.createElement("style", null, CSS), /*#__PURE__*/React.createElement("div", {
    className: "rc-wrap"
  }, /*#__PURE__*/React.createElement("header", {
    className: "rc-head"
  }, /*#__PURE__*/React.createElement("div", {
    className: "rc-brand"
  }, /*#__PURE__*/React.createElement("div", {
    className: "rc-logo"
  }, "D"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "rc-bk"
  }, "Davis Delivery"), /*#__PURE__*/React.createElement("div", {
    className: "rc-bs"
  }, "Uline Rate Console"))), /*#__PURE__*/React.createElement("div", {
    className: "rc-right"
  }, /*#__PURE__*/React.createElement(AccentSwitcher, {
    accent: accent,
    setAccent: setAccent
  }), /*#__PURE__*/React.createElement("span", {
    className: "rc-ver"
  }, APP_VERSION))), /*#__PURE__*/React.createElement(Tabs, {
    tab: tab,
    setTab: setTab
  }), tab === "quote" && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "rc-hero"
  }, /*#__PURE__*/React.createElement("div", {
    className: "rc-cat"
  }, marginPct === 0 ? "All-in quote" : "Customer quote"), /*#__PURE__*/React.createElement("div", {
    className: "rc-price"
  }, /*#__PURE__*/React.createElement("span", {
    className: "rc-cur"
  }, "$"), /*#__PURE__*/React.createElement("span", {
    className: "rc-amt",
    ref: priceRef
  }, money(q.quoted))), /*#__PURE__*/React.createElement("div", {
    className: "rc-sub"
  }, subline), /*#__PURE__*/React.createElement("div", {
    className: "rc-hstatus"
  }, /*#__PURE__*/React.createElement("span", {
    className: "rc-hpill " + confTone
  }, /*#__PURE__*/React.createElement("span", {
    className: "rc-hdot"
  }), q.conf.label), /*#__PURE__*/React.createElement("span", {
    className: "rc-hpill"
  }, "zone ", zoneLabel(q.zb)), /*#__PURE__*/React.createElement("span", {
    className: "rc-hpill"
  }, String(zip).slice(0, 5) || "—")), /*#__PURE__*/React.createElement("div", {
    className: "rc-sparkwrap"
  }, /*#__PURE__*/React.createElement(RateCurve, {
    zip: zip,
    skids: skids,
    loose: loose,
    weight: weight,
    accentHex: ACCENTS[accent]
  }))), /*#__PURE__*/React.createElement("div", {
    className: "rc-card"
  }, /*#__PURE__*/React.createElement("div", {
    className: "rc-chead"
  }, /*#__PURE__*/React.createElement("div", {
    className: "rc-ccat"
  }, "Breakdown"), /*#__PURE__*/React.createElement("h3", {
    className: "rc-ctitle"
  }, "Charge detail")), /*#__PURE__*/React.createElement("div", {
    className: "rc-ledger"
  }, /*#__PURE__*/React.createElement(LedgerRow, {
    k: "Linehaul",
    v: "$" + money(q.lh)
  }), /*#__PURE__*/React.createElement(LedgerRow, {
    k: `Fuel · ${fuelPct}%`,
    v: "$" + money(q.fuelAmt)
  }), marginPct !== 0 && /*#__PURE__*/React.createElement(LedgerRow, {
    k: `${marginPct > 0 ? "Margin" : "Discount"} · ${marginPct > 0 ? "+" : ""}${marginPct}%`,
    v: (marginPct < 0 ? "−" : "+") + "$" + money(Math.abs(q.marginAmt)),
    disc: marginPct < 0
  }), /*#__PURE__*/React.createElement("div", {
    className: "rc-lrow tot"
  }, /*#__PURE__*/React.createElement("span", {
    className: "rc-lk"
  }, "Quote"), /*#__PURE__*/React.createElement("span", {
    className: "rc-lv"
  }, "$", money(q.quoted)))), /*#__PURE__*/React.createElement("div", {
    className: "rc-divhd"
  }, "Shipment"), /*#__PURE__*/React.createElement("div", {
    className: "rc-form"
  }, /*#__PURE__*/React.createElement(ProfilePicker, {
    profiles: profiles,
    profileId: profileId,
    marginPct: marginPct,
    curProfile: curProfile,
    showAdd: showAdd,
    newName: newName,
    newMk: newMk,
    selectProfile: selectProfile,
    saveProfile: saveProfile,
    deleteProfile: deleteProfile,
    setShowAdd: setShowAdd,
    setNewName: setNewName,
    setNewMk: setNewMk
  }), /*#__PURE__*/React.createElement(Field, {
    label: "Destination ZIP",
    hint: "Sets the rate zone"
  }, /*#__PURE__*/React.createElement("input", {
    className: "rc-input",
    inputMode: "numeric",
    maxLength: 5,
    value: zip,
    onChange: e => setZip(e.target.value.replace(/[^0-9]/g, "").slice(0, 5))
  })), /*#__PURE__*/React.createElement(Field, {
    label: "Weight",
    hint: "Total pounds"
  }, /*#__PURE__*/React.createElement("input", {
    className: "rc-input",
    inputMode: "numeric",
    value: weight,
    onChange: e => setWeight(e.target.value.replace(/[^0-9]/g, ""))
  })), /*#__PURE__*/React.createElement(Field, {
    label: "Skids",
    hint: "Pallet count"
  }, /*#__PURE__*/React.createElement(Stepper, {
    value: skids,
    set: setSkids,
    min: 0
  })), /*#__PURE__*/React.createElement(Field, {
    label: "Loose pieces",
    hint: "Non-palletized"
  }, /*#__PURE__*/React.createElement(Stepper, {
    value: loose,
    set: setLoose,
    min: 0
  })), /*#__PURE__*/React.createElement(Field, {
    full: true,
    label: "Fuel surcharge",
    hint: "2025: 23% → 20% (Jun 14) · 2026: 25% (Mar 21) → 28% (Apr 20)"
  }, /*#__PURE__*/React.createElement("div", {
    className: "rc-fuelrow"
  }, /*#__PURE__*/React.createElement("div", {
    className: "rc-presets"
  }, ["20", "23", "25", "28"].map(v => /*#__PURE__*/React.createElement("button", {
    key: v,
    className: "rc-preset" + (fuel === v ? " on" : ""),
    onClick: () => setFuel(v)
  }, v, "%"))), /*#__PURE__*/React.createElement("div", {
    className: "rc-sfx"
  }, /*#__PURE__*/React.createElement("input", {
    inputMode: "decimal",
    value: fuel,
    onChange: e => setFuel(e.target.value.replace(/[^0-9.]/g, ""))
  }), /*#__PURE__*/React.createElement("span", {
    className: "rc-unit"
  }, "%")))), /*#__PURE__*/React.createElement(Field, {
    full: true,
    label: "Margin / discount",
    hint: "+ markup or − discount on the quote"
  }, /*#__PURE__*/React.createElement("div", {
    className: "rc-sfx rc-narrow"
  }, /*#__PURE__*/React.createElement("input", {
    inputMode: "decimal",
    value: margin,
    onChange: e => onMarginEdit(e.target.value.replace(/[^0-9.\-]/g, ""))
  }), /*#__PURE__*/React.createElement("span", {
    className: "rc-unit"
  }, "%")))), /*#__PURE__*/React.createElement("div", {
    className: "rc-foot"
  }, /*#__PURE__*/React.createElement("div", {
    className: "rc-note " + confTone
  }, /*#__PURE__*/React.createElement("span", {
    className: "rc-notedot"
  }), q.conf.note), /*#__PURE__*/React.createElement("div", {
    className: "rc-prov"
  }, "Modeled from ", /*#__PURE__*/React.createElement("b", null, "226,073"), " Uline shipments · ", /*#__PURE__*/React.createElement("b", null, "Jan 2025 – Jun 2026"), ". Base rate flat 18 months. Uline bills on ", /*#__PURE__*/React.createElement("b", null, "weight and zone"), " — freight class and density don't change the rate (verified on 4,737 shipments). Pallet freight matches within $5 on ~94%.")))), tab === "zones" && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "rc-card"
  }, /*#__PURE__*/React.createElement("div", {
    className: "rc-chead"
  }, /*#__PURE__*/React.createElement("div", {
    className: "rc-ccat"
  }, "Minimum charge"), /*#__PURE__*/React.createElement("h3", {
    className: "rc-ctitle"
  }, "Rate zones"), /*#__PURE__*/React.createElement("p", {
    className: "rc-csub"
  }, "Set by destination ZIP. Zones differ almost entirely by minimum charge — per-pound rates are nearly identical (short-haul metro / North GA). Z4 is the far / special tier.")), /*#__PURE__*/React.createElement("div", {
    className: "rc-tblwrap"
  }, /*#__PURE__*/React.createElement(ZoneBars, {
    accentHex: ACCENTS[accent]
  }))), /*#__PURE__*/React.createElement("div", {
    className: "rc-zwrap"
  }, ["Z1", "Z2", "Z3", "Z4"].map(zk => /*#__PURE__*/React.createElement(ZoneCard, {
    key: zk,
    name: zk,
    info: ZONES[zk],
    rateRow: MODEL.rateSheet[zk]
  })))), tab === "sheet" && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(RateTable, null), /*#__PURE__*/React.createElement("div", {
    className: "rc-card"
  }, /*#__PURE__*/React.createElement("div", {
    className: "rc-foot",
    style: {
      borderTop: "none"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "rc-prov"
  }, "Per-CWT rates decline by weight break: ≈$26/cwt at the minimum, ≈$11/cwt at 500–1,000 lb, ≈$7/cwt at 1,000–2,500 lb. Quote a live figure on the Quote tab.")))), !embedded && /*#__PURE__*/React.createElement("div", {
    className: "rc-pagefoot"
  }, "Modeled estimate from billing history · not a published Uline tariff")));
}
export { UlineQuoteConsole };