import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#FB8500] text-white px-6 py-10 md:px-8 md:py-14 w-full">
      <div className="max-w-7xl mx-auto">

        {/* LOGO */}
        <div className="flex justify-center md:justify-start mb-10">
          <Link
            href="/"
            className="text-white text-2xl lg:text-3xl font-extrabold tracking-tight shrink-0 font-title"
          >
            korastore
          </Link>
        </div>

        {/* GRID PRINCIPAL */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

          {/* COLONNE CATÉGORIES */}
          <div>
            <h3 className="text-lg font-bold mb-4 pb-2">
              Catégories
            </h3>

            <div className="grid grid-cols-2 gap-y-3 text-sm md:text-base">
              <Link href="#">Électronique</Link>
              <Link href="#">Maison & Cuisine</Link>
              <Link href="#">Santé & Bien-être</Link>
              <Link href="#">Beauté & Cosmétiques</Link>
              <Link href="#">Mode, chaussures & Design</Link>
              <Link href="#">Bébé, enfants & jouets</Link>
              <Link href="#">Epicerie & Alimentation</Link>
              <Link href="#">Sport & Plein air</Link>
              <Link href="#">Auto & Moto</Link>
              <Link href="#">Bureau & Productivité</Link>
            </div>
          </div>

          {/* COLONNE INFORMATIONS */}
          <div>
            <h3 className="text-lg font-bold mb-4 pb-2">
              Informations & Aide
            </h3>

            <div className="flex flex-col gap-3 text-sm md:text-base">
              <Link href="#">Service client</Link>
              <Link href="#">Contactez nous sur WhatsApp</Link>
              <Link href="#">FAQ</Link>
              <Link href="#">À propos de nous</Link>
              <Link href="#">Politique de retour</Link>
              <Link href="#">Politique de remboursement</Link>
              <Link href="#">CGU</Link>
            </div>
          </div>

        </div>

        {/* COPYRIGHT */}
        <div className="mt-10 pt-6 border-t border-white/20 text-center text-xs md:text-sm">
          © 2026 KORASTORE. Tous droits réservés.
        </div>

      </div>
    </footer>
  );
}