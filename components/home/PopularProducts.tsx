import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import { popularProducts } from '@/lib/data';

export default function PopularProducts() {
    return (
        <section className="py-8 md:py-12 w-full">

            {/* Header */}
            <div className="max-w-7xl mx-auto px-4 lg:px-8">
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-lg md:text-3xl font-extrabold text-gray-900 tracking-tight">
                        Produits populaires
                    </h2>
                    <Link
                        href="/produits"
                        className="text-sm md:text-base text-orange-600 font-bold flex items-center hover:text-orange-700 transition-colors"
                    >
                        Tout voir
                        <ChevronRight className="w-4 h-4 ml-1 md:w-5 md:h-5" />
                    </Link>
                </div>
            </div>

            {/* Scroll Container */}
            <div className="overflow-x-auto scrollbar-hide overscroll-x-contain">
                <div
                    className="
                        flex gap-4
                        px-4 lg:px-8
                        snap-x snap-mandatory
                        md:grid md:grid-cols-4 lg:grid-cols-5
                        md:gap-6 md:px-0
                        max-w-7xl mx-auto
                    "
                >
                    {popularProducts.map((prod) => (
                        <div
                            key={prod.id}
                            className="
    w-[170px] sm:w-[190px] md:w-auto
    shrink-0 snap-start
    rounded-2xl p-3
    bg-gradient-to-b from-[#FB8500]/90 via-[#FFE2BD] to-white
    border border-[#FB8500]
    flex flex-col
    transition-all duration-300
    hover:shadow-md
  "
                        >
                            {/* IMAGE */}
                            <div className="relative w-full aspect-square rounded-xl overflow-hidden bg-white">
                                <Image
                                    src={prod.img}
                                    alt={prod.title}
                                    fill
                                    className="object-cover"
                                />

                                {prod.discount && (
                                    <span className="absolute top-2 right-2 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded-full shadow">
                                        {prod.discount}
                                    </span>
                                )}
                            </div>

                            {/* CONTENU */}
                            <div className="flex flex-col flex-1 mt-3">

                                {/* PRIX (hauteur fixe) */}
                                <div className="min-h-[40px] flex flex-col justify-start">
                                    {prod.oldPrice ? (
                                        <span className="text-xs text-red-600 font-semibold line-through">
                                            {prod.oldPrice} F CFA
                                        </span>
                                    ) : (
                                        <span className="invisible text-xs">placeholder</span>
                                    )}

                                    <span className="text-lg font-extrabold text-black leading-tight">
                                        {prod.price} <span className="text-sm font-semibold">F CFA</span>
                                    </span>
                                </div>

                                {/* TITRE */}
                                <div className="text-sm text-gray-800 line-clamp-2 leading-snug mt-1">
                                    {prod.title}
                                </div>

                                {/* BOUTON */}
                                <button
                                    className="
        mt-[7px]
        w-full
        bg-[#FB8500]
        hover:bg-[#e67600]
        text-white
        rounded-xl
        py-2
        text-sm font-semibold
        transition-all duration-300
        active:scale-95
      "
                                >
                                    Commander
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}