"use client";
import React, { useState, useRef, useEffect } from "react";
import { ChevronDown, Calendar, TrendingUp, Users } from "lucide-react";

interface SelectFilterProps {
    icon: React.ReactNode;
    options: string[];
    dot?: boolean;
    defaultValue?: string;
}

function SelectFilter({ icon, options, dot, defaultValue }: SelectFilterProps) {
    const [isOpen, setIsOpen] = useState(false);
    const [selected, setSelected] = useState(defaultValue || options[0]);
    const dropdownRef = useRef<HTMLDivElement>(null);

    // Close when clicking outside
    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <div className="relative w-full lg:w-auto min-w-[220px]" ref={dropdownRef}>
            {/* Trigger Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className={`
                    w-full flex items-center justify-between
                    rounded-xl border border-gray-200 
                    bg-white lg:bg-gray-50
                    py-3 pl-4 pr-4
                    text-sm font-medium text-gray-700
                    hover:border-orange-200 hover:bg-orange-50/30
                    transition-all duration-200
                    ${isOpen ? 'border-orange-400 ring-2 ring-orange-100 bg-white' : ''}
                `}
            >
                <div className="flex items-center gap-3">
                    <div className="flex items-center gap-2">
                        {icon}
                        {dot && <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />}
                    </div>
                    <span className="truncate">{selected}</span>
                </div>
                <ChevronDown
                    size={16}
                    className={`text-gray-400 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
                />
            </button>

            {/* Dropdown Menu */}
            {isOpen && (
                <div className="absolute z-[100] mt-2 w-full lg:min-w-full bg-white rounded-xl shadow-xl border border-gray-100 py-2 animate-in fade-in zoom-in duration-200">
                    {options.map((option) => (
                        <button
                            key={option}
                            onClick={() => {
                                setSelected(option);
                                setIsOpen(false);
                            }}
                            className={`
                                w-full text-left px-4 py-2.5 text-sm transition-colors
                                ${selected === option
                                    ? 'bg-orange-50 text-orange-600 font-semibold'
                                    : 'text-gray-700 hover:bg-gray-50'
                                }
                            `}
                        >
                            {option}
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
}

export default function Filters() {
    return (
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:flex-wrap lg:flex-nowrap">
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
