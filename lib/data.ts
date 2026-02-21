import { Category, Product } from './types';

export const categories: Category[] = [
    {
        id: '1',
        name: 'Électronique',
        imageUrl: 'https://images.pexels.com/photos/924675/pexels-photo-924675.jpeg'
    },
    {
        id: '2',
        name: 'Maison & Cuisine',
        imageUrl: 'https://images.pexels.com/photos/7123550/pexels-photo-7123550.jpeg'
    },
    {
        id: '3',
        name: 'Santé & Bien-être',
        imageUrl: 'https://images.pexels.com/photos/7108337/pexels-photo-7108337.jpeg'
    },
    {
        id: '4',
        name: 'Beauté & Cosmétiques',
        imageUrl: 'https://images.pexels.com/photos/11001275/pexels-photo-11001275.jpeg'
    },
    {
        id: '5',
        name: 'Mode, chaussures & Design',
        imageUrl: 'https://images.pexels.com/photos/14409995/pexels-photo-14409995.jpeg'
    },
    {
        id: '6',
        name: 'Bébé, enfants & jouets',
        imageUrl: 'https://images.pexels.com/photos/961188/pexels-photo-961188.jpeg'
    },
    {
        id: '7',
        name: 'Epicerie & Alimentation',
        imageUrl: 'https://images.pexels.com/photos/142520/pexels-photo-142520.jpeg'
    },
    {
        id: '8',
        name: 'Sport & Plein air',
        imageUrl: 'https://images.pexels.com/photos/2180755/pexels-photo-2180755.jpeg'
    },
    {
        id: '9',
        name: 'Auto & Moto',
        imageUrl: 'https://images.pexels.com/photos/30092956/pexels-photo-30092956.jpeg'
    },
    {
        id: '10',
        name: 'Bureau & Productivité',
        imageUrl: 'https://images.pexels.com/photos/4064835/pexels-photo-4064835.jpeg'
    }
];

export const popularProducts: Product[] = [
    {
        id: '1',
        title: 'Boubou traditionnel Africain - Tissu Wax 100% Coton de haute qualité',
        img: 'https://images.pexels.com/photos/16675020/pexels-photo-16675020.jpeg',
        price: '15.000',
        oldPrice: '25.000',
        discount: '-40%',
    },
    {
        id: '2',
        title: 'Smartphone X Pro - 128Go Android 13 4G',
        img: 'https://images.pexels.com/photos/14979010/pexels-photo-14979010.jpeg',
        price: '85.000',
        oldPrice: '110.000',
        discount: '-22%',
    },
    {
        id: '3',
        title: 'Lotion hydratante pour corps à extrait d\'aloé vera',
        img: 'https://images.pexels.com/photos/27742135/pexels-photo-27742135.jpeg',
        price: '5.500',
    },
    {
        id: '4',
        title: 'Sac à dos en toile imperméable pour homme',
        img: 'https://images.pexels.com/photos/3731256/pexels-photo-3731256.jpeg',
        price: '12.000',
        oldPrice: '15.000',
        discount: '-20%',
    },
    {
        id: '5',
        title: 'Smartphone X Pro - 128Go Android 13 4G',
        img: 'https://images.pexels.com/photos/14979010/pexels-photo-14979010.jpeg',
        price: '85.000',
        oldPrice: '110.000',
        discount: '-22%',
    }
];
