import React from 'react';
import {
  Award,
  BookOpen,
  Briefcase,
  Flame,
  Radio,
  Sparkles,
  CheckCircle2,
  Quote,
  ArrowRight,
} from 'lucide-react';
import { USER_THUMBNAIL_URL, PROFILE_DATA, GOOGLE_FORM_URL } from '../data/content';

export const ProfileSection: React.FC = () => {
  return (
    <section id="profile" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-slate-800 text-xs font-bold border border-slate-200">
            <Briefcase className="w-3.5 h-3.5 text-amber-600" />
            <span>PROFILE & PHILOSOPHY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            プロフィール・活動の歩み
          </h2>
          <p className="text-base sm:text-lg text-slate-600">
            ナレーター × コンタクトセンター系SE × 音声配信10年。
            異色の掛け合わせが実現する、唯一無二の伴走力。
          </p>
        </div>

        {/* Profile Card Container */}
        <div className="mt-14 bg-slate-50 rounded-3xl border border-slate-200 p-6 sm:p-10 lg:p-12 shadow-xs">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Left: Image & Quick Stats */}
            <div className="lg:col-span-5 space-y-6">
              <div className="relative rounded-2xl overflow-hidden shadow-lg border-2 border-white bg-slate-900 group">
                <img
                  src={USER_THUMBNAIL_URL}
                  alt="パパ丸山"
                  className="w-full aspect-square object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <div className="text-2xl font-black">{PROFILE_DATA.name}</div>
                  <div className="text-xs text-amber-300 font-semibold mt-0.5">
                    {PROFILE_DATA.carrier}
                  </div>
                </div>
              </div>

              {/* Awards Card */}
              <div className="bg-white rounded-2xl p-5 border border-slate-200/90 shadow-2xs space-y-3">
                <div className="flex items-center gap-2 text-xs font-bold text-amber-700">
                  <Award className="w-4 h-4 text-amber-600" />
                  <span>受賞・記録・メディア実績</span>
                </div>
                <ul className="space-y-2 text-xs text-slate-700">
                  {PROFILE_DATA.awards.map((award, aIdx) => (
                    <li key={aIdx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-0.5" />
                      <span className="font-medium">{award}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right: Bio & Independence Mission */}
            <div className="lg:col-span-7 space-y-6">
              {/* Mission quote */}
              <div className="bg-amber-50/80 border-l-4 border-amber-500 p-5 rounded-r-2xl">
                <div className="flex items-start gap-3">
                  <Quote className="w-6 h-6 text-amber-500 shrink-0 mt-0.5" />
                  <div>
                    <div className="text-xs font-bold text-amber-800 uppercase tracking-wider">
                      MISSION
                    </div>
                    <div className="text-lg sm:text-xl font-black text-slate-900 mt-1">
                      {PROFILE_DATA.mission}
                    </div>
                  </div>
                </div>
              </div>

              {/* Detailed Bio Paragraphs */}
              <div className="space-y-4 text-sm sm:text-base text-slate-700 leading-relaxed">
                {PROFILE_DATA.bio.map((para, pIdx) => (
                  <p key={pIdx}>{para}</p>
                ))}
              </div>

              {/* 3 Core Identity Pillars */}
              <div className="pt-4 border-t border-slate-200 grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="bg-white p-4 rounded-xl border border-slate-200">
                  <div className="text-xs font-bold text-amber-600">01. 声のプロ</div>
                  <div className="text-sm font-bold text-slate-900 mt-1">元ナレーター</div>
                  <p className="text-[11px] text-slate-500 mt-1">
                    惹きつける発声、言葉の間、感情を動かすトーク構成力。
                  </p>
                </div>
                <div className="bg-white p-4 rounded-xl border border-slate-200">
                  <div className="text-xs font-bold text-blue-600">02. 論理のプロ</div>
                  <div className="text-sm font-bold text-slate-900 mt-1">外資/大手SIer SE</div>
                  <p className="text-[11px] text-slate-500 mt-1">
                    大型コンペ提案や要件定義で培った、圧倒的な構造化と説得力。
                  </p>
                </div>
                <div className="bg-white p-4 rounded-xl border border-slate-200">
                  <div className="text-xs font-bold text-emerald-600">03. 継続のプロ</div>
                  <div className="text-sm font-bold text-slate-900 mt-1">10年無休配信</div>
                  <p className="text-[11px] text-slate-500 mt-1">
                    3,600日以上の毎日発信と、熱いコミュニティを育てる人間力。
                  </p>
                </div>
              </div>

              {/* Sole Proprietor Note */}
              <div className="bg-white rounded-2xl p-5 border border-amber-200/80 space-y-2">
                <div className="flex items-center gap-2 text-xs font-bold text-amber-900">
                  <Sparkles className="w-4 h-4 text-amber-600" />
                  <span>個人事業主としての活動開始にあたって</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  これまで培ったすべての経験を活かし、法人・個人を問わず、本気で発信したい・変わりたいと願う方々の伴走者となります。
                  形式的なビジネスにとどまらず、心に火をつけるパートナーとして全力でお応えします。
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
