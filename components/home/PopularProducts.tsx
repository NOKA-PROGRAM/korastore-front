import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import { popularProducts } from '@/lib/data';

export default function PopularProducts() {
    return (
        <section className="px-4 py-8 md:py-12 lg:px-8 max-w-7xl mx-auto w-full">
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-lg md:text-3xl font-extrabold text-gray-900 tracking-tight">Produits populaires</h2>
                <Link href="/produits" className="text-sm md:text-base text-orange-600 font-bold flex items-center hover:text-orange-700 transition-colors">
                    Tout voir <ChevronRight className="w-4 h-4 ml-1 md:w-5 md:h-5" />
                </Link>
            </div>

            <div className="flex gap-4 md:grid md:grid-cols-4 lg:grid-cols-5 overflow-x-auto snap-x pb-6 scrollbar-hide md:overflow-visible">
                {popularProducts.map((prod) => (
                    <div key={prod.id} className="border border-gray-100 bg-white rounded-2xl p-3 md:p-4 w-48 md:w-auto shrink-0 snap-center flex flex-col justify-between transition-all duration-300 group">
                        <div>
                            <div className="relative h-32 md:h-48 mb-3 bg-gray-50 rounded-xl overflow-hidden flex items-center justify-center group">
                                <Image
                                    src={prod.img}
                                    alt={prod.title}
                                    fill
                                    sizes="(max-width: 768px) 160px, 200px"
                                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                                {prod.discount && (
                                    <span className="absolute top-2 right-2 bg-orange-600 text-white text-xs md:text-sm font-bold px-2 py-1 rounded-full shadow-md z-10">
                                        {prod.discount}
                                    </span>
                                )}
                            </div>

                            <div className="min-h-16 mb-2">
                                <div className="text-xs md:text-sm text-gray-800 line-clamp-2 leading-tight font-medium hover:text-orange-600 transition-colors">
                                    {prod.title}
                                </div>
                            </div>

                            <div className="flex flex-col-reverse justify-end mt-1">
                                <div className="text-base md:text-xl font-extrabold text-gray-900 leading-none">
                                    {prod.price} <span className="text-xs md:text-sm font-semibold text-gray-500">FCFA</span>
                                </div>
                                {prod.oldPrice && (
                                    <div className="text-xs md:text-sm text-red-500 font-bold line-through mb-0.5">
                                        {prod.oldPrice} FCFA
                                    </div>
                                )}
                            </div>
                        </div>
                        <button className="w-full bg-orange-100 hover:bg-orange-600 text-orange-700 hover:text-white rounded-xl py-2.5 mt-4 text-xs md:text-sm font-extrabold uppercase tracking-wide transition-all duration-300 active:scale-95 text-center flex items-center justify-center">
                            Commander
                        </button>
                    </div>
                ))}
            </div>
        </section>
    );
}
