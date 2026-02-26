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
            className="bg-white rounded-xl shadow-sm p-6 flex flex-col gap-5"
            style={{ border: "1px solid #fed7aa" }}
        >
            {/* Titre + onglets */}
            <div className="flex items-center justify-between flex-wrap gap-3">
                <h3 className="font-semibold text-gray-800">Activité du site en 24h</h3>
                <div
                    className="flex rounded-lg overflow-hidden"
                    style={{ border: "1px solid #fed7aa" }}
                >
                    <button
                        onClick={() => setActiveTab("today")}
                        className={`px-4 py-1.5 text-xs font-medium transition-colors ${activeTab === "today"
                            ? "bg-orange-500 text-white"
                            : "bg-white text-gray-600 hover:bg-orange-50"
                            }`}
                    >
                        Aujourd&apos;hui
                    </button>
                    <button
                        onClick={() => setActiveTab("compare")}
                        className={`px-4 py-1.5 text-xs font-medium transition-colors ${activeTab === "compare"
                            ? "bg-orange-500 text-white"
                            : "bg-white text-gray-600 hover:bg-orange-50"
                            }`}
                    >
                        Comparer
                    </button>
                </div>
            </div>

            {/* Mini-stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                <div>
                    <p className="text-xs text-gray-400 mb-0.5">Sessions</p>
                    <p className="text-xl font-bold text-gray-800">{totalSessions.toLocaleString()}</p>
                    <p className="text-xs text-emerald-500 font-medium mt-0.5">+10%</p>
                </div>
                <div>
                    <p className="text-xs text-gray-400 mb-0.5">Ventes totales</p>
                    <p className="text-xl font-bold text-gray-800">{formatCFA(totalCA)} FCFA</p>
                    <p className="text-xs text-emerald-500 font-medium mt-0.5">+3.11%</p>
                </div>
                <div>
                    <p className="text-xs text-gray-400 mb-0.5">Commandes</p>
                    <p className="text-xl font-bold text-gray-800">{totalCommandes}</p>
                    <p className="text-xs text-emerald-500 font-medium mt-0.5">+28%</p>
                </div>
                <div>
                    <p className="text-xs text-gray-400 mb-0.5">Taux de conversion</p>
                    <p className="text-xl font-bold text-gray-800">{tauxConv}%</p>
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
                                border: "1px solid #fed7aa",
                                fontSize: "12px",
                            }}
                            formatter={(value: number) => [value, "Visiteurs"]}
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