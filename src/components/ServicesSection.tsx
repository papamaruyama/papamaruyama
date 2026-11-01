import React, { useState } from 'react';
import {
  Mic,
  Radio,
  CalendarRange,
  Presentation,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  HelpCircle,
  Building2,
  User,
  Layers,
} from 'lucide-react';
import { SERVICES, GOOGLE_FORM_URL } from '../data/content';

const iconMap: Record<string, React.ElementType> = {
  Mic,
  Radio,
  CalendarRange,
  Presentation,
};

export const ServicesSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'corporate' | 'individual'>('all');
  const [selectedServiceId, setSelectedServiceId] = useState<string | null>(null);

  return (
    <section id="services" className="py-20 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-amber-800 text-xs font-bold tracking-wide">
            <Layers className="w-3.5 h-3.5 text-amber-600" />
            <span>SERVICES & OFFERINGS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            提供サービス・ご依頼メニュー
          </h2>
          <p className="text-base sm:text-lg text-slate-600">
            法人様・個人様問わず、目的に応じて柔軟にカスタマイズ対応いたします。
            「声と発信」を軸に、あなたの挑戦や組織の変革を力強くサポートします。
          </p>

          {/* Quick Audience Filter */}
          <div className="inline-flex p-1 rounded-xl bg-slate-200/80 border border-slate-300/80 text-xs sm:text-sm font-medium">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-4 py-1.5 rounded-lg transition-all ${
                activeTab === 'all'
                  ? 'bg-white text-slate-900 font-bold shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              すべて表示
            </button>
            <button
              onClick={() => setActiveTab('corporate')}
              className={`px-4 py-1.5 rounded-lg transition-all flex items-center gap-1.5 ${
                activeTab === 'corporate'
                  ? 'bg-white text-slate-900 font-bold shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Building2 className="w-3.5 h-3.5 text-amber-600" />
              企業・団体様向け
            </button>
            <button
              onClick={() => setActiveTab('individual')}
              className={`px-4 py-1.5 rounded-lg transition-all flex items-center gap-1.5 ${
                activeTab === 'individual'
                  ? 'bg-white text-slate-900 font-bold shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <User className="w-3.5 h-3.5 text-amber-600" />
              個人・コミュニティ向け
            </button>
          </div>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-14">
          {SERVICES.map((service, index) => {
            const Icon = iconMap[service.iconName] || Mic;
            const isHighlighted = selectedServiceId === service.id;

            return (
              <div
                key={service.id}
                id={service.id}
                onMouseEnter={() => setSelectedServiceId(service.id)}
                className={`relative bg-white rounded-2xl border transition-all duration-300 flex flex-col justify-between overflow-hidden ${
                  isHighlighted
                    ? 'border-amber-400 shadow-xl ring-2 ring-amber-400/20 -translate-y-1'
                    : 'border-slate-200 shadow-sm hover:shadow-md hover:border-slate-300'
                }`}
              >
                {/* Top colored accent bar */}
                <div
                  className={`h-2 w-full ${
                    index === 0
                      ? 'bg-gradient-to-r from-amber-500 to-orange-500'
                      : index === 1
                      ? 'bg-gradient-to-r from-blue-500 to-indigo-500'
                      : index === 2
                      ? 'bg-gradient-to-r from-emerald-500 to-teal-500'
                      : 'bg-gradient-to-r from-purple-500 to-pink-500'
                  }`}
                />

                <div className="p-6 sm:p-8 space-y-6 flex-1">
                  {/* Service Card Header */}
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${
                          index === 0
                            ? 'bg-amber-100 text-amber-700'
                            : index === 1
                            ? 'bg-blue-100 text-blue-700'
                            : index === 2
                            ? 'bg-emerald-100 text-emerald-700'
                            : 'bg-purple-100 text-purple-700'
                        }`}
                      >
                        <Icon className="w-6 h-6" />
                      </div>
                      <div>
                        <span className="text-xs font-semibold text-slate-400 tracking-wider">
                          MENU 0{index + 1}
                        </span>
                        <h3 className="text-xl sm:text-2xl font-bold text-slate-900 leading-tight">
                          {service.title}
                        </h3>
                      </div>
                    </div>
                  </div>

                  {/* Tagline */}
                  <p className="text-sm font-semibold text-amber-800 bg-amber-50/80 px-3 py-2 rounded-lg border border-amber-200/60">
                    {service.tagline}
                  </p>

                  {/* Target Audience */}
                  <div className="text-xs text-slate-600 bg-slate-50 p-3 rounded-lg border border-slate-100">
                    <span className="font-bold text-slate-800">主な対象：</span> {service.target}
                  </div>

                  {/* Core Features */}
                  <div className="space-y-2">
                    <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                      強み・選ばれる理由
                    </h4>
                    <ul className="space-y-2">
                      {service.features.map((feat, fIdx) => (
                        <li key={fIdx} className="flex items-start gap-2 text-sm text-slate-700">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Topics / Examples */}
                  <div className="space-y-2 pt-2 border-t border-slate-100">
                    <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                      主なテーマ例・ご相談実績
                    </h4>
                    <div className="space-y-1.5">
                      {service.topics.map((tpc, tIdx) => (
                        <div
                          key={tIdx}
                          className="text-xs text-slate-600 bg-slate-50/90 hover:bg-slate-100/90 p-2 rounded-md transition-colors"
                        >
                          ・{tpc}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Deliverables */}
                  <div className="space-y-1.5 pt-2 border-t border-slate-100">
                    <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                      提供形態・納品内容
                    </h4>
                    <ul className="text-xs text-slate-600 space-y-1">
                      {service.deliverables.map((d, dIdx) => (
                        <li key={dIdx} className="flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-slate-400" />
                          <span>{d}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Card Bottom CTA */}
                <div className="p-6 bg-slate-50 border-t border-slate-100 mt-auto">
                  <a
                    href={GOOGLE_FORM_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-slate-900 hover:bg-amber-600 text-white font-bold text-sm shadow-sm transition-all duration-200 group"
                  >
                    <span>「{service.title}」について相談する</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                  <p className="text-center text-[11px] text-slate-500 mt-2">
                    ※ 予算や実施形式のご希望をお気軽にお伝えください
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Custom Consultation Box */}
        <div className="mt-12 bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl border border-amber-200 p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center sm:text-left">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-800 bg-white px-2.5 py-1 rounded-md border border-amber-200">
              <Sparkles className="w-3.5 h-3.5 text-amber-600" />
              複数メニューの組み合わせや年間伴走も可能
            </div>
            <h3 className="text-xl font-bold text-slate-900">
              「どのメニューが最適かわからない」という場合もお気軽にご相談ください
            </h3>
            <p className="text-sm text-slate-600">
              「社内イベントで司会とミニ講演をセットにしてほしい」「ポッドキャスト制作と社内プレゼン研修を連動させたい」など、
              柔軟なオーダーメイド設計をいたします。
            </p>
          </div>
          <a
            href={GOOGLE_FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-600 text-white font-bold text-sm shadow-md transition-all whitespace-nowrap"
          >
            無料相談フォームへ進む
          </a>
        </div>
      </div>
    </section>
  );
};
