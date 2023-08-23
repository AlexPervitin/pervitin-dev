import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import TelegramIcon from '@mui/icons-material/Telegram';

import {
  catalogHOM,
  catalogHypt,
  convertTirnu,
  eventHypt,
  flatHOM,
  homeHypt,
  homeSkidstor,
  homeTirnu,
  mainHOM,
  paymentsTirnu,
  productSkidstor,
  toursSkidstor,
} from '@/assets/images/projects';
import { Translations } from '@/i18n.config';

export const NAV_LINKS = (tr: Translations) => {
  return [
    { id: 'home', path: '#home', title: tr.home },
    { id: 'about', path: '#about', title: tr.about },
    { id: 'projects', path: '#projects', title: tr.projects },
    { id: 'contact', path: '#contact', title: tr.contact },
  ];
};

export const SKILLS = [
  { name: 'HTML' },
  { name: 'CSS' },
  { name: 'Javascript' },
  { name: 'Typescript' },
  { name: 'React' },
  { name: 'Next' },
  { name: 'Material UI' },
  { name: 'Chakra UI' },
  { name: 'Tailwind' },
  { name: 'Styled components' },
  { name: 'REST API' },
  { name: 'APOLLO GraphQL' },
  { name: 'Redux' },
  { name: 'Redux Toolkit' },
  { name: 'Unit tests' },
  { name: 'GIT' },
  { name: 'SEO optimisation' },
];

export const SOCIAL_LINKS = [
  {
    Icon: LinkedInIcon,
    path: 'https://www.linkedin.com/in/alex-pervitin/',
    name: 'LinkedIn',
  },
  { Icon: GitHubIcon, path: 'https://github.com/AlexPervitin', name: 'GitHub' },
  { Icon: TelegramIcon, path: 'https://t.me/ZeddDead', name: 'Telegram' },
];

export const PROJECT_DATA = (tr: Translations) => {
  return [
    {
      id: 1,
      title: 'HOMETER',
      description: tr.hometerdesc,
      images: [{ path: mainHOM }, { path: catalogHOM }, { path: flatHOM }],
    },
    {
      id: 2,
      title: 'TIRNU',
      description: tr.tirnudesc,
      images: [
        { path: homeTirnu },
        { path: paymentsTirnu },
        { path: convertTirnu },
      ],
    },
    {
      id: 3,
      title: 'HYPT',
      description: tr.hyptdesc,
      images: [{ path: homeHypt }, { path: catalogHypt }, { path: eventHypt }],
    },
    {
      id: 4,
      title: 'SKIDSTOR',
      description: tr.skidstordesc,
      images: [
        { path: homeSkidstor },
        { path: productSkidstor },
        { path: toursSkidstor },
      ],
    },
  ];
};
