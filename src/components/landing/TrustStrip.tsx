import React from 'react';
import { FileCode2, Send, Cpu, Network, ShieldCheck } from 'lucide-react';

const PILLARS = [
  {
    title: 'BOQ Intelligence',
    subtitle: 'Hierarchical line-item parsing & automated trade assignment',
    icon: FileCode2,
  },
  {
    title: 'RFQ Automation',
    subtitle: 'Instant package bundling & multi-channel supplier distribution',
    icon: Send,
  },
  {
    title: 'Bid Intelligence',
    subtitle: 'Real landed transaction economics & specification matching',
    icon: Cpu,
  },
  {
    title: 'Supplier Network',
    subtitle: 'Frictionless engagement via WhatsApp, PDF and Excel',
    icon: Network,
  },
  {
    title: 'Procurement Control',
    subtitle: 'Audit trails, commercial signoff & verified PO execution',
    icon: ShieldCheck,
  },
];

export default function TrustStrip() {
  return (
    <section id="value-strip" className="bg-[#1C2636] border-b border-[#2A384C] py-8 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 sm:gap-8 items-start">
          {PILLARS.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="flex flex-col space-y-2 border-l border-slate-700/80 pl-4 py-1"
              >
                <div className="flex items-center gap-2 text-[#0EA5E9]">
                  <Icon className="w-4 h-4 shrink-0" />
                  <span className="text-xs font-mono font-semibold tracking-wider uppercase text-slate-300">
                    0{idx + 1}
                  </span>
                </div>
                <h2 className="text-sm font-bold text-white tracking-tight">
                  {pillar.title}
                </h2>
                <p className="text-xs text-slate-400 leading-snug">
                  {pillar.subtitle}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
