import type { Metadata } from 'next';
import { Inter, Poppins } from 'next/font/google';
import './globals.css';
import { CartProvider } from '@/lib/CartContext';


const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
  variable: '--font-poppins',
});

export const metadata: Metadata = {
  title: {
    default: 'KORASTORE – Boutique en ligne | Livraison & Paiement à la livraison',
    template: '%s | KORASTORE',
  },
  description:
    'KORASTORE, votre boutique en ligne de confiance. Trouvez des produits de qualité à prix cassés, livrés chez vous avec paiement à la livraison.',
  keywords: ['boutique en ligne', 'e-commerce', 'livraison', 'paiement livraison', 'FCFA', 'KORASTORE'],
  openGraph: {
    siteName: 'KORASTORE',
    locale: 'fr_FR',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${inter.variable} ${poppins.variable} overflow-x-hidden`}>
      <body className="antialiased bg-white text-gray-800 font-body overflow-x-hidden w-full">
        <CartProvider>
          {children}
        </CartProvider>
      </body>
    </html>
  );
}

