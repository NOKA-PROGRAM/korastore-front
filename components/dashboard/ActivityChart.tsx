"use client";
import { useState } from "react";
import {
    AreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
} from "recharts";

const todayData = [
    { time: "00h", visitors: 80, ca: 20000 },
    { time: "02h", visitors: 60, ca: 10000 },
    { time: "04h", visitors: 40, ca: 8000 },
    { time: "06h", visitors: 90, ca: 25000 },
    { time: "08h", visitors: 180, ca: 70000 },
    { time: "10h", visitors: 240, ca: 150000 },
    { time: "12h", visitors: 320, ca: 200000 },
    { time: "14h", visitors: 280, ca: 170000 },
    { time: "16h", visitors: 350, ca: 230000 },
    { time: "17h", visitors: 420, ca: 260000 },
    { time: "18h", visitors: 390, ca: 220000 },
    { time: "20h", visitors: 300, ca: 180000 },
    { time: "22h", visitors: 200, ca: 100000 },
    { time: "23h", visitors: 140, ca: 60000 },
];

const compareData = [
    { time: "00h", visitors: 70, ca: 15000 },
    { time: "02h", visitors: 55, ca: 8000 },
    { time: "04h", visitors: 35, ca: 6000 },
    { time: "06h", visitors: 75, ca: 20000 },
    { time: "08h", visitors: 150, ca: 55000 },
    { time: "10h", visitors: 200, ca: 120000 },
    { time: "12h", visitors: 270, ca: 160000 },
    { time: "14h", visitors: 230, ca: 140000 },
    { time: "16h", visitors: 290, ca: 190000 },
    { time: "17h", visitors: 360, ca: 210000 },
    { time: "18h", visitors: 340, ca: 195000 },
    { time: "20h", visitors: 260, ca: 155000 },
    { time: "22h", visitors: 165, ca: 85000 },
    { time: "23h", visitors: 110, ca: 50000 },
];

function formatCFA(value: number) {
    if (value >= 1000) return `${(value / 1000).toFixed(0)}K`;
    return `${value}`;
}

export default function ActivityChart() {
    const [activeTab, setActiveTab] = useState<"today" | "compare">("today");
    const data = activeTab === "today" ? todayData : compareData;

    const totalSessions = data.reduce((s, d) => s + d.visitors, 0);
    const totalCA = data.reduce((s, d) => s + d.ca, 0);
    const totalCommandes = Math.round(totalCA / 48000);
    const tauxConv = ((totalCommandes / totalSessions) * 100).toFixed(1);

    return (
        <div
            className="bg-white rounded-xl shadow-sm p-4 sm:p-6 flex flex-col gap-6 sm:gap-8"
            style={{ border: "1px solid #f3f4f6" }}
        >
            {/* Titre + onglets */}
            <div className="flex items-start sm:items-center justify-between sm:justify-start gap-4">
                <h3 className="font-bold text-gray-900 text-sm sm:text-base leading-snug w-1/2 sm:w-auto">
                    Activité du site <br className="sm:hidden" />en 24h
                </h3>
                <div
                    className="flex rounded-md overflow-hidden border"
                    style={{ borderColor: "#e5e7eb" }}
                >
                    <button
                        onClick={() => setActiveTab("today")}
                        className={`px-3 py-1 sm:px-4 sm:py-1.5 text-xs font-medium transition-colors border-r border-gray-200 ${activeTab === "today"
                            ? "bg-white text-gray-900 shadow-sm z-10"
                            : "bg-gray-50/50 text-gray-500 hover:bg-gray-50"
                            }`}
                    >
                        Aujourd&apos;hui
                    </button>
                    <button
                        onClick={() => setActiveTab("compare")}
                        className={`px-3 py-1 sm:px-4 sm:py-1.5 text-xs font-medium transition-colors ${activeTab === "compare"
                            ? "bg-white text-gray-900 shadow-sm z-10"
                            : "bg-gray-50/50 text-gray-500 hover:bg-gray-50"
                            }`}
                    >
                        Comparer
                    </button>
                </div>
            </div>

            {/* Mini-stats */}
            <div className="grid grid-cols-2 gap-y-6 gap-x-4 sm:gap-y-8 sm:gap-x-12">
                <div>
                    <p className="text-xs text-gray-500 mb-1.5">Sessions</p>
                    <div className="flex items-baseline gap-2 flex-wrap">
                        <p className="text-lg sm:text-xl font-bold text-gray-900">{totalSessions.toLocaleString()}</p>
                        <p className="text-[10px] sm:text-xs text-emerald-500 font-medium flex items-center">
                            <svg className="w-3 h-3 mr-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
                            10%
                        </p>
                    </div>
                </div>
                <div>
                    <p className="text-xs text-gray-500 mb-1.5">Ventes totales</p>
                    <div className="flex items-baseline gap-2 flex-wrap">
                        <p className="text-lg sm:text-xl font-bold text-gray-900">{formatCFA(totalCA)} FCFA</p>
                        <p className="text-[10px] sm:text-xs text-emerald-500 font-medium flex items-center">
                            <svg className="w-3 h-3 mr-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
                            3.33%
                        </p>
                    </div>
                </div>
                <div>
                    <p className="text-xs text-gray-500 mb-1.5">Commandes</p>
                    <div className="flex items-baseline gap-2 flex-wrap">
                        <p className="text-lg sm:text-xl font-bold text-gray-900">{totalCommandes}</p>
                        <p className="text-[10px] sm:text-xs text-emerald-500 font-medium flex items-center">
                            <svg className="w-3 h-3 mr-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
                            25%
                        </p>
                    </div>
                </div>
                <div>
                    <p className="text-xs text-gray-500 mb-1.5">Taux de conversion</p>
                    <div className="flex items-baseline gap-2 flex-wrap">
                        <p className="text-lg sm:text-xl font-bold text-gray-900">{tauxConv}%</p>
                    </div>
                </div>
            </div>

            {/* Graphique */}
            <div className="h-56 w-full">
                <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={data} margin={{ top: 5, right: 10, left: -10, bottom: 0 }}>
                        <defs>
                            <linearGradient id="colorVisitors" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#f97316" stopOpacity={0.2} />
                                <stop offset="95%" stopColor="#f97316" stopOpacity={0} />
                            </linearGradient>
                        </defs>
                        <CartesianGrid strokeDasharray="3 3" stroke="#f3f4f6" />
                        <XAxis
                            dataKey="time"
                            tick={{ fontSize: 10, fill: "#9ca3af" }}
                            axisLine={false}
                            tickLine={false}
                        />
                        <YAxis
                            tick={{ fontSize: 10, fill: "#9ca3af" }}
                            axisLine={false}
                            tickLine={false}
                        />
                        <Tooltip
                            contentStyle={{
                                borderRadius: "8px",
                                border: "1px solid #fff7ed",
                                fontSize: "12px",
                            }}
                            formatter={(value: any) => [value, "Visiteurs"]}
                        />
                        <Area
                            type="monotone"
                            dataKey="visitors"
                            stroke="#f97316"
                            strokeWidth={2.5}
                            fill="url(#colorVisitors)"
                            dot={false}
                            activeDot={{ r: 4, fill: "#f97316" }}
                        />
                    </AreaChart>
                </ResponsiveContainer>
            </div>

            {/* Légende */}
            <div
                className="flex items-center gap-2 text-xs text-gray-500 pt-2"
                style={{ borderTop: "1px solid #f3f4f6" }}
            >
                <div className="w-3 h-3 rounded-full bg-orange-500" />
                <span>25 fév. 2026</span>
            </div>
        </div>
    );
}