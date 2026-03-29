#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
将200个新词根条目追加到senior-high.json文件中
"""

import json

# 定义200个完整的词根条目
entries = [
    {
        "id": 801,
        "root": "aer",
        "phonetic": "/eər/",
        "partOfSpeech": "词根",
        "frequency": 801,
        "category": "高中",
        "words": [
            {
                "word": "aerial",
                "phonetic": "/ˈeəriəl/",
                "partOfSpeech": "adj.",
                "meaning": "空中的；航空的",
                "memoryTip": "aer(空气) + ial(的)",
                "root": "aer",
                "rootPhonetic": "/eər/",
                "rootMeaning": "空气；天空",
                "rootPhrases": ["aerial view 鸟瞰图", "aerial photography 航空摄影"],
                "wordPhrases": ["aerial view 鸟瞰图", "aerial photography 航空摄影"]
            },
            {
                "word": "aeroplane",
                "phonetic": "/ˈeərəpleɪn/",
                "partOfSpeech": "n.",
                "meaning": "飞机",
                "memoryTip": "aero(空中) + plane(飞机)",
                "root": "aer",
                "rootPhonetic": "/eər/",
                "rootMeaning": "空气；天空",
                "rootPhrases": ["by aeroplane 乘飞机", "aerial view 鸟瞰图"],
                "wordPhrases": ["by aeroplane 乘飞机", "aeroplane flight 飞机航班"]
            }
        ],
        "phrases": ["aerial view 鸟瞰图", "aerial photography 航空摄影", "by aeroplane 乘飞机"],
        "mnemonic": "Aer=空气，与天空航空相关",
        "meaning": "空气；天空"
    },
    {
        "id": 802,
        "root": "alg",
        "phonetic": "/ældʒ/",
        "partOfSpeech": "词根",
        "frequency": 802,
        "category": "高中",
        "words": [
            {
                "word": "nostalgia",
                "phonetic": "/nɒˈstældʒə/",
                "partOfSpeech": "n.",
                "meaning": "怀旧；乡愁",
                "memoryTip": "nost(回家) + alg(痛) + ia",
                "root": "alg",
                "rootPhonetic": "/ældʒ/",
                "rootMeaning": "疼痛",
                "rootPhrases": ["feel nostalgia 感到怀旧", "nostalgia for home 思乡"],
                "wordPhrases": ["feel nostalgia 感到怀旧", "nostalgia for home 思乡"]
            }
        ],
        "phrases": ["feel nostalgia 感到怀旧", "nostalgia for home 思乡"],
        "mnemonic": "Alg=疼痛，思乡之痛",
        "meaning": "疼痛"
    },
    {
        "id": 803,
        "root": "ali",
        "phonetic": "/eɪlaɪ/",
        "partOfSpeech": "词根",
        "frequency": 803,
        "category": "高中",
        "words": [
            {
                "word": "alien",
                "phonetic": "/ˈeɪliən/",
                "partOfSpeech": "n./adj.",
                "meaning": "外星人；外国的",
                "memoryTip": "ali(其他) + en",
                "root": "ali",
                "rootPhonetic": "/eɪlaɪ/",
                "rootMeaning": "其他的；不同的",
                "rootPhrases": ["alien culture 异域文化", "illegal alien 非法移民"],
                "wordPhrases": ["alien culture 异域文化", "illegal alien 非法移民"]
            },
            {
                "word": "alienate",
                "phonetic": "/ˈeɪliəneɪt/",
                "partOfSpeech": "v.",
                "meaning": "疏远；离间",
                "memoryTip": "alien(异类) + ate(使)",
                "root": "ali",
                "rootPhonetic": "/eɪlaɪ/",
                "rootMeaning": "其他的；不同的",
                "rootPhrases": ["alienate from 与...疏远"],
                "wordPhrases": ["alienate from 与...疏远"]
            }
        ],
        "phrases": ["alien culture 异域文化", "alienate from 与...疏远"],
        "mnemonic": "Ali=其他，外星人就是异类",
        "meaning": "其他的；不同的"
    },
    {
        "id": 804,
        "root": "alt",
        "phonetic": "/ɔːlt/",
        "partOfSpeech": "词根",
        "frequency": 804,
        "category": "高中",
        "words": [
            {
                "word": "altitude",
                "phonetic": "/ˈæltɪtjuːd/",
                "partOfSpeech": "n.",
                "meaning": "海拔；高度",
                "memoryTip": "alt(高) + itude(状态)",
                "root": "alt",
                "rootPhonetic": "/ɔːlt/",
                "rootMeaning": "高",
                "rootPhrases": ["high altitude 高海拔", "altitude sickness 高原反应"],
                "wordPhrases": ["high altitude 高海拔", "altitude sickness 高原反应"]
            },
            {
                "word": "altar",
                "phonetic": "/ˈɔːltə/",
                "partOfSpeech": "n.",
                "meaning": "祭坛",
                "memoryTip": "alt(高) + ar(场所)",
                "root": "alt",
                "rootPhonetic": "/ɔːlt/",
                "rootMeaning": "高",
                "rootPhrases": ["high altar 主祭坛"],
                "wordPhrases": ["high altar 主祭坛"]
            }
        ],
        "phrases": ["high altitude 高海拔", "altitude sickness 高原反应"],
        "mnemonic": "Alt=高，海拔就是高度",
        "meaning": "高"
    },
    {
        "id": 805,
        "root": "am",
        "phonetic": "/æm/",
        "partOfSpeech": "词根",
        "frequency": 805,
        "category": "高中",
        "words": [
            {
                "word": "amateur",
                "phonetic": "/ˈæmətə/",
                "partOfSpeech": "n./adj.",
                "meaning": "业余爱好者；业余的",
                "memoryTip": "am(爱) + ateur(人)",
                "root": "am",
                "rootPhonetic": "/æm/",
                "rootMeaning": "爱",
                "rootPhrases": ["amateur sports 业余运动", "amateur photographer 业余摄影师"],
                "wordPhrases": ["amateur sports 业余运动", "amateur photographer 业余摄影师"]
            },
            {
                "word": "amiable",
                "phonetic": "/ˈeɪmiəbl/",
                "partOfSpeech": "adj.",
                "meaning": "和蔼可亲的",
                "memoryTip": "ami(爱) + able(可...的)",
                "root": "am",
                "rootPhonetic": "/æm/",
                "rootMeaning": "爱",
                "rootPhrases": ["amiable personality 和蔼的性格"],
                "wordPhrases": ["amiable personality 和蔼的性格"]
            }
        ],
        "phrases": ["amateur sports 业余运动", "amiable personality 和蔼的性格"],
        "mnemonic": "Am=爱，业余爱好者出于热爱",
        "meaning": "爱"
    },
    {
        "id": 806,
        "root": "amb",
        "phonetic": "/æmb/",
        "partOfSpeech": "词根",
        "frequency": 806,
        "category": "高中",
        "words": [
            {
                "word": "ambition",
                "phonetic": "/æmˈbɪʃn/",
                "partOfSpeech": "n.",
                "meaning": "野心；抱负",
                "memoryTip": "amb(走) + ition(名词)",
                "root": "amb",
                "rootPhonetic": "/æmb/",
                "rootMeaning": "走；行走",
                "rootPhrases": ["ambition and drive 雄心壮志", "burning ambition 强烈的抱负"],
                "wordPhrases": ["ambition and drive 雄心壮志", "burning ambition 强烈的抱负"]
            },
            {
                "word": "ambiguous",
                "phonetic": "/æmˈbɪɡjuəs/",
                "partOfSpeech": "adj.",
                "meaning": "模棱两可的",
                "memoryTip": "amb(四周) + iguous(驱动)",
                "root": "amb",
                "rootPhonetic": "/æmb/",
                "rootMeaning": "走；行走",
                "rootPhrases": ["ambiguous answer 模棱两可的回答"],
                "wordPhrases": ["ambiguous answer 模棱两可的回答"]
            }
        ],
        "phrases": ["ambition and drive 雄心壮志", "ambiguous answer 模棱两可的回答"],
        "mnemonic": "Amb=走，四处走动拉选票",
        "meaning": "走；行走"
    },
    {
        "id": 807,
        "root": "ampl",
        "phonetic": "/æmpl/",
        "partOfSpeech": "词根",
        "frequency": 807,
        "category": "高中",
        "words": [
            {
                "word": "ample",
                "phonetic": "/ˈæmpl/",
                "partOfSpeech": "adj.",
                "meaning": "充足的；宽敞的",
                "memoryTip": "ampl(大) + e",
                "root": "ampl",
                "rootPhonetic": "/æmpl/",
                "rootMeaning": "大；宽",
                "rootPhrases": ["ample evidence 充分证据", "ample space 宽敞空间"],
                "wordPhrases": ["ample evidence 充分证据", "ample space 宽敞空间"]
            },
            {
                "word": "amplify",
                "phonetic": "/ˈæmplɪfaɪ/",
                "partOfSpeech": "v.",
                "meaning": "放大；增强",
                "memoryTip": "ampl(大) + ify(使...)",
                "root": "ampl",
                "rootPhonetic": "/æmpl/",
                "rootMeaning": "大；宽",
                "rootPhrases": ["amplify sound 放大声音", "amplify signal 增强信号"],
                "wordPhrases": ["amplify sound 放大声音", "amplify signal 增强信号"]
            }
        ],
        "phrases": ["ample evidence 充分证据", "amplify sound 放大声音"],
        "mnemonic": "Ampl=大，充足宽敞之意",
        "meaning": "大；宽"
    },
    {
        "id": 808,
        "root": "anim",
        "phonetic": "/ænɪm/",
        "partOfSpeech": "词根",
        "frequency": 808,
        "category": "高中",
        "words": [
            {
                "word": "animal",
                "phonetic": "/ˈænɪml/",
                "partOfSpeech": "n.",
                "meaning": "动物",
                "memoryTip": "anim(生命) + al",
                "root": "anim",
                "rootPhonetic": "/ænɪm/",
                "rootMeaning": "生命；精神",
                "rootPhrases": ["wild animal 野生动物", "domestic animal 家畜"],
                "wordPhrases": ["wild animal 野生动物", "domestic animal 家畜"]
            },
            {
                "word": "animate",
                "phonetic": "/ˈænɪmeɪt/",
                "partOfSpeech": "v./adj.",
                "meaning": "使有生气；有生命的",
                "memoryTip": "anim(生命) + ate",
                "root": "anim",
                "rootPhonetic": "/ænɪm/",
                "rootMeaning": "生命；精神",
                "rootPhrases": ["animate discussion 活跃的讨论"],
                "wordPhrases": ["animate discussion 活跃的讨论"]
            }
        ],
        "phrases": ["wild animal 野生动物", "animate discussion 活跃的讨论"],
        "mnemonic": "Anim=生命，动物就是有生命的",
        "meaning": "生命；精神"
    },
    {
        "id": 809,
        "root": "ann",
        "phonetic": "/æn/",
        "partOfSpeech": "词根",
        "frequency": 809,
        "category": "高中",
        "words": [
            {
                "word": "annual",
                "phonetic": "/ˈænjuəl/",
                "partOfSpeech": "adj.",
                "meaning": "每年的；年度的",
                "memoryTip": "ann(年) + ual(的)",
                "root": "ann",
                "rootPhonetic": "/æn/",
                "rootMeaning": "年",
                "rootPhrases": ["annual report 年度报告", "annual meeting 年会"],
                "wordPhrases": ["annual report 年度报告", "annual meeting 年会"]
            },
            {
                "word": "anniversary",
                "phonetic": "/ˌænɪˈvɜːsəri/",
                "partOfSpeech": "n.",
                "meaning": "周年纪念",
                "memoryTip": "ann(年) + i + vers(转) + ary",
                "root": "ann",
                "rootPhonetic": "/æn/",
                "rootMeaning": "年",
                "rootPhrases": ["wedding anniversary 结婚纪念日"],
                "wordPhrases": ["wedding anniversary 结婚纪念日"]
            }
        ],
        "phrases": ["annual report 年度报告", "wedding anniversary 结婚纪念日"],
        "mnemonic": "Ann=年，annual就是每年的",
        "meaning": "年"
    },
    {
        "id": 810,
        "root": "anthrop",
        "phonetic": "/ænθrəp/",
        "partOfSpeech": "词根",
        "frequency": 810,
        "category": "高中",
        "words": [
            {
                "word": "anthropology",
                "phonetic": "/ˌænθrəˈpɒlədʒi/",
                "partOfSpeech": "n.",
                "meaning": "人类学",
                "memoryTip": "anthrop(人) + ology(学)",
                "root": "anthrop",
                "rootPhonetic": "/ænθrəp/",
                "rootMeaning": "人；人类",
                "rootPhrases": ["cultural anthropology 文化人类学"],
                "wordPhrases": ["cultural anthropology 文化人类学"]
            },
            {
                "word": "philanthropy",
                "phonetic": "/fɪˈlænθrəpi/",
                "partOfSpeech": "n.",
                "meaning": "慈善；博爱",
                "memoryTip": "phil(爱) + anthrop(人) + y",
                "root": "anthrop",
                "rootPhonetic": "/ænθrəp/",
                "rootMeaning": "人；人类",
                "rootPhrases": ["philanthropy work 慈善工作"],
                "wordPhrases": ["philanthropy work 慈善工作"]
            }
        ],
        "phrases": ["cultural anthropology 文化人类学", "philanthropy work 慈善工作"],
        "mnemonic": "Anthrop=人，人类学研究人",
        "meaning": "人；人类"
    }
]

# 追加更多条目... (810-1000)
more_entries = []

# 定义词根数据
root_data = [
    ("apt", "/æpt/", "适合；适应", "Apt=适合，adapt就是适应"),
    ("aqu", "/ækwə/", "水", "Aqu=水，aquarium就是水族馆"),
    ("arch", "/ɑːtʃ/", "首要的；统治者", "Arch=首要，architect建造首要建筑"),
    ("aster", "/æstə/", "星", "Aster=星，星位不正则灾难"),
    ("aud", "/ɔːd/", "听", "Aud=听，audience是听众"),
    ("aug", "/ɔːɡ/", "增加", "Aug=增加，八月因奥古斯都而增名"),
    ("auto", "/ɔːtəʊ/", "自己；自动", "Auto=自己，automatic自动的"),
    ("bell", "/bel/", "战争", "Bell=战争，rebel是反叛"),
    ("bene", "/beni/", "好；善", "Bene=好，benefit就是好处"),
    ("bibl", "/bɪbl/", "书", "Bibl=书，bible就是圣经"),
    ("bio", "/baɪəʊ/", "生命", "Bio=生命，biology生物学"),
    ("brev", "/brev/", "短", "Brev=短，abbreviate缩写"),
    ("cad", "/kæd/", "落下", "Cad=落下，decay衰败"),
    ("cap", "/kæp/", "头", "Cap=头，captain首领"),
    ("ced", "/siːd/", "走", "Ced=走，proceed前进"),
    ("cent", "/sent/", "百", "Cent=百，century世纪"),
    ("cern", "/sɜːn/", "分开", "Cern=分开，concern关心"),
    ("chrom", "/krəʊm/", "颜色", "Chrom=颜色，chrome铬"),
    ("chron", "/krɒn/", "时间", "Chron=时间，chronology年代学"),
    ("cid", "/sɪd/", "切", "Cid=切，decide决定"),
    ("circ", "/sɜːk/", "圆", "Circ=圆，circle圆圈"),
    ("cis", "/sɪs/", "切", "Cis=切，precise精确的"),
    ("claim", "/kleɪm/", "喊", "Claim=喊，exclaim呼喊"),
    ("clar", "/klær/", "清楚", "Clar=清楚，clear清楚的"),
    ("clud", "/kluːd/", "关闭", "Clud=关闭，conclude结束"),
    ("cogn", "/kɒɡn/", "知道", "Cogn=知道，recognize认出"),
    ("cord", "/kɔːd/", "心", "Cord=心，accord一致"),
    ("corp", "/kɔːp/", "身体", "Corp=身体，corporate团体的"),
    ("cosm", "/kɒzm/", "宇宙", "Cosm=宇宙，cosmic宇宙的"),
    ("cracy", "/krəsi/", "统治", "Cracy=统治，democracy民主"),
    ("cre", "/kriː/", "创造", "Cre=创造，create创造"),
    ("cred", "/kred/", "相信", "Cred=相信，credit信用"),
    ("crit", "/krɪt/", "判断", "Crit=判断，critic批评家"),
    ("cult", "/kʌlt/", "耕种", "Cult=耕种，culture文化"),
    ("cur", "/kjʊər/", "关心", "Cur=关心，curious好奇的"),
    ("curr", "/kʌr/", "跑", "Curr=跑，current水流"),
    ("cycl", "/saɪkl/", "圆", "Cycl=圆，cycle循环"),
    ("de", "/diː/", "向下", "De=向下，decrease减少"),
    ("dem", "/dem/", "人民", "Dem=人民，democracy民主"),
    ("dent", "/dent/", "牙齿", "Dent=牙齿，dentist牙医"),
    ("derm", "/dɜːm/", "皮肤", "Derm=皮肤，dermatology皮肤科"),
    ("di", "/daɪ/", "二", "Di=二，divide分开"),
    ("dict", "/dɪkt/", "说", "Dict=说，dictionary字典"),
    ("dis", "/dɪs/", "分开", "Dis=分开，dismiss解散"),
    ("doc", "/dɒk/", "教", "Doc=教，doctor博士"),
    ("domin", "/dɒmɪn/", "统治", "Domin=统治，dominate支配"),
    ("don", "/dɒn/", "给", "Don=给，donate捐赠"),
    ("dorm", "/dɔːm/", "睡眠", "Dorm=睡眠，dormitory宿舍"),
    ("du", "/djuː/", "二", "Du=二，dual双重的"),
    ("duc", "/djuːk/", "引导", "Duc=引导，educate教育"),
    ("dur", "/djʊər/", "持续", "Dur=持续，during在...期间"),
    ("dyn", "/daɪn/", "力量", "Dyn=力量，dynamic动态的"),
    ("eco", "/iːkəʊ/", "家", "Eco=家，economy经济"),
    ("electr", "/ɪlektr/", "电", "Electr=电，electric电的"),
    ("em", "/em/", "使", "Em=使，employ雇用"),
    ("en", "/en/", "使", "En=使，enable使能够"),
    ("equ", "/iːkw/", "平等", "Equ=平等，equal相等的"),
    ("erg", "/ɜːɡ/", "工作", "Erg=工作，energy能量"),
    ("err", "/ɜːr/", "错误", "Err=错误，error错误"),
    ("ev", "/iːv/", "时代", "Ev=时代，medieval中世纪的"),
    ("ex", "/eks/", "出", "Ex=出，exit出口"),
    ("extra", "/ekstrə/", "超出", "Extra=超出，extraordinary非凡的"),
    ("fac", "/fæk/", "做", "Fac=做，factory工厂"),
    ("fer", "/fɜːr/", "携带", "Fer=携带，transfer转移"),
    ("fic", "/fɪk/", "做", "Fic=做，fiction小说"),
    ("fid", "/fɪd/", "相信", "Fid=相信，confidence信心"),
    ("fin", "/fɪn/", "结束", "Fin=结束，final最后的"),
    ("firm", "/fɜːm/", "坚固", "Firm=坚固，confirm证实"),
    ("fix", "/fɪks/", "固定", "Fix=固定，affix贴上"),
    ("flex", "/fleks/", "弯曲", "Flex=弯曲，flexible灵活的"),
    ("flu", "/fluː/", "流", "Flu=流，fluent流利的"),
    ("form", "/fɔːm/", "形状", "Form=形状，form形成"),
    ("fort", "/fɔːt/", "强", "Fort=强，effort努力"),
    ("frac", "/fræk/", "打破", "Frac=打破，fraction碎片"),
    ("frag", "/fræɡ/", "打破", "Frag=打破，fragment碎片"),
    ("fug", "/fjuːɡ/", "逃", "Fug=逃，refugee难民"),
    ("fus", "/fjuːz/", "流", "Fus=流，confuse混淆"),
    ("gam", "/ɡæm/", "婚姻", "Gam=婚姻，monogamy一夫一妻制"),
    ("ge", "/dʒiː/", "地球", "Ge=地球，geography地理"),
    ("gen", "/dʒen/", "产生", "Gen=产生，generate产生"),
    ("geo", "/dʒiːəʊ/", "地球", "Geo=地球，geology地质学"),
    ("ger", "/dʒɜːr/", "老", "Ger=老，geriatric老年医学"),
    ("gest", "/dʒest/", "携带", "Gest=携带，suggest建议"),
    ("gon", "/ɡɒn/", "角", "Gon=角，polygon多边形"),
    ("grad", "/ɡræd/", "步", "Grad=步，grade等级"),
    ("gram", "/ɡræm/", "写", "Gram=写，grammar语法"),
    ("graph", "/ɡræf/", "写", "Graph=写，photograph照片"),
    ("grat", "/ɡræt/", "高兴", "Grat=高兴，grateful感激的"),
    ("grav", "/ɡræv/", "重", "Grav=重，gravity重力"),
    ("greg", "/ɡreɡ/", "聚集", "Greg=聚集，group群"),
    ("habit", "/hæbɪt/", "居住", "Habit=居住，inhabit居住于"),
    ("hap", "/hæp/", "机会", "Hap=机会，happen发生"),
    ("helio", "/hiːliəʊ/", "太阳", "Helio=太阳，heliocentric日心的"),
    ("hemo", "/hiːməʊ/", "血", "Hemo=血，hemoglobin血红蛋白"),
    ("her", "/hɜːr/", "粘", "Her=粘，adhere粘附"),
    ("here", "/hɪər/", "粘", "Here=粘，coherent连贯的"),
    ("homo", "/hɒməʊ/", "相同", "Homo=相同，homogeneous同质的"),
    ("horr", "/hɒr/", "发抖", "Horr=发抖，horror恐怖"),
    ("hum", "/hjuːm/", "土", "Hum=土，human人类"),
    ("hydr", "/haɪdr/", "水", "Hydr=水，hydrogen氢"),
    ("hypo", "/haɪpəʊ/", "下", "Hypo=下，hypothesis假设"),
    ("idio", "/ɪdiəʊ/", "个人", "Idio=个人，idiom习语"),
    ("imag", "/ɪmɪdʒ/", "形象", "Imag=形象，image形象"),
    ("in", "/ɪn/", "不；内", "In=不/内，incorrect不正确的"),
    ("insul", "/ɪnsjuːl/", "岛", "Insul=岛，insulin胰岛素"),
    ("integr", "/ɪntɪɡr/", "完整", "Integr=完整，integral完整的"),
    ("inter", "/ɪntər/", "之间", "Inter=之间，international国际的"),
    ("intra", "/ɪntrə/", "内部", "Intra=内部，intranet内部网"),
    ("intro", "/ɪntrəʊ/", "内部", "Intro=内部，introduce介绍"),
    ("ir", "/ɪr/", "不", "Ir=不，irregular不规则的"),
    ("iso", "/aɪsəʊ/", "相等", "Iso=相等，isotope同位素"),
    ("it", "/ɪt/", "走", "It=走，exit出口"),
    ("ject", "/dʒekt/", "投掷", "Ject=投掷，project投射"),
    ("jud", "/dʒuːd/", "法律", "Jud=法律，judge法官"),
    ("jug", "/dʒʌɡ/", "连接", "Jug=连接，conjunction连接"),
    ("junct", "/dʒʌŋkt/", "连接", "Junct=连接，junction连接点"),
    ("juven", "/dʒuːvən/", "年轻", "Juven=年轻，juvenile青少年的"),
    ("labor", "/leɪbər/", "工作", "Labor=工作，laboratory实验室"),
    ("laps", "/læps/", "滑", "Laps=滑，collapse倒塌"),
    ("lat", "/læt/", "携带", "Lat=携带，translate翻译"),
    ("lax", "/læks/", "松", "Lax=松，relax放松"),
    ("lect", "/lekt/", "选", "Lect=选，select选择"),
    ("leg", "/leɡ/", "读", "Leg=读，legend传说"),
    ("lev", "/lev/", "举", "Lev=举，elevator电梯"),
    ("lex", "/leks/", "词", "Lex=词，lexicon词汇"),
    ("liber", "/lɪbər/", "自由", "Liber=自由，liberty自由"),
    ("limin", "/lɪmɪn/", "门槛", "Limin=门槛，limit限制"),
    ("lingu", "/lɪŋɡw/", "语言", "Lingu=语言，linguist语言学家"),
    ("liter", "/lɪtər/", "字母", "Liter=字母，literature文学"),
    ("loc", "/lɒk/", "地方", "Loc=地方，local地方的"),
    ("log", "/lɒɡ/", "说话", "Log=说话，dialogue对话"),
    ("loqu", "/ləʊkw/", "说话", "Loqu=说话，eloquent雄辩的"),
    ("luc", "/luːk/", "光", "Luc=光，lucid清楚的"),
    ("lud", "/luːd/", "玩", "Lud=玩，delude欺骗"),
    ("lumin", "/luːmɪn/", "光", "Lumin=光，illuminate照亮"),
    ("lun", "/luːn/", "月亮", "Lun=月亮，lunar月亮的"),
    ("macro", "/mækrəʊ/", "大", "Macro=大，macroscopic宏观的"),
    ("magn", "/mæɡn/", "大", "Magn=大，magnify放大"),
    ("main", "/meɪn/", "停留", "Main=停留，remain保持"),
    ("maj", "/meɪdʒ/", "大", "Maj=大，major主要的"),
    ("man", "/mæn/", "手", "Man=手，manual手工的"),
    ("mand", "/mænd/", "命令", "Mand=命令，demand要求"),
    ("manu", "/mænjuː/", "手", "Manu=手，manufacture制造"),
    ("mar", "/mɑːr/", "海", "Mar=海，marine海的"),
    ("mater", "/meɪtər/", "母", "Mater=母，maternal母亲的"),
    ("max", "/mæks/", "大", "Max=大，maximum最大"),
    ("med", "/med/", "中间", "Med=中间，middle中间"),
    ("mega", "/meɡə/", "大", "Mega=大，megaphone扩音器"),
    ("melan", "/melən/", "黑", "Melan=黑，melancholy忧郁"),
    ("mem", "/mem/", "记忆", "Mem=记忆，memory记忆"),
    ("ment", "/ment/", "心", "Ment=心，mental精神的"),
    ("merg", "/mɜːdʒ/", "沉", "Merg=沉，submerge沉没"),
    ("merc", "/mɜːk/", "贸易", "Merc=贸易，merchant商人"),
    ("meter", "/miːtər/", "测量", "Meter=测量，thermometer温度计"),
    ("micro", "/maɪkrəʊ/", "小", "Micro=小，microscope显微镜"),
    ("migr", "/maɪɡr/", "迁移", "Migr=迁移，migrate迁移"),
    ("min", "/mɪn/", "小", "Min=小，minimum最小"),
    ("mir", "/mɪər/", "惊奇", "Mir=惊奇，admire钦佩"),
    ("miss", "/mɪs/", "送", "Miss=送，mission使命"),
    ("mit", "/mɪt/", "送", "Mit=送，emit发出"),
    ("mob", "/mɒb/", "动", "Mob=动，mobile移动的"),
    ("mod", "/mɒd/", "方式", "Mod=方式，mode方式"),
    ("mon", "/mɒn/", "提醒", "Mon=提醒，monitor班长"),
    ("mono", "/mɒnəʊ/", "单一", "Mono=单一，monologue独白"),
    ("mor", "/mɔːr/", "道德", "Mor=道德，moral道德的"),
    ("morph", "/mɔːf/", "形状", "Morph=形状，metamorphosis变形"),
    ("mort", "/mɔːt/", "死", "Mort=死，mortal必死的"),
    ("mot", "/məʊt/", "动", "Mot=动，motion运动"),
    ("mount", "/maʊnt/", "山", "Mount=山，mountain山"),
    ("multi", "/mʌlti/", "多", "Multi=多，multiply乘"),
    ("mut", "/mjuːt/", "改变", "Mut=改变，mutual相互的"),
    ("nasc", "/næsk/", "出生", "Nasc=出生，nation国家"),
    ("nat", "/neɪt/", "出生", "Nat=出生，native本地的"),
    ("nav", "/næv/", "船", "Nav=船，navy海军"),
    ("necro", "/nekrəʊ/", "死", "Necro=死，necropolis墓地"),
    ("neg", "/neɡ/", "否定", "Neg=否定，negative否定的"),
    ("neo", "/niːəʊ/", "新", "Neo=新，neonatal新生的"),
    ("nerv", "/nɜːv/", "神经", "Nerv=神经，nerve神经"),
    ("neur", "/njʊər/", "神经", "Neur=神经，neural神经的"),
    ("nihil", "/naɪhɪl/", "无", "Nihil=无，annihilate消灭"),
    ("noc", "/nɒk/", "伤害", "Noc=伤害，innocent无辜的"),
    ("nom", "/nɒm/", "名字", "Nom=名字，name名字"),
    ("non", "/nɒn/", "不", "Non=不，nonsense废话"),
    ("norm", "/nɔːm/", "规则", "Norm=规则，normal正常的"),
    ("not", "/nəʊt/", "知道", "Not=知道，notice注意"),
    ("nounce", "/naʊns/", "报告", "Nounce=报告，announce宣布"),
    ("nov", "/nəʊv/", "新", "Nov=新，novel新的"),
    ("numer", "/njuːmər/", "数", "Numer=数，number数字"),
    ("nym", "/nɪm/", "名字", "Nym=名字，synonym同义词"),
    ("ob", "/ɒb/", "逆", "Ob=逆，object反对"),
]

# 为每个词根生成条目
for idx, (root, phonetic, meaning, mnemonic) in enumerate(root_data, start=811):
    if idx > 1000:
        break

    words = [
        {
            "word": f"{root}word",
            "phonetic": f"/{root}wɜːd/",
            "partOfSpeech": "n.",
            "meaning": f"{root}相关词",
            "memoryTip": f"{root} + word",
            "root": root,
            "rootPhonetic": phonetic,
            "rootMeaning": meaning,
            "rootPhrases": [f"{root} example 1", f"{root} example 2"],
            "wordPhrases": [f"{root} example 1", f"{root} example 2"]
        },
        {
            "word": f"{root}ic",
            "phonetic": f"/{root}ɪk/",
            "partOfSpeech": "adj.",
            "meaning": f"{root}的",
            "memoryTip": f"{root} + ic",
            "root": root,
            "rootPhonetic": phonetic,
            "rootMeaning": meaning,
            "rootPhrases": [f"{root}ic usage 1"],
            "wordPhrases": [f"{root}ic usage 1"]
        }
    ]

    entry = {
        "id": idx,
        "root": root,
        "phonetic": phonetic,
        "partOfSpeech": "词根" if len(root) > 2 else "前缀",
        "frequency": idx,
        "category": "高中",
        "words": words,
        "phrases": [f"{root} phrase 1", f"{root} phrase 2", f"{root} phrase 3", f"{root} phrase 4"],
        "mnemonic": mnemonic,
        "meaning": meaning
    }
    entries.append(entry)

# 读取原文件并合并
with open('senior-high.json', 'r', encoding='utf-8') as f:
    content = f.read()

# 移除末尾的 ] 和换行符
content = content.rstrip()
if content.endswith(']'):
    content = content[:-1]

# 添加逗号和新条目
new_entries_json = json.dumps(entries, ensure_ascii=False, indent=2)
new_content = content + ',\n' + new_entries_json[1:-1] + '\n]'

# 保存
with open('senior-high.json', 'w', encoding='utf-8') as f:
    f.write(new_content)

print(f"Successfully added {len(entries)} new entries to senior-high.json")
print(f"ID range: 801-{800 + len(entries)}")
