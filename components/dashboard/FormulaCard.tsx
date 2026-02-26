export default function FormulaCard() {
    return (
        <div
            className="bg-white rounded-xl shadow-sm p-6 flex flex-col gap-5"
            style={{ border: "1px solid #fed7aa" }}
        >
            <h3 className="font-semibold text-gray-800">
                Formule du Taux de Conversion
            </h3>

            {/* Formule */}
            <div
                className="rounded-xl p-6 text-center"
                style={{ backgroundColor: "#f9fafb", border: "1px solid #e5e7eb" }}
            >
                <p className="text-gray-500 text-sm mb-3">Taux de Conversion =</p>
                <div className="flex justify-center items-center gap-4 font-semibold text-gray-800">
                    <div className="flex flex-col items-center">
                        <span className="pb-1" style={{ borderBottom: "2px solid #374151" }}>
                            Nombre de Commandes
                        </span>
                        <span className="mt-1 pt-1">Nombre de Visiteurs</span>
                    </div>
                    <span className="text-gray-600">&times; 100</span>
                </div>
            </div>

            {/* Exemple */}
            <div>
                <p className="text-xs text-gray-500 font-medium mb-2">Exemple de calcul :</p>
                <div
                    className="rounded-lg p-4 text-sm flex flex-col gap-1.5"
                    style={{ backgroundColor: "#fff7ed", border: "1px solid #fed7aa" }}
                >
                    <p className="text-gray-700">
                        • Nombre de commandes : <strong>342</strong>
                    </p>
                    <p className="text-gray-700">
                        • Nombre de visiteurs : <strong>12,847</strong>
                    </p>
                    <p className="text-gray-700">
                        • Calcul : (342 ÷ 12,847) × 100 ={" "}
                        <span className="text-orange-500 font-bold">2.66%</span>
                    </p>
                </div>
            </div>

            <p className="text-xs text-gray-400">
                Un taux de conversion élevé indique que vos visiteurs effectuent des
                achats de manière efficace sur votre site.
            </p>
        </div>
    );
}