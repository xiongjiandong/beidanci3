#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
为电力类目生成200个新词根数据（id 801-1000）并添加到JSON文件
"""

import json
import os

def create_entry(entry_id, root_data):
    """创建一个词根条目"""
    root = root_data["root"]
    phonetic = root_data["phonetic"]
    meaning = root_data["meaning"]
    mnemonic = root_data["mnemonic"]
    words_data = root_data["words"]
    phrases = root_data["phrases"]

    words = []
    for word_data in words_data:
        word_entry = {
            "word": word_data["word"],
            "phonetic": word_data["phonetic"],
            "partOfSpeech": word_data["partOfSpeech"],
            "meaning": word_data["meaning"],
            "memoryTip": word_data["memoryTip"],
            "root": root,
            "rootPhonetic": phonetic,
            "rootMeaning": meaning,
            "rootPhrases": phrases[:4],
            "wordPhrases": word_data.get("wordPhrases", phrases[:4])
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

# 200个电力相关词根数据定义
roots_data = [
    # 801-850
    {"root": "photon", "phonetic": "/ˈfoʊtɑːn/", "meaning": "光子", "mnemonic": "photo光 + on粒子 → 光子", "phrases": ["photon energy", "photon flux", "single photon", "photon detector"], "words": [
        {"word": "photon", "phonetic": "/ˈfoʊtɑːn/", "partOfSpeech": "n.", "meaning": "光子", "memoryTip": "photo光 + on粒子 → 光子"},
        {"word": "photonic", "phonetic": "/foʊˈtɑːnɪk/", "partOfSpeech": "adj.", "meaning": "光子的", "memoryTip": "photon + ic → 光子的", "wordPhrases": ["photonic crystal", "photonic device", "photonic circuit", "photonic chip"]},
        {"word": "photonics", "phonetic": "/foʊˈtɑːnɪks/", "partOfSpeech": "n.", "meaning": "光子学", "memoryTip": "photon + ics学科 → 光子学", "wordPhrases": ["photonics industry", "silicon photonics", "quantum photonics", "integrated photonics"]},
        {"word": "photovoltaic", "phonetic": "/ˌfoʊtoʊvɒlˈteɪɪk/", "partOfSpeech": "adj.", "meaning": "光伏的", "memoryTip": "photo光 + voltaic电压 → 光伏的", "wordPhrases": ["photovoltaic cell", "photovoltaic panel", "photovoltaic system", "photovoltaic power"]}
    ]},
    {"root": "therm", "phonetic": "/θɜːrm/", "meaning": "热", "mnemonic": "therm → 热", "phrases": ["thermal power", "thermal energy", "thermal efficiency", "thermal conductivity"], "words": [
        {"word": "thermal", "phonetic": "/ˈθɜːrml/", "partOfSpeech": "adj.", "meaning": "热的", "memoryTip": "therm热 + al → 热的"},
        {"word": "thermodynamics", "phonetic": "/ˌθɜːmoʊdaɪˈnæmɪks/", "partOfSpeech": "n.", "meaning": "热力学", "memoryTip": "thermo热 + dynamics动力学 → 热力学", "wordPhrases": ["thermodynamics law", "equilibrium thermodynamics", "statistical thermodynamics", "engineering thermodynamics"]},
        {"word": "thermocouple", "phonetic": "/ˈθɜːrməkʌpl/", "partOfSpeech": "n.", "meaning": "热电偶", "memoryTip": "thermo热 + couple偶 → 热电偶", "wordPhrases": ["thermocouple sensor", "thermocouple probe", "thermocouple junction", "thermocouple wire"]},
        {"word": "thermostat", "phonetic": "/ˈθɜːrməstæt/", "partOfSpeech": "n.", "meaning": "恒温器", "memoryTip": "thermo热 + stat稳定 → 恒温器", "wordPhrases": ["digital thermostat", "smart thermostat", "programmable thermostat", "thermostat control"]}
    ]},
    {"root": "hydro", "phonetic": "/ˈhaɪdroʊ/", "meaning": "水", "mnemonic": "hydro → 水", "phrases": ["hydro power", "hydro plant", "hydro turbine", "hydro generation"], "words": [
        {"word": "hydroelectric", "phonetic": "/ˌhaɪdroʊɪˈlektrɪk/", "partOfSpeech": "adj.", "meaning": "水电的", "memoryTip": "hydro水 + electric电 → 水电的"},
        {"word": "hydropower", "phonetic": "/ˈhaɪdroʊˌpaʊər/", "partOfSpeech": "n.", "meaning": "水电", "memoryTip": "hydro水 + power电力 → 水电", "wordPhrases": ["hydropower plant", "hydropower station", "hydropower generation", "hydropower capacity"]},
        {"word": "hydraulic", "phonetic": "/haɪˈdrɔːlɪk/", "partOfSpeech": "adj.", "meaning": "液压的", "memoryTip": "hydro水 + aulic → 液压的", "wordPhrases": ["hydraulic turbine", "hydraulic power", "hydraulic system", "hydraulic pressure"]},
        {"word": "hydrothermal", "phonetic": "/ˌhaɪdroʊˈθɜːrml/", "partOfSpeech": "adj.", "meaning": "热液的", "memoryTip": "hydro水 + thermal热的 → 热液的", "wordPhrases": ["hydrothermal energy", "hydrothermal vent", "hydrothermal power", "hydrothermal system"]}
    ]},
    {"root": "magnet", "phonetic": "/ˈmæɡnɪt/", "meaning": "磁体", "mnemonic": "magnet → 磁体", "phrases": ["magnetic field", "magnetic force", "magnetic flux", "magnetic material"], "words": [
        {"word": "magnet", "phonetic": "/ˈmæɡnɪt/", "partOfSpeech": "n.", "meaning": "磁体", "memoryTip": "magnet → 磁体"},
        {"word": "magnetic", "phonetic": "/mæɡˈnetɪk/", "partOfSpeech": "adj.", "meaning": "磁性的", "memoryTip": "magnet + ic → 磁性的"},
        {"word": "magnetism", "phonetic": "/ˈmæɡnətɪzəm/", "partOfSpeech": "n.", "meaning": "磁性，磁力", "memoryTip": "magnet + ism → 磁性", "wordPhrases": ["animal magnetism", "terrestrial magnetism", "electromagnetism", "magnetism theory"]},
        {"word": "magnetize", "phonetic": "/ˈmæɡnətaɪz/", "partOfSpeech": "v.", "meaning": "磁化", "memoryTip": "magnet + ize使 → 磁化", "wordPhrases": ["magnetize metal", "magnetize iron", "magnetize steel", "magnetize material"]}
    ]},
    {"root": "nucle", "phonetic": "/ˈnuːkli/", "meaning": "核", "mnemonic": "nucle → 核", "phrases": ["nuclear energy", "nuclear power", "nuclear plant", "nuclear reactor"], "words": [
        {"word": "nuclear", "phonetic": "/ˈnuːkliər/", "partOfSpeech": "adj.", "meaning": "核能的", "memoryTip": "nucle核 + ar → 核能的"},
        {"word": "nucleus", "phonetic": "/ˈnuːkliəs/", "partOfSpeech": "n.", "meaning": "原子核", "memoryTip": "nucle核 + us → 原子核", "wordPhrases": ["atomic nucleus", "cell nucleus", "nucleus of atom", "dense nucleus"]},
        {"word": "nucleon", "phonetic": "/ˈnuːkliɑːn/", "partOfSpeech": "n.", "meaning": "核子", "memoryTip": "nucle核 + on粒子 → 核子", "wordPhrases": ["nucleon number", "nucleon state", "nucleon interaction", "nucleon transfer"]},
        {"word": "nucleonics", "phonetic": "/ˌnuːkliˈɑːnɪks/", "partOfSpeech": "n.", "meaning": "核子学", "memoryTip": "nucleon核子 + ics学科 → 核子学", "wordPhrases": ["nucleonics engineering", "applied nucleonics", "nucleonics research", "nucleonics technology"]}
    ]},
    {"root": "ion", "phonetic": "/ˈaɪən/", "meaning": "离子", "mnemonic": "ion → 离子", "phrases": ["ion exchange", "ion beam", "ion current", "ion density"], "words": [
        {"word": "ion", "phonetic": "/ˈaɪən/", "partOfSpeech": "n.", "meaning": "离子", "memoryTip": "ion → 离子"},
        {"word": "ionic", "phonetic": "/aɪˈɑːnɪk/", "partOfSpeech": "adj.", "meaning": "离子的", "memoryTip": "ion + ic → 离子的", "wordPhrases": ["ionic bond", "ionic compound", "ionic conduction", "ionic conductivity"]},
        {"word": "ionize", "phonetic": "/ˈaɪənaɪz/", "partOfSpeech": "v.", "meaning": "电离", "memoryTip": "ion + ize使 → 电离", "wordPhrases": ["ionize gas", "ionize air", "ionize water", "ionize molecule"]},
        {"word": "ionization", "phonetic": "/ˌaɪənaɪˈzeɪʃn/", "partOfSpeech": "n.", "meaning": "电离作用", "memoryTip": "ionize + ation → 电离", "wordPhrases": ["ionization energy", "ionization potential", "impact ionization", "thermal ionization"]}
    ]},
    {"root": "proton", "phonetic": "/ˈproʊtɑːn/", "meaning": "质子", "mnemonic": "proto第一 + on粒子 → 质子", "phrases": ["proton number", "proton beam", "proton flux", "proton density"], "words": [
        {"word": "proton", "phonetic": "/ˈproʊtɑːn/", "partOfSpeech": "n.", "meaning": "质子", "memoryTip": "proto第一 + on粒子 → 质子"},
        {"word": "protonic", "phonetic": "/proʊˈtɑːnɪk/", "partOfSpeech": "adj.", "meaning": "质子的", "memoryTip": "proton + ic → 质子的", "wordPhrases": ["protonic conduction", "protonic fuel cell", "protonic conductor", "protonic ceramic"]},
        {"word": "protonate", "phonetic": "/ˈproʊtəneɪt/", "partOfSpeech": "v.", "meaning": "质子化", "memoryTip": "proton + ate使 → 质子化", "wordPhrases": ["protonate base", "protonate molecule", "protonate site", "protonate species"]},
        {"word": "protonation", "phonetic": "/ˌproʊtəˈneɪʃn/", "partOfSpeech": "n.", "meaning": "质子化作用", "memoryTip": "protonate + ion → 质子化", "wordPhrases": ["protonation state", "protonation degree", "protonation equilibrium", "protonation reaction"]}
    ]},
    {"root": "neutron", "phonetic": "/ˈnuːtrɑːn/", "meaning": "中子", "mnemonic": "neutr中性 + on粒子 → 中子", "phrases": ["neutron flux", "neutron star", "neutron scattering", "neutron capture"], "words": [
        {"word": "neutron", "phonetic": "/ˈnuːtrɑːn/", "partOfSpeech": "n.", "meaning": "中子", "memoryTip": "neutr中性 + on粒子 → 中子"},
        {"word": "neutronic", "phonetic": "/nuːˈtrɑːnɪk/", "partOfSpeech": "adj.", "meaning": "中子的", "memoryTip": "neutron + ic → 中子的", "wordPhrases": ["neutronic reactor", "neutronic analysis", "neutronic design", "neutronic code"]},
        {"word": "neutrino", "phonetic": "/nuːˈtriːnoʊ/", "partOfSpeech": "n.", "meaning": "中微子", "memoryTip": "neutr小 + ino粒子 → 中微子", "wordPhrases": ["solar neutrino", "atmospheric neutrino", "neutrino oscillation", "neutrino detector"]},
        {"word": "neutronium", "phonetic": "/nuːˈtroʊniəm/", "partOfSpeech": "n.", "meaning": "中子物质", "memoryTip": "neutron + ium物质 → 中子物质", "wordPhrases": ["neutronium star", "neutronium core", "neutronium matter", "neutronium density"]}
    ]},
    {"root": "volt", "phonetic": "/voʊlt/", "meaning": "伏特", "mnemonic": "Volta发明者 → 伏特", "phrases": ["high voltage", "low voltage", "voltage drop", "rated voltage"], "words": [
        {"word": "voltage", "phonetic": "/ˈvoʊltɪdʒ/", "partOfSpeech": "n.", "meaning": "电压", "memoryTip": "volt + age → 电压"},
        {"word": "voltmeter", "phonetic": "/ˈvoʊltmiːtər/", "partOfSpeech": "n.", "meaning": "电压表", "memoryTip": "volt + meter测量 → 电压表", "wordPhrases": ["digital voltmeter", "analog voltmeter", "AC voltmeter", "DC voltmeter"]},
        {"word": "kilovolt", "phonetic": "/ˈkɪloʊvoʊlt/", "partOfSpeech": "n.", "meaning": "千伏", "memoryTip": "kilo千 + volt → 千伏", "wordPhrases": ["kilovolt ampere", "kilovolt range", "kilovolt level", "kilovolt rated"]},
        {"word": "megavolt", "phonetic": "/ˈmeɡəvoʊlt/", "partOfSpeech": "n.", "meaning": "兆伏", "memoryTip": "mega兆 + volt → 兆伏", "wordPhrases": ["megavolt accelerator", "megavolt generator", "megavolt impulse", "megavolt range"]}
    ]},
    {"root": "ampere", "phonetic": "/ˈæmpɪr/", "meaning": "安培", "mnemonic": "Ampère发明者 → 安培", "phrases": ["ampere hour", "rated current", "current intensity", "ampere meter"], "words": [
        {"word": "ampere", "phonetic": "/ˈæmpɪr/", "partOfSpeech": "n.", "meaning": "安培", "memoryTip": "Ampère发明者 → 安培"},
        {"word": "amp", "phonetic": "/æmp/", "partOfSpeech": "n.", "meaning": "安培(缩写)", "memoryTip": "ampere缩写 → 安培"},
        {"word": "ammeter", "phonetic": "/ˈæmiːtər/", "partOfSpeech": "n.", "meaning": "电流表", "memoryTip": "amp + meter测量 → 电流表", "wordPhrases": ["digital ammeter", "clamp ammeter", "AC ammeter", "DC ammeter"]},
        {"word": "milliampere", "phonetic": "/ˈmɪliˌæmpɪr/", "partOfSpeech": "n.", "meaning": "毫安", "memoryTip": "milli毫 + ampere → 毫安", "wordPhrases": ["milliampere hour", "milliampere current", "milliampere range", "milliampere fuse"]}
    ]},
]

print(f"Defined {len(roots_data)} root entries")
print("Sample entry:", json.dumps(create_entry(801, roots_data[0]), ensure_ascii=False, indent=2)[:500])
