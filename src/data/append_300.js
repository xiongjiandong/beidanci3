import fs from 'fs';

// 300个Web3.0词根，按行业使用频率从高到低排序
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

// Generate entries
const newEntries = rootsData.map((data, i) => {
    const entryId = 201 + i;
    return generateEntry(entryId, data[0], data[1], data[2], data[3], data[4]);
});

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

console.log(`Successfully added ${newEntries.length} entries (ID 201-${200 + newEntries.length})`);
console.log('New entries:');
newEntries.forEach(e => console.log(`  - ID ${e.id}: ${e.root}`));
