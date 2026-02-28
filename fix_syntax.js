const fs = require('fs');
const path = 'c:/Users/toure/kora-front/lib/data.ts';
let content = fs.readFileSync(path, 'utf8');

// Replace potentially problematic double commas
content = content.replace(/,\s*,\s*images:/g, ',\n        images:');
// Or just to be sure:
content = content.replace(/,\n    ,\n        images: \[/g, ',\n        images: [');

fs.writeFileSync(path, content, 'utf8');
console.log('Fixed syntax!');
