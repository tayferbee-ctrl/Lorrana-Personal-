import React from 'react';
import { CtaButton } from './CtaButton';
import { CheckCircle2, Clock, ShieldCheck } from 'lucide-react';

export const MidCtaSection: React.FC = () => {
  return (
    <section className="relative w-full py-12 sm:py-16 px-4 sm:px-6 bg-gradient-to-b from-[#0e0f15] via-[#151318] to-[#0c0d12] border-b border-orange-950/40 overflow-hidden">
      
      {/* Metallic ambient backdrop light */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-orange-600/10 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-3xl mx-auto text-center relative z-10">
        
        {/* Objection buster tag */}
        <span className="inline-block px-3 py-1 rounded-full text-xs font-bold tracking-wide uppercase text-orange-400 bg-orange-950/60 border border-orange-700/40 mb-3">
          Sem julgamentos • No seu ritmo
        </span>

        {/* Objection buster headline */}
        <h2 className="text-xl sm:text-3xl font-black text-white tracking-tight font-display mb-3">
          "Faz tempo que não treino..." ou "Não tenho condicionamento..."
        </h2>

        <p className="text-zinc-300 text-sm sm:text-base leading-relaxed max-w-xl mx-auto mb-6">
          Você não precisa estar em forma para começar. Meu papel como sua personal é justamente construir sua base, respeitar suas dores e te levar ao próximo nível com segurança.
        </p>

        {/* Reassurance pills */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-xs text-zinc-300 mb-8">
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            Atendimento 100% individual
          </span>
          <span className="flex items-center gap-1.5">
            <Clock className="w-4 h-4 text-orange-400" />
            Horários flexíveis
          </span>
          <span className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-amber-400" />
            Primeira sessão diagnóstica sem custo
          </span>
        </div>

        {/* CTA Button */}
        <div className="w-full max-w-md mx-auto">
          <CtaButton
            text="Falar com Lorrana no WhatsApp agora"
            subtext="⚡ Resposta rápida • Tire suas dúvidas sem compromisso"
            size="large"
          />
        </div>

      </div>
    </section>
  );
};
