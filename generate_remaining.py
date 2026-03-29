#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Generate remaining mechanical root entries (561-800)
"""

import json

# Define entries 561-800
entries = []

# Template for creating entries
def create_entry(entry_id, root, phonetic, meaning, words_data, phrases, mnemonic):
    """Create a single entry"""
    words = []
    root_phrases = [w["phrases"][0] if "phrases" in w else w["word"] for w in words_data[:4]]

    for w in words_data:
        word_phrases = w.get("phrases", [w["word"]])
        words.append({
            "word": w["word"],
            "phonetic": w["phonetic"],
            "partOfSpeech": w.get("partOfSpeech", "n."),
            "meaning": w["meaning"],
            "memoryTip": w["memoryTip"],
            "root": root,
            "rootPhonetic": phonetic,
            "rootMeaning": meaning,
            "rootPhrases": root_phrases,
            "wordPhrases": word_phrases[:4]
        })

    return {
        "id": entry_id,
        "root": root,
        "phonetic": phonetic,
        "partOfSpeech": "root",
        "meaning": meaning,
        "frequency": entry_id,
        "category": "机械",
        "words": words,
        "phrases": phrases,
        "mnemonic": mnemonic
    }

# Define data for entries 561-800
entries_data = [
    # 561-570
    (561, "anneal", "/əˈniːl/", "退火", [
        {"word": "annealing", "phonetic": "/əˈniːlɪŋ/", "meaning": "退火", "memoryTip": "anneal退火 + ing名词 → 退火", "phrases": ["stress relief annealing", "full annealing", "spheroidizing annealing"]},
        {"word": "annealed", "phonetic": "/əˈniːld/", "meaning": "退火的", "memoryTip": "anneal退火 + ed形容词 → 退火的", "phrases": ["annealed copper", "annealed steel", "annealed wire"]}
    ], ["stress relief annealing (去应力退火)", "full annealing (完全退火)", "spheroidizing annealing (球化退火)", "annealing furnace (退火炉)"], "anneal→an+neal结合→退火软化"),

    (562, "normal", "/ˈnɔːrml/", "正火", [
        {"word": "normalizing", "phonetic": "/ˈnɔːrməlaɪzɪŋ/", "meaning": "正火", "memoryTip": "normal正常 + izing → 正火", "phrases": ["normalizing temperature", "normalizing process", "normalizing treatment"]},
        {"word": "normalized", "phonetic": "/ˈnɔːrməlaɪzd/", "meaning": "正火的", "memoryTip": "normal正常 + ized → 正火的", "phrases": ["normalized steel", "normalized structure"]}
    ], ["normalizing temperature (正火温度)", "normalizing process (正火工艺)", "normalizing treatment (正火处理)", "normalized steel (正火钢)"], "normal→正常化→正火"),

    (563, "quench", "/kwentʃ/", "淬火", [
        {"word": "quenching", "phonetic": "/ˈkwentʃɪŋ/", "meaning": "淬火", "memoryTip": "quench淬火 + ing名词 → 淬火", "phrases": ["oil quenching", "water quenching", "quenching medium", "quenching crack"]},
        {"word": "quenched", "phonetic": "/kwentʃt/", "meaning": "淬火的", "memoryTip": "quench淬火 + ed形容词 → 淬火的", "phrases": ["quenched and tempered", "quenched steel", "quenched hardness"]}
    ], ["oil quenching (油淬)", "water quenching (水淬)", "quenching medium (淬火介质)", "quenching crack (淬火裂纹)"], "quench→快速冷却→淬火"),

    (564, "carbur", "/ˈkɑːrbər/", "渗碳", [
        {"word": "carburizing", "phonetic": "/ˈkɑːrbəraɪzɪŋ/", "meaning": "渗碳", "memoryTip": "carbur碳 + izing → 渗碳", "phrases": ["gas carburizing", "vacuum carburizing", "carburizing depth", "carburizing temperature"]},
        {"word": "carburized", "phonetic": "/ˈkɑːrbəraɪzd/", "meaning": "渗碳的", "memoryTip": "carbur碳 + ized → 渗碳的", "phrases": ["carburized steel", "carburized case", "carburized layer"]}
    ], ["gas carburizing (气体渗碳)", "vacuum carburizing (真空渗碳)", "carburizing depth (渗碳层深度)", "carburizing temperature (渗碳温度)"], "carbur→carbon碳→渗碳"),

    (565, "nitr", "/ˈnaɪtrɪd/", "氮化", [
        {"word": "nitriding", "phonetic": "/ˈnaɪtrɪdɪŋ/", "meaning": "氮化", "memoryTip": "nitr氮 + iding → 氮化", "phrases": ["gas nitriding", "ion nitriding", "nitriding depth", "nitriding process"]},
        {"word": "nitride", "phonetic": "/ˈnaɪtraɪd/", "meaning": "氮化物", "memoryTip": "nitr氮 + ide化合物 → 氮化物", "phrases": ["metal nitride", "ceramic nitride", "nitride coating"]}
    ], ["gas nitriding (气体氮化)", "ion nitriding (离子氮化)", "nitriding depth (氮化层深度)", "nitriding process (氮化工艺)"], "nitr→nitrogen氮→氮化"),

    (566, "coat", "/koʊt/", "涂层", [
        {"word": "coating", "phonetic": "/ˈkoʊtɪŋ/", "meaning": "涂层", "memoryTip": "coat涂层 + ing名词 → 涂层", "phrases": ["surface coating", "protective coating", "powder coating", "ceramic coating"]},
        {"word": "coated", "phonetic": "/ˈkoʊtɪd/", "meaning": "有涂层的", "memoryTip": "coat涂层 + ed形容词 → 有涂层的", "phrases": ["coated tool", "coated blade", "coated surface"]}
    ], ["surface coating (表面涂层)", "protective coating (保护涂层)", "powder coating (粉末涂层)", "ceramic coating (陶瓷涂层)"], "coat→外套→涂层"),

    (567, "plate", "/pleɪt/", "镀层", [
        {"word": "plating", "phonetic": "/ˈpleɪtɪŋ/", "meaning": "电镀", "memoryTip": "plate镀层 + ing名词 → 电镀", "phrases": ["chrome plating", "nickel plating", "zinc plating", "electroplating"]},
        {"word": "plated", "phonetic": "/ˈpleɪtɪd/", "meaning": "电镀的", "memoryTip": "plate镀层 + ed形容词 → 电镀的", "phrases": ["plated steel", "plated surface", "gold plated"]}
    ], ["chrome plating (镀铬)", "nickel plating (镀镍)", "zinc plating (镀锌)", "electroplating (电镀)"], "plate→平板→镀层"),

    (568, "polish", "/ˈpɑːlɪʃ/", "抛光", [
        {"word": "polishing", "phonetic": "/ˈpɑːlɪʃɪŋ/", "meaning": "抛光", "memoryTip": "polish抛光 + ing名词 → 抛光", "phrases": ["mechanical polishing", "chemical polishing", "electropolishing", "polishing compound"]},
        {"word": "polished", "phonetic": "/ˈpɑːlɪʃt/", "meaning": "抛光的", "memoryTip": "polish抛光 + ed形容词 → 抛光的", "phrases": ["polished surface", "polished finish", "polished steel"]}
    ], ["mechanical polishing (机械抛光)", "chemical polishing (化学抛光)", "electropolishing (电解抛光)", "polishing compound (抛光剂)"], "polish→波兰→抛光工艺精湛"),

    (569, "etch", "/etʃ/", "蚀刻", [
        {"word": "etching", "phonetic": "/ˈetʃɪŋ/", "meaning": "蚀刻", "memoryTip": "etch蚀刻 + ing名词 → 蚀刻", "phrases": ["chemical etching", "plasma etching", "laser etching", "etching process"]},
        {"word": "etched", "phonetic": "/etʃt/", "meaning": "蚀刻的", "memoryTip": "etch蚀刻 + ed形容词 → 蚀刻的", "phrases": ["etched surface", "etched pattern", "deep etched"]}
    ], ["chemical etching (化学蚀刻)", "plasma etching (等离子蚀刻)", "laser etching (激光蚀刻)", "etching process (蚀刻工艺)"], "etch→刻蚀"),

    (570, "passiv", "/ˈpæsɪveɪt/", "钝化", [
        {"word": "passivation", "phonetic": "/ˌpæsɪˈveɪʃn/", "meaning": "钝化", "memoryTip": "passiv钝化 + ation名词 → 钝化", "phrases": ["chemical passivation", "electrochemical passivation", "passivation layer", "passivation film"]},
        {"word": "passivated", "phonetic": "/ˈpæsɪveɪtɪd/", "meaning": "钝化的", "memoryTip": "passiv钝化 + ated形容词 → 钝化的", "phrases": ["passivated steel", "passivated surface"]}
    ], ["chemical passivation (化学钝化)", "electrochemical passivation (电化学钝化)", "passivation layer (钝化层)", "passivation film (钝化膜)"], "passiv→passive被动→钝化"),
]

# Generate entries
for entry_data in entries_data:
    entry_id, root, phonetic, meaning, words_data, phrases, mnemonic = entry_data
    entry = create_entry(entry_id, root, phonetic, meaning, words_data, phrases, mnemonic)
    entries.append(entry)

# Output as JSON
print(json.dumps(entries, ensure_ascii=False, indent=2))
