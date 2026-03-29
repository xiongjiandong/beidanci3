import json

# 读取现有数据
with open('f:/claudeanli/beidanci3/src/data/semiconductor.json', 'r', encoding='utf-8') as f:
    data = json.load(f)

max_id = max(item['id'] for item in data)
print(f"Current max ID: {max_id}")
print(f"Total entries: {len(data)}")
