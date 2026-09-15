import React from 'react';
import { Sparkles, MapPin, Award, Dumbbell, ShieldCheck } from 'lucide-react';
import { EXPERT_DATA } from '../data';
import { CtaButton } from './CtaButton';

export const HeroSection: React.FC = () => {
  return (
    <header className="relative w-full overflow-hidden pt-6 pb-12 sm:pt-10 sm:pb-20 border-b border-orange-950/40">
      {/* Background glow & metallic ambient lights */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 sm:w-[600px] h-96 bg-orange-600/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-40 right-0 w-72 h-72 bg-amber-600/5 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 flex flex-col items-center text-center">
        
        {/* Top credibility pill */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 text-xs sm:text-sm font-semibold mb-5 shadow-sm backdrop-blur-md">
          <Sparkles className="w-4 h-4 text-orange-400 shrink-0" />
          <span>Método LSP® • Pós em Nutrição Esportiva</span>
        </div>

        {/* Hero Photo with premium metallic border & glow */}
        <div className="relative mb-6 group">
          {/* Outer glowing halo */}
          <div className="absolute -inset-1.5 rounded-3xl sm:rounded-[2rem] bg-gradient-to-br from-orange-500/50 via-amber-600/20 to-transparent blur-md opacity-75 group-hover:opacity-100 transition duration-500" />
          
          <div className="relative w-64 h-80 sm:w-80 sm:h-96 rounded-2xl sm:rounded-[1.75rem] overflow-hidden border-2 border-orange-500/40 shadow-2xl bg-zinc-900">
            <img
              src={EXPERT_DATA.heroImage}
              alt="Lorrana Sousa - Personal Trainer"
              loading="eager"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
            />
            
            {/* Bottom gradient fade for text legibility & polish */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/10" />

            {/* In-photo status chip */}
            <div className="absolute bottom-3 left-3 right-3 py-1.5 px-3 rounded-xl bg-black/60 backdrop-blur-md border border-white/10 flex items-center justify-between text-left">
              <div>
                <p className="text-white text-xs font-bold leading-tight">Lorrana Sousa</p>
                <p className="text-orange-400 text-[10px] font-medium leading-tight">Personal Trainer & Nutrição</p>
              </div>
              <div className="flex items-center gap-1 text-[11px] text-zinc-300">
                <MapPin className="w-3.5 h-3.5 text-orange-500 shrink-0" />
                <span>BH / Online</span>
              </div>
            </div>
          </div>
        </div>

        {/* Main 1st-person Headline */}
        <h1 className="text-2xl sm:text-4xl md:text-5xl font-black text-white leading-tight tracking-tight mb-4 max-w-2xl font-display">
          Sou <span className="text-gradient-metallic">Lorrana Sousa</span>, personal trainer, e te ajudo a transformar seu corpo e sua rotina através do treino.
        </h1>

        {/* Benefit-oriented Subheadline */}
        <p className="text-zinc-300 text-sm sm:text-lg leading-relaxed max-w-xl mb-8 font-normal">
          Emagrecimento com definição, hipertrofia acelerada e longevidade. Sem treinos genéricos ou dietas que você não consegue sustentar.
        </p>

        {/* Main CTA button */}
        <div className="w-full max-w-md mb-8">
          <CtaButton
            text="Agendar primeira avaliação gratuita no WhatsApp"
            subtext="⚡ Resposta rápida • Sem compromisso"
            size="large"
          />
        </div>

        {/* Badges / Micro proof bar */}
        <div className="w-full max-w-lg grid grid-cols-3 gap-2 sm:gap-4 pt-4 border-t border-zinc-800/80 text-zinc-400">
          <div className="flex flex-col items-center justify-center p-2 rounded-xl bg-zinc-900/50 border border-zinc-800/60">
            <Award className="w-5 h-5 text-orange-400 mb-1" />
            <span className="text-[11px] sm:text-xs font-semibold text-zinc-200 text-center">Nutrição Esportiva</span>
            <span className="text-[10px] text-zinc-400 text-center">Pós-Graduada</span>
          </div>

          <div className="flex flex-col items-center justify-center p-2 rounded-xl bg-zinc-900/50 border border-zinc-800/60">
            <Dumbbell className="w-5 h-5 text-orange-400 mb-1" />
            <span className="text-[11px] sm:text-xs font-semibold text-zinc-200 text-center">Método LSP®</span>
            <span className="text-[10px] text-zinc-400 text-center">Exclusivo</span>
          </div>

          <div className="flex flex-col items-center justify-center p-2 rounded-xl bg-zinc-900/50 border border-zinc-800/60">
            <ShieldCheck className="w-5 h-5 text-orange-400 mb-1" />
            <span className="text-[11px] sm:text-xs font-semibold text-zinc-200 text-center">Presencial & Online</span>
            <span className="text-[10px] text-zinc-400 text-center">Belo Horizonte - MG</span>
          </div>
        </div>

      </div>
    </header>
  );
};
