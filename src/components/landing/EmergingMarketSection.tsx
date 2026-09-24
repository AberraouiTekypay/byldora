import React from 'react';
import { 
  FileSpreadsheet, 
  FileText, 
  Mail, 
  MessageSquare, 
  ArrowRight,
  Zap
} from 'lucide-react';
import Link from 'next/link';

const CHANNELS = [
  {
    name: 'WhatsApp',
    headline: 'Instant mobile quotes & attachments',
    desc: 'Local trade suppliers can reply directly with pictures of signed quotations or voice notes. BYLDORA extracts line-item totals instantly.',
    icon: MessageSquare,
    badge: 'Preferred by Regional Trades',
  },
  {
    name: 'Excel',
    headline: 'Native spreadsheet round-tripping',
    desc: 'Vendors can download the package bill schedule, populate their unit rates offline, and return their sheet without breaking formulas.',
    icon: FileSpreadsheet,
    badge: 'Offline Flexibility',
  },
  {
    name: 'PDF',
    headline: 'OCR quote extraction',
    desc: 'Scanned commercial letters and formal PDF price sheets are ingested, parsed into tabular rates, and verified against scope requirements.',
    icon: FileText,
    badge: 'Enterprise Standard',
  },
  {
    name: 'Email',
    headline: 'Direct tender inbox parsing',
    desc: 'Suppliers simply hit reply to the automated RFQ invitation. Attachments and message text are captured into the tender audit room.',
    icon: Mail,
    badge: 'Zero Onboarding Required',
  },
];

export default function EmergingMarketSection() {
  return (
    <section className="bg-white py-20 lg:py-28 border-b border-[#E2E8F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-[6px] bg-sky-50 border border-sky-200 text-xs font-semibold text-[#0EA5E9] tracking-wide mb-3">
            <Zap className="w-3.5 h-3.5" />
            <span>PRAGMATIC ADOPTION</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight leading-tight">
            Emerging-market ready.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#475569] leading-relaxed">
            Construction procurement cannot succeed if suppliers are forced through complex enterprise software logins. 
            BYLDORA adapts to the way trade actually happens across global growth markets.
          </p>
        </div>

        {/* 4 Pragmatic Channels */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {CHANNELS.map((ch, idx) => {
            const Icon = ch.icon;
            return (
              <div
                key={idx}
                className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-[12px] p-6 flex flex-col justify-between hover:border-[#2563EB]/40 hover:shadow-sm transition-all"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-[8px] bg-white border border-[#CBD5E1] flex items-center justify-center text-[#2563EB]">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-mono text-[#0EA5E9] uppercase font-semibold">
                      Channel {idx + 1}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-[#0F172A] tracking-tight mb-1">
                    {ch.name}
                  </h3>
                  <div className="text-xs font-semibold text-slate-700 mb-2">
                    {ch.headline}
                  </div>
                  <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                    {ch.desc}
                  </p>
                </div>
                <div className="mt-5 pt-3 border-t border-slate-200">
                  <span className="text-[11px] font-mono text-slate-500">
                    &bull; {ch.badge}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Summary Value Banner */}
        <div className="bg-[#1C2636] border border-[#2A384C] rounded-[12px] p-6 sm:p-8 text-white flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1">
            <h4 className="text-lg font-bold text-white tracking-tight">
              Suppliers submit their quotes naturally. You get structured, comparable data.
            </h4>
            <p className="text-xs sm:text-sm text-slate-300">
              No software friction. No months of vendor onboarding training. 100% data fidelity.
            </p>
          </div>
          <Link
            href="/dashboard/supplier-portal"
            className="shrink-0 inline-flex items-center gap-2 px-4 py-2.5 rounded-[8px] bg-[#2563EB] hover:bg-[#1D4ED8] text-white text-xs sm:text-sm font-semibold transition-colors"
          >
            <span>Preview Supplier Portal Experience</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </section>
  );
}
