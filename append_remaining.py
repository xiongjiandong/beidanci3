#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Append remaining 240 civil engineering roots (id 261-500) to the existing JSON file.
"""

import json
import sys

# Read existing file
file_path = 'f:/claudeanli/beidanci3/src/data/civil-engineering.json'

with open(file_path, 'r', encoding='utf-8') as f:
    data = json.load(f)

print(f"Current entries: {len(data)}")
print(f"Last entry ID: {data[-1]['id']}")
print(f"Last entry root: {data[-1]['root']}")

# Define remaining 240 civil engineering roots (id 261-500)
new_roots_raw = [
    # ===== 261-280: Underground Engineering =====
    {"id": 261, "root": "tunnel", "phonetic": "/ˈtʌnl/", "pos": "名词", "meaning": "隧道", "mnemonic": "Tunnel→音似\"塔扭\"→塔在地下扭→隧道", "phrases": ["tunnel lining 隧道衬砌", "shield tunnel 盾构隧道", "tunnel boring machine 隧道掘进机", "immersed tube tunnel 沉管隧道"]},
    {"id": 262, "root": "shaft", "phonetic": "/ʃɑːft/", "pos": "名词", "meaning": "竖井", "mnemonic": "Shaft→轴→竖井", "phrases": ["ventilation shaft 通风竖井", "access shaft 进入竖井", "shaft sinking 竖井开挖", "drop shaft 跌水竖井"]},
    {"id": 263, "root": "adit", "phonetic": "/ˈædɪt/", "pos": "名词", "meaning": "平硐", "mnemonic": "Adit→ad(向)+it→通向内部的平硐", "phrases": ["exploration adit 勘探平硐", "drainage adit 排水平硐", "adit entrance 平硐口", "main adit 主平硐"]},
    {"id": 264, "root": "gallery", "phonetic": "/ˈɡæləri/", "pos": "名词", "meaning": "廊道", "mnemonic": "Gallery→画廊→廊道", "phrases": ["inspection gallery 检查廊道", "drainage gallery 排水廊道", "access gallery 进入廊道", "tailrace gallery 尾水廊道"]},
    {"id": 265, "root": "cavern", "phonetic": "/ˈkævən/", "pos": "名词", "meaning": "洞室", "mnemonic": "Cavern→cave(洞)+rn→洞室", "phrases": ["underground cavern 地下洞室", "powerhouse cavern 厂房洞室", "cavern excavation 洞室开挖", "cavern support 洞室支护"]},
    {"id": 266, "root": "excavation", "phonetic": "/ˌekskəˈveɪʃn/", "pos": "名词", "meaning": "开挖", "mnemonic": "Excavation→ex(出)+cav(洞)+ation→挖出洞→开挖", "phrases": ["excavation method 开挖方法", "deep excavation 深基坑", "excavation support 基坑支护", "excavation sequence 开挖顺序"]},
    {"id": 267, "root": "lining", "phonetic": "/ˈlaɪnɪŋ/", "pos": "名词", "meaning": "衬砌", "mnemonic": "Lining→line(线)+ing→衬砌", "phrases": ["tunnel lining 隧道衬砌", "primary lining 初期支护", "secondary lining 二次衬砌", "concrete lining 混凝土衬砌"]},
    {"id": 268, "root": "NATM", "phonetic": "/nætm/", "pos": "缩写", "meaning": "新奥法", "mnemonic": "NATM→New Austrian Tunnelling Method→新奥法", "phrases": ["NATM tunnel 新奥法隧道", "NATM principle 新奥法原理", "sequential excavation method 分部开挖法", "NATM support 新奥法支护"]},
    {"id": 269, "root": "shield", "phonetic": "/ʃiːld/", "pos": "名词", "meaning": "盾构", "mnemonic": "Shield→盾牌→盾构如盾", "phrases": ["shield machine 盾构机", "shield tunneling 盾构掘进", "earth pressure balance shield 土压平衡盾构", "slurry shield 泥水盾构"]},
    {"id": 270, "root": "TBM", "phonetic": "/tiː biː em/", "pos": "缩写", "meaning": "隧道掘进机", "mnemonic": "TBM→Tunnel Boring Machine→隧道掘进机", "phrases": ["TBM tunneling TBM掘进", "hard rock TBM 硬岩TBM", "TBM cutterhead TBM刀盘", "TBM advancement TBM推进"]},
    {"id": 271, "root": "cutandcover", "phonetic": "/kʌt ænd ˈkʌvə/", "pos": "名词", "meaning": "明挖法", "mnemonic": "Cutandcover→cut(挖)+and+cover(盖)→明挖法", "phrases": ["cut and cover method 明挖法", "cut and cover tunnel 明挖隧道", "top-down construction 盖挖逆作法", "bottom-up construction 盖挖顺作法"]},
    {"id": 272, "root": "jacking", "phonetic": "/ˈdʒækɪŋ/", "pos": "名词", "meaning": "顶进", "mnemonic": "Jacking→jack(千斤顶)+ing→顶进", "phrases": ["pipe jacking 顶管", "jacking force 顶进力", "jacking pit 顶进工作井", "microtunneling 微型顶管"]},
    {"id": 273, "root": "groundfreezing", "phonetic": "/ɡraʊnd ˈfriːzɪŋ/", "pos": "名词", "meaning": "冻结法", "mnemonic": "Groundfreezing→ground(地层)+freezing(冻结)→冻结法", "phrases": ["ground freezing method 地层冻结法", "artificial ground freezing 人工地层冻结", "freezing pipe 冻结管", "freezing wall 冻结墙"]},
    {"id": 274, "root": "dewatering", "phonetic": "/diːˈwɔːtərɪŋ/", "pos": "名词", "meaning": "降水", "mnemonic": "Dewatering→de(去除)+water(水)+ing→降水", "phrases": ["wellpoint dewatering 井点降水", "deep well dewatering 深井降水", "dewatering system 降水系统", "electro-osmotic dewatering 电渗降水"]},
    {"id": 275, "root": "rockbolting", "phonetic": "/rɒk ˈbəʊltɪŋ/", "pos": "名词", "meaning": "锚杆支护", "mnemonic": "Rockbolting→rock(岩)+bolting(锚固)→锚杆支护", "phrases": ["rock bolt 锚杆", "rock bolting pattern 锚杆布置", "tensioned rock bolt 张拉式锚杆", "friction rock bolt 摩擦式锚杆"]},
    {"id": 276, "root": "shotcreting", "phonetic": "/ˈʃɒtkriːtɪŋ/", "pos": "名词", "meaning": "喷射混凝土", "mnemonic": "Shotcreting→shot(喷射)+crete(混凝土)→喷射混凝土", "phrases": ["dry mix shotcrete 干喷", "wet mix shotcrete 湿喷", "shotcrete lining 喷射混凝土衬砌", "steel fiber shotcrete 钢纤维喷射混凝土"]},
    {"id": 277, "root": "forepoling", "phonetic": "/ˈfɔːpəʊlɪŋ/", "pos": "名词", "meaning": "超前支护", "mnemonic": "Forepoling→fore(前)+poling(支护)→超前支护", "phrases": ["forepoling board 超前护板", "pipe forepoling 管棚超前支护", "forepoling method 超前支护法", "forepoling umbrella 超前支护伞"]},
    {"id": 278, "root": "spiling", "phonetic": "/ˈspaɪlɪŋ/", "pos": "名词", "meaning": "插板支护", "mnemonic": "Spiling→spile(插板)+ing→插板支护", "phrases": ["spiling plank 插板", "forepoling and spiling 超前插板", "spiling method 插板法", "steel spiling 钢插板"]},
    {"id": 279, "root": "ringbeam", "phonetic": "/rɪŋ biːm/", "pos": "名词", "meaning": "环梁", "mnemonic": "Ringbeam→ring(环)+beam(梁)→环梁", "phrases": ["ring beam 环梁", "tunnel ring beam 隧道环梁", "circular ring beam 圆形环梁", "ring beam support 环梁支撑"]},
    {"id": 280, "root": "invert", "phonetic": "/ˈɪnvɜːt/", "pos": "名词", "meaning": "仰拱", "mnemonic": "Invert→in(内)+vert(转)→向内转的拱→仰拱", "phrases": ["tunnel invert 隧道仰拱", "invert arch 仰拱", "invert strut 仰拱支撑", "closed invert 闭合仰拱"]},

    # ===== 281-300: Road Engineering =====
    {"id": 281, "root": "pavement", "phonetic": "/ˈpeɪvmənt/", "pos": "名词", "meaning": "路面", "mnemonic": "Pavement→pave(铺设)+ment→路面", "phrases": ["flexible pavement 柔性路面", "rigid pavement 刚性路面", "pavement design 路面设计", "pavement distress 路面损坏"]},
    {"id": 282, "root": "subgrade", "phonetic": "/ˈsʌbɡreɪd/", "pos": "名词", "meaning": "路基", "mnemonic": "Subgrade→sub(下)+grade(级)→路基", "phrases": ["subgrade soil 路基土", "subgrade modulus 路基模量", "subgrade reaction 路基反力", "subgrade improvement 路基改良"]},
    {"id": 283, "root": "subbase", "phonetic": "/ˈsʌbbeɪs/", "pos": "名词", "meaning": "底基层", "mnemonic": "Subbase→sub(下)+base(基层)→底基层", "phrases": ["subbase course 底基层", "granular subbase 粒料底基层", "subbase material 底基层材料", "subbase thickness 底基层厚度"]},
    {"id": 284, "root": "asphalt", "phonetic": "/ˈæsfælt/", "pos": "名词", "meaning": "沥青", "mnemonic": "Asphalt→音似\"艾斯否特\"→沥青", "phrases": ["asphalt concrete 沥青混凝土", "asphalt pavement 沥青路面", "asphalt binder 沥青结合料", "asphalt mixture 沥青混合料"]},
    {"id": 285, "root": "bitumen", "phonetic": "/ˈbɪtjʊmɪn/", "pos": "名词", "meaning": "沥青", "mnemonic": "Bitumen→音似\"比图门\"→沥青", "phrases": ["bituminous concrete 沥青混凝土", "modified bitumen 改性沥青", "bitumen emulsion 沥青乳液", "bitumen content 沥青含量"]},
    {"id": 286, "root": "aggregate", "phonetic": "/ˈæɡrɪɡət/", "pos": "名词", "meaning": "集料；骨料", "mnemonic": "Aggregate→ag(聚集)+greg(群)+ate→集料", "phrases": ["coarse aggregate 粗集料", "fine aggregate 细集料", "aggregate gradation 集料级配", "aggregate base 集料基层"]},
    {"id": 287, "root": "compaction", "phonetic": "/kəmˈpækʃn/", "pos": "名词", "meaning": "压实", "mnemonic": "Compaction→com(一起)+pact(紧)+ion→压实", "phrases": ["compaction test 压实试验", "degree of compaction 压实度", "compaction curve 压实曲线", "compaction effort 压实功"]},
    {"id": 288, "root": "camber", "phonetic": "/ˈkæmbə/", "pos": "名词", "meaning": "路拱", "mnemonic": "Camber→音似\"看伯\"→看路拱", "phrases": ["road camber 路拱", "camber slope 路拱坡度", "crown camber 中央路拱", "camber angle 路拱角"]},
    {"id": 289, "root": "superelevation", "phonetic": "/ˌsuːpərɛlɪˈveɪʃn/", "pos": "名词", "meaning": "超高", "mnemonic": "Superelevation→super(超)+elevation(高)→超高", "phrases": ["superelevation rate 超高率", "maximum superelevation 最大超高", "superelevation transition 超高过渡", "superelevation runoff 超高缓和段"]},
    {"id": 290, "root": "shoulder", "phonetic": "/ˈʃəʊldə/", "pos": "名词", "meaning": "路肩", "mnemonic": "Shoulder→肩膀→路肩", "phrases": ["paved shoulder 硬化路肩", "shoulder width 路肩宽度", "hard shoulder 硬路肩", "soft shoulder 软路肩"]},
    {"id": 291, "root": "median", "phonetic": "/ˈmiːdiən/", "pos": "名词", "meaning": "中央分隔带", "mnemonic": "Median→中间的→中央分隔带", "phrases": ["median strip 中央分隔带", "median barrier 中央护栏", "raised median 隆起式中央分隔带", "flush median 平齐式中央分隔带"]},
    {"id": 292, "root": "berm", "phonetic": "/bɜːm/", "pos": "名词", "meaning": "护坡道", "mnemonic": "Berm→音似\"波姆\"→护坡道", "phrases": ["road berm 路堤护坡道", "berm width 护坡道宽度", "bench berm 平台护坡道", "intermediate berm 中间护坡道"]},
    {"id": 293, "root": "embankment", "phonetic": "/ɪmˈbæŋkmənt/", "pos": "名词", "meaning": "路堤", "mnemonic": "Embankment→em(入)+bank(岸)+ment→堤岸", "phrases": ["road embankment 路堤", "high embankment 高路堤", "embankment slope 堤坡", "embankment fill 路堤填方"]},
    {"id": 294, "root": "cutting", "phonetic": "/ˈkʌtɪŋ/", "pos": "名词", "meaning": "路堑", "mnemonic": "Cutting→cut(挖)+ing→路堑", "phrases": ["road cutting 路堑", "deep cutting 深路堑", "cutting slope 路堑边坡", "cutting width 路堑宽度"]},
    {"id": 295, "root": "guardrail", "phonetic": "/ˈɡɑːdreɪl/", "pos": "名词", "meaning": "护栏", "mnemonic": "Guardrail→guard(保护)+rail(栏杆)→护栏", "phrases": ["highway guardrail 公路护栏", "W-beam guardrail W型梁护栏", "guardrail post 护栏立柱", "guardrail end terminal 护栏端头"]},
    {"id": 296, "root": "kerb", "phonetic": "/kɜːb/", "pos": "名词", "meaning": "路缘石", "mnemonic": "Curb→音似\"克布\"→路缘石", "phrases": ["kerb stone 路缘石", "kerb and gutter 路缘石和排水沟", "dropped kerb 缓降路缘", "kerb ramp 路缘坡道"]},
    {"id": 297, "root": "tackcoat", "phonetic": "/tæk kəʊt/", "pos": "名词", "meaning": "粘层", "mnemonic": "Tackcoat→tack(粘性)+coat(涂层)→粘层", "phrases": ["tack coat 粘层", "asphalt tack coat 沥青粘层", "tack coat application 粘层施工", "emulsion tack coat 乳液粘层"]},
    {"id": 298, "root": "primecoat", "phonetic": "/praɪm kəʊt/", "pos": "名词", "meaning": "透层", "mnemonic": "Primecoat→prime(初级)+coat(涂层)→透层", "phrases": ["prime coat 透层", "asphalt prime coat 沥青透层", "prime coat application 透层施工", "penetrating prime coat 渗透型透层"]},
    {"id": 299, "root": "sealcoat", "phonetic": "/siːl kəʊt/", "pos": "名词", "meaning": "封层", "mnemonic": "Sealcoat→seal(密封)+coat(涂层)→封层", "phrases": ["seal coat 封层", "slurry seal 稀浆封层", "chip seal 碎石封层", "sand seal 砂封层"]},
    {"id": 300, "root": "pothole", "phonetic": "/ˈpɒthəʊl/", "pos": "名词", "meaning": "坑洞", "mnemonic": "Pothole→pot(锅)+hole(洞)→坑洞如锅", "phrases": ["pothole repair 坑洞修补", "pothole patching 坑洞填补", "pavement pothole 路面坑洞", "pothole formation 坑洞形成"]},

    # ===== 301-320: Bridge Engineering =====
    {"id": 301, "root": "span", "phonetic": "/spæn/", "pos": "名词", "meaning": "跨度", "mnemonic": "Span→音似\"四盘\"→四盘跨度", "phrases": ["span length 跨度", "main span 主跨", "side span 边跨", "clear span 净跨"]},
    {"id": 302, "root": "girder", "phonetic": "/ˈɡɜːdə/", "pos": "名词", "meaning": "大梁；主梁", "mnemonic": "Girder→gird(围绕)+er→大梁", "phrases": ["box girder 箱梁", "I-girder I形梁", "girder bridge 梁桥", "continuous girder 连续梁"]},
    {"id": 303, "root": "stringer", "phonetic": "/ˈstrɪŋə/", "pos": "名词", "meaning": "纵梁", "mnemonic": "Stringer→string(线)+er→纵向线条→纵梁", "phrases": ["floor stringer 桥面纵梁", "stringer beam 纵梁", "longitudinal stringer 纵向纵梁", "steel stringer 钢纵梁"]},
    {"id": 304, "root": "crossbeam", "phonetic": "/ˈkrɒsbiːm/", "pos": "名词", "meaning": "横梁", "mnemonic": "Crossbeam→cross(横)+beam(梁)→横梁", "phrases": ["diaphragm crossbeam 横隔梁", "crossbeam connection 横梁连接", "intermediate crossbeam 中间横梁", "rigid crossbeam 刚性横梁"]},
    {"id": 305, "root": "bearings", "phonetic": "/ˈbeərɪŋz/", "pos": "名词", "meaning": "支座", "mnemonic": "Bearings→bearing(支撑)+s→支座", "phrases": ["expansion bearing 活动支座", "fixed bearing 固定支座", "elastomeric bearing 橡胶支座", "pot bearing 盆式支座"]},
    {"id": 306, "root": "expansion", "phonetic": "/ɪkˈspænʃn/", "pos": "名词", "meaning": "伸缩缝", "mnemonic": "Expansion→expand(膨胀)+sion→伸缩缝", "phrases": ["expansion joint 伸缩缝", "expansion device 伸缩装置", "expansion gap 伸缩间隙", "modular expansion joint 模数式伸缩缝"]},
    {"id": 307, "root": "parapet", "phonetic": "/ˈpærəpɪt/", "pos": "名词", "meaning": "栏杆；护墙", "mnemonic": "Parapet→para(旁)+pet(墙)→护墙", "phrases": ["bridge parapet 桥梁栏杆", "parapet wall 护墙", "concrete parapet 混凝土护栏", "parapet height 栏杆高度"]},
    {"id": 308, "root": "handrail", "phonetic": "/ˈhændreɪl/", "pos": "名词", "meaning": "扶手", "mnemonic": "Handrail→hand(手)+rail(栏杆)→扶手", "phrases": ["stair handrail 楼梯扶手", "bridge handrail 桥梁扶手", "handrail height 扶手高度", "handrail post 扶手立柱"]},
    {"id": 309, "root": "nosing", "phonetic": "/ˈnəʊzɪŋ/", "pos": "名词", "meaning": "踏步突缘", "mnemonic": "Nosing→nose(鼻)+ing→像鼻子一样突出→踏步突缘", "phrases": ["stair nosing 踏步突缘", "nosing projection 突缘伸出", "nosing strip 突缘条", "anti-slip nosing 防滑突缘"]},
    {"id": 310, "root": "balustrade", "phonetic": "/ˈbæləstreɪd/", "pos": "名词", "meaning": "栏杆柱", "mnemonic": "Balustrade→baluster(栏杆柱)+ade→栏杆", "phrases": ["balustrade railing 栏杆", "stone balustrade 石栏杆", "balustrade system 栏杆系统", "balustrade height 栏杆高度"]},
    {"id": 311, "root": "railing", "phonetic": "/ˈreɪlɪŋ/", "pos": "名词", "meaning": "栏杆", "mnemonic": "Railing→rail(栏杆)+ing→栏杆", "phrases": ["safety railing 安全栏杆", "guard railing 防护栏杆", "railing post 栏杆柱", "railing height 栏杆高度"]},
    {"id": 312, "root": "sidewalk", "phonetic": "/ˈsaɪdwɔːk/", "pos": "名词", "meaning": "人行道", "mnemonic": "Sidewalk→side(边)+walk(走)→人行道", "phrases": ["bridge sidewalk 桥梁人行道", "sidewalk width 人行道宽度", "sidewalk slab 人行道板", "sidewalk railing 人行道栏杆"]},
    {"id": 313, "root": "approach", "phonetic": "/əˈprəʊtʃ/", "pos": "名词", "meaning": "引道", "mnemonic": "Approach→接近→引道接近桥梁", "phrases": ["bridge approach 桥梁引道", "approach embankment 引道堤", "approach slab 引道板", "approach span 引桥"]},
    {"id": 314, "root": "viaduct", "phonetic": "/ˈvaɪədʌkt/", "pos": "名词", "meaning": "高架桥", "mnemonic": "Viaduct→via(通过)+duct(引导)→高架桥", "phrases": ["railway viaduct 铁路高架桥", "concrete viaduct 混凝土高架桥", "viaduct pier 高架桥墩", "viaduct span 高架桥跨"]},
    {"id": 315, "root": "overpass", "phonetic": "/ˈəʊvəpɑːs/", "pos": "名词", "meaning": "天桥", "mnemonic": "Overpass→over(上)+pass(通过)→天桥", "phrases": ["pedestrian overpass 人行天桥", "highway overpass 公路上跨桥", "overpass bridge 天桥", "overpass structure 天桥结构"]},
    {"id": 316, "root": "underpass", "phonetic": "/ˈʌndəpɑːs/", "pos": "名词", "meaning": "地下通道", "mnemonic": "Underpass→under(下)+pass(通过)→地下通道", "phrases": ["pedestrian underpass 人行地下通道", "railway underpass 铁路下穿通道", "underpass tunnel 下穿隧道", "underpass structure 下穿结构"]},
    {"id": 317, "root": "flyover", "phonetic": "/ˈflaɪəʊvə/", "pos": "名词", "meaning": "跨线桥", "mnemonic": "Flyover→fly(飞)+over(越过)→跨线桥", "phrases": ["highway flyover 公路跨线桥", "flyover ramp 跨线匝道", "flyover junction 跨线立交", "flyover structure 跨线桥结构"]},
    {"id": 318, "root": "interchange", "phonetic": "/ˈɪntətʃeɪndʒ/", "pos": "名词", "meaning": "互通立交", "mnemonic": "Interchange→inter(相互)+change(交换)→互通立交", "phrases": ["highway interchange 互通立交", "trumpet interchange 喇叭形立交", "cloverleaf interchange 苜蓿叶立交", "interchange ramp 立交匝道"]},
    {"id": 319, "root": "roundabout", "phonetic": "/ˈraʊndəbaʊt/", "pos": "名词", "meaning": "环形交叉", "mnemonic": "Roundabout→round(圆)+about(周围)→环形交叉", "phrases": ["roundabout intersection 环形交叉口", "mini roundabout 小型环岛", "roundabout entry 环形入口", "roundabout exit 环形出口"]},
    {"id": 320, "root": "tollgate", "phonetic": "/ˈtəʊlɡeɪt/", "pos": "名词", "meaning": "收费站", "mnemonic": "Tollgate→toll(通行费)+gate(门)→收费站", "phrases": ["highway tollgate 公路收费站", "tollgate plaza 收费广场", "tollgate booth 收费亭", "tollgate barrier 收费栏杆"]},

    # ===== 321-340: Hydraulic Engineering =====
    {"id": 321, "root": "dam", "phonetic": "/dæm/", "pos": "名词", "meaning": "坝", "mnemonic": "Dam→大坝", "phrases": ["concrete dam 混凝土坝", "earth dam 土坝", "arch dam 拱坝", "gravity dam 重力坝"]},
    {"id": 322, "root": "reservoir", "phonetic": "/ˈrezəvwɑː/", "pos": "名词", "meaning": "水库", "mnemonic": "Reservoir→reserve(储备)+oir→水库储备水", "phrases": ["storage reservoir 蓄水库", "service reservoir 清水池", "reservoir capacity 库容", "reservoir level 库水位"]},
    {"id": 323, "root": "spillway", "phonetic": "/ˈspɪlweɪ/", "pos": "名词", "meaning": "溢洪道", "mnemonic": "Spillway→spill(溢出)+way(道)→溢洪道", "phrases": ["service spillway 主溢洪道", "emergency spillway 非常溢洪道", "side channel spillway 侧槽溢洪道", "spillway capacity 溢洪能力"]},
    {"id": 324, "root": "outlet", "phonetic": "/ˈaʊtlet/", "pos": "名词", "meaning": "出水口", "mnemonic": "Outlet→out(出)+let(小)→出水口", "phrases": ["outlet works 泄水建筑物", "outlet structure 出水结构", "outlet conduit 出水管道", "low level outlet 底层泄水孔"]},
    {"id": 325, "root": "intake", "phonetic": "/ˈɪnteɪk/", "pos": "名词", "meaning": "进水口", "mnemonic": "Intake→in(进)+take(取)→进水口", "phrases": ["water intake 进水口", "intake structure 取水建筑物", "tower intake 塔式进水口", "intake gate 进水闸门"]},
    {"id": 326, "root": "sluice", "phonetic": "/sluːs/", "pos": "名词", "meaning": "水闸；泄水孔", "mnemonic": "Sluice→音似\"斯鲁斯\"→水闸", "phrases": ["sluice gate 闸门", "sluice way 泄水道", "sluice valve 闸阀", "bottom sluice 底孔"]},
    {"id": 327, "root": "culvert", "phonetic": "/ˈkʌlvət/", "pos": "名词", "meaning": "涵洞", "mnemonic": "Culvert→culv(管)+ert→涵洞", "phrases": ["box culvert 箱涵", "pipe culvert 管涵", "culvert barrel 涵身", "culvert inlet 涵洞进口"]},
    {"id": 328, "root": "weir", "phonetic": "/wɪər/", "pos": "名词", "meaning": "堰", "mnemonic": "Weir→音似\"威尔\"→堰", "phrases": ["overflow weir 溢流堰", "measuring weir 量水堰", "sharp-crested weir 锐缘堰", "broad-crested weir 宽顶堰"]},
    {"id": 329, "root": "aqueduct", "phonetic": "/ˈækwɪdʌkt/", "pos": "名词", "meaning": "渡槽", "mnemonic": "Aqueduct→aqua(水)+duct(引导)→渡槽", "phrases": ["canal aqueduct 渠渡槽", "trough aqueduct 槽式渡槽", "piped aqueduct 管道渡槽", "aqueduct bridge 渡槽桥"]},
    {"id": 330, "root": "siphon", "phonetic": "/ˈsaɪfn/", "pos": "名词", "meaning": "倒虹吸", "mnemonic": "Siphon→音似\"赛芬\"→倒虹吸", "phrases": ["inverted siphon 倒虹吸", "siphon spillway 虹吸式溢洪道", "siphon breaker 虹吸破坏装置", "siphon conduit 虹吸管"]},
    {"id": 331, "root": "channel", "phonetic": "/ˈtʃænl/", "pos": "名词", "meaning": "渠道", "mnemonic": "Channel→音似\"拆呢\"→拆开地面的渠道", "phrases": ["irrigation channel 灌溉渠道", "drainage channel 排水渠", "main channel 主渠道", "channel lining 渠道衬砌"]},
    {"id": 332, "root": "canal", "phonetic": "/kəˈnæl/", "pos": "名词", "meaning": "运河；渠道", "mnemonic": "Canal→音似\"可耐\"→可耐用的运河", "phrases": ["irrigation canal 灌溉渠", "navigation canal 通航运河", "canal structure 渠道建筑物", "canal lining 渠道衬砌"]},
    {"id": 333, "root": "ditch", "phonetic": "/dɪtʃ/", "pos": "名词", "meaning": "沟", "mnemonic": "Ditch→音似\"地吃\"→地面吃出的沟", "phrases": ["drainage ditch 排水沟", "irrigation ditch 灌溉沟", "ditch lining 沟衬砌", "side ditch 边沟"]},
    {"id": 334, "root": "levee", "phonetic": "/ˈlevi/", "pos": "名词", "meaning": "堤防", "mnemonic": "Levee→音似\"来围\"→来围水的堤防", "phrases": ["river levee 河堤", "levee system 堤防系统", "levee height 堤高", "levee crest 堤顶"]},
    {"id": 335, "root": "revetment", "phonetic": "/rɪˈvetmənt/", "pos": "名词", "meaning": "护坡", "mnemonic": "Revetment→re(再)+vet(防护)+ment→护坡", "phrases": ["slope revetment 边坡护砌", "stone revetment 石护坡", "concrete revetment 混凝土护坡", "revetment wall 护坡墙"]},
    {"id": 336, "root": "apron", "phonetic": "/ˈeɪprən/", "pos": "名词", "meaning": "护坦", "mnemonic": "Apron→围裙→护坦如围裙", "phrases": ["stilling basin apron 消力池护坦", "apron slab 护坦板", "concrete apron 混凝土护坦", "apron protection 护坦防护"]},
    {"id": 337, "root": "stilling", "phonetic": "/ˈstɪlɪŋ/", "pos": "名词", "meaning": "消能", "mnemonic": "Stilling→still(静止)+ing→使水流静止→消能", "phrases": ["stilling basin 消力池", "stilling well 消能井", "stilling pool 消力池", "energy dissipation 消能"]},
    {"id": 338, "root": "headrace", "phonetic": "/ˈhedreɪs/", "pos": "名词", "meaning": "引水渠", "mnemonic": "Headrace→head(头)+race(水道)→引水渠", "phrases": ["headrace tunnel 引水隧洞", "headrace channel 引水渠", "headrace structure 引水建筑物", "headrace intake 引水口"]},
    {"id": 339, "root": "tailrace", "phonetic": "/ˈteɪlreɪs/", "pos": "名词", "meaning": "尾水渠", "mnemonic": "Tailrace→tail(尾)+race(水道)→尾水渠", "phrases": ["tailrace tunnel 尾水隧洞", "tailrace channel 尾水渠", "tailrace structure 尾水建筑物", "tailrace outlet 尾水口"]},
    {"id": 340, "root": "penstock", "phonetic": "/ˈpenstɒk/", "pos": "名词", "meaning": "压力管道", "mnemonic": "Penstock→pen(围栏)+stock(杆)→压力管道", "phrases": ["penstock pipe 压力钢管", "penstock intake 压力管道进口", "penstock valve 压力管道阀门", "surge tank 调压室"]},

    # ===== 341-360: Construction Technology =====
    {"id": 341, "root": "scaffolding", "phonetic": "/ˈskæfəldɪŋ/", "pos": "名词", "meaning": "脚手架", "mnemonic": "Scaffolding→scaffold(脚手架)+ing→脚手架", "phrases": ["tubular scaffolding 钢管脚手架", "scaffolding system 脚手架系统", "scaffolding plank 脚手板", "scaffolding safety 脚手架安全"]},
    {"id": 342, "root": "formwork", "phonetic": "/ˈfɔːmwɜːk/", "pos": "名词", "meaning": "模板", "mnemonic": "Formwork→form(形状)+work→形成形状的工装→模板", "phrases": ["concrete formwork 混凝土模板", "formwork design 模板设计", "slipform 滑模", "formwork removal 拆模"]},
    {"id": 343, "root": "falsework", "phonetic": "/ˈfɔːlswɜːk/", "pos": "名词", "meaning": "支架；临时支撑", "mnemonic": "Falsework→false(假)+work→临时工程→支架", "phrases": ["falsework support 支架支撑", "falsework design 支架设计", "falsework removal 拆除支架", "falsework load 支架荷载"]},
    {"id": 344, "root": "shoring", "phonetic": "/ˈʃɔːrɪŋ/", "pos": "名词", "meaning": "支撑", "mnemonic": "Shoring→shore(支撑)+ing→支撑", "phrases": ["earth shoring 土壁支撑", "shoring system 支撑系统", "raking shore 斜撑", "flying shore 水平支撑"]},
    {"id": 345, "root": "curing", "phonetic": "/ˈkjʊərɪŋ/", "pos": "名词", "meaning": "养护", "mnemonic": "Curing→cure(治愈)+ing→养护", "phrases": ["concrete curing 混凝土养护", "curing period 养护期", "curing compound 养护剂", "steam curing 蒸汽养护"]},
    {"id": 346, "root": "batching", "phonetic": "/ˈbætʃɪŋ/", "pos": "名词", "meaning": "配料", "mnemonic": "Batching→batch(批量)+ing→配料", "phrases": ["batching plant 配料厂", "concrete batching 混凝土配料", "batching accuracy 配料精度", "automatic batching 自动配料"]},
    {"id": 347, "root": "pumping", "phonetic": "/ˈpʌmpɪŋ/", "pos": "名词", "meaning": "泵送", "mnemonic": "Pumping→pump(泵)+ing→泵送", "phrases": ["concrete pumping 混凝土泵送", "pumping station 泵站", "pumping test 抽水试验", "pumping head 泵扬程"]},
    {"id": 348, "root": "vibrating", "phonetic": "/ˈvaɪbreɪtɪŋ/", "pos": "名词", "meaning": "振捣", "mnemonic": "Vibrating→vibrate(振动)+ing→振捣", "phrases": ["vibrating poker 振捣棒", "vibrating screed 振捣刮板", "internal vibrating 内部振捣", "vibrating table 振动台"]},
    {"id": 349, "root": "tremie", "phonetic": "/ˈtremi/", "pos": "名词", "meaning": "导管", "mnemonic": "Tremie→音似\"垂密\"→垂下密实的混凝土→导管", "phrases": ["tremie pipe 导管", "tremie concrete 导管混凝土", "tremie method 导管法", "tremie seal 导管封底"]},
    {"id": 350, "root": "prestressing", "phonetic": "/priːˈstresɪŋ/", "pos": "名词", "meaning": "预应力张拉", "mnemonic": "Prestressing→pre(先)+stress(应力)+ing→预应力", "phrases": ["prestressing tendon 预应力筋", "prestressing jack 张拉千斤顶", "prestressing force 预应力", "post-tensioning 后张法"]},
    {"id": 351, "root": "slipform", "phonetic": "/ˈslɪpfɔːm/", "pos": "名词", "meaning": "滑模", "mnemonic": "Slipform→slip(滑动)+form(模板)→滑模", "phrases": ["slipform construction 滑模施工", "slipform paver 滑模摊铺机", "slipform system 滑模系统", "vertical slipform 垂直滑模"]},
    {"id": 352, "root": "climbing", "phonetic": "/ˈklaɪmɪŋ/", "pos": "名词", "meaning": "爬模", "mnemonic": "Climbing→climb(爬)+ing→爬模", "phrases": ["climbing formwork 爬模", "climbing scaffold 爬架", "climbing crane 爬升式起重机", "climbing system 爬升系统"]},
    {"id": 353, "root": "tableform", "phonetic": "/ˈteɪblfɔːm/", "pos": "名词", "meaning": "台模", "mnemonic": "Tableform→table(台)+form(模)→台模", "phrases": ["table formwork 台模", "flying tableform 飞模", "tableform system 台模系统", "movable tableform 移动台模"]},
    {"id": 354, "root": "tunneling", "phonetic": "/ˈtʌnəlɪŋ/", "pos": "名词", "meaning": "隧道开挖", "mnemonic": "Tunneling→tunnel(隧道)+ing→隧道开挖", "phrases": ["mechanical tunneling 机械掘进", "tunneling machine 掘进机", "tunneling method 开挖方法", "tunneling support 开挖支护"]},
    {"id": 355, "root": "blasting", "phonetic": "/ˈblɑːstɪŋ/", "pos": "名词", "meaning": "爆破", "mnemonic": "Blasting→blast(爆炸)+ing→爆破", "phrases": ["controlled blasting 控制爆破", "blasting hole 炮孔", "blasting charge 装药", "blasting vibration 爆破振动"]},
    {"id": 356, "root": "drilling", "phonetic": "/ˈdrɪlɪŋ/", "pos": "名词", "meaning": "钻孔", "mnemonic": "Drilling→drill(钻)+ing→钻孔", "phrases": ["rotary drilling 旋转钻探", "percussion drilling 冲击钻探", "drilling rig 钻机", "drilling fluid 钻井液"]},
    {"id": 357, "root": "welding", "phonetic": "/ˈweldɪŋ/", "pos": "名词", "meaning": "焊接", "mnemonic": "Welding→weld(焊接)+ing→焊接", "phrases": ["arc welding 电弧焊", "gas welding 气焊", "welding joint 焊接接头", "welding seam 焊缝"]},
    {"id": 358, "root": "riveting", "phonetic": "/ˈrɪvɪtɪŋ/", "pos": "名词", "meaning": "铆接", "mnemonic": "Riveting→rivet(铆钉)+ing→铆接", "phrases": ["hot riveting 热铆", "cold riveting 冷铆", "riveting joint 铆接接头", "riveting gun 铆钉枪"]},
    {"id": 359, "root": "bolting", "phonetic": "/ˈbəʊltɪŋ/", "pos": "名词", "meaning": "螺栓连接", "mnemonic": "Bolting→bolt(螺栓)+ing→螺栓连接", "phrases": ["high-strength bolting 高强螺栓连接", "bolting connection 螺栓连接", "bolting pattern 螺栓布置", "torque bolting 扭矩螺栓连接"]},
    {"id": 360, "root": "hoisting", "phonetic": "/ˈhɔɪstɪŋ/", "pos": "名词", "meaning": "吊装", "mnemonic": "Hoisting→hoist(提升)+ing→吊装", "phrases": ["hoisting equipment 吊装设备", "hoisting crane 吊装起重机", "hoisting operation 吊装作业", "hoisting capacity 吊装能力"]},
]

print(f"Defined {len(new_roots_raw)} new roots")

# Generate full entries
def generate_full_entry(root_info):
    pos_map = {"名词": "n.", "动词": "v.", "形容词": "adj.", "副词": "adv.", "缩写": "abbr.", "名词/动词": "n./v."}

    entry = {
        "id": root_info["id"],
        "root": root_info["root"],
        "phonetic": root_info["phonetic"],
        "partOfSpeech": root_info["pos"],
        "frequency": root_info["id"],
        "category": "土木",
        "words": [{
            "word": root_info["root"],
            "phonetic": root_info["phonetic"],
            "partOfSpeech": pos_map.get(root_info["pos"], "n."),
            "meaning": root_info["meaning"],
            "memoryTip": root_info["mnemonic"].split("→")[1] if "→" in root_info["mnemonic"] else root_info["root"],
            "root": root_info["root"],
            "rootPhonetic": root_info["phonetic"],
            "rootMeaning": root_info["meaning"],
            "rootPhrases": root_info["phrases"],
            "wordPhrases": root_info["phrases"]
        }],
        "phrases": root_info["phrases"],
        "mnemonic": root_info["mnemonic"],
        "meaning": root_info["meaning"]
    }

    # Add more words from phrases
    for i in range(1, min(4, len(root_info["phrases"]))):
        phrase = root_info["phrases"][i]
        parts = phrase.split(" ", 1)
        word_text = parts[0]
        meaning_text = parts[1] if len(parts) > 1 else root_info["meaning"]

        entry["words"].append({
            "word": word_text,
            "phonetic": root_info["phonetic"],
            "partOfSpeech": "n.",
            "meaning": meaning_text,
            "memoryTip": f"{root_info['root']} + {word_text}",
            "root": root_info["root"],
            "rootPhonetic": root_info["phonetic"],
            "rootMeaning": root_info["meaning"],
            "rootPhrases": root_info["phrases"],
            "wordPhrases": root_info["phrases"]
        })

    return entry

# Generate all entries
new_entries = [generate_full_entry(root) for root in new_roots_raw]
print(f"Generated {len(new_entries)} full entries")

# Append to existing data
data.extend(new_entries)
print(f"Total entries after append: {len(data)}")

# Save back to file
with open(file_path, 'w', encoding='utf-8') as f:
    json.dump(data, f, ensure_ascii=False, indent=2)

print("Data saved successfully!")
print(f"ID range: {data[0]['id']} - {data[-1]['id']}")
