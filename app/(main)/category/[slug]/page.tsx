'use client';

import React, { useState, useMemo } from 'react';
import { useParams } from 'next/navigation';
import { categories, products } from '@/lib/data';
import ProductCard from '@/components/ui/ProductCard';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Features from '@/components/home/Features';
import Faq from '@/components/home/Faq';
import BackToTop from '@/components/home/BackToTop';
import Footer from '@/components/home/Footer';

const ITEMS_PER_PAGE = 10;

export default function CategoryDetailsPage() {
    const params = useParams();
    const slug = params.slug as string;

    const category = categories.find(c => c.slug === slug);

    const categoryProducts = useMemo(() => {
        return products.filter(p => p.categoryId === slug);
    }, [slug]);

    const [currentPage, setCurrentPage] = useState(1);

    // Pagination logic
    const totalPages = Math.ceil(categoryProducts.length / ITEMS_PER_PAGE) || 1;
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    const paginatedProducts = categoryProducts.slice(startIndex, endIndex);

    const handlePrevPage = () => {
        setCurrentPage(prev => Math.max(1, prev - 1));
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const handleNextPage = () => {
        setCurrentPage(prev => Math.min(totalPages, prev + 1));
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const goToPage = (page: number) => {
        setCurrentPage(page);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    // Generate page numbers
    const pageNumbers = useMemo(() => {
        const pages = [];
        for (let i = 1; i <= totalPages; i++) {
            pages.push(i);
        }
        return pages;
    }, [totalPages]);

    if (!category) {
        return <div className="min-h-screen flex items-center justify-center">Catégorie non trouvée</div>;
    }

    return (
        <div className="w-full min-h-[100dvh] bg-white">
            <main className="max-w-7xl mx-auto px-4 py-8 md:py-12">
                {/* Header */}
                <h1 className="text-xl md:text-3xl font-bold text-gray-900 mb-6 md:mb-10">
                    {category.name}
                </h1>

                {/* Product Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 md:gap-6">
                    {paginatedProducts.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>

                {/* No products message */}
                {categoryProducts.length === 0 && (
                    <div className="flex items-center justify-center px-4 py-16 sm:py-20 md:py-24">
                        <p className="text-center text-sm sm:text-base md:text-lg text-gray-500 max-w-xs sm:max-w-md md:max-w-xl">
                            Aucun produit trouvé dans cette catégorie.
                        </p>
                    </div>
                )}

                {/* Pagination */}
                {totalPages > 1 && (
                    <div className="flex justify-center items-center gap-2 mt-12 mb-8">
                        <button
                            onClick={handlePrevPage}
                            disabled={currentPage === 1}
                            className="p-2 rounded-lg border border-gray-300 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            <ChevronLeft className="w-5 h-5 text-gray-700" />
                        </button>

                        {pageNumbers.map((page) => (
                            <button
                                key={page}
                                onClick={() => goToPage(page)}
                                className={`px-4 py-2 rounded-lg font-medium transition-colors ${currentPage === page
                                    ? 'bg-orange-500 text-white border-orange-500'
                                    : 'border border-gray-300 text-gray-700 hover:bg-gray-100'
                                    }`}
                            >
                                {page}
                            </button>
                        ))}

                        <button
                            onClick={handleNextPage}
                            disabled={currentPage === totalPages}
                            className="p-2 rounded-lg border border-gray-300 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            <ChevronRight className="w-5 h-5 text-gray-700" />
                        </button>
                    </div>
                )}
            </main>

            {/* Extra Sections */}
            <div className="mt-10">
                <Features />
                <Faq />
                <BackToTop />
                <Footer />
            </div>
        </div>
    );
}
