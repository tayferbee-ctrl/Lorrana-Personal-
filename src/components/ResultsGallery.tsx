import React, { useState, useRef } from 'react';
import { ChevronLeft, ChevronRight, Maximize2, ShieldAlert, Sparkles, Filter } from 'lucide-react';
import { SOCIAL_PROOFS } from '../data';
import { SocialProofItem } from '../types';

interface ResultsGalleryProps {
  onSelectImage: (index: number) => void;
}

export const ResultsGallery: React.FC<ResultsGalleryProps> = ({ onSelectImage }) => {
  const [activeCategory, setActiveCategory] = useState<string>('todos');
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const filteredItems = activeCategory === 'todos'
    ? SOCIAL_PROOFS
    : SOCIAL_PROOFS.filter(item => item.category === activeCategory);

  const handleScroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === 'left' ? -320 : 320;
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section id="resultados" className="relative w-full py-12 sm:py-20 px-4 sm:px-6 bg-[#0a0a0d] border-b border-zinc-900 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-orange-600/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-8">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Prova Visual Real</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white tracking-tight font-display mb-3">
            Resultados reais de quem confiou no método
          </h2>
          <p className="text-zinc-400 text-xs sm:text-sm">
            Evoluções com acompanhamento de perto, biomecânica e plano nutricional inteligente. Toque na imagem para ampliar.
          </p>
        </div>

        {/* Filter pills */}
        <div className="flex items-center justify-center gap-2 mb-8 overflow-x-auto no-scrollbar py-1">
          {[
            { id: 'todos', label: 'Todos os Resultados' },
            { id: 'emagrecimento', label: 'Emagrecimento' },
            { id: 'hipertrofia', label: 'Hipertrofia' },
            { id: 'definicao', label: 'Definição Corporal' },
          ].map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all duration-200 cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-gradient-to-r from-orange-500 to-amber-600 text-white shadow-md shadow-orange-600/20 border border-orange-400/40'
                  : 'bg-zinc-900/80 text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800 border border-zinc-800'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Navigation controls for desktop and mobile indicator */}
        <div className="flex items-center justify-between mb-4">
          <span className="text-xs text-zinc-500 flex items-center gap-1">
            <Filter className="w-3.5 h-3.5 text-orange-400" />
            Mostrando <strong>{filteredItems.length}</strong> transformações
          </span>

          <div className="flex items-center gap-2">
            <button
              onClick={() => handleScroll('left')}
              aria-label="Rolar para a esquerda"
              className="p-2 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-zinc-300 hover:text-white border border-zinc-800 transition-colors cursor-pointer"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => handleScroll('right')}
              aria-label="Rolar para a direita"
              className="p-2 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-zinc-300 hover:text-white border border-zinc-800 transition-colors cursor-pointer"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Scrollable Gallery Track */}
        <div
          ref={scrollContainerRef}
          className="flex gap-4 overflow-x-auto pb-4 pt-1 snap-x snap-mandatory no-scrollbar cursor-grab active:cursor-grabbing"
        >
          {filteredItems.map((item, idx) => {
            // Find global index in SOCIAL_PROOFS array for lightbox navigation
            const globalIndex = SOCIAL_PROOFS.findIndex(p => p.id === item.id);

            return (
              <div
                key={item.id}
                onClick={() => onSelectImage(globalIndex >= 0 ? globalIndex : idx)}
                className="group relative flex-none w-[260px] sm:w-[300px] snap-start rounded-2xl overflow-hidden bg-zinc-900 border border-zinc-800 hover:border-orange-500/50 shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer"
              >
                {/* Image container */}
                <div className="relative aspect-[4/5] overflow-hidden bg-zinc-950">
                  <img
                    src={item.url}
                    alt={item.title}
                    loading="lazy"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                  
                  {/* Subtle dark gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

                  {/* Top tag */}
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-1 rounded-md text-[11px] font-bold bg-black/70 backdrop-blur-md text-orange-400 border border-orange-500/30">
                      {item.tag || 'Resultado'}
                    </span>
                  </div>

                  {/* Zoom hint icon */}
                  <div className="absolute top-3 right-3 p-1.5 rounded-lg bg-black/60 backdrop-blur-md text-zinc-300 opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all">
                    <Maximize2 className="w-4 h-4 text-orange-400" />
                  </div>

                  {/* Bottom description */}
                  <div className="absolute bottom-3 left-3 right-3 text-left">
                    <p className="text-white text-sm font-bold leading-tight group-hover:text-orange-300 transition-colors">
                      {item.title}
                    </p>
                    {item.description && (
                      <p className="text-zinc-300 text-xs mt-1 leading-snug line-clamp-2">
                        {item.description}
                      </p>
                    )}
                  </div>
                </div>

                {/* Touch / Click to enlarge bar */}
                <div className="py-2 px-3 bg-zinc-950 text-center border-t border-zinc-800/80">
                  <span className="text-[11px] font-semibold text-orange-400/90 group-hover:text-orange-300 transition-colors flex items-center justify-center gap-1">
                    <Maximize2 className="w-3 h-3" /> Toque para ver ampliado
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Swipe hint for mobile */}
        <p className="text-center text-[11px] text-zinc-500 mt-2 sm:hidden">
          Arraste para os lados para ver mais resultados →
        </p>

        {/* Required Discretion Notice */}
        <div className="mt-8 pt-4 border-t border-zinc-900 text-center">
          <p className="text-[11px] sm:text-xs text-zinc-500 flex items-center justify-center gap-1.5">
            <ShieldAlert className="w-3.5 h-3.5 text-zinc-600 shrink-0" />
            <span>Aviso legal: Resultados podem variar de pessoa para pessoa de acordo com a individualidade biológica, dedicação aos treinos e nutrição.</span>
          </p>
        </div>

      </div>
    </section>
  );
};
