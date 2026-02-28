'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useCart } from '@/lib/CartContext';
import { ShoppingCart, Trash2, Minus, Plus, Truck, ArrowLeft } from 'lucide-react';

export default function CartPage() {
    const { items, cartCount, cartTotal, updateQuantity, removeFromCart } = useCart();
    const [step, setStep] = useState<1 | 2 | 3 | 4>(1);

    // Form state for Step 3
    const [formData, setFormData] = useState({
        nom: '',
        telephone: '',
        lieu: ''
    });

    // Promo code state
    const [promoCode, setPromoCode] = useState('');

    // Format price Helper
    const formatPrice = (price: number) => {
        return new Intl.NumberFormat('fr-FR').format(price) + ' F CFA';
    };

    const handleNextStep = () => {
        if (step < 4) setStep((prev) => (prev + 1) as 1 | 2 | 3 | 4);
    };

    const handlePrevStep = () => {
        if (step > 1) setStep((prev) => (prev - 1) as 1 | 2 | 3 | 4);
    };

    // Calculate total including delivery
    const deliveryFee = 2000;
    const finalTotal = cartTotal + deliveryFee;

    // ============================================================
    // STEP 1 — Mes Commandes (Panier avec produits, +/-, supprimer)
    // ============================================================
    const renderStep1 = () => (
        <div className="flex flex-col gap-4 pb-6">
            {/* Product Cards */}
            <div className="flex flex-col gap-3">
                {items.map((item) => (
                    <div key={item.cartItemId} className="bg-white rounded-2xl border border-gray-200 p-4 shadow-[0_1px_6px_rgba(0,0,0,0.04)]">
                        <div className="flex items-center gap-4">
                            {/* Product Image */}
                            <div className="w-[70px] h-[70px] md:w-[90px] md:h-[90px] rounded-xl overflow-hidden bg-gray-100 flex-shrink-0 relative">
                                {item.product.images && item.product.images.length > 0 ? (
                                    <Image
                                        src={item.product.images[0]}
                                        alt={item.product.title}
                                        fill
                                        className="object-cover"
                                    />
                                ) : (
                                    <div className="w-full h-full bg-gray-200 flex items-center justify-center text-gray-400 text-xs">
                                        Image
                                    </div>
                                )}
                            </div>

                            {/* Product Info */}
                            <div className="flex-1 min-w-0">
                                <div className="flex justify-between items-start">
                                    <h3 className="font-bold text-[14px] md:text-[16px] text-gray-900 leading-tight truncate pr-2">
                                        {item.product.title}
                                    </h3>
                                    <button
                                        onClick={() => removeFromCart(item.cartItemId)}
                                        className="text-[#fb8500] hover:text-red-500 transition flex-shrink-0 p-1"
                                        aria-label="Supprimer"
                                    >
                                        <Trash2 className="w-[18px] h-[18px]" />
                                    </button>
                                </div>
                                <p className="text-[#fb8500] font-bold text-[13px] md:text-[15px] mt-1">
                                    {item.product.price} F CFA
                                </p>

                                {/* Quantity Controls */}
                                <div className="flex items-center gap-3 mt-2">
                                    <button
                                        onClick={() => updateQuantity(item.cartItemId, Math.max(1, item.quantity - 1))}
                                        className="w-7 h-7 md:w-8 md:h-8 rounded-full border-2 border-gray-300 flex items-center justify-center text-gray-500 hover:border-[#fb8500] hover:text-[#fb8500] transition active:scale-90"
                                    >
                                        <Minus className="w-3.5 h-3.5" />
                                    </button>
                                    <span className="text-[15px] md:text-[17px] font-bold text-gray-900 min-w-[20px] text-center">
                                        {item.quantity}
                                    </span>
                                    <button
                                        onClick={() => updateQuantity(item.cartItemId, item.quantity + 1)}
                                        className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-[#fb8500] text-white flex items-center justify-center hover:bg-[#e67600] transition active:scale-90 shadow-sm"
                                    >
                                        <Plus className="w-3.5 h-3.5" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Code Promo */}
            <div className="mt-2">
                <label className="text-[14px] md:text-[15px] font-bold text-gray-800 mb-2 block">Code Promo</label>
                <input
                    type="text"
                    placeholder="Entrez votre code"
                    value={promoCode}
                    onChange={(e) => setPromoCode(e.target.value)}
                    className="w-full border border-gray-300 rounded-xl px-4 py-3 text-[14px] focus:outline-none focus:border-[#fb8500] placeholder:text-gray-400"
                />
                <button className="w-full mt-3 bg-[#fb8500] text-white py-3 rounded-xl text-[14px] font-bold hover:bg-[#e67600] transition active:scale-[0.98] shadow-sm">
                    Appliquer
                </button>
            </div>

            {/* Totals */}
            <div className="bg-[#f8f9fa] rounded-2xl p-5 mt-2 border border-transparent">
                <div className="flex justify-between items-center mb-3">
                    <span className="text-gray-600 text-[13px] md:text-[14px] font-medium">Sous-total</span>
                    <span className="font-semibold text-gray-700 text-[13px] md:text-[14px]">{formatPrice(cartTotal)}</span>
                </div>
                <div className="h-[1px] bg-[#e0e0e0] w-full mb-3"></div>
                <div className="flex justify-between items-center">
                    <span className="text-[15px] md:text-lg font-bold text-black">Total</span>
                    <span className="text-[15px] md:text-lg font-bold text-[#fb8500]">{formatPrice(cartTotal)}</span>
                </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-col items-center gap-3 mt-4">
                <button
                    onClick={handleNextStep}
                    className="w-full max-w-[300px] bg-[#fb8500] text-white py-[14px] rounded-xl text-[14px] md:text-[15px] font-bold shadow-md hover:bg-[#e67600] transition active:scale-[0.98]">
                    Finaliser ma commande
                </button>
                <Link href="/" className="w-full max-w-[300px]">
                    <button className="w-full bg-white text-gray-600 border border-gray-300 py-[13px] rounded-xl text-[13px] md:text-[14px] font-semibold hover:bg-gray-50 transition active:scale-[0.98]">
                        Poursuivre mes achats
                    </button>
                </Link>
            </div>
        </div>
    );

    // ============================================================
    // STEP 2 — Récapitulatif de votre commande
    // ============================================================
    const renderStep2 = () => (
        <div className="flex flex-col pb-6">
            <h2 className="text-[17px] md:text-[20px] font-bold text-center mt-2 mb-4 text-black tracking-tight">Récapitulatif de votre commande</h2>

            <div className="bg-white rounded-2xl border border-gray-200 p-4 shadow-[0_2px_10px_rgba(0,0,0,0.03)] mb-4">
                <div className="flex flex-col gap-5">
                    {items.map((item) => (
                        <div key={item.cartItemId} className="flex justify-between items-start">
                            <div className="flex flex-col gap-1">
                                <h3 className="font-medium text-[15px] md:text-lg text-gray-900 leading-tight">
                                    {item.product.title}
                                </h3>
                                <p className="text-xs text-gray-500">Quantité: {item.quantity}</p>
                            </div>
                            <p className="font-medium text-gray-900 whitespace-nowrap pl-4">
                                {item.product.price} <span className="text-sm font-normal">F CFA</span>
                            </p>
                        </div>
                    ))}
                </div>
            </div>

            <div className="bg-[#f8f9fa] rounded-2xl p-5 md:p-6 mb-5 border border-transparent">
                <div className="flex justify-between items-center mb-4">
                    <span className="text-gray-600 text-[13px] md:text-[14px] font-medium">Sous-total</span>
                    <span className="font-semibold text-gray-700 text-[13px] md:text-[14px]">{formatPrice(cartTotal)}</span>
                </div>
                <div className="flex justify-between items-center mb-4">
                    <span className="text-gray-600 text-[13px] md:text-[14px] font-medium">Frais de livraison</span>
                    <span className="font-semibold text-gray-700 text-[13px] md:text-[14px]">{deliveryFee} F CFA</span>
                </div>
                <div className="h-[1px] bg-[#d9d9d9] w-full mb-4"></div>
                <div className="flex justify-between items-center mt-1">
                    <span className="text-[15px] md:text-lg font-bold text-black">Total</span>
                    <span className="text-[15px] md:text-lg font-bold text-[#fb8500]">{formatPrice(finalTotal)}</span>
                </div>
            </div>

            <div className="flex items-center gap-4 mt-2 mb-8 ml-2">
                <div className="w-[42px] h-[42px] rounded-full bg-[#fff0e0] flex items-center justify-center flex-shrink-0">
                    <Truck className="w-[20px] h-[20px] text-[#fb8500]" />
                </div>
                <div>
                    <h4 className="font-bold text-[13px] text-gray-900 leading-snug">Livraison prévue</h4>
                    <p className="text-[12px] text-gray-500 font-medium">Expédié sous 24h</p>
                </div>
            </div>

            <div className="flex justify-center mt-2">
                <button
                    onClick={handleNextStep}
                    className="w-full max-w-sm bg-[#fb8500] text-white py-3 md:py-3.5 rounded-lg text-sm font-semibold shadow-md hover:bg-[#e67600] transition active:scale-[0.98]">
                    Confirmer mes coordonnées
                </button>
            </div>
        </div>
    );

    // ============================================================
    // STEP 3 — Formulaire (avatar + champs)
    // ============================================================
    const renderStep3 = () => (
        <div className="flex flex-col items-center pb-4 relative mt-4 md:mt-4 w-full">

            <div className="bg-white p-6 md:p-10 w-full flex flex-col items-center mt-[-2rem] pt-14">
                <h2 className="text-center font-bold text-[15px] md:text-[17px] leading-snug mb-8 text-[#1a1a1a] max-w-[260px]">
                    Veuillez remplir ce formulaire pour<br />Finalisez votre commande
                </h2>

                <div className="w-full flex flex-col gap-5">
                    <input
                        type="text"
                        placeholder="Nom et prénoms"
                        value={formData.nom}
                        onChange={(e) => setFormData({ ...formData, nom: e.target.value })}
                        className="w-full border border-gray-300 rounded-[1.2rem] px-5 py-4 text-[15px] text-gray-800 focus:outline-none focus:border-gray-500 placeholder:text-gray-500 font-medium"
                    />
                    <input
                        type="tel"
                        placeholder="Numéro de téléphone"
                        value={formData.telephone}
                        onChange={(e) => setFormData({ ...formData, telephone: e.target.value })}
                        className="w-full border border-gray-300 rounded-[1.2rem] px-5 py-4 text-[15px] text-gray-800 focus:outline-none focus:border-gray-500 placeholder:text-gray-500 font-medium"
                    />
                    <input
                        type="text"
                        placeholder="Lieu de livraison"
                        value={formData.lieu}
                        onChange={(e) => setFormData({ ...formData, lieu: e.target.value })}
                        className="w-full border border-gray-300 rounded-[1.2rem] px-5 py-4 text-[15px] text-gray-800 focus:outline-none focus:border-gray-500 placeholder:text-gray-500 font-medium"
                    />
                </div>

                <div className="w-full flex flex-col items-center gap-4 mt-10">
                    <button
                        onClick={handleNextStep}
                        disabled={!formData.nom || !formData.telephone || !formData.lieu}
                        className="w-full max-w-[300px] bg-[#fb8500] text-white py-[14px] rounded-[10px] text-[15px] font-bold shadow-md hover:bg-[#e67600] transition active:scale-[0.98] disabled:opacity-50">
                        Finaliser ma commande
                    </button>
                    <Link href="/" className="w-full max-w-[300px]">
                        <button className="w-full bg-white text-gray-600 border border-gray-300 py-[14px] rounded-[10px] text-[15px] font-semibold hover:bg-gray-50 transition active:scale-[0.98]">
                            Poursuivre mes achats
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );

    // ============================================================
    // STEP 4 — Confirmation timeline (vérification coordonnées)
    // ============================================================
    const renderStep4 = () => (
        <div className="flex flex-col gap-6 pt-6">
            <div className="w-full mb-8">
                <div className="flex justify-between text-[11px] md:text-sm font-semibold text-gray-600 mb-3 px-1">
                    <span className="text-black">1. Panier</span>
                    <span className="text-[#fb8500]">2. Préparation</span>
                    <span className="text-gray-500">3. Livraison</span>
                </div>
                <div className="relative h-[10px] bg-gray-200 rounded-full overflow-visible flex items-center shadow-inner">
                    {/* Progress Fill */}
                    <div className="absolute left-0 h-full bg-[#fb8500] rounded-full z-10 transition-all duration-300" style={{ width: '50%' }}></div>
                    {/* Dots */}
                    <div className="absolute left-0 w-6 h-6 rounded-full bg-[#fb8500] -translate-x-1 z-20 shadow-sm border-[3px] border-[#fb8500]"></div>
                    <div className="absolute left-[50%] w-6 h-6 rounded-full bg-[#fb8500] -translate-x-1/2 z-20 shadow-sm border-[3px] border-[#fb8500]"></div>
                    <div className="absolute right-0 w-6 h-6 rounded-full bg-gray-200 translate-x-1 z-0 shadow-sm border-[3px] border-gray-200"></div>
                </div>
            </div>

            <h2 className="text-center font-bold text-[16px] md:text-[18px] leading-snug mb-2 text-[#111] mt-2 tracking-tight">
                Merci de vérifier l&apos;exactitude<br />de vos coordonnées
            </h2>

            <div className="bg-white rounded-2xl border border-gray-200 p-6 md:p-8 shadow-[0_2px_15px_rgba(0,0,0,0.03)] mt-2">
                <h3 className="font-bold text-[15px] sm:text-base text-gray-900 mb-6">Vos coordonnées de livraison</h3>

                <div className="flex flex-col gap-5">
                    <div className="flex justify-between items-start gap-4">
                        <span className="text-[14px] sm:text-[15px] text-black font-medium leading-snug w-1/2">Nom et<br />Prenoms :</span>
                        <span className="text-[14px] sm:text-[15px] font-medium text-black text-right">{formData.nom || "Kofi QIPA"}</span>
                    </div>
                    <div className="flex justify-between items-center gap-4">
                        <span className="text-[14px] sm:text-[15px] text-black font-medium leading-snug w-1/2">Numéro :</span>
                        <span className="text-[14px] sm:text-[15px] font-medium text-black text-right break-words">{formData.telephone || "228 90 000000"}</span>
                    </div>
                    <div className="flex justify-between items-center gap-4">
                        <span className="text-[14px] sm:text-[15px] text-black font-medium leading-snug w-1/2">Lieu de livraison :</span>
                        <span className="text-[14px] sm:text-[15px] font-medium text-black text-right truncate">{formData.lieu || "Djidjole..."}</span>
                    </div>
                </div>
            </div>

            <div className="w-full flex flex-col items-center mt-6">
                <div className="w-full max-w-[300px] flex flex-col gap-4">
                    <button
                        onClick={() => {
                            alert("Commande confirmée !");
                            // clear cart..
                        }}
                        className="w-full bg-[#fb8500] text-white py-[14px] rounded-[10px] text-[15px] font-bold shadow-md hover:bg-[#e67600] transition active:scale-[0.98]">
                        Confirmer
                    </button>

                    <button
                        onClick={handlePrevStep}
                        className="text-[#00B4D8] text-[13px] font-bold mt-1 mb-2 hover:text-[#0096C7] transition relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1px] after:bg-[#00B4D8] pb-1 w-max mx-auto">
                        Modifier mes coordonnées
                    </button>

                    <Link href="/" className="w-full">
                        <button className="w-full bg-white text-gray-600 border border-gray-300 py-[12px] rounded-lg text-[13px] font-bold hover:bg-gray-50 transition active:scale-[0.98]">
                            Poursuivre mes achats
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );

    return (
        <div className="min-h-screen bg-white md:bg-white flex flex-col items-center pb-8">
            {/* TOP BAR — Orange header for Mes Commandes */}
            {step === 1 && (
                <div className="w-full bg-[#ff8c00] text-white sticky top-0 z-50 shadow-md">
                    <div className="w-full max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-12 py-4 md:py-6 flex items-center justify-between">

                        {/* Left - Cart */}
                        <Link href="/" className="flex items-center gap-2">
                            <div className="relative">
                                <ShoppingCart className="w-6 h-6 sm:w-7 sm:h-7" />
                                {cartCount > 0 && (
                                    <span className="absolute -top-2 -right-2 bg-red-600 text-white text-[10px] font-bold min-w-[18px] h-[18px] px-1 rounded-full flex items-center justify-center">
                                        {cartCount}
                                    </span>
                                )}
                            </div>
                        </Link>

                        {/* Center - Title */}
                        <div className="text-center flex-1">
                            <h1 className="text-lg sm:text-xl md:text-2xl font-bold">
                                Mes Commandes
                            </h1>
                            <p className="text-xs sm:text-sm opacity-90">
                                {cartCount} {cartCount > 1 ? 'articles' : 'article'} dans votre panier
                            </p>
                        </div>

                        {/* Right - Empty spacer (for symmetry) */}
                        <div className="w-6 sm:w-7" />

                    </div>
                </div>
            )}

            {/* Back button for steps 2-4 */}


            {/* MAIN CONTENT */}
            <div
                className={`w-full max-w-2xl mx-auto flex flex-col flex-1
                    bg-white
                    px-4
                    py-6
                    md:px-8
                    md:py-10`}
            >
                {items.length === 0 ? (
                    <div className="text-center py-12">
                        <p className="text-gray-500 mb-6">Votre panier est vide.</p>
                        <Link href="/" className="px-6 py-3 bg-[#fb8500] text-white rounded-lg font-medium inline-block hover:bg-[#e67600] transition-colors">
                            Retourner à l&apos;accueil
                        </Link>
                    </div>
                ) : (
                    <>
                        {step === 1 && renderStep1()}
                        {step === 2 && renderStep2()}
                        {step === 3 && renderStep3()}
                        {step === 4 && renderStep4()}
                    </>
                )}
            </div>
        </div>
    );
}
