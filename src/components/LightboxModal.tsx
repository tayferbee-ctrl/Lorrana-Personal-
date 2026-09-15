import React, { useEffect, useCallback } from 'react';
import { X, ChevronLeft, ChevronRight, MessageCircle } from 'lucide-react';
import { SOCIAL_PROOFS, EXPERT_DATA } from '../data';

interface LightboxModalProps {
  currentIndex: number | null;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({
  currentIndex,
  onClose,
  onNext,
  onPrev,
}) => {
  const isOpen = currentIndex !== null;
  const currentItem = isOpen ? SOCIAL_PROOFS[currentIndex] : null;

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onNext();
      if (e.key === 'ArrowLeft') onPrev();
    },
    [isOpen, onClose, onNext, onPrev]
  );

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, handleKeyDown]);

  if (!isOpen || !currentItem) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-md p-2 sm:p-4 transition-all duration-300">
      
      {/* Background click to dismiss */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* Close button */}
      <button
        onClick={onClose}
        aria-label="Fechar"
        className="absolute top-4 right-4 z-50 p-2.5 rounded-full bg-zinc-900/90 text-zinc-300 hover:text-white hover:bg-orange-600 transition-colors border border-white/10 cursor-pointer shadow-lg"
      >
        <X className="w-5 h-5" />
      </button>

      {/* Previous button */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onPrev();
        }}
        aria-label="Foto anterior"
        className="absolute left-2 sm:left-6 z-50 p-3 rounded-full bg-zinc-900/80 text-white hover:bg-orange-600 border border-white/10 transition-all cursor-pointer shadow-lg active:scale-95"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      {/* Next button */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onNext();
        }}
        aria-label="Próxima foto"
        className="absolute right-2 sm:right-6 z-50 p-3 rounded-full bg-zinc-900/80 text-white hover:bg-orange-600 border border-white/10 transition-all cursor-pointer shadow-lg active:scale-95"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Modal Main Content Container */}
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative z-40 max-w-lg w-full max-h-[92vh] flex flex-col items-center bg-zinc-950 rounded-2xl border border-orange-500/30 overflow-hidden shadow-2xl"
      >
        {/* Header bar */}
        <div className="w-full py-2.5 px-4 bg-zinc-900/90 border-b border-zinc-800 flex items-center justify-between text-xs text-zinc-400">
          <span className="font-semibold text-orange-400">
            {currentItem.tag || 'Resultado Método LSP®'}
          </span>
          <span>
            {currentIndex + 1} de {SOCIAL_PROOFS.length}
          </span>
        </div>

        {/* Big image */}
        <div className="relative w-full flex-1 min-h-[340px] max-h-[65vh] flex items-center justify-center bg-black/60 p-2">
          <img
            src={currentItem.url}
            alt={currentItem.title}
            referrerPolicy="no-referrer"
            className="max-w-full max-h-[62vh] object-contain rounded-lg select-none"
          />
        </div>

        {/* Footer info & direct WhatsApp conversion link */}
        <div className="w-full p-4 bg-zinc-950 border-t border-zinc-800/80 text-left">
          <h4 className="text-white font-bold text-sm sm:text-base">{currentItem.title}</h4>
          {currentItem.description && (
            <p className="text-zinc-400 text-xs mt-0.5 leading-snug">{currentItem.description}</p>
          )}

          <a
            href={EXPERT_DATA.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 w-full py-2.5 px-4 rounded-xl bg-gradient-to-r from-orange-500 to-amber-600 hover:from-orange-600 hover:to-amber-700 text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-lg transition-transform active:scale-95"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Quero uma transformação como esta no WhatsApp</span>
          </a>
        </div>

      </div>

    </div>
  );
};
