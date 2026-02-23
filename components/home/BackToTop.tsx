'use client';

import React from 'react';
import { ChevronUp } from 'lucide-react';
import { ArrowTopLeftIcon } from '@radix-ui/react-icons';

export default function BackToTop() {
  const scrollToTop = () =>
    window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <div className="flex justify-center py-10 bg-white">
      <button
        onClick={scrollToTop}
        aria-label="Retour en haut de page"
        className="
          inline-flex items-center gap-2
          bg-[#FB8500] hover:bg-[#FB8500]
          text-white font-semibold
          px-6 py-3
          rounded-full
          shadow-md hover:shadow-lg
          transition-all duration-300
          active:scale-95
        "
      >
        <ArrowTopLeftIcon className="w-4 h-4 transition-transform duration-300 group-hover:-translate-y-1" strokeWidth={2.5} />
        <span>Haut de page</span>
      </button>
    </div>
  );
}