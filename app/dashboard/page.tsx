"use client";

import { useState } from "react";
import Sidebar from "@/components/dashboard/Sidebar";
import Header from "@/components/dashboard/Header";
import Filters from "@/components/dashboard/Filters";
import StatCard from "@/components/dashboard/StatCard";
import FormulaCard from "@/components/dashboard/FormulaCard";
import ActivityChart from "@/components/dashboard/ActivityChart";
import Footer from "@/components/dashboard/Footer";
import ScrollTopButton from "@/components/dashboard/ScrollTopButton";
import { X } from "lucide-react";
import Link from "next/link";


export default function Dashboard() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
    const closeSidebar = () => setIsSidebarOpen(false);

    return (
        /* Conteneur racine : hauteur écran fixe, overflow hidden pour empêcher le body de scroller */
        <div className="h-screen overflow-hidden bg-gray-50 flex flex-col">

            {/* HEADER — pleine largeur, fixe en haut */}
            <Header isSidebarOpen={isSidebarOpen} onToggleSidebar={toggleSidebar} />

            {/* ZONE SOUS LE HEADER : sidebar + contenu */}
            <div className="flex flex-1 overflow-hidden relative">

                {/* MOBILE SIDEBAR MODAL (Matches Homepage Design) */}
                {isSidebarOpen && (
                    <>
                        {/* Backdrop */}
                        <div
                            className="fixed inset-0 bg-black/30 backdrop-blur-sm lg:hidden z-[60]"
                            onClick={closeSidebar}
                            aria-hidden="true"
                        />

                        {/* Fullscreen/Drawer Menu */}
                        <nav
                            aria-label="Navigation mobile"
                            className="fixed inset-y-0 left-0 w-full max-w-xs lg:hidden z-[70] bg-white flex flex-col shadow-2xl transition-transform duration-300 ease-in-out"
                        >
                            {/* Header inside Menu (Matching Homepage) */}
                            <div className="flex items-center justify-between pl-6 pr-4 py-4 border-b border-gray-100">
                                <Link
                                    href="/"
                                    onClick={closeSidebar}
                                    className="text-orange-500 text-2xl font-extrabold tracking-tight font-title"
                                >
                                    korastore
                                </Link>
                                <button
                                    onClick={closeSidebar}
                                    className="text-gray-600 hover:text-gray-900 transition-colors p-2 hover:bg-gray-100 rounded-lg"
                                    aria-label="Fermer le menu"
                                >
                                    <X className="w-6 h-6" />
                                </button>
                            </div>

                            {/* Sidebar Content */}
                            <div className="flex-1 overflow-y-auto">
                                <Sidebar onNavigate={closeSidebar} />
                            </div>
                        </nav>
                    </>
                )}

                {/* SIDEBAR FIXE — desktop uniquement */}
                <aside className="hidden lg:flex flex-shrink-0 h-full overflow-y-auto border-r border-[#fff7ed]">
                    <Sidebar />
                </aside>

                {/* CONTENU PRINCIPAL SCROLLABLE */}
                <div className="flex-1 flex flex-col overflow-y-auto min-w-0">
                    <main className="px-5 py-6 lg:px-10 lg:py-8 flex flex-col gap-8 flex-1">

                        {/* Filtres */}
                        <Filters />

                        {/* KPI CARDS */}
                        <div className="grid gap-5 grid-cols-1 sm:grid-cols-2 xl:grid-cols-4">
                            <StatCard
                                title="Visiteurs"
                                value="12,847"
                                change="+12.5%"
                                positive
                                icon="👥"
                            />
                            <StatCard
                                title="Chiffre d'affaires Total"
                                value="2,847,500 FCFA"
                                change="+8.3%"
                                positive
                                icon="💰"
                            />
                            <StatCard
                                title="Volume de Commandes"
                                value="342"
                                change="-2.1%"
                                positive={false}
                                icon="📦"
                            />
                            <StatCard
                                title="Taux de Conversion"
                                value="3.8%"
                                icon="🎯"
                            />
                        </div>

                        {/* Formule */}
                        <FormulaCard />

                        {/* Graphique */}
                        <ActivityChart />
                    </main>

                    {/* FOOTER — pleine largeur dans la zone scrollable */}
                    <Footer />
                </div>
            </div>

            {/* Bouton retour en haut */}
            <ScrollTopButton />
        </div>
    );
}
