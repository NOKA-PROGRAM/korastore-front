"use client";
import Link from "next/link";
import { ArrowLeft, Menu, X } from "lucide-react";

interface HeaderProps {
    isSidebarOpen: boolean;
    onToggleSidebar: () => void;
}

export default function DashboardHeader({ isSidebarOpen, onToggleSidebar }: HeaderProps) {
    return (
        <header className="bg-orange-500 text-white px-4 md:px-5 py-4 flex items-center justify-between flex-shrink-0 relative">
            {/* Burger Menu Button - Visible on mobile/tablet (lg:hidden) */}
            <button
                aria-label={isSidebarOpen ? "Fermer le menu" : "Ouvrir le menu"}
                onClick={onToggleSidebar}
                className="lg:hidden text-white hover:text-orange-100 transition-colors z-50 p-1"
            >
                {isSidebarOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </button>

            {/* Logo - Centered on mobile like the homepage */}
            <div
                className="text-white font-extrabold text-2xl tracking-tight absolute left-1/2 -translate-x-1/2 lg:static lg:translate-x-0 font-title"
            >
                korastore
            </div>

            {/* Bouton retour vers l'accueil */}
            <Link
                href="/"
                className="flex items-center gap-2 px-3 md:px-4 py-2 rounded-lg text-sm font-medium z-50"
            >
                <ArrowLeft size={16} />
            </Link>
        </header>
    );
}
