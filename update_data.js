const fs = require('fs');

const path = 'c:/Users/toure/kora-front/lib/data.ts';
let content = fs.readFileSync(path, 'utf8');

const extraData = `
        images: [
            {IMG_PLACEHOLDER},
            'https://images.pexels.com/photos/3310069/pexels-photo-3310069.jpeg',
            'https://images.pexels.com/photos/1207918/pexels-photo-1207918.jpeg',
            'https://images.pexels.com/photos/4006122/pexels-photo-4006122.jpeg',
            'https://images.pexels.com/photos/4607137/pexels-photo-4607137.jpeg'
        ],
        colors: ['#00A8E8', '#FF9A00', '#A30015', '#2BD959', '#000000'],
        sizes: ['S', 'M', 'L', 'XL', '2XL', '3XL'],
        description: 'Description du produit de haute qualité.\\nCe produit allie finesse et durabilité exceptionnelle. Que ce soit pour un usage quotidien ou une occasion spéciale, il transforme chaque instant en une véritable expérience.',
        features: [
            'Matériau de qualité supérieure: Conçu pour durer',
            'Design Ergonomique : Pensé pour un confort optimal',
            'Performance : Efficacité prouvée dans son domaine',
            'Finition Haute Précision : Un style épuré et intemporel qui résiste au temps.'
        ],
        technicalSpecs: {
            'Garantie': '1 an',
            'Livraison': 'Standard (2 à 5 jours)',
            'Retour': 'Gratuit sous 30 jours'
        }`;

// Let's find all objects in popularProducts and products and inject extraData.
// We can use a regex to find the end of each object and inject the fields if they aren't there.
// Instead, let's just do a simpler replacement.
let regex = /img:\s*'(.*?)',\s*price/g;

// We need to inject right before the closing brace of each product. 
// A better way is parsing it loosely. Every product has `categoryId: '...'` or `isPopular: true,`
let matches = content.matchAll(/img:\s*'([^']+)'(?:.|\n)*?(categoryId:\s*'[^']+',?\n?(?:\s*isPopular:\s*(?:true|false),?\n?)?)\s*}/g);

for (const match of matches) {
    const fullMatch = match[0];
    const imgSrc = match[1];

    // Skip product 1 which already has images
    if (fullMatch.includes('images:')) continue;

    const fieldsToInject = extraData.replace('{IMG_PLACEHOLDER}', \`'\${imgSrc}'\`);
    
    const newMatch = fullMatch.replace(/}\s*$/, \`,\${fieldsToInject}\n    }\`);
    content = content.replace(fullMatch, newMatch);
}

fs.writeFileSync(path, content, 'utf8');
console.log('Done!');
