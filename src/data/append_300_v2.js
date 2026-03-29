import fs from 'fs';

// 需要追加的300个Web3.0词根，按行业使用频率从高到低排序
const rootsData = [
    // Layer 1 公链核心 (201-230)
    ["ethereum", "/ɪˈθɪəriəm/", "n.", "以太坊", "Ether以太 + eum以太坊"],
    ["bitcoin", "/ˈbɪtkɔɪn/", "n.", "比特币", "Bit比特 + coin币"],
    ["solana", "/səˈlɑːnə/", "n.", "Solana公链", "高性能公链Solana"],
    ["polygon", "/ˈpɒlɪɡən/", "n.", "Polygon多边形", "以太坊扩容方案"],
    ["avalanche", "/ˈævəlɑːnʃ/", "n.", "雪崩协议", "Avalanche雪崩快速"],
    ["fantom", "/ˈfæntəm/", "n.", "Fantom幽灵", "快速公链Fantom"],
    ["harmony", "/ˈhɑːrməni/", "n.", "Harmony和谐", "分片公链Harmony"],
    ["cardano", "/kɑːrˈdɑːnoʊ/", "n.", "Cardano艾达", "学术派公链ADA"],
    ["polkadot", "/ˈpɒləkɒt/", "n.", "波卡", "多链互操作Polkadot"],
    ["cosmos", "/ˈkɒzmɒs/", "n.", "Cosmos宇宙", "区块链互联网IBC"],
    ["near", "/nɪər/", "n.", "NEAR协议", "Nightshade夜影分片"],
    ["algorand", "/ˈælɡərænd/", "n.", "Algorand", "纯PoS共识Algorand"],
    ["tezos", "/ˈteɪzɒs/", "n.", "Tezos", "自我修复链Tezos"],
    ["tron", "/trɒn/", "n.", "波场TRON", "娱乐公链Tron"],
    ["eos", "/iːɒses/", "n.", "EOS柚子", "企业操作系统EOS"],
    ["stellar", "/ˈstelər/", "n.", "恒星Stellar", "支付网络XLM"],
    ["vechain", "/viːtʃeɪn/", "n.", "唯链VeChain", "供应链追踪VET"],
    ["iota", "/aɪˈoʊtə/", "n.", "IOTA埃欧塔", "物联网链Tangle"],
    ["flow", "/floʊ/", "n.", "Flow流", "NFT公链Flow"],
    ["aptos", "/ˈæptɒs/", "n.", "Aptos", "Meta系公链Aptos"],
    ["sui", "/swiː/", "n.", "Sui", "Move语言公链Sui"],
    ["cronos", "/ˈkroʊnɒs/", "n.", "Cronos", "Crypto.com链Cronos"],
    ["klaytn", "/kleɪtn/", "n.", "Klaytn", "韩国公链Klaytn"],
    ["heco", "/hiːkoʊ/", "n.", "火币生态链HECO", "Huobi生态链"],
    ["bsc", "/biːesˈsiː/", "n.", "币安智能链BSC", "Binance智能链"],
    ["arbitrum", "/ˈɑːrbɪtrəm/", "n.", "Arbitrum", "以太坊L2扩容"],
    ["optimism", "/ˈɒptɪmɪzəm/", "n.", "Optimism", "乐观OP扩容"],
    ["zksync", "/ziːkeɪˈsɪŋk/", "n.", "zkSync", "ZK Rollup同步"],
    ["starknet", "/stɑːrknet/", "n.", "StarkNet", "STARK证明网络"],
    ["base", "/beɪs/", "n.", "Base链", "Coinbase L2链"],

    // DeFi核心协议 (231-260)
    ["defi", "/diːˈfaɪ/", "n.", "去中心化金融", "Decentralized Finance"],
    ["dex", "/deks/", "n.", "去中心化交易所", "DEX交易协议"],
    ["amm", "/eɪemem/", "n.", "自动做市商", "AMM自动做市"],
    ["lp", "/elempiː/", "n.", "流动性提供者", "LP流动性挖矿"],
    ["yield", "/jiːld/", "n.", "收益Yield", "yield farming收益耕作"],
    ["staking", "/ˈsteɪkɪŋ/", "n.", "质押Staking", "stake质押代币"],
    ["uniswap", "/ˈjuːnɪswɒp/", "n.", "Uniswap", "UNI独角兽交换"],
    ["aave", "/ɑːveɪ/", "n.", "Aave幽灵", "芬兰语幽灵借贷"],
    ["compound", "/ˈkɒmpaʊnd/", "n.", "Compound", "复利借贷协议"],
    ["makerdao", "/ˈmeɪkərdaʊ/", "n.", "MakerDAO", "DAI稳定币铸造"],
    ["curve", "/kɜːrv/", "n.", "Curve曲线", "稳定币DEX曲线"],
    ["sushi", "/ˈsuːʃi/", "n.", "Sushi寿司", "SushiSwap寿司交换"],
    ["pancake", "/ˈpænkeɪk/", "n.", "Pancake煎饼", "PancakeSwap煎饼"],
    ["lido", "/ˈliːdoʊ/", "n.", "Lido", "流动性质押stETH"],
    ["rocket", "/ˈrɒkɪt/", "n.", "Rocket Pool", "rETH火箭质押"],
    ["convex", "/ˈkɒnveks/", "n.", "Convex", "Curve优化器CVX"],
    ["yearn", "/jɜːrn/", "n.", "Yearn", "收益聚合器YFI"],
    ["balancer", "/ˈbælənsər/", "n.", "Balancer", "加权池Balancer"],
    ["dydx", "/dɪˈdaɪdeks/", "n.", "dYdX", "去中心化永续DEX"],
    ["gmx", "/dʒiːemeks/", "n.", "GMX", "Arbitrum去中心化永续"],
    ["perp", "/pɜːrp/", "n.", "永续合约PERP", "perpetual永续协议"],
    ["synthetix", "/ˈsɪnθətɪks/", "n.", "Synthetix", "合成资产协议SNX"],
    ["liquity", "/ˈlɪkwəti/", "n.", "Liquity", "ETH无息借贷LUSD"],
    ["ribbon", "/ˈrɪbən/", "n.", "Ribbon", "期权库Ribbon"],
    ["opyn", "/oʊˈpaɪn/", "n.", "Opyn", "期权协议Opyn"],
    ["instadapp", "/ˈɪnstədæp/", "n.", "Instadapp", "DeFi聚合管理"],
    ["zapper", "/ˈzæpər/", "n.", "Zapper", "DeFi仪表板"],
    ["1inch", "/wʌnɪntʃ/", "n.", "1inch", "DEX聚合器1inch"],
    ["cowswap", "/kaʊswɒp/", "n.", "CoWSwap", "MEV保护交换"],
    ["0x", "/ziːroʊeks/", "n.", "0x协议", "DEX底层协议ZRX"],

    // DeFi扩展 (261-280)
    ["bancor", "/ˈbænkɔːr/", "n.", "Bancor", "AMM始祖班科"],
    ["kyber", "/ˈkaɪbər/", "n.", "Kyber", "流动性协议Kyber"],
    ["loopring", "/ˈluːprɪŋ/", "n.", "路印Loopring", "ZK Rollup DEX"],
    ["dodo", "/ˈdoʊdoʊ/", "n.", "DODO渡渡鸟", "PMM主动做市"],
    ["quickswap", "/ˈkwɪkswɒp/", "n.", "QuickSwap", "Polygon快速交换"],
    ["traderjoe", "/ˈtreɪdərdʒoʊ/", "n.", "TraderJoe", "Avalanche交易员Joe"],
    ["spookyswap", "/ˈspuːkiswɒp/", "n.", "SpookySwap", "Fantom幽灵交换"],
    ["raydium", "/ˈreɪdiəm/", "n.", "Raydium", "Solana AMM Ray"],
    ["orca", "/ˈɔːrkə/", "n.", "Orca虎鲸", "Solana DEX虎鲸"],
    ["jupiter", "/ˈdʒuːpɪtər/", "n.", "Jupiter", "Solana聚合木星"],
    ["frax", "/fræks/", "n.", "Frax", "部分抵押稳定币FRAX"],
    ["crv", "/siːɑːrˈviː/", "n.", "CRV曲线币", "Curve治理代币"],
    ["cvx", "/siːviːˈeks/", "n.", "CVX", "Convex代币"],
    ["snx", "/ɛsɛnˈeks/", "n.", "SNX", "Synthetix代币"],
    ["mkr", "/emkeɪˈɑːr/", "n.", "MKR", "Maker治理代币"],
    ["aavegotchi", "/ɑːveɪˈɡɒtʃi/", "n.", "Aavegotchi", "DeFi+NFT幽灵宠物"],
    ["tornado", "/tɔːrˈneɪdoʊ/", "n.", "Tornado", "混币器龙卷风"],
    ["lending", "/ˈlendɪŋ/", "n.", "借贷协议", "DeFi借贷"],
    ["borrowing", "/ˈbɒroʊɪŋ/", "n.", "借款", "抵押借款"],
    ["collateral", "/kəˈlætərəl/", "n.", "抵押品", "抵押资产"],

    // NFT与元宇宙 (281-300)
    ["opensea", "/ˈoʊpnsiː/", "n.", "OpenSea", "NFT交易所OpenSea"],
    ["blur", "/blɜːr/", "n.", "Blur", "专业NFT市场Blur"],
    ["x2y2", "/ekstuwaiːtuː/", "n.", "X2Y2", "NFT市场X2Y2"],
    ["looks", "/lʊks/", "n.", "LooksRare", "LOOKS稀有外观"],
    ["mint", "/mɪnt/", "v.", "铸造Mint", "铸币厂铸造"],
    ["airdrop", "/ˈeədrɒp/", "n.", "空投", "air空中+drop掉落"],
    ["whitelist", "/ˈwaɪtlɪst/", "n.", "白名单", "white白+list名单"],
    ["goblintown", "/ˈɡɒblɪntaʊn/", "n.", "哥布林镇", "Free Mint NFT"],
    ["azuki", "/ɑːˈzuːki/", "n.", "Azuki红豆", "动漫风NFT红豆"],
    ["doodles", "/ˈduːdlz/", "n.", "Doodles涂鸦", "彩色涂鸦NFT"],
    ["coolcats", "/kuːlkæts/", "n.", "酷猫", "Cool Cats NFT"],
    ["boredape", "/bɔːrdeɪp/", "n.", "无聊猿", "BAYC无聊猿俱乐部"],
    ["punks", "/pʌŋks/", "n.", "加密朋克", "CryptoPunks OG"],
    ["artblocks", "/ˈɑːrtblɒks/", "n.", "Art Blocks", "生成艺术积木"],
    ["superrare", "/ˈsuːpəreər/", "n.", "SuperRare", "超级稀有艺术"],
    ["foundation", "/faʊnˈdeɪʃn/", "n.", "Foundation", "基础艺术NFT平台"],
    ["manifold", "/ˈmænɪfoʊld/", "n.", "Manifold", "NFT创作工具"],
    ["snapshot", "/ˈsnæpʃɒt/", "n.", "Snapshot快照", "投票快照工具"],
    ["poap", "/poʊæp/", "n.", "POAP", "Proof of Attendance Protocol"],

    // DAO与治理 (301-330)
    ["dao", "/daʊ/", "n.", "去中心化自治组织", "Decentralized Autonomous Organization"],
    ["governance", "/ˈɡʌvərnəns/", "n.", "治理", "链上治理协议"],
    ["proposal", "/prəˈpoʊzl/", "n.", "提案", "治理提案Proposal"],
    ["voting", "/ˈvoʊtɪŋ/", "n.", "投票", "链上投票Voting"],
    ["treasury", "/ˈtreʒəri/", "n.", "财库", "DAO财库Treasury"],
    ["multisig", "/ˈmʌltisɪɡ/", "n.", "多签", "Multi-signature多重签名"],
    ["gnosis", "/ˈnoʊsɪs/", "n.", "Gnosis", "多签钱包Gnosis Safe"],
    ["snapshot", "/ˈsnæpʃɒt/", "n.", "Snapshot快照", "去中心化投票快照"],
    ["tally", "/ˈtæli/", "n.", "Tally", "链上治理投票平台"],
    ["aragon", "/ˈærəɡɒn/", "n.", "Aragon", "DAO创建平台"],
    ["moloch", "/ˈmoʊlɒk/", "n.", "Moloch", "Moloch DAO框架"],
    ["colony", "/ˈkɒləni/", "n.", "Colony", "DAO协作平台"],
    ["syndicate", "/ˈsɪndɪkət/", "n.", "Syndicate", "投资DAO平台"],
    ["juicebox", "/ˈdʒuːsbɒks/", "n.", "Juicebox", "DAO融资平台"],
    ["partybid", "/ˈpɑːrtibɪd/", "n.", "PartyBid", "集体竞价NFT"],
    ["fwb", "/efˈdʌbljuːbiː/", "n.", "FWB", "Friends With Benefits DAO"],
    ["pleasrdao", "/ˈpliːzərdæʊ/", "n.", "PleasrDAO", " collectivedao收藏DAO"],
    ["constitutiondao", "/ˌkɒnstɪˈtjuːʃndæʊ/", "n.", "ConstitutionDAO", "宪法DAO"],
    ["indexcoop", "/ˈɪndekskuːp/", "n.", "Index Coop", "指数产品DAO"],
    ["lido-dao", "/ˈliːdoʊdaʊ/", "n.", "Lido DAO", "Lido治理DAO"],
    ["uniswap-dao", "/ˈjuːnɪswɒpdaʊ/", "n.", "Uniswap DAO", "Uniswap治理"],
    ["aave-dao", "/ɑːveɪdaʊ/", "n.", "Aave DAO", "Aave治理DAO"],
    ["compound-dao", "/ˈkɒmpaʊnddaʊ/", "n.", "Compound DAO", "Compound治理"],
    ["maker-dao", "/ˈmeɪkərdaʊ/", "n.", "Maker DAO", "Maker治理"],
    ["ens-dao", "/iːenesdiːeɪoʊ/", "n.", "ENS DAO", "ENS域名治理"],
    ["optimism-dao", "/ˈɒptɪmɪzəmdiːeɪoʊ/", "n.", "Optimism DAO", "OP治理"],
    ["arbitrum-dao", "/ˈɑːrbɪtrəmmdiːeɪoʊ/", "n.", "Arbitrum DAO", "ARB治理"],
    ["delegate", "/ˈdelɪɡət/", "n./v.", "委托", "治理权委托Delegate"],
    ["quorum", "/ˈkwɔːrəm/", "n.", "法定人数", "投票通过门槛Quorum"],
    ["timelock", "/ˈtaɪmlɒk/", "n.", "时间锁", "延迟执行Timelock"],

    // 跨链与桥接 (331-360)
    ["bridge", "/brɪdʒ/", "n.", "跨链桥", "Bridge跨链桥接"],
    ["crosschain", "/ˈkrɒstʃeɪn/", "adj.", "跨链的", "Cross-chain跨链"],
    ["multichain", "/ˈmʌltitʃeɪn/", "adj.", "多链的", "Multi-chain多链"],
    ["omnichain", "/ˈɒmnitʃeŋ/", "adj.", "全链的", "Omnichain全链"),
    ["layerzero", "/ˈleɪərˈzɪərəʊ/", "n.", "LayerZero", "全链互操作协议"],
    ["wormhole", "/ˈwɜːrmhoʊl/", "n.", "Wormhole虫洞", "跨链桥Wormhole"],
    ["multichain-protocol", "/ˈmʌltitʃeɪnˈproʊtəkɒl/", "n.", "Multichain", "跨链路由器"],
    ["anyswap", "/ˈɛniswɒp/", "n.", "Anyswap", "跨链交换Anyswap"],
    ["celer", "/ˈsɛlər/", "n.", "Celer", "cBridge跨链桥"],
    ["hop", "/hɒp/", "n.", "Hop", "Rollup跨链桥Hop"],
    ["stargate", "/ˈstɑːrɡeɪt/", "n.", "Stargate", "跨链流动性Stargate"],
    ["synapse", "/ˈsɪnæps/", "n.", "Synapse", "跨链Synapse"],
    ["across", "/əˈkrɒs/", "n.", "Across", "意图跨链Across"],
    ["connext", "/ˈkɒnekst/", "n.", "Connext", "xChain协议Connext"),
    ["nomad", "/ˈnoʊmæd/", "n.", "Nomad", "跨链桥Nomad"],
    ["axelar", "/ˈæksələr/", "n.", "Axelar", "跨链通信Axelar"],
    ["hyperlane", "/ˈhaɪpərleɪn/", "n.", "Hyperlane", "模块化跨链"),
    ["ibc", "/aɪbiːsiː/", "n.", "IBC跨链通信", "Inter-Blockchain Communication"],
    ["gravity", "/ˈɡrævəti/", "n.", "Gravity Bridge", "Cosmos跨链桥"),
    ["pontem", "/ˈpɒntəm/", "n.", "Pontem", "Move跨链Pontem"),
    ["allbridge", "/ˈɔːlbrɪdʒ/", "n.", "Allbridge", "多链桥Allbridge"),
    ["portal", "/ˈpɔːrtl/", "n.", "Portal", "Wormhole官方桥"),
    ["debridge", "/diːˈbrɪdʒ/", "n.", "deBridge", "通用跨链桥"),
    ["router", "/ˈruːtər/", "n.", "Router Protocol", "跨链路由器"),
    ["swim", "/swɪm/", "n.", "Swim", "多链流动性Swim"),
    ["mayan", "/ˈmaɪən/", "n.", "Mayan", "跨链拍卖Mayan"),
    ["hashflow", "/ˈhæʃfloʊ/", "n.", "Hashflow", "MEV-free跨链DEX"),
    ["swapsicle", "/ˈswɒpsɪkl/", "n.", "Swapsicle", "多链DEX"),
    ["li-fi", "/elaɪˈɛfaɪ/", "n.", "LI.FI", "跨链聚合器LI.FI"),
    ["socket", "/ˈsɒkɪt/", "n.", "Socket", "互操作性Socket"),

    // 安全与审计 (361-390)
    ["audit", "/ˈɔːdɪt/", "n./v.", "审计", "智能合约审计Audit"),
    ["certik", "/ˈsɜːrtɪk/", "n.", "CertiK", "CertiK安全审计"),
    ["trailofbits", "/treɪləvbɪts/", "n.", "Trail of Bits", "安全审计公司"),
    ["openzeppelin", "/ˈoʊpənˈzepəlɪn/", "n.", "OpenZeppelin", "安全合约标准"),
    ["consensys", "/kənˈsɛnsɪs/", "n.", "ConsenSys", "以太坊开发公司"),
    ["immunefi", "/ɪˈmjuːnəfaɪ/", "n.", "Immunefi", "漏洞赏金平台"),
    ["code4rena", "/koʊdfɔːˈriːnə/", "n.", "Code4rena", "审计竞赛平台"),
    ["sherlock", "/ˈʃɜːrlɒk/", "n.", "Sherlock", "智能合约保险"),
    ["tenderly", "/ˈtɛndərli/", "n.", "Tenderly", "开发调试平台"),
    ["forta", "/ˈfɔːrtə/", "n.", "Forta", "实时监控网络"),
    ["chaoslabs", "/ˈkeɪɒslæbz/", "n.", "Chaos Labs", "风险模拟平台"),
    ["gauntlet", "/ˈɡɔːntlət/", "n.", "Gauntlet", "DeFi风险管理"),
    ["blocksec", "/blɒksɛk/", "n.", "BlockSec", "区块链安全公司"),
    ["slowmist", "/sloʊmɪst/", "n.", "SlowMist慢雾", "安全审计慢雾"),
    ["peckshield", "/pɛkʃiːld/", "n.", "PeckShield派盾", "安全公司派盾"),
    ["quantstamp", "/ˈkwɒntstæmp/", "n.", "Quantstamp", "智能合约审计"),
    ["hacken", "/ˈhækən/", "n.", "Hacken", "网络安全公司"),
    ["hashdit", "/ˈhæʃdɪt/", "n.", "HashDit", "BSC安全审计"),
    ["salus", "/ˈseɪləs/", "n.", "Salus", "安全审计平台"),
    ["secbit", "/ˈsɛkbɪt/", "n.", "Secbit", "赛博审计"),
    ["fairyproof", "/ˈfeəripruːf/", "n.", "Fairyproof", "仙子证明审计"),
    ["diligence", "/ˈdɪlɪdʒəns/", "n.", "ConsenSys Diligence", "ConsenSys审计"),
    ["runtime", "/ˈrʌntaɪm/", "n.", "Runtime Verification", "形式化验证"),
    ["formal", "/ˈfɔːrml/", "adj.", "形式化", "Formal Verification形式化验证"),
    ["fuzzing", "/ˈfʌzɪŋ/", "n.", "模糊测试", "Fuzz Test模糊测试"),
    ["symbolic", "/sɪmˈbɒlɪk/", "adj.", "符号执行", "Symbolic Execution"),
    ["slither", "/ˈslɪðər/", "n.", "Slither", "静态分析工具"),
    ["mythril", "/ˈmɪθrɪl/", "n.", "Mythril", "智能合约分析"),
    ["echidna", "/ɪˈkɪdnə/", "n.", "Echidna", "模糊测试工具"),
    ["manticore", "/ˈmæntɪkɔːr/", "n.", "Manticore", "符号执行工具")
];

function generateEntry(entryId, root, phonetic, pos, meaning, mnemonic) {
    const phrases = [
        `${root} ecosystem`,
        `${root} protocol`,
        `${root} network`,
        `${root} token`
    ];

    const words = [
        {
            word: root,
            phonetic: phonetic,
            partOfSpeech: "n.",
            meaning: meaning,
            memoryTip: mnemonic,
            root: root,
            rootPhonetic: phonetic,
            rootMeaning: meaning,
            rootPhrases: phrases,
            wordPhrases: phrases
        },
        {
            word: `${root}-protocol`,
            phonetic: `${phonetic} ˈproʊtəkɒl`,
            partOfSpeech: "n.",
            meaning: `${meaning}协议`,
            memoryTip: `${root}协议`,
            root: root,
            rootPhonetic: phonetic,
            rootMeaning: meaning,
            rootPhrases: phrases,
            wordPhrases: phrases
        },
        {
            word: `${root}-based`,
            phonetic: `${phonetic} beɪst`,
            partOfSpeech: "adj.",
            meaning: `基于${meaning}的`,
            memoryTip: `${root} + based`,
            root: root,
            rootPhonetic: phonetic,
            rootMeaning: meaning,
            rootPhrases: phrases,
            wordPhrases: phrases
        },
        {
            word: `${root}ing`,
            phonetic: `${phonetic}ɪŋ`,
            partOfSpeech: "v.",
            meaning: `参与${meaning}`,
            memoryTip: `使用${root}`,
            root: root,
            rootPhonetic: phonetic,
            rootMeaning: meaning,
            rootPhrases: phrases,
            wordPhrases: phrases
        }
    ];

    return {
        id: entryId,
        root: root,
        phonetic: phonetic,
        partOfSpeech: pos,
        frequency: entryId,
        category: "Web3.0",
        words: words,
        phrases: phrases.map(p => `${p} (待翻译)`),
        mnemonic: `${root} → ${meaning} → ${root}`,
        meaning: meaning
    };
}

// Check data length
console.log(`Total roots in data: ${rootsData.length}`);

// Generate entries for ID 300-500
const newEntries = [];
for (let i = 300; i <= 500; i++) {
    const dataIndex = i - 300;
    if (dataIndex < rootsData.length) {
        const data = rootsData[dataIndex];
        newEntries.push(generateEntry(i, data[0], data[1], data[2], data[3], data[4]));
    }
}

console.log(`Generated ${newEntries.length} entries (ID ${newEntries[0]?.id || 'N/A'}-${newEntries[newEntries.length-1]?.id || 'N/A'})`);

if (newEntries.length === 0) {
    console.log('No entries to add');
    process.exit(0);
}

// Read existing file
const filePath = 'f:/claudeanli/beidanci3/src/data/web3.json';
let content = fs.readFileSync(filePath, 'utf-8');

// Remove trailing ] and whitespace
content = content.trim();
if (content.endsWith(']')) {
    content = content.slice(0, -1);
}

// Add comma if needed
content = content.trimEnd();
if (!content.endsWith(',')) {
    content += ',';
}

// Add new entries
const newEntriesJson = JSON.stringify(newEntries, null, 2);
const newContent = newEntriesJson.slice(1, -1); // Remove outer [ and ]

content += '\n' + newContent + '\n]';

// Write back
fs.writeFileSync(filePath, content, 'utf-8');

console.log(`Successfully added ${newEntries.length} entries to web3.json`);
