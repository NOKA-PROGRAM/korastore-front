import React from 'react';
import { Truck, CreditCard, RotateCcw } from 'lucide-react';

export default function Features() {
    return (
        <section className="px-4 py-8 md:py-12 lg:px-8 space-y-6 md:space-y-0 md:flex md:justify-around md:items-center bg-white w-full max-w-7xl mx-auto">
            <div className="flex items-center gap-5 group">
                <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-white flex items-center justify-center shrink-0 group-hover:scale-110 transition-all duration-300">
                    <Truck className="text-orange-600 w-7 h-7 md:w-8 md:h-8" strokeWidth={1.5} />
                </div>
                <div>
                    <h3 className="font-extrabold text-base md:text-lg text-gray-900 group-hover:text-orange-600 transition-colors">Livraison Gratuite</h3>
                    <p className="text-sm md:text-base text-gray-500 font-medium">Partout au pays</p>
                </div>
            </div>

            <div className="flex items-center gap-5 group">
                <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-white flex items-center justify-center shrink-0 group-hover:scale-110 transition-all duration-300">
                    <CreditCard className="text-orange-600 w-7 h-7 md:w-8 md:h-8" strokeWidth={1.5} />
                </div>
                <div>
                    <h3 className="font-extrabold text-base md:text-lg text-gray-900 group-hover:text-orange-600 transition-colors">Paiement à la livraison</h3>
                    <p className="text-sm md:text-base text-gray-500 font-medium">Aucun risque pour vous</p>
                </div>
            </div>

            <div className="flex items-center gap-5 group">
                <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-white flex items-center justify-center shrink-0 group-hover:scale-110 transition-all duration-300">
                    <RotateCcw className="text-orange-600 w-7 h-7 md:w-8 md:h-8" strokeWidth={1.5} />
                </div>
                <div>
                    <h3 className="font-extrabold text-base md:text-lg text-gray-900 group-hover:text-orange-600 transition-colors">Retour Possible</h3>
                    <p className="text-sm md:text-base text-gray-500 font-medium">Satisfait ou remboursé</p>
                </div>
            </div>
        </section>
    );
}
