import React from 'react';
import { MessageCircle, ArrowRight } from 'lucide-react';
import { EXPERT_DATA } from '../data';

interface CtaButtonProps {
  text?: string;
  subtext?: string;
  className?: string;
  size?: 'normal' | 'large';
  pulse?: boolean;
}

export const CtaButton: React.FC<CtaButtonProps> = ({
  text = 'Agendar primeira avaliação gratuita no WhatsApp',
  subtext = '⚡ Resposta rápida • 100% Sem compromisso',
  className = '',
  size = 'large',
  pulse = true,
}) => {
  return (
    <div className={`flex flex-col items-center w-full ${className}`}>
      <a
        href={EXPERT_DATA.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        id="cta-whatsapp-button"
        className={`group relative flex items-center justify-center gap-3 w-full max-w-md font-semibold text-white rounded-2xl shadow-xl transition-all duration-300 transform active:scale-95 bg-gradient-to-r from-[#ff6b00] via-[#ea580c] to-[#c2410c] hover:from-[#ff7e1a] hover:via-[#f97316] hover:to-[#ea580c] border border-orange-400/30 glow-orange-lg hover:shadow-orange-600/30 ${
          size === 'large' ? 'py-4 px-6 text-base sm:text-lg' : 'py-3.5 px-5 text-sm sm:text-base'
        }`}
      >
        {/* Subtle metallic sweep animation highlight */}
        <div className="absolute inset-0 rounded-2xl overflow-hidden pointer-events-none">
          <div className="absolute -inset-full top-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 group-hover:translate-x-full transition-transform duration-1000 ease-out" />
        </div>

        {/* Pulsing indicator circle */}
        {pulse && (
          <span className="relative flex h-3 w-3 shrink-0">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-400"></span>
          </span>
        )}

        <MessageCircle className="w-6 h-6 shrink-0 fill-current text-white transition-transform group-hover:scale-110" />

        <span className="text-center font-bold tracking-tight text-white leading-tight">
          {text}
        </span>

        <ArrowRight className="w-5 h-5 shrink-0 opacity-80 group-hover:opacity-100 group-hover:translate-x-1 transition-all hidden sm:inline-block" />
      </a>

      {subtext && (
        <p className="mt-2.5 text-xs text-zinc-400 text-center tracking-wide font-medium">
          {subtext}
        </p>
      )}
    </div>
  );
};
