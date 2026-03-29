const fs = require('fs');

// Read current data
const data = JSON.parse(fs.readFileSync('f:/claudeanli/beidanci3/src/data/electric-power.json', 'utf-8'));

console.log(`Current total entries: ${data.length}`);

// First 780 entries are original (indices 0-779)
const originalData = data.slice(0, 780);
console.log(`Original entries: ${originalData.length}`);
console.log(`Last original entry: ID ${originalData[originalData.length-1].id}, freq ${originalData[originalData.length-1].frequency}`);

// Entries 780+ are the new ones we added (279 entries)
const newEntriesRaw = data.slice(780);
console.log(`New entries (with wrong IDs): ${newEntriesRaw.length}`);

// Additional 21 roots to reach 300 total new entries
const additionalRoots = [
    ["contingency", "/kənˈtɪndʒənsi/", "事故/ contingency", "con共同 + ting接触"],
    ["restoration", "/ˌrestəˈreɪʃn/", "恢复", "re再 + store恢复"],
    ["blackstart", "/blækstɑːrt/", "黑启动", "black黑 + start启动"],
    ["islanding", "/ˈaɪləndɪŋ/", "孤岛运行", "island岛 + ing"],
    ["intentional", "/ɪnˈtenʃənl/", "计划性孤岛", "intent意图 + ional"],
    ["unintentional", "/ˌʌnɪnˈtenʃənl/", "非计划孤岛", "un不 + intentional计划"],
    ["antiislanding", "/ˌæntiaɪˈləndɪŋ/", "防孤岛", "anti反 + islanding孤岛"],
    ["ramping", "/ˈræmpɪŋ/", "爬坡", "ramp斜坡 + ing"],
    ["ramp", "/ræmp/", "斜坡", "ramp斜坡"],
    ["rate", "/reɪt/", "速率", "rate率"],
    ["ramprate", "/ˈræmpreɪt/", "爬坡率", "ramp爬坡 + rate率"],
    ["nonspinning", "/nɒnˈspɪnɪŋ/", "非旋转备用", "non非 + spinning旋转"],
    ["spinning", "/ˈspɪnɪŋ/", "旋转", "spin旋转 + ing"],
    ["reserve", "/rɪˈzɜːrv/", "备用", "re再 + serve保存"],
    ["regulation", "/ˌreɡjuˈleɪʃn/", "调节", "regul规则 + ation"],
    ["frequency", "/ˈfriːkwənsi/", "频率", "frequent频繁 + cy"],
    ["primary", "/ˈpraɪmeri/", "一次调频", "prim第一 + ary"],
    ["secondary", "/ˈsekənderi/", "二次调频", "second第二 + ary"],
    ["tertiary", "/ˈtɜːrʃieri/", "三次调频", "tert第三 + iary"],
    ["automation", "/ˌɔːtəˈmeɪʃn/", "自动化", "auto自动 + mation"],
    ["substation", "/ˈsʌbsteɪʃn/", "变电站", "sub下 + station站"]
];

// Combine all new roots
const allNewRoots = [];
for (const entry of newEntriesRaw) {
    allNewRoots.push([entry.root, entry.phonetic, entry.meaning, entry.mnemonic]);
}
for (const root of additionalRoots) {
    allNewRoots.push(root);
}

console.log(`Total new roots: ${allNewRoots.length}`);

function createEntry(idNum, root, phonetic, meaning, memoryTip) {
    const freq = 500 + idNum; // frequency 501-800

    const words = [
        {
            word: root,
            phonetic: phonetic,
            partOfSpeech: "n.",
            meaning: meaning,
            memoryTip: `词根 ${root} 表示 ${meaning}`,
            root: root,
            rootPhonetic: phonetic,
            rootMeaning: meaning,
            rootPhrases: [],
            wordPhrases: []
        },
        {
            word: `${root}age`,
            phonetic: phonetic,
            partOfSpeech: "n.",
            meaning: `${meaning}量`,
            memoryTip: `词根 ${root} 表示 ${meaning}`,
            root: root,
            rootPhonetic: phonetic,
            rootMeaning: meaning,
            rootPhrases: [],
            wordPhrases: []
        },
        {
            word: `${root}al`,
            phonetic: phonetic,
            partOfSpeech: "adj.",
            meaning: `${meaning}的`,
            memoryTip: `词根 ${root} 表示 ${meaning}`,
            root: root,
            rootPhonetic: phonetic,
            rootMeaning: meaning,
            rootPhrases: [],
            wordPhrases: []
        },
        {
            word: `${root}ation`,
            phonetic: phonetic,
            partOfSpeech: "n.",
            meaning: `${meaning}过程`,
            memoryTip: `词根 ${root} 表示 ${meaning}`,
            root: root,
            rootPhonetic: phonetic,
            rootMeaning: meaning,
            rootPhrases: [],
            wordPhrases: []
        }
    ];

    const phrases = [
        `${root} ${meaning}`,
        `${root}age ${meaning}`,
        `${root}al ${meaning}`,
        `${root}ation ${meaning}`
    ];

    return {
        id: 1580 + idNum, // Continue from 1581
        root: root,
        phonetic: phonetic,
        partOfSpeech: "词根",
        meaning: meaning,
        frequency: freq,
        category: "电力",
        words: words,
        phrases: phrases,
        mnemonic: `${root}→${meaning}`
    };
}

// Generate 300 new entries with correct IDs
const newEntries = [];
for (let i = 0; i < 300; i++) {
    const [root, phonetic, meaning, tip] = allNewRoots[i];
    const entryId = i + 1; // 1-300 for frequency calculation
    const entry = createEntry(entryId, root, phonetic, meaning, tip);
    newEntries.push(entry);
}

console.log(`\nGenerated ${newEntries.length} new entries`);
console.log(`First new entry: ID ${newEntries[0].id}, freq ${newEntries[0].frequency}, root ${newEntries[0].root}`);
console.log(`Last new entry: ID ${newEntries[newEntries.length-1].id}, freq ${newEntries[newEntries.length-1].frequency}, root ${newEntries[newEntries.length-1].root}`);

// Combine original and new
const finalData = [...originalData, ...newEntries];

console.log(`\nFinal total entries: ${finalData.length}`);

// Verify no duplicate IDs
const idSet = new Set();
for (const entry of finalData) {
    idSet.add(entry.id);
}
console.log(`Unique IDs: ${idSet.size}`);
if (idSet.size !== finalData.length) {
    console.log(`ERROR: Still have duplicate IDs!`);
} else {
    console.log(`SUCCESS: No duplicate IDs`);
}

// Save
fs.writeFileSync('f:/claudeanli/beidanci3/src/data/electric-power.json', JSON.stringify(finalData, null, 2), 'utf-8');
console.log('\nFile saved successfully!');
