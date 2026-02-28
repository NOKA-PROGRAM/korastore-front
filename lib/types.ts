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
    images?: string[];
    colors?: string[]; // Array of hex color codes
    sizes?: string[];
    description?: string;
    features?: string[];
    technicalSpecs?: Record<string, string>;
}
