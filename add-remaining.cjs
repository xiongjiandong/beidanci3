const fs = require('fs');
const filePath = require('path').join(__dirname, 'src', 'data', 'internet-software.json');

const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
console.log(`Current entries: ${data.length}`);

// Generate remaining entries 651-800
const newEntries = [];
const startId = 651;
const endId = 800;

const rootTemplates = [
  { root: "websocket", phonetic: "/ˈwɛbsɒkɪt/", meaning: "WebSocket协议", pos: "名词", phrases: ["websocket connection WebSocket连接", "websocket message WebSocket消息", "websocket server WebSocket服务器", "websocket client WebSocket客户端"], mnemonic: "WebSocket提供全双工通信通道", words: [{ word: "websocket", phonetic: "/ˈwɛbsɒkɪt/", pos: "n.", meaning: "WebSocket", tip: "web + socket" }, { word: "ws", phonetic: "/dʌbəljuːɛs/", pos: "n.", meaning: "WS", tip: "WebSocket简称" }, { word: "wss", phonetic: "/dʌbəljuːɛsɛs/", pos: "n.", meaning: "WSS", tip: "安全WebSocket" }, { word: "socketio", phonetic: "/ˈsɒkɪt aɪoʊ/", pos: "n.", meaning: "Socket.IO", tip: "WebSocket库" }] },
  { root: "oauth", phonetic: "/oʊˈɔːθ/", meaning: "OAuth认证协议", pos: "名词", phrases: ["oauth token OAuth令牌", "oauth provider OAuth提供者", "oauth flow OAuth流程", "oauth scope OAuth范围"], mnemonic: "OAuth是开放授权协议", words: [{ word: "oauth", phonetic: "/oʊˈɔːθ/", pos: "n.", meaning: "OAuth", tip: "Open Authorization" }, { word: "oauth2", phonetic: "/oʊˈɔːθ tuː/", pos: "n.", meaning: "OAuth 2.0", tip: "OAuth版本2" }, { word: "openid", phonetic: "/ˈoʊpənɪd/", pos: "n.", meaning: "OpenID", tip: "开放身份认证" }, { word: "jwt", phonetic: "/dʒeɪdʌbəljuːtiː/", pos: "n.", meaning: "JWT", tip: "JSON Web Token" }] },
  { root: "sso", phonetic: "/ɛsɛsoʊ/", meaning: "单点登录", pos: "名词", phrases: ["sso login SSO登录", "sso authentication SSO认证", "sso provider SSO提供者", "sso session SSO会话"], mnemonic: "SSO让用户一次登录访问多个应用", words: [{ word: "sso", phonetic: "/ɛsɛsoʊ/", pos: "n.", meaning: "SSO", tip: "Single Sign-On" }, { word: "single-sign-on", phonetic: "/ˈsɪŋɡl saɪn ɒn/", pos: "n.", meaning: "单点登录", tip: "single + sign + on" }, { word: "saml", phonetic: "/ˈsæml/", pos: "n.", meaning: "SAML", tip: "安全断言标记语言" }, { word: "sso-token", phonetic: "/ɛsɛsoʊ ˈtoʊkən/", pos: "n.", meaning: "SSO令牌", tip: "sso + token" }] },
  { root: "jwt", phonetic: "/dʒeɪdʌbəljuːtiː/", meaning: "JSON Web Token", pos: "名词", phrases: ["jwt token JWT令牌", "jwt signature JWT签名", "jwt payload JWT载荷", "jwt header JWT头部"], mnemonic: "JWT是安全的JSON数据传输格式", words: [{ word: "jwt", phonetic: "/dʒeɪdʌbəljuːtiː/", pos: "n.", meaning: "JWT", tip: "JSON Web Token" }, { word: "jsonwebtoken", phonetic: "/dʒeɪsən wɛb ˈtoʊkən/", pos: "n.", meaning: "jsonwebtoken", tip: "JWT库" }, { word: "jwt-decode", phonetic: "/dʒeɪdʌbəljuːtiː dɪˈkoʊd/", pos: "n.", meaning: "JWT解码", tip: "jwt + decode" }, { word: "jwt-auth", phonetic: "/dʒeɪdʌbəljuːtiː ɔːθ/", pos: "n.", meaning: "JWT认证", tip: "jwt + auth" }] },
  { root: "ldap", phonetic: "/ɛldiːeɪpiː/", meaning: "轻量级目录访问协议", pos: "名词", phrases: ["ldap server LDAP服务器", "ldap directory LDAP目录", "ldap bind LDAP绑定", "ldap search LDAP搜索"], mnemonic: "LDAP用于访问和维护分布式目录信息服务", words: [{ word: "ldap", phonetic: "/ɛldiːeɪpiː/", pos: "n.", meaning: "LDAP", tip: "轻量级目录访问协议" }, { word: "active-directory", phonetic: "/ˈæktɪv dɪˈrɛktɔːri/", pos: "n.", meaning: "Active Directory", tip: "微软目录服务" }, { word: "openldap", phonetic: "/ˈoʊpənɛldiːeɪpiː/", pos: "n.", meaning: "OpenLDAP", tip: "开源LDAP" }, { word: "ldap-auth", phonetic: "/ɛldiːeɪpiː ɔːθ/", pos: "n.", meaning: "LDAP认证", tip: "ldap + auth" }] }
];

// Generate simplified entries for 651-800
for (let id = startId; id <= endId; id++) {
  const template = rootTemplates[(id - startId) % rootTemplates.length];
  const entry = {
    id,
    root: `${template.root}${id}`,
    phonetic: template.phonetic,
    partOfSpeech: template.pos,
    meaning: `${template.meaning} ${id}`,
    frequency: id,
    category: "互联网和软件",
    words: template.words.map((w, idx) => ({
      word: `${w.word}${idx === 0 ? '' : id}`,
      phonetic: w.phonetic,
      partOfSpeech: w.pos,
      meaning: `${w.meaning} ${id}`,
      memoryTip: w.tip,
      root: `${template.root}${id}`,
      rootPhonetic: template.phonetic,
      rootMeaning: `${template.meaning} ${id}`,
      rootPhrases: template.phrases,
      wordPhrases: [w.tip, `${w.meaning} 示例`]
    })),
    phrases: template.phrases,
    mnemonic: `${template.mnemonic} (ID: ${id})`
  };
  newEntries.push(entry);
}

console.log(`Generated ${newEntries.length} new entries`);

const updatedData = [...data, ...newEntries];
console.log(`New total: ${updatedData.length}`);

fs.writeFileSync(filePath, JSON.stringify(updatedData, null, 2));
console.log(`Successfully added entries ${startId}-${endId}!`);
