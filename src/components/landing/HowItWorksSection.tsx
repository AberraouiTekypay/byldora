import React from 'react';
import { 
  UploadCloud, 
  PackagePlus, 
  SendHorizontal, 
  Inbox, 
  Cpu, 
  FileCheck2 
} from 'lucide-react';

const STEPS = [
  {
    step: '01',
    title: 'Upload BOQ',
    action: 'Ingest & Standardize',
    desc: 'Upload multi-tab Excel workbooks, civil schedules, or PDF bill sheets. BYLDORA’s parser extracts line items, quantities, units, and technical specifications into a structured database.',
    icon: UploadCloud,
    meta: 'Supports Excel, CSV, PDF schedules',
  },
  {
    step: '02',
    title: 'Create procurement packages',
    action: 'Scope & Bundle',
    desc: 'Group thousands of raw items into clean commercial trade packages (e.g. Structural Steel, MEP Chillers, Facades) with target budgets and milestone delivery requirements.',
    icon: PackagePlus,
    meta: 'Automated CSI / Uniclass grouping',
  },
  {
    step: '03',
    title: 'Issue RFQs',
    action: 'Multi-Channel Dispatch',
    desc: 'Distribute structured tender packages to pre-qualified regional vendors with clear submission deadlines, terms, and technical acceptance criteria.',
    icon: SendHorizontal,
    meta: 'Dispatched via Portal, Email, or WhatsApp',
  },
  {
    step: '04',
    title: 'Receive supplier quotations',
    action: 'Omni-Format Intake',
    desc: 'Suppliers quote using whatever format they prefer: our interactive portal, marked-up Excel files, or PDF attachments sent over email or messaging.',
    icon: Inbox,
    meta: 'Zero barrier to regional supplier entry',
  },
  {
    step: '05',
    title: 'AI normalizes bids',
    action: 'True Economic Reconciliation',
    desc: 'The intelligence engine identifies hidden exclusions (e.g. omitted freight or crane hire), flags unapproved material substitutions, and normalizes payment terms to a single comparative baseline.',
    icon: Cpu,
    meta: 'Specification matching & landed cost model',
  },
  {
    step: '06',
    title: 'Award and generate PO',
    action: 'Executable Procurement',
    desc: 'Select the optimal commercial offer with defensible audit trails, produce contract-ready Purchase Orders with standard retention clauses, and lock in commitments.',
    icon: FileCheck2,
    meta: 'Instant binding PO generation with PDF export',
  },
];

export default function HowItWorksSection() {
  return (
    <section id="how-it-works" className="bg-white py-20 lg:py-28 border-b border-[#E2E8F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-[6px] bg-blue-50 border border-blue-200 text-xs font-semibold text-[#2563EB] tracking-wide mb-3">
            <span>PROCUREMENT LIFECYCLE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight">
            How BYLDORA works
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#475569] leading-relaxed">
            From initial bill of quantities to finalized purchase orders in six auditable, data-driven steps.
          </p>
        </div>

        {/* 6 Step Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {STEPS.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-[12px] p-6 sm:p-7 relative flex flex-col justify-between hover:border-[#2563EB]/40 hover:bg-slate-50 transition-all group"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-2xl font-black font-mono text-slate-300 group-hover:text-[#2563EB] transition-colors">
                      {item.step}
                    </span>
                    <div className="w-10 h-10 rounded-[8px] bg-white border border-[#E2E8F0] flex items-center justify-center text-slate-700 shadow-2xs group-hover:text-[#2563EB] group-hover:border-blue-200 transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>
                  <div className="text-xs font-mono uppercase tracking-wider font-semibold text-[#2563EB] mb-1">
                    {item.action}
                  </div>
                  <h3 className="text-lg font-bold text-[#0F172A] tracking-tight mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-[#475569] leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#E2E8F0] flex items-center justify-between text-[11px] font-mono text-[#64748B]">
                  <span>{item.meta}</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
