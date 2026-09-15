import React from 'react';
import {
  ClipboardCheck,
  UserCheck,
  Apple,
  Flame,
  HeartPulse,
  Target,
  ShieldCheck,
} from 'lucide-react';
import { TRUST_CARDS } from '../data';

// Map icon names to Lucide components
const iconMap: Record<string, React.ElementType> = {
  ClipboardCheck,
  UserCheck,
  Apple,
  Flame,
  HeartPulse,
  Target,
};

export const WhyTrustSection: React.FC = () => {
  return (
    <section className="relative w-full py-12 sm:py-20 px-4 sm:px-6 bg-[#0c0d12] border-b border-zinc-900">
      <div className="max-w-5xl mx-auto">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 text-xs font-bold uppercase tracking-wider mb-3">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Segurança & Confiança</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white tracking-tight font-display mb-3">
            Por que você pode confiar em mim?
          </h2>
          <p className="text-zinc-400 text-xs sm:text-sm">
            Aqui você não é mais um número em uma academia lotada. Conheça os pilares do meu acompanhamento.
          </p>
        </div>

        {/* 6 Differential Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {TRUST_CARDS.map((card) => {
            const IconComponent = iconMap[card.iconName] || ShieldCheck;

            return (
              <div
                key={card.id}
                className="group relative p-5 sm:p-6 rounded-2xl bg-surface-card hover:bg-surface-card-hover border border-zinc-800/80 hover:border-orange-500/40 transition-all duration-300 shadow-lg hover:-translate-y-1 flex flex-col justify-between"
              >
                {/* Subtle top metallic accent line */}
                <div className="w-10 h-1 rounded-full bg-gradient-to-r from-orange-500 to-amber-600 mb-4 opacity-75 group-hover:w-16 group-hover:opacity-100 transition-all duration-300" />

                <div>
                  <div className="w-12 h-12 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-400 mb-4 group-hover:bg-orange-500/20 group-hover:text-orange-300 transition-colors">
                    <IconComponent className="w-6 h-6" />
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-white mb-2 font-display group-hover:text-orange-200 transition-colors">
                    {card.title}
                  </h3>

                  <p className="text-zinc-300 text-xs sm:text-sm leading-relaxed">
                    {card.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
