import { Category, Product } from './types';

export const categories: Category[] = [
    {
        id: '1',
        name: 'Électronique',
        slug: 'electronique',
        imageUrl: 'https://images.pexels.com/photos/924675/pexels-photo-924675.jpeg'
    },
    {
        id: '2',
        name: 'Maison & Cuisine',
        slug: 'maison-cuisine',
        imageUrl: 'https://images.pexels.com/photos/7123550/pexels-photo-7123550.jpeg'
    },
    {
        id: '3',
        name: 'Santé & Bien-être',
        slug: 'sante-bien-etre',
        imageUrl: 'https://images.pexels.com/photos/7108337/pexels-photo-7108337.jpeg'
    },
    {
        id: '4',
        name: 'Beauté & Cosmétiques',
        slug: 'beaute-cosmetiques',
        imageUrl: 'https://images.pexels.com/photos/11001275/pexels-photo-11001275.jpeg'
    },
    {
        id: '5',
        name: 'Mode, chaussures & Design',
        slug: 'mode-chaussures',
        imageUrl: 'https://images.pexels.com/photos/14409995/pexels-photo-14409995.jpeg'
    },
    {
        id: '6',
        name: 'Bébé, enfants & jouets',
        slug: 'bebe-enfants',
        imageUrl: 'https://images.pexels.com/photos/961188/pexels-photo-961188.jpeg'
    },
    {
        id: '7',
        name: 'Epicerie & Alimentation',
        slug: 'epicerie-alimentation',
        imageUrl: 'https://images.pexels.com/photos/142520/pexels-photo-142520.jpeg'
    },
    {
        id: '8',
        name: 'Sport & Plein air',
        slug: 'sport-plein-air',
        imageUrl: 'https://images.pexels.com/photos/2180755/pexels-photo-2180755.jpeg'
    },
    {
        id: '9',
        name: 'Auto & Moto',
        slug: 'auto-moto',
        imageUrl: 'https://images.pexels.com/photos/30092956/pexels-photo-30092956.jpeg'
    },
    {
        id: '10',
        name: 'Bureau & Productivité',
        slug: 'bureau-productivite',
        imageUrl: 'https://images.pexels.com/photos/4064835/pexels-photo-4064835.jpeg'
    }
];

export const popularProducts: Product[] = [
    {
        id: '1',
        title: 'Tasse en Porcelaine Fine avec Motif Forêt et Hanse Dorée',
        img: 'https://images.pexels.com/photos/16675020/pexels-photo-16675020.jpeg',
        price: '800.000',
        oldPrice: '500.000',
        discount: '-30%',
        isPopular: true,
        categoryId: 'maison-cuisine',
        images: [
            'https://images.pexels.com/photos/16675020/pexels-photo-16675020.jpeg',
            'https://images.pexels.com/photos/3310069/pexels-photo-3310069.jpeg',
            'https://images.pexels.com/photos/1207918/pexels-photo-1207918.jpeg',
            'https://images.pexels.com/photos/4006122/pexels-photo-4006122.jpeg',
            'https://images.pexels.com/photos/4607137/pexels-photo-4607137.jpeg'
        ],
        colors: ['#00A8E8', '#FF9A00', '#A30015', '#2BD959', '#000000'],
        sizes: ['S', 'M', 'L', 'XL', '2XL', '3XL'],
        description: 'La Tasse en Porcelaine Fine\nSuperbe tasse en porcelaine, alliant finesse artisanale et durabilité exceptionnelle. Que ce soit pour un espresso serré, un thé délicat ou un chocolat chaud réconfortant, elle transforme chaque gorgée en une véritable expérience sensorielle.',
        features: [
            'Matériau Noble : Fabriquée en porcelaine de haute qualité, elle offre une blancheur éclatante et une translucidité qui témoignent de sa pureté.',
            'Design Ergonomique : Sa hanse a été pensée pour une prise en main équilibrée et confortable, évitant tout risque de brûlure.',
            'Conservation de la Chaleur : La densité de la porcelaine permet de maintenir votre boisson à la température idéale plus longtemps qu\'une tasse en céramique classique.',
            'Finition Haute Précision : Un émail lisse et brillant qui résiste aux taches de café et de thé, facilitant un nettoyage impeccable.'
        ],
        technicalSpecs: {
            'Matériau': 'Porcelaine à feu (pâte dure)',
            'Capacité': '250 ml (format standard)',
            'Entretien': 'Compatible lave-vaisselle et micro-ondes',
            'Style': 'Épuré et intemporel'
        }
    },
    {
        id: '2',
        title: 'Smartphone X Pro - 128Go Android 13 4G',
        img: 'https://images.pexels.com/photos/14979010/pexels-photo-14979010.jpeg',
        price: '85.000',
        oldPrice: '110.000',
        discount: '-22%',
        isPopular: true,
        categoryId: 'electronique',
        images: [
            'https://images.pexels.com/photos/14979010/pexels-photo-14979010.jpeg',
            'https://images.pexels.com/photos/3310069/pexels-photo-3310069.jpeg',
            'https://images.pexels.com/photos/1207918/pexels-photo-1207918.jpeg',
            'https://images.pexels.com/photos/4006122/pexels-photo-4006122.jpeg',
            'https://images.pexels.com/photos/4607137/pexels-photo-4607137.jpeg'
        ],
        colors: ['#00A8E8', '#FF9A00', '#A30015', '#2BD959', '#000000'],
        sizes: ['S', 'M', 'L', 'XL', '2XL', '3XL'],
        description: 'Description du produit de haute qualité.\nCe produit allie finesse et durabilité exceptionnelle. Que ce soit pour un usage quotidien ou une occasion spéciale, il transforme chaque instant en une véritable expérience.\nDécouvrez une nouvelle façon de profiter de vos moments préférés avec ce produit conçu pour vous.',
        features: [
            'Qualité Supérieure : Fabriqué avec les meilleurs matériaux',
            'Design Moderne : S\'adapte à tous les intérieurs et styles',
            'Durabilité : Conçu pour une longue durée de vie sans compromis',
            'Ergonomie : Une utilisation facile et un confort optimal au quotidien'
        ],
        technicalSpecs: {
            'Matériau': 'Premium',
            'Garantie': '1 an',
            'Disponibilité': 'En stock',
            'Expédition': 'Sous 24-48h'
        }
    },
    {
        id: '3',
        title: 'Lotion hydratante pour corps à extrait d\'aloé vera',
        img: 'https://images.pexels.com/photos/27742135/pexels-photo-27742135.jpeg',
        price: '5.500',
        isPopular: true,
        categoryId: 'sante-bien-etre',
        images: [
            'https://images.pexels.com/photos/27742135/pexels-photo-27742135.jpeg',
            'https://images.pexels.com/photos/3310069/pexels-photo-3310069.jpeg',
            'https://images.pexels.com/photos/1207918/pexels-photo-1207918.jpeg',
            'https://images.pexels.com/photos/4006122/pexels-photo-4006122.jpeg',
            'https://images.pexels.com/photos/4607137/pexels-photo-4607137.jpeg'
        ],
        colors: ['#00A8E8', '#FF9A00', '#A30015', '#2BD959', '#000000'],
        sizes: ['S', 'M', 'L', 'XL', '2XL', '3XL'],
        description: 'Description du produit de haute qualité.\nCe produit allie finesse et durabilité exceptionnelle. Que ce soit pour un usage quotidien ou une occasion spéciale, il transforme chaque instant en une véritable expérience.\nDécouvrez une nouvelle façon de profiter de vos moments préférés avec ce produit conçu pour vous.',
        features: [
            'Qualité Supérieure : Fabriqué avec les meilleurs matériaux',
            'Design Moderne : S\'adapte à tous les intérieurs et styles',
            'Durabilité : Conçu pour une longue durée de vie sans compromis',
            'Ergonomie : Une utilisation facile et un confort optimal au quotidien'
        ],
        technicalSpecs: {
            'Matériau': 'Premium',
            'Garantie': '1 an',
            'Disponibilité': 'En stock',
            'Expédition': 'Sous 24-48h'
        }
    },
    {
        id: '4',
        title: 'Sac à dos en toile imperméable pour homme',
        img: 'https://images.pexels.com/photos/3731256/pexels-photo-3731256.jpeg',
        price: '12.000',
        oldPrice: '15.000',
        discount: '-20%',
        isPopular: true,
        categoryId: 'mode-chaussures',
        images: [
            'https://images.pexels.com/photos/3731256/pexels-photo-3731256.jpeg',
            'https://images.pexels.com/photos/3310069/pexels-photo-3310069.jpeg',
            'https://images.pexels.com/photos/1207918/pexels-photo-1207918.jpeg',
            'https://images.pexels.com/photos/4006122/pexels-photo-4006122.jpeg',
            'https://images.pexels.com/photos/4607137/pexels-photo-4607137.jpeg'
        ],
        colors: ['#00A8E8', '#FF9A00', '#A30015', '#2BD959', '#000000'],
        sizes: ['S', 'M', 'L', 'XL', '2XL', '3XL'],
        description: 'Description du produit de haute qualité.\nCe produit allie finesse et durabilité exceptionnelle. Que ce soit pour un usage quotidien ou une occasion spéciale, il transforme chaque instant en une véritable expérience.\nDécouvrez une nouvelle façon de profiter de vos moments préférés avec ce produit conçu pour vous.',
        features: [
            'Qualité Supérieure : Fabriqué avec les meilleurs matériaux',
            'Design Moderne : S\'adapte à tous les intérieurs et styles',
            'Durabilité : Conçu pour une longue durée de vie sans compromis',
            'Ergonomie : Une utilisation facile et un confort optimal au quotidien'
        ],
        technicalSpecs: {
            'Matériau': 'Premium',
            'Garantie': '1 an',
            'Disponibilité': 'En stock',
            'Expédition': 'Sous 24-48h'
        }
    },
    {
        id: '5',
        title: 'Smartphone X Pro - 128Go Android 13 4G',
        img: 'https://images.pexels.com/photos/14979010/pexels-photo-14979010.jpeg',
        price: '85.000',
        oldPrice: '110.000',
        discount: '-22%',
        isPopular: true,
        categoryId: 'electronique',
        images: [
            'https://images.pexels.com/photos/14979010/pexels-photo-14979010.jpeg',
            'https://images.pexels.com/photos/3310069/pexels-photo-3310069.jpeg',
            'https://images.pexels.com/photos/1207918/pexels-photo-1207918.jpeg',
            'https://images.pexels.com/photos/4006122/pexels-photo-4006122.jpeg',
            'https://images.pexels.com/photos/4607137/pexels-photo-4607137.jpeg'
        ],
        colors: ['#00A8E8', '#FF9A00', '#A30015', '#2BD959', '#000000'],
        sizes: ['S', 'M', 'L', 'XL', '2XL', '3XL'],
        description: 'Description du produit de haute qualité.\nCe produit allie finesse et durabilité exceptionnelle. Que ce soit pour un usage quotidien ou une occasion spéciale, il transforme chaque instant en une véritable expérience.\nDécouvrez une nouvelle façon de profiter de vos moments préférés avec ce produit conçu pour vous.',
        features: [
            'Qualité Supérieure : Fabriqué avec les meilleurs matériaux',
            'Design Moderne : S\'adapte à tous les intérieurs et styles',
            'Durabilité : Conçu pour une longue durée de vie sans compromis',
            'Ergonomie : Une utilisation facile et un confort optimal au quotidien'
        ],
        technicalSpecs: {
            'Matériau': 'Premium',
            'Garantie': '1 an',
            'Disponibilité': 'En stock',
            'Expédition': 'Sous 24-48h'
        }
    },
];

export const products: Product[] = [
    ...popularProducts,
    {
        id: '6',
        title: 'PC portable Gaming - RTX 4060, 16Go RAM, 512Go SSD',
        img: 'https://images.pexels.com/photos/459633/pexels-photo-459633.jpeg',
        price: '850.000',
        categoryId: 'electronique',
        isPopular: false,
        images: [
            'https://images.pexels.com/photos/459633/pexels-photo-459633.jpeg',
            'https://images.pexels.com/photos/3310069/pexels-photo-3310069.jpeg',
            'https://images.pexels.com/photos/1207918/pexels-photo-1207918.jpeg',
            'https://images.pexels.com/photos/4006122/pexels-photo-4006122.jpeg',
            'https://images.pexels.com/photos/4607137/pexels-photo-4607137.jpeg'
        ],
        colors: ['#00A8E8', '#FF9A00', '#A30015', '#2BD959', '#000000'],
        sizes: ['S', 'M', 'L', 'XL', '2XL', '3XL'],
        description: 'Description du produit de haute qualité.\nCe produit allie finesse et durabilité exceptionnelle. Que ce soit pour un usage quotidien ou une occasion spéciale, il transforme chaque instant en une véritable expérience.\nDécouvrez une nouvelle façon de profiter de vos moments préférés avec ce produit conçu pour vous.',
        features: [
            'Qualité Supérieure : Fabriqué avec les meilleurs matériaux',
            'Design Moderne : S\'adapte à tous les intérieurs et styles',
            'Durabilité : Conçu pour une longue durée de vie sans compromis',
            'Ergonomie : Une utilisation facile et un confort optimal au quotidien'
        ],
        technicalSpecs: {
            'Matériau': 'Premium',
            'Garantie': '1 an',
            'Disponibilité': 'En stock',
            'Expédition': 'Sous 24-48h'
        }
    },
    {
        id: '7',
        title: 'Casque Audio Bluetooth à réduction de bruit active',
        img: 'https://images.pexels.com/photos/3394651/pexels-photo-3394651.jpeg',
        price: '45.000',
        oldPrice: '60.000',
        discount: '-25%',
        categoryId: 'electronique',
        isPopular: true,
        images: [
            'https://images.pexels.com/photos/3394651/pexels-photo-3394651.jpeg',
            'https://images.pexels.com/photos/3310069/pexels-photo-3310069.jpeg',
            'https://images.pexels.com/photos/1207918/pexels-photo-1207918.jpeg',
            'https://images.pexels.com/photos/4006122/pexels-photo-4006122.jpeg',
            'https://images.pexels.com/photos/4607137/pexels-photo-4607137.jpeg'
        ],
        colors: ['#00A8E8', '#FF9A00', '#A30015', '#2BD959', '#000000'],
        sizes: ['S', 'M', 'L', 'XL', '2XL', '3XL'],
        description: 'Description du produit de haute qualité.\nCe produit allie finesse et durabilité exceptionnelle. Que ce soit pour un usage quotidien ou une occasion spéciale, il transforme chaque instant en une véritable expérience.\nDécouvrez une nouvelle façon de profiter de vos moments préférés avec ce produit conçu pour vous.',
        features: [
            'Qualité Supérieure : Fabriqué avec les meilleurs matériaux',
            'Design Moderne : S\'adapte à tous les intérieurs et styles',
            'Durabilité : Conçu pour une longue durée de vie sans compromis',
            'Ergonomie : Une utilisation facile et un confort optimal au quotidien'
        ],
        technicalSpecs: {
            'Matériau': 'Premium',
            'Garantie': '1 an',
            'Disponibilité': 'En stock',
            'Expédition': 'Sous 24-48h'
        }
    },
    {
        id: '8',
        title: 'Montre connectée Sport - GPS, Rythme cardiaque',
        img: 'https://images.pexels.com/photos/11016147/pexels-photo-11016147.jpeg',
        price: '25.000',
        categoryId: 'electronique',
        isPopular: false,
        images: [
            'https://images.pexels.com/photos/11016147/pexels-photo-11016147.jpeg',
            'https://images.pexels.com/photos/3310069/pexels-photo-3310069.jpeg',
            'https://images.pexels.com/photos/1207918/pexels-photo-1207918.jpeg',
            'https://images.pexels.com/photos/4006122/pexels-photo-4006122.jpeg',
            'https://images.pexels.com/photos/4607137/pexels-photo-4607137.jpeg'
        ],
        colors: ['#00A8E8', '#FF9A00', '#A30015', '#2BD959', '#000000'],
        sizes: ['S', 'M', 'L', 'XL', '2XL', '3XL'],
        description: 'Description du produit de haute qualité.\nCe produit allie finesse et durabilité exceptionnelle. Que ce soit pour un usage quotidien ou une occasion spéciale, il transforme chaque instant en une véritable expérience.\nDécouvrez une nouvelle façon de profiter de vos moments préférés avec ce produit conçu pour vous.',
        features: [
            'Qualité Supérieure : Fabriqué avec les meilleurs matériaux',
            'Design Moderne : S\'adapte à tous les intérieurs et styles',
            'Durabilité : Conçu pour une longue durée de vie sans compromis',
            'Ergonomie : Une utilisation facile et un confort optimal au quotidien'
        ],
        technicalSpecs: {
            'Matériau': 'Premium',
            'Garantie': '1 an',
            'Disponibilité': 'En stock',
            'Expédition': 'Sous 24-48h'
        }
    },
    {
        id: '9',
        title: 'Appareil Photo Reflex - 24.2 MP, Full HD',
        img: 'https://images.pexels.com/photos/51383/photo-camera-subject-photographer-51383.jpeg',
        price: '350.000',
        categoryId: 'electronique',
        isPopular: true,
        images: [
            'https://images.pexels.com/photos/51383/photo-camera-subject-photographer-51383.jpeg',
            'https://images.pexels.com/photos/3310069/pexels-photo-3310069.jpeg',
            'https://images.pexels.com/photos/1207918/pexels-photo-1207918.jpeg',
            'https://images.pexels.com/photos/4006122/pexels-photo-4006122.jpeg',
            'https://images.pexels.com/photos/4607137/pexels-photo-4607137.jpeg'
        ],
        colors: ['#00A8E8', '#FF9A00', '#A30015', '#2BD959', '#000000'],
        sizes: ['S', 'M', 'L', 'XL', '2XL', '3XL'],
        description: 'Description du produit de haute qualité.\nCe produit allie finesse et durabilité exceptionnelle. Que ce soit pour un usage quotidien ou une occasion spéciale, il transforme chaque instant en une véritable expérience.\nDécouvrez une nouvelle façon de profiter de vos moments préférés avec ce produit conçu pour vous.',
        features: [
            'Qualité Supérieure : Fabriqué avec les meilleurs matériaux',
            'Design Moderne : S\'adapte à tous les intérieurs et styles',
            'Durabilité : Conçu pour une longue durée de vie sans compromis',
            'Ergonomie : Une utilisation facile et un confort optimal au quotidien'
        ],
        technicalSpecs: {
            'Matériau': 'Premium',
            'Garantie': '1 an',
            'Disponibilité': 'En stock',
            'Expédition': 'Sous 24-48h'
        }
    },
    {
        id: '10',
        title: 'Tablette Tactile 10 pouces - 64Go, WiFi',
        img: 'https://images.pexels.com/photos/1334597/pexels-photo-1334597.jpeg',
        price: '95.000',
        categoryId: 'electronique',
        isPopular: false,
        images: [
            'https://images.pexels.com/photos/1334597/pexels-photo-1334597.jpeg',
            'https://images.pexels.com/photos/3310069/pexels-photo-3310069.jpeg',
            'https://images.pexels.com/photos/1207918/pexels-photo-1207918.jpeg',
            'https://images.pexels.com/photos/4006122/pexels-photo-4006122.jpeg',
            'https://images.pexels.com/photos/4607137/pexels-photo-4607137.jpeg'
        ],
        colors: ['#00A8E8', '#FF9A00', '#A30015', '#2BD959', '#000000'],
        sizes: ['S', 'M', 'L', 'XL', '2XL', '3XL'],
        description: 'Description du produit de haute qualité.\nCe produit allie finesse et durabilité exceptionnelle. Que ce soit pour un usage quotidien ou une occasion spéciale, il transforme chaque instant en une véritable expérience.\nDécouvrez une nouvelle façon de profiter de vos moments préférés avec ce produit conçu pour vous.',
        features: [
            'Qualité Supérieure : Fabriqué avec les meilleurs matériaux',
            'Design Moderne : S\'adapte à tous les intérieurs et styles',
            'Durabilité : Conçu pour une longue durée de vie sans compromis',
            'Ergonomie : Une utilisation facile et un confort optimal au quotidien'
        ],
        technicalSpecs: {
            'Matériau': 'Premium',
            'Garantie': '1 an',
            'Disponibilité': 'En stock',
            'Expédition': 'Sous 24-48h'
        }
    },
    {
        id: '11',
        title: 'Écouteurs sans fil - Étui de charge, Bluetooth 5.3',
        img: 'https://images.pexels.com/photos/3780681/pexels-photo-3780681.jpeg',
        price: '15.000',
        categoryId: 'electronique',
        isPopular: true,
        images: [
            'https://images.pexels.com/photos/3780681/pexels-photo-3780681.jpeg',
            'https://images.pexels.com/photos/3310069/pexels-photo-3310069.jpeg',
            'https://images.pexels.com/photos/1207918/pexels-photo-1207918.jpeg',
            'https://images.pexels.com/photos/4006122/pexels-photo-4006122.jpeg',
            'https://images.pexels.com/photos/4607137/pexels-photo-4607137.jpeg'
        ],
        colors: ['#00A8E8', '#FF9A00', '#A30015', '#2BD959', '#000000'],
        sizes: ['S', 'M', 'L', 'XL', '2XL', '3XL'],
        description: 'Description du produit de haute qualité.\nCe produit allie finesse et durabilité exceptionnelle. Que ce soit pour un usage quotidien ou une occasion spéciale, il transforme chaque instant en une véritable expérience.\nDécouvrez une nouvelle façon de profiter de vos moments préférés avec ce produit conçu pour vous.',
        features: [
            'Qualité Supérieure : Fabriqué avec les meilleurs matériaux',
            'Design Moderne : S\'adapte à tous les intérieurs et styles',
            'Durabilité : Conçu pour une longue durée de vie sans compromis',
            'Ergonomie : Une utilisation facile et un confort optimal au quotidien'
        ],
        technicalSpecs: {
            'Matériau': 'Premium',
            'Garantie': '1 an',
            'Disponibilité': 'En stock',
            'Expédition': 'Sous 24-48h'
        }
    },
    {
        id: '12',
        title: 'Enceinte Bluetooth Waterproof - 20W, Autonomie 12h',
        img: 'https://images.pexels.com/photos/1279107/pexels-photo-1279107.jpeg',
        price: '30.000',
        categoryId: 'electronique',
        isPopular: false,
        images: [
            'https://images.pexels.com/photos/1279107/pexels-photo-1279107.jpeg',
            'https://images.pexels.com/photos/3310069/pexels-photo-3310069.jpeg',
            'https://images.pexels.com/photos/1207918/pexels-photo-1207918.jpeg',
            'https://images.pexels.com/photos/4006122/pexels-photo-4006122.jpeg',
            'https://images.pexels.com/photos/4607137/pexels-photo-4607137.jpeg'
        ],
        colors: ['#00A8E8', '#FF9A00', '#A30015', '#2BD959', '#000000'],
        sizes: ['S', 'M', 'L', 'XL', '2XL', '3XL'],
        description: 'Description du produit de haute qualité.\nCe produit allie finesse et durabilité exceptionnelle. Que ce soit pour un usage quotidien ou une occasion spéciale, il transforme chaque instant en une véritable expérience.\nDécouvrez une nouvelle façon de profiter de vos moments préférés avec ce produit conçu pour vous.',
        features: [
            'Qualité Supérieure : Fabriqué avec les meilleurs matériaux',
            'Design Moderne : S\'adapte à tous les intérieurs et styles',
            'Durabilité : Conçu pour une longue durée de vie sans compromis',
            'Ergonomie : Une utilisation facile et un confort optimal au quotidien'
        ],
        technicalSpecs: {
            'Matériau': 'Premium',
            'Garantie': '1 an',
            'Disponibilité': 'En stock',
            'Expédition': 'Sous 24-48h'
        }
    },

];
