import { SocialProofItem, BenefitCard, StepItem, BehindSceneItem } from './types';

export const EXPERT_DATA = {
  name: 'Lorrana Sousa',
  role: 'Personal Trainer',
  specialties: 'Emagrecimento, Hipertrofia & Longevidade',
  academic: 'Pós-graduada em Nutrição Esportiva',
  method: 'Criadora do Método LSP®',
  location: 'Belo Horizonte - MG (Presencial e Online para todo o Brasil e exterior)',
  whatsappUrl: 'https://api.whatsapp.com/send/?phone=5531972673329&text=Ol%C3%A1%20Lorrana!%20Vim%20pelo%20seu%20site%20e%20gostaria%20de%20agendar%20minha%20primeira%20avalia%C3%A7%C3%A3o%20gratuita.&type=phone_number&app_absent=0&utm_source=ig',
  instagramUrl: 'https://www.instagram.com/personallorrana/?hl=pt_BR',
  heroImage: 'https://i.imgur.com/IbQh1Pn.png',
  authorityImage: 'https://i.imgur.com/65Ndz9c.png',
};

// Galeria de provas sociais e resultados reais (modular e pronta para receber novos links)
export const SOCIAL_PROOFS: SocialProofItem[] = [
  {
    id: 'proof-1',
    url: 'https://i.imgur.com/5HgV2ei.png',
    title: 'Transformação & Emagrecimento',
    category: 'emagrecimento',
    description: 'Redução expressiva de gordura corporal com preservação de massa magra',
    tag: 'Método LSP®'
  },
  {
    id: 'proof-2',
    url: 'https://i.imgur.com/1YqqIRT.png',
    title: 'Definição Abdominal & Tônus',
    category: 'definicao',
    description: 'Afinamento de cintura e definição do abdômen com treino individualizado',
    tag: 'Evolução Real'
  },
  {
    id: 'proof-3',
    url: 'https://i.imgur.com/uPw0NWV.png',
    title: 'Hipertrofia & Glúteos',
    category: 'hipertrofia',
    description: 'Ganho consistente de massa magra e harmonia dos membros inferiores',
    tag: 'Constância & Técnica'
  },
  {
    id: 'proof-4',
    url: 'https://i.imgur.com/Vbj4UYK.png',
    title: 'Emagrecimento com Saúde',
    category: 'emagrecimento',
    description: 'Mudança real de estilo de vida aliando nutrição esportiva e treino',
    tag: 'Sem Dietas Malucas'
  },
  {
    id: 'proof-5',
    url: 'https://i.imgur.com/I1Uzj0T.png',
    title: 'Harmonia & Postura Corporal',
    category: 'definicao',
    description: 'Alinhamento postural, firmeza muscular e redução de medidas',
    tag: 'Biomecânica Precisa'
  },
  {
    id: 'proof-6',
    url: 'https://i.imgur.com/szli7gu.png',
    title: 'Ganho de Massa Magra',
    category: 'hipertrofia',
    description: 'Evolução muscular visível com progressão de carga e segurança',
    tag: 'Progresso Real'
  },
  {
    id: 'proof-7',
    url: 'https://i.imgur.com/IvEbxoI.png',
    title: 'Redução de Medidas',
    category: 'emagrecimento',
    description: 'Secagem eficiente e cintura modelada com estímulo metabólico',
    tag: 'Treino + Nutrição'
  },
  {
    id: 'proof-8',
    url: 'https://i.imgur.com/F50qWH8.png',
    title: 'Transformação de Silhueta',
    category: 'definicao',
    description: 'Mais disposição, tônus muscular evidente e perda de medidas',
    tag: 'Estilo de Vida'
  },
  {
    id: 'proof-9',
    url: 'https://i.imgur.com/H9EyFOd.png',
    title: 'Desenvolvimento Muscular',
    category: 'hipertrofia',
    description: 'Técnica e amplitude correta gerando hipertrofia sustentável',
    tag: 'Hipertrofia'
  },
  {
    id: 'proof-10',
    url: 'https://i.imgur.com/2XPVsHG.png',
    title: 'Secagem & Densidade',
    category: 'emagrecimento',
    description: 'Menos retenção, mais definição e autoestima renovada',
    tag: 'Consistência'
  },
  {
    id: 'proof-11',
    url: 'https://i.imgur.com/xyMsLl1.png',
    title: 'Definição Corporal Total',
    category: 'definicao',
    description: 'Evolução estética completa mantendo saúde e bem-estar',
    tag: 'Autoestima Renovada'
  },
  {
    id: 'proof-12',
    url: 'https://i.imgur.com/wrIex2X.png',
    title: 'Evolução Muscular Superior',
    category: 'hipertrofia',
    description: 'Desenvolvimento e tonificação com acompanhamento próximo',
    tag: 'Método LSP®'
  },
  {
    id: 'proof-13',
    url: 'https://i.imgur.com/A6VVBwY.png',
    title: 'Redução de Gordura & Tônus',
    category: 'emagrecimento',
    description: 'Perda acentuada de gordura localizada com fortalecimento',
    tag: 'Evolução Real'
  },
  {
    id: 'proof-14',
    url: 'https://i.imgur.com/fWJYHdB.png',
    title: 'Contorno Corporal Harmonioso',
    category: 'definicao',
    description: 'Linhas do corpo desenhadas com protocolo personalizado',
    tag: 'Biomecânica'
  },
  {
    id: 'proof-15',
    url: 'https://i.imgur.com/dlMaaAu.png',
    title: 'Superação & Disciplina',
    category: 'emagrecimento',
    description: 'Conquista de uma rotina ativa e corpo firme',
    tag: 'Saúde & Força'
  },
  {
    id: 'proof-16',
    url: 'https://i.imgur.com/rikuEQU.png',
    title: 'Transformação Notável',
    category: 'definicao',
    description: 'Resultado expressivo comprovando a eficácia do método individualizado',
    tag: 'Resultado Real'
  }
];

// Cards de Diferenciais: "Por que confiar em mim?"
export const TRUST_CARDS: BenefitCard[] = [
  {
    id: 'trust-1',
    title: 'Avaliação Honesta & Individualizada',
    description: 'Nada de treino genérico copiado de planilha. Cada treino é desenhado para o seu biotipo, limitações físicas e rotina real.',
    iconName: 'ClipboardCheck'
  },
  {
    id: 'trust-2',
    title: 'Atendimento Direto Comigo',
    description: 'Você fala diretamente com a Lorrana. Sem intermediários, sem respostas prontas de robôs ou estagiários na sua evolução.',
    iconName: 'UserCheck'
  },
  {
    id: 'trust-3',
    title: 'Treino + Nutrição Integrados',
    description: 'Como pós-graduada em Nutrição Esportiva, alinho os estímulos de treino com o combustível certo para acelerar seus resultados.',
    iconName: 'Apple'
  },
  {
    id: 'trust-4',
    title: 'Criadora do Método LSP®',
    description: 'Metodologia exclusiva fundamentada em fisiologia e biomecânica avançada para queima de gordura sem lesionar suas articulações.',
    iconName: 'Flame'
  },
  {
    id: 'trust-5',
    title: 'Foco em Longevidade e Rotina Real',
    description: 'Treinos sustentáveis que cabem no seu dia a dia. Você não precisa viver na academia para ter o corpo que sempre sonhou.',
    iconName: 'HeartPulse'
  },
  {
    id: 'trust-6',
    title: 'Correção Fina de Movimento',
    description: 'Garantia de segurança máxima. Cada exercício tem cadência, postura e amplitude ajustadas para você não perder tempo.',
    iconName: 'Target'
  }
];

// 3 Passos da Primeira Avaliação
export const EVALUATION_STEPS: StepItem[] = [
  {
    number: '01',
    title: 'Toque no WhatsApp',
    description: 'Clique em qualquer botão desta página para abrir uma conversa direta no meu WhatsApp particular.',
    badge: 'Leva 10 segundos'
  },
  {
    number: '02',
    title: 'Alinhamento Rápido',
    description: 'Vamos bater um papo rápido para entender seu objetivo (emagrecer, hipertrofia ou saúde) e definir o melhor horário.',
    badge: '100% Sem Julgamentos'
  },
  {
    number: '03',
    title: 'Primeira Avaliação Gratuita',
    description: 'Realizamos sua avaliação diagnóstica completa. Você entende o plano ideal para o seu corpo antes de tomar qualquer decisão.',
    badge: 'Totalmente Gratuita'
  }
];

// Fotos e bastidores do expert
export const BEHIND_THE_SCENES: BehindSceneItem[] = [
  {
    url: 'https://i.imgur.com/F50qWH8.png',
    caption: 'Atendimento personalizado focado em biomecânica, postura e saúde',
    tag: 'Atendimento Personalizado'
  },
  {
    url: 'https://i.imgur.com/stVzE7N.png',
    caption: 'Acompanhamento de perto na execução e controle de carga',
    tag: 'Técnica & Precisão'
  },
  {
    url: 'https://i.imgur.com/Qz1g01l.png',
    caption: 'Aplicação prática do Método LSP® para máxima eficiência',
    tag: 'Método LSP®'
  },
  {
    url: 'https://i.imgur.com/zHFtLlb.png',
    caption: 'Ambiente motivador com foco na sua evolução constante',
    tag: 'Bastidores & Energia'
  }
];
