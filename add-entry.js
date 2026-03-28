const fs = require('fs');
const filePath = 'F:/claudeanli/beidanci3/src/data/internet-software.json';

// Read current data
const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
console.log('Current entries:', data.length);
console.log('Max frequency:', Math.max(...data.map(e => e.frequency)));

// Create new entry - "websocket" is a good internet/software term
const newEntry = {
  id: 201,
  root: "websocket",
  phonetic: "/ˈwebsɑːkɪt/",
  partOfSpeech: "n.",
  meaning: "WebSocket协议",
  frequency: 200,
  category: "互联网和软件",
  words: [
    {
      word: "websocket",
      phonetic: "/ˈwebsɑːkɪt/",
      partOfSpeech: "n.",
      meaning: "WebSocket协议",
      memoryTip: "web网页 + socket套接字",
      root: "websocket",
      rootPhonetic: "/ˈwebsɑːkɪt/",
      rootMeaning: "WebSocket协议",
      rootPhrases: [
        "websocket connection WebSocket连接",
        "real-time communication 实时通信",
        "full-duplex 全双工",
        "ws protocol ws协议"
      ],
      wordPhrases: [
        "websocket connection WebSocket连接",
        "real-time communication 实时通信",
        "full-duplex 全双工",
        "ws protocol ws协议"
      ]
    },
    {
      word: "socket",
      phonetic: "/ˈsɑːkɪt/",
      partOfSpeech: "n.",
      meaning: "套接字",
      memoryTip: "socket套接字，网络通信端点",
      root: "websocket",
      rootPhonetic: "/ˈwebsɑːkɪt/",
      rootMeaning: "WebSocket协议",
      rootPhrases: [
        "websocket connection WebSocket连接",
        "real-time communication 实时通信",
        "full-duplex 全双工",
        "ws protocol ws协议"
      ],
      wordPhrases: [
        "tcp socket TCP套接字",
        "socket programming 套接字编程",
        "socket connection 套接字连接"
      ]
    },
    {
      word: "full-duplex",
      phonetic: "/fʊl ˈduːpleks/",
      partOfSpeech: "adj.",
      meaning: "全双工的",
      memoryTip: "full完全 + duplex双工",
      root: "websocket",
      rootPhonetic: "/ˈwebsɑːkɪt/",
      rootMeaning: "WebSocket协议",
      rootPhrases: [
        "websocket connection WebSocket连接",
        "real-time communication 实时通信",
        "full-duplex 全双工",
        "ws protocol ws协议"
      ],
      wordPhrases: [
        "full-duplex communication 全双工通信",
        "half-duplex 半双工"
      ]
    },
    {
      word: "real-time",
      phonetic: "/ˈriːəl taɪm/",
      partOfSpeech: "adj.",
      meaning: "实时的",
      memoryTip: "real真实 + time时间",
      root: "websocket",
      rootPhonetic: "/ˈwebsɑːkɪt/",
      rootMeaning: "WebSocket协议",
      rootPhrases: [
        "websocket connection WebSocket连接",
        "real-time communication 实时通信",
        "full-duplex 全双工",
        "ws protocol ws协议"
      ],
      wordPhrases: [
        "real-time communication 实时通信",
        "real-time data 实时数据",
        "real-time update 实时更新"
      ]
    }
  ],
  phrases: [
    "websocket connection WebSocket连接",
    "real-time communication 实时通信",
    "full-duplex channel 全双工通道",
    "ws protocol ws协议"
  ],
  mnemonic: "WebSocket → 网页实时通信 → WebSocket",
  meaning: "WebSocket协议"
};

// Add new entry
data.push(newEntry);

// Sort by frequency (ascending)
data.sort((a, b) => a.frequency - b.frequency);

// Re-number IDs
data.forEach((entry, index) => {
  entry.id = index + 1;
});

// Write back to file
fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');

console.log('After adding:', data.length);
console.log('Max frequency after:', Math.max(...data.map(e => e.frequency)));
console.log('Done!');
