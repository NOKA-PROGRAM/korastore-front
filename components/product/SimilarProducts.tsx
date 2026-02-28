import React from 'react';
import { Product } from '@/lib/types';
import ProductCard from '@/components/ui/ProductCard';
import { ChevronRight } from 'lucide-react';
import Link from 'next/link';

interface SimilarProductsProps {
    products: Product[];
    categoryName?: string;
    categorySlug?: string;
}

export default function SimilarProducts({ products, categoryName, categorySlug }: SimilarProductsProps) {
    if (!products || products.length === 0) return null;

    return (
        <section className="py-12 md:py-20 w-full overflow-hidden bg-[#FAFAFA]">
            <div className="max-w-7xl mx-auto px-4 lg:px-8">
                <div className="flex justify-between items-end mb-8 md:mb-12">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-gray-900 tracking-tight relative pb-3">
                        Produits similaires
                    </h2>

                    {categorySlug && (
                        <Link
                            href={`/category/${categorySlug}`}
                            className="hidden md:flex items-center text-sm md:text-base font-bold text-gray-500 hover:text-orange-500 transition-colors group"
                        >
                            Voir plus
                            <ChevronRight className="w-5 h-5 ml-1 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    )}
                </div>

                <div className="relative -mx-4 px-4 md:mx-0 md:px-0">
                    <div className="flex gap-4 md:gap-6 overflow-x-auto overflow-y-hidden snap-x snap-mandatory hide-scrollbar pt-4 pb-6 style={{ scrollPaddingLeft: '1rem' }}">
                        {products.map((product) => (
                            <div key={product.id} className="w-[160px] md:w-[220px] lg:w-[240px] shrink-0 snap-start">
                                <ProductCard product={product} />
                            </div>
                        ))}
                    </div>
                </div>

                {categorySlug && (
                    <div className="mt-6 text-center md:hidden">
                        <Link
                            href={`/category/${categorySlug}`}
                            className="inline-flex items-center justify-center w-full py-3.5 px-6 rounded-xl border-2 border-orange-500 text-orange-500 font-bold hover:bg-orange-50 transition-colors"
                        >
                            Voir plus
                        </Link>
                    </div>
                )}
            </div>
        </section>
    );
}
