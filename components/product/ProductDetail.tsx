'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Product } from '@/lib/types';
import { useCart } from '@/lib/CartContext';
import { useRouter } from 'next/navigation';

interface ProductDetailProps {
    product: Product;
}

export default function ProductDetail({ product }: ProductDetailProps) {
    const images = product.images && product.images.length > 0 ? product.images : [product.img];
    const [selectedImage, setSelectedImage] = useState(0);
    const [selectedColor, setSelectedColor] = useState(0);
    const [selectedSize, setSelectedSize] = useState<number | null>(null);
    const { addToCart } = useCart();
    const router = useRouter();

    const handleAddToCart = () => {
        const color = product.colors && selectedColor !== null ? product.colors[selectedColor] : undefined;
        const size = product.sizes && selectedSize !== null ? product.sizes[selectedSize] : undefined;
        addToCart(product, 1, color, size);
        router.push('/cart');
    };

    const hasColors = product.colors && product.colors.length > 0;
    const hasSizes = product.sizes && product.sizes.length > 0;
    const hasDescription = !!product.description;
    const hasFeatures = product.features && product.features.length > 0;
    const hasTechnicalSpecs = product.technicalSpecs && Object.keys(product.technicalSpecs).length > 0;
    const hasMultipleImages = images.length > 1;

    return (
        <>
            <div className="w-full max-w-7xl mx-auto bg-white">
                <div className="flex flex-col lg:flex-row lg:gap-10 lg:px-6 lg:py-8">

                    {/* ========== LEFT: IMAGES ========== */}
                    <div className="w-full lg:w-5/12 xl:w-[40%] lg:sticky lg:top-24 lg:self-start">
                        <div className="px-4 lg:px-0 lg:pt-0">
                            <div className="relative w-full aspect-square bg-gray-50 rounded-2xl overflow-hidden shadow-sm">

                                {product.discount && (
                                    <span className="absolute top-3 left-3 z-20 bg-orange-500 text-white text-[11px] font-bold px-3 py-1 rounded-full">
                                        {product.discount}
                                    </span>
                                )}

                                <Image
                                    src={images[selectedImage]}
                                    alt={product.title}
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 1024px) 100vw, 50vw"
                                    priority
                                />

                                {/* THUMBNAILS OVERLAY */}
                                {hasMultipleImages && (
                                    <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-2 px-4 z-20">
                                        {images.map((img, i) => (
                                            <button
                                                key={i}
                                                onClick={() => setSelectedImage(i)}
                                                className={`w-12 h-12 rounded-lg overflow-hidden relative border-2 transition-all duration-200 bg-white shadow-md ${selectedImage === i
                                                    ? 'border-orange-500 scale-105'
                                                    : 'border-white'
                                                    }`}
                                            >
                                                <Image
                                                    src={img}
                                                    alt={`Vue ${i + 1}`}
                                                    fill
                                                    className="object-cover"
                                                    sizes="48px"
                                                />
                                            </button>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* ========== RIGHT: PRODUCT INFO ========== */}
                    <div className={`flex-1 flex flex-col px-4 pb-8 lg:px-0 lg:pb-0 ${hasMultipleImages ? 'pt-3' : 'pt-4'}`}>

                        {/* TITLE */}
                        <h1 className="text-[17px] md:text-2xl font-semibold text-gray-900 leading-snug">
                            {product.title}
                        </h1>

                        {/* PRICE */}
                        <div className="mt-1.5 flex flex-col gap-0.5">
                            {product.oldPrice && (
                                <span className="line-through text-orange-500 text-sm font-medium">
                                    {product.oldPrice} F CFA
                                </span>
                            )}
                            <div className="flex items-center gap-3">
                                <span className="text-xl md:text-2xl font-bold text-gray-900">
                                    {product.price} F CFA
                                </span>
                                {product.discount && (
                                    <span className="bg-orange-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
                                        {product.discount}
                                    </span>
                                )}
                            </div>
                        </div>

                        {/* COLORS */}
                        {hasColors && (
                            <div className="mt-5">
                                <p className="text-sm font-semibold text-gray-500 mb-2">Couleurs</p>
                                <div className="flex gap-2 flex-wrap">
                                    {product.colors!.map((color, i) => (
                                        <button
                                            key={i}
                                            onClick={() => setSelectedColor(i)}
                                            className={`w-10 h-10 rounded-lg transition-all duration-200 ${selectedColor === i
                                                ? 'ring-2 ring-offset-2 ring-gray-900 scale-105'
                                                : 'hover:scale-105'
                                                }`}
                                            style={{ backgroundColor: color }}
                                            aria-label={`Couleur ${i + 1}`}
                                        />
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* SIZES */}
                        {hasSizes && (
                            <div className="mt-5">
                                <p className="text-sm font-semibold text-gray-900 mb-2">Tailles</p>
                                <div className="flex gap-2 flex-wrap">
                                    {product.sizes!.map((size, i) => (
                                        <button
                                            key={i}
                                            onClick={() => setSelectedSize(i)}
                                            className={`min-w-[40px] h-10 px-3 rounded-lg text-sm font-semibold transition-all duration-200 border ${selectedSize === i
                                                ? 'bg-gray-900 text-white border-gray-900'
                                                : 'bg-white text-gray-800 border-gray-200 hover:border-gray-400'
                                                }`}
                                        >
                                            {size}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* DESCRIPTION */}
                        {(hasDescription || hasFeatures || hasTechnicalSpecs) && (
                            <div className="mt-4 space-y-6">

                                {/* DESCRIPTION */}
                                {hasDescription && (
                                    <div>
                                        <h2 className="text-base font-bold text-gray-900 mb-2">
                                            Description
                                        </h2>
                                        <div className="text-sm leading-relaxed text-gray-600 space-y-2">
                                            {product.description!.split('\n').map((para, i) => (
                                                <p key={i}>{para}</p>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {/* POURQUOI CHOISIR */}
                                {hasFeatures && (
                                    <div>
                                        <h3 className="text-base font-bold text-gray-900 mb-3">
                                            Pourquoi choisir ce produit ?
                                        </h3>
                                        <ul className="list-disc pl-5 space-y-2 text-sm leading-relaxed text-gray-600">
                                            {product.features!.map((feature, idx) => {
                                                const parts = feature.split(' : ');
                                                return (
                                                    <li key={idx}>
                                                        {parts.length > 1 ? (
                                                            <>
                                                                <span className="font-semibold text-gray-900">
                                                                    {parts[0]} :
                                                                </span>{' '}
                                                                {parts.slice(1).join(' : ')}
                                                            </>
                                                        ) : (
                                                            feature
                                                        )}
                                                    </li>
                                                );
                                            })}
                                        </ul>
                                    </div>
                                )}

                                {/* CARACTÉRISTIQUES TECHNIQUES */}
                                {hasTechnicalSpecs && (
                                    <div>
                                        <h3 className="text-base font-bold text-gray-900 mb-3">
                                            Caractéristiques techniques
                                        </h3>
                                        <div className="space-y-2 text-sm text-gray-600">
                                            {Object.entries(product.technicalSpecs!).map(([key, value], idx) => (
                                                <p key={idx}>
                                                    <span className="font-medium text-gray-900">{key} :</span> {value}
                                                </p>
                                            ))}
                                        </div>
                                    </div>
                                )}

                            </div>
                        )}

                        {/* DESKTOP BUY BUTTON */}
                        <div className="hidden lg:block mt-8">
                            <button
                                onClick={handleAddToCart}
                                className="w-full bg-orange-500 text-white py-4 rounded-xl text-lg font-bold hover:bg-orange-600 active:scale-[0.98] transition-all shadow-md">
                                Commander maintenant
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* ========== MOBILE STICKY BUTTON ========== */}
            <div className="fixed bottom-0 left-0 right-0 bg-transparent backdrop-blur-md shadow-[0_-4px_20px_rgba(0,0,0,0.08)] p-4 lg:hidden z-30 pb-[calc(1rem+env(safe-area-inset-bottom))]">
                <button
                    onClick={handleAddToCart}
                    className="w-full bg-orange-500 text-white py-3.5 rounded-xl text-base font-bold active:scale-[0.98] transition-all shadow-sm">
                    Commander maintenant
                </button>
            </div>
        </>
    );
}
