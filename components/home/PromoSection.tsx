import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

export default function PromoSection() {
    return (
        <section className="bg-orange-50 px-4 py-8 md:py-12 lg:px-8 w-full">
            <div className="max-w-7xl mx-auto">
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-xl md:text-3xl font-extrabold text-gray-900">
                        Les Bons Plans
                    </h2>
                    <Link
                        href="/bons-plans"
                        className="text-sm md:text-base text-orange-600 font-bold flex items-center hover:text-orange-700 transition-colors"
                    >
                        Tout voir
                        <ChevronRight className="w-4 h-4 ml-1 md:w-5 md:h-5" />
                    </Link>
                </div>

                <div className="flex gap-4 md:grid md:grid-cols-2 lg:grid-cols-3 overflow-x-auto snap-x pb-6 scrollbar-hide md:overflow-visible">

                    {/* Card 1 */}
                    <div className="relative w-72 md:w-full shrink-0 h-105 md:h-125 lg:h-140 rounded-2xl overflow-hidden snap-center shadow-lg hover:shadow-xl transition-shadow">

                        {/* Image FULL */}
                        <Image
                            src="https://images.pexels.com/photos/3756858/pexels-photo-3756858.jpeg"
                            alt="Super Promo"
                            fill
                            className="object-cover"
                        />

                        {/* Overlay 
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent"></div>
                        */}
                        {/* Content */}
                        <div className="relative z-10 p-6 text-white flex flex-col justify-between h-full">
                            <div>
                                <span className="bg-red-600 text-white font-bold text-xl px-3 py-1.5 rounded-full mb-4 inline-block uppercase">
                                    OFFRE LIMITÉE
                                </span>
                                <h3 className="text-2xl md:text-3xl font-extrabold mb-2">
                                    Super Promo
                                </h3>
                                <p className="text-sm md:text-base w-2/3">
                                    Jusqu'à <span className="text-yellow-300 font-bold text-lg">-50%</span> sur une large sélection d'articles.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div className="relative w-72 md:w-full shrink-0 h-105 md:h-125 lg:h-140 rounded-2xl overflow-hidden snap-center shadow-lg hover:shadow-xl transition-shadow">

                        {/* Image FULL */}
                        <Image
                            src="https://images.pexels.com/photos/20053658/pexels-photo-20053658.jpeg"
                            alt="High Tech"
                            fill
                            className="object-cover"
                        />

                        {/* Overlay 
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>
                        */}
                        {/* Content */}
                        <div className="relative z-10 p-6 text-white flex flex-col justify-between h-full">
                            <div>
                                <span className="bg-white/20 backdrop-blur-md text-white font-bold text-xl px-3 py-1.5 rounded-full mb-4 inline-block uppercase border border-white/30">
                                    NOUVEAUTÉ
                                </span>
                                <h3 className="text-2xl md:text-3xl font-extrabold mb-2">
                                    High Tech
                                </h3>
                                <p className="text-sm md:text-base w-2/3">
                                    Découvrez les dernières tendances.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Card 3 */}
                    <div className="relative w-72 md:w-full shrink-0 h-105 md:h-125 lg:h-140 rounded-2xl overflow-hidden snap-center shadow-lg hover:shadow-xl transition-shadow">

                        {/* Image FULL */}
                        <Image
                            src="https://images.pexels.com/photos/29675494/pexels-photo-29675494.jpeg"
                            alt="Skin Care"
                            fill
                            className="object-cover"
                        />

                        {/* Overlay 
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>
                        */}
                        {/* Content */}
                        <div className="relative z-10 p-6 text-white flex flex-col justify-between h-full">
                            <div>
                                <span className="bg-white/20 backdrop-blur-md text-white font-bold text-xl px-3 py-1.5 rounded-full mb-4 inline-block uppercase border border-white/30">
                                    NOUVEAUTÉ
                                </span>
                                <h3 className="text-2xl md:text-3xl font-extrabold mb-2">
                                    Skin Care
                                </h3>
                                <p className="text-sm md:text-base w-2/3">
                                    Prenez soin de vous
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}