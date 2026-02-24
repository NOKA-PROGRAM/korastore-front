import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

export default function PromoSection() {
    return (
        <section className="bg-orange-50 py-8 md:py-12 w-full">

            {/* Header */}
            <div className="max-w-7xl mx-auto px-4 lg:px-8">
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
            </div>

            {/* Scroll Container */}
            <div className="overflow-x-auto scrollbar-hide">
                <div className="
                    flex gap-4
                    px-4 lg:px-8
                    snap-x snap-mandatory
                    md:grid md:grid-cols-2 lg:grid-cols-3
                    md:gap-6 md:px-0
                    max-w-7xl mx-auto
                ">

                    {/* Card */}
                    {[1, 2, 3].map((item) => (
                        <div
                            key={item}
                            className="relative w-[288px] md:w-full shrink-0 h-[438px] md:h-[500px] lg:h-[560px] rounded-2xl overflow-hidden snap-start shadow-lg hover:shadow-xl transition-shadow"
                        >
                            <Image
                                src={
                                    item === 1
                                        ? "https://images.pexels.com/photos/3756858/pexels-photo-3756858.jpeg"
                                        : item === 2
                                            ? "https://images.pexels.com/photos/20053658/pexels-photo-20053658.jpeg"
                                            : "https://images.pexels.com/photos/29675494/pexels-photo-29675494.jpeg"
                                }
                                alt="Promo"
                                fill
                                className="object-cover"
                            />

                            <div className="relative z-10 p-6 text-white flex flex-col justify-between h-full">
                                <div>
                                    <span className="bg-black/50 backdrop-blur-md text-white font-bold text-sm px-3 py-1.5 rounded-full mb-4 inline-block uppercase">
                                        NOUVEAUTÉ
                                    </span>
                                    <h3 className="text-2xl md:text-3xl font-extrabold mb-2">
                                        Super Promo
                                    </h3>
                                    <p className="text-sm md:text-base w-2/3">
                                        Découvrez nos offres exclusives.
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}

                </div>
            </div>
        </section>
    );
}