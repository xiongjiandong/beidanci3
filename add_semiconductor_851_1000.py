#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
继续添加半导体词根条目（851-1000）
"""
import json

def create_entry(id_num, root, phonetic, pos, freq, meaning, words_data, phrases, mnemonic):
    """创建词根条目"""
    words = []
    for w in words_data:
        words.append({
            "word": w[0],
            "phonetic": w[1],
            "partOfSpeech": w[2],
            "meaning": w[3],
            "memoryTip": w[4],
            "root": root,
            "rootPhonetic": phonetic,
            "rootMeaning": meaning,
            "rootPhrases": phrases,
            "wordPhrases": w[5] if len(w) > 5 else phrases
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
        "phrases": phrases,
        "mnemonic": mnemonic
    }

def main():
    # 读取现有数据
    print("Reading existing data...")
    with open('f:/claudeanli/beidanci3/src/data/semiconductor.json', 'r', encoding='utf-8') as f:
        existing_data = json.load(f)

    max_id = max(e['id'] for e in existing_data)
    print(f"Existing entries: {len(existing_data)}, Max ID: {max_id}")

    new_entries = []

    # ========== 851-900: 测量与表征、器件结构 ==========
    entries_851_900 = [
        # 851-860: 测量与表征
        (851, "metrolog", "/məˈtrɒlədʒi/", "n.", 2, "计量学", [
            ("metrology", "/məˈtrɒlədʒi/", "n.", "计量学", "metro测量 + logy学 → 计量学", ["semiconductor metrology", "optical metrology", "critical dimension metrology"]),
            ("metrological", "/ˌmetrəˈlɒdʒɪkəl/", "adj.", "计量的", "metrology + ical → 计量的", ["metrological standard", "metrological traceability"])
        ], ["semiconductor metrology (半导体计量)", "critical dimension metrology (关键尺寸计量)"], "计量学确保半导体制造中的精确测量"),

        (852, "ellipsom", "/ɪˈlɪpsɒmɪtər/", "n.", 3, "椭偏仪", [
            ("ellipsometer", "/ɪˈlɪpsɒmɪtər/", "n.", "椭偏仪", "ellipso椭圆 + meter测量 → 椭偏仪", ["spectroscopic ellipsometer", "imaging ellipsometer"]),
            ("ellipsometry", "/ˌelɪpˈsɒmɪtri/", "n.", "椭偏测量", "ellipso椭圆 + metry测量 → 椭偏测量", ["spectroscopic ellipsometry", "ellipsometry measurement"])
        ], ["spectroscopic ellipsometry (光谱椭偏测量)", "ellipsometer (椭偏仪)"], "椭偏仪用于测量薄膜厚度和光学常数"),

        (853, "profilom", "/prəˈfaɪlɒmɪtər/", "n.", 3, "轮廓仪", [
            ("profilometer", "/prəˈfaɪlɒmɪtər/", "n.", "轮廓仪", "profile轮廓 + meter测量 → 轮廓仪", ["stylus profilometer", "optical profilometer", "atomic force profilometer"]),
            ("profilometry", "/ˌprəʊfɪˈlɒmɪtri/", "n.", "轮廓测量", "profile + metry → 轮廓测量", ["surface profilometry", "roughness profilometry"])
        ], ["stylus profilometer (触针式轮廓仪)", "optical profilometer (光学轮廓仪)"], "轮廓仪测量表面形貌和粗糙度"),

        (854, "scatterom", "/ˌskætəˈrɒmɪtri/", "n.", 4, "散射测量", [
            ("scatterometry", "/ˌskætəˈrɒmɪtri/", "n.", "散射测量", "scatter散射 + metry测量 → 散射测量", ["optical scatterometry", "angle-resolved scatterometry", "X-ray scatterometry"]),
            ("scatterometer", "/ˌskætəˈrɒmɪtər/", "n.", "散射仪", "scatter + meter → 散射仪", ["optical scatterometer", "laser scatterometer"])
        ], ["optical scatterometry (光学散射测量)", "scatterometry (散射测量)"], "散射测量用于非破坏性的线宽测量"),

        (855, "reflectom", "/rɪˈflektɒmɪtər/", "n.", 3, "反射仪", [
            ("reflectometer", "/rɪˈflektɒmɪtər/", "n.", "反射仪", "reflect反射 + meter测量 → 反射仪", ["thin film reflectometer", "spectroscopic reflectometer"]),
            ("reflectometry", "/ˌriːflekˈtɒmɪtri/", "n.", "反射测量", "reflect + metry → 反射测量", ["specular reflectometry", "diffuse reflectometry"])
        ], ["thin film reflectometer (薄膜反射仪)", "reflectometry (反射测量)"], "反射仪测量薄膜厚度和反射率"),

        (856, "spectroscop", "/spekˈtrɒskəpi/", "n.", 2, "光谱学", [
            ("spectroscopy", "/spekˈtrɒskəpi/", "n.", "光谱学", "spectro光谱 + scopy观察 → 光谱学", ["Raman spectroscopy", "infrared spectroscopy", "X-ray spectroscopy"]),
            ("spectrometer", "/spekˈtrɒmɪtər/", "n.", "光谱仪", "spectro + meter → 光谱仪", ["mass spectrometer", "optical spectrometer", "UV spectrometer"]),
            ("spectroscopic", "/ˌspektrəˈskɒpɪk/", "adj.", "光谱的", "spectroscopy + ic → 光谱的", ["spectroscopic analysis", "spectroscopic ellipsometry"])
        ], ["Raman spectroscopy (拉曼光谱)", "spectroscopic ellipsometry (光谱椭偏)"], "光谱学用于材料成分和结构分析"),

        (857, "microscop", "/ˈmaɪkrəskəʊp/", "n.", 1, "显微镜", [
            ("microscope", "/ˈmaɪkrəskəʊp/", "n.", "显微镜", "micro微 + scope观察 → 显微镜", ["electron microscope", "optical microscope", "scanning microscope"]),
            ("microscopy", "/maɪˈkrɒskəpi/", "n.", "显微术", "micro + scopy → 显微术", ["electron microscopy", "confocal microscopy", "fluorescence microscopy"]),
            ("microscopic", "/ˌmaɪkrəˈskɒpɪk/", "adj.", "微观的", "microscope + ic → 微观的", ["microscopic structure", "microscopic analysis"])
        ], ["electron microscope (电子显微镜)", "scanning electron microscopy (扫描电子显微)"], "显微镜用于观察微观结构和缺陷"),

        (858, "interferom", "/ˌɪntəfɪˈrɒmɪtər/", "n.", 3, "干涉仪", [
            ("interferometer", "/ˌɪntəfɪˈrɒmɪtər/", "n.", "干涉仪", "interfer干涉 + meter测量 → 干涉仪", ["laser interferometer", "white light interferometer", "Mach-Zehnder interferometer"]),
            ("interferometry", "/ˌɪntəfɪˈrɒmɪtri/", "n.", "干涉测量", "interfero + metry → 干涉测量", ["optical interferometry", "phase-shifting interferometry"])
        ], ["laser interferometer (激光干涉仪)", "optical interferometry (光学干涉测量)"], "干涉仪用于高精度表面形貌测量"),

        (859, "photoluminesc", "/ˌfəʊtəʊluːmɪˈnesns/", "n.", 3, "光致发光", [
            ("photoluminescence", "/ˌfəʊtəʊluːmɪˈnesns/", "n.", "光致发光", "photo光 + luminescence发光 → 光致发光", ["photoluminescence spectroscopy", "photoluminescence intensity", "room temperature photoluminescence"]),
            ("photoluminescent", "/ˌfəʊtəʊluːmɪˈnesnt/", "adj.", "光致发光的", "photoluminescence + t → 光致发光的", ["photoluminescent material", "photoluminescent spectrum"])
        ], ["photoluminescence spectroscopy (光致发光光谱)", "PL measurement (PL测量)"], "光致发光用于分析材料的电子结构"),

        (860, "cathodoluminesc", "/ˌkæθədəʊluːmɪˈnesns/", "n.", 4, "阴极发光", [
            ("cathodoluminescence", "/ˌkæθədəʊluːmɪˈnesns/", "n.", "阴极发光", "cathode阴极 + luminescence发光 → 阴极发光", ["cathodoluminescence microscopy", "cathodoluminescence spectrum", "SEM cathodoluminescence"]),
            ("cathodoluminescent", "/ˌkæθədəʊluːmɪˈnesnt/", "adj.", "阴极发光的", "cathodoluminescence + t → 阴极发光的", ["cathodoluminescent material"])
        ], ["cathodoluminescence (阴极发光)", "CL imaging (CL成像)"], "阴极发光用于检测材料缺陷和杂质"),

        # 861-870: 器件结构
        (861, "transist", "/trænˈzɪstər/", "n.", 1, "晶体管", [
            ("transistor", "/trænˈzɪstər/", "n.", "晶体管", "transfer + resistor → 晶体管", ["field-effect transistor", "bipolar transistor", "MOS transistor"]),
            ("transistorized", "/trænˈzɪstəraɪzd/", "adj.", "晶体管化的", "transistor + ized → 晶体管化的", ["transistorized circuit"])
        ], ["field-effect transistor (场效应晶体管)", "bipolar junction transistor (双极结型晶体管)"], "晶体管是集成电路的基本构建单元"),

        (862, "capacit", "/kəˈpæsɪtər/", "n.", 1, "电容器", [
            ("capacitor", "/kəˈpæsɪtər/", "n.", "电容器", "capacity容量 + or → 电容器", ["decoupling capacitor", "bypass capacitor", "MOS capacitor"]),
            ("capacitance", "/kəˈpæsɪtəns/", "n.", "电容", "capacity → 电容", ["gate capacitance", "junction capacitance", "parasitic capacitance"]),
            ("capacitive", "/kəˈpæsɪtɪv/", "adj.", "电容的", "capacitance + ive → 电容的", ["capacitive coupling", "capacitive load"])
        ], ["MOS capacitor (MOS电容器)", "decoupling capacitor (去耦电容)"], "电容器存储电荷，用于滤波和储能"),

        (863, "resist", "/rɪˈzɪstər/", "n.", 1, "电阻器", [
            ("resistor", "/rɪˈzɪstər/", "n.", "电阻器", "resist抵抗 + or → 电阻器", ["pull-up resistor", "load resistor", "variable resistor"]),
            ("resistance", "/rɪˈzɪstəns/", "n.", "电阻", "resist抵抗 + ance → 电阻", ["sheet resistance", "contact resistance", "channel resistance"]),
            ("resistive", "/rɪˈzɪstɪv/", "adj.", "电阻的", "resistance + ive → 电阻的", ["resistive heating", "resistive switching"])
        ], ["sheet resistance (薄层电阻)", "contact resistance (接触电阻)"], "电阻器限制电流流动，用于分压和限流"),

        (864, "induct", "/ɪnˈdʌktər/", "n.", 2, "电感器", [
            ("inductor", "/ɪnˈdʌktər/", "n.", "电感器", "induce感应 + or → 电感器", ["spiral inductor", "bond wire inductor", "on-chip inductor"]),
            ("inductance", "/ɪnˈdʌktəns/", "n.", "电感", "induce → 电感", ["mutual inductance", "self-inductance", "parasitic inductance"]),
            ("inductive", "/ɪnˈdʌktɪv/", "adj.", "电感的", "inductance + ive → 电感的", ["inductive coupling", "inductive load"])
        ], ["on-chip inductor (片上电感)", "spiral inductor (螺旋电感)"], "电感器存储磁能，用于滤波和振荡电路"),

        (865, "diode", "/ˈdaɪəʊd/", "n.", 1, "二极管", [
            ("diode", "/ˈdaɪəʊd/", "n.", "二极管", "di二 + ode路 → 二极管", ["light-emitting diode", "Schottky diode", "Zener diode"]),
            ("diodes", "/ˈdaɪəʊdz/", "n.", "二极管(复数)", "diode + s", ["diode array", "diode bridge"])
        ], ["light-emitting diode (发光二极管)", "Schottky diode (肖特基二极管)"], "二极管允许单向导通，用于整流和保护"),

        (866, "photodiod", "/ˌfəʊtəʊˈdaɪəʊd/", "n.", 2, "光电二极管", [
            ("photodiode", "/ˌfəʊtəʊˈdaɪəʊd/", "n.", "光电二极管", "photo光 + diode二极管 → 光电二极管", ["PIN photodiode", "avalanche photodiode", "photodiode array"]),
            ("photodiodes", "/ˌfəʊtəʊˈdaɪəʊdz/", "n.", "光电二极管(复数)", "photodiode + s", ["photodiodes array", "photodiodes detector"])
        ], ["avalanche photodiode (雪崩光电二极管)", "PIN photodiode (PIN光电二极管)"], "光电二极管将光信号转换为电信号"),

        (867, "thyrist", "/θaɪˈrɪstər/", "n.", 3, "晶闸管", [
            ("thyristor", "/θaɪˈrɪstər/", "n.", "晶闸管", "thyra门 + istor → 晶闸管(可控硅)", ["silicon controlled rectifier", "gate turn-off thyristor", "MOS-controlled thyristor"]),
            ("thyristors", "/θaɪˈrɪstərz/", "n.", "晶闸管(复数)", "thyristor + s", ["thyristors stack", "thyristors module"])
        ], ["silicon controlled rectifier (可控硅整流器)", "GTO thyristor (门极关断晶闸管)"], "晶闸管用于大功率开关和整流应用"),

        (868, "varist", "/vəˈrɪstər/", "n.", 3, "压敏电阻", [
            ("varistor", "/vəˈrɪstər/", "n.", "压敏电阻", "variable可变 + resistor电阻 → 压敏电阻", ["metal oxide varistor", "zinc oxide varistor", "silicon carbide varistor"])
        ], ["metal oxide varistor (金属氧化物压敏电阻)", "zinc oxide varistor (氧化锌压敏电阻)"], "压敏电阻电压依赖性电阻，用于过压保护"),

        (869, "thermist", "/θɜːˈmɪstər/", "n.", 3, "热敏电阻", [
            ("thermistor", "/θɜːˈmɪstər/", "n.", "热敏电阻", "thermal热 + resistor电阻 → 热敏电阻", ["NTC thermistor", "PTC thermistor", "thin film thermistor"]),
            ("thermistors", "/θɜːˈmɪstərz/", "n.", "热敏电阻(复数)", "thermistor + s", ["thermistors array", "thermistors sensor"])
        ], ["NTC thermistor (负温度系数热敏电阻)", "PTC thermistor (正温度系数热敏电阻)"], "热敏电阻温度敏感性电阻，用于温度传感"),

        (870, "memrist", "/ˈmemrɪstər/", "n.", 4, "忆阻器", [
            ("memristor", "/ˈmemrɪstər/", "n.", "忆阻器", "memory记忆 + resistor电阻 → 忆阻器", ["memristor array", "memristor crossbar", "TiO2 memristor"]),
            ("memristive", "/ˈmemrɪstɪv/", "adj.", "忆阻的", "memristor + ive → 忆阻的", ["memristive system", "memristive switching"]),
            ("memristance", "/ˈmemrɪstəns/", "n.", "忆阻", "memory + resistance → 忆阻", ["memristance value", "memristance state"])
        ], ["memristor array (忆阻器阵列)", "memristor crossbar (忆阻器交叉阵列)"], "忆阻器是第四种基本电路元件，具有记忆功能"),

        # 871-880: 器件类型
        (871, "MESFET", "/ˈmezˌfet/", "n.", 3, "金属半导体场效应晶体管", [
            ("MESFET", "/ˈmezˌfet/", "n.", "金属半导体场效应晶体管", "Metal-Semiconductor FET → MESFET", ["GaAs MESFET", "power MESFET", "microwave MESFET"])
        ], ["GaAs MESFET (砷化镓MESFET)", "power MESFET (功率MESFET)"], "MESFET是GaAs等化合物半导体常用器件结构"),

        (872, "HEMT", "/ˈhemt/", "n.", 3, "高电子迁移率晶体管", [
            ("HEMT", "/ˈhemt/", "n.", "高电子迁移率晶体管", "High Electron Mobility Transistor → HEMT", ["pHEMT", "mHEMT", "GaN HEMT"]),
            ("MODFET", "/ˈmɒdfet/", "n.", "调制掺杂场效应晶体管", "Modulation-Doped FET → MODFET", ["AlGaAs MODFET", "InP MODFET"])
        ], ["pHEMT (赝配高电子迁移率晶体管)", "GaN HEMT (氮化镓高电子迁移率晶体管)"], "HEMT利用异质结二维电子气实现高迁移率"),

        (873, "HBT", "/ˌeɪtʃˌbiːˈtiː/", "n.", 3, "异质结双极晶体管", [
            ("HBT", "/ˌeɪtʃˌbiːˈtiː/", "n.", "异质结双极晶体管", "Heterojunction Bipolar Transistor → HBT", ["SiGe HBT", "InP HBT", "GaAs HBT"])
        ], ["SiGe HBT (硅锗异质结双极晶体管)", "InP HBT (磷化铟异质结双极晶体管)"], "HBT利用异质结发射极提高注入效率"),

        (874, "JFET", "/ˈdʒeɪˌfet/", "n.", 2, "结型场效应晶体管", [
            ("JFET", "/ˈdʒeɪˌfet/", "n.", "结型场效应晶体管", "Junction Field-Effect Transistor → JFET", ["n-channel JFET", "p-channel JFET", "JFET amplifier"])
        ], ["n-channel JFET (N沟道结型场效应晶体管)", "p-channel JFET (P沟道结型场效应晶体管)"], "JFET用PN结栅极控制沟道导电性"),

        (875, "MOSFET", "/ˈmɒsfet/", "n.", 1, "金属氧化物半导体场效应晶体管", [
            ("MOSFET", "/ˈmɒsfet/", "n.", "金属氧化物半导体场效应晶体管", "Metal-Oxide-Semiconductor FET → MOSFET", ["NMOS", "PMOS", "CMOS", "power MOSFET"]),
            ("MOS", "/ˈmɒs/", "n.", "金属氧化物半导体", "Metal-Oxide-Semiconductor → MOS", ["MOS capacitor", "MOS transistor", "MOS structure"])
        ], ["power MOSFET (功率MOSFET)", "CMOS (互补金属氧化物半导体)"], "MOSFET是现代集成电路的主要器件结构"),

        (876, "CMOS", "/ˈsiːmɒs/", "n.", 1, "互补金属氧化物半导体", [
            ("CMOS", "/ˈsiːmɒs/", "n.", "互补金属氧化物半导体", "Complementary MOS → CMOS", ["CMOS technology", "CMOS circuit", "CMOS sensor"]),
            ("CMOS", "/ˈsiːmɒs/", "n.", "CMOS图像传感器", "CMOS image sensor", ["CMOS image sensor", "CMOS camera", "CMOS pixel"])
        ], ["CMOS technology (CMOS技术)", "CMOS image sensor (CMOS图像传感器)"], "CMOS用互补的NMOS和PMOS实现低功耗逻辑"),

        (877, "FinFET", "/ˈfɪnˌfet/", "n.", 2, "鳍式场效应晶体管", [
            ("FinFET", "/ˈfɪnˌfet/", "n.", "鳍式场效应晶体管", "Fin Field-Effect Transistor → FinFET", ["tri-gate FinFET", "double-gate FinFET", "bulk FinFET"])
        ], ["tri-gate FinFET (三栅鳍式场效应晶体管)", "FinFET technology (鳍式场效应晶体管技术)"], "FinFET用立体鳍形结构改善栅极控制"),

        (878, "GAA", "/dʒiːˌeɪˈeɪ/", "n.", 3, "全环绕栅极晶体管", [
            ("GAA", "/dʒiːˌeɪˈeɪ/", "n.", "全环绕栅极晶体管", "Gate-All-Around → GAA", ["nanowire GAA", "nanosheet GAA", "GAA transistor"]),
            ("GAAFET", "/ˈɡɑːˌfet/", "n.", "全环绕栅极场效应晶体管", "Gate-All-Around FET → GAAFET", ["GAAFET structure", "stacked GAAFET"])
        ], ["nanowire GAA (纳米线全环绕栅极)", "GAA transistor (全环绕栅极晶体管)"], "GAA用栅极完全包围沟道实现最佳控制"),

        (879, "SOI", "/ˌesˌəʊˈaɪ/", "n.", 2, "绝缘体上硅", [
            ("SOI", "/ˌesˌəʊˈaɪ/", "n.", "绝缘体上硅", "Silicon-On-Insulator → SOI", ["FD-SOI", "PD-SOI", "SOI wafer"]),
            ("FD-SOI", "/ˌefˌdiːˌesˌəʊˈaɪ/", "n.", "全耗尽绝缘体上硅", "Fully Depleted SOI → FD-SOI", ["FD-SOI technology", "28nm FD-SOI"])
        ], ["FD-SOI (全耗尽绝缘体上硅)", "SOI wafer (绝缘体上硅晶圆)"], "SOI在绝缘层上制作硅薄膜减少寄生效应"),

        (880, "EEPROM", "/ˈiːˌiːˈprɒm/", "n.", 3, "电可擦可编程只读存储器", [
            ("EEPROM", "/ˈiːˌiːˈprɒm/", "n.", "电可擦可编程只读存储器", "Electrically Erasable Programmable ROM → EEPROM", ["EEPROM memory", "EEPROM cell", "serial EEPROM"]),
            ("EEPROM", "/ˈiːˌiːˈprɒm/", "n.", "EEPROM", "电可擦除可编程存储器", ["flash EEPROM", "byte EEPROM"])
        ], ["EEPROM memory (EEPROM存储器)", "flash EEPROM (闪存EEPROM)"], "EEPROM可电擦除重写用于存储配置信息"),

        # 881-890: 存储器技术
        (881, "SRAM", "/ˌesˈræm/", "n.", 2, "静态随机存取存储器", [
            ("SRAM", "/ˌesˈræm/", "n.", "静态随机存取存储器", "Static Random Access Memory → SRAM", ["SRAM cell", "SRAM cache", "6T SRAM"]),
            ("SRAM cell", "/ˌesˈræm sel/", "n.", "SRAM单元", "静态存储单元", ["6T SRAM cell", "SRAM bitcell"])
        ], ["SRAM cache (SRAM缓存)", "6T SRAM (六晶体管SRAM)"], "SRAM速度快但密度低，用于高速缓存"),

        (882, "DRAM", "/ˈdiːræm/", "n.", 2, "动态随机存取存储器", [
            ("DRAM", "/ˈdiːræm/", "n.", "动态随机存取存储器", "Dynamic Random Access Memory → DRAM", ["DRAM cell", "DRAM capacitor", "1T1C DRAM"]),
            ("eDRAM", "/ˌiːˈdiːræm/", "n.", "嵌入式动态随机存取存储器", "embedded DRAM → eDRAM", ["eDRAM cache", "eDRAM technology"])
        ], ["DRAM cell (DRAM单元)", "1T1C DRAM (1晶体管1电容DRAM)"], "DRAM用电容存储电荷需定期刷新"),

        (883, "Flash", "/flæʃ/", "n.", 1, "闪存", [
            ("Flash", "/flæʃ/", "n.", "闪存", "Flash memory → 闪存", ["NAND Flash", "NOR Flash", "Flash memory"]),
            ("NAND", "/ˈnænd/", "n.", "NAND闪存", "NAND Flash memory", ["NAND Flash", "3D NAND", "TLC NAND"]),
            ("NOR", "/ˈnɔːr/", "n.", "NOR闪存", "NOR Flash memory", ["NOR Flash", "parallel NOR"])
        ], ["NAND Flash (NAND闪存)", "NOR Flash (NOR闪存)", "3D NAND (三维NAND)"], "闪存用浮栅晶体管实现非易失存储"),

        (884, "MRAM", "/ˈemræm/", "n.", 4, "磁性随机存取存储器", [
            ("MRAM", "/ˈemræm/", "n.", "磁性随机存取存储器", "Magnetoresistive RAM → MRAM", ["STT-MRAM", "SOT-MRAM", "MRAM cell"]),
            ("STT-MRAM", "/ˌesˌtiːˈtiːˈemræm/", "n.", "自旋转移矩磁性随机存取存储器", "Spin-Transfer Torque MRAM → STT-MRAM", ["STT-MRAM cell", "STT-MRAM array"])
        ], ["STT-MRAM (自旋转移矩磁性随机存取存储器)", "MRAM cell (MRAM单元)"], "MRAM用磁隧道结存储数据，非易失且速度快"),

        (885, "ReRAM", "/ˈriːræm/", "n.", 4, "阻变存储器", [
            ("ReRAM", "/ˈriːræm/", "n.", "阻变存储器", "Resistive RAM → ReRAM", ["oxide ReRAM", "conductive bridge RAM", "ReRAM array"]),
            ("RRAM", "/ˈɑːrˌræm/", "n.", "阻变存储器", "同ReRAM", ["RRAM cell", "RRAM crossbar"])
        ], ["oxide ReRAM (氧化物阻变存储器)", "ReRAM array (阻变存储器阵列)"], "ReRAM用电阻转变实现非易失存储"),

        (886, "PCRAM", "/ˈpiːˈsiːræm/", "n.", 4, "相变存储器", [
            ("PCRAM", "/ˈpiːˈsiːræm/", "n.", "相变存储器", "Phase Change RAM → PCRAM", ["PCRAM cell", "GST PCRAM", "PCRAM technology"]),
            ("PCM", "/ˈpiːˈsiːˈem/", "n.", "相变存储器", "Phase Change Memory → PCM", ["PCM cell", "PCM array"])
        ], ["GST PCRAM (锗锑碲相变存储器)", "PCRAM cell (相变存储器单元)"], "PCRAM用相变材料晶态/非晶态电阻差存储数据"),

        (887, "FeRAM", "/ˈferæm/", "n.", 4, "铁电存储器", [
            ("FeRAM", "/ˈferæm/", "n.", "铁电存储器", "Ferroelectric RAM → FeRAM", ["FeRAM cell", "PZT FeRAM", "FeRAM memory"]),
            ("FRAM", "/ˈefˌræm/", "n.", "铁电存储器", "同FeRAM", ["FRAM technology", "FRAM application"])
        ], ["PZT FeRAM (锆钛酸铅铁电存储器)", "FeRAM cell (铁电存储器单元)"], "FeRAM用铁电材料极化方向存储数据"),

        (888, "SONOS", "/ˈsoʊnɒs/", "n.", 4, "硅-氧化物-氮化物-氧化物-硅", [
            ("SONOS", "/ˈsoʊnɒs/", "n.", "硅-氧化物-氮化物-氧化物-硅", "Silicon-Oxide-Nitride-Oxide-Silicon → SONOS", ["SONOS memory", "SONOS transistor", "SONOS cell"])
        ], ["SONOS memory (SONOS存储器)", "SONOS transistor (SONOS晶体管)"], "SONOS用氮化硅陷阱电荷实现非易失存储"),

        (889, "nvSRAM", "/ˌenˌviːˈesræm/", "n.", 4, "非易失性静态随机存取存储器", [
            ("nvSRAM", "/ˌenˌviːˈesræm/", "n.", "非易失性静态随机存取存储器", "non-volatile SRAM → nvSRAM", ["nvSRAM memory", "nvSRAM cell"])
        ], ["nvSRAM memory (非易失性SRAM存储器)", "nvSRAM cell (nvSRAM单元)"], "nvSRAM结合SRAM速度和Flash非易失性"),

        (890, "XPoint", "/ˈeksˌpɔɪnt/", "n.", 4, "3D XPoint存储器", [
            ("XPoint", "/ˈeksˌpɔɪnt/", "n.", "3D XPoint存储器", "3D XPoint → 相变存储技术", ["3D XPoint", "Intel Optane", "XPoint memory"]),
            ("Optane", "/ˈɒpteɪn/", "n.", "傲腾存储器", "Intel Optane memory", ["Intel Optane", "Optane SSD", "Optane memory"])
        ], ["3D XPoint (三维XPoint存储器)", "Intel Optane (英特尔傲腾)"], "3D XPoint是一种新型非易失存储技术"),

        # 891-900: 封装与测试
        (891, "packag", "/ˈpækɪdʒ/", "n.", 1, "封装", [
            ("package", "/ˈpækɪdʒ/", "n.", "封装", "pack包 + age → 封装", ["IC package", "chip package", " semiconductor package"]),
            ("packaging", "/ˈpækɪdʒɪŋ/", "n.", "封装工艺", "package + ing → 封装工艺", ["wafer level packaging", "advanced packaging", "3D packaging"]),
            ("packaged", "/ˈpækɪdʒd/", "adj.", "已封装的", "package + ed → 已封装的", ["packaged die", "packaged chip"])
        ], ["wafer level packaging (晶圆级封装)", "advanced packaging (先进封装)", "3D packaging (三维封装)"], "封装保护芯片并提供电气连接和散热"),

        (892, "bond", "/bɒnd/", "v.", 1, "键合", [
            ("bond", "/bɒnd/", "v.", "键合", "bond结合 → 芯片键合", ["wire bond", "flip chip bond", "die bond"]),
            ("bonding", "/ˈbɒndɪŋ/", "n.", "键合工艺", "bond + ing → 键合工艺", ["wire bonding", "thermosonic bonding", "anodic bonding"]),
            ("bonded", "/ˈbɒndɪd/", "adj.", "已键合的", "bond + ed → 已键合的", ["bonded wafer", "bonded stack"])
        ], ["wire bonding (引线键合)", "flip chip bonding (倒装芯片键合)", "die bonding (芯片粘接)"], "键合实现芯片与封装基板的电气和机械连接"),

        (893, "mold", "/məʊld/", "n.", 2, "模塑", [
            ("mold", "/məʊld/", "n.", "模具，模塑", "mold模具 → 封装模塑", ["mold compound", "transfer mold", "compression mold"]),
            ("molding", "/ˈmoʊldɪŋ/", "n.", "模塑工艺", "mold + ing → 模塑工艺", ["transfer molding", "compression molding", "injection molding"]),
            ("molded", "/ˈmoʊldɪd/", "adj.", "已模塑的", "mold + ed → 已模塑的", ["molded package", "molded body"])
        ], ["mold compound (模塑料)", "transfer molding (传递模塑)", "compression molding (压缩模塑)"], "模塑用环氧树脂封装保护芯片"),

        (894, "underfill", "/ˌʌndərˈfɪl/", "n.", 3, "底部填充", [
            ("underfill", "/ˌʌndərˈfɪl/", "n.", "底部填充", "under下 + fill填充 → 底部填充", ["capillary underfill", "no-flow underfill", "wafer level underfill"]),
            ("underfilling", "/ˌʌndərˈfɪlɪŋ/", "n.", "底部填充工艺", "underfill + ing → 底部填充工艺", ["underfilling process", "underfilling material"])
        ], ["capillary underfill (毛细底部填充)", "no-flow underfill (无流动底部填充)"], "底部填充保护倒装芯片焊点免受热应力"),

        (895, "TSV", "/ˌtiːˌesˈviː/", "n.", 2, "硅通孔", [
            ("TSV", "/ˌtiːˌesˈviː/", "n.", "硅通孔", "Through-Silicon Via → TSV", ["TSV interposer", "TSV stacking", "TSV process"]),
            ("via", "/ˈvaɪə/", "n.", "通孔", "via经过 → 通孔", ["through via", "blind via", "buried via"])
        ], ["TSV interposer (TSV中介层)", "TSV stacking (TSV堆叠)", "Through-Silicon Via (硅通孔)"], "TSV实现三维堆叠芯片的垂直互连"),

        (896, "interpos", "/ˈɪntərpoʊzər/", "n.", 3, "中介层", [
            ("interposer", "/ˈɪntərpoʊzər/", "n.", "中介层", "inter之间 + pose放置 + er → 中介层", ["silicon interposer", "organic interposer", "TSV interposer"]),
            ("interposition", "/ˌɪntərpəˈzɪʃən/", "n.", "插入", "inter + position → 插入", ["interposition layer", "interposition technique"])
        ], ["silicon interposer (硅中介层)", "TSV interposer (TSV中介层)"], "中介层用于多芯片模块的重新布线"),

        (897, "RDL", "/ˌɑːrˌdiːˈel/", "n.", 3, "重新布线层", [
            ("RDL", "/ˌɑːrˌdiːˈel/", "n.", "重新布线层", "Redistribution Layer → RDL", ["RDL routing", "RDL design", "multi-layer RDL"]),
            ("redistribution", "/ˌriːdɪstrɪˈbjuːʃən/", "n.", "重新分布", "redistribute + ion → 重新分布", ["redistribution layer", "redistribution routing"])
        ], ["RDL routing (RDL布线)", "multi-layer RDL (多层RDL)"], "RDL将芯片焊盘重新布线到封装引脚位置"),

        (898, "bump", "/bʌmp/", "n.", 2, "凸点", [
            ("bump", "/bʌmp/", "n.", "凸点", "bump凸起 → 焊料凸点", ["solder bump", "copper bump", "gold bump"]),
            ("bumping", "/ˈbʌmpɪŋ/", "n.", "凸点制作工艺", "bump + ing → 凸点制作工艺", ["wafer bumping", "bumping process", "bumping technology"])
        ], ["solder bump (焊料凸点)", "copper bump (铜凸点)", "wafer bumping (晶圆凸点制作)"], "凸点是倒装芯片与基板连接的焊点"),

        (899, "probe", "/proʊb/", "n.", 1, "探针", [
            ("probe", "/proʊb/", "n.", "探针", "probe探查 → 测试探针", ["probe card", "probe needle", "RF probe"]),
            ("probing", "/ˈproʊbɪŋ/", "n.", "探针测试", "probe + ing → 探针测试", ["wafer probing", "probing test", "probing station"]),
            ("probe", "/proʊb/", "v.", "探测", "probe探测 → 测试", ["probe test", "probe contact"])
        ], ["probe card (探针卡)", "wafer probing (晶圆探针测试)", "probing station (探针台)"], "探针用于晶圆级电学测试"),

        (900, "test", "/test/", "v.", 1, "测试", [
            ("test", "/test/", "v.", "测试", "test测试 → 半导体测试", ["wafer test", "final test", "burn-in test"]),
            ("testing", "/ˈtestɪŋ/", "n.", "测试", "test + ing → 测试", ["electrical testing", "functional testing", "reliability testing"]),
            ("tester", "/ˈtestər/", "n.", "测试机", "test + er → 测试机", ["ATE tester", "parametric tester", "memory tester"])
        ], ["wafer test (晶圆测试)", "final test (最终测试)", "burn-in test (老化测试)"], "测试确保芯片功能和性能符合规格"),
    ]

    # 创建851-900的条目
    for data in entries_851_900:
        new_entries.append(create_entry(*data))

    print(f"Generated {len(new_entries)} entries (851-900)")

    # 合并并保存
    combined_data = existing_data + new_entries

    with open('f:/claudeanli/beidanci3/src/data/semiconductor.json', 'w', encoding='utf-8') as f:
        json.dump(combined_data, f, ensure_ascii=False, indent=2)

    print(f"Total entries: {len(combined_data)}")
    print("Part 2 (851-900) saved successfully!")

if __name__ == "__main__":
    main()
