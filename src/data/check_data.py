# -*- coding: utf-8 -*-
import json

# Read the existing file
with open('chemical.json', 'r', encoding='utf-8') as f:
    data = json.load(f)

print(f"Current entries: {len(data)}")
print(f"Last ID: {data[-1]['id']}")
roots = [item['root'] for item in data]
print(f"Roots: {roots}")
