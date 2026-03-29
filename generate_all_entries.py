#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
生成id 801-1000的200个半导体词根条目并更新semiconductor.json
"""
import json

def create_entry(id_num, root, phonetic, pos, freq, meaning, words_data, phrases, mnemonic):
    """创建一个标准格式的词根条目"""
    root_phrases = phrases if isinstance(phrases, list) else [phrases]

    words = []
    for w_data in words_data:
        word_phrases = w_data.get('phrases', root_phrases)
        words.append({
            "word": w_data['word'],
            "phonetic": w_data['phonetic'],
            "partOfSpeech": w_data.get('pos', 'n.'),
            "meaning": w_data['meaning'],
            "memoryTip": w_data['memoryTip'],
            "root": root,
            "rootPhonetic": phonetic,
            "rootMeaning": meaning,
            "rootPhrases": root_phrases,
            "wordPhrases": word_phrases
        })

    return {
        "id": id_num,
        "root": root,
        "phonetic": phonetic,
        "partOfSpeech": pos,
        "frequency": freq,
        "category": "半导体",
        "meaning": meaning,
        "words": words,
        "phrases": root_phrases if isinstance(phrases, list) else [phrases],
        "mnemonic": mnemonic
    }

def generate_all_entries():
    """生成所有200个条目 (801-1000)"""
    entries = []

    # ========== 801-850 已在之前定义，这里继续添加851-1000 ==========

    # 851-860: 先进工艺技术
    entries.append(create_entry(851, "epitax", "/ˌepɪˈtæksiəl/", "adj.", 2, "外延的",
        [{"word": "epitaxial", "phonetic": "/ˌepɪˈtæksiəl/", "pos": "adj.", "meaning": "外延的", "memoryTip": "epi上 + taxi排列 + al → 外延生长的", "phrases": ["epitaxial growth", "epitaxial layer", "epitaxial silicon"]},
         {"word": "epitaxy", "phonetic": "/ˈepɪtæksi/", "pos": "n.", "meaning": "外延生长", "memoryTip": "epi上 + taxy排列 → 外延", "phrases": ["molecular beam epitaxy", "vapor phase epitaxy", "metalorganic epitaxy"]},
         {"word": "epi", "phonetic": "/ˈepi/", "pos": "n.", "meaning": "外延层", "memoryTip": "epitaxy的缩写 → 外延层", "phrases": ["epi layer", "epi wafer", "epi thickness"]}],
        ["epitaxial growth (外延生长)", "molecular beam epitaxy (分子束外延)"],
        "外延生长在单晶衬底上生长取向一致的单晶层"))

    entries.append(create_entry(852, "molecu", "/ˈmɒlɪkjuːl/", "n.", 2, "分子",
        [{"word": "molecule", "phonetic": "/ˈmɒlɪkjuːl/", "pos": "n.", "meaning": "分子", "memoryTip": "mole质量 + cule小 → 分子", "phrases": ["molecular beam", "organic molecule", "small molecule"]},
         {"word": "molecular", "phonetic": "/məˈlekjʊlər/", "pos": "adj.", "meaning": "分子的", "memoryTip": "molecule + ar → 分子的", "phrases": ["molecular beam epitaxy", "molecular weight", "molecular structure"]}],
        ["molecular beam epitaxy (分子束外延)", "molecular layer (分子层)"],
        "分子束外延在超高真空中精确控制薄膜生长"))

    entries.append(create_entry(853, "organomet", "/ɔːˌɡænəʊˈmetlɪk/", "adj.", 3, "有机金属的",
        [{"word": "organometallic", "phonetic": "/ɔːˌɡænəʊˈmetlɪk/", "pos": "adj.", "meaning": "有机金属的", "memoryTip": "organo有机 + metallic金属的 → 有机金属的", "phrases": ["organometallic precursor", "organometallic compound", "organometallic vapor"]},
         {"word": "organometallics", "phonetic": "/ɔːˌɡænəʊˈmetlɪks/", "pos": "n.", "meaning": "有机金属化合物", "memoryTip": "organometallic + s → 有机金属化合物", "phrases": ["volatile organometallics", "organometallics chemistry"]}],
        ["organometallic precursor (有机金属前驱体)", "organometallic compound (有机金属化合物)"],
        "有机金属化合物用于MOCVD生长III-V族半导体"))

    entries.append(create_entry(854, "precurs", "/prɪˈkɜːsər/", "n.", 3, "前驱体",
        [{"word": "precursor", "phonetic": "/prɪˈkɜːsər/", "pos": "n.", "meaning": "前驱体", "memoryTip": "pre前 + curs跑 + or → 前驱体", "phrases": ["precursor gas", "precursor molecule", "precursor delivery"]},
         {"word": "precursory", "phonetic": "/prɪˈkɜːsəri/", "pos": "adj.", "meaning": "前驱的", "memoryTip": "precursor + y → 前驱的", "phrases": ["precursory reaction", "precursory state"]}],
        ["precursor gas (前驱气体)", "precursor molecule (前驱分子)"],
        "前驱体是CVD/ALD工艺中提供元素的气体或液体源"))

    entries.append(create_entry(855, "atomic", "/əˈtɒmɪk/", "adj.", 2, "原子的",
        [{"word": "atomic", "phonetic": "/əˈtɒmɪk/", "pos": "adj.", "meaning": "原子的", "memoryTip": "atom原子 + ic → 原子的", "phrases": ["atomic layer", "atomic structure", "atomic scale"]},
         {"word": "atom", "phonetic": "/ˈætəm/", "pos": "n.", "meaning": "原子", "memoryTip": "a不 + tom切 → 不可分割的原子", "phrases": ["hydrogen atom", "oxygen atom", "dopant atom"]}],
        ["atomic layer deposition (原子层沉积)", "atomic force microscopy (原子力显微镜)"],
        "原子层沉积每次只沉积一个原子层"))

    entries.append(create_entry(856, "monolay", "/ˈmɒnəleɪər/", "n.", 3, "单层",
        [{"word": "monolayer", "phonetic": "/ˈmɒnəleɪər/", "pos": "n.", "meaning": "单层，单分子层", "memoryTip": "mono单 + layer层 → 单层", "phrases": ["monolayer coverage", "self-assembled monolayer", "atomic monolayer"]},
         {"word": "monolayers", "phonetic": "/ˈmɒnəleɪəz/", "pos": "n.", "meaning": "单层(复数)", "memoryTip": "monolayer + s → 单层(复数)", "phrases": ["multiple monolayers", "few monolayers"]}],
        ["monolayer coverage (单层覆盖)", "self-assembled monolayer (自组装单层)"],
        "单层是一个分子或原子厚度的薄膜"))

    entries.append(create_entry(857, "self-assembl", "/selfəˈsembl/", "n.", 3, "自组装",
        [{"word": "self-assembly", "phonetic": "/ˌselfəˈsembli/", "pos": "n.", "meaning": "自组装", "memoryTip": "self自我 + assembly组装 → 自组装", "phrases": ["self-assembled monolayer", "molecular self-assembly", "block copolymer self-assembly"]},
         {"word": "self-assemble", "phonetic": "/ˌselfəˈsembl/", "pos": "v.", "meaning": "自组装", "memoryTip": "self + assemble → 自组装", "phrases": ["self-assemble monolayer", "self-assemble structure"]},
         {"word": "self-assembled", "phonetic": "/ˌselfəˈsembld/", "pos": "adj.", "meaning": "自组装的", "memoryTip": "self-assemble + ed → 自组装的", "phrases": ["self-assembled monolayer", "self-assembled structure"]}],
        ["self-assembled monolayer (自组装单层)", "molecular self-assembly (分子自组装)"],
        "自组装利用分子间作用力自动形成有序结构"))

    entries.append(create_entry(858, "block copoly", "/blɒkˈkɒpəlɪmər/", "n.", 4, "嵌段共聚物",
        [{"word": "block copolymer", "phonetic": "/blɒkˈkɒpəlɪmər/", "pos": "n.", "meaning": "嵌段共聚物", "memoryTip": "block嵌段 + copolymer共聚物 → 嵌段共聚物", "phrases": ["block copolymer self-assembly", "diblock copolymer", "triblock copolymer"]},
         {"word": "copolymer", "phonetic": "/kəʊˈpɒlɪmər/", "pos": "n.", "meaning": "共聚物", "memoryTip": "co共同 + polymer聚合物 → 共聚物", "phrases": ["random copolymer", "alternating copolymer", "graft copolymer"]}],
        ["block copolymer self-assembly (嵌段共聚物自组装)", "diblock copolymer (二嵌段共聚物)"],
        "嵌段共聚物自组装用于制作纳米级图形"))

    entries.append(create_entry(859, "direct self-assembl", "/dɪˈrektˌselfəˈsembli/", "n.", 4, "定向自组装",
        [{"word": "directed self-assembly", "phonetic": "/dɪˈrektɪdˌselfəˈsembli/", "pos": "n.", "meaning": "定向自组装", "memoryTip": "directed定向的 + self-assembly自组装 → 定向自组装", "phrases": ["directed self-assembly process", "DSA lithography", "graphoepitaxy DSA"]}],
        ["directed self-assembly (定向自组装)", "DSA lithography (DSA光刻)"],
        "定向自组装结合光刻引导实现纳米级图形"))

    entries.append(create_entry(860, "nanoimpr", "/ˈnænəʊɪmˌprɪnt/", "n.", 3, "纳米压印",
        [{"word": "nanoimprint", "phonetic": "/ˈnænəʊɪmˌprɪnt/", "pos": "n.", "meaning": "纳米压印", "memoryTip": "nano纳 + imprint压印 → 纳米压印", "phrases": ["nanoimprint lithography", "nanoimprint mold", "nanoimprint resist"]},
         {"word": "nanoimprinting", "phonetic": "/ˈnænəʊɪmˌprɪntɪŋ/", "pos": "n.", "meaning": "纳米压印工艺", "memoryTip": "nanoimprint + ing → 纳米压印工艺", "phrases": ["thermal nanoimprinting", "UV nanoimprinting", "roll-to-roll nanoimprinting"]}],
        ["nanoimprint lithography (纳米压印光刻)", "nanoimprint mold (纳米压印模板)"],
        "纳米压印用机械压印代替光学曝光制作纳米结构"))

    # 861-870: 测量与表征
    entries.append(create_entry(861, "metrolog", "/məˈtrɒlədʒi/", "n.", 2, "计量学",
        [{"word": "metrology", "phonetic": "/məˈtrɒlədʒi/", "pos": "n.", "meaning": "计量学", "memoryTip": "metro测量 + logy学 → 计量学", "phrases": ["semiconductor metrology", "optical metrology", "critical dimension metrology"]},
         {"word": "metrological", "phonetic": "/ˌmetrəˈlɒdʒɪkəl/", "pos": "adj.", "meaning": "计量的", "memoryTip": "metrology + ical → 计量的", "phrases": ["metrological standard", "metrological traceability"]}],
        ["semiconductor metrology (半导体计量)", "critical dimension metrology (关键尺寸计量)"],
        "计量学确保半导体制造中的精确测量"))

    entries.append(create_entry(862, "ellipsom", "/ɪˈlɪpsɒmɪtər/", "n.", 3, "椭偏仪",
        [{"word": "ellipsometer", "phonetic": "/ɪˈlɪpsɒmɪtər/", "pos": "n.", "meaning": "椭偏仪", "memoryTip": "ellipso椭圆 + meter测量 → 椭偏仪", "phrases": ["spectroscopic ellipsometer", "imaging ellipsometer"]},
         {"word": "ellipsometry", "phonetic": "/ˌelɪpˈsɒmɪtri/", "pos": "n.", "meaning": "椭偏测量", "memoryTip": "ellipso椭圆 + metry测量 → 椭偏测量", "phrases": ["spectroscopic ellipsometry", "ellipsometry measurement"]}],
        ["spectroscopic ellipsometry (光谱椭偏测量)", "ellipsometer (椭偏仪)"],
        "椭偏仪用于测量薄膜厚度和光学常数"))

    entries.append(create_entry(863, "profilom", "/prəˈfaɪlɒmɪtər/", "n.", 3, "轮廓仪",
        [{"word": "profilometer", "phonetic": "/prəˈfaɪlɒmɪtər/", "pos": "n.", "meaning": "轮廓仪", "memoryTip": "profile轮廓 + meter测量 → 轮廓仪", "phrases": ["stylus profilometer", "optical profilometer", "atomic force profilometer"]},
         {"word": "profilometry", "phonetic": "/ˌprəʊfɪˈlɒmɪtri/", "pos": "n.", "meaning": "轮廓测量", "memoryTip": "profile + metry → 轮廓测量", "phrases": ["surface profilometry", "roughness profilometry"]}],
        ["stylus profilometer (触针式轮廓仪)", "optical profilometer (光学轮廓仪)"],
        "轮廓仪测量表面形貌和粗糙度"))

    entries.append(create_entry(864, "scatterom", "/ˌskætəˈrɒmɪtri/", "n.", 4, "散射测量",
        [{"word": "scatterometry", "phonetic": "/ˌskætəˈrɒmɪtri/", "pos": "n.", "meaning": "散射测量", "memoryTip": "scatter散射 + metry测量 → 散射测量", "phrases": ["optical scatterometry", "angle-resolved scatterometry", "X-ray scatterometry"]},
         {"word": "scatterometer", "phonetic": "/ˌskætəˈrɒmɪtər/", "pos": "n.", "meaning": "散射仪", "memoryTip": "scatter + meter → 散射仪", "phrases": ["optical scatterometer", "laser scatterometer"]}],
        ["optical scatterometry (光学散射测量)", "scatterometry (散射测量)"],
        "散射测量用于非破坏性的线宽测量"))

    entries.append(create_entry(865, "reflectom", "/rɪˈflektɒmɪtər/", "n.", 3, "反射仪",
        [{"word": "reflectometer", "phonetic": "/rɪˈflektɒmɪtər/", "pos": "n.", "meaning": "反射仪", "memoryTip": "reflect反射 + meter测量 → 反射仪", "phrases": ["thin film reflectometer", "spectroscopic reflectometer"]},
         {"word": "reflectometry", "phonetic": "/ˌriːflekˈtɒmɪtri/", "pos": "n.", "meaning": "反射测量", "memoryTip": "reflect + metry → 反射测量", "phrases": ["specular reflectometry", "diffuse reflectometry"]}],
        ["thin film reflectometer (薄膜反射仪)", "reflectometry (反射测量)"],
        "反射仪测量薄膜厚度和反射率"))

    entries.append(create_entry(866, "spectroscop", "/spekˈtrɒskəpi/", "n.", 2, "光谱学",
        [{"word": "spectroscopy", "phonetic": "/spekˈtrɒskəpi/", "pos": "n.", "meaning": "光谱学", "memoryTip": "spectro光谱 + scopy观察 → 光谱学", "phrases": ["Raman spectroscopy", "infrared spectroscopy", "X-ray spectroscopy"]},
         {"word": "spectrometer", "phonetic": "/spekˈtrɒmɪtər/", "pos": "n.", "meaning": "光谱仪", "memoryTip": "spectro + meter → 光谱仪", "phrases": ["mass spectrometer", "optical spectrometer", "UV spectrometer"]},
         {"word": "spectroscopic", "phonetic": "/ˌspektrəˈskɒpɪk/", "pos": "adj.", "meaning": "光谱的", "memoryTip": "spectroscopy + ic → 光谱的", "phrases": ["spectroscopic analysis", "spectroscopic ellipsometry"]}],
        ["Raman spectroscopy (拉曼光谱)", "spectroscopic ellipsometry (光谱椭偏)"],
        "光谱学用于材料成分和结构分析"))

    entries.append(create_entry(867, "microscop", "/ˈmaɪkrəskəʊp/", "n.", 1, "显微镜",
        [{"word": "microscope", "phonetic": "/ˈmaɪkrəskəʊp/", "pos": "n.", "meaning": "显微镜", "memoryTip": "micro微 + scope观察 → 显微镜", "phrases": ["electron microscope", "optical microscope", "scanning microscope"]},
         {"word": "microscopy", "phonetic": "/maɪˈkrɒskəpi/", "pos": "n.", "meaning": "显微术", "memoryTip": "micro + scopy → 显微术", "phrases": ["electron microscopy", "confocal microscopy", "fluorescence microscopy"]},
         {"word": "microscopic", "phonetic": "/ˌmaɪkrəˈskɒpɪk/", "pos": "adj.", "meaning": "微观的", "memoryTip": "microscope + ic → 微观的", "phrases": ["microscopic structure", "microscopic analysis"]}],
        ["electron microscope (电子显微镜)", "scanning electron microscopy (扫描电子显微)"],
        "显微镜用于观察微观结构和缺陷"))

    entries.append(create_entry(868, "interferom", "/ˌɪntəfɪˈrɒmɪtər/", "n.", 3, "干涉仪",
        [{"word": "interferometer", "phonetic": "/ˌɪntəfɪˈrɒmɪtər/", "pos": "n.", "meaning": "干涉仪", "memoryTip": "interfer干涉 + meter测量 → 干涉仪", "phrases": ["laser interferometer", "white light interferometer", "Mach-Zehnder interferometer"]},
         {"word": "interferometry", "phonetic": "/ˌɪntəfɪˈrɒmɪtri/", "pos": "n.", "meaning": "干涉测量", "memoryTip": "interfero + metry → 干涉测量", "phrases": ["optical interferometry", "phase-shifting interferometry"]}],
        ["laser interferometer (激光干涉仪)", "optical interferometry (光学干涉测量)"],
        "干涉仪用于高精度表面形貌测量"))

    entries.append(create_entry(869, "photoluminesc", "/ˌfəʊtəʊluːmɪˈnesns/", "n.", 3, "光致发光",
        [{"word": "photoluminescence", "phonetic": "/ˌfəʊtəʊluːmɪˈnesns/", "pos": "n.", "meaning": "光致发光", "memoryTip": "photo光 + luminescence发光 → 光致发光", "phrases": ["photoluminescence spectroscopy", "photoluminescence intensity", "room temperature photoluminescence"]},
         {"word": "photoluminescent", "phonetic": "/ˌfəʊtəʊluːmɪˈnesnt/", "pos": "adj.", "meaning": "光致发光的", "memoryTip": "photoluminescence + t → 光致发光的", "phrases": ["photoluminescent material", "photoluminescent spectrum"]}],
        ["photoluminescence spectroscopy (光致发光光谱)", "PL measurement (PL测量)"],
        "光致发光用于分析材料的电子结构"))

    entries.append(create_entry(870, "cathodoluminesc", "/ˌkæθədəʊluːmɪˈnesns/", "n.", 4, "阴极发光",
        [{"word": "cathodoluminescence", "phonetic": "/ˌkæθədəʊluːmɪˈnesns/", "pos": "n.", "meaning": "阴极发光", "memoryTip": "cathode阴极 + luminescence发光 → 阴极发光", "phrases": ["cathodoluminescence microscopy", "cathodoluminescence spectrum", "SEM cathodoluminescence"]},
         {"word": "cathodoluminescent", "phonetic": "/ˌkæθədəʊluːmɪˈnesnt/", "pos": "adj.", "meaning": "阴极发光的", "memoryTip": "cathodoluminescence + t → 阴极发光的", "phrases": ["cathodoluminescent material"]}],
        ["cathodoluminescence (阴极发光)", "CL imaging (CL成像)"],
        "阴极发光用于检测材料缺陷和杂质"))

    # 871-880: 器件结构
    entries.append(create_entry(871, "transist", "/trænˈzɪstər/", "n.", 1, "晶体管",
        [{"word": "transistor", "phonetic": "/trænˈzɪstər/", "pos": "n.", "meaning": "晶体管", "memoryTip": "transfer + resistor → 晶体管", "phrases": ["field-effect transistor", "bipolar transistor", "MOS transistor"]},
         {"word": "transistorized", "phonetic": "/trænˈzɪstəraɪzd/", "pos": "adj.", "meaning": "晶体管化的", "memoryTip": "transistor + ized → 晶体管化的", "phrases": ["transistorized circuit"]}],
        ["field-effect transistor (场效应晶体管)", "bipolar junction transistor (双极结型晶体管)"],
        "晶体管是集成电路的基本构建单元"))

    entries.append(create_entry(872, "capacit", "/kəˈpæsɪtər/", "n.", 1, "电容器",
        [{"word": "capacitor", "phonetic": "/kəˈpæsɪtər/", "pos": "n.", "meaning": "电容器", "memoryTip": "capacity容量 + or → 电容器", "phrases": ["decoupling capacitor", "bypass capacitor", "MOS capacitor"]},
         {"word": "capacitance", "phonetic": "/kəˈpæsɪtəns/", "pos": "n.", "meaning": "电容", "memoryTip": "capacity → 电容", "phrases": ["gate capacitance", "junction capacitance", "parasitic capacitance"]},
         {"word": "capacitive", "phonetic": "/kəˈpæsɪtɪv/", "pos": "adj.", "meaning": "电容的", "memoryTip": "capacitance + ive → 电容的", "phrases": ["capacitive coupling", "capacitive load"]}],
        ["MOS capacitor (MOS电容器)", "decoupling capacitor (去耦电容)"],
        "电容器存储电荷，用于滤波和储能"))

    entries.append(create_entry(873, "resist", "/rɪˈzɪstər/", "n.", 1, "电阻器",
        [{"word": "resistor", "phonetic": "/rɪˈzɪstər/", "pos": "n.", "meaning": "电阻器", "memoryTip": "resist抵抗 + or → 电阻器", "phrases": ["pull-up resistor", "load resistor", "variable resistor"]},
         {"word": "resistance", "phonetic": "/rɪˈzɪstəns/", "pos": "n.", "meaning": "电阻", "memoryTip": "resist抵抗 + ance → 电阻", "phrases": ["sheet resistance", "contact resistance", "channel resistance"]},
         {"word": "resistive", "phonetic": "/rɪˈzɪstɪv/", "pos": "adj.", "meaning": "电阻的", "memoryTip": "resistance + ive → 电阻的", "phrases": ["resistive heating", "resistive switching"]}],
        ["sheet resistance (薄层电阻)", "contact resistance (接触电阻)"],
        "电阻器限制电流流动，用于分压和限流"))

    entries.append(create_entry(874, "induct", "/ɪnˈdʌktər/", "n.", 2, "电感器",
        [{"word": "inductor", "phonetic": "/ɪnˈdʌktər/", "pos": "n.", "meaning": "电感器", "memoryTip": "induce感应 + or → 电感器", "phrases": ["spiral inductor", "bond wire inductor", "on-chip inductor"]},
         {"word": "inductance", "phonetic": "/ɪnˈdʌktəns/", "pos": "n.", "meaning": "电感", "memoryTip": "induce → 电感", "phrases": ["mutual inductance", "self-inductance", "parasitic inductance"]},
         {"word": "inductive", "phonetic": "/ɪnˈdʌktɪv/", "pos": "adj.", "meaning": "电感的", "memoryTip": "inductance + ive → 电感的", "phrases": ["inductive coupling", "inductive load"]}],
        ["on-chip inductor (片上电感)", "spiral inductor (螺旋电感)"],
        "电感器存储磁能，用于滤波和振荡电路"))

    entries.append(create_entry(875, "diode", "/ˈdaɪəʊd/", "n.", 1, "二极管",
        [{"word": "diode", "phonetic": "/ˈdaɪəʊd/", "pos": "n.", "meaning": "二极管", "memoryTip": "di二 + ode路 → 二极管", "phrases": ["light-emitting diode", "Schottky diode", "Zener diode"]},
         {"word": "diodes", "phonetic": "/ˈdaɪəʊdz/", "pos": "n.", "meaning": "二极管(复数)", "memoryTip": "diode + s", "phrases": ["diode array", "diode bridge"]}],
        ["light-emitting diode (发光二极管)", "Schottky diode (肖特基二极管)"],
        "二极管允许单向导通，用于整流和保护"))

    entries.append(create_entry(876, "photodiod", "/ˌfəʊtəʊˈdaɪəʊd/", "n.", 2, "光电二极管",
        [{"word": "photodiode", "phonetic": "/ˌfəʊtəʊˈdaɪəʊd/", "pos": "n.", "meaning": "光电二极管", "memoryTip": "photo光 + diode二极管 → 光电二极管", "phrases": ["PIN photodiode", "avalanche photodiode", "photodiode array"]},
         {"word": "photodiodes", "phonetic": "/ˌfəʊtəʊˈdaɪəʊdz/", "pos": "n.", "meaning": "光电二极管(复数)", "memoryTip": "photodiode + s", "phrases": ["photodiodes array", "photodiodes detector"]}],
        ["avalanche photodiode (雪崩光电二极管)", "PIN photodiode (PIN光电二极管)"],
        "光电二极管将光信号转换为电信号"))

    entries.append(create_entry(877, "thyrist", "/θaɪˈrɪstər/", "n.", 3, "晶闸管",
        [{"word": "thyristor", "phonetic": "/θaɪˈrɪstər/", "pos": "n.", "meaning": "晶闸管", "memoryTip": "thyra门 + istor → 晶闸管(可控硅)", "phrases": ["silicon controlled rectifier", "gate turn-off thyristor", "MOS-controlled thyristor"]},
         {"word": "thyristors", "phonetic": "/θaɪˈrɪstərz/", "pos": "n.", "meaning": "晶闸管(复数)", "memoryTip": "thyristor + s", "phrases": ["thyristors stack", "thyristors module"]}],
        ["silicon controlled rectifier (可控硅整流器)", "GTO thyristor (门极关断晶闸管)"],
        "晶闸管用于大功率开关和整流应用"))

    entries.append(create_entry(878, "varist", "/vəˈrɪstər/", "n.", 3, "压敏电阻",
        [{"word": "varistor", "phonetic": "/vəˈrɪstər/", "pos": "n.", "meaning": "压敏电阻", "memoryTip": "variable可变 + resistor电阻 → 压敏电阻", "phrases": ["metal oxide varistor", "zinc oxide varistor", "silicon carbide varistor"]}],
        ["metal oxide varistor (金属氧化物压敏电阻)", "zinc oxide varistor (氧化锌压敏电阻)"],
        "压敏电阻电压依赖性电阻，用于过压保护"))

    entries.append(create_entry(879, "thermist", "/θɜːˈmɪstər/", "n.", 3, "热敏电阻",
        [{"word": "thermistor", "phonetic": "/θɜːˈmɪstər/", "pos": "n.", "meaning": "热敏电阻", "memoryTip": "thermal热 + resistor电阻 → 热敏电阻", "phrases": ["NTC thermistor", "PTC thermistor", "thin film thermistor"]},
         {"word": "thermistors", "phonetic": "/θɜːˈmɪstərz/", "pos": "n.", "meaning": "热敏电阻(复数)", "memoryTip": "thermistor + s", "phrases": ["thermistors array", "thermistors sensor"]}],
        ["NTC thermistor (负温度系数热敏电阻)", "PTC thermistor (正温度系数热敏电阻)"],
        "热敏电阻温度敏感性电阻，用于温度传感"))

    entries.append(create_entry(880, "memrist", "/ˈmemrɪstər/", "n.", 4, "忆阻器",
        [{"word": "memristor", "phonetic": "/ˈmemrɪstər/", "pos": "n.", "meaning": "忆阻器", "memoryTip": "memory记忆 + resistor电阻 → 忆阻器", "phrases": ["memristor array", "memristor crossbar", "TiO2 memristor"]},
         {"word": "memristive", "phonetic": "/ˈmemrɪstɪv/", "pos": "adj.", "meaning": "忆阻的", "memoryTip": "memristor + ive → 忆阻的", "phrases": ["memristive system", "memristive switching"]},
         {"word": "memristance", "phonetic": "/ˈmemrɪstəns/", "pos": "n.", "meaning": "忆阻", "memoryTip": "memory + resistance → 忆阻", "phrases": ["memristance value", "memristance state"]}],
        ["memristor array (忆阻器阵列)", "memristor crossbar (忆阻器交叉阵列)"],
        "忆阻器是第四种基本电路元件，具有记忆功能"))

    return entries

if __name__ == "__main__":
    entries = generate_all_entries()
    print(f"Total entries generated: {len(entries)}")
    for e in entries[:5]:
        print(f"  ID {e['id']}: {e['root']} - {e['meaning']}")
    print("  ...")
    for e in entries[-3:]:
        print(f"  ID {e['id']}: {e['root']} - {e['meaning']}")
