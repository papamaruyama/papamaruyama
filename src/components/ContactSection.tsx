import React, { useState } from 'react';
import {
  Mail,
  ExternalLink,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Clock,
  Layers,
} from 'lucide-react';
import { GOOGLE_FORM_URL } from '../data/content';

export const ContactSection: React.FC = () => {
  const [showEmbedded, setShowEmbedded] = useState(false);

  // Embedded url format for Google Forms
  const embeddedUrl =
    'https://docs.google.com/forms/d/e/1FAIpQLSehjtS9iaciY6dgUq4jaaxQzU28QlX3WNhN2Zob-rnaPDISdg/viewform?embedded=true';

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-slate-50 to-amber-50/50 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 text-amber-900 text-xs font-bold border border-amber-300">
            <Mail className="w-3.5 h-3.5 text-amber-600" />
            <span>CONTACT & INQUIRY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            お問い合わせ・お仕事のご依頼
          </h2>
          <p className="text-base sm:text-lg text-slate-600">
            講演、Podcast制作、イベント企画・MC、プレゼン研修など、お気軽にご相談ください。
            原則2営業日以内にパパ丸山本人よりご返信いたします。
          </p>
        </div>

        {/* Main Contact Card */}
        <div className="mt-12 bg-white rounded-3xl border border-slate-200/90 shadow-xl overflow-hidden">
          {/* Top banner */}
          <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-amber-950 p-6 sm:p-8 text-white">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <span className="text-xs font-semibold text-amber-400">
                  OFFICIAL CONTACT FORM
                </span>
                <h3 className="text-xl sm:text-2xl font-bold mt-1">
                  パパ丸山 公式ご依頼フォーム
                </h3>
                <p className="text-xs text-slate-300 mt-1">
                  Googleフォームを利用した安全・確実なお問い合わせ窓口です
                </p>
              </div>
              <div className="flex items-center gap-2 text-xs bg-white/10 px-3 py-1.5 rounded-lg border border-white/20">
                <Clock className="w-4 h-4 text-amber-300" />
                <span>2営業日以内に返信</span>
              </div>
            </div>
          </div>

          <div className="p-6 sm:p-10 space-y-8">
            {/* 4 Inquiry categories check pill */}
            <div className="space-y-3">
              <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                主なご相談受付メニュー
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="p-3.5 rounded-xl bg-amber-50/60 border border-amber-200/80 flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                  <div>
                    <div className="text-sm font-bold text-slate-900">講演・セミナー登壇</div>
                    <div className="text-xs text-slate-600">
                      継続力、リスキリング、ITトレンド、キャリア等
                    </div>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-blue-50/60 border border-blue-200/80 flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                  <div>
                    <div className="text-sm font-bold text-slate-900">Podcast・音声番組制作</div>
                    <div className="text-xs text-slate-600">
                      社内ラジオ、採用広報、オウンドメディア等
                    </div>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-emerald-50/60 border border-emerald-200/80 flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <div className="text-sm font-bold text-slate-900">イベント企画・MC運営</div>
                    <div className="text-xs text-slate-600">
                      ハイブリッドイベント、メタバース配信、司会等
                    </div>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-purple-50/60 border border-purple-200/80 flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-purple-600 shrink-0 mt-0.5" />
                  <div>
                    <div className="text-sm font-bold text-slate-900">プレゼン研修・伝え方指導</div>
                    <div className="text-xs text-slate-600">
                      提案プレゼン、話し方、スピーチ個別指導等
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Primary Action Buttons */}
            <div className="text-center space-y-4 pt-4 border-t border-slate-100">
              <a
                href={GOOGLE_FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-amber-500 via-amber-600 to-amber-700 hover:from-amber-600 hover:to-amber-800 text-white font-extrabold text-lg shadow-xl shadow-amber-500/30 transition-all transform hover:-translate-y-0.5"
              >
                <span>Googleフォームでお問い合わせする</span>
                <ExternalLink className="w-5 h-5" />
              </a>

              <div className="flex items-center justify-center gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setShowEmbedded(!showEmbedded)}
                  className="text-xs text-slate-500 hover:text-amber-700 underline font-medium cursor-pointer"
                >
                  {showEmbedded ? '▲ 埋め込みフォームを閉じる' : '▼ このページ内でフォームを表示する'}
                </button>
              </div>

              {/* Embedded Google Form Option */}
              {showEmbedded && (
                <div className="mt-6 border border-slate-200 rounded-2xl overflow-hidden shadow-inner bg-slate-50 p-2">
                  <div className="text-xs text-slate-500 mb-2 font-medium">
                    読み込みに時間がかかる場合は上のボタンから直接開いてください。
                  </div>
                  <iframe
                    src={embeddedUrl}
                    width="100%"
                    height="900"
                    frameBorder="0"
                    marginHeight={0}
                    marginWidth={0}
                    title="お問い合わせフォーム"
                    className="w-full rounded-xl bg-white"
                  >
                    読み込んでいます…
                  </iframe>
                </div>
              )}
            </div>

            {/* Privacy & Trust Assurance */}
            <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>個人情報の厳重な保護・守秘義務を徹底遵守いたします</span>
              </div>
              <div className="text-slate-400">
                24時間受付 / 土日祝もフォーム受信可能
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
