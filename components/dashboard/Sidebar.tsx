"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
    LayoutDashboard,
    ShoppingCart,
    Package,
    Tag,
    Settings,
} from "lucide-react";

const navItems = [
    {
        icon: LayoutDashboard,
        label: "Tableau de bord",
        href: "/dashboard",
        badge: null,
    },
    {
        icon: ShoppingCart,
        label: "Commandes",
        href: "/dashboard/commandes",
        badge: 20,
    },
    {
        icon: Package,
        label: "Produits",
        href: "/dashboard/produits",
        badge: null,
    },
    {
        icon: Tag,
        label: "Réductions",
        href: "/dashboard/reductions",
        badge: null,
    },
    {
        icon: Settings,
        label: "Paramètres",
        href: "/dashboard/parametres",
        badge: 188,
    },
];

interface SidebarProps {
    onNavigate?: () => void;
}

export default function Sidebar({ onNavigate }: SidebarProps) {

    const pathname = usePathname();

    return (
        <aside
            className="w-full h-full flex flex-col bg-white"
        >
            {/* Navigation */}
            <nav className="flex flex-col gap-1 p-4 flex-1 overflow-y-auto">
                {navItems.map(({ icon: Icon, label, href, badge }) => {
                    const isActive = pathname === href;
                    return (
                        <Link
                            key={href}
                            href={href}
                            onClick={onNavigate}
                            className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all border-2 ${isActive
                                ? "border-orange-500 text-orange-600 bg-white shadow-sm"
                                : "border-gray-100 text-gray-700 hover:bg-orange-50 hover:text-orange-600"
                                }`}
                        >

                            <Icon size={18} />
                            <span className="flex-1">{label}</span>
                            {badge !== null && (
                                <span
                                    className={`text-xs font-bold px-2 py-0.5 rounded-full ${isActive
                                        ? "bg-orange-500 text-white"
                                        : "bg-orange-500 text-white"
                                        }`}
                                >
                                    {badge}
                                </span>
                            )}
                        </Link>
                    );
                })}
            </nav>
        </aside>
    );
}