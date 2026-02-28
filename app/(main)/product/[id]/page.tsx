import { notFound } from 'next/navigation';
import { products, categories } from '@/lib/data';
import ProductDetail from '@/components/product/ProductDetail';
import SimilarProducts from '@/components/product/SimilarProducts';
import Features from '@/components/home/Features';
import Faq from '@/components/home/Faq';
import BackToTop from '@/components/home/BackToTop';
import Footer from '@/components/home/Footer';

export default async function ProductPage({ params }: { params: Promise<{ id: string }> }) {
    const resolvedParams = await params;
    const product = products.find((p) => p.id === resolvedParams.id);

    if (!product) {
        notFound();
    }

    const category = categories.find((c) => c.slug === product.categoryId || c.id === product.categoryId);
    const similarProducts = products.filter((p) => p.categoryId === product.categoryId && p.id !== product.id).slice(0, 10);

    return (
        <main className="min-h-screen bg-white flex flex-col pt-16 md:pt-24">
            <ProductDetail product={product} />
            <Features />
            <SimilarProducts
                products={similarProducts}
                categoryName={category?.name}
                categorySlug={category?.slug}
            />
            <Faq />
            <div className="bg-[#FAFAFA] pt-6 md:pt-12">
                <BackToTop />
                <Footer />
            </div>
        </main>
    );
}
