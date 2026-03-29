#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Add entries 561-800 to mechanical.json
"""

import json

# Read existing file
with open('src/data/mechanical.json', 'r', encoding='utf-8') as f:
    data = json.load(f)

# Define new entries 561-800
new_entries = [
    # 561-570
    {
        "id": 561, "root": "anneal", "phonetic": "/əˈniːl/", "partOfSpeech": "root",
        "meaning": "退火", "frequency": 561, "category": "机械",
        "words": [
            {"word": "annealing", "phonetic": "/əˈniːlɪŋ/", "partOfSpeech": "n.", "meaning": "退火",
             "memoryTip": "anneal退火 + ing名词 → 退火", "root": "anneal", "rootPhonetic": "/əˈniːl/",
             "rootMeaning": "退火", "rootPhrases": ["stress relief annealing", "full annealing", "spheroidizing annealing"],
             "wordPhrases": ["stress relief annealing", "full annealing", "spheroidizing annealing"]},
            {"word": "annealed", "phonetic": "/əˈniːld/", "partOfSpeech": "adj.", "meaning": "退火的",
             "memoryTip": "anneal退火 + ed形容词 → 退火的", "root": "anneal", "rootPhonetic": "/əˈniːl/",
             "rootMeaning": "退火", "rootPhrases": ["stress relief annealing", "full annealing", "spheroidizing annealing"],
             "wordPhrases": ["annealed copper", "annealed steel", "annealed wire"]}
        ],
        "phrases": ["stress relief annealing (去应力退火)", "full annealing (完全退火)", "spheroidizing annealing (球化退火)", "annealing furnace (退火炉)"],
        "mnemonic": "anneal→an+neal结合→退火软化"
    },
    {
        "id": 562, "root": "normal", "phonetic": "/ˈnɔːrml/", "partOfSpeech": "root",
        "meaning": "正火", "frequency": 562, "category": "机械",
        "words": [
            {"word": "normalizing", "phonetic": "/ˈnɔːrməlaɪzɪŋ/", "partOfSpeech": "n.", "meaning": "正火",
             "memoryTip": "normal正常 + izing → 正火", "root": "normal", "rootPhonetic": "/ˈnɔːrml/",
             "rootMeaning": "正火", "rootPhrases": ["normalizing temperature", "normalizing process"],
             "wordPhrases": ["normalizing temperature", "normalizing process", "normalizing treatment"]},
            {"word": "normalized", "phonetic": "/ˈnɔːrməlaɪzd/", "partOfSpeech": "adj.", "meaning": "正火的",
             "memoryTip": "normal正常 + ized → 正火的", "root": "normal", "rootPhonetic": "/ˈnɔːrml/",
             "rootMeaning": "正火", "rootPhrases": ["normalizing temperature", "normalizing process"],
             "wordPhrases": ["normalized steel", "normalized structure"]}
        ],
        "phrases": ["normalizing temperature (正火温度)", "normalizing process (正火工艺)", "normalizing treatment (正火处理)", "normalized steel (正火钢)"],
        "mnemonic": "normal→正常化→正火"
    },
]

# Add new entries
data.extend(new_entries)

# Write back
with open('src/data/mechanical.json', 'w', encoding='utf-8') as f:
    json.dump(data, f, ensure_ascii=False, indent=2)

print(f"Added {len(new_entries)} new entries. Total entries: {len(data)}")
