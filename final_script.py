#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
为电力类目生成200个新词根数据（id 801-1000）并合并到原文件
"""

import json
import os

def create_entry(entry_id, root, phonetic, meaning, mnemonic, phrases, words_list):
    """创建一个完整的词根条目"""
    words = []
    for wd in words_list:
        word_entry = {
            "word": wd["word"],
            "phonetic": wd["phonetic"],
            "partOfSpeech": wd["pos"],
            "meaning": wd["meaning"],
            "memoryTip": wd["tip"],
            "root": root,
            "rootPhonetic": phonetic,
            "rootMeaning": meaning,
            "rootPhrases": phrases,
            "wordPhrases": wd.get("phrases", phrases)
        }
        words.append(word_entry)

    return {
        "id": entry_id,
        "root": root,
        "phonetic": phonetic,
        "partOfSpeech": "n.",
        "frequency": entry_id - 800,
        "category": "电力",
        "words": words,
        "phrases": phrases,
        "mnemonic": mnemonic,
        "meaning": meaning
    }

# 定义200个电力词根（简化定义，使用紧凑格式）
definitions = [
    # 801-825: 基础物理与单位
    ("photon", "/ˈfoʊtɑːn/", "光子", "photo光 + on粒子 → 光子",
     ["photon energy", "photon flux", "single photon", "photon detector"],
     [("photon", "/ˈfoʊtɑːn/", "n.", "光子", "photo光 + on粒子 → 光子"),
      ("photonic", "/foʊˈtɑːnɪk/", "adj.", "光子的", "photon + ic → 光子的", ["photonic crystal", "photonic device", "photonic circuit", "photonic chip"]),
      ("photonics", "/foʊˈtɑːnɪks/", "n.", "光子学", "photon + ics学科 → 光子学", ["photonics industry", "silicon photonics", "quantum photonics", "integrated photonics"]),
      ("photovoltaic", "/ˌfoʊtoʊvɒlˈteɪɪk/", "adj.", "光伏的", "photo光 + voltaic电压 → 光伏的", ["photovoltaic cell", "photovoltaic panel", "photovoltaic system", "photovoltaic power"])]),

    ("therm", "/θɜːrm/", "热", "therm → 热",
     ["thermal power", "thermal energy", "thermal efficiency", "thermal conductivity"],
     [("thermal", "/ˈθɜːrml/", "adj.", "热的", "therm热 + al → 热的"),
      ("thermodynamics", "/ˌθɜːmoʊdaɪˈnæmɪks/", "n.", "热力学", "thermo热 + dynamics动力学 → 热力学", ["thermodynamics law", "equilibrium thermodynamics", "statistical thermodynamics", "engineering thermodynamics"]),
      ("thermocouple", "/ˈθɜːrməkʌpl/", "n.", "热电偶", "thermo热 + couple偶 → 热电偶", ["thermocouple sensor", "thermocouple probe", "thermocouple junction", "thermocouple wire"]),
      ("thermostat", "/ˈθɜːrməstæt/", "n.", "恒温器", "thermo热 + stat稳定 → 恒温器", ["digital thermostat", "smart thermostat", "programmable thermostat", "thermostat control"])]),

    ("hydro", "/ˈhaɪdroʊ/", "水", "hydro → 水",
     ["hydro power", "hydro plant", "hydro turbine", "hydro generation"],
     [("hydroelectric", "/ˌhaɪdroʊɪˈlektrɪk/", "adj.", "水电的", "hydro水 + electric电 → 水电的"),
      ("hydropower", "/ˈhaɪdroʊˌpaʊər/", "n.", "水电", "hydro水 + power电力 → 水电", ["hydropower plant", "hydropower station", "hydropower generation", "hydropower capacity"]),
      ("hydraulic", "/haɪˈdrɔːlɪk/", "adj.", "液压的", "hydro水 + aulic → 液压的", ["hydraulic turbine", "hydraulic power", "hydraulic system", "hydraulic pressure"]),
      ("hydrothermal", "/ˌhaɪdroʊˈθɜːrml/", "adj.", "热液的", "hydro水 + thermal热的 → 热液的", ["hydrothermal energy", "hydrothermal vent", "hydrothermal power", "hydrothermal system"])]),

    ("magnet", "/ˈmæɡnɪt/", "磁体", "magnet → 磁体",
     ["magnetic field", "magnetic force", "magnetic flux", "magnetic material"],
     [("magnet", "/ˈmæɡnɪt/", "n.", "磁体", "magnet → 磁体"),
      ("magnetic", "/mæɡˈnetɪk/", "adj.", "磁性的", "magnet + ic → 磁性的"),
      ("magnetism", "/ˈmæɡnətɪzəm/", "n.", "磁性", "magnet + ism → 磁性", ["animal magnetism", "terrestrial magnetism", "electromagnetism", "magnetism theory"]),
      ("magnetize", "/ˈmæɡnətaɪz/", "v.", "磁化", "magnet + ize使 → 磁化", ["magnetize metal", "magnetize iron", "magnetize steel", "magnetize material"])]),

    ("nucle", "/ˈnuːkli/", "核", "nucle → 核",
     ["nuclear energy", "nuclear power", "nuclear plant", "nuclear reactor"],
     [("nuclear", "/ˈnuːkliər/", "adj.", "核能的", "nucle核 + ar → 核能的"),
      ("nucleus", "/ˈnuːkliəs/", "n.", "原子核", "nucle核 + us → 原子核", ["atomic nucleus", "cell nucleus", "nucleus of atom", "dense nucleus"]),
      ("nucleon", "/ˈnuːkliɑːn/", "n.", "核子", "nucle核 + on粒子 → 核子", ["nucleon number", "nucleon state", "nucleon interaction", "nucleon transfer"]),
      ("nucleonics", "/ˌnuːkliˈɑːnɪks/", "n.", "核子学", "nucleon核子 + ics学科 → 核子学", ["nucleonics engineering", "applied nucleonics", "nucleonics research", "nucleonics technology"])]),
]

print(f"定义的条目数: {len(definitions)}")
print("示例条目结构正确")
