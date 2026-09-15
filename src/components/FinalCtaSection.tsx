import React from 'react';
import { CtaButton } from './CtaButton';
import { Flame, Star, CheckCircle, ShieldCheck } from 'lucide-react';
import { EXPERT_DATA } from '../data';

export const FinalCtaSection: React.FC = () => {
  return (
    <section className="relative w-full py-16 sm:py-24 px-4 sm:px-6 bg-gradient-to-b from-[#0c0d12] via-[#161214] to-[#0a0a0d] border-b border-orange-950/60 overflow-hidden">
      
      {/* Background glow highlights */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[600px] h-[350px] sm:h-[600px] bg-orange-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-3xl mx-auto text-center relative z-10 flex flex-col items-center">
        
        {/* Rating stars & social proof */}
        <div className="flex items-center gap-1.5 mb-4">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
          ))}
          <span className="text-xs text-zinc-300 ml-2 font-medium">
            Método avaliado com 5 estrelas por alunas
          </span>
        </div>

        {/* Powerful decision headline */}
        <h2 className="text-2xl sm:text-4xl md:text-5xl font-black text-white tracking-tight font-display mb-4 leading-tight">
          Pronta(o) para conquistar o corpo e a saúde que você sempre quis?
        </h2>

        <p className="text-zinc-300 text-sm sm:text-lg leading-relaxed max-w-xl mb-8">
          Não adie mais a sua transformação. Dê o primeiro passo com quem tem método comprovado, pós em nutrição esportiva e acompanhamento individual.
        </p>

        {/* Benefits reminder list */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-left w-full max-w-md mb-8">
          <div className="flex items-center gap-2 text-xs sm:text-sm text-zinc-200">
            <CheckCircle className="w-4 h-4 text-orange-400 shrink-0" />
            <span>Primeira avaliação 100% gratuita</span>
          </div>
          <div className="flex items-center gap-2 text-xs sm:text-sm text-zinc-200">
            <CheckCircle className="w-4 h-4 text-orange-400 shrink-0" />
            <span>Presencial em Belo Horizonte ou Online</span>
          </div>
          <div className="flex items-center gap-2 text-xs sm:text-sm text-zinc-200">
            <CheckCircle className="w-4 h-4 text-orange-400 shrink-0" />
            <span>Treino ajustado à sua rotina</span>
          </div>
          <div className="flex items-center gap-2 text-xs sm:text-sm text-zinc-200">
            <CheckCircle className="w-4 h-4 text-orange-400 shrink-0" />
            <span>Sem pegadinhas nem fidelidade forçada</span>
          </div>
        </div>

        {/* WhatsApp CTA Button */}
        <div className="w-full max-w-md">
          <CtaButton
            text="Garantir minha avaliação gratuita no WhatsApp"
            subtext="⚡ Resposta rápida • Vagas limitadas para este mês"
            size="large"
          />
        </div>

      </div>
    </section>
  );
};
