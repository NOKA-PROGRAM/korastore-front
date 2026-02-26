import FixedHeader from '@/components/home/FixedHeader';

export default function MainLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <FixedHeader />
            {children}
        </>
    );
}
