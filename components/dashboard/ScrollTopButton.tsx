"use client";
import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

export default function ScrollTopButton() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const onScroll = () => setVisible(window.scrollY > 300);
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    if (!visible) return null;

    return (
        <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white text-xs font-semibold px-5 py-2.5 rounded-full shadow-lg transition-all"
            aria-label="Retour en haut"
        >
            <ArrowUp size={14} />
            HAUT DE PAGE
        </button>
    );
}
