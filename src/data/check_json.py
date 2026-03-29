import json

with open('f:/claudeanli/beidanci3/src/data/semiconductor.json', 'r', encoding='utf-8') as f:
    data = json.load(f)

print(f"Total entries: {len(data)}")
print("\nAll roots:")
for item in data:
    print(f"{item['id']}: {item['root']}")
