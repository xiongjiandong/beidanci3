#!/usr/bin/env python3
import json

# 剩余的21个词根
remaining_roots = [
    {"root": "oscillat", "phonetic": "/ˈɑːsɪleɪt/", "meaning": "振荡", "pos": "v."},
    {"root": "resonance", "phonetic": "/ˈrezənəns/", "meaning": "共振", "pos": "n."},
    {"root": "damp", "phonetic": "/dæmp/", "meaning": "阻尼", "pos": "v./n."},
    {"root": "shock", "phonetic": "/ʃɑːk/", "meaning": "冲击", "pos": "n./v."},
    {"root": "impact", "phonetic": "/ˈɪmpækt/", "meaning": "冲击", "pos": "n./v."},
    {"root": "collision", "phonetic": "/kəˈlɪʒn/", "meaning": "碰撞", "pos": "n."},
    {"root": "fatigue", "phonetic": "/fəˈtiːɡ/", "meaning": "疲劳", "pos": "n./v."},
    {"root": "wear", "phonetic": "/wer/", "meaning": "磨损", "pos": "n./v."},
    {"root": "corrode", "phonetic": "/kəˈroʊd/", "meaning": "腐蚀", "pos": "v."},
    {"root": "erode", "phonetic": "/ɪˈroʊd/", "meaning": "侵蚀", "pos": "v."},
    {"root": "creep", "phonetic": "/kriːp/", "meaning": "蠕变", "pos": "n./v."},
    {"root": "deflect", "phonetic": "/dɪˈflekt/", "meaning": "挠曲", "pos": "v."},
    {"root": "deform", "phonetic": "/dɪˈfɔːrm/", "meaning": "变形", "pos": "v."},
    {"root": "distort", "phonetic": "/dɪˈstɔːrt/", "meaning": "畸变", "pos": "v."},
    {"root": "twist", "phonetic": "/twɪst/", "meaning": "扭转", "pos": "v./n."},
    {"root": "bend", "phonetic": "/bend/", "meaning": "弯曲", "pos": "v./n."},
    {"root": "flex", "phonetic": "/fleks/", "meaning": "挠曲", "pos": "v./n."},
    {"root": "torsion", "phonetic": "/ˈtɔːrʃn/", "meaning": "扭转", "pos": "n."},
    {"root": "shear", "phonetic": "/ʃɪr/", "meaning": "剪切", "pos": "n./v."},
    {"root": "traction", "phonetic": "/ˈtrækʃn/", "meaning": "牵引", "pos": "n."},
]

def generate_entry(root_data, entry_id):
    root = root_data["root"]
    phonetic = root_data["phonetic"]
    meaning = root_data["meaning"]

    words = [{
        "word": root,
        "phonetic": phonetic,
        "partOfSpeech": root_data.get("pos", "n."),
        "meaning": meaning,
        "memoryTip": f"{root} → {meaning}",
        "root": root,
        "rootPhonetic": phonetic,
        "rootMeaning": meaning,
        "rootPhrases": [],
        "wordPhrases": []
    }]

    phrases = [f"{root} assembly (待翻译)", f"{root} system (待翻译)"]

    for word in words:
        word["rootPhrases"] = phrases
        word["wordPhrases"] = phrases

    return {
        "id": entry_id,
        "root": root,
        "phonetic": phonetic,
        "partOfSpeech": "root",
        "frequency": entry_id,
        "category": "机械",
        "words": words,
        "phrases": phrases,
        "mnemonic": f"{root} → 机械领域核心词汇 → {meaning}",
        "meaning": meaning
    }

# 读取现有数据
with open('f:/claudeanli/beidanci3/src/data/mechanical.json', 'r', encoding='utf-8') as f:
    data = json.load(f)

print(f"现有数据条目数: {len(data)}")

# 获取当前最大ID
max_id = max(item['id'] for item in data)
print(f"当前最大ID: {max_id}")

# 生成新条目
new_entries = []
for i, root_data in enumerate(remaining_roots):
    entry_id = 980 + i
    entry = generate_entry(root_data, entry_id)
    new_entries.append(entry)

# 添加最后一个条目以达到1000
if max_id + len(new_entries) < 1000:
    extra_root = {"root": "ratchet", "phonetic": "/ˈrætʃɪt/", "meaning": "棘轮", "pos": "n."}
    entry = generate_entry(extra_root, 1000)
    new_entries.append(entry)

# 添加到现有数据
data.extend(new_entries)

# 保存文件
with open('f:/claudeanli/beidanci3/src/data/mechanical.json', 'w', encoding='utf-8') as f:
    json.dump(data, f, ensure_ascii=False, indent=2)

print(f"成功添加 {len(new_entries)} 个新词根")
print(f"新数据条目总数: {len(data)}")
print(f"新ID范围: 980 - {max_id + len(new_entries)}")
