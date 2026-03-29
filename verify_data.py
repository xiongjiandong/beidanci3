#!/usr/bin/env python3
import json

with open('f:/claudeanli/beidanci3/src/data/mechanical.json', 'r', encoding='utf-8') as f:
    data = json.load(f)

print(f'Total entries: {len(data)}')
ids = [d['id'] for d in data]
print(f'Min ID: {min(ids)}, Max ID: {max(ids)}')
new_count = len([i for i in ids if i >= 801])
print(f'New entries (ID >= 801): {new_count}')

# 显示一些新条目的示例
new_entries = [d for d in data if d['id'] >= 801]
if new_entries:
    print(f'\nFirst new entry (ID 801):')
    print(f'  Root: {new_entries[0]["root"]}')
    print(f'  Meaning: {new_entries[0]["meaning"]}')
    print(f'  Category: {new_entries[0]["category"]}')
    print(f'  Words count: {len(new_entries[0]["words"])}')

    print(f'\nLast new entry (ID {new_entries[-1]["id"]}):')
    print(f'  Root: {new_entries[-1]["root"]}')
    print(f'  Meaning: {new_entries[-1]["meaning"]}')
    print(f'  Category: {new_entries[-1]["category"]}')

# 验证所有新条目的category
all_mechanical = all(d['category'] == '机械' for d in new_entries)
print(f'\nAll new entries have category "机械": {all_mechanical}')
