import type { Metadata } from "next";
import DashScrollLock from "@/components/dashboard/DashScrollLock";

export const metadata: Metadata = {
    title: "Tableau de bord | Korastore Back Office",
};

// Dashboard layout — pas de header/footer de la boutique principale
export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            {/* Gère le scroll lock au niveau du dashboard */}
            <DashScrollLock />
            {children}
        </>
    );
}

