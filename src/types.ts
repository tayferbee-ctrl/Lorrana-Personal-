export interface SocialProofItem {
  id: string;
  url: string;
  title: string;
  category: 'emagrecimento' | 'hipertrofia' | 'definicao' | 'todos';
  description?: string;
  tag?: string;
}

export interface BenefitCard {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface StepItem {
  number: string;
  title: string;
  description: string;
  badge: string;
}

export interface BehindSceneItem {
  url: string;
  caption: string;
  tag: string;
}
