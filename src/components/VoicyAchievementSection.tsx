import React from 'react';
import {
  Radio,
  Flame,
  Award,
  Calendar,
  Sparkles,
  TrendingUp,
  Volume2,
  Users,
  Clock,
  BookOpen,
  CheckCircle2,
  ExternalLink,
} from 'lucide-react';
import { GOOGLE_FORM_URL } from '../data/content';

export const VoicyAchievementSection: React.FC = () => {
  return (
    <section id="voicy" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-50 text-red-700 text-xs font-bold border border-red-200">
            <Radio className="w-3.5 h-3.5 text-red-600 animate-pulse" />
            <span>VOICY OFFICIAL PERSONALITY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Voicy活動実績：2026年11月で毎日配信10周年
          </h2>
          <p className="text-base sm:text-lg text-slate-600">
            「ITパパニュース【日本の大人を学び直しで元気に】」
            <br />
            音声プラットフォームVoicyの創成期（1期生）から、1日も欠かさずマイクに向かい続けた軌跡。
          </p>
        </div>

        {/* 10-Year Milestone Showcase Hero Card */}
        <div className="mt-12 bg-gradient-to-br from-amber-500 via-orange-500 to-amber-600 rounded-3xl p-6 sm:p-10 text-white shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-white/10 rounded-full blur-2xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 text-xs font-bold">
                <Sparkles className="w-3.5 h-3.5 text-amber-200" />
                <span>2016.11 〜 2026.11【10th Anniversary】</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-black leading-tight">
                「1日も休まない」が証明する、
                <br />
                圧倒的な信頼性とコミットメント力。
              </h3>
              <p className="text-sm sm:text-base text-amber-100 leading-relaxed">
                体調不良の日も、海外出張の日も、子育ての奮闘期も。10年間、3,600日以上にわたり毎日配信を継続してきました。
                単なるルーティンではなく、「今日を生きる大人たちへ、前を向くきっかけを届ける」という強い信念があるからこそ成し得た記録です。
              </p>
              <div className="pt-2 flex flex-wrap gap-2 text-xs font-semibold">
                <span className="bg-black/20 px-3 py-1.5 rounded-lg border border-white/20">
                  🎙️ Voicy第1期生公式パーソナリティ
                </span>
                <span className="bg-black/20 px-3 py-1.5 rounded-lg border border-white/20">
                  🏆 Voicyファンフェスタ登壇
                </span>
                <span className="bg-black/20 px-3 py-1.5 rounded-lg border border-white/20">
                  📻 TBSラジオ「べしゃり王」準優勝
                </span>
                <span className="bg-black/20 px-3 py-1.5 rounded-lg border border-white/20">
                  📚 Kindle『音声発信子育て』11冠
                </span>
              </div>
            </div>

            {/* Big Metrics Grid */}
            <div className="lg:col-span-5 grid grid-cols-2 gap-3.5">
              <div className="bg-white/15 backdrop-blur-md rounded-2xl p-4.5 border border-white/20 text-center">
                <div className="text-xs text-amber-200 font-bold">連続配信日数</div>
                <div className="text-3xl sm:text-4xl font-black mt-1">3,600+</div>
                <div className="text-[11px] text-white/80 mt-1">1日も休まず無休記録</div>
              </div>
              <div className="bg-white/15 backdrop-blur-md rounded-2xl p-4.5 border border-white/20 text-center">
                <div className="text-xs text-amber-200 font-bold">放送エピソード数</div>
                <div className="text-3xl sm:text-4xl font-black mt-1">4,444+</div>
                <div className="text-[11px] text-white/80 mt-1">2016年10月13日現在</div>
              </div>
              <div className="bg-white/15 backdrop-blur-md rounded-2xl p-4.5 border border-white/20 text-center">
                <div className="text-xs text-amber-200 font-bold">パーソナリティ歴</div>
                <div className="text-3xl sm:text-4xl font-black mt-1">10年</div>
                <div className="text-[11px] text-white/80 mt-1">音声業界トップクラス</div>
              </div>
              <div className="bg-white/15 backdrop-blur-md rounded-2xl p-4.5 border border-white/20 text-center">
                <div className="text-xs text-amber-200 font-bold">大人の学び直し</div>
                <div className="text-3xl sm:text-4xl font-black mt-1">毎日</div>
                <div className="text-[11px] text-white/80 mt-1">IT・最新トレンド考察</div>
              </div>
            </div>
          </div>
        </div>

        {/* 3 Pillars of Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200/90 hover:border-amber-300 transition-colors">
            <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center mb-4">
              <Clock className="w-5 h-5" />
            </div>
            <h4 className="text-lg font-bold text-slate-900 mb-2">
              ① 継続と習慣化の仕組み
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              「どうすれば三日坊主にならず毎日続けられるのか？」「モチベーションに頼らず行動を習慣化する設計とは？」。
              10年の実証実験から導き出された再現性の高い継続メソッドを発信。
            </p>
          </div>

          <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200/90 hover:border-amber-300 transition-colors">
            <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center mb-4">
              <TrendingUp className="w-5 h-5" />
            </div>
            <h4 className="text-lg font-bold text-slate-900 mb-2">
              ② ITトレンド & 大人の学び直し
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              現役コンタクトセンター系SEとしての視点から、AI時代の働き方、リスキリングの実践、業務改善、提案力の磨き方を分かりやすい日常の言葉に翻訳して解説。
            </p>
          </div>

          <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200/90 hover:border-amber-300 transition-colors">
            <div className="w-10 h-10 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center mb-4">
              <Users className="w-5 h-5" />
            </div>
            <h4 className="text-lg font-bold text-slate-900 mb-2">
              ③ コミュニティ & 人間味
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              家族（長女ボイ美、次女シー子）との掛け合いや子育てエピソード、趣味のキャンプやアクアリウム。完璧すぎない等身大の人間味が、長年愛される深いリスナーエンゲージメントの源泉です。
            </p>
          </div>
        </div>

        {/* Why this matters to corporate / individual clients */}
        <div className="mt-12 bg-slate-900 text-white rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-amber-400">
              <Award className="w-4 h-4" />
              <span>講演・研修・Podcast制作をご検討の皆様へ</span>
            </div>
            <h4 className="text-xl font-bold">
              「10年間毎日話すプロ」だからこそ提供できる安心感と質
            </h4>
            <p className="text-xs sm:text-sm text-slate-300 max-w-2xl">
              アドリブへの対応力、話の論理的組み立て、相手の興味を引きつける声の抑揚。机上の空論ではなく、毎日数千人のリスナーに向き合ってきた実践者だからこそ、心に響く研修や番組づくりをお約束します。
            </p>
          </div>
          <a
            href={GOOGLE_FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-600 text-slate-950 font-black text-sm transition-all shadow-md"
          >
            ご相談はこちら（Googleフォーム）
          </a>
        </div>
      </div>
    </section>
  );
};
