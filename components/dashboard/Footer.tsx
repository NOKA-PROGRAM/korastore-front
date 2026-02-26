export default function DashboardFooter() {
    return (
        <footer className="w-full">
            {/* Main Orange Section */}
            <div className="bg-[#f97316] text-white px-6 md:px-10 py-12">
                <div className="max-w-7xl mx-auto">
                    {/* korastore title like in the image */}
                    <div className="text-white font-extrabold text-3xl tracking-tight mb-12 font-title">
                        korastore
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
                        {/* Col 1 */}
                        <div>
                            <h3 className="font-bold mb-6 text-white uppercase tracking-wider text-sm border-b border-white/20 pb-2">
                                Pilotage et Configuration
                            </h3>
                            <ul className="flex flex-col gap-3 text-sm text-white/90">
                                <li>
                                    <a href="/dashboard" className="hover:text-white transition-all hover:translate-x-1 inline-block">
                                        Tableau de Bord
                                    </a>
                                </li>
                                <li>
                                    <a href="/dashboard/reductions" className="hover:text-white transition-all hover:translate-x-1 inline-block">
                                        Réductions
                                    </a>
                                </li>
                                <li>
                                    <a href="/dashboard/parametres" className="hover:text-white transition-all hover:translate-x-1 inline-block">
                                        Paramètres Rôles
                                    </a>
                                </li>
                            </ul>
                        </div>

                        {/* Col 2 */}
                        <div>
                            <h3 className="font-bold mb-6 text-white uppercase tracking-wider text-sm border-b border-white/20 pb-2">
                                Opérations
                            </h3>
                            <ul className="flex flex-col gap-3 text-sm text-white/90">
                                <li>
                                    <a href="/dashboard/commandes" className="hover:text-white transition-all hover:translate-x-1 inline-block">
                                        Gestion des Commandes
                                    </a>
                                </li>
                                <li>
                                    <a href="/dashboard/attribution" className="hover:text-white transition-all hover:translate-x-1 inline-block">
                                        Interface d&apos;Attribution
                                    </a>
                                </li>
                                <li>
                                    <a href="/dashboard/sav" className="hover:text-white transition-all hover:translate-x-1 inline-block">
                                        Suivi SAV et Clients
                                    </a>
                                </li>
                            </ul>
                        </div>

                        {/* Col 3 */}
                        <div>
                            <h3 className="font-bold mb-6 text-white uppercase tracking-wider text-sm border-b border-white/20 pb-2">
                                Catalogue et Inventaire
                            </h3>
                            <ul className="flex flex-col gap-3 text-sm text-white/90">
                                <li>
                                    <a href="/dashboard/produits" className="hover:text-white transition-all hover:translate-x-1 inline-block">
                                        Gestion des Produits
                                    </a>
                                </li>
                                <li>
                                    <a href="/dashboard/clients" className="hover:text-white transition-all hover:translate-x-1 inline-block">
                                        Base de Données Clients
                                    </a>
                                </li>
                                <li>
                                    <a href="/dashboard/stocks" className="hover:text-white transition-all hover:translate-x-1 inline-block">
                                        Stocks et Variantes
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {/* White Copyright Section */}
            <div className="bg-white text-center text-[10px] md:text-xs text-gray-500 py-6 border-t border-gray-100">
                <div className="max-w-7xl mx-auto px-4">
                    © 2026 KORASTORE. Tous droits réservés.
                </div>
            </div>
        </footer>
    );
}