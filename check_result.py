#!/usr/bin/env python3
import json

with open('f:/claudeanli/beidanci3/src/data/mechanical.json', 'r', encoding='utf-8') as f:
    data = json.load(f)

# 写入结果文件
with open('f:/claudeanli/beidanci3/result.txt', 'w', encoding='utf-8') as f:
    f.write(f'Total entries: {len(data)}\n')
    ids = [d['id'] for d in data]
    f.write(f'Min ID: {min(ids)}, Max ID: {max(ids)}\n')
    new_count = len([i for i in ids if i >= 801])
    f.write(f'New entries (ID >= 801): {new_count}\n')

    # 显示一些新条目的示例
    new_entries = [d for d in data if d['id'] >= 801]
    if new_entries:
        f.write(f'\nFirst new entry (ID 801):\n')
        f.write(f'  Root: {new_entries[0]["root"]}\n')
        f.write(f'  Meaning: {new_entries[0]["meaning"]}\n')
        f.write(f'  Category: {new_entries[0]["category"]}\n')

        f.write(f'\nLast new entry (ID {new_entries[-1]["id"]}):\n')
        f.write(f'  Root: {new_entries[-1]["root"]}\n')
        f.write(f'  Meaning: {new_entries[-1]["meaning"]}\n')
        f.write(f'  Category: {new_entries[-1]["category"]}\n')

    # 验证所有新条目的category
    all_mechanical = all(d['category'] == '机械' for d in new_entries)
    f.write(f'\nAll new entries have category "机械": {all_mechanical}\n')

print('Result written to result.txt')
