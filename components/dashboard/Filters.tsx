"use client";

import { ChevronDown, Calendar, TrendingUp, Users } from "lucide-react";

interface SelectFilterProps {
    icon: React.ReactNode;
    options: string[];
    dot?: boolean;
}

function SelectFilter({ icon, options, dot }: SelectFilterProps) {
    return (
        <div className="relative w-full lg:w-auto min-w-[220px]">

            {/* Icon left */}
            <div className="pointer-events-none absolute inset-y-0 left-4 flex items-center gap-2">
                {icon}
                {dot && <span className="w-2 h-2 rounded-full bg-orange-500" />}
            </div>

            <select
                className="
          w-full lg:w-auto
          appearance-none
          rounded-xl
          border
          border-gray-300
          bg-gray-100 lg:bg-gray-50
          py-3
          pl-14
          pr-12
          text-sm
          text-gray-800
          focus:outline-none
          focus:ring-0
          focus:border-gray-300
          transition
        "
            >
                {options.map((option) => (
                    <option key={option}>{option}</option>
                ))}
            </select>

            {/* Chevron */}
            <ChevronDown
                size={18}
                className="pointer-events-none absolute right-5 top-1/2 -translate-y-1/2 text-gray-500"
            />
        </div>
    );
}

export default function Filters() {
    return (
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center">
            <SelectFilter
                icon={<Calendar size={18} className="text-orange-500" />}
                options={["Aujourd'hui", "7 derniers jours", "30 derniers jours"]}
            />

            <SelectFilter
                icon={<TrendingUp size={18} className="text-orange-500" />}
                options={["Tous les canaux", "WhatsApp", "Facebook", "Instagram"]}
            />

            <SelectFilter
                icon={<Users size={18} className="text-orange-500" />}
                options={["12,847 visiteurs", "10,000 visiteurs", "5,000 visiteurs"]}
                dot
            />
        </div>
    );
}