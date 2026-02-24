'use client';

import React, { useState, useEffect, useRef } from 'react';
import TopBanner from './TopBanner';
import Header from './Header';

export default function FixedHeader() {
    const [bannerVisible, setBannerVisible] = useState(true);
    const bannerRef = useRef<HTMLDivElement>(null);
    const [bannerHeight, setBannerHeight] = useState(0);

    // Measure banner height on mount
    useEffect(() => {
        if (bannerRef.current) {
            setBannerHeight(bannerRef.current.offsetHeight);
        }
    }, []);

    // Hide banner on scroll down, show when back at top
    useEffect(() => {
        let lastScrollY = window.scrollY;

        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            if (currentScrollY > 50) {
                // Scrolled past 50px → hide banner
                setBannerVisible(false);
            } else {
                // Back near top → show banner
                setBannerVisible(true);
            }

            lastScrollY = currentScrollY;
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            {/* Fixed header container */}
            <div
                className="fixed top-0 left-0 right-0 z-40 w-full font-title"
            >
                {/* Top Banner — slides up when hidden */}
                <div
                    ref={bannerRef}
                    className="transition-all duration-300 ease-in-out overflow-hidden"
                    style={{
                        maxHeight: bannerVisible ? '60px' : '0px',
                        opacity: bannerVisible ? 1 : 0,
                    }}
                >
                    <TopBanner />
                </div>

                {/* Header always visible */}
                <Header />
            </div>

            {/* Spacer — adjusts dynamically when banner hides */}
            <div
                className="w-full transition-all duration-300 ease-in-out h-[156px] md:h-[132px]"
                style={{
                    marginTop: bannerVisible ? 0 : `-${bannerHeight}px`,
                }}
            />
        </>
    );
}
