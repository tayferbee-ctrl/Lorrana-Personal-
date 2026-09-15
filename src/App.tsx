import { useState } from 'react';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { ResultsGallery } from './components/ResultsGallery';
import { WhyTrustSection } from './components/WhyTrustSection';
import { MidCtaSection } from './components/MidCtaSection';
import { HowItWorksSection } from './components/HowItWorksSection';
import { ExpertBehindTheScenes } from './components/ExpertBehindTheScenes';
import { FinalCtaSection } from './components/FinalCtaSection';
import { FooterSection } from './components/FooterSection';
import { LightboxModal } from './components/LightboxModal';
import { SOCIAL_PROOFS } from './data';

export default function App() {
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState<number | null>(null);

  const handleNextPhoto = () => {
    if (selectedPhotoIndex !== null) {
      setSelectedPhotoIndex((prev) => ((prev ?? 0) + 1) % SOCIAL_PROOFS.length);
    }
  };

  const handlePrevPhoto = () => {
    if (selectedPhotoIndex !== null) {
      setSelectedPhotoIndex((prev) => ((prev ?? 0) - 1 + SOCIAL_PROOFS.length) % SOCIAL_PROOFS.length);
    }
  };

  return (
    <div className="min-h-screen bg-[#0b0b0e] text-[#f3f4f6] flex flex-col items-center selection:bg-orange-500 selection:text-white">
      {/* Main Single-Page High-Conversion Flow (No menu, no distraction) */}
      <main className="w-full max-w-5xl mx-auto flex flex-col">
        
        {/* 1. HERO (primeira dobra) */}
        <HeroSection />

        {/* 2. BLOCO “QUEM SOU EU” (autoridade pessoal) */}
        <AboutSection />

        {/* 3. BLOCO “RESULTADOS REAIS” (prova visual forte) */}
        <ResultsGallery onSelectImage={(idx) => setSelectedPhotoIndex(idx)} />

        {/* 4. BLOCO “POR QUE CONFIAR EM MIM?” */}
        <WhyTrustSection />

        {/* 5. CTA INTERMEDIÁRIO (repetir CTA + quebra de objeção) */}
        <MidCtaSection />

        {/* 6. BLOCO “COMO FUNCIONA A PRIMEIRA AVALIAÇÃO” */}
        <HowItWorksSection />

        {/* 7. BLOCO “MAIS PROVAS” (expert + bastidores) */}
        <ExpertBehindTheScenes />

        {/* 8. CTA FINAL (decisão) */}
        <FinalCtaSection />

        {/* 9. RODAPÉ SIMPLES */}
        <FooterSection />

      </main>

      {/* Lightbox Modal for Fullscreen Image Viewing */}
      <LightboxModal
        currentIndex={selectedPhotoIndex}
        onClose={() => setSelectedPhotoIndex(null)}
        onNext={handleNextPhoto}
        onPrev={handlePrevPhoto}
      />
    </div>
  );
}
