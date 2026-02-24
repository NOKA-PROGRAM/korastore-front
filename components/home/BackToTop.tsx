'use client';

import React from 'react';
import { ChevronUp } from 'lucide-react';

export default function BackToTop() {
  const scrollToTop = () =>
    window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <div className="flex justify-center py-6 bg-white">
      <button
        onClick={scrollToTop}
        aria-label="Retour en haut de page"
        className="
          flex flex-col items-center justify-center
          bg-[#FB8500]
          hover:bg-[#f77f00]
          text-white
          px-8
          py-2.5
          rounded
          transition-colors duration-200
          leading-none
        "
      >
        <ChevronUp size={14} strokeWidth={3} />
        <span className="text-[10px] font-bold uppercase leading-none">
          HAUT DE PAGE
        </span>
      </button>
    </div>
  );
}