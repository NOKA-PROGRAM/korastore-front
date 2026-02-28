import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Product } from '@/lib/types';

interface ProductCardProps {
    product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
    const isPopular = product.isPopular;

    return (
        <Link href={`/product/${product.id}`} className="block w-full">
            <div
                className={`
                    w-full
                    rounded-2xl p-3
                    ${isPopular
                        ? 'bg-gradient-to-b from-[#FB8500]/90 via-[#FFE2BD] to-white border border-[#FB8500]'
                        : 'bg-[#F2F2F2]'
                    }
                    flex flex-col
                    transition-all duration-300
                    hover:shadow-md
                `}
            >
                {/* IMAGE */}
                <div className="relative w-full aspect-square rounded-xl overflow-hidden bg-white">
                    <Image
                        src={product.img}
                        alt={product.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    />

                    {product.discount && (
                        <div className="absolute top-2 right-2 bg-black text-white text-[9px] font-bold w-7 h-7 rounded-full shadow flex items-center justify-center">
                            {product.discount}
                        </div>
                    )}
                </div>

                {/* CONTENT */}
                <div className="flex flex-col flex-1 mt-3">

                    {/* PRICE */}
                    <div className="flex flex-col justify-end min-h-[44px] mb-1">
                        {product.oldPrice ? (
                            <span className="text-[10px] text-gray-500 font-semibold line-through leading-none mb-1">
                                {product.oldPrice} F CFA
                            </span>
                        ) : (
                            <div className="h-[14px]" />
                        )}

                        <span className="text-[15px] md:text-lg font-bold text-black leading-tight">
                            {product.price} <span className="text-[11px] md:text-sm font-semibold">F CFA</span>
                        </span>
                    </div>

                    {/* TITLE */}
                    <div className="text-[11px] md:text-[13px] text-gray-900 line-clamp-2 leading-snug font-medium min-h-[32px] md:min-h-[36px]">
                        {product.title}
                    </div>

                    {/* BUTTON */}
                    <div
                        className="
                        mt-3
                        w-full
                        bg-[#FB8500]
                        hover:bg-[#e67600]
                        text-white
                        rounded-xl
                        py-2.5
                        text-[12px] md:text-sm font-bold
                        transition-all duration-300
                        active:scale-95
                        flex items-center justify-center cursor-pointer
                    "
                    >
                        Commander
                    </div>
                </div>
            </div>
        </Link>
    );
}
