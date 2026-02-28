import React, { Suspense } from 'react';
import type { Metadata } from 'next';

import ShopByCategory from '@/components/home/Categories';
import PromoSection from '@/components/home/PromoSection';
import PopularProducts from '@/components/home/PopularProducts';
import Features from '@/components/home/Features';
import Faq from '@/components/home/Faq';
import Footer from '@/components/home/Footer';
import BackToTop from '@/components/home/BackToTop';

export const metadata: Metadata = {
  title: 'Accueil – Produits populaires, Bons Plans & Livraison gratuite',
  description:
    "Découvrez les meilleures offres de KORASTORE : tissus traditionnels, électronique, beauté et plus. Livraison rapide partout au pays, paiement à la livraison disponible.",
};

export default function HomePage() {
  return (
    <>

      <div className="w-full min-h-[100dvh] overflow-x-hidden">
        <main id="main-content">
          {/* Category Navigation */}
          <Suspense fallback={<div className="h-40 animate-pulse bg-gray-100 mx-4 rounded-xl" />}>
            <ShopByCategory />
          </Suspense>

          {/* Promotional Deals */}
          <PromoSection />

          {/* Popular Products Grid */}
          <Suspense fallback={<div className="h-80 animate-pulse bg-gray-100 mx-4 rounded-xl" />}>
            <PopularProducts />
          </Suspense>

          {/* Trust Features: Shipping / Payment / Returns */}
          <Features />

          {/* About text */}


          {/* FAQ Accordion */}
          <Faq />

          {/* Back to Top */}
          <BackToTop />
        </main>

        {/* Site Footer */}
        <Footer />
      </div>
    </>
  );
}
