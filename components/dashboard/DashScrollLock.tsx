"use client";

import { useEffect } from "react";

export default function DashScrollLock() {
    useEffect(() => {
        // Au montage (quand on entre dans le dashboard)
        // On bloque le scroll sur le body et le html
        const originalOverflowHtml = document.documentElement.style.overflow;
        const originalOverflowBody = document.body.style.overflow;
        const originalHeightHtml = document.documentElement.style.height;
        const originalHeightBody = document.body.style.height;
        const originalOverscrollHtml = document.documentElement.style.overscrollBehavior;
        const originalOverscrollBody = document.body.style.overscrollBehavior;

        document.documentElement.style.overflow = "hidden";
        document.documentElement.style.height = "100%";
        document.documentElement.style.overscrollBehavior = "none";
        document.body.style.overflow = "hidden";
        document.body.style.height = "100%";
        document.body.style.overscrollBehavior = "none";

        return () => {
            // Au démontage (quand on quitte le dashboard)
            // On restaure les styles d'origine
            document.documentElement.style.overflow = originalOverflowHtml;
            document.documentElement.style.height = originalHeightHtml;
            document.documentElement.style.overscrollBehavior = originalOverscrollHtml;
            document.body.style.overflow = originalOverflowBody;
            document.body.style.height = originalHeightBody;
            document.body.style.overscrollBehavior = originalOverscrollBody;
        };
    }, []);

    return null; // Ce composant ne rend rien, il gère juste l'effet de bord
}
