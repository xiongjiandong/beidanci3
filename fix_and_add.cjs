const fs = require('fs');

// Read current data
const data = JSON.parse(fs.readFileSync('f:/claudeanli/beidanci3/src/data/electric-power.json', 'utf-8'));

console.log(`Current total entries: ${data.length}`);

// Find max ID
let maxId = 0;
const idSet = new Set();
for (const entry of data) {
    if (entry.id > maxId) maxId = entry.id;
    idSet.add(entry.id);
}
console.log(`Max ID: ${maxId}`);
console.log(`Unique IDs: ${idSet.size}`);

// Check for duplicates
if (idSet.size !== data.length) {
    console.log(`WARNING: Found ${data.length - idSet.size} duplicate IDs!`);
}

// Get last 5 entries
console.log('\nLast 5 entries:');
for (let i = Math.max(0, data.length - 5); i < data.length; i++) {
    console.log(`  ID: ${data[i].id}, freq: ${data[i].frequency}, root: ${data[i].root}`);
}

// Check first few entries that might be new
console.log('\nEntries around original end (index 775-785):');
for (let i = 775; i < Math.min(data.length, 790); i++) {
    console.log(`  Index ${i}: ID: ${data[i].id}, freq: ${data[i].frequency}, root: ${data[i].root}`);
}
