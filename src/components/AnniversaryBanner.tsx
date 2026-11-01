import React from 'react';
import { Sparkles, Calendar, Mic, Award, Flame, HeartHandshake, CheckCircle2 } from 'lucide-react';
import { GOOGLE_FORM_URL } from '../data/content';

export const AnniversaryBanner: React.FC = () => {
  return (
    <section id="anniversary" className="py-12 bg-gradient-to-r from-amber-600 via-orange-600 to-amber-700 text-white relative overflow-hidden">
      {/* Decorative background glows */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-white/10 rounded-full blur-2xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-black/10 rounded-full blur-2xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-white/10 backdrop-blur-md rounded-3xl p-6 sm:p-8 lg:p-10 border border-white/20 shadow-2xl">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="space-y-4 text-center lg:text-left max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 border border-white/30 text-xs sm:text-sm font-bold text-amber-100">
                <Sparkles className="w-4 h-4 text-amber-200" />
                <span>2016年11月スタート 〜 2026年11月</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight leading-tight">
                祝・Voicy毎日配信 <span className="underline decoration-amber-300 decoration-wavy">10周年</span> 達成！
                <br />
                <span className="text-amber-200">1日も休まず3,600回以上の連続発信</span>
              </h2>
              <p className="text-sm sm:text-base text-amber-100/90 leading-relaxed">
                Voicy第1期生としてチャンネル「ITパパニュース【日本の大人を学び直しで元気に】」を開始して以来、病気の日も台風の日も出張の日も欠かさずマイクに向かい続けました。
                この「圧倒的な継続力」「人を惹きつけるトーク構造」「日々の学びを即実践に落とし込む姿勢」が、私の全ての提供サービスの土台となっています。
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2 text-center">
                <div className="bg-black/20 rounded-xl p-3 border border-white/10">
                  <div className="text-xs text-amber-200 font-semibold">開始時期</div>
                  <div className="text-lg font-black mt-0.5">2016年11月</div>
                  <div className="text-[10px] text-white/70">Voicy第1期生</div>
                </div>
                <div className="bg-black/20 rounded-xl p-3 border border-white/10">
                  <div className="text-xs text-amber-200 font-semibold">連続配信日数</div>
                  <div className="text-lg font-black mt-0.5">3,600日超</div>
                  <div className="text-[10px] text-white/70">無休・皆勤記録</div>
                </div>
                <div className="bg-black/20 rounded-xl p-3 border border-white/10">
                  <div className="text-xs text-amber-200 font-semibold">放送エピソード</div>
                  <div className="text-lg font-black mt-0.5">4,444回</div>
                  <div className="text-[10px] text-white/70">リスキリング・IT</div>
                </div>
                <div className="bg-black/20 rounded-xl p-3 border border-white/10">
                  <div className="text-xs text-amber-200 font-semibold">リスナーコミュニティ</div>
                  <div className="text-lg font-black mt-0.5">熱狂的ファン</div>
                  <div className="text-[10px] text-white/70">オフ会・フェス連動</div>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row lg:flex-col gap-3 w-full lg:w-auto shrink-0">
              <a
                href={GOOGLE_FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white text-slate-900 font-bold text-sm sm:text-base hover:bg-amber-100 transition shadow-lg text-center"
              >
                <span>登壇・制作を相談</span>
              </a>
              <a
                href="#voicy"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white/15 hover:bg-white/25 border border-white/30 text-white font-semibold text-sm sm:text-base transition text-center"
              >
                <span>Voicy実績の詳細を見る</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
