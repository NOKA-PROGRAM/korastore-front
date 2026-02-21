'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { User, ShoppingCart, Search, Menu, X } from 'lucide-react';

const navLinks = [
    { label: 'ACCUEIL', href: '/' },
    { label: 'BOUTIQUE', href: '/boutique' },
    { label: 'PROMO', href: '/promo' },
];

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="w-full sticky top-0 z-40">
            {/* ─────────────────────────────────────────────────────────────
          MOBILE HEADER  (visible sous md)
      ───────────────────────────────────────────────────────────── */}
            <div className="md:hidden bg-gray-900 px-4 pt-3 pb-3">
                {/* Row 1 : Logo — Icons */}
                <div className="flex items-center justify-between mb-3">
                    {/* Logo */}
                    <Link href="/" className="text-white text-2xl font-extrabold tracking-tight font-title">
                        korastore
                    </Link>

                    {/* Icons */}
                    <div className="flex items-center gap-3">
                        {/* Profile */}
                        <button aria-label="Mon compte" className="text-gray-300 hover:text-white transition-colors">
                            <User className="w-6 h-6" />
                        </button>

                        {/* Cart */}
                        <Link href="/panier" aria-label="Mon panier" className="relative text-gray-300 hover:text-white transition-colors">
                            <ShoppingCart className="w-6 h-6" />
                            <span className="absolute -top-1.5 -right-1.5 bg-orange-500 text-white text-[10px] font-extrabold w-4 h-4 rounded-full flex items-center justify-center">
                                2
                            </span>
                        </Link>

                        {/* Burger */}
                        <button
                            aria-label={menuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
                            onClick={() => setMenuOpen(!menuOpen)}
                            className="text-gray-300 hover:text-white transition-colors"
                        >
                            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
                </div>

                {/* Row 2 : Search bar */}
                <div className="bg-gray-800 border border-gray-700 rounded-full flex items-center px-4 py-2 w-full focus-within:border-orange-400 transition-colors">
                    <Search className="text-gray-400 w-4 h-4 mr-2 shrink-0" />
                    <input
                        type="search"
                        placeholder="Rechercher..."
                        className="bg-transparent w-full text-sm outline-none placeholder-gray-500 text-gray-100"
                    />
                </div>

                {/* Mobile Nav Drawer */}
                {menuOpen && (
                    <nav
                        aria-label="Navigation mobile"
                        className="mt-3 border-t border-gray-700 pt-3 flex flex-col gap-1"
                    >
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                onClick={() => setMenuOpen(false)}
                                className="text-gray-300 hover:text-orange-400 font-semibold text-sm py-2 px-1 transition-colors"
                            >
                                {link.label}
                            </Link>
                        ))}
                    </nav>
                )}
            </div>

            {/* ─────────────────────────────────────────────────────────────
          DESKTOP HEADER  (visible à partir de md)
      ───────────────────────────────────────────────────────────── */}
            <div className="hidden md:flex items-center justify-between bg-white border-b border-gray-100 px-6 lg:px-10 xl:px-16 h-16 gap-6 max-w-400 mx-auto w-full">
                {/* Logo */}
                <Link
                    href="/"
                    className="text-gray-900 text-2xl lg:text-3xl font-extrabold tracking-tight shrink-0 font-title"
                >
                    korastore
                </Link>

                {/* Search bar */}
                <div className="flex-1 max-w-xl bg-gray-100 border border-gray-200 rounded-full flex items-center px-4 py-2 focus-within:border-orange-400 focus-within:bg-white transition-all">
                    <Search className="text-gray-400 w-4 h-4 mr-2 shrink-0" />
                    <input
                        type="search"
                        placeholder="Rechercher..."
                        className="bg-transparent w-full text-sm outline-none placeholder-gray-400 text-gray-800"
                    />
                </div>

                {/* Nav links */}
                <nav aria-label="Navigation principale" className="flex items-center gap-6 lg:gap-8 shrink-0">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className="text-gray-600 hover:text-orange-600 font-bold text-sm tracking-wide transition-colors"
                        >
                            {link.label}
                        </Link>
                    ))}
                </nav>

                {/* Right actions: Account + Cart */}
                <div className="flex items-center gap-4 shrink-0">
                    {/* Compte */}
                    <Link
                        href="/compte"
                        className="flex items-center gap-1.5 text-sm font-bold text-gray-700 hover:text-orange-600 transition-colors"
                        aria-label="Mon compte"
                    >
                        <User className="w-5 h-5" />
                        <span className="hidden lg:inline">Compte</span>
                    </Link>

                    {/* Panier */}
                    <Link
                        href="/panier"
                        className="flex items-center gap-1.5 text-sm font-bold text-gray-700 hover:text-orange-600 transition-colors relative"
                        aria-label="Mon panier"
                    >
                        <div className="relative">
                            <ShoppingCart className="w-6 h-6" />
                            <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-[10px] font-extrabold w-4.5 h-4.5 min-w-4.5 min-h-4.5 rounded-full flex items-center justify-center px-0.5 shadow-sm">
                                2
                            </span>
                        </div>
                        <span className="hidden lg:inline">Panier</span>
                    </Link>
                </div>
            </div>
        </header>
    );
}
