import React from 'react';
import { Camera, Sparkles, Award, CheckCircle } from 'lucide-react';
import { BEHIND_THE_SCENES } from '../data';

export const ExpertBehindTheScenes: React.FC = () => {
  return (
    <section className="relative w-full py-12 sm:py-20 px-4 sm:px-6 bg-[#0c0d12] border-b border-zinc-900">
      <div className="max-w-5xl mx-auto">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 text-xs font-bold uppercase tracking-wider mb-3">
            <Camera className="w-3.5 h-3.5" />
            <span>Bastidores & Atendimento</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white tracking-tight font-display mb-3">
            Treino com técnica, presença e energia
          </h2>
          <p className="text-zinc-400 text-xs sm:text-sm">
            Veja um pouco do ambiente onde a mágica acontece. Acompanhamento focado nos seus objetivos reais.
          </p>
        </div>

        {/* 2-column showcase of expert in action */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {BEHIND_THE_SCENES.map((item, idx) => (
            <div
              key={idx}
              className="group relative rounded-2xl overflow-hidden bg-zinc-900 border border-zinc-800 hover:border-orange-500/40 shadow-xl transition-all duration-300 flex flex-col"
            >
              <div className="relative aspect-[4/4] sm:aspect-[4/5] overflow-hidden bg-zinc-950">
                <img
                  src={item.url}
                  alt={item.caption}
                  loading="lazy"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
                
                {/* Floating badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-black/80 backdrop-blur-md text-orange-400 border border-orange-500/30 flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5" />
                    {item.tag}
                  </span>
                </div>

                {/* Caption at bottom */}
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-white text-sm sm:text-base font-bold leading-snug">
                    {item.caption}
                  </p>
                </div>
              </div>

              {/* Card sub-row */}
              <div className="p-4 bg-zinc-950/80 border-t border-zinc-800/80 flex items-center justify-between text-xs text-zinc-400">
                <span className="flex items-center gap-1.5">
                  <CheckCircle className="w-3.5 h-3.5 text-orange-400" />
                  Atendimento individual
                </span>
                <span className="text-zinc-500">Lorrana Sousa</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
