const fs = require('fs');

const data = JSON.parse(fs.readFileSync('f:/claudeanli/beidanci3/src/data/electric-power.json', 'utf-8'));

// Analyze first 780 entries
const originalData = data.slice(0, 780);

// Group by ID
const byId = {};
for (const entry of originalData) {
    if (!byId[entry.id]) {
        byId[entry.id] = [];
    }
    byId[entry.id].push(entry);
}

// Find IDs with multiple entries
const multiEntries = [];
for (const [id, entries] of Object.entries(byId)) {
    if (entries.length > 1) {
        multiEntries.push({id: Number(id), count: entries.length, roots: entries.map(e => e.root)});
    }
}

console.log(`IDs with multiple entries: ${multiEntries.length}`);
console.log('\nFirst 10 examples:');
for (const me of multiEntries.slice(0, 10)) {
    console.log(`  ID ${me.id}: ${me.count} entries, roots: ${me.roots.join(', ')}`);
}

// Check ID distribution
const ids = Object.keys(byId).map(Number).sort((a, b) => a - b);
console.log(`\nID range: ${ids[0]} - ${ids[ids.length-1]}`);
console.log(`Expected IDs (1301-1800): 500`);
console.log(`Actual unique IDs: ${ids.length}`);

// Check if all IDs 1301-1800 are present
const expectedIds = new Set();
for (let i = 1301; i <= 1800; i++) {
    expectedIds.add(i);
}
const missingIds = [];
for (const id of expectedIds) {
    if (!byId[id]) {
        missingIds.push(id);
    }
}
console.log(`Missing IDs: ${missingIds.length}`);
if (missingIds.length > 0) {
    console.log(`  First few missing: ${missingIds.slice(0, 10).join(', ')}`);
}
