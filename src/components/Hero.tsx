import React from 'react';
import {
  Mic,
  Radio,
  CalendarRange,
  Presentation,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  Award,
  ExternalLink,
} from 'lucide-react';
import { USER_THUMBNAIL_URL, GOOGLE_FORM_URL } from '../data/content';

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden bg-gradient-to-b from-amber-50/60 via-white to-slate-50">
      {/* Background ambient decorative shapes */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-24 right-4 w-96 h-96 bg-amber-200/40 rounded-full blur-3xl" />
        <div className="absolute top-1/2 -left-24 w-80 h-80 bg-orange-200/30 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Copy & CTAs */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* 10th Anniversary badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-300 text-amber-900 text-xs sm:text-sm font-bold shadow-xs">
              <span className="flex h-2 w-2 rounded-full bg-amber-500 animate-pulse" />
              <Sparkles className="w-4 h-4 text-amber-600" />
              <span>祝・2026年11月【Voicy毎日配信10周年】達成！</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-3">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 leading-[1.2] tracking-tight">
                「声」と「熱量」で、
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 via-orange-600 to-amber-700">
                  日本の大人を元気に。
                </span>
              </h1>
              <p className="text-base sm:text-lg text-slate-600 font-medium leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Voicy1期生・10年間無休毎日配信の実践知と、大手・外資系SIerプリセールスSEの論理的提案力を融合。
                講演・Podcast制作・ハイブリッドイベント企画・プレゼン研修を通じ、組織と個人の発信を伴走支援します。
              </p>
            </div>

            {/* 4 Core Specializations Pills */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-1">
              {[
                { icon: Mic, label: '講演・セミナー', href: '#lecture' },
                { icon: Radio, label: 'Podcast制作', href: '#podcast' },
                { icon: CalendarRange, label: 'イベント・MC', href: '#event' },
                { icon: Presentation, label: 'プレゼン研修', href: '#presentation' },
              ].map((item, idx) => {
                const Icon = item.icon;
                return (
                  <a
                    key={idx}
                    href={item.href}
                    className="flex flex-col sm:flex-row items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-white border border-slate-200/90 shadow-2xs hover:border-amber-400 hover:shadow-xs transition-all text-slate-700 hover:text-amber-700 group text-center sm:text-left"
                  >
                    <Icon className="w-4 h-4 text-amber-600 group-hover:scale-110 transition-transform" />
                    <span className="text-xs font-semibold">{item.label}</span>
                  </a>
                );
              })}
            </div>

            {/* Action buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4">
              <a
                href={GOOGLE_FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl bg-gradient-to-r from-amber-500 via-amber-600 to-amber-700 text-white font-bold text-base shadow-lg shadow-amber-500/25 hover:from-amber-600 hover:to-amber-800 hover:shadow-xl hover:shadow-amber-500/35 transition-all transform hover:-translate-y-0.5"
              >
                <span>講演・制作・研修のご相談はこちら</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#services"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white text-slate-700 font-semibold text-base border border-slate-300 hover:bg-slate-50 hover:text-slate-900 transition-colors shadow-2xs"
              >
                <span>提供サービス詳細を見る</span>
              </a>
            </div>

            {/* Quick Trust Highlights */}
            <div className="pt-3 border-t border-slate-200/70 flex flex-wrap items-center justify-center lg:justify-start gap-x-6 gap-y-2 text-xs font-medium text-slate-600">
              <span className="inline-flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                法人・個人いずれもご相談歓迎
              </span>
              <span className="inline-flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                オンライン・全国出張対応可
              </span>
              <span className="inline-flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                予算・規模に合わせた柔軟な提案
              </span>
            </div>
          </div>

          {/* Right Column: Visual Card featuring User Thumbnail */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md">
              {/* Outer Glow */}
              <div className="absolute -inset-1.5 bg-gradient-to-tr from-amber-400 to-orange-500 rounded-3xl blur-md opacity-30 group-hover:opacity-60 transition duration-1000"></div>

              {/* Card Container */}
              <div className="relative bg-white rounded-2xl border border-slate-200/90 shadow-xl overflow-hidden">
                {/* Image Header with Thumbnail */}
                <div className="relative aspect-4/3 overflow-hidden bg-slate-900">
                  <img
                    src={USER_THUMBNAIL_URL}
                    alt="パパ丸山 プロフィールサムネイル"
                    className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-500"
                    loading="eager"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />
                  
                  {/* Overlay Badges */}
                  <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-slate-900 text-xs font-bold flex items-center gap-1.5 shadow-sm">
                    <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                    Voicy 1期生
                  </div>

                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <div className="flex items-center gap-2">
                      <span className="text-xl sm:text-2xl font-extrabold tracking-tight">パパ丸山</span>
                      <span className="text-xs bg-amber-500 text-slate-950 font-black px-2 py-0.5 rounded">公式</span>
                    </div>
                    <p className="text-xs text-slate-200 mt-0.5">
                      ITプリセールスSE × 音声配信者 × トークイベント「Uracy」主催
                    </p>
                  </div>
                </div>

                {/* Card Content with Stat Highlights */}
                <div className="p-5 sm:p-6 space-y-4 bg-white">
                  <div className="grid grid-cols-2 gap-3 text-center">
                    <div className="p-3 rounded-xl bg-amber-50 border border-amber-100/80">
                      <div className="text-2xl sm:text-3xl font-black text-amber-600">
                        10<span className="text-sm font-bold text-amber-700">周年</span>
                      </div>
                      <div className="text-[11px] font-semibold text-slate-600 mt-0.5">
                        Voicy毎日配信（2026年11月）
                      </div>
                    </div>
                    <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/80">
                      <div className="text-2xl sm:text-3xl font-black text-slate-800">
                        4444<span className="text-sm font-bold text-slate-600">回</span>
                      </div>
                      <div className="text-[11px] font-semibold text-slate-600 mt-0.5">
                        2016年10月13日現在
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2 text-xs text-slate-600 border-t border-slate-100 pt-3">
                    <div className="flex items-center justify-between py-1">
                      <span className="text-slate-500">トークイベント</span>
                      <span className="font-bold text-slate-800">Uracy（リアル＆メタバース）</span>
                    </div>
                    <div className="flex items-center justify-between py-1">
                      <span className="text-slate-500">ラジオコンテスト</span>
                      <span className="font-bold text-slate-800">TBSラジオ「べしゃり王」準優勝</span>
                    </div>
                    <div className="flex items-center justify-between py-1">
                      <span className="text-slate-500">著書</span>
                      <span className="font-bold text-slate-800">Kindle『音声発信子育て』11冠</span>
                    </div>
                  </div>

                  <a
                    href="#profile"
                    className="w-full flex items-center justify-center gap-1.5 text-xs font-semibold text-amber-700 hover:text-amber-800 bg-amber-50/70 hover:bg-amber-100/70 py-2.5 rounded-lg transition-colors"
                  >
                    <span>詳しい経歴・ストーリーはこちら</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
