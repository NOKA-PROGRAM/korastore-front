import React from 'react';
import { Truck, CreditCard, RotateCcw } from 'lucide-react';

export default function Features() {
    return (
        <section className="px-4 py-8 md:py-12 lg:px-8 space-y-8 md:space-y-0 md:flex md:justify-around md:items-center bg-white w-full max-w-7xl mx-auto">
            <div className="flex items-center gap-4 group">
                <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-white border border-gray-100 shadow-[0_2px_8px_rgba(0,0,0,0.06)] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform duration-300">
                    <Truck className="text-[#FB8500] w-6 h-6 md:w-7 md:h-7" strokeWidth={2} />
                </div>
                <div className="flex flex-col">
                    <h3 className="font-extrabold text-[16px] md:text-[17px] text-[#111827] group-hover:text-[#FB8500] transition-colors leading-none mb-1.5">Livraison Gratuite</h3>
                    <p className="text-[14px] md:text-[15px] text-gray-500 font-medium m-0 leading-none">Partout au pays</p>
                </div>
            </div>

            <div className="flex items-center gap-4 group">
                <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-white border border-gray-100 shadow-[0_2px_8px_rgba(0,0,0,0.06)] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform duration-300">
                    <CreditCard className="text-[#FB8500] w-6 h-6 md:w-7 md:h-7" strokeWidth={2} />
                </div>
                <div className="flex flex-col">
                    <h3 className="font-extrabold text-[16px] md:text-[17px] text-[#111827] group-hover:text-[#FB8500] transition-colors leading-none mb-1.5">Paiement à la livraison</h3>
                    <p className="text-[14px] md:text-[15px] text-gray-500 font-medium m-0 leading-none">Aucun risque pour vous</p>
                </div>
            </div>

            <div className="flex items-center gap-4 group">
                <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-white border border-gray-100 shadow-[0_2px_8px_rgba(0,0,0,0.06)] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform duration-300">
                    <RotateCcw className="text-[#FB8500] w-6 h-6 md:w-7 md:h-7" strokeWidth={2} />
                </div>
                <div className="flex flex-col">
                    <h3 className="font-extrabold text-[16px] md:text-[17px] text-[#111827] group-hover:text-[#FB8500] transition-colors leading-none mb-1.5">Retour Possible</h3>
                    <p className="text-[14px] md:text-[15px] text-gray-500 font-medium m-0 leading-none">Satisfait ou remboursé</p>
                </div>
            </div>
        </section>
    );
}
