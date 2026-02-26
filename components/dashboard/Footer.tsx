export default function DashboardFooter() {
    return (
        <footer className="text-white mt-auto" style={{ backgroundColor: "#ea580c" }}>
            <div className="px-10 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Col 1 */}
                <div>
                    <h3 className="font-bold text-base mb-4 text-white/90 uppercase tracking-wide text-xs">
                        Pilotage et Configuration
                    </h3>
                    <ul className="flex flex-col gap-2 text-sm text-white/80">
                        <li>
                            <a href="/dashboard" className="hover:text-white transition-colors">
                                Tableau de Bord
                            </a>
                        </li>
                        <li>
                            <a href="/dashboard/boutons" className="hover:text-white transition-colors">
                                Boutons
                            </a>
                        </li>
                        <li>
                            <a href="/dashboard/droits" className="hover:text-white transition-colors">
                                Niveaux / Rôles
                            </a>
                        </li>
                    </ul>
                </div>

                {/* Col 2 */}
                <div>
                    <h3 className="font-bold text-base mb-4 text-white/90 uppercase tracking-wide text-xs">
                        Opérations
                    </h3>
                    <ul className="flex flex-col gap-2 text-sm text-white/80">
                        <li>
                            <a href="/dashboard/commandes" className="hover:text-white transition-colors">
                                Gestion des Commandes
                            </a>
                        </li>
                        <li>
                            <a href="/dashboard/attribution" className="hover:text-white transition-colors">
                                Interface d&apos;Attribution
                            </a>
                        </li>
                        <li>
                            <a href="/dashboard/sav" className="hover:text-white transition-colors">
                                Suivi SAV et Clients
                            </a>
                        </li>
                    </ul>
                </div>

                {/* Col 3 */}
                <div>
                    <h3 className="font-bold text-base mb-4 text-white/90 uppercase tracking-wide text-xs">
                        Catalogue et Inventaire
                    </h3>
                    <ul className="flex flex-col gap-2 text-sm text-white/80">
                        <li>
                            <a href="/dashboard/produits" className="hover:text-white transition-colors">
                                Gestion des Produits
                            </a>
                        </li>
                        <li>
                            <a href="/dashboard/clients" className="hover:text-white transition-colors">
                                Base de Données Clients
                            </a>
                        </li>
                        <li>
                            <a href="/dashboard/stocks" className="hover:text-white transition-colors">
                                Stocks et Variantes
                            </a>
                        </li>
                    </ul>
                </div>
            </div>

            <div
                className="text-center text-xs text-white/60 py-4"
                style={{ borderTop: "1px solid rgba(255,255,255,0.15)" }}
            >
                © 2026 KORASTORE. Tous droits réservés.
            </div>
        </footer>
    );
}