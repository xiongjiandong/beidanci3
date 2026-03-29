const fs = require('fs');

const data = JSON.parse(fs.readFileSync('f:/claudeanli/beidanci3/src/data/electric-power.json', 'utf-8'));

// Check first 780 entries (original data)
const originalData = data.slice(0, 780);
const idCount = {};
const duplicates = [];

for (const entry of originalData) {
    if (idCount[entry.id]) {
        idCount[entry.id]++;
        if (idCount[entry.id] === 2) {
            duplicates.push(entry.id);
        }
    } else {
        idCount[entry.id] = 1;
    }
}

console.log(`Original data (first 780 entries):`);
console.log(`  Unique IDs: ${Object.keys(idCount).length}`);
console.log(`  Duplicate IDs: ${duplicates.length}`);
if (duplicates.length > 0) {
    console.log(`  Duplicate ID list: ${duplicates.slice(0, 20).join(', ')}...`);
}

// Check ID range
const ids = Object.keys(idCount).map(Number).sort((a, b) => a - b);
console.log(`  ID range: ${ids[0]} - ${ids[ids.length-1]}`);

// Check new entries (300 entries from index 780)
const newData = data.slice(780);
const newIdCount = {};
const newDuplicates = [];

for (const entry of newData) {
    if (newIdCount[entry.id]) {
        newIdCount[entry.id]++;
        if (newIdCount[entry.id] === 2) {
            newDuplicates.push(entry.id);
        }
    } else {
        newIdCount[entry.id] = 1;
    }
}

console.log(`\nNew data (entries 780+):`);
console.log(`  Count: ${newData.length}`);
console.log(`  Unique IDs: ${Object.keys(newIdCount).length}`);
console.log(`  Duplicate IDs: ${newDuplicates.length}`);
if (newDuplicates.length > 0) {
    console.log(`  Duplicate ID list: ${newDuplicates.join(', ')}`);
}

const newIds = Object.keys(newIdCount).map(Number).sort((a, b) => a - b);
console.log(`  ID range: ${newIds[0]} - ${newIds[newIds.length-1]}`);

// Check overlap between original and new
let overlap = 0;
for (const id of Object.keys(newIdCount)) {
    if (idCount[id]) {
        overlap++;
    }
}
console.log(`\nOverlap between original and new: ${overlap} IDs`);
