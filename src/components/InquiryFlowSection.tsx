import React from 'react';
import {
  FileText,
  MessageSquare,
  FileCheck,
  Rocket,
  HeartHandshake,
  ArrowRight,
  Clock,
  Sparkles,
} from 'lucide-react';
import { GOOGLE_FORM_URL } from '../data/content';

export const InquiryFlowSection: React.FC = () => {
  const steps = [
    {
      step: 'STEP 01',
      title: 'お問い合わせ・ご相談',
      timeframe: '当日〜2営業日以内に返信',
      icon: FileText,
      description:
        '専用のGoogleフォームより、ご希望のメニュー（講演、Podcast制作、イベント、プレゼン研修）や大まかなご要望をお知らせください。構想段階でも歓迎です。',
    },
    {
      step: 'STEP 02',
      title: '初回オンラインヒアリング（無料）',
      timeframe: '約30〜45分（Zoom / Meet）',
      icon: MessageSquare,
      description:
        '背景や狙い、想定参加者・ターゲット、ご希望の時期やご予算感などを丁寧にお伺いします。疑問や不安な点もお気軽にご質問いただけます。',
    },
    {
      step: 'STEP 03',
      title: '企画・構成案とお見積りのご提示',
      timeframe: 'ヒアリング後3〜5営業日',
      icon: FileCheck,
      description:
        'ヒアリング内容をもとに、最も効果的なプログラム設計・テーマ案・制作スケジュール・お見積りをオーダーメイドでご提案いたします。',
    },
    {
      step: 'STEP 04',
      title: '準備・リハーサル・制作進行',
      timeframe: '本番または公開に向けて',
      icon: Rocket,
      description:
        '講演資料のすり合わせ、イベントのタイムテーブル・進行台本チェック、Podcastの企画収録準備など、入念な連携を行い万全の体制を整えます。',
    },
    {
      step: 'STEP 05',
      title: '本番実施・納品・フォローアップ',
      timeframe: '実施後も手厚くサポート',
      icon: HeartHandshake,
      description:
        '講演やイベント司会の本番登壇、あるいは完成音声ファイルの納品を実施。事後アンケートのフィードバックや継続的な発信アドバイスも行います。',
    },
  ];

  return (
    <section id="flow" className="py-20 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-bold border border-blue-200">
            <Clock className="w-3.5 h-3.5 text-blue-600" />
            <span>FLOW & CONSULTATION</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            ご相談から実施・納品までの流れ
          </h2>
          <p className="text-base sm:text-lg text-slate-600">
            初めてのご依頼でも安心して進められるよう、ステップごとに透明性を持って伴走いたします。
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mt-14">
          {steps.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl border border-slate-200 p-6 flex flex-col justify-between shadow-2xs hover:shadow-md hover:border-amber-300 transition-all relative group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-black text-amber-600 bg-amber-50 px-2.5 py-1 rounded-md border border-amber-200/60">
                      {item.step}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-slate-100 text-slate-700 flex items-center justify-center group-hover:bg-amber-500 group-hover:text-white transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-base font-bold text-slate-900 mb-1 leading-snug">
                    {item.title}
                  </h3>

                  <div className="text-[11px] font-semibold text-slate-400 mb-3">
                    目安：{item.timeframe}
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner */}
        <div className="mt-12 bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xs">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="text-base font-bold text-slate-900">
              まだ日程や内容が具体的に決まっていなくても大丈夫です
            </h4>
            <p className="text-xs sm:text-sm text-slate-500">
              「社内ラジオに興味があるが何から始めればいいか」「社員のプレゼン力を底上げしたい」など、お気軽にお話しください。
            </p>
          </div>
          <a
            href={GOOGLE_FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-600 text-white font-bold text-sm shadow-md transition-all"
          >
            <span>まずはフォームから相談する</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};
