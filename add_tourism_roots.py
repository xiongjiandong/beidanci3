#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""添加旅游词根数据到tourism.json文件"""

import json

# 定义299个旅游相关词根 (id 6202-6500, frequency 202-500)
tourism_roots = [
    # 201-210: 酒店住宿高频词 (201已添加)
    ('resort', '/rɪˈzɔːrt/', 'n.', '度假村', 're-sort→重新整理的地方→度假村'),
    ('suite', '/swiːt/', 'n.', '套房', 'suite→甜的→豪华套房'),
    ('lobby', '/ˈlɑːbi/', 'n.', '大堂，大厅', 'lobby→游说→酒店大堂'),
    ('reception', '/rɪˈsepʃn/', 'n.', '接待处', 're-cept→拿回来→接待'),
    ('reservation', '/ˌrezərˈveɪʃn/', 'n.', '预订', 're-serve→保留→预订'),
    ('accommodate', '/əˈkɑːmədeɪt/', 'v.', '容纳，提供住宿', 'ac-com-modate→共同安排→容纳'),
    ('check-in', '/ˈtʃek ɪn/', 'n./v.', '入住登记', 'check检查+in进入→入住'),
    ('check-out', '/ˈtʃek aʊt/', 'n./v.', '退房', 'check检查+out出去→退房'),
    ('amenity', '/əˈmenəti/', 'n.', '便利设施', 'amen→愉快→便利设施'),

    # 211-220: 航空交通高频词
    ('flight', '/flaɪt/', 'n.', '航班，飞行', 'fly的名词形式→飞行'),
    ('airline', '/ˈerlaɪn/', 'n.', '航空公司', 'air+line→空中线路→航空公司'),
    ('terminal', '/ˈtɜːrmɪnl/', 'n.', '航站楼，终点站', 'term→终点→航站楼'),
    ('boarding', '/ˈbɔːrdɪŋ/', 'n.', '登机', 'board→甲板→登机'),
    ('departure', '/dɪˈpɑːrtʃər/', 'n.', '出发，离开', 'de-part→分开→出发'),
    ('arrival', '/əˈraɪvl/', 'n.', '到达', 'ar-rive→到达'),
    ('delay', '/dɪˈleɪ/', 'n./v.', '延误', 'de-lay→放下→延误'),
    ('cancel', '/ˈkænsl/', 'v.', '取消', 'cancel→交叉线→取消'),
    ('baggage', '/ˈbæɡɪdʒ/', 'n.', '行李', 'bag→包→行李'),
    ('luggage', '/ˈlʌɡɪdʒ/', 'n.', '行李', 'lug→拖拉→行李'),

    # 221-230: 旅行文件高频词
    ('passport', '/ˈpæspɔːrt/', 'n.', '护照', 'pass+port→通过港口→护照'),
    ('visa', '/ˈviːzə/', 'n.', '签证', 'visa→看见→签证'),
    ('document', '/ˈdɑːkjumənt/', 'n.', '文件，证件', 'doc→教导→文件'),
    ('identity', '/aɪˈdentəti/', 'n.', '身份', 'ident→相同→身份'),
    ('citizenship', '/ˈsɪtɪzənʃɪp/', 'n.', '国籍，公民身份', 'citizen→市民+ship→国籍'),
    ('embassy', '/ˈembəsi/', 'n.', '大使馆', 'embassy→被派出去的→大使馆'),
    ('consulate', '/ˈkɑːnsələt/', 'n.', '领事馆', 'consult→商议→领事馆'),
    ('declare', '/dɪˈkler/', 'v.', '申报', 'de-clare→说清楚→申报'),
    ('permit', '/ˈpɜːrmɪt/', 'n./v.', '许可证，允许', 'per-mit→通过发送→许可'),
    ('custom', '/ˈkʌstəm/', 'n.', '海关，习俗', 'custom→习惯→海关检查'),

    # 231-240: 观光景点高频词
    ('attraction', '/əˈtrækʃn/', 'n.', '景点，吸引力', 'at-tract→拉过来→吸引力'),
    ('landmark', '/ˈlændmɑːrk/', 'n.', '地标', 'land+mark→土地标记→地标'),
    ('monument', '/ˈmɑːnjumənt/', 'n.', '纪念碑', 'mon→提醒→纪念碑'),
    ('scenic', '/ˈsiːnɪk/', 'adj.', '风景优美的', 'scene→场景→风景'),
    ('viewpoint', '/ˈvjuːpɔɪnt/', 'n.', '观景点', 'view+point→看点→观景点'),
    ('heritage', '/ˈherɪtɪdʒ/', 'n.', '遗产', 'herit→继承→遗产'),
    ('culture', '/ˈkʌltʃər/', 'n.', '文化', 'cult→培养→文化'),
    ('historic', '/hɪˈstɔːrɪk/', 'adj.', '历史的', 'histor→历史+ic→历史的'),
    ('ancient', '/ˈeɪnʃənt/', 'adj.', '古老的', 'anci→以前→古老的'),
    ('architecture', '/ˈɑːrkɪtektʃər/', 'n.', '建筑', 'archi→主要的+tect→建造→建筑'),

    # 241-250: 度假休闲高频词
    ('vacation', '/veɪˈkeɪʃn/', 'n.', '假期', 'vac→空→空闲时间→假期'),
    ('leisure', '/ˈliːʒər/', 'n.', '休闲', 'leis→允许→休闲'),
    ('recreation', '/ˌrekriˈeɪʃn/', 'n.', '娱乐，消遣', 're-create→重新创造→娱乐'),
    ('relax', '/rɪˈlæks/', 'v.', '放松', 're-lax→放松'),
    ('entertainment', '/ˌentərˈteɪnmənt/', 'n.', '娱乐', 'enter→中间+tain→拿→娱乐'),
    ('excursion', '/ɪkˈskɜːrʒn/', 'n.', '短途旅行', 'ex-curs→跑出去→短途旅行'),
    ('itinerary', '/aɪˈtɪnəreri/', 'n.', '行程，路线', 'itiner→旅行→行程'),
    ('schedule', '/ˈskedʒuːl/', 'n.', '时间表，日程', 'sched→纸张→日程表'),
    ('destination', '/ˌdestɪˈneɪʃn/', 'n.', '目的地', 'destin→注定的→目的地'),
    ('expedition', '/ˌekspəˈdɪʃn/', 'n.', '探险，远征', 'ex-ped→脚踏出去→探险'),

    # 251-260: 交通出行
    ('transport', '/ˈtrænspɔːrt/', 'n./v.', '交通，运输', 'trans-port→搬运→运输'),
    ('vehicle', '/ˈviːəkl/', 'n.', '车辆', 'vehi→运送→车辆'),
    ('cruise', '/kruːz/', 'n./v.', '巡游，巡航', 'cruise→巡航'),
    ('voyage', '/ˈvɔɪɪdʒ/', 'n.', '航行', 'voy→路→航行'),
    ('ferry', '/ˈferi/', 'n.', '渡轮', 'fer→携带→渡轮'),
    ('shuttle', '/ˈʃʌtl/', 'n.', '穿梭巴士', 'shut→来回→穿梭'),
    ('transfer', '/ˈtrænsfɜːr/', 'n./v.', '转乘，转移', 'trans-fer→带来带去→转乘'),
    ('transit', '/ˈtrænzɪt/', 'n.', '过境，中转', 'trans-it→通过→过境'),
    ('commute', '/kəˈmjuːt/', 'v./n.', '通勤', 'com-mut→改变→通勤'),
    ('navigation', '/ˌnævɪˈɡeɪʃn/', 'n.', '导航', 'nav→船→导航'),

    # 261-270: 餐饮服务
    ('restaurant', '/ˈrestrɑːnt/', 'n.', '餐厅', 'restaur→恢复→餐厅'),
    ('cuisine', '/kwɪˈziːn/', 'n.', '烹饪，菜肴', 'cuin→烹饪→菜肴'),
    ('buffet', '/bəˈfeɪ/', 'n.', '自助餐', 'buffet→自助'),
    ('beverage', '/ˈbevərɪdʒ/', 'n.', '饮料', 'bev→喝→饮料'),
    ('refreshment', '/rɪˈfreʃmənt/', 'n.', '茶点，饮料', 're-fresh→重新新鲜→茶点'),
    ('delicacy', '/ˈdelɪkəsi/', 'n.', '美食，佳肴', 'delic→愉快→美食'),
    ('snack', '/snæk/', 'n.', '小吃', 'snack→小吃'),
    ('banquet', '/ˈbæŋkwɪt/', 'n.', '宴会', 'banqu→长凳→宴会'),
    ('catering', '/ˈkeɪtərɪŋ/', 'n.', '餐饮服务', 'cater→招待→餐饮'),
    ('dining', '/ˈdaɪnɪŋ/', 'n.', '用餐', 'dine→用餐'),

    # 271-280: 预订服务
    ('book', '/bʊk/', 'v./n.', '预订，书', 'book→书本→登记→预订'),
    ('avail', '/əˈveɪl/', 'v.', '利用，有助于', 'avail→价值→利用'),
    ('confirm', '/kənˈfɜːrm/', 'v.', '确认', 'con-firm→坚定→确认'),
    ('guarantee', '/ˌɡærənˈtiː/', 'n./v.', '保证', 'guar→保护→保证'),
    ('deposit', '/dɪˈpɑːzɪt/', 'n./v.', '押金，存款', 'de-posit→放下→押金'),
    ('refund', '/ˈriːfʌnd/', 'n./v.', '退款', 're-fund→资金回来→退款'),
    ('voucher', '/ˈvaʊtʃər/', 'n.', '凭证，券', 'vouch→担保→凭证'),
    ('coupon', '/ˈkuːpɑːn/', 'n.', '优惠券', 'coupon→优惠券'),
    ('discount', '/ˈdɪskaʊnt/', 'n.', '折扣', 'dis-count→不算→折扣'),
    ('complimentary', '/ˌkɑːmplɪˈmentri/', 'adj.', '免费的，赠送的', 'compli→充满→免费的'),

    # 281-290: 房间设施
    ('balcony', '/ˈbælkəni/', 'n.', '阳台', 'balcon→梁→阳台'),
    ('deluxe', '/dəˈlʌks/', 'adj.', '豪华的', 'de-luxe→光→豪华'),
    ('standard', '/ˈstændərd/', 'adj./n.', '标准的', 'stand→站立→标准'),
    ('single', '/ˈsɪŋɡl/', 'adj./n.', '单人', 'sing→单一→单人'),
    ('double', '/ˈdʌbl/', 'adj./n.', '双人', 'doub→二→双人'),
    ('twin', '/twɪn/', 'adj./n.', '双床', 'twin→双胞胎→双床'),
    ('oceanview', '/ˈoʊʃnvjuː/', 'adj.', '海景的', 'ocean+view→海洋+景观→海景'),
    ('seaview', '/ˈsiːvjuː/', 'adj.', '海景的', 'sea+view→海+景观→海景'),
    ('mountainview', '/ˈmaʊntnvjuː/', 'adj.', '山景的', 'mountain+view→山+景观→山景'),
    ('cityview', '/ˈsɪtivjuː/', 'adj.', '城市景观的', 'city+view→城市+景观→城景'),

    # 291-300: 旅行活动
    ('sightsee', '/ˈsaɪtsiː/', 'v.', '观光', 'sight+see→看+看→观光'),
    ('explore', '/ɪkˈsplɔːr/', 'v.', '探索', 'ex-plore→喊出来→探索'),
    ('adventure', '/ədˈventʃər/', 'n.', '冒险', 'ad-vent→来到→冒险'),
    ('wander', '/ˈwɑːndər/', 'v.', '漫步', 'wand→走→漫步'),
    ('stroll', '/stroʊl/', 'v./n.', '闲逛，散步', 'stroll→闲逛'),
    ('trek', '/trek/', 'n./v.', '长途跋涉', 'trek→艰苦旅行'),
    ('hike', '/haɪk/', 'n./v.', '徒步旅行', 'hike→徒步'),
    ('camp', '/kæmp/', 'n./v.', '露营', 'camp→田野→露营'),
    ('backpacking', '/ˈbækpækɪŋ/', 'n.', '背包旅行', 'back+pack→背+包→背包旅行'),
    ('trekking', '/ˈtrekɪŋ/', 'n.', '徒步旅行', 'trek→艰苦旅行'),

    # 301-310: 地理景观
    ('beach', '/biːtʃ/', 'n.', '海滩', 'beach→海滩'),
    ('coast', '/koʊst/', 'n.', '海岸', 'coast→海岸'),
    ('shore', '/ʃɔːr/', 'n.', '岸，海滨', 'shore→海岸'),
    ('island', '/ˈaɪlənd/', 'n.', '岛屿', 'is+land→是+陆地→岛屿'),
    ('peninsula', '/pəˈnɪnsələ/', 'n.', '半岛', 'penin→几乎+insula→岛→半岛'),
    ('mountain', '/ˈmaʊntn/', 'n.', '山', 'mount→山→山脉'),
    ('valley', '/ˈvæli/', 'n.', '山谷', 'val→低→山谷'),
    ('canyon', '/ˈkænjən/', 'n.', '峡谷', 'canyon→峡谷'),
    ('cliff', '/klɪf/', 'n.', '悬崖', 'cliff→悬崖'),
    ('cave', '/keɪv/', 'n.', '洞穴', 'cave→洞→洞穴'),

    # 311-320: 水体景观
    ('ocean', '/ˈoʊʃn/', 'n.', '海洋', 'ocean→海洋'),
    ('sea', '/siː/', 'n.', '海', 'sea→海'),
    ('lake', '/leɪk/', 'n.', '湖', 'lake→湖'),
    ('river', '/ˈrɪvər/', 'n.', '河流', 'riv→河岸→河流'),
    ('stream', '/striːm/', 'n.', '溪流', 'stream→溪流'),
    ('waterfall', '/ˈwɔːtərfɔːl/', 'n.', '瀑布', 'water+fall→水+落下→瀑布'),
    ('pond', '/pɑːnd/', 'n.', '池塘', 'pond→池塘'),
    ('spring', '/sprɪŋ/', 'n.', '泉水，温泉', 'spring→跳跃→泉水'),
    ('bay', '/beɪ/', 'n.', '海湾', 'bay→海湾'),
    ('gulf', '/ɡʌlf/', 'n.', '海湾', 'gulf→漩涡→海湾'),

    # 321-330: 自然生态
    ('forest', '/ˈfɔːrɪst/', 'n.', '森林', 'for→外面→森林'),
    ('jungle', '/ˈdʒʌŋɡl/', 'n.', '丛林', 'jungle→丛林'),
    ('desert', '/ˈdezərt/', 'n.', '沙漠', 'desert→放弃→沙漠'),
    ('oasis', '/oʊˈeɪsɪs/', 'n.', '绿洲', 'oasis→绿洲'),
    ('prairie', '/ˈpreri/', 'n.', '草原', 'prai→草地→草原'),
    ('savanna', '/səˈvænə/', 'n.', '热带草原', 'savanna→热带草原'),
    ('wetland', '/ˈwetlænd/', 'n.', '湿地', 'wet+land→湿+地→湿地'),
    ('marsh', '/mɑːrʃ/', 'n.', '沼泽', 'marsh→沼泽'),
    ('swamp', '/swɑːmp/', 'n.', '沼泽', 'swamp→沼泽'),
    ('glacier', '/ˈɡleɪʃər/', 'n.', '冰川', 'glac→冰→冰川'),

    # 331-340: 气候季节
    ('climate', '/ˈklaɪmət/', 'n.', '气候', 'clim→倾斜→气候'),
    ('weather', '/ˈweðər/', 'n.', '天气', 'weath→吹→天气'),
    ('season', '/ˈsiːzn/', 'n.', '季节', 'season→播种→季节'),
    ('temperature', '/ˈtemprətʃər/', 'n.', '温度', 'temper→混合→温度'),
    ('tropical', '/ˈtrɑːpɪkl/', 'adj.', '热带的', 'trop→转向→热带'),
    ('humid', '/ˈhjuːmɪd/', 'adj.', '潮湿的', 'hum→湿→潮湿'),
    ('arid', '/ˈærɪd/', 'adj.', '干旱的', 'arid→干燥→干旱'),
    ('mild', '/maɪld/', 'adj.', '温和的', 'mild→温和'),
    ('breeze', '/briːz/', 'n.', '微风', 'breeze→微风'),
    ('monsoon', '/mɑːnˈsuːn/', 'n.', '季风，雨季', 'monsoon→季风'),

    # 341-350: 购物体验
    ('souvenir', '/ˌsuːvəˈnɪr/', 'n.', '纪念品', 'sou→在下面+venir→来→纪念品'),
    ('gift', '/ɡɪft/', 'n.', '礼物', 'gift→给予→礼物'),
    ('souvenirshop', '/ˌsuːvəˈnɪr ʃɑːp/', 'n.', '纪念品店', 'souvenir+shop→纪念品+店'),
    ('boutique', '/buːˈtiːk/', 'n.', '精品店', 'boutique→小商店→精品店'),
    ('mall', '/mɔːl/', 'n.', '购物中心', 'mall→林荫道→购物中心'),
    ('market', '/ˈmɑːrkɪt/', 'n.', '市场', 'mark→边界→市场'),
    ('bazaar', '/bəˈzɑːr/', 'n.', '集市', 'bazaar→集市'),
    ('handicraft', '/ˈhændikræft/', 'n.', '手工艺品', 'handi+craft→手+工艺→手工艺品'),
    ('antique', '/ænˈtiːk/', 'n./adj.', '古董', 'anti→以前→古董'),
    ('artisan', '/ˈɑːrtəzn/', 'n.', '工匠', 'arti→技艺→工匠'),

    # 351-360: 娱乐表演
    ('show', '/ʃoʊ/', 'n./v.', '表演，展示', 'show→展示'),
    ('performance', '/pərˈfɔːrməns/', 'n.', '表演', 'per-form→彻底形成→表演'),
    ('theater', '/ˈθiːətər/', 'n.', '剧院', 'thea→看→剧院'),
    ('concert', '/ˈkɑːnsərt/', 'n.', '音乐会', 'concert→一起确定→音乐会'),
    ('festival', '/ˈfestɪvl/', 'n.', '节日', 'fest→喜庆→节日'),
    ('carnival', '/ˈkɑːrnɪvl/', 'n.', '嘉年华', 'carn→肉→狂欢节'),
    ('parade', '/pəˈreɪd/', 'n.', '游行', 'parade→展示→游行'),
    ('fireworks', '/ˈfaɪərwɜːrks/', 'n.', '烟花', 'fire+works→火+作品→烟花'),
    ('nightlife', '/ˈnaɪtlaɪf/', 'n.', '夜生活', 'night+life→夜+生活→夜生活'),
    ('casino', '/kəˈsiːnoʊ/', 'n.', '赌场', 'casino→小屋→赌场'),

    # 361-370: 户外运动
    ('surf', '/sɜːrf/', 'n./v.', '冲浪', 'surf→浪花→冲浪'),
    ('dive', '/daɪv/', 'n./v.', '潜水', 'dive→潜水'),
    ('snorkel', '/ˈsnɔːrkl/', 'n./v.', '浮潜', 'snorkel→呼吸管→浮潜'),
    ('ski', '/skiː/', 'n./v.', '滑雪', 'ski→滑雪'),
    ('snowboard', '/ˈsnoʊbɔːrd/', 'n./v.', '单板滑雪', 'snow+board→雪+板→单板滑雪'),
    ('skate', '/skeɪt/', 'n./v.', '滑冰', 'skate→滑冰'),
    ('sail', '/seɪl/', 'n./v.', '航行', 'sail→帆→航行'),
    ('yacht', '/jɑːt/', 'n.', '游艇', 'yacht→游艇'),
    ('kayak', '/ˈkaɪæk/', 'n.', '皮划艇', 'kayak→皮划艇'),
    ('canoe', '/kəˈnuː/', 'n.', '独木舟', 'canoe→独木舟'),

    # 371-380: 摄影记录
    ('photo', '/ˈfoʊtoʊ/', 'n.', '照片', 'photo→光→照片'),
    ('camera', '/ˈkæmərə/', 'n.', '相机', 'camera→房间→相机'),
    ('selfie', '/ˈselfi/', 'n.', '自拍', 'self→自己+ie→自拍'),
    ('album', '/ˈælbəm/', 'n.', '相册', 'album→空白→相册'),
    ('video', '/ˈvɪdioʊ/', 'n.', '视频', 'vid→看→视频'),
    ('record', '/ˈrekərd/', 'n./v.', '记录', 're-cord→心→记录'),
    ('memory', '/ˈmeməri/', 'n.', '记忆，回忆', 'memor→记得→记忆'),
    ('moment', '/ˈmoʊmənt/', 'n.', '时刻', 'moment→时刻'),
    ('scenery', '/ˈsiːnəri/', 'n.', '风景', 'scene→场景→风景'),
    ('panorama', '/ˌpænəˈræmə/', 'n.', '全景', 'pan→全+orama→看→全景'),

    # 381-390: 健康医疗
    ('clinic', '/ˈklɪnɪk/', 'n.', '诊所', 'clin→床→诊所'),
    ('pharmacy', '/ˈfɑːrməsi/', 'n.', '药房', 'pharm→药→药房'),
    ('hospital', '/ˈhɑːspɪtl/', 'n.', '医院', 'hospit→客人→医院'),
    ('emergency', '/ɪˈmɜːrdʒənsi/', 'n.', '紧急情况', 'e-merg→冒出来→紧急'),
    ('insurance', '/ɪnˈʃʊrəns/', 'n.', '保险', 'in-sur→确定→保险'),
    ('medical', '/ˈmedɪkl/', 'adj.', '医疗的', 'medic→药→医疗'),
    ('vaccine', '/vækˈsiːn/', 'n.', '疫苗', 'vacc→牛→疫苗'),
    ('prescription', '/prɪˈskrɪpʃn/', 'n.', '处方', 'pre-script→预先写→处方'),
    ('symptom', '/ˈsɪmptəm/', 'n.', '症状', 'sym-ptom→一起落下→症状'),
    ('treatment', '/ˈtriːtmənt/', 'n.', '治疗', 'treat→处理→治疗'),

    # 391-400: 安全应急
    ('safety', '/ˈseɪfti/', 'n.', '安全', 'safe→安全+ty→安全'),
    ('security', '/sɪˈkjʊrəti/', 'n.', '安全，保安', 'se-cur→关心→安全'),
    ('danger', '/ˈdeɪndʒər/', 'n.', '危险', 'danger→危险'),
    ('warning', '/ˈwɔːrnɪŋ/', 'n.', '警告', 'warn→警告'),
    ('caution', '/ˈkɔːʃn/', 'n.', '小心，警告', 'caut→烧→小心'),
    ('alert', '/əˈlɜːrt/', 'n./adj.', '警报，警惕的', 'alert→警惕'),
    ('emergencyexit', '/ɪˈmɜːrdʒənsi ˈeksɪt/', 'n.', '紧急出口', 'emergency+exit→紧急+出口'),
    ('firstaid', '/ˌfɜːrst ˈeɪd/', 'n.', '急救', 'first+aid→第一+救助→急救'),
    ('helpline', '/ˈhelplaɪn/', 'n.', '求助热线', 'help+line→帮助+线→热线'),
    ('police', '/pəˈliːs/', 'n.', '警察', 'polic→城市→警察'),

    # 401-410: 货币金融
    ('currency', '/ˈkʌrənsi/', 'n.', '货币', 'curr→跑→货币流通'),
    ('exchange', '/ɪksˈtʃeɪndʒ/', 'n./v.', '兑换，交换', 'ex-change→换出来→兑换'),
    ('rate', '/reɪt/', 'n.', '汇率，比率', 'rate→计算→汇率'),
    ('cash', '/kæʃ/', 'n.', '现金', 'cash→现金'),
    ('credit', '/ˈkredɪt/', 'n.', '信用', 'cred→相信→信用'),
    ('debit', '/ˈdebɪt/', 'n.', '借记', 'deb→债务→借记'),
    ('tip', '/tɪp/', 'n./v.', '小费，建议', 'tip→尖端→小费'),
    ('budget', '/ˈbʌdʒɪt/', 'n.', '预算', 'budget→预算'),
    ('expense', '/ɪkˈspens/', 'n.', '费用', 'ex-pense→支付→费用'),
    ('cost', '/kɔːst/', 'n./v.', '成本，花费', 'cost→花费'),

    # 411-420: 通讯联络
    ('wifi', '/ˈwaɪfaɪ/', 'n.', '无线网络', 'wi-fi→无线保真→无线网络'),
    ('internet', '/ˈɪntərnet/', 'n.', '互联网', 'inter-net→相互网→互联网'),
    ('signal', '/ˈsɪɡnəl/', 'n.', '信号', 'sign→标记→信号'),
    ('network', '/ˈnetwɜːrk/', 'n.', '网络', 'net+work→网+工作→网络'),
    ('roaming', '/ˈroʊmɪŋ/', 'n.', '漫游', 'roam→漫游'),
    ('charge', '/tʃɑːrdʒ/', 'n./v.', '充电，收费', 'charge→装载→充电'),
    ('adapter', '/əˈdæptər/', 'n.', '转换插头', 'adapt→适应→转换器'),
    ('simcard', '/ˈsɪm kɑːrd/', 'n.', 'SIM卡', 'sim+card→用户识别+卡'),
    ('call', '/kɔːl/', 'n./v.', '电话，呼叫', 'call→呼叫'),
    ('message', '/ˈmesɪdʒ/', 'n./v.', '消息', 'mess→送→消息'),

    # 421-430: 方位导航
    ('map', '/mæp/', 'n.', '地图', 'map→地图'),
    ('direction', '/dəˈrekʃn/', 'n.', '方向', 'di-rect→拉直→方向'),
    ('location', '/loʊˈkeɪʃn/', 'n.', '位置', 'loc→地方→位置'),
    ('address', '/əˈdres/', 'n.', '地址', 'ad-dress→朝向→地址'),
    ('route', '/ruːt/', 'n.', '路线', 'route→路→路线'),
    ('distance', '/ˈdɪstəns/', 'n.', '距离', 'di-stand→分开站→距离'),
    ('nearby', '/ˌnɪrˈbaɪ/', 'adj./adv.', '附近的', 'near+by→近+在→附近'),
    ('opposite', '/ˈɑːpəzɪt/', 'adj./prep.', '相反的，在对面', 'op-posit→对着放→相反'),
    ('adjacent', '/əˈdʒeɪsnt/', 'adj.', '相邻的', 'ad-jac→躺在旁边→相邻'),
    ('located', '/ˈloʊkeɪtɪd/', 'adj.', '位于', 'loc→地方→位于'),

    # 431-440: 建筑设施
    ('tower', '/ˈtaʊər/', 'n.', '塔', 'tower→塔'),
    ('bridge', '/brɪdʒ/', 'n.', '桥', 'bridge→桥'),
    ('castle', '/ˈkæsl/', 'n.', '城堡', 'cast→堡垒→城堡'),
    ('palace', '/ˈpæləs/', 'n.', '宫殿', 'palace→帕拉丁山→宫殿'),
    ('temple', '/ˈtempl/', 'n.', '寺庙', 'templ→神庙→寺庙'),
    ('cathedral', '/kəˈθiːdrəl/', 'n.', '大教堂', 'cathedra→主教座→大教堂'),
    ('museum', '/mjuˈziːəm/', 'n.', '博物馆', 'muse→缪斯→博物馆'),
    ('gallery', '/ˈɡæləri/', 'n.', '画廊', 'galler→长廊→画廊'),
    ('library', '/ˈlaɪbreri/', 'n.', '图书馆', 'libr→书→图书馆'),
    ('memorial', '/məˈmɔːriəl/', 'n./adj.', '纪念馆，纪念的', 'memor→记忆→纪念'),

    # 441-450: 宗教文化
    ('religion', '/rɪˈlɪdʒən/', 'n.', '宗教', 're-lig→绑→宗教'),
    ('sacred', '/ˈseɪkrɪd/', 'adj.', '神圣的', 'sacr→神圣→神圣'),
    ('holy', '/ˈhoʊli/', 'adj.', '神圣的', 'holy→神圣'),
    ('worship', '/ˈwɜːrʃɪp/', 'n./v.', '崇拜，礼拜', 'wor-th→值得→崇拜'),
    ('ceremony', '/ˈserəmoʊni/', 'n.', '仪式', 'cere→神圣→仪式'),
    ('ritual', '/ˈrɪtʃuəl/', 'n./adj.', '仪式，仪式的', 'rit→计算→仪式'),
    ('tradition', '/trəˈdɪʃn/', 'n.', '传统', 'tra-dit→给→传统'),
    ('customary', '/ˈkʌstəmeri/', 'adj.', '习惯的', 'custom→习惯+ary→习惯的'),
    ('belief', '/bɪˈliːf/', 'n.', '信仰', 'be-lief→爱→信仰'),
    ('spiritual', '/ˈspɪrɪtʃuəl/', 'adj.', '精神的', 'spirit→呼吸→精神'),

    # 451-460: 人群身份
    ('traveler', '/ˈtrævələr/', 'n.', '旅行者', 'travel→旅行+er→旅行者'),
    ('tourist', '/ˈtʊrɪst/', 'n.', '游客', 'tour→旅游+ist→游客'),
    ('visitor', '/ˈvɪzɪtər/', 'n.', '访客', 'visit→访问+or→访客'),
    ('guest', '/ɡest/', 'n.', '客人', 'guest→客人'),
    ('passenger', '/ˈpæsɪndʒər/', 'n.', '乘客', 'pass→通过+enger→乘客'),
    ('stranger', '/ˈstreɪndʒər/', 'n.', '陌生人', 'strange→奇怪+er→陌生人'),
    ('foreigner', '/ˈfɔːrənər/', 'n.', '外国人', 'foreign→外国的+er→外国人'),
    ('local', '/ˈloʊkl/', 'n.', '本地人', 'loc→地方+al→本地的'),
    ('resident', '/ˈrezɪdənt/', 'n.', '居民', 'resid→坐→居民'),
    ('native', '/ˈneɪtɪv/', 'n./adj.', '本地人，本地的', 'nat→出生→本地的'),

    # 461-470: 感受体验
    ('experience', '/ɪkˈspɪriəns/', 'n./v.', '经历，体验', 'ex-peri→尝试→经历'),
    ('impression', '/ɪmˈpreʃn/', 'n.', '印象', 'im-press→压进去→印象'),
    ('recollection', '/ˌrekəˈlekʃn/', 'n.', '回忆', 're-collect→再收集→回忆'),
    ('atmosphere', '/ˈætməsfɪr/', 'n.', '气氛', 'atmo→蒸汽→气氛'),
    ('mood', '/muːd/', 'n.', '心情', 'mood→心情'),
    ('feeling', '/ˈfiːlɪŋ/', 'n.', '感觉', 'feel→感觉'),
    ('satisfaction', '/ˌsætɪsˈfækʃn/', 'n.', '满意', 'satis→足够→满意'),
    ('disappoint', '/ˌdɪsəˈpɔɪnt/', 'v.', '失望', 'dis-appoint→不指定→失望'),
    ('surprise', '/sərˈpraɪz/', 'n./v.', '惊喜', 'sur-prise→抓→惊喜'),
    ('excitement', '/ɪkˈsaɪtmənt/', 'n.', '兴奋', 'ex-cite→唤起→兴奋'),

    # 471-480: 服务质量
    ('service', '/ˈsɜːrvɪs/', 'n.', '服务', 'serv→保持→服务'),
    ('quality', '/ˈkwɑːləti/', 'n.', '质量', 'qual→种类→质量'),
    ('facility', '/fəˈsɪləti/', 'n.', '设施', 'facil→容易→设施'),
    ('equipment', '/ɪˈkwɪpmənt/', 'n.', '设备', 'e-quip→配备→设备'),
    ('maintenance', '/ˈmeɪntənəns/', 'n.', '维护', 'main→保持→维护'),
    ('cleanliness', '/ˈklenlinəs/', 'n.', '清洁', 'clean→干净+ness→清洁'),
    ('comfort', '/ˈkʌmfərt/', 'n.', '舒适', 'com-fort→强力→舒适'),
    ('convenience', '/kənˈviːniəns/', 'n.', '便利', 'con-ven→来→便利'),
    ('efficiency', '/ɪˈfɪʃnsi/', 'n.', '效率', 'ef-fic→做→效率'),
    ('hospitality', '/ˌhɑːspɪˈtæləti/', 'n.', '好客，款待', 'hospit→客人→好客'),

    # 481-490: 评价反馈
    ('review', '/rɪˈvjuː/', 'n./v.', '评论', 're-view→再看→评论'),
    ('recommend', '/ˌrekəˈmend/', 'v.', '推荐', 're-commend→委托→推荐'),
    ('rating', '/ˈreɪtɪŋ/', 'n.', '评分', 'rate→计算→评分'),
    ('feedback', '/ˈfiːdbæk/', 'n.', '反馈', 'feed+back→喂养+回→反馈'),
    ('complaint', '/kəmˈpleɪnt/', 'n.', '投诉', 'com-plain→捶胸→投诉'),
    ('praise', '/preɪz/', 'n./v.', '赞扬', 'prais→价值→赞扬'),
    ('criticism', '/ˈkrɪtɪsɪzəm/', 'n.', '批评', 'crit→判断→批评'),
    ('suggestion', '/səɡˈdʒestʃən/', 'n.', '建议', 'sug-gest→携带→建议'),
    ('opinion', '/əˈpɪnjən/', 'n.', '意见', 'opin→想→意见'),
    ('comment', '/ˈkɑːment/', 'n./v.', '评论', 'com-ment→想→评论'),

    # 491-500: 旅行用品
    ('suitcase', '/ˈsuːtkeɪs/', 'n.', '行李箱', 'suit+case→套装+箱→行李箱'),
    ('travelbag', '/ˈtrævl bæɡ/', 'n.', '旅行包', 'travel+bag→旅行+包→旅行包'),
    ('passportholder', '/ˈpæspɔːrt hoʊldər/', 'n.', '护照夹', 'passport+holder→护照+夹'),
    ('traveladapter', '/ˈtrævl əˈdæptər/', 'n.', '旅行转换器', 'travel+adapter→旅行+转换器'),
    ('guidebook', '/ˈɡaɪdbʊk/', 'n.', '旅行指南', 'guide+book→指导+书→指南'),
    ('roadmap', '/ˈroʊdmæp/', 'n.', '路线图', 'road+map→路+图→路线图'),
    ('compass', '/ˈkʌmpəs/', 'n.', '指南针', 'com-pass→通过→指南针'),
    ('binoculars', '/bɪˈnɑːkjələrz/', 'n.', '双筒望远镜', 'bin-ocul→两眼→双筒望远镜'),
    ('umbrella', '/ʌmˈbrelə/', 'n.', '雨伞', 'um-brella→小阴影→雨伞'),
    ('sunglasses', '/ˈsʌnɡlɑːsɪz/', 'n.', '太阳镜', 'sun+glasses→太阳+眼镜→太阳镜')
]

def main():
    # 读取现有文件
    with open('src/data/tourism.json', 'r', encoding='utf-8') as f:
        data = json.load(f)

    print(f"当前数据条目数: {len(data)}")
    print(f"最后一条数据id: {data[-1]['id']}, frequency: {data[-1]['frequency']}")

    # 生成新条目 (id 6202-6500, frequency 202-500)
    start_id = 6202
    start_freq = 202
    new_entries = []

    for i, (root, phonetic, pos, meaning, mnemonic) in enumerate(tourism_roots):
        entry = {
            'id': start_id + i,
            'root': root,
            'phonetic': phonetic,
            'partOfSpeech': '词根',
            'meaning': meaning,
            'frequency': start_freq + i,
            'category': '旅游',
            'words': [
                {
                    'word': root,
                    'phonetic': phonetic,
                    'partOfSpeech': pos,
                    'meaning': meaning,
                    'memoryTip': f'词根 {root} 表示 {meaning}',
                    'root': root,
                    'rootPhonetic': phonetic,
                    'rootMeaning': meaning,
                    'rootPhrases': [f'{root} {meaning}'],
                    'wordPhrases': [f'{root} {meaning}']
                }
            ],
            'phrases': [f'{root} {meaning}'],
            'mnemonic': mnemonic
        }
        new_entries.append(entry)

    # 追加新条目
    data.extend(new_entries)

    print(f"新增条目数: {len(new_entries)}")
    print(f"总条目数: {len(data)}")
    print(f"新数据范围: id {data[-300]['id']} - {data[-1]['id']}")
    print(f"frequency范围: {data[-300]['frequency']} - {data[-1]['frequency']}")

    # 写回文件
    with open('src/data/tourism.json', 'w', encoding='utf-8') as f:
        json.dump(data, f, ensure_ascii=False, indent=2)

    print("数据追加完成!")

if __name__ == '__main__':
    main()
