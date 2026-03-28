const fs = require('fs');
const data = JSON.parse(fs.readFileSync('F:/claudeanli/beidanci3/src/data/cet-4.json', 'utf8'));

console.log('Total entries:', data.length);

const freqs = data.map(d => d.frequency).sort((a,b) => a-b);
console.log('Frequency range:', freqs[0], '-', freqs[freqs.length-1]);

// Find missing frequencies
const missing = [];
for(let i = 1; i <= 200; i++) {
  if(!freqs.includes(i)) {
    missing.push(i);
  }
}
console.log('Missing frequencies count:', missing.length);
console.log('Missing frequencies:', missing.join(', '));
