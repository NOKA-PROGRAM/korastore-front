import type { Metadata } from "next";

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
            {/* Empêche le scroll au niveau du body pour le dashboard */}
            <style>{`html, body { height: 100%; overflow: hidden; }`}</style>
            {children}
        </>
    );
}

