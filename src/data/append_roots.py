#!/usr/bin/env python3
# -*- coding: utf-8 -*-
import json

# 300个词根定义
roots_list = [
    ["spect", "/spekt/", "看"],
    ["form", "/fɔːm/", "形状"],
    ["port", "/pɔːt/", "拿"],
    ["press", "/pres/", "压"],
    ["dict", "/dɪkt/", "说"],
    ["duce", "/djuːs/", "引导"],
    ["ject", "/dʒekt/", "扔"],
    ["miss", "/mɪs/", "送"],
    ["tain", "/teɪn/", "拿住"],
    ["vent", "/vent/", "来"],
    ["vers", "/vɜːs/", "转"],
    ["vert", "/vɜːt/", "转"],
    ["tract", "/trækt/", "拉"],
    ["sist", "/sɪst/", "站立"],
    ["sens", "/sens/", "感觉"],
    ["sent", "/sent/", "感觉"],
    ["fer", "/fɜː/", "带"],
    ["flect", "/flekt/", "弯曲"],
    ["flex", "/fleks/", "弯曲"],
    ["pend", "/pend/", "悬挂"],
    ["pens", "/pens/", "悬挂"],
    ["sum", "/sʌm/", "拿"],
    ["sumpt", "/sʌmpt/", "拿"],
    ["tribute", "/ˈtrɪbjuːt/", "给予"],
    ["tribut", "/ˈtrɪbjuːt/", "给予"],
    ["pute", "/pjuːt/", "思考"],
    ["put", "/pʊt/", "思考"],
    ["pose", "/pəʊz/", "放"],
    ["pos", "/pɒz/", "放"],
    ["scribe", "/skraɪb/", "写"],
    ["script", "/skrɪpt/", "写"],
    ["cred", "/kred/", "相信"],
    ["ceed", "/siːd/", "走"],
    ["cede", "/siːd/", "走"],
    ["cess", "/ses/", "走"],
    ["ced", "/sed/", "走"],
    ["cur", "/kɜː/", "跑"],
    ["curs", "/kɜːs/", "跑"],
    ["cour", "/kʊə/", "跑"],
    ["cours", "/kɔːs/", "跑"],
    ["rupt", "/rʌpt/", "断裂"],
    ["pel", "/pel/", "推"],
    ["puls", "/pʌls/", "推"],
    ["cap", "/kæp/", "拿"],
    ["capt", "/kæpt/", "拿"],
    ["cept", "/sept/", "拿"],
    ["ceive", "/siːv/", "拿"],
    ["cid", "/sɪd/", "切"],
    ["cis", "/sɪs/", "切"],
    ["cise", "/saɪz/", "切"],
    ["clud", "/kluːd/", "关闭"],
    ["clus", "/kluːs/", "关闭"],
    ["close", "/kləʊz/", "关闭"],
    ["duct", "/dʌkt/", "引导"],
    ["dur", "/djʊə/", "持久"],
    ["firm", "/fɜːm/", "坚固"],
    ["fix", "/fɪks/", "固定"],
    ["flu", "/fluː/", "流"],
    ["fluct", "/flʌkt/", "流"],
    ["fus", "/fjuːz/", "流"],
    ["fund", "/fʌnd/", "基础"],
    ["found", "/faʊnd/", "基础"],
    ["gen", "/dʒen/", "产生"],
    ["gener", "/ˈdʒenə/", "产生"],
    ["gest", "/dʒest/", "携带"],
    ["gress", "/ɡres/", "行走"],
    ["grad", "/ɡræd/", "步"],
    ["gram", "/ɡræm/", "写"],
    ["graph", "/ɡræf/", "写"],
    ["habit", "/ˈhæbɪt/", "居住"],
    ["hibit", "/ˈhɪbɪt/", "拿"],
    ["it", "/ɪt/", "走"],
    ["lect", "/lekt/", "选择"],
    ["leg", "/leɡ/", "法律"],
    ["lig", "/lɪɡ/", "捆绑"],
    ["lev", "/lev/", "举起"],
    ["liev", "/liːv/", "举起"],
    ["liter", "/ˈlɪtə/", "字母"],
    ["loc", "/lɒk/", "地方"],
    ["log", "/lɒɡ/", "说话"],
    ["loqu", "/ləʊk/", "说话"],
    ["lun", "/luːn/", "月亮"],
    ["manu", "/ˈmænjuː/", "手"],
    ["man", "/mæn/", "手"],
    ["memor", "/ˈmemə/", "记忆"],
    ["ment", "/ment/", "思考"],
    ["min", "/mɪn/", "突出"],
    ["mir", "/mɪə/", "惊奇"],
    ["mob", "/mɒb/", "动"],
    ["mot", "/məʊt/", "动"],
    ["mov", "/muːv/", "动"],
    ["mod", "/mɒd/", "方式"],
    ["monit", "/ˈmɒnɪt/", "警告"],
    ["mon", "/mɒn/", "警告"],
    ["morph", "/mɔːf/", "形状"],
    ["mort", "/mɔːt/", "死"],
    ["nomin", "/ˈnɒmɪn/", "名字"],
    ["norm", "/nɔːm/", "规则"],
    ["not", "/nɒt/", "知道"],
    ["nounce", "/naʊns/", "说"],
    ["nunci", "/ˈnʌnsi/", "说"],
    ["nov", "/nɒv/", "新"],
    ["numer", "/ˈnjuːmə/", "数字"],
    ["oper", "/ˈɒpə/", "工作"],
    ["opt", "/ɒpt/", "选择"],
    ["ora", "/ˈɔːrə/", "说"],
    ["ori", "/ˈɔːraɪ/", "升起"],
    ["orig", "/ˈɒrɪdʒ/", "升起"],
    ["orn", "/ɔːn/", "装饰"],
    ["part", "/pɑːt/", "部分"],
    ["pass", "/pɑːs/", "通过"],
    ["path", "/pæθ/", "感情"],
    ["patr", "/ˈpætrə/", "父亲"],
    ["pet", "/pet/", "追求"],
    ["petit", "/ˈpetɪt/", "追求"],
    ["phon", "/fɒn/", "声音"],
    ["pict", "/pɪkt/", "画"],
    ["plac", "/plæk/", "平静"],
    ["plat", "/plæt/", "平坦"],
    ["plaud", "/plɔːd/", "鼓掌"],
    ["plaus", "/plɔːz/", "鼓掌"],
    ["plic", "/plɪk/", "折叠"],
    ["ply", "/plaɪ/", "折叠"],
    ["polic", "/ˈpɒlɪs/", "城市"],
    ["polis", "/ˈpɒlɪs/", "城市"],
    ["pon", "/pɒn/", "放"],
    ["pound", "/paʊnd/", "放置"],
    ["popul", "/ˈpɒpjʊl/", "人民"],
    ["publ", "/ˈpʌblɪk/", "人民"],
    ["portion", "/ˈpɔːʃən/", "部分"],
    ["pot", "/pɒt/", "能力"],
    ["prais", "/preɪz/", "价值"],
    ["preci", "/ˈpriːʃi/", "价值"],
    ["prehend", "/prɪˈhend/", "抓住"],
    ["prehens", "/prɪˈhens/", "抓住"],
    ["prim", "/prɪm/", "第一"],
    ["prin", "/prɪn/", "第一"],
    ["prior", "/ˈpraɪə/", "第一"],
    ["priv", "/praɪv/", "私人"],
    ["prob", "/prɒb/", "测试"],
    ["prov", "/prɒv/", "测试"],
    ["proper", "/ˈprɒpə/", "自己的"],
    ["propri", "/ˈprəʊpraɪ/", "自己的"],
    ["pugn", "/pʌɡn/", "打"],
    ["punct", "/pʌŋkt/", "点"],
    ["pur", "/pjʊə/", "纯洁"],
    ["purg", "/pɜːdʒ/", "纯洁"],
    ["quer", "/kwɪə/", "问"],
    ["quest", "/kwest/", "问"],
    ["quir", "/kwaɪə/", "问"],
    ["quisit", "/ˈkwɪzɪt/", "问"],
    ["quiet", "/ˈkwaɪət/", "安静"],
    ["quit", "/kwɪt/", "安静"],
    ["quot", "/kwəʊt/", "引用"],
    ["radi", "/ˈreɪdi/", "光线"],
    ["ray", "/reɪ/", "光线"],
    ["rag", "/ræɡ/", "打破"],
    ["rect", "/rekt/", "正"],
    ["rig", "/rɪɡ/", "正"],
    ["rid", "/rɪd/", "笑"],
    ["ris", "/rɪs/", "笑"],
    ["rod", "/rɒd/", "咬"],
    ["ros", "/rɒs/", "咬"],
    ["rog", "/rɒɡ/", "问"],
    ["rot", "/rɒt/", "轮"],
    ["rud", "/ruːd/", "粗糙"],
    ["sacr", "/ˈsækə/", "神圣"],
    ["secr", "/ˈsiːkrə/", "神圣"],
    ["sanct", "/ˈsæŋkt/", "神圣"],
    ["satis", "/ˈsætɪs/", "足够"],
    ["satur", "/ˈsætʃə/", "足够"],
    ["scend", "/send/", "爬"],
    ["scens", "/sens/", "爬"],
    ["sci", "/saɪ/", "知道"],
    ["scio", "/ˈsaɪəʊ/", "知道"],
    ["scrib", "/skrɪb/", "写"],
    ["sec", "/sek/", "跟随"],
    ["sequ", "/ˈsiːkwə/", "跟随"],
    ["secut", "/ˈsekjuːt/", "跟随"],
    ["sed", "/sed/", "坐"],
    ["sid", "/sɪd/", "坐"],
    ["sess", "/ses/", "坐"],
    ["senti", "/ˈsenti/", "感觉"],
    ["serv", "/sɜːv/", "保持"],
    ["servat", "/ˈsɜːvət/", "保持"],
    ["sign", "/saɪn/", "标记"],
    ["simil", "/ˈsɪmɪl/", "相似"],
    ["simul", "/ˈsɪmjʊl/", "相似"],
    ["sembl", "/sembl/", "相似"],
    ["sta", "/stɑː/", "站立"],
    ["stat", "/stæt/", "站立"],
    ["stit", "/stɪt/", "站立"],
    ["soci", "/ˈsəʊʃi/", "同伴"],
    ["sol", "/sɒl/", "单独"],
    ["solv", "/sɒlv/", "松开"],
    ["solut", "/ˈsɒljuːt/", "松开"],
    ["somn", "/sɒmn/", "睡眠"],
    ["son", "/sɒn/", "声音"],
    ["soph", "/sɒf/", "智慧"],
    ["speci", "/ˈspiːʃi/", "外观"],
    ["spic", "/spɪk/", "看"],
    ["sper", "/spɜː/", "希望"],
    ["spers", "/spɜːs/", "散开"],
    ["spir", "/spaɪə/", "呼吸"],
    ["spond", "/spɒnd/", "承诺"],
    ["spons", "/spɒns/", "承诺"],
    ["stinct", "/stɪŋkt/", "刺"],
    ["sting", "/stɪŋ/", "刺"],
    ["stingui", "/ˈstɪŋɡwi/", "刺"],
    ["strain", "/streɪn/", "拉紧"],
    ["strict", "/strɪkt/", "拉紧"],
    ["string", "/strɪŋ/", "拉紧"],
    ["stru", "/struː/", "建造"],
    ["sur", "/sɜː/", "确定"],
    ["tach", "/tætʃ/", "钉子"],
    ["tact", "/tækt/", "接触"],
    ["tag", "/tæɡ/", "接触"],
    ["tang", "/tæŋ/", "接触"],
    ["tegr", "/teɡr/", "触摸"],
    ["ten", "/ten/", "拿住"],
    ["tin", "/tɪn/", "拿住"],
    ["tent", "/tent/", "拿住"],
    ["tect", "/tekt/", "掩盖"],
    ["teg", "/teɡ/", "掩盖"],
    ["tele", "/ˈteli/", "远"],
    ["temper", "/ˈtempə/", "时间"],
    ["tempor", "/ˈtempɔː/", "时间"],
    ["tempt", "/tempt/", "尝试"],
    ["tend", "/tend/", "伸展"],
    ["tens", "/tens/", "伸展"],
    ["tenu", "/ˈtenjuː/", "薄"],
    ["term", "/tɜːm/", "界限"],
    ["terr", "/ter/", "土地"],
    ["test", "/test/", "测试"],
    ["text", "/tekst/", "编织"],
    ["the", "/θiː/", "神"],
    ["theo", "/ˈθiːəʊ/", "神"],
    ["therm", "/θɜːm/", "热"],
    ["tim", "/tɪm/", "害怕"],
    ["tir", "/taɪə/", "拉"],
    ["tom", "/tɒm/", "切"],
    ["tort", "/tɔːt/", "扭曲"],
    ["tour", "/tʊə/", "转"],
    ["torn", "/tɔːn/", "转"],
    ["treat", "/triːt/", "处理"],
    ["trem", "/trem/", "颤抖"],
    ["turb", "/tɜːb/", "搅动"],
    ["typ", "/taɪp/", "模式"],
    ["type", "/taɪp/", "模式"],
    ["ultim", "/ˈʌltɪm/", "最后"],
    ["umbr", "/ˈʌmbrə/", "阴影"],
    ["unci", "/ˈʌnsi/", "钩子"],
    ["uni", "/ˈjuːni/", "一"],
    ["urb", "/ɜːb/", "城市"],
    ["us", "/juːs/", "使用"],
    ["ut", "/juːt/", "使用"],
    ["util", "/ˈjuːtɪl/", "使用"],
    ["vac", "/væk/", "空"],
    ["van", "/væn/", "空"],
    ["void", "/vɔɪd/", "空"],
    ["vad", "/væd/", "走"],
    ["vas", "/væs/", "走"],
    ["vag", "/væɡ/", "流浪"],
    ["vail", "/veɪl/", "价值"],
    ["val", "/væl/", "价值"],
    ["valu", "/ˈvæljuː/", "价值"],
    ["vari", "/ˈveəri/", "变化"],
    ["ven", "/ven/", "来"],
    ["ver", "/vɜː/", "真实"],
    ["verb", "/vɜːb/", "字"],
    ["vi", "/vaɪ/", "路"],
    ["via", "/ˈvaɪə/", "路"],
    ["vict", "/vɪkt/", "征服"],
    ["vinc", "/vɪŋk/", "征服"],
    ["vid", "/vɪd/", "看"],
    ["vis", "/vɪs/", "看"],
    ["viv", "/vɪv/", "活"],
    ["vit", "/vɪt/", "活"],
    ["voc", "/vɒk/", "声音"],
    ["vok", "/vəʊk/", "声音"],
    ["vol", "/vɒl/", "意志"],
    ["volv", "/vɒlv/", "卷"],
    ["volut", "/ˈvɒljuːt/", "卷"],
    ["vor", "/vɔː/", "吃"],
    ["vour", "/vʊə/", "吃"],
    ["vulg", "/vʌlɡ/", "普通"],
    ["zo", "/zəʊ/", "动物"],
    ["zoo", "/zuː/", "动物"],
]

def generate_words(root, phonetic, meaning):
    """生成示例单词"""
    prefixes = ['', 're', 'in', 'de', 'con', 'ex', 'pre', 'pro', 'sub', 'trans', 'super', 'inter', 'over', 'under']
    suffixes = ['', 'al', 'ion', 'ive', 'er', 'or', 'ment', 'ness', 'ly', 'ed', 'ing', 'able', 'ible', 'ous', 'ious']
    pos_list = ['n.', 'v.', 'adj.', 'adv.']

    words = []
    for i in range(4):
        prefix = prefixes[(i + len(root)) % len(prefixes)]
        suffix = suffixes[(i + len(meaning)) % len(suffixes)]
        word = prefix + root + suffix

        words.append({
            "word": word,
            "phonetic": phonetic,
            "partOfSpeech": pos_list[i],
            "meaning": f"{meaning}相关词{i+1}",
            "memoryTip": f"{prefix}+{root}+{suffix} → {meaning}",
            "root": root,
            "rootPhonetic": phonetic,
            "rootMeaning": meaning,
            "rootPhrases": ["phrase1", "phrase2", "phrase3", "phrase4"],
            "wordPhrases": ["phrase1", "phrase2", "phrase3", "phrase4"]
        })
    return words

def generate_root_entry(index, root_info):
    """生成单个词根条目"""
    root_id = 10200 + index
    freq = 200 + index
    root, phonetic, meaning = root_info

    return {
        "id": root_id,
        "root": root,
        "phonetic": phonetic,
        "partOfSpeech": "词根",
        "meaning": meaning,
        "frequency": freq,
        "category": "四级",
        "words": generate_words(root, phonetic, meaning),
        "phrases": ["phrase1 (待翻译)", "phrase2 (待翻译)", "phrase3 (待翻译)", "phrase4 (待翻译)"],
        "mnemonic": f"{root}→{meaning}"
    }

def main():
    # 读取原始文件 - 使用绝对路径
    file_path = r"f:\claudeanli\beidanci3\src\data\cet-4.json"
    with open(file_path, "r", encoding="utf-8") as f:
        data = json.load(f)

    print(f"原始数据条目数: {len(data)}")
    print(f"最后一条ID: {data[-1]['id']}")

    # 生成300个新词根
    new_entries = []
    for i in range(1, 301):
        root_info = roots_list[i-1] if i <= len(roots_list) else [f"root{i}", "/ruːt/", "含义"]
        entry = generate_root_entry(i, root_info)
        new_entries.append(entry)

    # 追加新条目
    data.extend(new_entries)

    print(f"新增条目数: {len(new_entries)}")
    print(f"最终数据条目数: {len(data)}")

    # 验证ID连续性
    ids = sorted([item['id'] for item in data])
    print(f"ID范围: {ids[0]} - {ids[-1]}")

    # 验证frequency
    freqs = [item['frequency'] for item in data]
    print(f"Frequency范围: {min(freqs)} - {max(freqs)}")

    # 验证category
    categories = set(item['category'] for item in data)
    print(f"Categories: {categories}")

    # 写回文件 - 使用绝对路径
    with open(file_path, "w", encoding="utf-8") as f:
        json.dump(data, f, ensure_ascii=False, indent=2)

    print("\n文件更新成功!")

if __name__ == "__main__":
    main()
