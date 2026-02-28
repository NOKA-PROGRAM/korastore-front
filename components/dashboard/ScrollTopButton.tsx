"use client";
import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

export default function ScrollTopButton() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const scrollArea = document.getElementById("dashboard-scroll-area");
        const getScrollY = () => scrollArea ? scrollArea.scrollTop : window.scrollY;
        const target = scrollArea || window;

        const onScroll = () => setVisible(getScrollY() > 300);
        target.addEventListener("scroll", onScroll);
        return () => target.removeEventListener("scroll", onScroll);
    }, []);

    if (!visible) return null;

    return (
        <button
            onClick={() => {
                const scrollArea = document.getElementById("dashboard-scroll-area");
                if (scrollArea) scrollArea.scrollTo({ top: 0, behavior: "smooth" });
                else window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="fixed left-1/2 -translate-x-1/2 z-50 flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white text-xs font-semibold px-5 py-2.5 rounded-full shadow-lg transition-all"
            style={{ bottom: "calc(2rem + env(safe-area-inset-bottom))" }}
            aria-label="Retour en haut"
        >
            <ArrowUp size={14} />
            HAUT DE PAGE
        </button>
    );
}
