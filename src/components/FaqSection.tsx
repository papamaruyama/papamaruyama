import React, { useState } from 'react';
import { HelpCircle, ChevronDown, Sparkles } from 'lucide-react';
import { GOOGLE_FORM_URL } from '../data/content';

interface FaqItem {
  question: string;
  answer: string;
  category: 'lecture' | 'podcast' | 'event' | 'general';
}

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs: FaqItem[] = [
    {
      category: 'general',
      question: '個人事業主としての契約や請求書発行・領収書の発行は可能ですか？',
      answer:
        'はい、可能です。個人事業主としての正式なご契約書・請求書・領収書の発行に対応しております。法人様の支払いサイトや社内稟議に必要な見積書・提案資料の作成もお気軽にご相談ください。',
    },
    {
      category: 'lecture',
      question: '講演・セミナーはオンラインとリアル現地のどちらでも可能ですか？全国出張はできますか？',
      answer:
        'はい、全国出張での現地登壇・オンライン配信（Zoom、Teams、YouTube Live等）のどちらも対応可能です。また、リアル会場とメタバースやオンラインを融合させたハイブリッド登壇も得意分野としております。交通費・宿泊費の実費等も含めて柔軟にお見積りいたします。',
    },
    {
      category: 'podcast',
      question: 'Podcastや音声番組を始めたいのですが、機材も知識も全くありません。大丈夫でしょうか？',
      answer:
        '全く問題ございません！コンセプトの立案から、手軽に始められるマイク機材の選定、収録時の話し方・台本テンプレート、編集やSpotify・Apple Podcasts・Voicyへの配信設定まで、ワンストップで伴走サポートいたします。ご希望に応じてパパ丸山が聞き手や相方として収録に参加することも可能です。',
    },
    {
      category: 'event',
      question: 'イベントの「司会MCのみ」や「企画構成からのトータルプロデュース」など、部分的な依頼はできますか？',
      answer:
        'はい、柔軟に対応可能です。「当日の司会進行（MC）のみお願いしたい」「企画やタイムテーブル設計、登壇者ブッキングから相談したい」「メタバース（cluster）との同時中継をやってみたい」など、必要なフェーズに合わせてサポートいたします。',
    },
    {
      category: 'general',
      question: '企業だけでなく、個人の発信者や起業家からの相談も受け付けていますか？',
      answer:
        'もちろん大歓迎です！個人向けの音声発信ブランディング相談、スピーチ・プレゼンの個別指導、イベント立ち上げのメンタリングなど、個人の熱い挑戦も全力で応援いたします。',
    },
    {
      category: 'general',
      question: 'ご予算や費用の目安はどのくらいですか？',
      answer:
        '企画の規模、準備期間、拘束時間、納品物の内容に応じて個別にお見積もりをご案内しております。ご予算に合わせたプログラムのアレンジ（例：講演時間を調整する、テンプレートを活用して制作工数を抑える等）も柔軟に承っておりますので、まずはご予算感とあわせてお気軽にお問い合わせください。',
    },
  ];

  return (
    <section id="faq" className="py-20 bg-white relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-slate-800 text-xs font-bold border border-slate-200">
            <HelpCircle className="w-3.5 h-3.5 text-amber-600" />
            <span>FAQ & ANSWERS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            よくあるご質問
          </h2>
          <p className="text-base text-slate-600">
            ご検討中のお客様からいただくことの多い質問と回答をまとめました。
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="mt-12 space-y-3.5">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? 'border-amber-300 bg-amber-50/20 shadow-xs'
                    : 'border-slate-200 hover:border-slate-300 bg-white'
                }`}
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full text-left p-5 sm:p-6 flex items-start justify-between gap-4 focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-start gap-3">
                    <span className="text-base font-black text-amber-600 shrink-0 mt-0.5">
                      Q.
                    </span>
                    <span className="font-bold text-slate-900 text-base sm:text-lg leading-snug">
                      {faq.question}
                    </span>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-200 mt-1 ${
                      isOpen ? 'rotate-180 text-amber-600' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-0 text-slate-700 text-sm sm:text-base leading-relaxed border-t border-amber-100/60 mt-1">
                    <div className="flex items-start gap-3 pt-3">
                      <span className="text-base font-black text-slate-400 shrink-0 mt-0.5">
                        A.
                      </span>
                      <p>{faq.answer}</p>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Not Found Note */}
        <div className="mt-10 text-center">
          <p className="text-sm text-slate-500">
            上記にないご質問や、具体的な条件でのご相談は、
            <a
              href={GOOGLE_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-amber-600 hover:text-amber-700 font-bold underline ml-1"
            >
              お問い合わせフォーム
            </a>
            よりお気軽にお寄せください。
          </p>
        </div>
      </div>
    </section>
  );
};
