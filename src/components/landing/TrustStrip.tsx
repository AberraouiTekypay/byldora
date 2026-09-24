'use client';

import React from 'react';
import { FileCode2, Send, Cpu, Network, ShieldCheck } from 'lucide-react';
import { useLanguage } from '@/lib/languageContext';

export default function TrustStrip() {
  const { t } = useLanguage();

  const PILLARS = [
    {
      title: t.trust.p1Title,
      subtitle: t.trust.p1Subtitle,
      icon: FileCode2,
    },
    {
      title: t.trust.p2Title,
      subtitle: t.trust.p2Subtitle,
      icon: Send,
    },
    {
      title: t.trust.p3Title,
      subtitle: t.trust.p3Subtitle,
      icon: Cpu,
    },
    {
      title: t.trust.p4Title,
      subtitle: t.trust.p4Subtitle,
      icon: Network,
    },
    {
      title: t.trust.p5Title,
      subtitle: t.trust.p5Subtitle,
      icon: ShieldCheck,
    },
  ];

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
