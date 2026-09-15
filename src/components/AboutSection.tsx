import React from 'react';
import { CheckCircle2, Flame, HeartHandshake, Shield, Sparkles } from 'lucide-react';
import { EXPERT_DATA } from '../data';

export const AboutSection: React.FC = () => {
  return (
    <section className="relative w-full py-12 sm:py-20 px-4 sm:px-6 bg-zinc-950/60 border-b border-zinc-900">
      <div className="max-w-4xl mx-auto">
        
        {/* Section title & pre-title */}
        <div className="text-center mb-10">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-orange-400 bg-orange-950/40 border border-orange-800/40 mb-3">
            Autoridade & Propósito
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white tracking-tight font-display">
            Quem é a sua treinadora?
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          
          {/* Authority photo column */}
          <div className="md:col-span-5 flex justify-center">
            <div className="relative group w-full max-w-[280px] sm:max-w-[320px]">
              <div className="absolute -inset-2 rounded-3xl bg-gradient-to-tr from-orange-600/30 via-amber-500/10 to-transparent blur-lg opacity-70 group-hover:opacity-100 transition duration-500" />
              <div className="relative rounded-2xl overflow-hidden border border-orange-500/30 shadow-2xl bg-zinc-900 aspect-[3/4]">
                <img
                  src={EXPERT_DATA.authorityImage}
                  alt="Lorrana Sousa em atendimento"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/90 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-left">
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-orange-500/90 text-zinc-950 text-xs font-bold mb-1 shadow-sm">
                    <Flame className="w-3.5 h-3.5 fill-current" />
                    Método LSP®
                  </div>
                  <p className="text-white text-sm font-bold">Lorrana Sousa</p>
                  <p className="text-zinc-300 text-xs">Belo Horizonte - MG & Online</p>
                </div>
              </div>
            </div>
          </div>

          {/* 1st person narrative & bullets */}
          <div className="md:col-span-7 flex flex-col justify-center text-left">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 font-display">
              Prazer, sou a <span className="text-gradient-metallic">Lorrana Sousa</span>.
            </h3>

            <p className="text-zinc-300 text-sm sm:text-base leading-relaxed mb-4">
              Não acredito em fórmulas mágicas nem em treinos padronizados que ignoram a sua rotina, suas dores e sua vida real. Minha missão é te dar clareza, técnica e motivação prática para você atingir resultados consistentes e duradouros.
            </p>

            <p className="text-zinc-300 text-sm sm:text-base leading-relaxed mb-6">
              Como <strong className="text-white">pós-graduada em Nutrição Esportiva</strong> e criadora do <strong className="text-orange-400">Método LSP®</strong>, integro o estímulo muscular correto à estratégia nutricional eficiente. O resultado? Você queima gordura, constrói tônus e ganha mais energia sem sofrimento.
            </p>

            {/* Bullets with differentials */}
            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-3 p-3 rounded-xl bg-zinc-900/60 border border-zinc-800/80">
                <CheckCircle2 className="w-5 h-5 text-orange-400 shrink-0 mt-0.5" />
                <div>
                  <p className="text-white text-sm font-semibold">Criadora do Método LSP®</p>
                  <p className="text-zinc-400 text-xs">Biomecânica fina para potencializar hipertrofia e emagrecimento com segurança articular.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 rounded-xl bg-zinc-900/60 border border-zinc-800/80">
                <Sparkles className="w-5 h-5 text-orange-400 shrink-0 mt-0.5" />
                <div>
                  <p className="text-white text-sm font-semibold">Pós em Nutrição Esportiva</p>
                  <p className="text-zinc-400 text-xs">Orientação sinérgica entre o seu treino e a sua alimentação para acelerar a resposta do seu corpo.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 rounded-xl bg-zinc-900/60 border border-zinc-800/80">
                <HeartHandshake className="w-5 h-5 text-orange-400 shrink-0 mt-0.5" />
                <div>
                  <p className="text-white text-sm font-semibold">Atendimento Direto e Humano</p>
                  <p className="text-zinc-400 text-xs">Presencial em Belo Horizonte - MG e Consultoria Online personalizada para alunos no mundo todo.</p>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
