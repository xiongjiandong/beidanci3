import json

# 读取JSON文件
with open('F:/claudeanli/beidanci3/src/data/communication.json', 'r', encoding='utf-8') as f:
    data = json.load(f)

print(f"Total entries: {len(data)}")
print(f"Last entry ID: {data[-1]['id']}")
print(f"Last entry root: {data[-1]['root']}")

# 显示最后一个条目的键
print("\nEntry keys:", list(data[-1].keys()))

# 显示word条目的结构
print("\nWord entry keys:", list(data[-1]['words'][0].keys()))
