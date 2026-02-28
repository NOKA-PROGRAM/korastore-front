'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { Product } from '@/lib/types';

export interface CartItem {
    cartItemId: string;
    product: Product;
    quantity: number;
    selectedColor?: string;
    selectedSize?: string;
}

interface CartContextType {
    items: CartItem[];
    addToCart: (product: Product, quantity: number, color?: string, size?: string) => void;
    removeFromCart: (cartItemId: string) => void;
    updateQuantity: (cartItemId: string, quantity: number) => void;
    cartCount: number;
    cartTotal: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
    const [items, setItems] = useState<CartItem[]>([]);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        const saved = localStorage.getItem('korastore_cart');
        if (saved) {
            try {
                setItems(JSON.parse(saved));
            } catch (e) {
                console.error(e);
            }
        }
        setIsLoaded(true);
    }, []);

    useEffect(() => {
        if (isLoaded) {
            localStorage.setItem('korastore_cart', JSON.stringify(items));
        }
    }, [items, isLoaded]);

    const addToCart = (product: Product, quantity: number, color?: string, size?: string) => {
        setItems((prev) => {
            const existingKey = prev.findIndex(
                (item) => item.product.id === product.id && item.selectedColor === color && item.selectedSize === size
            );
            if (existingKey >= 0) {
                const newItems = [...prev];
                newItems[existingKey].quantity += quantity;
                return newItems;
            }
            return [
                ...prev,
                {
                    cartItemId: Math.random().toString(36).substring(7),
                    product,
                    quantity,
                    selectedColor: color,
                    selectedSize: size,
                },
            ];
        });
    };

    const removeFromCart = (cartItemId: string) => {
        setItems((prev) => prev.filter((item) => item.cartItemId !== cartItemId));
    };

    const updateQuantity = (cartItemId: string, quantity: number) => {
        if (quantity < 1) return;
        setItems((prev) =>
            prev.map((item) => (item.cartItemId === cartItemId ? { ...item, quantity } : item))
        );
    };

    const cartCount = items.reduce((acc, item) => acc + item.quantity, 0);
    const cartTotal = items.reduce((acc, item) => {
        const priceStr = item.product.price.replace(/\s/g, '');
        const price = parseInt(priceStr, 10);
        return acc + (isNaN(price) ? 0 : price * item.quantity);
    }, 0);

    return (
        <CartContext.Provider value={{ items, addToCart, removeFromCart, updateQuantity, cartCount, cartTotal }}>
            {children}
        </CartContext.Provider>
    );
}

export const useCart = () => {
    const context = useContext(CartContext);
    if (context === undefined) {
        throw new Error('useCart must be used within a CartProvider');
    }
    return context;
};
