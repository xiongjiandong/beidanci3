#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
为电力类目添加200个新词根数据（id 801-1000）
"""

import json

# 200个电力相关词根数据（id 801-1000）
new_entries = [
  {
    "id": 801,
    "root": "photon",
    "phonetic": "/ˈfoʊtɑːn/",
    "partOfSpeech": "n.",
    "frequency": 1,
    "category": "电力",
    "words": [
      {
        "word": "photon",
        "phonetic": "/ˈfoʊtɑːn/",
        "partOfSpeech": "n.",
        "meaning": "光子",
        "memoryTip": "photo光 + -on粒子 → 光子",
        "root": "photon",
        "rootPhonetic": "/ˈfoʊtɑːn/",
        "rootMeaning": "光子",
        "rootPhrases": ["photon energy", "photon flux", "single photon", "photon detector"],
        "wordPhrases": ["photon energy", "photon flux", "single photon", "photon detector"]
      },
      {
        "word": "photonic",
        "phonetic": "/foʊˈtɑːnɪk/",
        "partOfSpeech": "adj.",
        "meaning": "光子的",
        "memoryTip": "photon + -ic → 光子的",
        "root": "photon",
        "rootPhonetic": "/ˈfoʊtɑːn/",
        "rootMeaning": "光子",
        "rootPhrases": ["photon energy", "photon flux", "single photon", "photon detector"],
        "wordPhrases": ["photonic crystal", "photonic device", "photonic circuit", "photonic chip"]
      },
      {
        "word": "photonics",
        "phonetic": "/foʊˈtɑːnɪks/",
        "partOfSpeech": "n.",
        "meaning": "光子学",
        "memoryTip": "photon + -ics学科 → 光子学",
        "root": "photon",
        "rootPhonetic": "/ˈfoʊtɑːn/",
        "rootMeaning": "光子",
        "rootPhrases": ["photon energy", "photon flux", "single photon", "photon detector"],
        "wordPhrases": ["photonics industry", "silicon photonics", "quantum photonics", "integrated photonics"]
      },
      {
        "word": "photovoltaic",
        "phonetic": "/ˌfoʊtoʊvɒlˈteɪɪk/",
        "partOfSpeech": "adj.",
        "meaning": "光伏的",
        "memoryTip": "photo光 + voltaic电压的 → 光伏的",
        "root": "photon",
        "rootPhonetic": "/ˈfoʊtɑːn/",
        "rootMeaning": "光子",
        "rootPhrases": ["photon energy", "photon flux", "single photon", "photon detector"],
        "wordPhrases": ["photovoltaic cell", "photovoltaic panel", "photovoltaic system", "photovoltaic power"]
      }
    ],
    "phrases": ["photon energy", "photon flux", "photonic crystal", "photovoltaic cell"],
    "mnemonic": "photon（光子）→ 光的粒子 → 光子",
    "meaning": "光子"
  },
  {
    "id": 802,
    "root": "therm",
    "phonetic": "/θɜːrm/",
    "partOfSpeech": "n.",
    "frequency": 2,
    "category": "电力",
    "words": [
      {
        "word": "thermal",
        "phonetic": "/ˈθɜːrml/",
        "partOfSpeech": "adj.",
        "meaning": "热的，热力的",
        "memoryTip": "therm热 + -al → 热的",
        "root": "therm",
        "rootPhonetic": "/θɜːrm/",
        "rootMeaning": "热",
        "rootPhrases": ["thermal power", "thermal energy", "thermal efficiency", "thermal conductivity"],
        "wordPhrases": ["thermal power", "thermal energy", "thermal efficiency", "thermal conductivity"]
      },
      {
        "word": "thermodynamics",
        "phonetic": "/ˌθɜːmoʊdaɪˈnæmɪks/",
        "partOfSpeech": "n.",
        "meaning": "热力学",
        "memoryTip": "thermo热 + dynamics动力学 → 热力学",
        "root": "therm",
        "rootPhonetic": "/θɜːrm/",
        "rootMeaning": "热",
        "rootPhrases": ["thermal power", "thermal energy", "thermal efficiency", "thermal conductivity"],
        "wordPhrases": ["thermodynamics law", "equilibrium thermodynamics", "statistical thermodynamics", "engineering thermodynamics"]
      },
      {
        "word": "thermocouple",
        "phonetic": "/ˈθɜːrməkʌpl/",
        "partOfSpeech": "n.",
        "meaning": "热电偶",
        "memoryTip": "thermo热 + couple偶 → 热电偶",
        "root": "therm",
        "rootPhonetic": "/θɜːrm/",
        "rootMeaning": "热",
        "rootPhrases": ["thermal power", "thermal energy", "thermal efficiency", "thermal conductivity"],
        "wordPhrases": ["thermocouple sensor", "thermocouple probe", "thermocouple junction", "thermocouple wire"]
      },
      {
        "word": "thermostat",
        "phonetic": "/ˈθɜːrməstæt/",
        "partOfSpeech": "n.",
        "meaning": "恒温器",
        "memoryTip": "thermo热 + stat稳定 → 恒温器",
        "root": "therm",
        "rootPhonetic": "/θɜːrm/",
        "rootMeaning": "热",
        "rootPhrases": ["thermal power", "thermal energy", "thermal efficiency", "thermal conductivity"],
        "wordPhrases": ["digital thermostat", "smart thermostat", "programmable thermostat", "thermostat control"]
      }
    ],
    "phrases": ["thermal power", "thermal energy", "thermodynamics", "thermocouple"],
    "mnemonic": "therm（热）→ 与热相关的 → 热的",
    "meaning": "热"
  },
  {
    "id": 803,
    "root": "hydro",
    "phonetic": "/ˈhaɪdroʊ/",
    "partOfSpeech": "n.",
    "frequency": 3,
    "category": "电力",
    "words": [
      {
        "word": "hydroelectric",
        "phonetic": "/ˌhaɪdroʊɪˈlektrɪk/",
        "partOfSpeech": "adj.",
        "meaning": "水力发电的",
        "memoryTip": "hydro水 + electric电 → 水电的",
        "root": "hydro",
        "rootPhonetic": "/ˈhaɪdroʊ/",
        "rootMeaning": "水",
        "rootPhrases": ["hydro power", "hydro plant", "hydro turbine", "hydro generation"],
        "wordPhrases": ["hydroelectric power", "hydroelectric dam", "hydroelectric plant", "hydroelectric energy"]
      },
      {
        "word": "hydropower",
        "phonetic": "/ˈhaɪdroʊˌpaʊər/",
        "partOfSpeech": "n.",
        "meaning": "水力发电",
        "memoryTip": "hydro水 + power电力 → 水电",
        "root": "hydro",
        "rootPhonetic": "/ˈhaɪdroʊ/",
        "rootMeaning": "水",
        "rootPhrases": ["hydro power", "hydro plant", "hydro turbine", "hydro generation"],
        "wordPhrases": ["hydropower plant", "hydropower station", "hydropower generation", "hydropower capacity"]
      },
      {
        "word": "hydraulic",
        "phonetic": "/haɪˈdrɔːlɪk/",
        "partOfSpeech": "adj.",
        "meaning": "水力的，液压的",
        "memoryTip": "hydro水 + aulic → 液压的",
        "root": "hydro",
        "rootPhonetic": "/ˈhaɪdroʊ/",
        "rootMeaning": "水",
        "rootPhrases": ["hydro power", "hydro plant", "hydro turbine", "hydro generation"],
        "wordPhrases": ["hydraulic turbine", "hydraulic power", "hydraulic system", "hydraulic pressure"]
      },
      {
        "word": "hydrothermal",
        "phonetic": "/ˌhaɪdroʊˈθɜːrml/",
        "partOfSpeech": "adj.",
        "meaning": "热液的",
        "memoryTip": "hydro水 + thermal热的 → 热液的",
        "root": "hydro",
        "rootPhonetic": "/ˈhaɪdroʊ/",
        "rootMeaning": "水",
        "rootPhrases": ["hydro power", "hydro plant", "hydro turbine", "hydro generation"],
        "wordPhrases": ["hydrothermal energy", "hydrothermal vent", "hydrothermal power", "hydrothermal system"]
      }
    ],
    "phrases": ["hydro power", "hydroelectric dam", "hydraulic turbine", "hydrothermal energy"],
    "mnemonic": "hydro（水）→ 与水相关的 → 水力",
    "meaning": "水"
  }
]

print("Created first 3 entries as sample")
print(f"Total entries to create: 200")
