const fs = require('fs');

// Read existing file
const data = JSON.parse(fs.readFileSync('f:/claudeanli/beidanci3/src/data/semiconductor.json', 'utf8'));

console.log('Total entries:', data.length);
console.log('ID range:', data[0].id, 'to', data[data.length-1].id);

// Check if ids 201-500 exist
const ids201to500 = data.filter(e => e.id >= 201 && e.id <= 500);
console.log('Entries with id 201-500:', ids201to500.length);

// Show some existing ids
console.log('First 5 ids:', data.slice(0, 5).map(e => e.id));
console.log('Last 5 ids:', data.slice(-5).map(e => e.id));
