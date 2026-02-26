"use client";
import { ChevronDown } from "lucide-react";

function FilterBadge({ label, dot }: { label: string; dot?: boolean }) {
    return (
        <button
            className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium bg-white hover:bg-orange-50 transition-colors"
            style={{ border: "1px solid #fed7aa", color: "#ea580c" }}
        >
            {dot && (
                <span
                    className="w-2 h-2 rounded-full bg-orange-500 inline-block"
                />
            )}
            {label}
            <ChevronDown size={14} className="text-orange-400" />
        </button>
    );
}

export default function Filters() {
    return (
        <div className="flex flex-wrap gap-3">
            <FilterBadge label="Aujourd'hui" />
            <FilterBadge label="Tous les canaux" />
            <FilterBadge label="12,847 visiteurs" dot />
        </div>
    );
}