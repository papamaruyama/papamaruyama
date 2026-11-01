import React, { useState, useEffect } from 'react';
import { Mail, ArrowUpRight, Sparkles } from 'lucide-react';
import { GOOGLE_FORM_URL } from '../data/content';

export const FloatingCta: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show when user scrolls past 350px
      setVisible(window.scrollY > 350);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed bottom-5 right-5 z-40 transition-all duration-300">
      <a
        href={GOOGLE_FORM_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2.5 px-4 sm:px-5 py-3 rounded-full bg-gradient-to-r from-amber-500 to-amber-600 text-white font-bold text-xs sm:text-sm shadow-xl shadow-amber-600/30 hover:from-amber-600 hover:to-amber-700 hover:scale-105 active:scale-95 transition-all border border-amber-300/40"
      >
        <span className="flex h-2 w-2 rounded-full bg-white animate-ping" />
        <Mail className="w-4 h-4" />
        <span>無料相談・お見積り</span>
        <ArrowUpRight className="w-4 h-4" />
      </a>
    </div>
  );
};
