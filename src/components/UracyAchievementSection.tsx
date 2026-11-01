import React, { useState } from 'react';
import {
  CalendarRange,
  Users,
  Sparkles,
  ExternalLink,
  MapPin,
  CheckCircle2,
  Tag,
  ArrowRight,
  MonitorSmartphone,
  Music,
} from 'lucide-react';
import { URACY_EVENTS, GOOGLE_FORM_URL } from '../data/content';

export const UracyAchievementSection: React.FC = () => {
  const [selectedYear, setSelectedYear] = useState<number | 'all'>('all');

  const filteredEvents =
    selectedYear === 'all'
      ? URACY_EVENTS
      : URACY_EVENTS.filter((e) => e.year === selectedYear);

  return (
    <section id="uracy" className="py-20 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold border border-emerald-200">
            <CalendarRange className="w-3.5 h-3.5 text-emerald-600" />
            <span>EVENT PRODUCER & MC TRACK RECORD</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            トークイベント「Uracy」活動実績
          </h2>
          <p className="text-base sm:text-lg text-slate-600">
            「日本の大人を元気に！」をコンセプトに主催するハイブリッドトークイベント。
            リアル会場の熱量とメタバース（cluster等）の没入感を融合させ、2024年以降も数々の満員御礼イベントをプロデュース・司会進行しています。
          </p>

          {/* Year Filter Buttons */}
          <div className="inline-flex p-1 rounded-xl bg-slate-200/80 border border-slate-300 text-xs sm:text-sm font-medium mt-2">
            <button
              onClick={() => setSelectedYear('all')}
              className={`px-3.5 py-1.5 rounded-lg transition-all ${
                selectedYear === 'all'
                  ? 'bg-white text-slate-900 font-bold shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              すべて表示 ({URACY_EVENTS.length})
            </button>
            <button
              onClick={() => setSelectedYear(2026)}
              className={`px-3.5 py-1.5 rounded-lg transition-all ${
                selectedYear === 2026
                  ? 'bg-white text-slate-900 font-bold shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              2026年
            </button>
            <button
              onClick={() => setSelectedYear(2025)}
              className={`px-3.5 py-1.5 rounded-lg transition-all ${
                selectedYear === 2025
                  ? 'bg-white text-slate-900 font-bold shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              2025年
            </button>
            <button
              onClick={() => setSelectedYear(2024)}
              className={`px-3.5 py-1.5 rounded-lg transition-all ${
                selectedYear === 2024
                  ? 'bg-white text-slate-900 font-bold shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              2024年
            </button>
          </div>
        </div>

        {/* Uracy Concept Highlight Card */}
        <div className="mt-12 bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
            <div className="md:col-span-2 space-y-2">
              <span className="text-xs font-bold text-amber-600 uppercase tracking-wider">
                ABOUT URACY
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                なぜ「Uracy」は毎回熱狂を生み、人が集まるのか？
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                ただのセミナーでもなく、一方的な発表会でもない。「大人が夢中になって語り、聴き、つながる場」を創出。
                リアル会場の空気感をそのままメタバース空間（cluster）と同期させ、遠隔地からも一体となって参加できる独自のオペレーション技術と、パパ丸山の臨機応変なMCファシリテーションが特徴です。
              </p>
            </div>
            <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 text-xs space-y-2">
              <div className="font-bold text-slate-800 flex items-center gap-1.5">
                <MonitorSmartphone className="w-4 h-4 text-emerald-600" />
                ハイブリッドイベント対応力
              </div>
              <ul className="text-slate-600 space-y-1.5">
                <li className="flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                  リアル会場とメタバース同時生中継
                </li>
                <li className="flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                  参加者同士が自然に繋がる演出設計
                </li>
                <li className="flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                  急な進行変更にもブレないプロMC
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Events Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {filteredEvents.map((event) => (
            <div
              key={event.id}
              className="bg-white rounded-2xl border border-slate-200/90 shadow-sm hover:shadow-md hover:border-amber-300 transition-all flex flex-col justify-between overflow-hidden group"
            >
              <div className="p-6 space-y-4 flex-1">
                {/* Year & Format Badges */}
                <div className="flex items-center justify-between gap-2">
                  <span className="text-xs font-black text-slate-900 bg-slate-100 px-2.5 py-1 rounded-md">
                    {event.date}
                  </span>
                  <span className="text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-200">
                    {event.format}
                  </span>
                </div>

                {/* Event Title */}
                <div>
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-amber-600 transition-colors leading-snug">
                    {event.title}
                  </h3>
                  <p className="text-xs font-medium text-slate-500 mt-1">
                    {event.subtitle}
                  </p>
                </div>

                {/* Description */}
                <p className="text-xs text-slate-600 leading-relaxed">
                  {event.description}
                </p>

                {/* Highlights */}
                <div className="pt-2 border-t border-slate-100 space-y-1.5">
                  <div className="text-[11px] font-bold text-slate-400">実績ポイント</div>
                  {event.highlights.map((hl, hlIdx) => (
                    <div
                      key={hlIdx}
                      className="text-xs text-slate-700 flex items-start gap-1.5"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{hl}</span>
                    </div>
                  ))}
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {event.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-[10px] text-slate-500 bg-slate-100 px-2 py-0.5 rounded-full"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Card Footer */}
              <div className="p-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-xs">
                <span className="text-slate-500 font-medium">主催 / プロデュース / MC</span>
                <span className="font-bold text-amber-600">パパ丸山</span>
              </div>
            </div>
          ))}
        </div>

        {/* CTA for Event organizers */}
        <div className="mt-14 bg-gradient-to-r from-emerald-900 to-slate-900 text-white rounded-3xl p-6 sm:p-10 shadow-xl flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="space-y-3 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-bold border border-emerald-500/30">
              <Sparkles className="w-3.5 h-3.5" />
              <span>イベント企画・司会MCのご依頼受付中</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold leading-tight">
              「盛り上がるイベントを作りたい」「司会を任せたい」
              <br />
              企画構想段階からのご相談も歓迎です
            </h3>
            <p className="text-sm text-slate-300 max-w-2xl">
              企業の周年イベント、新製品発表会、ファンミーティング、コミュニティサミットなど。
              リアル・オンライン・メタバースを問わず、登壇者と参加者が一体となる空間をプロデュースします。
            </p>
          </div>
          <div className="shrink-0">
            <a
              href={GOOGLE_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-sm sm:text-base shadow-lg transition-transform hover:-translate-y-0.5"
            >
              <span>イベント・MCを相談する</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
