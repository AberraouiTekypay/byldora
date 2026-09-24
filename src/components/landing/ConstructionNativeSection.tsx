import React from 'react';
import { 
  FileSpreadsheet, 
  Layers, 
  FileCheck, 
  RefreshCw, 
  Ban, 
  CalendarRange, 
  Coins, 
  Clock, 
  Users2 
} from 'lucide-react';

const COMPLEXITY_ITEMS = [
  {
    title: 'BOQ Structure',
    desc: 'Deep multi-tiered schedules of rates, quantities, and division hierarchies (CSI MasterFormat, Uniclass, POMI).',
    icon: FileSpreadsheet,
    code: '01 / HIERARCHY',
  },
  {
    title: 'Trade Lots',
    desc: 'Seamless partitioning of mega-projects into trade-specific execution packages: Civil, MEP, Finishes, FF&E.',
    icon: Layers,
    code: '02 / LOTS',
  },
  {
    title: 'Technical Specifications',
    desc: 'Automated verification against regional building codes, Eurocodes, ASTM standards, and LEED certifications.',
    icon: FileCheck,
    code: '03 / SPECS',
  },
  {
    title: 'Material Substitutions',
    desc: 'Rigorous detection of proposed alternative brands, calculating lifecycle performance and delta tolerances.',
    icon: RefreshCw,
    code: '04 / SUBSTITUTIONS',
  },
  {
    title: 'Commercial Exclusions',
    desc: 'Automatic detection of excluded scopes: cranage, customs duties, testing, commissioning, and waste removal.',
    icon: Ban,
    code: '05 / EXCLUSIONS',
  },
  {
    title: 'Delivery Dates & Staging',
    desc: 'Dynamic alignment with primary contractor critical-path Gantt milestones to avoid on-site staging bottlenecks.',
    icon: CalendarRange,
    code: '06 / LOGISTICS',
  },
  {
    title: 'Payment Terms & Retention',
    desc: 'Standardized management of retention bonds (5–10%), milestone certifications, and credit settlement cycles.',
    icon: Coins,
    code: '07 / CAPITAL',
  },
  {
    title: 'Long-Lead Materials',
    desc: 'Early warning tracking for equipment with 14–26 week fabrication horizons (chillers, transformers, elevators).',
    icon: Clock,
    code: '08 / LONG-LEAD',
  },
  {
    title: 'Subcontractors & Labor',
    desc: 'Pre-qualification tracking of Tier-1 trade partners, safety compliance certificates, and worker insurances.',
    icon: Users2,
    code: '09 / TRADES',
  },
];

export default function ConstructionNativeSection() {
  return (
    <section id="construction-native" className="bg-[#0B1220] py-20 lg:py-28 border-b border-[#1C2636] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-[6px] bg-[#1C2636] border border-[#2A384C] text-xs font-mono text-[#0EA5E9] tracking-wide mb-3">
            <span>BUILT FOR INDUSTRIAL REALITY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
            Construction-native by design.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            Generic procurement tools treat orders like simple e-commerce shopping carts. BYLDORA is engineered around the deep, messy realities of technical building contracts.
          </p>
        </div>

        {/* 9 Complexity Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {COMPLEXITY_ITEMS.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-[#1C2636] border border-[#2A384C] rounded-[12px] p-6 hover:border-slate-500 transition-colors flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] font-mono text-slate-400 tracking-wider">
                      {item.code}
                    </span>
                    <div className="w-8 h-8 rounded-[6px] bg-[#0F1A2E] flex items-center justify-center text-[#0EA5E9]">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>
                  <h3 className="text-base font-bold text-white tracking-tight mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
