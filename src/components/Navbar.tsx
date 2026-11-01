import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Sparkles } from 'lucide-react';
import { GOOGLE_FORM_URL } from '../data/content';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'サービス一覧', href: '#services' },
    { name: 'Voicy 10周年実績', href: '#voicy' },
    { name: 'Uracy実績', href: '#uracy' },
    { name: 'プロフィール', href: '#profile' },
    { name: 'ご依頼の流れ', href: '#flow' },
    { name: 'よくある質問', href: '#faq' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/90 backdrop-blur-md shadow-sm border-b border-slate-200/80 py-3'
          : 'bg-white/70 backdrop-blur-sm py-4 border-b border-slate-100'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#"
            className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-amber-500 rounded-lg p-1"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-amber-500 to-amber-600 flex items-center justify-center text-white font-bold text-lg shadow-sm shadow-amber-500/20 group-hover:scale-105 transition-transform">
              丸
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-extrabold text-lg sm:text-xl text-slate-900 tracking-tight">
                  パパ丸山
                </span>
                <span className="hidden sm:inline-flex items-center gap-1 text-[11px] font-semibold bg-amber-100 text-amber-800 px-2 py-0.5 rounded-full border border-amber-200">
                  <Sparkles className="w-3 h-3 text-amber-600" />
                  Voicy10周年
                </span>
              </div>
              <p className="text-[11px] text-slate-500 hidden sm:block">
                音声発信・講演・イベント企画・プレゼン研修
              </p>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3 py-2 text-sm font-medium text-slate-700 hover:text-amber-600 hover:bg-amber-50/80 rounded-lg transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Action */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={GOOGLE_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 text-white font-semibold text-sm shadow-md shadow-amber-500/20 hover:from-amber-600 hover:to-amber-700 hover:shadow-lg hover:shadow-amber-500/30 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <span>無料相談・お見積り</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center gap-2">
            <a
              href={GOOGLE_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="sm:hidden px-3 py-1.5 rounded-lg bg-amber-500 text-white text-xs font-semibold shadow-sm"
            >
              相談する
            </a>
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-amber-500"
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="lg:hidden bg-white/98 backdrop-blur-xl border-b border-slate-200 px-4 pt-3 pb-6 shadow-xl transition-all">
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="px-4 py-3 rounded-lg text-base font-medium text-slate-700 hover:bg-amber-50 hover:text-amber-600 transition-colors"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-4 border-t border-slate-100 flex flex-col gap-2">
              <a
                href={GOOGLE_FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-amber-500 hover:bg-amber-600 text-white font-semibold text-center shadow-md transition-all"
              >
                <span>無料相談・お見積りフォームへ</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
              <p className="text-center text-xs text-slate-400 mt-1">
                Googleフォームにて24時間受付中
              </p>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
