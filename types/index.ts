import { Locale } from '@/i18n.config';

export type Anchor = 'top' | 'left' | 'bottom' | 'right';

export type NavLinkType = { path: string; title: string };

export type MetaProps = {
  params: { lang: Locale };
};
