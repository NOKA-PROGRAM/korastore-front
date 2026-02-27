export interface Category {
    id: string;
    name: string;
    slug: string;
    imageUrl: string;
}

export interface Product {
    id: string;
    title: string;
    img: string;
    price: string;
    oldPrice?: string;
    discount?: string;
    categoryId?: string;
    isPopular?: boolean;
}
