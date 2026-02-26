import { TrendingUp, TrendingDown } from "lucide-react";

interface Props {
    title: string;
    value: string;
    change?: string;
    positive?: boolean;
    icon?: string;
}

export default function StatCard({
    title,
    value,
    change,
    positive = true,
    icon,
}: Props) {
    return (
        <div
            className="bg-white rounded-xl shadow-sm p-5 flex flex-col gap-3"
            style={{ border: "1px solid #fed7aa" }}
        >
            <div className="flex items-start justify-between">
                <h3 className="text-sm font-medium text-gray-500">{title}</h3>
                <div
                    className="w-9 h-9 rounded-lg flex items-center justify-center text-lg"
                    style={{ backgroundColor: "#fff7ed" }}
                >
                    {icon || "📊"}
                </div>
            </div>

            <div className="text-2xl font-bold text-gray-900 leading-tight">
                {value}
            </div>

            {change && (
                <div
                    className={`flex items-center gap-1 text-sm font-medium ${positive ? "text-emerald-600" : "text-red-500"
                        }`}
                >
                    {positive ? (
                        <TrendingUp size={14} />
                    ) : (
                        <TrendingDown size={14} />
                    )}
                    {change}
                </div>
            )}
        </div>
    );
}