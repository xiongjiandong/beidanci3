const fs = require('fs');

// 300个旅游词根数据
const roots = [
  // 501-550: 基础旅游概念
  [6501, "itinerary", "/aɪˈtɪnəreri/", "行程，路线", ["travel itinerary 旅行行程", "detailed itinerary 详细行程", "itinerary planning 行程规划", "flexible itinerary 灵活行程"], "itin→走→行程路线"],
  [6502, "excursion", "/ɪkˈskɜːrʒn/", "短途旅行", ["day excursion 一日游", "guided excursion 有导游的短途旅行", "boat excursion 乘船游览", "shore excursion 岸上观光"], "ex-curs→跑出去→短途旅行"],
  [6503, "cruise", "/kruːz/", "游轮", ["cruise ship 游轮", "cruise line 邮轮公司", "river cruise 河轮", "cruise vacation 游轮度假"], "cruise→巡航→游轮"],
  [6504, "resort", "/rɪˈzɔːrt/", "度假村", ["beach resort 海滨度假村", "ski resort 滑雪度假村", "luxury resort 豪华度假村", "all-inclusive resort 全包度假村"], "re-sort→再去的地方→度假胜地"],
  [6505, "expedition", "/ˌekspəˈdɪʃn/", "探险", ["scientific expedition 科学考察", "Arctic expedition 北极探险", "mountain expedition 登山探险", "expedition team 探险队"], "ex-ped→走出去→探险远征"],
  [6506, "safari", "/səˈfɑːri/", "野生动物观察游", ["African safari 非洲野生动物游", "safari park 野生动物园", "photo safari 摄影游猎", "safari guide 导游"], "safari→非洲旅行→野生动物游"],
  [6507, "adventure", "/ədˈventʃər/", "冒险", ["adventure travel 探险旅行", "adventure story 冒险故事", "spirit of adventure 冒险精神", "adventure sports 极限运动"], "ad-vent→向未知走来→冒险"],
  [6508, "sightseeing", "/ˈsaɪtsiːɪŋ/", "观光", ["sightseeing tour 观光游", "go sightseeing 去观光", "sightseeing bus 观光巴士", "city sightseeing 城市观光"], "sight+seeing→看景色→观光"],
  [6509, "destination", "/ˌdestɪˈneɪʃn/", "目的地", ["popular destination 热门目的地", "final destination 最终目的地", "tourist destination 旅游目的地", "dream destination 梦想目的地"], "destin→注定→目的地"],
  [6510, "attraction", "/əˈtrækʃn/", "景点", ["tourist attraction 旅游景点", "main attraction 主要景点", "popular attraction 热门景点", "local attraction 当地景点"], "at-tract→拉过来→吸引力→景点"],
  [6511, "landmark", "/ˈlændmɑːrk/", "地标", ["famous landmark 著名地标", "historical landmark 历史地标", "city landmark 城市地标", "national landmark 国家地标"], "land+mark→土地标记→地标"],
  [6512, "monument", "/ˈmɑːnjumənt/", "纪念碑", ["historical monument 历史纪念碑", "national monument 国家纪念碑", "ancient monument 古代遗迹", "visit monument 参观纪念碑"], "monu→提醒→纪念碑"],
  [6513, "heritage", "/ˈherɪtɪdʒ/", "遗产", ["cultural heritage 文化遗产", "world heritage 世界遗产", "natural heritage 自然遗产", "heritage site 遗产地"], "herit→继承→遗产"],
  [6514, "scenery", "/ˈsiːnəri/", "风景", ["beautiful scenery 美丽风景", "natural scenery 自然风光", "mountain scenery 山景", "enjoy scenery 欣赏风景"], "scene→场景→风景"],
  [6515, "panorama", "/ˌpænəˈræmə/", "全景", ["panorama view 全景视野", "stunning panorama 壮丽全景", "360 panorama 360度全景", "city panorama 城市全景"], "pan→全+orama→视野→全景"],
  [6516, "vista", "/ˈvɪstə/", "远景", ["scenic vista 优美远景", "beautiful vista 美丽远景", "mountain vista 山景", "ocean vista 海景"], "vis→看→远景"],
  [6517, "oasis", "/oʊˈeɪsɪs/", "绿洲", ["desert oasis 沙漠绿洲", "tropical oasis 热带绿洲", "urban oasis 城市绿洲", "oasis resort 绿洲度假村"], "oasis→绿洲"],
  [6518, "waterfall", "/ˈwɔːtərfɔːl/", "瀑布", ["magnificent waterfall 壮丽瀑布", "tall waterfall 高瀑布", "waterfall hike 瀑布徒步", "under waterfall 瀑布下"], "water+fall→水落下→瀑布"],
  [6519, "volcano", "/vɑːlˈkeɪnoʊ/", "火山", ["active volcano 活火山", "dormant volcano 休眠火山", "volcano eruption 火山爆发", "volcano tour 火山游"], "volcan→火山"],
  [6520, "glacier", "/ˈɡleɪʃər/", "冰川", ["melting glacier 融化的冰川", "glacier hiking 冰川徒步", "glacier tour 冰川游", "visit glacier 参观冰川"], "glaci→冰→冰川"],
  [6521, "canyon", "/ˈkænjən/", "峡谷", ["grand canyon 大峡谷", "deep canyon 深峡谷", "canyon trail 峡谷步道", "canyon view 峡谷景观"], "canyon→峡谷"],
  [6522, "cave", "/keɪv/", "洞穴", ["underground cave 地下洞穴", "limestone cave 石灰岩洞", "cave exploring 洞穴探险", "cave painting 洞穴壁画"], "cave→洞穴"],
  [6523, "reef", "/riːf/", "礁石", ["coral reef 珊瑚礁", "reef diving 礁潜", "great barrier reef 大堡礁", "reef ecosystem 礁生态系统"], "reef→礁石"],
  [6524, "wetland", "/ˈwetlænd/", "湿地", ["coastal wetland 沿海湿地", "wetland park 湿地公园", "wetland reserve 湿地保护区", "wetland tour 湿地游"], "wet+land→湿地"],
  [6525, "waterfront", "/ˈwɔːtərfrʌnt/", "滨水区", ["waterfront area 滨水区", "waterfront promenade 滨水步道", "waterfront hotel 滨水酒店", "waterfront restaurant 滨水餐厅"], "water+front→水边→滨水区"],
  [6526, "boardwalk", "/ˈbɔːrdwɔːk/", "木板路", ["beach boardwalk 海滩木板路", "boardwalk shops 木板路商店", "stroll boardwalk 漫步木板路", "ocean boardwalk 海边木板路"], "board+walk→木板路"],
  [6527, "promenade", "/ˌprɑːməˈnɑːd/", "散步道", ["seaside promenade 海滨散步道", "evening promenade 晚间散步", "promenade deck 散步甲板", "take a promenade 散步"], "promen→散步→散步道"],
  [6528, "plaza", "/ˈplɑːzə/", "广场", ["city plaza 城市广场", "town plaza 城镇广场", "central plaza 中央广场", "plaza square 广场"], "plaza→广场"],
  [6529, "boulevard", "/ˈbʊləvɑːrd/", "林荫大道", ["main boulevard 主林荫道", "famous boulevard 著名林荫道", "sunset boulevard 日落大道", "wide boulevard 宽阔林荫道"], "boulevard→林荫大道"],
  [6530, "alley", "/ˈæli/", "小巷", ["narrow alley 窄巷", "old alley 老巷子", "alley way 小巷", "historic alley 历史小巷"], "alley→小巷"],
  [6531, "pathway", "/ˈpæθweɪ/", "小径", ["garden pathway 花园小径", "nature pathway 自然小径", "walking pathway 步行小径", "scenic pathway 风景小径"], "path+way→小路→小径"],
  [6532, "trailhead", "/ˈtreɪlhed/", "步道起点", ["trailhead parking 步道起点停车场", "trailhead sign 步道起点标志", "main trailhead 主要步道起点", "trailhead map 步道起点地图"], "trail+head→步道头→步道起点"],
  [6533, "lookout", "/ˈlʊkaʊt/", "观景台", ["scenic lookout 风景观景台", "mountain lookout 山顶观景台", "coastal lookout 海岸观景台", "lookout point 观景点"], "look+out→向外看→观景台"],
  [6534, "viewpoint", "/ˈvjuːpɔɪnt/", "观景点", ["panoramic viewpoint 全景观景点", "stunning viewpoint 壮观观景点", "viewpoint terrace 观景平台", "best viewpoint 最佳观景点"], "view+point→观点→观景点"],
  [6535, "overlook", "/ˌoʊvərˈlʊk/", "俯瞰处", ["scenic overlook 风景俯瞰处", "cliff overlook 悬崖俯瞰处", "overlook trail 俯瞰步道", "overlook deck 观景平台"], "over+look→俯视→俯瞰处"],
  [6536, "terrace", "/ˈterəs/", "露台", ["roof terrace 屋顶露台", "ocean terrace 海景露台", "terraced garden 梯田花园", "outdoor terrace 户外露台"], "terr→土地→露台"],
  [6537, "pavilion", "/pəˈvɪliən/", "亭子", ["garden pavilion 花园亭子", "exhibition pavilion 展览馆", "Chinese pavilion 中式亭子", "band pavilion 音乐亭"], "pavilion→亭子"],
  [6538, "gazebo", "/ɡəˈziːboʊ/", "凉亭", ["garden gazebo 花园凉亭", "wooden gazebo 木凉亭", "gazebo shade 凉亭遮阳", "outdoor gazebo 户外凉亭"], "gazebo→凉亭"],
  [6539, "pagoda", "/pəˈɡoʊdə/", "宝塔", ["ancient pagoda 古塔", "Buddhist pagoda 佛塔", "pagoda tower 宝塔", "five-story pagoda 五层塔"], "pagoda→宝塔"],
  [6540, "shrine", "/ʃraɪn/", "神龛，圣地", ["holy shrine 圣坛", "ancient shrine 古神社", "shrine visit 参拜", "memorial shrine 纪念神龛"], "shrine→圣地→神龛"],
  [6541, "temple", "/ˈtempl/", "寺庙", ["Buddhist temple 佛教寺庙", "ancient temple 古寺", "temple complex 寺庙群", "temple visit 寺庙参观"], "templ→庙宇→寺庙"],
  [6542, "cathedral", "/kəˈθiːdrəl/", "大教堂", ["gothic cathedral 哥特式大教堂", "famous cathedral 著名大教堂", "cathedral square 大教堂广场", "cathedral tower 大教堂塔"], "cathedra→主教座→大教堂"],
  [6543, "chapel", "/ˈtʃæpl/", "小教堂", ["wedding chapel 婚礼小教堂", "private chapel 私人小教堂", "chapel service 礼拜", "chapel bell 教堂钟声"], "chapel→小教堂"],
  [6544, "mosque", "/mɑːsk/", "清真寺", ["grand mosque 大清真寺", "historic mosque 历史清真寺", "mosque visit 清真寺参观", "mosque architecture 清真寺建筑"], "mosque→清真寺"],
  [6545, "synagogue", "/ˈsɪnəɡɒɡ/", "犹太教堂", ["Jewish synagogue 犹太教堂", "historic synagogue 历史犹太教堂", "synagogue service 礼拜", "synagogue visit 参观犹太教堂"], "syna+go→聚集→犹太教堂"],
  [6546, "basilica", "/bəˈzɪlɪkə/", "大殿", ["ancient basilica 古代大殿", "basilica church 大殿教堂", "basilica architecture 大殿建筑", "visit basilica 参观大殿"], "basilica→王座→大殿"],
  [6547, "minaret", "/ˌmɪnəˈret/", "宣礼塔", ["tall minaret 高宣礼塔", "mosque minaret 清真寺宣礼塔", "minaret tower 宣礼塔", "minaret call 宣礼"], "minaret→灯塔→宣礼塔"],
  [6548, "dome", "/doʊm/", "圆顶", ["golden dome 金色圆顶", "dome structure 圆顶结构", "under the dome 圆顶下", "glass dome 玻璃穹顶"], "dome→圆顶"],
  [6549, "spire", "/ˈspaɪər/", "尖塔", ["church spire 教堂尖塔", "tall spire 高尖塔", "spire top 尖塔顶", "spire view 尖塔景观"], "spir→呼吸→尖塔"],
  [6550, "belfry", "/ˈbelfri/", "钟楼", ["church belfry 教堂钟楼", "belfry tower 钟楼塔", "belfry bell 钟楼钟", "climb belfry 爬钟楼"], "belfry→钟楼"],
];

function generateEntry(item) {
  const [id, root, phonetic, meaning, phrases, mnemonic] = item;
  const freq = id - 6000;
  return {
    id: id,
    root: root,
    phonetic: phonetic,
    partOfSpeech: "词根",
    meaning: meaning,
    frequency: freq,
    category: "旅游",
    words: [{
      word: root,
      phonetic: phonetic,
      partOfSpeech: "n.",
      meaning: meaning,
      memoryTip: `词根 ${root} 表示 ${meaning}`,
      root: root,
      rootPhonetic: phonetic,
      rootMeaning: meaning,
      rootPhrases: phrases,
      wordPhrases: phrases
    }],
    phrases: phrases,
    mnemonic: mnemonic
  };
}

const entries = roots.map(generateEntry);
const output = entries.map(e => "," + JSON.stringify(e, null, 2)).join("\n");

console.log(output);
