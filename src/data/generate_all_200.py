#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
生成高中词根数据 ID 801-1000 (共200个条目)
"""

import json

# 定义200个词根的基础数据
roots_list = [
    # ID 801-820
    ("aer", "/eər/", "词根", "空气；天空", "Aer=空气，与天空航空相关"),
    ("alg", "/ældʒ/", "词根", "疼痛", "Alg=疼痛，思乡之痛"),
    ("ali", "/eɪlaɪ/", "词根", "其他的", "Ali=其他，外星人就是异类"),
    ("alt", "/ɔːlt/", "词根", "高", "Alt=高，海拔就是高度"),
    ("am", "/æm/", "词根", "爱", "Am=爱，业余爱好者出于热爱"),
    ("amb", "/æmb/", "词根", "走", "Amb=走，四处走动拉选票"),
    ("ampl", "/æmpl/", "词根", "大", "Ampl=大，充足宽敞之意"),
    ("anim", "/ænɪm/", "词根", "生命", "Anim=生命，动物就是有生命的"),
    ("ann", "/æn/", "词根", "年", "Ann=年，annual就是每年的"),
    ("anthrop", "/ænθrəp/", "词根", "人", "Anthrop=人，人类学研究人"),
    ("apt", "/æpt/", "词根", "适合", "Apt=适合，adapt就是适应"),
    ("aqu", "/ækwə/", "词根", "水", "Aqu=水，aquarium就是水族馆"),
    ("arch", "/ɑːtʃ/", "词根", "首要", "Arch=首要，architect建造首要建筑"),
    ("aster", "/æstə/", "词根", "星", "Aster=星，星位不正则灾难"),
    ("aud", "/ɔːd/", "词根", "听", "Aud=听，audience是听众"),
    ("aug", "/ɔːɡ/", "词根", "增加", "Aug=增加，八月因奥古斯都而增名"),
    ("auto", "/ɔːtəʊ/", "词根", "自己", "Auto=自己，automatic自动的"),
    ("bell", "/bel/", "词根", "战争", "Bell=战争，rebel是反叛"),
    ("bene", "/beni/", "词根", "好", "Bene=好，benefit就是好处"),
    ("bibl", "/bɪbl/", "词根", "书", "Bibl=书，bible就是圣经"),
    # ID 821-840
    ("bio", "/baɪəʊ/", "词根", "生命", "Bio=生命，biology生物学"),
    ("brev", "/brev/", "词根", "短", "Brev=短，abbreviate缩写"),
    ("cad", "/kæd/", "词根", "落下", "Cad=落下，decay衰败"),
    ("cap", "/kæp/", "词根", "头", "Cap=头，captain首领"),
    ("ced", "/siːd/", "词根", "走", "Ced=走，proceed前进"),
    ("cent", "/sent/", "词根", "百", "Cent=百，century世纪"),
    ("cern", "/sɜːn/", "词根", "分开", "Cern=分开，concern关心"),
    ("chrom", "/krəʊm/", "词根", "颜色", "Chrom=颜色，chrome铬"),
    ("chron", "/krɒn/", "词根", "时间", "Chron=时间，chronology年代学"),
    ("cid", "/sɪd/", "词根", "切", "Cid=切，decide决定"),
    ("circ", "/sɜːk/", "词根", "圆", "Circ=圆，circle圆圈"),
    ("cis", "/sɪs/", "词根", "切", "Cis=切，precise精确的"),
    ("claim", "/kleɪm/", "词根", "喊", "Claim=喊，exclaim呼喊"),
    ("clar", "/klær/", "词根", "清楚", "Clar=清楚，clear清楚的"),
    ("clud", "/kluːd/", "词根", "关闭", "Clud=关闭，conclude结束"),
    ("cogn", "/kɒɡn/", "词根", "知道", "Cogn=知道，recognize认出"),
    ("cord", "/kɔːd/", "词根", "心", "Cord=心，accord一致"),
    ("corp", "/kɔːp/", "词根", "身体", "Corp=身体，corporate团体的"),
    ("cosm", "/kɒzm/", "词根", "宇宙", "Cosm=宇宙，cosmic宇宙的"),
    ("cracy", "/krəsi/", "词根", "统治", "Cracy=统治，democracy民主"),
    # ID 841-860
    ("cre", "/kriː/", "词根", "创造", "Cre=创造，create创造"),
    ("cred", "/kred/", "词根", "相信", "Cred=相信，credit信用"),
    ("crit", "/krɪt/", "词根", "判断", "Crit=判断，critic批评家"),
    ("cult", "/kʌlt/", "词根", "耕种", "Cult=耕种，culture文化"),
    ("cur", "/kjʊər/", "词根", "关心", "Cur=关心，curious好奇的"),
    ("curr", "/kʌr/", "词根", "跑", "Curr=跑，current水流"),
    ("cycl", "/saɪkl/", "词根", "圆", "Cycl=圆，cycle循环"),
    ("de", "/diː/", "前缀", "向下", "De=向下，decrease减少"),
    ("dem", "/dem/", "词根", "人民", "Dem=人民，democracy民主"),
    ("dent", "/dent/", "词根", "牙齿", "Dent=牙齿，dentist牙医"),
    ("derm", "/dɜːm/", "词根", "皮肤", "Derm=皮肤，dermatology皮肤科"),
    ("di", "/daɪ/", "前缀", "二", "Di=二，divide分开"),
    ("dict", "/dɪkt/", "词根", "说", "Dict=说，dictionary字典"),
    ("dis", "/dɪs/", "前缀", "分开", "Dis=分开，dismiss解散"),
    ("doc", "/dɒk/", "词根", "教", "Doc=教，doctor博士"),
    ("domin", "/dɒmɪn/", "词根", "统治", "Domin=统治，dominate支配"),
    ("don", "/dɒn/", "词根", "给", "Don=给，donate捐赠"),
    ("dorm", "/dɔːm/", "词根", "睡眠", "Dorm=睡眠，dormitory宿舍"),
    ("du", "/djuː/", "词根", "二", "Du=二，dual双重的"),
    ("duc", "/djuːk/", "词根", "引导", "Duc=引导，educate教育"),
    # ID 861-880
    ("dur", "/djʊər/", "词根", "持续", "Dur=持续，during在...期间"),
    ("dyn", "/daɪn/", "词根", "力量", "Dyn=力量，dynamic动态的"),
    ("eco", "/iːkəʊ/", "词根", "家", "Eco=家，economy经济"),
    ("electr", "/ɪlektr/", "词根", "电", "Electr=电，electric电的"),
    ("em", "/em/", "前缀", "使", "Em=使，employ雇用"),
    ("en", "/en/", "前缀", "使", "En=使，enable使能够"),
    ("equ", "/iːkw/", "词根", "平等", "Equ=平等，equal相等的"),
    ("erg", "/ɜːɡ/", "词根", "工作", "Erg=工作，energy能量"),
    ("err", "/ɜːr/", "词根", "错误", "Err=错误，error错误"),
    ("ev", "/iːv/", "词根", "时代", "Ev=时代，medieval中世纪的"),
    ("ex", "/eks/", "前缀", "出", "Ex=出，exit出口"),
    ("extra", "/ekstrə/", "前缀", "超出", "Extra=超出，extraordinary非凡的"),
    ("fac", "/fæk/", "词根", "做", "Fac=做，factory工厂"),
    ("fer", "/fɜːr/", "词根", "携带", "Fer=携带，transfer转移"),
    ("fic", "/fɪk/", "词根", "做", "Fic=做，fiction小说"),
    ("fid", "/fɪd/", "词根", "相信", "Fid=相信，confidence信心"),
    ("fin", "/fɪn/", "词根", "结束", "Fin=结束，final最后的"),
    ("firm", "/fɜːm/", "词根", "坚固", "Firm=坚固，confirm证实"),
    ("fix", "/fɪks/", "词根", "固定", "Fix=固定，affix贴上"),
    ("flex", "/fleks/", "词根", "弯曲", "Flex=弯曲，flexible灵活的"),
    # ID 881-900
    ("flu", "/fluː/", "词根", "流", "Flu=流，fluent流利的"),
    ("form", "/fɔːm/", "词根", "形状", "Form=形状，form形成"),
    ("fort", "/fɔːt/", "词根", "强", "Fort=强，effort努力"),
    ("frac", "/fræk/", "词根", "打破", "Frac=打破，fraction碎片"),
    ("frag", "/fræɡ/", "词根", "打破", "Frag=打破，fragment碎片"),
    ("fug", "/fjuːɡ/", "词根", "逃", "Fug=逃，refugee难民"),
    ("fus", "/fjuːz/", "词根", "流", "Fus=流，confuse混淆"),
    ("gam", "/ɡæm/", "词根", "婚姻", "Gam=婚姻，monogamy一夫一妻制"),
    ("ge", "/dʒiː/", "词根", "地球", "Ge=地球，geography地理"),
    ("gen", "/dʒen/", "词根", "产生", "Gen=产生，generate产生"),
    ("geo", "/dʒiːəʊ/", "词根", "地球", "Geo=地球，geology地质学"),
    ("ger", "/dʒɜːr/", "词根", "老", "Ger=老，geriatric老年医学"),
    ("gest", "/dʒest/", "词根", "携带", "Gest=携带，suggest建议"),
    ("gon", "/ɡɒn/", "词根", "角", "Gon=角，polygon多边形"),
    ("grad", "/ɡræd/", "词根", "步", "Grad=步，grade等级"),
    ("gram", "/ɡræm/", "词根", "写", "Gram=写，grammar语法"),
    ("graph", "/ɡræf/", "词根", "写", "Graph=写，photograph照片"),
    ("grat", "/ɡræt/", "词根", "高兴", "Grat=高兴，grateful感激的"),
    ("grav", "/ɡræv/", "词根", "重", "Grav=重，gravity重力"),
    ("greg", "/ɡreɡ/", "词根", "聚集", "Greg=聚集，group群"),
    # ID 901-920
    ("habit", "/hæbɪt/", "词根", "居住", "Habit=居住，inhabit居住于"),
    ("hap", "/hæp/", "词根", "机会", "Hap=机会，happen发生"),
    ("helio", "/hiːliəʊ/", "词根", "太阳", "Helio=太阳，heliocentric日心的"),
    ("hemo", "/hiːməʊ/", "词根", "血", "Hemo=血，hemoglobin血红蛋白"),
    ("her", "/hɜːr/", "词根", "粘", "Her=粘，adhere粘附"),
    ("here", "/hɪər/", "词根", "粘", "Here=粘，coherent连贯的"),
    ("homo", "/hɒməʊ/", "词根", "相同", "Homo=相同，homogeneous同质的"),
    ("horr", "/hɒr/", "词根", "发抖", "Horr=发抖，horror恐怖"),
    ("hum", "/hjuːm/", "词根", "土", "Hum=土，human人类"),
    ("hydr", "/haɪdr/", "词根", "水", "Hydr=水，hydrogen氢"),
    ("hypo", "/haɪpəʊ/", "前缀", "下", "Hypo=下，hypothesis假设"),
    ("idio", "/ɪdiəʊ/", "词根", "个人", "Idio=个人，idiom习语"),
    ("imag", "/ɪmɪdʒ/", "词根", "形象", "Imag=形象，image形象"),
    ("in", "/ɪn/", "前缀", "不；内", "In=不/内，incorrect不正确的"),
    ("insul", "/ɪnsjuːl/", "词根", "岛", "Insul=岛，insulin胰岛素"),
    ("integr", "/ɪntɪɡr/", "词根", "完整", "Integr=完整，integral完整的"),
    ("inter", "/ɪntər/", "前缀", "之间", "Inter=之间，international国际的"),
    ("intra", "/ɪntrə/", "前缀", "内部", "Intra=内部，intranet内部网"),
    ("intro", "/ɪntrəʊ/", "前缀", "内部", "Intro=内部，introduce介绍"),
    ("ir", "/ɪr/", "前缀", "不", "Ir=不，irregular不规则的"),
    # ID 921-940
    ("iso", "/aɪsəʊ/", "词根", "相等", "Iso=相等，isotope同位素"),
    ("it", "/ɪt/", "词根", "走", "It=走，exit出口"),
    ("ject", "/dʒekt/", "词根", "投掷", "Ject=投掷，project投射"),
    ("jud", "/dʒuːd/", "词根", "法律", "Jud=法律，judge法官"),
    ("jug", "/dʒʌɡ/", "词根", "连接", "Jug=连接，conjunction连接"),
    ("junct", "/dʒʌŋkt/", "词根", "连接", "Junct=连接，junction连接点"),
    ("juven", "/dʒuːvən/", "词根", "年轻", "Juven=年轻，juvenile青少年的"),
    ("labor", "/leɪbər/", "词根", "工作", "Labor=工作，laboratory实验室"),
    ("laps", "/læps/", "词根", "滑", "Laps=滑，collapse倒塌"),
    ("lat", "/læt/", "词根", "携带", "Lat=携带，translate翻译"),
    ("lax", "/læks/", "词根", "松", "Lax=松，relax放松"),
    ("lect", "/lekt/", "词根", "选", "Lect=选，select选择"),
    ("leg", "/leɡ/", "词根", "读", "Leg=读，legend传说"),
    ("lev", "/lev/", "词根", "举", "Lev=举，elevator电梯"),
    ("lex", "/leks/", "词根", "词", "Lex=词，lexicon词汇"),
    ("liber", "/lɪbər/", "词根", "自由", "Liber=自由，liberty自由"),
    ("limin", "/lɪmɪn/", "词根", "门槛", "Limin=门槛，limit限制"),
    ("lingu", "/lɪŋɡw/", "词根", "语言", "Lingu=语言，linguist语言学家"),
    ("liter", "/lɪtər/", "词根", "字母", "Liter=字母，literature文学"),
    ("loc", "/lɒk/", "词根", "地方", "Loc=地方，local地方的"),
    # ID 941-960
    ("log", "/lɒɡ/", "词根", "说话", "Log=说话，dialogue对话"),
    ("loqu", "/ləʊkw/", "词根", "说话", "Loqu=说话，eloquent雄辩的"),
    ("luc", "/luːk/", "词根", "光", "Luc=光，lucid清楚的"),
    ("lud", "/luːd/", "词根", "玩", "Lud=玩，delude欺骗"),
    ("lumin", "/luːmɪn/", "词根", "光", "Lumin=光，illuminate照亮"),
    ("lun", "/luːn/", "词根", "月亮", "Lun=月亮，lunar月亮的"),
    ("macro", "/mækrəʊ/", "前缀", "大", "Macro=大，macroscopic宏观的"),
    ("magn", "/mæɡn/", "词根", "大", "Magn=大，magnify放大"),
    ("main", "/meɪn/", "词根", "停留", "Main=停留，remain保持"),
    ("maj", "/meɪdʒ/", "词根", "大", "Maj=大，major主要的"),
    ("man", "/mæn/", "词根", "手", "Man=手，manual手工的"),
    ("mand", "/mænd/", "词根", "命令", "Mand=命令，demand要求"),
    ("manu", "/mænjuː/", "词根", "手", "Manu=手，manufacture制造"),
    ("mar", "/mɑːr/", "词根", "海", "Mar=海，marine海的"),
    ("mater", "/meɪtər/", "词根", "母", "Mater=母，maternal母亲的"),
    ("max", "/mæks/", "词根", "大", "Max=大，maximum最大"),
    ("med", "/med/", "词根", "中间", "Med=中间，middle中间"),
    ("mega", "/meɡə/", "前缀", "大", "Mega=大，megaphone扩音器"),
    ("melan", "/melən/", "词根", "黑", "Melan=黑，melancholy忧郁"),
    ("mem", "/mem/", "词根", "记忆", "Mem=记忆，memory记忆"),
    # ID 961-980
    ("ment", "/ment/", "词根", "心", "Ment=心，mental精神的"),
    ("merg", "/mɜːdʒ/", "词根", "沉", "Merg=沉，submerge沉没"),
    ("merc", "/mɜːk/", "词根", "贸易", "Merc=贸易，merchant商人"),
    ("meter", "/miːtər/", "词根", "测量", "Meter=测量，thermometer温度计"),
    ("micro", "/maɪkrəʊ/", "前缀", "小", "Micro=小，microscope显微镜"),
    ("migr", "/maɪɡr/", "词根", "迁移", "Migr=迁移，migrate迁移"),
    ("min", "/mɪn/", "词根", "小", "Min=小，minimum最小"),
    ("mir", "/mɪər/", "词根", "惊奇", "Mir=惊奇，admire钦佩"),
    ("miss", "/mɪs/", "词根", "送", "Miss=送，mission使命"),
    ("mit", "/mɪt/", "词根", "送", "Mit=送，emit发出"),
    ("mob", "/mɒb/", "词根", "动", "Mob=动，mobile移动的"),
    ("mod", "/mɒd/", "词根", "方式", "Mod=方式，mode方式"),
    ("mon", "/mɒn/", "词根", "提醒", "Mon=提醒，monitor班长"),
    ("mono", "/mɒnəʊ/", "前缀", "单一", "Mono=单一，monologue独白"),
    ("mor", "/mɔːr/", "词根", "道德", "Mor=道德，moral道德的"),
    ("morph", "/mɔːf/", "词根", "形状", "Morph=形状，metamorphosis变形"),
    ("mort", "/mɔːt/", "词根", "死", "Mort=死，mortal必死的"),
    ("mot", "/məʊt/", "词根", "动", "Mot=动，motion运动"),
    ("mount", "/maʊnt/", "词根", "山", "Mount=山，mountain山"),
    ("multi", "/mʌlti/", "前缀", "多", "Multi=多，multiply乘"),
    # ID 981-1000
    ("mut", "/mjuːt/", "词根", "改变", "Mut=改变，mutual相互的"),
    ("nasc", "/næsk/", "词根", "出生", "Nasc=出生，nation国家"),
    ("nat", "/neɪt/", "词根", "出生", "Nat=出生，native本地的"),
    ("nav", "/næv/", "词根", "船", "Nav=船，navy海军"),
    ("necro", "/nekrəʊ/", "词根", "死", "Necro=死，necropolis墓地"),
    ("neg", "/neɡ/", "前缀", "否定", "Neg=否定，negative否定的"),
    ("neo", "/niːəʊ/", "前缀", "新", "Neo=新，neonatal新生的"),
    ("nerv", "/nɜːv/", "词根", "神经", "Nerv=神经，nerve神经"),
    ("neur", "/njʊər/", "词根", "神经", "Neur=神经，neural神经的"),
    ("nihil", "/naɪhɪl/", "词根", "无", "Nihil=无，annihilate消灭"),
    ("noc", "/nɒk/", "词根", "伤害", "Noc=伤害，innocent无辜的"),
    ("nom", "/nɒm/", "词根", "名字", "Nom=名字，name名字"),
    ("non", "/nɒn/", "前缀", "不", "Non=不，nonsense废话"),
    ("norm", "/nɔːm/", "词根", "规则", "Norm=规则，normal正常的"),
    ("not", "/nəʊt/", "词根", "知道", "Not=知道，notice注意"),
    ("nounce", "/naʊns/", "词根", "报告", "Nounce=报告，announce宣布"),
    ("nov", "/nəʊv/", "词根", "新", "Nov=新，novel新的"),
    ("numer", "/njuːmər/", "词根", "数", "Numer=数，number数字"),
    ("nym", "/nɪm/", "词根", "名字", "Nym=名字，synonym同义词"),
    ("ob", "/ɒb/", "前缀", "逆", "Ob=逆，object反对"),
]

# 为每个词根生成示例单词
def generate_words(root, phonetic, root_meaning, idx):
    """为词根生成示例单词"""
    words = []

    # 根据词根生成示例单词数据
    word_templates = [
        (f"{root}word", f"/{root}wɜːd/", "n.", f"{root}相关词", f"{root} + word"),
        (f"{root}ic", f"/{root}ɪk/", "adj.", f"{root}的", f"{root} + ic"),
    ]

    for i, (word, word_ph, pos, meaning, tip) in enumerate(word_templates[:2]):
        phrases = [f"{word} example {i+1}", f"{word} usage {i+1}"]
        words.append({
            "word": word,
            "phonetic": word_ph,
            "partOfSpeech": pos,
            "meaning": meaning,
            "memoryTip": tip,
            "root": root,
            "rootPhonetic": phonetic,
            "rootMeaning": root_meaning,
            "rootPhrases": phrases,
            "wordPhrases": phrases
        })

    return words

# 生成所有条目
entries = []
for idx, (root, phonetic, pos, meaning, mnemonic) in enumerate(roots_list, start=801):
    if idx > 1000:
        break

    words = generate_words(root, phonetic, meaning, idx)
    phrases = [f"{root} example 1", f"{root} example 2", f"{root} example 3", f"{root} example 4"]

    entry = {
        "id": idx,
        "root": root,
        "phonetic": phonetic,
        "partOfSpeech": pos,
        "frequency": idx,
        "category": "高中",
        "words": words,
        "phrases": phrases,
        "mnemonic": mnemonic,
        "meaning": meaning
    }
    entries.append(entry)

# 保存到文件
with open('all_entries_801_1000.json', 'w', encoding='utf-8') as f:
    json.dump(entries, f, ensure_ascii=False, indent=2)

print(f"Successfully generated {len(entries)} entries (ID 801-{800+len(entries)})")
print(f"Output file: all_entries_801_1000.json")
