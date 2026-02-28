const fs = require('fs');

const path = 'c:/Users/toure/kora-front/lib/data.ts';
let content = fs.readFileSync(path, 'utf8');

const extraDataTemplate = `
        images: [
            '{IMG_PLACEHOLDER}',
            'https://images.pexels.com/photos/3310069/pexels-photo-3310069.jpeg',
            'https://images.pexels.com/photos/1207918/pexels-photo-1207918.jpeg',
            'https://images.pexels.com/photos/4006122/pexels-photo-4006122.jpeg',
            'https://images.pexels.com/photos/4607137/pexels-photo-4607137.jpeg'
        ],
        colors: ['#00A8E8', '#FF9A00', '#A30015', '#2BD959', '#000000'],
        sizes: ['S', 'M', 'L', 'XL', '2XL', '3XL'],
        description: 'Description du produit de haute qualité.\\nCe produit allie finesse et durabilité exceptionnelle. Que ce soit pour un usage quotidien ou une occasion spéciale, il transforme chaque instant en une véritable expérience.\\nDécouvrez une nouvelle façon de profiter de vos moments préférés avec ce produit conçu pour vous.',
        features: [
            'Qualité Supérieure : Fabriqué avec les meilleurs matériaux',
            'Design Moderne : S\\'adapte à tous les intérieurs et styles',
            'Durabilité : Conçu pour une longue durée de vie sans compromis',
            'Ergonomie : Une utilisation facile et un confort optimal au quotidien'
        ],
        technicalSpecs: {
            'Matériau': 'Premium',
            'Garantie': '1 an',
            'Disponibilité': 'En stock',
            'Expédition': 'Sous 24-48h'
        }`;

// Split the file by product id
let chunks = content.split(/id:\s*'/);

for (let i = 1; i < chunks.length; i++) {
    // Only process products (which have a price, distinguishing them from categories)
    if (chunks[i].includes('price:')) {
        // Skip if already has images
        if (!chunks[i].includes('images: [')) {
            // Find the image URL
            let imgMatch = chunks[i].match(/img:\s*'([^']+)'/);
            if (imgMatch) {
                let img = imgMatch[1];
                let extra = extraDataTemplate.replace('{IMG_PLACEHOLDER}', img);

                // Replace the last character that matches closing brace `}` before potential `];`
                let endBraceIndex = chunks[i].indexOf('}');
                if (endBraceIndex !== -1) {
                    chunks[i] = chunks[i].substring(0, endBraceIndex) + ',' + extra + '\n    ' + chunks[i].substring(endBraceIndex);
                }
            }
        }
    }
}

content = chunks[0] + chunks.slice(1).map(c => "id: '" + c).join('');

fs.writeFileSync(path, content, 'utf8');
console.log('Update successful!');
