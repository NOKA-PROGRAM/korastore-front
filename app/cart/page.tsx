'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useCart } from '@/lib/CartContext';
import { ShoppingCart, Trash2, Minus, Plus } from 'lucide-react';

export default function CartPage() {
    const { items, cartCount, cartTotal, updateQuantity, removeFromCart } = useCart();

    // Format price Helper
    const formatPrice = (price: number) => {
        return new Intl.NumberFormat('fr-FR').format(price) + ' F CFA';
    };

    return (
        <div className="min-h-screen bg-white md:bg-gray-50 flex flex-col items-center">
            {/* TOP BAR */}
            <div className="w-full bg-[#ff8c00] text-white py-4 md:py-6 sticky top-0 z-50 shadow-md">
                <div className="max-w-2xl mx-auto px-4 flex items-center justify-center relative">
                    <div className="absolute left-6 md:left-8 top-1/2 -translate-y-1/2">
                        <div className="relative">
                            <ShoppingCart className="w-7 h-7" />
                            {cartCount > 0 && (
                                <span className="absolute -top-2 -right-2 bg-red-600 text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                                    {cartCount}
                                </span>
                            )}
                        </div>
                    </div>
                    <div className="text-center">
                        <h1 className="text-xl md:text-2xl font-bold">Mes Commandes</h1>
                        <p className="text-sm opacity-90">{cartCount} {cartCount > 1 ? 'articles' : 'article'} dans votre panier</p>
                    </div>
                </div>
            </div>

            {/* MAIN CONTENT */}
            <div className="w-full max-w-2xl mx-auto px-4 py-6 flex flex-col gap-6 md:bg-white md:shadow-lg md:rounded-2xl md:mt-8 md:mb-12 md:p-8">

                {/* CART ITEMS */}
                {items.length === 0 ? (
                    <div className="text-center py-12">
                        <p className="text-gray-500 mb-6">Votre panier est vide.</p>
                        <Link href="/" className="px-6 py-3 bg-[#ff8c00] text-white rounded-lg font-medium inline-block hover:bg-[#ff7b00] transition-colors">
                            Retourner à l&apos;accueil
                        </Link>
                    </div>
                ) : (
                    <div className="flex flex-col gap-4">
                        {items.map((item) => (
                            <div key={item.cartItemId} className="border border-gray-200 rounded-2xl p-4 flex gap-4 bg-white relative">
                                {/* Delete Button */}
                                <button
                                    onClick={() => removeFromCart(item.cartItemId)}
                                    className="absolute top-4 right-4 text-red-500 hover:text-red-700 transition"
                                >
                                    <Trash2 className="w-5 h-5" />
                                </button>

                                {/* Image */}
                                <div className="w-20 h-20 md:w-24 md:h-24 bg-gray-100 rounded-xl overflow-hidden relative flex-shrink-0">
                                    <Image
                                        src={item.product.img}
                                        alt={item.product.title}
                                        fill
                                        className="object-cover"
                                    />
                                </div>

                                {/* Item details */}
                                <div className="flex flex-col flex-1 justify-center space-y-1 md:space-y-2">
                                    <h3 className="font-medium text-[15px] md:text-lg text-gray-900 pr-8 line-clamp-1">{item.product.title}</h3>
                                    <p className="text-[#ff8c00] font-semibold text-sm md:text-base">{item.product.price} F CFA</p>

                                    {/* Additional Options */}
                                    {(item.selectedColor || item.selectedSize) && (
                                        <div className="flex items-center gap-2 text-xs text-gray-500">
                                            {item.selectedColor && (
                                                <div className="flex items-center gap-1">
                                                    <span className="w-3 h-3 rounded-full border border-gray-300" style={{ backgroundColor: item.selectedColor }} />
                                                </div>
                                            )}
                                            {item.selectedSize && <span>Taille: {item.selectedSize}</span>}
                                        </div>
                                    )}

                                    {/* Quantity controls */}
                                    <div className="flex items-center gap-4 mt-1">
                                        <button
                                            onClick={() => updateQuantity(item.cartItemId, item.quantity - 1)}
                                            className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-gray-200 transition"
                                        >
                                            <Minus className="w-4 h-4" />
                                        </button>
                                        <span className="font-semibold text-gray-800 min-w-[1ch] text-center">{item.quantity}</span>
                                        <button
                                            onClick={() => updateQuantity(item.cartItemId, item.quantity + 1)}
                                            className="w-8 h-8 rounded-full bg-[#ff8c00] flex items-center justify-center text-white hover:bg-[#ff7b00] transition shadow-sm"
                                        >
                                            <Plus className="w-4 h-4" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                {/* ONLY RENDER PROMO AND SUMMARY IF CART HAS ITEMS */}
                {items.length > 0 && (
                    <>
                        {/* PROMO CODE */}
                        <div className="mt-2">
                            <label className="block text-sm font-semibold text-gray-700 mb-2">Code Promo</label>
                            <div className="flex flex-col sm:flex-row gap-3">
                                <input
                                    type="text"
                                    placeholder="Entrez votre code"
                                    className="flex-1 border border-black rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-black placeholder:text-gray-400"
                                />
                                <button className="bg-[#ff8c00] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#ff7b00] transition-colors shadow-sm">
                                    Appliquer
                                </button>
                            </div>
                        </div>

                        {/* SUMMARY */}
                        <div className="bg-[#f8f9fa] rounded-2xl p-5 md:p-6 mt-2">
                            <div className="flex justify-between items-center mb-4">
                                <span className="text-gray-600 text-sm md:text-base">Sous-total</span>
                                <span className="font-medium text-gray-700 text-sm md:text-base">{formatPrice(cartTotal)}</span>
                            </div>
                            <div className="h-[1px] bg-gray-300 w-full mb-4"></div>
                            <div className="flex justify-between items-center">
                                <span className="text-lg md:text-xl font-bold text-gray-900">Total</span>
                                <span className="text-lg md:text-xl font-bold text-[#ff8c00]">{formatPrice(cartTotal)}</span>
                            </div>
                        </div>

                        {/* ACTION BUTTONS */}
                        <div className="flex flex-col gap-3 mt-4">
                            <button className="w-full bg-[#ff8c00] text-white py-4 rounded-xl text-base font-bold shadow-md hover:bg-[#ff7b00] transition active:scale-[0.98]">
                                Finaliser ma commande
                            </button>
                            <Link href="/">
                                <button className="w-full bg-white text-gray-700 border border-gray-300 py-4 rounded-xl text-base font-medium hover:bg-gray-50 transition active:scale-[0.98]">
                                    Poursuivre mes achats
                                </button>
                            </Link>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
}
