import json

# 定义200个词根数据 (ID 801-1000)
entries = []

# 基础词根数据列表
roots_data = [
    ("aer", "/'eər/", "词根", "空气；天空；航空", "Aer=空气，与天空航空相关", [
        ("aerial", "/'eəriəl/", "adj.", "空中的；航空的", "aer + ial (空气+的)", ["aerial view 鸟瞰图", "aerial photography 航空摄影"]),
        ("aeroplane", "/'eərəpleɪn/", "n.", "飞机", "aero + plane (空中+飞机)", ["by aeroplane 乘飞机", "aeroplane flight 飞机飞行"])
    ]),
    ("alg", "/ældʒ/", "词根", "疼痛", "Alg=疼痛，思乡之痛", [
        ("nostalgia", "/nɒ'stældʒə/", "n.", "怀旧；乡愁", "nost(回家) + alg + ia", ["feel nostalgia 感到怀旧", "nostalgia for home 思乡"])
    ]),
    ("ali", "/'eɪlaɪ/", "词根", "其他的；不同的", "Ali=其他，外星人就是异类", [
        ("alien", "/'eɪliən/", "n./adj.", "外星人；外国的", "ali + en", ["alien culture 异域文化", "illegal alien 非法移民"]),
        ("alienate", "/'eɪliəneɪt/", "v.", "疏远；离间", "alien + ate", ["alienate from 与...疏远"])
    ]),
    ("alt", "/ɔːlt/", "词根", "高", "Alt=高，海拔就是高度", [
        ("altitude", "/'æltɪtjuːd/", "n.", "海拔；高度", "alt + itude (高+度)", ["high altitude 高海拔", "altitude sickness 高原反应"]),
        ("altar", "/'ɔːltə/", "n.", "祭坛", "alt + ar (高+地方)", ["high altar 主祭坛"])
    ]),
    ("am", "/æm/", "词根", "爱", "Am=爱，业余爱好者出于热爱", [
        ("amateur", "/'æmətə/", "n./adj.", "业余爱好者；业余的", "am + ate + ur (爱+的+人)", ["amateur sports 业余运动", "amateur photographer 业余摄影师"]),
        ("amiable", "/'eɪmiəbl/", "adj.", "和蔼可亲的", "ami + able (爱+能...的)", ["amiable personality 和蔼的性格"])
    ]),
    ("amb", "/æmb/", "词根", "走；行走", "Amb=走，四处走动拉选票", [
        ("ambition", "/æm'bɪʃn/", "n.", "野心；抱负", "amb + ition (四处走+名词)", ["ambition and drive 雄心壮志", "burning ambition 强烈的抱负"]),
        ("ambiguous", "/æm'bɪɡjuəs/", "adj.", "模棱两可的", "amb + iguous (四处走+驱动)", ["ambiguous answer 模棱两可的回答"])
    ]),
    ("ampl", "/'æmpl/", "词根", "大；宽", "Ampl=大，充足宽敞之意", [
        ("ample", "/'æmpl/", "adj.", "充足的；宽敞的", "ampl + e", ["ample evidence 充分证据", "ample space 宽敞空间"]),
        ("amplify", "/'æmplɪfaɪ/", "v.", "放大；增强", "ampl + ify (大+使...)", ["amplify sound 放大声音", "amplify signal 增强信号"])
    ]),
    ("anim", "/'ænɪm/", "词根", "生命；精神", "Anim=生命，动物就是有生命的", [
        ("animal", "/'ænɪml/", "n.", "动物", "anim + al (生命+的)", ["wild animal 野生动物", "domestic animal 家畜"]),
        ("animate", "/'ænɪmeɪt/", "v./adj.", "使有生气；有生命的", "anim + ate", ["animate discussion 活跃的讨论"])
    ]),
    ("ann", "/æn/", "词根", "年", "Ann=年，annual就是每年的", [
        ("annual", "/'ænjuəl/", "adj.", "每年的；年度的", "ann + ual (年+的)", ["annual report 年度报告", "annual meeting 年会"]),
        ("anniversary", "/ˌænɪ'vɜːsəri/", "n.", "周年纪念", "ann + i + vers + ary (年+转+名词)", ["wedding anniversary 结婚纪念日"])
    ]),
    ("anthrop", "/'ænθrəp/", "词根", "人；人类", "Anthrop=人，人类学研究人", [
        ("anthropology", "/ˌænθrə'pɒlədʒi/", "n.", "人类学", "anthrop + ology (人+学)", ["cultural anthropology 文化人类学"]),
        ("philanthropy", "/fɪ'lænθrəpi/", "n.", "慈善；博爱", "phil + anthrop + y (爱+人+名词)", ["philanthropy work 慈善工作"])
    ]),
]

# 继续添加更多词根...
more_roots = [
    ("apt", "/æpt/", "词根", "适合；适应", "Apt=适合，adapt就是适应", [
        ("apt", "/æpt/", "adj.", "恰当的；有...倾向的", "apt", ["apt description 恰当的描述", "apt to do 倾向于做"]),
        ("adapt", "/ə'dæpt/", "v.", "适应；改编", "ad + apt (加强+适合)", ["adapt to 适应", "adapt novel 改编小说"])
    ]),
    ("aqu", "/'ækwə/", "词根", "水", "Aqu=水，aquarium就是水族馆", [
        ("aquarium", "/ə'kweəriəm/", "n.", "水族馆", "aqu + arium (水+场所)", ["visit aquarium 参观水族馆", "public aquarium 公共水族馆"]),
        ("aquatic", "/ə'kwætɪk/", "adj.", "水生的；水上的", "aqu + atic", ["aquatic life 水生生物", "aquatic sports 水上运动"])
    ]),
    ("arch", "/ɑːtʃ/", "词根", "首要的；统治者", "Arch=首要，architect建造首要建筑", [
        ("architect", "/'ɑːkɪtekt/", "n.", "建筑师", "arch + i + tect (主要+做)", ["chief architect 首席建筑师"]),
        ("monarch", "/'mɒnək/", "n.", "君主", "mon + arch (单一+统治者)", ["absolute monarch 专制君主"])
    ]),
    ("aster", "/'æstə/", "词根", "星", "Aster=星，星位不正则灾难", [
        ("astronomy", "/ə'strɒnəmi/", "n.", "天文学", "astro + nomy (星+学)", ["study astronomy 学习天文学"]),
        ("disaster", "/dɪ'zɑːstə/", "n.", "灾难", "dis + aster (坏+星)", ["natural disaster 自然灾害", "terrible disaster 可怕灾难"])
    ]),
    ("aud", "/ɔːd/", "词根", "听", "Aud=听，audience是听众", [
        ("audience", "/'ɔːdiəns/", "n.", "观众；听众", "aud + ience (听+名词)", ["target audience 目标受众", "large audience 大量观众"]),
        ("audio", "/'ɔːdiəʊ/", "adj./n.", "音频的；声音", "aud + io", ["audio recording 录音", "audio file 音频文件"])
    ]),
    ("aug", "/ɔːɡ/", "词根", "增加", "Aug=增加，八月因奥古斯都而增名", [
        ("augment", "/ɔːɡ'ment/", "v.", "增加；扩大", "aug + ment", ["augment resources 增加资源"]),
        ("August", "/'ɔːɡəst/", "n.", "八月", "August (凯撒奥古斯都)", ["in August 在八月"])
    ]),
    ("auto", "/'ɔːtəʊ/", "词根", "自己；自动", "Auto=自己，automatic自动的", [
        ("automatic", "/ˌɔːtə'mætɪk/", "adj.", "自动的", "auto + mat + ic (自己+动+的)", ["automatic door 自动门", "automatic system 自动系统"]),
        ("automobile", "/'ɔːtəməbiːl/", "n.", "汽车", "auto + mobile (自己+移动)", ["drive automobile 开车", "luxury automobile 豪华汽车"])
    ]),
    ("bell", "/bel/", "词根", "战争", "Bell=战争，rebel是反叛", [
        ("bellicose", "/'belɪkəʊs/", "adj.", "好战的", "bell + icose (战争+...的)", ["bellicose nation 好战国家"]),
        ("rebel", "/'rebl/", "n./v.", "反叛者；反叛", "re + bel (反+战争)", ["rebel against 反叛", "armed rebel 武装叛军"])
    ]),
    ("bene", "/'beni/", "词根", "好；善", "Bene=好，benefit就是好处", [
        ("benefit", "/'benɪfɪt/", "n./v.", "益处；受益", "bene + fit (好+做)", ["health benefits 健康益处", "benefit from 从...受益"]),
        ("benevolent", "/bə'nevələnt/", "adj.", "仁慈的；慈善的", "bene + vol + ent (好+意志+的)", ["benevolent smile 慈祥的微笑"])
    ]),
    ("bibl", "/'bɪbl/", "词根", "书", "Bibl=书，bible就是圣经", [
        ("bible", "/'baɪbl/", "n.", "圣经", "bibl + e", ["holy bible 圣经", "read bible 读圣经"]),
        ("bibliography", "/ˌbɪbli'ɒɡrəfi/", "n.", "参考书目", "biblio + graphy (书+写)", ["select bibliography 精选书目"])
    ]),
]

# 合并所有词根
all_roots = roots_data + more_roots

# 为每个词根创建条目
for idx, (root, phonetic, pos, meaning, mnemonic, words_data) in enumerate(all_roots, start=801):
    if idx > 1000:
        break

    words = []
    all_phrases = []

    for word_info in words_data:
        word, word_phonetic, word_pos, word_meaning, memory_tip, phrases = word_info
        words.append({
            "word": word,
            "phonetic": word_phonetic,
            "partOfSpeech": word_pos,
            "meaning": word_meaning,
            "memoryTip": memory_tip,
            "root": root,
            "rootPhonetic": phonetic,
            "rootMeaning": meaning,
            "rootPhrases": phrases,
            "wordPhrases": phrases
        })
        all_phrases.extend(phrases)

    # 去重短语
    unique_phrases = list(dict.fromkeys(all_phrases))

    entry = {
        "id": idx,
        "root": root,
        "phonetic": phonetic,
        "partOfSpeech": pos,
        "frequency": idx,
        "category": "高中",
        "words": words,
        "phrases": unique_phrases[:4] if len(unique_phrases) > 4 else unique_phrases,
        "mnemonic": mnemonic,
        "meaning": meaning
    }
    entries.append(entry)

# 保存为JSON
with open('entries_801_820.json', 'w', encoding='utf-8') as f:
    json.dump(entries, f, ensure_ascii=False, indent=2)

print(f"Generated {len(entries)} entries")
