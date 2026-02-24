import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full">
      {/* SECTION ORANGE */}
      <div className="bg-[#FB8500] text-white px-6 py-10 md:px-12 md:py-14 w-full">
        <div className="max-w-7xl mx-auto text-left flex flex-col gap-10">

          {/* LOGO */}
          <div className="font-extrabold tracking-tight text-3xl md:text-4xl lowercase">
            korastore
          </div>

          {/* MAIN GRID */}
          <div className="flex flex-col md:flex-row justify-between gap-12 md:gap-24">

            {/* CATEGORIES */}
            <div className="flex-1">
              <h3 className="text-[17px] md:text-lg font-semibold pb-3 mb-5 border-b border-white/40">
                Catégories
              </h3>

              <div className="grid grid-cols-2 gap-x-2 gap-y-3.5 text-[14px] md:text-[15px] font-medium text-white">
                <Link href="#" className="hover:underline pr-2">Électronique & accessoires</Link>
                <Link href="#" className="hover:underline">Vêtements & accessoires</Link>

                <Link href="#" className="hover:underline pr-2">Meubles & décoration</Link>
                <Link href="#" className="hover:underline">Jouets & jeux</Link>

                <Link href="#" className="hover:underline pr-2">Livres</Link>
                <Link href="#" className="hover:underline">Articles de sport</Link>

                <Link href="#" className="hover:underline pr-2">Produits de beauté</Link>
                <Link href="#" className="hover:underline">Alimentation</Link>

                <Link href="#" className="hover:underline pr-2">Bons plans</Link>
                <Link href="#" className="hover:underline">Produits populaires</Link>
              </div>
            </div>

            {/* INFOS & AIDE */}
            <div className="flex-1 md:max-w-lg">
              <h3 className="text-[17px] md:text-lg font-semibold pb-3 mb-5 border-b border-white/40">
                Informations & Aide
              </h3>

              <div className="flex flex-col gap-3.5 text-[14px] md:text-[15px] font-medium text-white">
                <Link href="#" className="hover:underline">Service client</Link>
                <Link href="#" className="hover:underline">Contactez nous sur WhatsApp</Link>
                <Link href="#" className="hover:underline">FAQ</Link>
                <Link href="#" className="hover:underline">À propos de nous</Link>
                <Link href="#" className="hover:underline">Politique de retour</Link>
                <Link href="#" className="hover:underline">Politique de remboursement</Link>
                <Link href="#" className="hover:underline">CGU</Link>
              </div>
            </div>

          </div>

        </div>
      </div>

      {/* SECTION BLANCHE (COPYRIGHT) */}
      <div className="bg-white py-6 md:py-8 text-center text-[12px] md:text-[13px] text-gray-500">
        © 2026 KORASTORE. Tous droits réservés.
      </div>
    </footer>
  );
}