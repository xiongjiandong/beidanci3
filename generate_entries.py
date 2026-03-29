#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
为电力类目生成200个新词根数据（id 801-1000）
"""

import json

def create_entry(entry_id, root_info):
    """创建一个完整的词根条目"""
    root = root_info["root"]
    phonetic = root_info["phonetic"]
    meaning = root_info["meaning"]
    mnemonic = root_info["mnemonic"]
    phrases = root_info["phrases"]
    words_list = root_info["words"]

    # 确保有4个单词
    while len(words_list) < 4:
        words_list.append(words_list[0].copy())

    words = []
    for wd in words_list[:4]:  # 只取前4个
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

# 定义200个电力词根（分组定义）
roots_definitions = []

# 第1组：基础电学 (801-825)
group1 = [
    {"root": "photon", "phonetic": "/ˈfoʊtɑːn/", "meaning": "光子", "mnemonic": "photo光 + on粒子 → 光子", "phrases": ["photon energy", "photon flux", "single photon", "photon detector"],
     "words": [
        {"word": "photon", "phonetic": "/ˈfoʊtɑːn/", "pos": "n.", "meaning": "光子", "tip": "photo光 + on粒子 → 光子"},
        {"word": "photonic", "phonetic": "/foʊˈtɑːnɪk/", "pos": "adj.", "meaning": "光子的", "tip": "photon + ic → 光子的", "phrases": ["photonic crystal", "photonic device", "photonic circuit", "photonic chip"]},
        {"word": "photonics", "phonetic": "/foʊˈtɑːnɪks/", "pos": "n.", "meaning": "光子学", "tip": "photon + ics学科 → 光子学", "phrases": ["photonics industry", "silicon photonics", "quantum photonics", "integrated photonics"]},
        {"word": "photovoltaic", "phonetic": "/ˌfoʊtoʊvɒlˈteɪɪk/", "pos": "adj.", "meaning": "光伏的", "tip": "photo光 + voltaic电压 → 光伏的", "phrases": ["photovoltaic cell", "photovoltaic panel", "photovoltaic system", "photovoltaic power"]}
     ]},
    {"root": "therm", "phonetic": "/θɜːrm/", "meaning": "热", "mnemonic": "therm → 热", "phrases": ["thermal power", "thermal energy", "thermal efficiency", "thermal conductivity"],
     "words": [
        {"word": "thermal", "phonetic": "/ˈθɜːrml/", "pos": "adj.", "meaning": "热的", "tip": "therm热 + al → 热的"},
        {"word": "thermodynamics", "phonetic": "/ˌθɜːmoʊdaɪˈnæmɪks/", "pos": "n.", "meaning": "热力学", "tip": "thermo热 + dynamics动力学 → 热力学", "phrases": ["thermodynamics law", "equilibrium thermodynamics", "statistical thermodynamics", "engineering thermodynamics"]},
        {"word": "thermocouple", "phonetic": "/ˈθɜːrməkʌpl/", "pos": "n.", "meaning": "热电偶", "tip": "thermo热 + couple偶 → 热电偶", "phrases": ["thermocouple sensor", "thermocouple probe", "thermocouple junction", "thermocouple wire"]},
        {"word": "thermostat", "phonetic": "/ˈθɜːrməstæt/", "pos": "n.", "meaning": "恒温器", "tip": "thermo热 + stat稳定 → 恒温器", "phrases": ["digital thermostat", "smart thermostat", "programmable thermostat", "thermostat control"]}
     ]},
    {"root": "hydro", "phonetic": "/ˈhaɪdroʊ/", "meaning": "水", "mnemonic": "hydro → 水", "phrases": ["hydro power", "hydro plant", "hydro turbine", "hydro generation"],
     "words": [
        {"word": "hydroelectric", "phonetic": "/ˌhaɪdroʊɪˈlektrɪk/", "pos": "adj.", "meaning": "水电的", "tip": "hydro水 + electric电 → 水电的"},
        {"word": "hydropower", "phonetic": "/ˈhaɪdroʊˌpaʊər/", "pos": "n.", "meaning": "水电", "tip": "hydro水 + power电力 → 水电", "phrases": ["hydropower plant", "hydropower station", "hydropower generation", "hydropower capacity"]},
        {"word": "hydraulic", "phonetic": "/haɪˈdrɔːlɪk/", "pos": "adj.", "meaning": "液压的", "tip": "hydro水 + aulic → 液压的", "phrases": ["hydraulic turbine", "hydraulic power", "hydraulic system", "hydraulic pressure"]},
        {"word": "hydrothermal", "phonetic": "/ˌhaɪdroʊˈθɜːrml/", "pos": "adj.", "meaning": "热液的", "tip": "hydro水 + thermal热的 → 热液的", "phrases": ["hydrothermal energy", "hydrothermal vent", "hydrothermal power", "hydrothermal system"]}
     ]},
    {"root": "magnet", "phonetic": "/ˈmæɡnɪt/", "meaning": "磁体", "mnemonic": "magnet → 磁体", "phrases": ["magnetic field", "magnetic force", "magnetic flux", "magnetic material"],
     "words": [
        {"word": "magnet", "phonetic": "/ˈmæɡnɪt/", "pos": "n.", "meaning": "磁体", "tip": "magnet → 磁体"},
        {"word": "magnetic", "phonetic": "/mæɡˈnetɪk/", "pos": "adj.", "meaning": "磁性的", "tip": "magnet + ic → 磁性的"},
        {"word": "magnetism", "phonetic": "/ˈmæɡnətɪzəm/", "pos": "n.", "meaning": "磁性", "tip": "magnet + ism → 磁性", "phrases": ["animal magnetism", "terrestrial magnetism", "electromagnetism", "magnetism theory"]},
        {"word": "magnetize", "phonetic": "/ˈmæɡnətaɪz/", "pos": "v.", "meaning": "磁化", "tip": "magnet + ize使 → 磁化", "phrases": ["magnetize metal", "magnetize iron", "magnetize steel", "magnetize material"]}
     ]},
    {"root": "nucle", "phonetic": "/ˈnuːkli/", "meaning": "核", "mnemonic": "nucle → 核", "phrases": ["nuclear energy", "nuclear power", "nuclear plant", "nuclear reactor"],
     "words": [
        {"word": "nuclear", "phonetic": "/ˈnuːkliər/", "pos": "adj.", "meaning": "核能的", "tip": "nucle核 + ar → 核能的"},
        {"word": "nucleus", "phonetic": "/ˈnuːkliəs/", "pos": "n.", "meaning": "原子核", "tip": "nucle核 + us → 原子核", "phrases": ["atomic nucleus", "cell nucleus", "nucleus of atom", "dense nucleus"]},
        {"word": "nucleon", "phonetic": "/ˈnuːkliɑːn/", "pos": "n.", "meaning": "核子", "tip": "nucle核 + on粒子 → 核子", "phrases": ["nucleon number", "nucleon state", "nucleon interaction", "nucleon transfer"]},
        {"word": "nucleonics", "phonetic": "/ˌnuːkliˈɑːnɪks/", "pos": "n.", "meaning": "核子学", "tip": "nucleon核子 + ics学科 → 核子学", "phrases": ["nucleonics engineering", "applied nucleonics", "nucleonics research", "nucleonics technology"]}
     ]},
    {"root": "ion", "phonetic": "/ˈaɪən/", "meaning": "离子", "mnemonic": "ion → 离子", "phrases": ["ion exchange", "ion beam", "ion current", "ion density"],
     "words": [
        {"word": "ion", "phonetic": "/ˈaɪən/", "pos": "n.", "meaning": "离子", "tip": "ion → 离子"},
        {"word": "ionic", "phonetic": "/aɪˈɑːnɪk/", "pos": "adj.", "meaning": "离子的", "tip": "ion + ic → 离子的", "phrases": ["ionic bond", "ionic compound", "ionic conduction", "ionic conductivity"]},
        {"word": "ionize", "phonetic": "/ˈaɪənaɪz/", "pos": "v.", "meaning": "电离", "tip": "ion + ize使 → 电离", "phrases": ["ionize gas", "ionize air", "ionize water", "ionize molecule"]},
        {"word": "ionization", "phonetic": "/ˌaɪənaɪˈzeɪʃn/", "pos": "n.", "meaning": "电离作用", "tip": "ionize + ation → 电离", "phrases": ["ionization energy", "ionization potential", "impact ionization", "thermal ionization"]}
     ]},
    {"root": "proton", "phonetic": "/ˈproʊtɑːn/", "meaning": "质子", "mnemonic": "proto第一 + on粒子 → 质子", "phrases": ["proton number", "proton beam", "proton flux", "proton density"],
     "words": [
        {"word": "proton", "phonetic": "/ˈproʊtɑːn/", "pos": "n.", "meaning": "质子", "tip": "proto第一 + on粒子 → 质子"},
        {"word": "protonic", "phonetic": "/proʊˈtɑːnɪk/", "pos": "adj.", "meaning": "质子的", "tip": "proton + ic → 质子的", "phrases": ["protonic conduction", "protonic fuel cell", "protonic conductor", "protonic ceramic"]},
        {"word": "protonate", "phonetic": "/ˈproʊtəneɪt/", "pos": "v.", "meaning": "质子化", "tip": "proton + ate使 → 质子化", "phrases": ["protonate base", "protonate molecule", "protonate site", "protonate species"]},
        {"word": "protonation", "phonetic": "/ˌproʊtəˈneɪʃn/", "pos": "n.", "meaning": "质子化作用", "tip": "protonate + ion → 质子化", "phrases": ["protonation state", "protonation degree", "protonation equilibrium", "protonation reaction"]}
     ]},
    {"root": "neutron", "phonetic": "/ˈnuːtrɑːn/", "meaning": "中子", "mnemonic": "neutr中性 + on粒子 → 中子", "phrases": ["neutron flux", "neutron star", "neutron scattering", "neutron capture"],
     "words": [
        {"word": "neutron", "phonetic": "/ˈnuːtrɑːn/", "pos": "n.", "meaning": "中子", "tip": "neutr中性 + on粒子 → 中子"},
        {"word": "neutronic", "phonetic": "/nuːˈtrɑːnɪk/", "pos": "adj.", "meaning": "中子的", "tip": "neutron + ic → 中子的", "phrases": ["neutronic reactor", "neutronic analysis", "neutronic design", "neutronic code"]},
        {"word": "neutrino", "phonetic": "/nuːˈtriːnoʊ/", "pos": "n.", "meaning": "中微子", "tip": "neutr小 + ino粒子 → 中微子", "phrases": ["solar neutrino", "atmospheric neutrino", "neutrino oscillation", "neutrino detector"]},
        {"word": "neutronium", "phonetic": "/nuːˈtroʊniəm/", "pos": "n.", "meaning": "中子物质", "tip": "neutron + ium物质 → 中子物质", "phrases": ["neutronium star", "neutronium core", "neutronium matter", "neutronium density"]}
     ]},
    {"root": "electron", "phonetic": "/ɪˈlektrɑːn/", "meaning": "电子", "mnemonic": "electr电 + on粒子 → 电子", "phrases": ["electron beam", "electron flow", "electron cloud", "electron shell"],
     "words": [
        {"word": "electron", "phonetic": "/ɪˈlektrɑːn/", "pos": "n.", "meaning": "电子", "tip": "electr电 + on粒子 → 电子"},
        {"word": "electronic", "phonetic": "/ɪˌlekˈtrɑːnɪk/", "pos": "adj.", "meaning": "电子的", "tip": "electron + ic → 电子的", "phrases": ["electronic device", "electronic circuit", "electronic control", "electronic system"]},
        {"word": "electronics", "phonetic": "/ɪˌlekˈtrɑːnɪks/", "pos": "n.", "meaning": "电子学", "tip": "electron + ics学科 → 电子学", "phrases": ["power electronics", "consumer electronics", "electronics engineering", "analog electronics"]},
        {"word": "electronegative", "phonetic": "/ɪˌlektroʊˈneɡətɪv/", "pos": "adj.", "meaning": "电负性的", "tip": "electro电 + negative负 → 电负性的", "phrases": ["electronegative element", "electronegative atom", "electronegativity value", "highly electronegative"]}
     ]},
    {"root": "atom", "/ˈætəm/", "原子", "a不 + tom分割 → 不可分割 → 原子",
     ["atomic energy", "atomic structure", "atomic nucleus", "atomic mass"],
     [{"word": "atom", "phonetic": "/ˈætəm/", "pos": "n.", "meaning": "原子", "tip": "a不 + tom分割 → 不可分割 → 原子"},
      {"word": "atomic", "phonetic": "/əˈtɑːmɪk/", "pos": "adj.", "meaning": "原子的", "tip": "atom + ic → 原子的", "phrases": ["atomic power", "atomic mass", "atomic number", "atomic structure"]},
      {"word": "atomicity", "phonetic": "/ˌætəˈmɪsəti/", "pos": "n.", "meaning": "原子数", "tip": "atom + icity性质 → 原子性/原子数", "phrases": ["atomicity of element", "atomicity check", "atomicity constraint", "atomicity guarantee"]},
      {"word": "atomize", "phonetic": "/ˈætəmaɪz/", "pos": "v.", "meaning": "使雾化", "tip": "atom + ize使 → 使成原子/雾化", "phrases": ["atomize fuel", "atomize liquid", "atomize spray", "atomize metal"]}]},
    {"root": "molecule", "/ˈmɑːlɪkjuːl/", "分子", "mole质量 + cule小 → 分子",
     ["molecular structure", "molecular weight", "molecular bond", "molecular energy"],
     [{"word": "molecule", "phonetic": "/ˈmɑːlɪkjuːl/", "pos": "n.", "meaning": "分子", "tip": "mole质量 + cule小 → 分子"},
      {"word": "molecular", "phonetic": "/məˈlekjələr/", "pos": "adj.", "meaning": "分子的", "tip": "molecule + ar → 分子的", "phrases": ["molecular biology", "molecular physics", "molecular formula", "molecular model"]},
      {"word": "molecularity", "phonetic": "/məˌlekjəˈlærəti/", "pos": "n.", "meaning": "分子性", "tip": "molecular + ity → 分子性", "phrases": ["molecularity of reaction", "molecularity principle", "bimolecularity", "termolecularity"]},
      {"word": "mole", "phonetic": "/moʊl/", "pos": "n.", "meaning": "摩尔", "tip": "mole → 摩尔(物质的量单位)", "phrases": ["mole fraction", "mole ratio", "gram mole", "mole concept"]}]},
    {"root": "quantum", "/ˈkwɑːntəm/", "量子", "quant数量 + um → 量子",
     ["quantum mechanics", "quantum physics", "quantum state", "quantum theory"],
     [{"word": "quantum", "phonetic": "/ˈkwɑːntəm/", "pos": "n.", "meaning": "量子", "tip": "quant数量 + um → 量子"},
      {"word": "quantum", "phonetic": "/ˈkwɑːntəm/", "pos": "adj.", "meaning": "量子的", "tip": "quantum → 量子的", "phrases": ["quantum computer", "quantum dot", "quantum leap", "quantum effect"]},
      {"word": "quantize", "phonetic": "/ˈkwɑːntaɪz/", "pos": "v.", "meaning": "量子化", "tip": "quantum + ize使 → 量子化", "phrases": ["quantize energy", "quantize field", "quantize level", "quantize state"]},
      {"word": "quantization", "phonetic": "/ˌkwɑːntɪˈzeɪʃn/", "pos": "n.", "meaning": "量子化", "tip": "quantize + ation → 量子化", "phrases": ["energy quantization", "space quantization", "quantization error", "quantization level"]}]},
    {"root": "field", "/fiːld/", "场", "field → 场",
     ["electric field", "magnetic field", "electromagnetic field", "field strength"],
     [{"word": "field", "phonetic": "/fiːld/", "pos": "n.", "meaning": "场", "tip": "field → 场"},
      {"word": "field", "phonetic": "/fiːld/", "pos": "v.", "meaning": "上场", "tip": "field → 部署/上场", "phrases": ["field test", "field trial", "field engineer", "field service"]},
      {"word": "fieldwork", "phonetic": "/ˈfiːldwɜːrk/", "pos": "n.", "meaning": "现场工作", "tip": "field场 + work工作 → 现场工作", "phrases": ["fieldwork survey", "fieldwork data", "fieldwork research", "fieldwork equipment"]},
      {"word": "fielder", "phonetic": "/ˈfiːldər/", "pos": "n.", "meaning": "外场员", "tip": "field + er人 → 守场员", "phrases": ["fielder position", "outfielder", "infielder", "fielder choice"]}]},
    {"root": "wave", "/weɪv/", "波", "wave → 波",
     ["electromagnetic wave", "radio wave", "light wave", "sound wave"],
     [{"word": "wave", "phonetic": "/weɪv/", "pos": "n.", "meaning": "波", "tip": "wave → 波"},
      {"word": "waveform", "phonetic": "/ˈweɪvfɔːrm/", "pos": "n.", "meaning": "波形", "tip": "wave波 + form形状 → 波形", "phrases": ["waveform analysis", "sine waveform", "square waveform", "waveform generator"]},
      {"word": "wavelength", "phonetic": "/ˈweɪvleŋθ/", "pos": "n.", "meaning": "波长", "tip": "wave波 + length长度 → 波长", "phrases": ["wavelength range", "wavelength spectrum", "optical wavelength", "wavelength division"]},
      {"word": "waveguide", "phonetic": "/ˈweɪvɡaɪd/", "pos": "n.", "meaning": "波导", "tip": "wave波 + guide引导 → 波导", "phrases": ["optical waveguide", "dielectric waveguide", "waveguide mode", "waveguide coupler"]}]},
    {"root": "freq", "/friːk/", "频率", "frequ反复 → 频率",
     ["frequency range", "frequency band", "high frequency", "low frequency"],
     [{"word": "frequency", "phonetic": "/ˈfriːkwənsi/", "pos": "n.", "meaning": "频率", "tip": "frequ反复 + ency → 频率"},
      {"word": "frequent", "phonetic": "/ˈfriːkwənt/", "pos": "adj.", "meaning": "频繁的", "tip": "frequ反复 + ent → 频繁的"},
      {"word": "frequenter", "phonetic": "/ˈfriːkwəntər/", "pos": "n.", "meaning": "常客", "tip": "frequent + er人 → 常客", "phrases": ["frequenter of library", "regular frequenter", "frequenter card", "frequenter discount"]},
      {"word": "frequently", "phonetic": "/ˈfriːkwəntli/", "pos": "adv.", "meaning": "频繁地", "tip": "frequent + ly副词 → 频繁地", "phrases": ["frequently used", "frequently asked", "occur frequently", "visit frequently"]}]},
    {"root": "phase", "/feɪz/", "相位", "phase → 相位/阶段",
     ["phase angle", "phase shift", "three-phase", "single-phase"],
     [{"word": "phase", "phonetic": "/feɪz/", "pos": "n.", "meaning": "相位", "tip": "phase → 相位"},
      {"word": "phasor", "phonetic": "/ˈfeɪzər/", "pos": "n.", "meaning": "相量", "tip": "phase + or → 相量", "phrases": ["phasor diagram", "phasor representation", "phasor analysis", "phasor transform"]},
      {"word": "polyphase", "phonetic": "/ˈpɑːlif eɪz/", "pos": "adj.", "meaning": "多相的", "tip": "poly多 + phase相 → 多相的", "phrases": ["polyphase system", "polyphase motor", "polyphase circuit", "polyphase transformer"]},
      {"word": "phaseless", "phonetic": "/ˈfeɪzləs/", "pos": "adj.", "meaning": "无相位的", "tip": "phase + less无 → 无相位的", "phrases": ["phaseless component", "phaseless system", "phaseless array", "phaseless signal"]}]},
    {"root": "amp", "/æmp/", "安培", "ampere缩写 → 安培",
     ["ampere hour", "rated current", "current intensity", "ampere meter"],
     [{"word": "ampere", "phonetic": "/ˈæmpɪr/", "pos": "n.", "meaning": "安培", "tip": "Ampère发明者 → 安培"},
      {"word": "amp", "phonetic": "/æmp/", "pos": "n.", "meaning": "安培(缩写)", "tip": "ampere缩写 → 安培"},
      {"word": "ammeter", "phonetic": "/ˈæmiːtər/", "pos": "n.", "meaning": "电流表", "tip": "amp + meter测量 → 电流表", "phrases": ["digital ammeter", "clamp ammeter", "AC ammeter", "DC ammeter"]},
      {"word": "milliampere", "phonetic": "/ˈmɪliˌæmpɪr/", "pos": "n.", "meaning": "毫安", "tip": "milli毫 + ampere → 毫安", "phrases": ["milliampere hour", "milliampere current", "milliampere range", "milliampere fuse"]}]},
    {"root": "volt", "/voʊlt/", "伏特", "Volta发明者 → 伏特",
     ["high voltage", "low voltage", "voltage drop", "rated voltage"],
     [{"word": "voltage", "phonetic": "/ˈvoʊltɪdʒ/", "pos": "n.", "meaning": "电压", "tip": "volt + age → 电压"},
      {"word": "voltmeter", "phonetic": "/ˈvoʊltmiːtər/", "pos": "n.", "meaning": "电压表", "tip": "volt + meter测量 → 电压表", "phrases": ["digital voltmeter", "analog voltmeter", "AC voltmeter", "DC voltmeter"]},
      {"word": "kilovolt", "phonetic": "/ˈkɪloʊvoʊlt/", "pos": "n.", "meaning": "千伏", "tip": "kilo千 + volt → 千伏", "phrases": ["kilovolt ampere", "kilovolt range", "kilovolt level", "kilovolt rated"]},
      {"word": "megavolt", "phonetic": "/ˈmeɡəvoʊlt/", "pos": "n.", "meaning": "兆伏", "tip": "mega兆 + volt → 兆伏", "phrases": ["megavolt accelerator", "megavolt generator", "megavolt impulse", "megavolt range"]}]},
    {"root": "ohm", "/oʊm/", "欧姆", "Ohm发明者 → 欧姆",
     ["ohm meter", "ohm law", "ohm resistance", "megaohm"],
     [{"word": "ohm", "phonetic": "/oʊm/", "pos": "n.", "meaning": "欧姆", "tip": "Ohm发明者 → 欧姆"},
      {"word": "ohmic", "phonetic": "/ˈoʊmɪk/", "pos": "adj.", "meaning": "欧姆的", "tip": "ohm + ic → 欧姆的", "phrases": ["ohmic contact", "ohmic loss", "ohmic heating", "ohmic resistance"]},
      {"word": "ohmmeter", "phonetic": "/ˈoʊmmiːtər/", "pos": "n.", "meaning": "欧姆表", "tip": "ohm + meter测量 → 欧姆表", "phrases": ["digital ohmmeter", "micro-ohmmeter", "insulation ohmmeter", "ground ohmmeter"]},
      {"word": "kiloohm", "phonetic": "/ˈkɪloʊoʊm/", "pos": "n.", "meaning": "千欧", "tip": "kilo千 + ohm → 千欧", "phrases": ["kiloohm resistor", "kiloohm range", "kiloohm per volt", "megohm kiloohm"]}]},
    {"root": "farad", "/ˈfærəd/", "法拉", "Faraday发明者 → 法拉",
     ["farad capacitor", "microfarad", "picofarad", "farad meter"],
     [{"word": "farad", "phonetic": "/ˈfærəd/", "pos": "n.", "meaning": "法拉", "tip": "Faraday发明者 → 法拉"},
      {"word": "faradic", "phonetic": "/fəˈrædɪk/", "pos": "adj.", "meaning": "感应电流的", "tip": "farad + ic → 感应电流的", "phrases": ["faradic current", "faradic battery", "faradic induction", "faradic stimulator"]},
      {"word": "microfarad", "phonetic": "/ˌmaɪkroʊˈfærəd/", "pos": "n.", "meaning": "微法", "tip": "micro微 + farad → 微法", "phrases": ["microfarad capacitor", "microfarad range", "microfarad meter", "microfarad value"]},
      {"word": "picofarad", "phonetic": "/ˈpiːkoʊfærəd/", "pos": "n.", "meaning": "皮法", "tip": "pico皮 + farad → 皮法", "phrases": ["picofarad capacitor", "picofarad range", "picofarad trimmer", "picofarad measurement"]}]},
    {"root": "henry", "/ˈhenri/", "亨利", "Henry发明者 → 亨利",
     ["henry inductor", "millihenry", "microhenry", "mutual henry"],
     [{"word": "henry", "phonetic": "/ˈhenri/", "pos": "n.", "meaning": "亨利", "tip": "Henry发明者 → 亨利"},
      {"word": "henries", "phonetic": "/ˈhenriz/", "pos": "n.", "meaning": "亨利(复数)", "tip": "henry + es → 亨利复数", "phrases": ["inductance henries", "coil henries", "henries per meter", "henries of inductance"]},
      {"word": "millihenry", "phonetic": "/ˈmɪliˌhenri/", "pos": "n.", "meaning": "毫亨", "tip": "milli毫 + henry → 毫亨", "phrases": ["millihenry coil", "millihenry choke", "millihenry value", "millihenry meter"]},
      {"word": "microhenry", "phonetic": "/ˈmaɪkroʊhenri/", "pos": "n.", "meaning": "微亨", "tip": "micro微 + henry → 微亨", "phrases": ["microhenry inductor", "microhenry choke", "microhenry range", "microhenry standard"]}]},
    {"root": "watt", "/wɑːt/", "瓦特", "Watt发明者 → 瓦特",
     ["watt-hour", "power rating", "kilowatt-hour", "wattmeter"],
     [{"word": "watt", "phonetic": "/wɑːt/", "pos": "n.", "meaning": "瓦特", "tip": "Watt发明者 → 瓦特"},
      {"word": "wattage", "phonetic": "/ˈwɑːtɪdʒ/", "pos": "n.", "meaning": "瓦数", "tip": "watt + age → 瓦数", "phrases": ["wattage rating", "wattage consumption", "wattage output", "wattage capacity"]},
      {"word": "kilowatt", "phonetic": "/ˈkɪloʊwɑːt/", "pos": "n.", "meaning": "千瓦", "tip": "kilo千 + watt → 千瓦", "phrases": ["kilowatt hour", "kilowatt capacity", "kilowatt demand", "kilowatt peak"]},
      {"word": "megawatt", "phonetic": "/ˈmeɡəwɑːt/", "pos": "n.", "meaning": "兆瓦", "tip": "mega兆 + watt → 兆瓦", "phrases": ["megawatt hour", "megawatt capacity", "megawatt plant", "megawatt output"]}]},
    {"root": "joule", "/dʒuːl/", "焦耳", "Joule发明者 → 焦耳",
     ["joule heating", "joule law", "joule energy", "kilojoule"],
     [{"word": "joule", "phonetic": "/dʒuːl/", "pos": "n.", "meaning": "焦耳", "tip": "Joule发明者 → 焦耳"},
      {"word": "joules", "phonetic": "/dʒuːlz/", "pos": "n.", "meaning": "焦耳(复数)", "tip": "joule + s → 焦耳复数", "phrases": ["joules per second", "joules of energy", "megajoules", "gigajoules"]},
      {"word": "kilojoule", "phonetic": "/ˈkɪloʊdʒuːl/", "pos": "n.", "meaning": "千焦", "tip": "kilo千 + joule → 千焦", "phrases": ["kilojoule per mole", "kilojoule range", "megajoule kilojoule", "kilojoule meter"]},
      {"word": "joulemeter", "phonetic": "/ˈdʒuːlmiːtər/", "pos": "n.", "meaning": "焦耳计", "tip": "joule + meter测量 → 焦耳计", "phrases": ["digital joulemeter", "joulemeter reading", "joulemeter calibration", "joulemeter accuracy"]}]},
    {"root": "coulomb", "/ˈkuːlɑːm/", "库仑", "Coulomb发明者 → 库仑",
     ["coulomb law", "coulomb force", "coulomb meter", "coulomb charge"],
     [{"word": "coulomb", "phonetic": "/ˈkuːlɑːm/", "pos": "n.", "meaning": "库仑", "tip": "Coulomb发明者 → 库仑"},
      {"word": "coulombs", "phonetic": "/ˈkuːlɑːmz/", "pos": "n.", "meaning": "库仑(复数)", "tip": "coulomb + s → 库仑复数", "phrases": ["coulombs per second", "microcoulombs", "nanocoulombs", "coulombs of charge"]},
      {"word": "microcoulomb", "phonetic": "/ˌmaɪkroʊˈkuːlɑːm/", "pos": "n.", "meaning": "微库", "tip": "micro微 + coulomb → 微库", "phrases": ["microcoulomb meter", "microcoulomb charge", "microcoulomb range", "microcoulomb sensitivity"]},
      {"word": "coulombmeter", "phonetic": "/ˈkuːlɑːmmitər/", "pos": "n.", "meaning": "库仑计", "tip": "coulomb + meter测量 → 库仑计", "phrases": ["digital coulombmeter", "coulombmeter probe", "coulombmeter circuit", "coulombmeter application"]}]},
    {"root": "tesla", "/ˈteslə/", "特斯拉", "Tesla发明者 → 特斯拉",
     ["tesla coil", "tesla meter", "magnetic flux density", "nanotesla"],
     [{"word": "tesla", "phonetic": "/ˈteslə/", "pos": "n.", "meaning": "特斯拉", "tip": "Tesla发明者 → 特斯拉(磁通密度单位)"},
      {"word": "teslas", "phonetic": "/ˈtesləz/", "pos": "n.", "meaning": "特斯拉(复数)", "tip": "tesla + s → 特斯拉复数", "phrases": ["teslas per meter", "milliteslas", "microteslas", "nanoteslas"]},
      {"word": "millitesla", "phonetic": "/ˈmɪliteslə/", "pos": "n.", "meaning": "毫特", "tip": "milli毫 + tesla → 毫特", "phrases": ["millitesla range", "millitesla meter", "millitesla sensitivity", "millitesla measurement"]},
      {"word": "nanotesla", "phonetic": "/ˈnænoʊteslə/", "pos": "n.", "meaning": "纳特", "tip": "nano纳 + tesla → 纳特", "phrases": ["nanotesla magnetometer", "nanotesla range", "geomagnetic nanotesla", "nanotesla resolution"]}]},
    {"root": "weber", "/ˈweɪbər/", "韦伯", "Weber发明者 → 韦伯",
     ["weber meter", "magnetic flux", "maxwell weber", "microweber"],
     [{"word": "weber", "phonetic": "/ˈweɪbər/", "pos": "n.", "meaning": "韦伯", "tip": "Weber发明者 → 韦伯(磁通量单位)"},
      {"word": "webers", "phonetic": "/ˈweɪbərz/", "pos": "n.", "meaning": "韦伯(复数)", "tip": "weber + s → 韦伯复数", "phrases": ["webers per square meter", "milliwebers", "microwebers", "nanowebers"]},
      {"word": "microweber", "phonetic": "/ˈmaɪkroʊweɪbər/", "pos": "n.", "meaning": "微韦", "tip": "micro微 + weber → 微韦", "phrases": ["microweber flux", "microweber meter", "microweber coil", "microweber range"]},
      {"word": "maxwell", "phonetic": "/ˈmækswel/", "pos": "n.", "meaning": "麦克斯韦", "tip": "Maxwell人名 → 麦克斯韦(磁通量单位)", "phrases": ["maxwell weber", "maxwell equation", "maxwell theory", "maxwell distribution"]}]},
    {"root": "siemens", "/ˈsiːmənz/", "西门子", "Siemens发明者 → 西门子",
     ["siemens unit", "microsiemens", "millisiemens", "conductance"],
     [{"word": "siemens", "phonetic": "/ˈsiːmənz/", "pos": "n.", "meaning": "西门子", "tip": "Siemens发明者 → 西门子(电导单位)"},
      {"word": "microsiemens", "phonetic": "/ˌmaɪkroʊˈsiːmənz/", "pos": "n.", "meaning": "微西", "tip": "micro微 + siemens → 微西", "phrases": ["microsiemens per cm", "microsiemens meter", "microsiemens conductivity", "microsiemens range"]},
      {"word": "millisiemens", "phonetic": "/ˈmɪlisiːmənz/", "pos": "n.", "meaning": "毫西", "tip": "milli毫 + siemens → 毫西", "phrases": ["millisiemens cm", "millisiemens conductivity", "millisiemens measurement", "millisiemens conversion"]},
      {"word": "mho", "phonetic": "/moʊ/", "pos": "n.", "meaning": "姆欧", "tip": "mho = ohm倒写 → 姆欧(电导单位)", "phrases": ["mho per cm", "mho conductance", "micromho", "millimho"]}]},
    {"root": "hertz", "/hɜːrts/", "赫兹", "Hertz发明者 → 赫兹",
     ["hertz frequency", "kilohertz", "megahertz", "gigahertz"],
     [{"word": "hertz", "phonetic": "/hɜːrts/", "pos": "n.", "meaning": "赫兹", "tip": "Hertz发明者 → 赫兹(频率单位)"},
      {"word": "kilohertz", "phonetic": "/ˈkɪloʊhɜːrts/", "pos": "n.", "meaning": "千赫", "tip": "kilo千 + hertz → 千赫", "phrases": ["kilohertz range", "kilohertz signal", "kilohertz frequency", "kilohertz bandwidth"]},
      {"word": "megahertz", "phonetic": "/ˈmeɡəhɜːrts/", "pos": "n.", "meaning": "兆赫", "tip": "mega兆 + hertz → 兆赫", "phrases": ["megahertz range", "megahertz clock", "megahertz processor", "megahertz radio"]},
      {"word": "gigahertz", "phonetic": "/ˈɡɪɡəhɜːrts/", "pos": "n.", "meaning": "吉赫", "tip": "giga吉 + hertz → 吉赫", "phrases": ["gigahertz processor", "gigahertz frequency", "gigahertz range", "gigahertz spectrum"]}]},
    {"root": "lux", "/lʌks/", "勒克斯", "lux → 勒克斯",
     ["lux meter", "illuminance", "kilolux", "footcandle lux"],
     [{"word": "lux", "phonetic": "/lʌks/", "pos": "n.", "meaning": "勒克斯", "tip": "lux → 勒克斯(照度单位)"},
      {"word": "luxes", "phonetic": "/ˈlʌksɪz/", "pos": "n.", "meaning": "勒克斯(复数)", "tip": "lux + es → 勒克斯复数", "phrases": ["luxes per watt", "thousands of luxes", "milliluxes", "microluxes"]},
      {"word": "kilolux", "phonetic": "/ˈkɪloʊlʌks/", "pos": "n.", "meaning": "千勒", "tip": "kilo千 + lux → 千勒", "phrases": ["kilolux sunlight", "kilolux range", "kilolux meter", "kilolux intensity"]},
      {"word": "luxmeter", "phonetic": "/ˈlʌksmiːtər/", "pos": "n.", "meaning": "照度计", "tip": "lux + meter测量 → 照度计", "phrases": ["digital luxmeter", "luxmeter sensor", "luxmeter calibration", "luxmeter reading"]}]},
    {"root": "lumen", "/ˈluːmən/", "流明", "lumen → 流明",
     ["lumen output", "lumen watt", "kilolumen", "luminous flux"],
     [{"word": "lumen", "phonetic": "/ˈluːmən/", "pos": "n.", "meaning": "流明", "tip": "lumen → 流明(光通量单位)"},
      {"word": "lumens", "phonetic": "/ˈluːmənz/", "pos": "n.", "meaning": "流明(复数)", "tip": "lumen + s → 流明复数", "phrases": ["lumens per watt", "total lumens", "initial lumens", "rated lumens"]},
      {"word": "kilolumen", "phonetic": "/ˈkɪloʊluːmən/", "pos": "n.", "meaning": "千流明", "tip": "kilo千 + lumen → 千流明", "phrases": ["kilolumen output", "kilolumen lamp", "kilolumen range", "kilolumen efficiency"]},
      {"word": "luminaire", "phonetic": "/ˌluːməˈner/", "pos": "n.", "meaning": "灯具", "tip": "lumen光 + aire器具 → 灯具", "phrases": ["LED luminaire", "street luminaire", "indoor luminaire", "outdoor luminaire"]}]},
]

print(f"第1组定义完成: {len(group1)} 个词根")
