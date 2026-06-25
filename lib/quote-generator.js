import { jsxs as n, jsx as e, Fragment as q } from "react/jsx-runtime";
import { useState as b, useEffect as I, useMemo as l0, useRef as M0 } from "react";
const Z0 = {
  30002: 68.67,
  30004: 65.77,
  30005: 65.77,
  30008: 65.77,
  30009: 65.77,
  30011: 65.77,
  30012: 65.77,
  30013: 65.77,
  30014: 68.67,
  30017: 68.67,
  30019: 65.77,
  30021: 68.67,
  30022: 65.77,
  30024: 65.77,
  30025: 65.77,
  30028: 65.77,
  30030: 68.67,
  30032: 68.67,
  30033: 68.67,
  30034: 65.77,
  30035: 65.77,
  30038: 65.77,
  30039: 65.77,
  30040: 65.77,
  30041: 65.77,
  30043: 65.77,
  30044: 65.77,
  30045: 65.77,
  30046: 65.77,
  30047: 65.77,
  30052: 68.67,
  30054: 68.67,
  30058: 65.77,
  30060: 68.67,
  30062: 68.67,
  30063: 68.67,
  30064: 68.67,
  30066: 68.67,
  30067: 68.67,
  30068: 68.67,
  30069: 68.67,
  30071: 65.77,
  30075: 65.77,
  30076: 65.77,
  30078: 65.77,
  30079: 65.77,
  30080: 65.77,
  30082: 65.77,
  30083: 65.77,
  30084: 65.77,
  30087: 65.77,
  30088: 65.77,
  30092: 65.77,
  30093: 65.77,
  30094: 65.77,
  30096: 65.77,
  30097: 65.77,
  30101: 68.67,
  30102: 68.67,
  30103: 71.58,
  30106: 68.67,
  30107: 68.67,
  30114: 68.67,
  30115: 68.67,
  30120: 71.58,
  30121: 71.58,
  30122: 68.67,
  30126: 68.67,
  30127: 68.67,
  30132: 68.67,
  30134: 68.67,
  30135: 68.67,
  30137: 71.58,
  30139: 71.58,
  30141: 68.67,
  30143: 71.58,
  30144: 68.67,
  30148: 68.67,
  30152: 68.67,
  30157: 68.67,
  30168: 68.67,
  30171: 68.67,
  30175: 68.67,
  30177: 68.67,
  30183: 68.67,
  30184: 68.67,
  30188: 68.67,
  30189: 65.77,
  30213: 68.67,
  30214: 68.67,
  30215: 68.67,
  30228: 68.67,
  30236: 68.67,
  30238: 68.67,
  30252: 71.58,
  30253: 71.58,
  30260: 65.77,
  30263: 71.58,
  30265: 71.58,
  30268: 68.67,
  30269: 71.58,
  30273: 68.67,
  30274: 68.67,
  30281: 71.58,
  30288: 68.67,
  30290: 68.67,
  30291: 68.67,
  30294: 68.67,
  30296: 65.77,
  30297: 68.67,
  30303: 68.67,
  30305: 68.67,
  30306: 68.67,
  30307: 68.67,
  30308: 68.67,
  30309: 68.67,
  30310: 68.67,
  30311: 68.67,
  30312: 68.67,
  30313: 68.67,
  30314: 68.67,
  30315: 68.67,
  30316: 68.67,
  30317: 68.67,
  30318: 68.67,
  30319: 68.67,
  30320: 68.67,
  30322: 68.67,
  30324: 68.67,
  30326: 68.67,
  30327: 68.67,
  30328: 68.67,
  30329: 68.67,
  30331: 68.67,
  30332: 68.67,
  30334: 68.67,
  30336: 68.67,
  30337: 68.67,
  30338: 68.67,
  30339: 68.67,
  30340: 68.67,
  30341: 68.67,
  30342: 68.67,
  30344: 68.67,
  30345: 68.67,
  30346: 68.67,
  30349: 68.67,
  30350: 68.67,
  30354: 68.67,
  30360: 68.67,
  30361: 68.67,
  30363: 71.58,
  30501: 65.77,
  30504: 65.77,
  30506: 65.77,
  30507: 65.77,
  30510: 103.01,
  30511: 103.01,
  30517: 65.77,
  30518: 65.77,
  30519: 65.77,
  30521: 68.67,
  30529: 65.77,
  30530: 65.77,
  30531: 103.01,
  30534: 68.67,
  30536: 71.58,
  30540: 71.58,
  30542: 65.77,
  30543: 68.67,
  30547: 71.58,
  30548: 65.77,
  30549: 65.77,
  30553: 71.58,
  30554: 68.67,
  30558: 65.77,
  30566: 65.77,
  30567: 65.77,
  30575: 71.58,
  30601: 68.67,
  30602: 68.67,
  30605: 68.67,
  30606: 68.67,
  30607: 68.67,
  30620: 68.67,
  30621: 71.58,
  30622: 68.67,
  30650: 71.58,
  30655: 68.67,
  30656: 68.67,
  30663: 71.58,
  30666: 68.67,
  30677: 103.01,
  30680: 65.77,
  30701: 71.58,
  30705: 71.58,
  30720: 71.58,
  30721: 71.58,
  30724: 71.58,
  30734: 71.58
}, $0 = {
  300: 65.77,
  301: 68.67,
  302: 71.58,
  303: 68.67,
  305: 65.77,
  306: 68.67,
  307: 71.58
}, S0 = 68.67, C0 = 0.28, _0 = [
  0,
  100,
  200,
  300,
  400,
  460,
  500,
  540,
  580,
  620,
  660,
  700,
  740,
  780,
  840,
  920,
  1e3,
  1080,
  1160,
  1240,
  1320,
  1420,
  1520,
  1650,
  1800,
  2e3,
  2300,
  2800,
  3500,
  5e3,
  8e3,
  99999
], A0 = {
  "65.77": [
    [
      0,
      51.383
    ],
    [
      100,
      51.383
    ],
    [
      200,
      51.383
    ],
    [
      300,
      51.383
    ],
    [
      400,
      51.383
    ],
    [
      460,
      52.067
    ],
    [
      500,
      54.56
    ],
    [
      540,
      58.712
    ],
    [
      580,
      62.832
    ],
    [
      620,
      66.592
    ],
    [
      660,
      71.158
    ],
    [
      700,
      75.217
    ],
    [
      740,
      77.742
    ],
    [
      780,
      77.789
    ],
    [
      840,
      77.789
    ],
    [
      920,
      77.742
    ],
    [
      1e3,
      80.267
    ],
    [
      1080,
      85.837
    ],
    [
      1160,
      93.352
    ],
    [
      1240,
      98.867
    ],
    [
      1320,
      104.754
    ],
    [
      1420,
      115.342
    ],
    [
      1520,
      119.293
    ],
    [
      1650,
      119.293
    ],
    [
      1800,
      119.42
    ],
    [
      2e3,
      123.089
    ],
    [
      2300,
      149.122
    ],
    [
      2800,
      170.635
    ],
    [
      3500,
      228.043
    ]
  ],
  "68.67": [
    [
      0,
      53.65
    ],
    [
      100,
      53.65
    ],
    [
      200,
      53.65
    ],
    [
      300,
      53.65
    ],
    [
      400,
      53.65
    ],
    [
      460,
      53.65
    ],
    [
      500,
      55.128
    ],
    [
      540,
      59.4
    ],
    [
      580,
      62.575
    ],
    [
      620,
      68.073
    ],
    [
      660,
      70.016
    ],
    [
      700,
      73.592
    ],
    [
      740,
      76.333
    ],
    [
      780,
      75.492
    ],
    [
      840,
      74.629
    ],
    [
      920,
      74.682
    ],
    [
      1e3,
      79.711
    ],
    [
      1080,
      88.951
    ],
    [
      1160,
      90.22
    ],
    [
      1240,
      95.583
    ],
    [
      1320,
      105.116
    ],
    [
      1420,
      109.919
    ],
    [
      1520,
      112.528
    ],
    [
      1650,
      112.492
    ],
    [
      1800,
      126.537
    ],
    [
      2e3,
      126.789
    ],
    [
      2300,
      140.728
    ],
    [
      2800,
      172.9
    ],
    [
      3500,
      230.308
    ]
  ],
  "103.01": [
    [
      0,
      80.48
    ],
    [
      100,
      80.483
    ],
    [
      200,
      80.483
    ],
    [
      300,
      80.483
    ],
    [
      400,
      80.48
    ],
    [
      460,
      80.48
    ],
    [
      500,
      80.483
    ],
    [
      540,
      80.483
    ],
    [
      580,
      80.483
    ],
    [
      620,
      80.482
    ],
    [
      660,
      98.47
    ],
    [
      700,
      102.404
    ],
    [
      740,
      81.187
    ],
    [
      780,
      104.728
    ],
    [
      840,
      104.682
    ],
    [
      920,
      80.483
    ],
    [
      1e3,
      107.466
    ],
    [
      1080,
      113.245
    ],
    [
      1160,
      120.105
    ],
    [
      1240,
      94.398
    ],
    [
      1320,
      133.228
    ],
    [
      1420,
      138.569
    ],
    [
      1520,
      146.121
    ],
    [
      1650,
      146.121
    ],
    [
      1800,
      146.694
    ],
    [
      2e3,
      153.344
    ],
    [
      2300,
      170.796
    ],
    [
      2800,
      199.729
    ],
    [
      3500,
      257.136
    ]
  ],
  "71.58": [
    [
      0,
      55.917
    ],
    [
      100,
      55.917
    ],
    [
      200,
      55.917
    ],
    [
      300,
      55.919
    ],
    [
      400,
      55.919
    ],
    [
      460,
      55.919
    ],
    [
      500,
      56.719
    ],
    [
      540,
      60.592
    ],
    [
      580,
      65.167
    ],
    [
      620,
      68.817
    ],
    [
      660,
      74.235
    ],
    [
      700,
      78.195
    ],
    [
      740,
      80.958
    ],
    [
      780,
      82.072
    ],
    [
      840,
      82.488
    ],
    [
      920,
      80.233
    ],
    [
      1e3,
      82.224
    ],
    [
      1080,
      87.846
    ],
    [
      1160,
      95.462
    ],
    [
      1240,
      102.87
    ],
    [
      1320,
      107.483
    ],
    [
      1420,
      128.919
    ],
    [
      1520,
      134.775
    ],
    [
      1650,
      122.122
    ],
    [
      1800,
      135.569
    ],
    [
      2e3,
      135.147
    ],
    [
      2300,
      152.333
    ],
    [
      2800,
      175.174
    ],
    [
      3500,
      232.582
    ]
  ]
}, L0 = [
  [
    0,
    53.65
  ],
  [
    100,
    53.65
  ],
  [
    200,
    53.65
  ],
  [
    300,
    53.65
  ],
  [
    400,
    53.65
  ],
  [
    460,
    53.65
  ],
  [
    500,
    55.341
  ],
  [
    540,
    59.219
  ],
  [
    580,
    63.152
  ],
  [
    620,
    67.21
  ],
  [
    660,
    71.642
  ],
  [
    700,
    75.576
  ],
  [
    740,
    77.792
  ],
  [
    780,
    77.9
  ],
  [
    840,
    77.854
  ],
  [
    920,
    77.792
  ],
  [
    1e3,
    80.638
  ],
  [
    1080,
    86.417
  ],
  [
    1160,
    93.276
  ],
  [
    1240,
    98.837
  ],
  [
    1320,
    106.4
  ],
  [
    1420,
    111.741
  ],
  [
    1520,
    119.293
  ],
  [
    1650,
    119.293
  ],
  [
    1800,
    119.865
  ],
  [
    2e3,
    126.516
  ],
  [
    2300,
    143.967
  ],
  [
    2800,
    172.9
  ],
  [
    3500,
    230.308
  ]
], B0 = [
  1,
  2,
  3,
  4,
  6,
  9,
  99
], P0 = [
  0,
  1,
  2,
  4,
  8,
  16,
  999
], W0 = [
  0,
  500,
  800,
  1200,
  2e3,
  4e3,
  99999
], O0 = {
  "68.67|0|0|0": 0,
  "65.77|4|0|3": 0.049,
  "68.67|1|0|2": 1.659,
  "68.67|0|0|4": -12.639,
  "65.77|0|0|0": 0,
  "65.77|2|0|2": -0.456,
  "71.58|0|0|0": -5e-3,
  "65.77|0|4|0": 22.442,
  "65.77|1|0|1": -1.74,
  "68.67|1|3|3": 12.793,
  "68.67|1|0|1": -0.187,
  "68.67|0|2|0": 0,
  "68.67|1|0|0": 0,
  "65.77|3|0|2": -0.665,
  "65.77|0|0|1": -2.352,
  "68.67|1|1|2": 7.281,
  "71.58|2|1|2": 8.725,
  "65.77|0|1|0": 0,
  "68.67|3|0|1": 18.066,
  "71.58|0|1|0": -3e-3,
  "65.77|1|0|0": 0,
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
  "68.67|0|1|0": 0,
  "68.67|2|0|3": 2.08,
  "68.67|3|0|2": 7.005,
  "65.77|1|0|3": -1.699,
  "71.58|0|2|0": -3e-3,
  "65.77|3|0|5": -84.054,
  "103.01|0|0|0": -0,
  "71.58|1|0|3": -3.985,
  "68.67|0|4|0": 25.405,
  "68.67|0|3|0": 0,
  "68.67|4|0|4": -4.739,
  "65.77|2|0|1": 0.503,
  "65.77|5|0|4": -9.914,
  "71.58|1|0|2": -0.855,
  "65.77|0|0|2": -0.616,
  "68.67|2|0|0": 1.28,
  "65.77|0|0|3": -2.242,
  "65.77|3|1|4": -7.673,
  "71.58|1|0|0": -3e-3,
  "65.77|2|2|4": 4.59,
  "71.58|0|3|0": 0,
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
  "65.77|0|2|0": 0,
  "65.77|0|1|2": -0.947,
  "65.77|0|3|1": 32.897,
  "65.77|5|0|5": -128.182,
  "68.67|2|0|4": -1.993,
  "68.67|3|2|3": 17.481,
  "65.77|0|2|1": 18.063,
  "65.77|1|0|4": -7.933,
  "68.67|3|3|2": 55.223,
  "68.67|0|1|1": 2.42,
  "68.67|1|1|0": 0,
  "71.58|1|1|0": -3e-3,
  "71.58|3|0|5": -124.194,
  "65.77|1|1|0": 0,
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
  "65.77|4|0|0": 0,
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
  "103.01|1|0|1": -6e-3,
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
  "103.01|0|3|0": 0,
  "68.67|0|4|1": 35.041,
  "68.67|5|2|4": 14.687,
  "103.01|1|0|0": 0,
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
  "103.01|0|2|0": -3e-3,
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
  "103.01|0|1|0": 0,
  "65.77|3|3|3": 34.592,
  "68.67|3|5|4": 120.805,
  "71.58|2|1|0": -4e-3,
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
  "103.01|2|0|0": -1e-3,
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
}, E0 = {
  "0|0|0": 0,
  "4|0|3": 1.065,
  "1|0|2": 0.012,
  "0|0|4": -11.348,
  "2|0|2": -0.106,
  "0|4|0": 23.706,
  "1|0|1": -1.496,
  "1|3|3": 17.661,
  "0|2|0": 0,
  "1|0|0": 0,
  "3|0|2": 1.216,
  "0|0|1": -2.091,
  "1|1|2": 6.075,
  "2|1|2": 7.245,
  "0|1|0": 0,
  "3|0|1": 21.144,
  "2|1|5": -105.197,
  "1|0|3": -1.311,
  "3|0|3": -0.101,
  "2|0|3": -0.074,
  "3|0|4": -7.743,
  "4|0|4": -7.925,
  "0|3|0": 0,
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
  "1|1|0": 0,
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
}, T0 = {
  "0|0": 0,
  "4|0": -2.812,
  "1|0": 0,
  "2|0": 0,
  "0|4": 27.163,
  "1|3": 27.809,
  "0|2": 0,
  "3|0": -0.084,
  "1|1": 2.606,
  "2|1": 4.655,
  "0|1": 0,
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
}, j0 = {
  Z1: {
    "< 500": 65.77,
    "500 - 999": 83.79,
    "1,000 - 2,499": 123.73,
    "2,500 - 4,999": 190.88,
    "5,000 - 9,999": 659.31,
    "10,000 +": 1184.18
  },
  Z2: {
    "< 500": 68.67,
    "500 - 999": 84.63,
    "1,000 - 2,499": 121.42,
    "2,500 - 4,999": 180.29,
    "5,000 - 9,999": 662.21,
    "10,000 +": 1187.08
  },
  Z3: {
    "< 500": 71.57,
    "500 - 999": 87.19,
    "1,000 - 2,499": 125.11,
    "2,500 - 4,999": 194.99,
    "5,000 - 9,999": 665.12,
    "10,000 +": 1189.99
  },
  Z4: {
    "< 500": 103.01,
    "500 - 999": 103.02,
    "1,000 - 2,499": 120.51,
    "2,500 - 4,999": 189.35,
    "5,000 - 9,999": 696.54,
    "10,000 +": 1221.4
  }
}, D0 = [
  "< 500",
  "500 - 999",
  "1,000 - 2,499",
  "2,500 - 4,999",
  "5,000 - 9,999",
  "10,000 +"
], F0 = {
  Z1: [
    "5,000 - 9,999",
    "10,000 +"
  ],
  Z2: [
    "5,000 - 9,999",
    "10,000 +"
  ],
  Z3: [
    "5,000 - 9,999",
    "10,000 +"
  ],
  Z4: [
    "2,500 - 4,999",
    "5,000 - 9,999",
    "10,000 +"
  ]
}, R0 = {
  Z1: 65.77,
  Z2: 68.67,
  Z3: 71.58,
  Z4: 103.01
}, q0 = {
  50: 0.63,
  55: 0.69,
  60: 0.74,
  65: 0.8,
  70: 0.86,
  85: 1,
  100: 1.14,
  110: 1.22,
  125: 1.35,
  150: 1.51,
  175: 1.71,
  200: 1.94,
  250: 2.29,
  300: 2.69,
  "77.5": 0.94,
  "92.5": 1.06
}, I0 = 85, H0 = {
  70: 6.2,
  85: 30.2,
  100: 5.3,
  110: 2,
  125: 1.4,
  150: 1.3,
  175: 0.8,
  "77.5": 39,
  "92.5": 13.2
}, h0 = {
  zone5: Z0,
  zone3: $0,
  global_: S0,
  fuel_embedded: C0,
  KN: _0,
  curves: A0,
  pk: L0,
  SKB: B0,
  LOB: P0,
  WBc: W0,
  resM: O0,
  resG: E0,
  resW: T0,
  rateSheet: j0,
  breaks: D0,
  estCells: F0,
  zoneMin: R0,
  classMult: q0,
  classDefault: I0,
  classMix: H0
}, U0 = "v0.9", G0 = (r, t) => {
  let a = 0, i = r.length;
  for (; a < i; ) {
    const c = a + i >> 1;
    r[c] <= t ? a = c + 1 : i = c;
  }
  return a;
}, H = (r, t) => G0(r, t) - 1;
function J0(r, t) {
  if (t <= r[0][0]) return r[0][1];
  const a = r.length;
  if (t >= r[a - 1][0]) {
    const [i, c] = r[a - 2], [s, h] = r[a - 1];
    return s === i ? h : c + (h - c) * (t - i) / (s - i);
  }
  for (let i = 1; i < a; i++)
    if (t <= r[i][0]) {
      const [c, s] = r[i - 1], [h, f] = r[i];
      return h > c ? s + (f - s) * (t - c) / (h - c) : s;
    }
  return r[a - 1][1];
}
const j = { 65.77: "Z1", 68.67: "Z2", 71.58: "Z3", 103.01: "Z4" }, K0 = (r) => j[Math.round(r * 100) / 100] || "Z?", _ = (r) => r.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 }), Q0 = (r, t) => (t = String(t), r.zone5[t] ?? r.zone3[t.slice(0, 3)] ?? r.global_), Y0 = (r, t, a) => Math.max(J0(r.curves[String(Math.round(t * 100) / 100)] || r.pk, a), t / 1.28);
function V0(r, t, a, i, c) {
  const s = Math.round(t * 100) / 100, h = H(r.SKB, Math.max(a, 1)), f = H(r.LOB, i), u = H(r.WBc, c), g = `${s}|${h}|${f}|${u}`;
  if (g in r.resM) return r.resM[g];
  const m = `${h}|${f}|${u}`;
  if (m in r.resG) return r.resG[m];
  const d = `${h}|${f}`;
  return d in r.resW ? r.resW[d] : 0;
}
function f0(r, t, a, i, c) {
  const s = Q0(r, t);
  return { zb: s, lh: Y0(r, s, a) + V0(r, s, i, c, a) };
}
function X0(r) {
  const t = { Z1: { min: 65.77, zips: [], pfx: [] }, Z2: { min: 68.67, zips: [], pfx: [] }, Z3: { min: 71.58, zips: [], pfx: [] }, Z4: { min: 103.01, zips: [], pfx: [] } };
  for (const [a, i] of Object.entries(r.zone5)) {
    const c = j[Math.round(i * 100) / 100];
    t[c] && t[c].zips.push(a);
  }
  for (const [a, i] of Object.entries(r.zone3)) {
    const c = j[Math.round(i * 100) / 100];
    t[c] && t[c].pfx.push(a);
  }
  for (const a in t)
    t[a].zips.sort(), t[a].pfx.sort();
  return t;
}
function fe(r, { zip: t, weight: a, skids: i = 1, loose: c = 0, fuelPct: s = 28, marginPct: h = 0 }) {
  const f = Number(a) || 0, u = (Number(s) || 0) / 100, g = (Number(h) || 0) / 100, m = f0(r, t, f, i, c), d = m.lh * (1 + u);
  return { zone: j[Math.round(m.zb * 100) / 100] || "Z?", zb: m.zb, linehaul: m.lh, fuelAmt: m.lh * u, allIn: d, quoted: d * (1 + g) };
}
const ue = h0;
let y = h0;
const u0 = (r, t, a, i) => f0(y, r, t, a, i);
function ee(r, t, a, i) {
  return r ? t > 6 || a > 2500 || i > 4 ? { key: "est", label: "estimate", note: "Heavy or high-piece freight prices with wider variance — treat this as a starting figure." } : i > 0 ? { key: "std", label: "has loose freight", note: "Loose pieces run looser than pallet freight — within $5 on ~69% vs ~94% pallet-only." } : t <= 4 && a <= 1500 ? { key: "core", label: "high confidence", note: "Pallet freight in the core range — matches Uline within $5 on ~94% of shipments." } : { key: "std", label: "standard", note: "Weight-and-zone estimate — Uline's basis for this lane." } : { key: "est", label: "estimate", note: "This ZIP isn't in the recent Uline data — rate is estimated from the surrounding area zone." };
}
const T = { orange: "#f96332", blue: "#2ca8ff", green: "#18ce0f", purple: "#9368e9", red: "#ff3636" }, re = { orange: "#e8521f", blue: "#1f93e6", green: "#15b30d", purple: "#7e52d8", red: "#e62a2a" }, te = { orange: "#f9633233", blue: "#2ca8ff33", green: "#18ce0f33", purple: "#9368e933", red: "#ff363633" }, ae = `
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
function d0({ value: r, set: t, min: a = 0 }) {
  return /* @__PURE__ */ n("div", { className: "rc-step", children: [
    /* @__PURE__ */ e("button", { onClick: () => t(Math.max(a, r - 1)), disabled: r <= a, "aria-label": "decrease", children: "−" }),
    /* @__PURE__ */ e("span", { className: "rc-count", children: r }),
    /* @__PURE__ */ e("button", { onClick: () => t(r + 1), "aria-label": "increase", children: "+" })
  ] });
}
const U = "uline_customer_profiles_v1", p0 = [
  { id: "list", name: "List (Uline)", markup: 0, locked: !0 },
  { id: "retail", name: "Retail +15%", markup: 15 }
], G = typeof window < "u" && window.storage && typeof window.storage.get == "function" ? { get: (r) => window.storage.get(r), set: (r, t) => window.storage.set(r, t) } : typeof window < "u" && window.localStorage ? {
  get: async (r) => {
    const t = window.localStorage.getItem(r);
    return t == null ? null : { value: t };
  },
  set: async (r, t) => (window.localStorage.setItem(r, t), { value: t })
} : { get: async () => null, set: async () => null };
function C({ label: r, hint: t, children: a, full: i }) {
  return /* @__PURE__ */ n("div", { className: "rc-field" + (i ? " col" : ""), children: [
    /* @__PURE__ */ n("span", { className: "rc-label", children: [
      r,
      t && /* @__PURE__ */ e("span", { className: "rc-hint", children: t })
    ] }),
    a
  ] });
}
function ne({ accent: r, setAccent: t }) {
  return /* @__PURE__ */ e("div", { className: "rc-accents", role: "group", "aria-label": "Accent color", children: Object.entries(T).map(([a, i]) => /* @__PURE__ */ e("button", { className: "rc-acc" + (r === a ? " on" : ""), style: { background: i, color: i }, "aria-label": a, "aria-pressed": r === a, onClick: () => t(a) }, a)) });
}
function oe({ tab: r, setTab: t }) {
  return /* @__PURE__ */ e("div", { className: "rc-tabs", role: "tablist", children: [["quote", "Quote"], ["zones", "Zones"], ["sheet", "Rate sheet"]].map(([a, i]) => /* @__PURE__ */ e("button", { role: "tab", "aria-selected": r === a, className: "rc-tab" + (r === a ? " on" : ""), onClick: () => t(a), children: i }, a)) });
}
function ie({ zip: r, skids: t, loose: a, weight: i, accentHex: c }) {
  const u = [];
  for (let v = 120; v <= 2500; v += 95) u.push(v);
  const g = u.map((v) => u0(r, v, t, a).lh), m = Math.min(...g), d = Math.max(...g), z = d - m || 1, l = (v) => 5 + (320 - 2 * 5) * v / (u.length - 1), W = (v) => 59 - (64 - 2 * 5) * (v - m) / z, M = u.map((v, N) => `${N ? "L" : "M"}${l(N).toFixed(1)} ${W(g[N]).toFixed(1)}`).join(" "), D = `${M} L ${l(u.length - 1).toFixed(1)} 64 L ${l(0).toFixed(1)} 64 Z`, Z = Number(i) || 0;
  let B = 0, $ = 1 / 0;
  return u.forEach((v, N) => {
    const S = Math.abs(v - Z);
    S < $ && ($ = S, B = N);
  }), /* @__PURE__ */ n("svg", { className: "rc-spark", viewBox: "0 0 320 64", role: "img", "aria-label": "Rate by weight for the selected zone", children: [
    /* @__PURE__ */ e("defs", { children: /* @__PURE__ */ n("linearGradient", { id: "rcfill", x1: "0", y1: "0", x2: "0", y2: "1", children: [
      /* @__PURE__ */ e("stop", { offset: "0%", stopColor: "#fff", stopOpacity: "0.20" }),
      /* @__PURE__ */ e("stop", { offset: "100%", stopColor: "#fff", stopOpacity: "0" })
    ] }) }),
    /* @__PURE__ */ e("path", { d: D, fill: "url(#rcfill)" }),
    /* @__PURE__ */ e("path", { d: M, fill: "none", stroke: "#fff", strokeOpacity: "0.92", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }),
    /* @__PURE__ */ e("circle", { cx: l(B), cy: W(g[B]), r: "4", fill: c, stroke: "#fff", strokeWidth: "1.6" })
  ] });
}
function ce({ accentHex: r }) {
  const t = [["Z1", 65.77], ["Z2", 68.67], ["Z3", 71.58], ["Z4", 103.01]], a = 103.01, i = 320, c = 96, s = 46, h = (i - 4 * s) / 5;
  return /* @__PURE__ */ e("svg", { viewBox: `0 0 ${i} ${c}`, style: { display: "block", width: "100%", height: "auto" }, role: "img", "aria-label": "Minimum charge by zone", children: t.map(([f, u], g) => {
    const m = (c - 30) * (u / a), d = h + g * (s + h), z = c - 20 - m;
    return /* @__PURE__ */ n("g", { children: [
      /* @__PURE__ */ e("rect", { x: d, y: z, width: s, height: m, rx: "5", fill: r, opacity: "0.88" }),
      /* @__PURE__ */ e("text", { x: d + s / 2, y: c - 5, textAnchor: "middle", className: "rc-barlbl", children: f }),
      /* @__PURE__ */ n("text", { x: d + s / 2, y: z - 5, textAnchor: "middle", className: "rc-barval", children: [
        "$",
        Math.round(u)
      ] })
    ] }, f);
  }) });
}
function J({ k: r, v: t, disc: a }) {
  return /* @__PURE__ */ n("div", { className: "rc-lrow", children: [
    /* @__PURE__ */ e("span", { className: "rc-lk", children: r }),
    /* @__PURE__ */ e("span", { className: "rc-lv" + (a ? " disc" : ""), children: t })
  ] });
}
function se({ profiles: r, profileId: t, marginPct: a, curProfile: i, showAdd: c, newName: s, newMk: h, selectProfile: f, saveProfile: u, deleteProfile: g, setShowAdd: m, setNewName: d, setNewMk: z }) {
  return /* @__PURE__ */ n(C, { full: !0, label: "Customer profile", hint: "Applies a saved markup or discount", children: [
    /* @__PURE__ */ n("select", { className: "rc-select", value: t, onChange: (l) => f(l.target.value), children: [
      r.map((l) => /* @__PURE__ */ n("option", { value: l.id, children: [
        l.name,
        l.id !== "list" ? `  (${l.markup > 0 ? "+" : ""}${l.markup}%)` : ""
      ] }, l.id)),
      t === "__custom__" && /* @__PURE__ */ n("option", { value: "__custom__", children: [
        "Custom (",
        a > 0 ? "+" : "",
        a,
        "%)"
      ] }),
      /* @__PURE__ */ e("option", { value: "__add__", children: "+ Add customer profile…" })
    ] }),
    c && /* @__PURE__ */ n("div", { className: "rc-addbox", children: [
      /* @__PURE__ */ e("input", { className: "rc-input nm", placeholder: "Customer name", value: s, onChange: (l) => d(l.target.value) }),
      /* @__PURE__ */ e("input", { className: "rc-input mk", inputMode: "decimal", placeholder: "%", value: h, onChange: (l) => z(l.target.value.replace(/[^0-9.\-]/g, "")) }),
      /* @__PURE__ */ e("button", { className: "rc-btn primary", onClick: u, children: "Save" }),
      /* @__PURE__ */ e("button", { className: "rc-btn", onClick: () => {
        m(!1), d(""), z("");
      }, children: "Cancel" })
    ] }),
    i && !i.locked && t !== "__custom__" && !c && /* @__PURE__ */ n("button", { className: "rc-link", onClick: g, children: [
      'Delete "',
      i.name,
      '"'
    ] })
  ] });
}
function le({ name: r, info: t, rateRow: a }) {
  const [i, c] = b(!1);
  return /* @__PURE__ */ n("div", { className: "rc-card", style: { marginBottom: 0 }, children: [
    /* @__PURE__ */ n("div", { className: "rc-zhd", children: [
      /* @__PURE__ */ n("div", { children: [
        /* @__PURE__ */ n("div", { className: "rc-zname", children: [
          "Zone ",
          r
        ] }),
        /* @__PURE__ */ n("div", { className: "rc-zct", children: [
          t.zips.length,
          " ZIPs",
          t.pfx.length ? ` · ${t.pfx.length} area fallbacks` : ""
        ] })
      ] }),
      /* @__PURE__ */ n("div", { children: [
        /* @__PURE__ */ n("div", { className: "rc-zmin", children: [
          "$",
          _(t.min)
        ] }),
        /* @__PURE__ */ e("div", { className: "rc-zminl", children: "min charge" })
      ] })
    ] }),
    /* @__PURE__ */ n("div", { className: "rc-zbody", children: [
      /* @__PURE__ */ n("div", { className: "rc-zrate", children: [
        "All-in @ 28%, single pallet — ",
        /* @__PURE__ */ n("b", { children: [
          "$",
          a["500 - 999"]
        ] }),
        " at 500–999 lb · ",
        /* @__PURE__ */ n("b", { children: [
          "$",
          a["1,000 - 2,499"]
        ] }),
        " at 1,000–2,499 lb"
      ] }),
      /* @__PURE__ */ e("div", { className: "rc-zips", children: (i ? t.zips : t.zips.slice(0, 24)).map((s) => /* @__PURE__ */ e("span", { className: "rc-zchip", children: s }, s)) }),
      t.zips.length > 24 && /* @__PURE__ */ e("button", { className: "rc-zmore", onClick: () => c(!i), children: i ? "Show fewer" : `Show all ${t.zips.length} ZIPs` }),
      t.pfx.length > 0 && /* @__PURE__ */ n("div", { className: "rc-pfx", children: [
        "Area fallbacks (3-digit): ",
        /* @__PURE__ */ e("b", { children: t.pfx.join(", ") })
      ] })
    ] })
  ] });
}
function de() {
  return /* @__PURE__ */ n("div", { className: "rc-card", children: [
    /* @__PURE__ */ n("div", { className: "rc-chead", children: [
      /* @__PURE__ */ e("div", { className: "rc-ccat", children: "All-in @ 28% fuel" }),
      /* @__PURE__ */ e("h3", { className: "rc-ctitle", children: "Rate sheet by weight break" }),
      /* @__PURE__ */ e("p", { className: "rc-csub", children: "Single pallet, normalized across 18 months. Italic cells (5,000 lb+) are thin on Uline volume — loose and bulky freight rates higher." })
    ] }),
    /* @__PURE__ */ e("div", { className: "rc-tblwrap", children: /* @__PURE__ */ n("table", { className: "rc-tbl", children: [
      /* @__PURE__ */ e("thead", { children: /* @__PURE__ */ n("tr", { children: [
        /* @__PURE__ */ e("th", { children: "Weight (lb)" }),
        /* @__PURE__ */ e("th", { children: "Z1" }),
        /* @__PURE__ */ e("th", { children: "Z2" }),
        /* @__PURE__ */ e("th", { children: "Z3" }),
        /* @__PURE__ */ e("th", { children: "Z4" })
      ] }) }),
      /* @__PURE__ */ e("tbody", { children: y.breaks.map((r) => /* @__PURE__ */ n("tr", { children: [
        /* @__PURE__ */ e("td", { className: "brk", children: r }),
        ["Z1", "Z2", "Z3", "Z4"].map((t) => /* @__PURE__ */ n("td", { className: y.estCells[t].includes(r) ? "est" : "", children: [
          "$",
          _(y.rateSheet[t][r])
        ] }, t))
      ] }, r)) })
    ] }) })
  ] });
}
function ge({ model: r, modelUrl: t, initialZip: a, initialWeight: i, initialSkids: c, initialLoose: s, embedded: h } = {}) {
  const [f, u] = b("orange"), [g, m] = b("quote"), [d, z] = b(a != null ? String(a).replace(/[^0-9]/g, "").slice(0, 5) : "30127"), [l, W] = b(i != null ? String(Math.max(0, Math.round(Number(i) || 0))) : "1330"), [M, D] = b(c != null ? Number(c) : 3), [Z, B] = b(s != null ? Number(s) : 0), [$, v] = b("28"), [N, S] = b("0"), [A, K] = b(p0), [O, E] = b("list"), [g0, F] = b(!1), [Q, Y] = b(""), [V, X] = b(""), [e0, r0] = b(0);
  I(() => {
    if (r && r.zone5) {
      y = r, r0((o) => o + 1);
      return;
    }
    if (t) {
      let o = !0;
      return fetch(t).then((p) => p.json()).then((p) => {
        o && p && p.zone5 && (y = p, r0((w) => w + 1));
      }).catch(() => {
      }), () => {
        o = !1;
      };
    }
  }, [r, t]), I(() => {
    (async () => {
      try {
        const o = await G.get(U);
        if (o && o.value) {
          const p = JSON.parse(o.value);
          Array.isArray(p) && p.length && K(p);
        } else
          await G.set(U, JSON.stringify(p0));
      } catch {
      }
    })();
  }, []);
  const t0 = async (o) => {
    K(o);
    try {
      await G.set(U, JSON.stringify(o));
    } catch {
    }
  }, m0 = (o) => {
    if (o === "__add__") {
      F(!0);
      return;
    }
    const p = A.find((w) => w.id === o);
    p && (E(o), S(String(p.markup)));
  }, v0 = () => {
    const o = Q.trim();
    if (!o) return;
    const p = Number(V) || 0, w = "p" + Date.now(), L = [...A, { id: w, name: o, markup: p }];
    t0(L), E(w), S(String(p)), F(!1), Y(""), X("");
  }, b0 = () => {
    const o = A.find((w) => w.id === O);
    if (!o || o.locked) return;
    const p = A.filter((w) => w.id !== O);
    t0(p), E("list"), S("0");
  }, x0 = (o) => {
    S(o), E("__custom__");
  }, k = l0(() => {
    const o = Number(l) || 0, p = (Number($) || 0) / 100, w = (Number(N) || 0) / 100, L = u0(d, o, M, Z), R = L.lh * (1 + p), c0 = R * (1 + w), y0 = Math.max(M + Z, 1), s0 = String(d) in y.zone5;
    return { zb: L.zb, lh: L.lh, fuelAmt: L.lh * p, allIn: R, quoted: c0, marginAmt: c0 - R, zipFound: s0, conf: ee(s0, y0, o, Z) };
  }, [d, l, M, Z, $, N, e0]), a0 = M0(null);
  I(() => {
    const o = a0.current;
    o && (o.classList.remove("rc-anim"), o.offsetWidth, o.classList.add("rc-anim"));
  }, [k.quoted]);
  const n0 = Number($) || 0, x = Number(N) || 0, o0 = x === 0 ? "" : x > 0 ? `+${x}% margin` : `${x}% discount`, P = A.find((o) => o.id === O), w0 = P && P.id !== "list" && P.id !== "__custom__" ? " · " + P.name : "", k0 = `${x === 0 ? "all-in" : "quote"} · ${n0}% fuel${o0 ? " · " + o0 : ""}${w0}`, i0 = k.conf.key === "core" ? "ok" : k.conf.key === "est" ? "warn" : "", N0 = l0(() => X0(y), [e0]), z0 = { "--accent": T[f], "--accent-d": re[f], "--accent-ring": te[f] };
  return /* @__PURE__ */ n("div", { className: "rc-root" + (h ? " rc-embedded" : ""), style: z0, children: [
    /* @__PURE__ */ e("style", { children: ae }),
    /* @__PURE__ */ n("div", { className: "rc-wrap", children: [
      /* @__PURE__ */ n("header", { className: "rc-head", children: [
        /* @__PURE__ */ n("div", { className: "rc-brand", children: [
          /* @__PURE__ */ e("div", { className: "rc-logo", children: "D" }),
          /* @__PURE__ */ n("div", { children: [
            /* @__PURE__ */ e("div", { className: "rc-bk", children: "Davis Delivery" }),
            /* @__PURE__ */ e("div", { className: "rc-bs", children: "Uline Rate Console" })
          ] })
        ] }),
        /* @__PURE__ */ n("div", { className: "rc-right", children: [
          /* @__PURE__ */ e(ne, { accent: f, setAccent: u }),
          /* @__PURE__ */ e("span", { className: "rc-ver", children: U0 })
        ] })
      ] }),
      /* @__PURE__ */ e(oe, { tab: g, setTab: m }),
      g === "quote" && /* @__PURE__ */ n(q, { children: [
        /* @__PURE__ */ n("div", { className: "rc-hero", children: [
          /* @__PURE__ */ e("div", { className: "rc-cat", children: x === 0 ? "All-in quote" : "Customer quote" }),
          /* @__PURE__ */ n("div", { className: "rc-price", children: [
            /* @__PURE__ */ e("span", { className: "rc-cur", children: "$" }),
            /* @__PURE__ */ e("span", { className: "rc-amt", ref: a0, children: _(k.quoted) })
          ] }),
          /* @__PURE__ */ e("div", { className: "rc-sub", children: k0 }),
          /* @__PURE__ */ n("div", { className: "rc-hstatus", children: [
            /* @__PURE__ */ n("span", { className: "rc-hpill " + i0, children: [
              /* @__PURE__ */ e("span", { className: "rc-hdot" }),
              k.conf.label
            ] }),
            /* @__PURE__ */ n("span", { className: "rc-hpill", children: [
              "zone ",
              K0(k.zb)
            ] }),
            /* @__PURE__ */ e("span", { className: "rc-hpill", children: String(d).slice(0, 5) || "—" })
          ] }),
          /* @__PURE__ */ e("div", { className: "rc-sparkwrap", children: /* @__PURE__ */ e(ie, { zip: d, skids: M, loose: Z, weight: l, accentHex: T[f] }) })
        ] }),
        /* @__PURE__ */ n("div", { className: "rc-card", children: [
          /* @__PURE__ */ n("div", { className: "rc-chead", children: [
            /* @__PURE__ */ e("div", { className: "rc-ccat", children: "Breakdown" }),
            /* @__PURE__ */ e("h3", { className: "rc-ctitle", children: "Charge detail" })
          ] }),
          /* @__PURE__ */ n("div", { className: "rc-ledger", children: [
            /* @__PURE__ */ e(J, { k: "Linehaul", v: "$" + _(k.lh) }),
            /* @__PURE__ */ e(J, { k: `Fuel · ${n0}%`, v: "$" + _(k.fuelAmt) }),
            x !== 0 && /* @__PURE__ */ e(J, { k: `${x > 0 ? "Margin" : "Discount"} · ${x > 0 ? "+" : ""}${x}%`, v: (x < 0 ? "−" : "+") + "$" + _(Math.abs(k.marginAmt)), disc: x < 0 }),
            /* @__PURE__ */ n("div", { className: "rc-lrow tot", children: [
              /* @__PURE__ */ e("span", { className: "rc-lk", children: "Quote" }),
              /* @__PURE__ */ n("span", { className: "rc-lv", children: [
                "$",
                _(k.quoted)
              ] })
            ] })
          ] }),
          /* @__PURE__ */ e("div", { className: "rc-divhd", children: "Shipment" }),
          /* @__PURE__ */ n("div", { className: "rc-form", children: [
            /* @__PURE__ */ e(
              se,
              {
                profiles: A,
                profileId: O,
                marginPct: x,
                curProfile: P,
                showAdd: g0,
                newName: Q,
                newMk: V,
                selectProfile: m0,
                saveProfile: v0,
                deleteProfile: b0,
                setShowAdd: F,
                setNewName: Y,
                setNewMk: X
              }
            ),
            /* @__PURE__ */ e(C, { label: "Destination ZIP", hint: "Sets the rate zone", children: /* @__PURE__ */ e("input", { className: "rc-input", inputMode: "numeric", maxLength: 5, value: d, onChange: (o) => z(o.target.value.replace(/[^0-9]/g, "").slice(0, 5)) }) }),
            /* @__PURE__ */ e(C, { label: "Weight", hint: "Total pounds", children: /* @__PURE__ */ e("input", { className: "rc-input", inputMode: "numeric", value: l, onChange: (o) => W(o.target.value.replace(/[^0-9]/g, "")) }) }),
            /* @__PURE__ */ e(C, { label: "Skids", hint: "Pallet count", children: /* @__PURE__ */ e(d0, { value: M, set: D, min: 0 }) }),
            /* @__PURE__ */ e(C, { label: "Loose pieces", hint: "Non-palletized", children: /* @__PURE__ */ e(d0, { value: Z, set: B, min: 0 }) }),
            /* @__PURE__ */ e(C, { full: !0, label: "Fuel surcharge", hint: "2025: 23% → 20% (Jun 14) · 2026: 25% (Mar 21) → 28% (Apr 20)", children: /* @__PURE__ */ n("div", { className: "rc-fuelrow", children: [
              /* @__PURE__ */ e("div", { className: "rc-presets", children: ["20", "23", "25", "28"].map((o) => /* @__PURE__ */ n("button", { className: "rc-preset" + ($ === o ? " on" : ""), onClick: () => v(o), children: [
                o,
                "%"
              ] }, o)) }),
              /* @__PURE__ */ n("div", { className: "rc-sfx", children: [
                /* @__PURE__ */ e("input", { inputMode: "decimal", value: $, onChange: (o) => v(o.target.value.replace(/[^0-9.]/g, "")) }),
                /* @__PURE__ */ e("span", { className: "rc-unit", children: "%" })
              ] })
            ] }) }),
            /* @__PURE__ */ e(C, { full: !0, label: "Margin / discount", hint: "+ markup or − discount on the quote", children: /* @__PURE__ */ n("div", { className: "rc-sfx rc-narrow", children: [
              /* @__PURE__ */ e("input", { inputMode: "decimal", value: N, onChange: (o) => x0(o.target.value.replace(/[^0-9.\-]/g, "")) }),
              /* @__PURE__ */ e("span", { className: "rc-unit", children: "%" })
            ] }) })
          ] }),
          /* @__PURE__ */ n("div", { className: "rc-foot", children: [
            /* @__PURE__ */ n("div", { className: "rc-note " + i0, children: [
              /* @__PURE__ */ e("span", { className: "rc-notedot" }),
              k.conf.note
            ] }),
            /* @__PURE__ */ n("div", { className: "rc-prov", children: [
              "Modeled from ",
              /* @__PURE__ */ e("b", { children: "226,073" }),
              " Uline shipments · ",
              /* @__PURE__ */ e("b", { children: "Jan 2025 – Jun 2026" }),
              ". Base rate flat 18 months. Uline bills on ",
              /* @__PURE__ */ e("b", { children: "weight and zone" }),
              " — freight class and density don't change the rate (verified on 4,737 shipments). Pallet freight matches within $5 on ~94%."
            ] })
          ] })
        ] })
      ] }),
      g === "zones" && /* @__PURE__ */ n(q, { children: [
        /* @__PURE__ */ n("div", { className: "rc-card", children: [
          /* @__PURE__ */ n("div", { className: "rc-chead", children: [
            /* @__PURE__ */ e("div", { className: "rc-ccat", children: "Minimum charge" }),
            /* @__PURE__ */ e("h3", { className: "rc-ctitle", children: "Rate zones" }),
            /* @__PURE__ */ e("p", { className: "rc-csub", children: "Set by destination ZIP. Zones differ almost entirely by minimum charge — per-pound rates are nearly identical (short-haul metro / North GA). Z4 is the far / special tier." })
          ] }),
          /* @__PURE__ */ e("div", { className: "rc-tblwrap", children: /* @__PURE__ */ e(ce, { accentHex: T[f] }) })
        ] }),
        /* @__PURE__ */ e("div", { className: "rc-zwrap", children: ["Z1", "Z2", "Z3", "Z4"].map((o) => /* @__PURE__ */ e(le, { name: o, info: N0[o], rateRow: y.rateSheet[o] }, o)) })
      ] }),
      g === "sheet" && /* @__PURE__ */ n(q, { children: [
        /* @__PURE__ */ e(de, {}),
        /* @__PURE__ */ e("div", { className: "rc-card", children: /* @__PURE__ */ e("div", { className: "rc-foot", style: { borderTop: "none" }, children: /* @__PURE__ */ e("div", { className: "rc-prov", children: "Per-CWT rates decline by weight break: ≈$26/cwt at the minimum, ≈$11/cwt at 500–1,000 lb, ≈$7/cwt at 1,000–2,500 lb. Quote a live figure on the Quote tab." }) }) })
      ] }),
      !h && /* @__PURE__ */ e("div", { className: "rc-pagefoot", children: "Modeled estimate from billing history · not a published Uline tariff" })
    ] })
  ] });
}
export {
  ge as UlineQuoteConsole,
  ue as defaultModel,
  fe as priceQuote
};
