import React from 'react';
import { MessageSquare, CalendarClock, Activity, Sparkles, ArrowRight } from 'lucide-react';
import { EVALUATION_STEPS } from '../data';

export const HowItWorksSection: React.FC = () => {
  return (
    <section className="relative w-full py-12 sm:py-20 px-4 sm:px-6 bg-[#090a0d] border-b border-zinc-900">
      <div className="max-w-4xl mx-auto">
        
        {/* Header */}
        <div className="text-center max-w-xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Processo Rápido & Sem Burocracia</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white tracking-tight font-display mb-3">
            Como funciona a sua primeira avaliação?
          </h2>
          <p className="text-zinc-400 text-xs sm:text-sm">
            Tudo é pensado para ser simples e transparente. Em apenas 3 passos você dá o primeiro passo rumo à sua nova rotina.
          </p>
        </div>

        {/* Steps container */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
          
          {EVALUATION_STEPS.map((step, idx) => {
            return (
              <div
                key={step.number}
                className="relative p-6 rounded-2xl bg-zinc-900/60 border border-zinc-800 hover:border-orange-500/40 transition-all duration-300 shadow-xl flex flex-col justify-between group"
              >
                {/* Step indicator header */}
                <div className="flex items-center justify-between mb-4">
                  <span className="w-10 h-10 rounded-xl bg-gradient-to-br from-orange-500 to-amber-600 text-white font-black text-base flex items-center justify-center shadow-md font-display">
                    {step.number}
                  </span>
                  <span className="text-[11px] font-semibold text-orange-400/90 bg-orange-950/40 border border-orange-800/40 px-2.5 py-0.5 rounded-full">
                    {step.badge}
                  </span>
                </div>

                <div>
                  <h3 className="text-base sm:text-lg font-bold text-white mb-2 font-display group-hover:text-orange-300 transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Arrow hint on desktop between steps */}
                {idx < 2 && (
                  <div className="hidden md:block absolute -right-3 top-1/2 -translate-y-1/2 z-20 text-orange-500/40">
                    <ArrowRight className="w-6 h-6" />
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Guarantee badge */}
        <div className="mt-8 p-4 rounded-2xl bg-gradient-to-r from-orange-950/30 via-zinc-900/80 to-orange-950/30 border border-orange-500/30 text-center">
          <p className="text-xs sm:text-sm text-zinc-300 font-medium">
            <strong className="text-orange-400">100% Gratuita e Sem Compromisso:</strong> Você conhece a metodologia, conversa comigo e só decide começar se fizer total sentido para você.
          </p>
        </div>

      </div>
    </section>
  );
};
