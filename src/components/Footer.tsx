import React from 'react';
import { Sparkles, ArrowUp, ArrowUpRight } from 'lucide-react';
import { GOOGLE_FORM_URL } from '../data/content';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          {/* Brand Info */}
          <div className="md:col-span-6 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-amber-500 to-amber-600 flex items-center justify-center text-white font-extrabold text-lg shadow-sm">
                丸
              </div>
              <div>
                <span className="text-xl font-extrabold text-white tracking-tight">
                  パパ丸山
                </span>
                <span className="text-xs text-amber-400 font-semibold ml-2">
                  公式ポートフォリオサイト
                </span>
              </div>
            </div>

            <p className="text-sm text-slate-400 max-w-md leading-relaxed">
              日本の大人を学び直しと発信で元気に。
              Voicy 10周年（3,600回無休毎日配信）の実践知と、コンタクトセンター系SEの論理的提案力で、講演・Podcast制作・イベント企画・プレゼン研修を全力支援いたします。
            </p>

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-800 border border-slate-700 text-xs text-amber-300">
              <Sparkles className="w-3.5 h-3.5" />
              <span>2026年11月 Voicy毎日配信10周年（1期生）</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-sm font-bold text-white tracking-wider">
              メニュー
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#services" className="hover:text-amber-400 transition-colors">
                  提供サービス一覧
                </a>
              </li>
              <li>
                <a href="#voicy" className="hover:text-amber-400 transition-colors">
                  Voicy 10周年活動実績
                </a>
              </li>
              <li>
                <a href="#uracy" className="hover:text-amber-400 transition-colors">
                  Uracy イベント実績
                </a>
              </li>
              <li>
                <a href="#profile" className="hover:text-amber-400 transition-colors">
                  プロフィール・経歴
                </a>
              </li>
              <li>
                <a href="#flow" className="hover:text-amber-400 transition-colors">
                  ご相談・ご依頼の流れ
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-amber-400 transition-colors">
                  よくある質問
                </a>
              </li>
            </ul>
          </div>

          {/* Contact & External */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-sm font-bold text-white tracking-wider">
              お仕事のご相談
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              企業研修・講演・番組プロデュース等、お見積りやご相談はGoogleフォームより受け付けております。
            </p>
            <a
              href={GOOGLE_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold text-xs shadow-md transition-colors"
            >
              <span>お問い合わせフォームへ</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            &copy; {new Date().getFullYear()} パパ丸山 (Papa Maruyama). All Rights Reserved.
          </div>
          <button
            type="button"
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-slate-400 hover:text-white transition-colors"
          >
            <span>ページトップへ戻る</span>
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
};
