'use client';

import React, { useState, useMemo } from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { categories } from '@/lib/data';
import Footer from '@/components/home/Footer';
import BackToTop from '@/components/home/BackToTop';

const ITEMS_PER_PAGE = 12;

export default function CategoriesPage() {
    const [currentPage, setCurrentPage] = useState(1);

    // Pagination logic
    const totalPages = Math.ceil(categories.length / ITEMS_PER_PAGE);
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    const paginatedCategories = categories.slice(startIndex, endIndex);

    // Handle page changes
    const handlePrevPage = () => {
        setCurrentPage(prev => Math.max(1, prev - 1));
    };

    const handleNextPage = () => {
        setCurrentPage(prev => Math.min(totalPages, prev + 1));
    };

    const goToPage = (page: number) => {
        setCurrentPage(page);
    };

    // Generate page numbers to display
    const pageNumbers = useMemo(() => {
        const pages = [];
        const maxPagesToShow = 5;

        if (totalPages <= maxPagesToShow) {
            for (let i = 1; i <= totalPages; i++) {
                pages.push(i);
            }
        } else {
            // Always show first page
            pages.push(1);

            // Calculate range around current page
            let startPage = Math.max(2, currentPage - 1);
            let endPage = Math.min(totalPages - 1, currentPage + 1);

            // Adjust if we're near the start or end
            if (currentPage <= 2) {
                endPage = Math.min(totalPages - 1, 4);
            } else if (currentPage >= totalPages - 1) {
                startPage = Math.max(2, totalPages - 3);
            }

            // Add ellipsis if needed
            if (startPage > 2) {
                pages.push('...');
            }

            // Add page numbers
            for (let i = startPage; i <= endPage; i++) {
                pages.push(i);
            }

            // Add ellipsis if needed
            if (endPage < totalPages - 1) {
                pages.push('...');
            }

            // Always show last page
            pages.push(totalPages);
        }

        return pages;
    }, [currentPage, totalPages]);

    return (
        <>

            <div className="w-full min-h-[100dvh] overflow-x-hidden">
                <main id="main-content" className="bg-white">
                    {/* Categories Section */}
                    <section className="w-full bg-white">
                        <div className="max-w-7xl mx-auto px-4 py-10 md:py-14">
                            <h1 className="text-2xl md:text-4xl font-bold text-gray-900 mb-2">
                                Toutes les catégories
                            </h1>
                            <p className="text-gray-600 mb-8">
                                Page {currentPage} sur {totalPages}
                            </p>

                            {/* GRID */}
                            <div className="grid grid-cols-4 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-3 md:gap-6 max-w-6xl mx-auto">
                                {paginatedCategories.map((category) => (
                                    <Link
                                        key={category.id}
                                        href={`/category/${category.slug}`}
                                        className="flex flex-col items-center group cursor-pointer"
                                    >
                                        {/* Image Card */}
                                        <div className="relative w-full aspect-square bg-gray-200 rounded-2xl overflow-hidden transition-all duration-300 group-hover:shadow-md group-hover:-translate-y-1">
                                            <Image
                                                src={category.imageUrl}
                                                alt={category.name}
                                                fill
                                                sizes="(max-width: 640px) 25vw, (max-width: 1024px) 20vw, 16vw"
                                                className="object-cover"
                                            />
                                        </div>

                                        <span className="mt-2 text-[11px] md:text-sm font-medium text-gray-800 text-center leading-tight">
                                            {category.name}
                                        </span>
                                    </Link>
                                ))}
                            </div>

                            {/* Pagination Controls */}
                            <div className="flex justify-center items-center gap-2 mt-12">
                                {/* Previous Button */}
                                <button
                                    onClick={handlePrevPage}
                                    disabled={currentPage === 1}
                                    className="p-2 rounded-lg border border-gray-300 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                                    aria-label="Page précédente"
                                >
                                    <ChevronLeft className="w-5 h-5 text-gray-700" />
                                </button>

                                {/* Page Numbers */}
                                {pageNumbers.map((page, idx) => (
                                    page === '...' ? (
                                        <span key={`ellipsis-${idx}`} className="px-2 text-gray-500">
                                            ...
                                        </span>
                                    ) : (
                                        <button
                                            key={page}
                                            onClick={() => goToPage(page as number)}
                                            className={`px-4 py-2 rounded-lg font-medium transition-colors ${currentPage === page
                                                ? 'bg-orange-500 text-white'
                                                : 'border border-gray-300 text-gray-700 hover:bg-gray-100'
                                                }`}
                                        >
                                            {page}
                                        </button>
                                    )
                                ))}

                                {/* Next Button */}
                                <button
                                    onClick={handleNextPage}
                                    disabled={currentPage === totalPages}
                                    className="p-2 rounded-lg border border-gray-300 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                                    aria-label="Page suivante"
                                >
                                    <ChevronRight className="w-5 h-5 text-gray-700" />
                                </button>
                            </div>
                        </div>
                    </section>
                </main>

                {/* Back to Top Button */}

                {/* Footer */}
                <Footer />


            </div>
        </>
    );
}
