import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import { categories } from '@/lib/data';

export default function ShopByCategory() {
    return (
        <section className="w-full bg-white">
            <div className="max-w-7xl mx-auto px-4 py-10 md:py-14">

                <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-6 md:mb-10">
                    Catégories
                </h2>

                {/* GRID */}
                <div className="grid grid-cols-4 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-3 md:gap-6 max-w-6xl mx-auto">

                    {categories.map((category) => (
                        <div
                            key={category.id}
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
                        </div>
                    ))}

                    {/* Voir tout */}
                    <Link
                        href="/categories"
                        className="flex flex-col items-center group cursor-pointer"
                    >
                        <div className="w-full aspect-square bg-orange-500 rounded-2xl flex items-center justify-center transition-all duration-300 group-hover:bg-orange-600 group-hover:-translate-y-1 shadow-sm">
                            <ChevronRight className="text-white w-5 h-5 md:w-8 md:h-8" />
                        </div>

                        <span className="mt-2 text-[11px] md:text-sm font-semibold text-gray-900 text-center">
                            Tout voir
                        </span>
                    </Link>

                </div>
            </div>
        </section>
    );
}