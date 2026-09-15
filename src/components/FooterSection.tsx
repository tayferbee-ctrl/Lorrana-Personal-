import React from 'react';
import { Instagram, MessageCircle, MapPin, Sparkles, Heart } from 'lucide-react';
import { EXPERT_DATA } from '../data';

export const FooterSection: React.FC = () => {
  return (
    <footer className="w-full py-12 px-4 sm:px-6 bg-[#070709] border-t border-zinc-900 text-zinc-400">
      <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
        
        {/* Name & Title */}
        <div className="flex items-center gap-2 mb-2">
          <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
          <h3 className="text-lg sm:text-xl font-bold text-white font-display">
            {EXPERT_DATA.name}
          </h3>
        </div>

        <p className="text-orange-400 text-xs sm:text-sm font-semibold mb-2">
          {EXPERT_DATA.role} • {EXPERT_DATA.academic}
        </p>

        <p className="text-zinc-500 text-xs flex items-center justify-center gap-1.5 mb-6">
          <MapPin className="w-3.5 h-3.5 text-zinc-400" />
          <span>Belo Horizonte - MG • Atendimento Presencial & Consultoria Online</span>
        </p>

        {/* Social Links */}
        <div className="flex items-center justify-center mb-8">
          <a
            href={EXPERT_DATA.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram de Lorrana Sousa"
            className="flex items-center gap-2 py-2.5 px-5 rounded-xl bg-zinc-900/80 hover:bg-zinc-800 text-zinc-300 hover:text-white border border-zinc-800 hover:border-orange-500/40 transition-all text-xs font-semibold shadow-sm"
          >
            <Instagram className="w-4 h-4 text-pink-500" />
            <span>Siga no Instagram @personallorrana</span>
          </a>
        </div>

        {/* Copyright notice */}
        <div className="pt-6 border-t border-zinc-900/80 w-full text-[11px] text-zinc-500 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p>© {new Date().getFullYear()} {EXPERT_DATA.name} Personal Trainer. Todos os direitos reservados.</p>
          <p className="flex items-center gap-1">
            Criado com foco em alta conversão e experiência mobile
          </p>
        </div>

      </div>
    </footer>
  );
};
