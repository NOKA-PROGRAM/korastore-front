'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { User, ShoppingCart, Search, Menu, X, ChevronDown, MessageCircle } from 'lucide-react';
import * as AccordionPrimitive from '@radix-ui/react-accordion';

const navLinks = [
    { label: 'ACCUEIL', href: '/', isAccordion: false },
    { label: 'BOUTIQUE', href: '/boutique', isAccordion: true },
    { label: 'AIDE', href: '/aide', isAccordion: true },
];

const shopItems = [
    { label: 'Électronique', href: '/boutique/electronique' },
    { label: 'Mode & Chaussures', href: '/boutique/mode' },
    { label: 'Maison & Cuisine', href: '/boutique/maison' },
    { label: 'Beauté & Cosmétiques', href: '/boutique/beaute' },
    { label: 'Sport & Plein air', href: '/boutique/sport' },
];

const helpItems = [
    { label: 'Contact', href: '/aide/contact' },
    { label: 'Aide & FAQ', href: '/aide/faq' },
    { label: 'Politique de retour', href: '/aide/retour' },
    { label: 'Suivi de commande', href: '/aide/suivi' },
];

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [megaMenuOpen, setMegaMenuOpen] = useState<string | null>(null);

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

                {/* Mobile Nav Fullscreen Modal */}
                {menuOpen && (
                    <>
                        {/* Backdrop */}
                        <div
                            className="fixed inset-0 bg-black/30 backdrop-blur-sm md:hidden z-30"
                            onClick={() => setMenuOpen(false)}
                            aria-hidden="true"
                        />

                        {/* Fullscreen Menu */}
                        <nav
                            aria-label="Navigation mobile"
                            className="fixed inset-0 md:hidden z-40 bg-white flex flex-col overflow-y-auto"
                        >
                            {/* Header with Logo and Close Button */}
                            <div className="flex items-center justify-between px-4 py-4 sticky top-0 bg-white border-b border-gray-200">
                                <Link
                                    href="/"
                                    onClick={() => setMenuOpen(false)}
                                    className="text-gray-900 text-2xl font-extrabold tracking-tight font-title"
                                >
                                    korastore
                                </Link>
                                <button
                                    onClick={() => setMenuOpen(false)}
                                    className="text-gray-600 hover:text-gray-900 transition-colors p-2 hover:bg-gray-100 rounded-lg"
                                    aria-label="Fermer le menu"
                                >
                                    <X className="w-6 h-6" />
                                </button>
                            </div>

                            {/* Menu Items */}
                            <div className="flex-1 px-4 py-6">
                                <AccordionPrimitive.Root type="single" collapsible className="space-y-2">
                                    {/* ACCUEIL - Regular Link */}
                                    <Link
                                        href="/"
                                        onClick={() => setMenuOpen(false)}
                                        className="block text-gray-900 font-bold text-lg py-3 px-3 hover:bg-gray-100 rounded-lg transition-colors"
                                    >
                                        ACCUEIL
                                    </Link>

                                    {/* BOUTIQUE - Accordion */}
                                    <AccordionPrimitive.Item value="boutique" className="border-0">
                                        <AccordionPrimitive.Header className="flex">
                                            <AccordionPrimitive.Trigger className="flex flex-1 items-center justify-between text-gray-900 font-bold text-lg py-3 px-3 hover:bg-gray-100 rounded-lg transition-colors [&[data-state=open]>svg]:rotate-180">
                                                BOUTIQUE
                                                <ChevronDown className="w-5 h-5 text-orange-500 shrink-0 transition-transform duration-200" />
                                            </AccordionPrimitive.Trigger>
                                        </AccordionPrimitive.Header>
                                        <AccordionPrimitive.Content className="pb-0">
                                            <div className="space-y-1 pl-6 pb-3">
                                                {shopItems.map((item) => (
                                                    <Link
                                                        key={item.href}
                                                        href={item.href}
                                                        onClick={() => setMenuOpen(false)}
                                                        className="block text-gray-700 text-sm py-2.5 px-3 hover:text-orange-600 hover:bg-gray-100 rounded-lg transition-colors"
                                                    >
                                                        {item.label}
                                                    </Link>
                                                ))}
                                            </div>
                                        </AccordionPrimitive.Content>
                                    </AccordionPrimitive.Item>

                                    {/* AIDE - Accordion */}
                                    <AccordionPrimitive.Item value="aide" className="border-0">
                                        <AccordionPrimitive.Header className="flex">
                                            <AccordionPrimitive.Trigger className="flex flex-1 items-center justify-between text-gray-900 font-bold text-lg py-3 px-3 hover:bg-gray-100 rounded-lg transition-colors [&[data-state=open]>svg]:rotate-180">
                                                AIDE
                                                <ChevronDown className="w-5 h-5 text-orange-500 shrink-0 transition-transform duration-200" />
                                            </AccordionPrimitive.Trigger>
                                        </AccordionPrimitive.Header>
                                        <AccordionPrimitive.Content className="pb-0">
                                            <div className="space-y-1 pl-6 pb-3">
                                                {helpItems.map((item) => (
                                                    <Link
                                                        key={item.href}
                                                        href={item.href}
                                                        onClick={() => setMenuOpen(false)}
                                                        className="block text-gray-700 text-sm py-2.5 px-3 hover:text-orange-600 hover:bg-gray-100 rounded-lg transition-colors"
                                                    >
                                                        {item.label}
                                                    </Link>
                                                ))}
                                            </div>
                                        </AccordionPrimitive.Content>
                                    </AccordionPrimitive.Item>
                                </AccordionPrimitive.Root>
                            </div>

                            {/* Footer */}
                            <div className="px-4 py-6 border-t border-gray-200 space-y-4">
                                <div className="text-center">
                                    <h3 className="text-gray-900 font-bold text-base mb-4">Besoin d'assistance?</h3>
                                    <a
                                        href="https://wa.me/+221771234567"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center justify-center gap-2 w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3 rounded-lg transition-colors"
                                    >
                                        <MessageCircle className="w-5 h-5" />
                                        Contactez-nous sur WhatsApp
                                    </a>
                                </div>
                            </div>
                        </nav>
                    </>
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
                <nav aria-label="Navigation principale" className="flex items-center gap-6 lg:gap-8 shrink-0 relative">
                    {/* ACCUEIL */}
                    <Link
                        href="/"
                        className="text-gray-600 hover:text-orange-600 font-bold text-sm tracking-wide transition-colors"
                    >
                        ACCUEIL
                    </Link>

                    {/* BOUTIQUE with Mega Menu */}
                    <div
                        className="relative group"
                        onMouseEnter={() => setMegaMenuOpen('boutique')}
                        onMouseLeave={() => setMegaMenuOpen(null)}
                    >
                        <button
                            className="text-gray-600 hover:text-orange-600 font-bold text-sm tracking-wide transition-colors flex items-center gap-1"
                        >
                            BOUTIQUE
                            <ChevronDown className="w-4 h-4 group-hover:rotate-180 transition-transform duration-200" />
                        </button>

                        {/* Full-Width Mega Menu */}
                        <div className="absolute left-0 right-0 top-full mt-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 pointer-events-none group-hover:pointer-events-auto">
                            <div className="fixed left-0 right-0 bg-white border-b border-gray-100 shadow-lg">
                                <div className="max-w-7xl mx-auto px-6 lg:px-10 xl:px-16 py-8">
                                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
                                        {shopItems.map((item, index) => (
                                            <div key={item.href} className="flex flex-col">
                                                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-3">
                                                    Cat. {index + 1}
                                                </p>
                                                <Link
                                                    href={item.href}
                                                    className="text-gray-900 hover:text-orange-600 font-semibold text-sm transition-colors"
                                                >
                                                    {item.label}
                                                </Link>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* AIDE with Mega Menu */}
                    <div
                        className="relative group"
                        onMouseEnter={() => setMegaMenuOpen('aide')}
                        onMouseLeave={() => setMegaMenuOpen(null)}
                    >
                        <button
                            className="text-gray-600 hover:text-orange-600 font-bold text-sm tracking-wide transition-colors flex items-center gap-1"
                        >
                            AIDE
                            <ChevronDown className="w-4 h-4 group-hover:rotate-180 transition-transform duration-200" />
                        </button>

                        {/* Full-Width Mega Menu */}
                        <div className="absolute left-0 right-0 top-full mt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 pointer-events-none group-hover:pointer-events-auto">
                            <div className="fixed left-0 right-0 bg-white border-b border-gray-100 shadow-lg">
                                <div className="max-w-7xl mx-auto px-6 lg:px-10 xl:px-16 py-8">
                                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
                                        {helpItems.map((item, index) => (
                                            <div key={item.href} className="flex flex-col">
                                                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-3">
                                                    Rubrique {index + 1}
                                                </p>
                                                <Link
                                                    href={item.href}
                                                    className="text-gray-900 hover:text-orange-600 font-semibold text-sm transition-colors"
                                                >
                                                    {item.label}
                                                </Link>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
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
