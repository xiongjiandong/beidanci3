import json
import os

# Read existing file
with open(r'f:\claudeanli\beidanci3\src\data\communication.json', 'r', encoding='utf-8') as f:
    data = json.load(f)

print(f"Current entries: {len(data)}")
print(f"Last entry: id={data[-1]['id']}, root={data[-1]['root']}, freq={data[-1]['frequency']}")

# Get all existing roots
existing_roots = set(entry['root'].lower() for entry in data)
print(f"Existing roots: {len(existing_roots)}")
