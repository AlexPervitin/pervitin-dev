'use client';

import { Translations } from '@/i18n.config';
import AboutMeSection from '../AboutMeSection';
import ContactSection from '../ContactSection';
import HomeSection from '../HomeSection';
import ProjectSections from '../ProjectsSection';
import SocialLinks from '../SocialLinks';
import { useRef } from 'react';

interface IHomeSections {
  tr: Translations;
}

export default function HomeSections({ tr }: IHomeSections) {
  const projectRef = useRef(null);
  const contactRef = useRef(null);

  return (
    <>
      <HomeSection tr={tr} projectRef={projectRef} />
      <AboutMeSection tr={tr} contactRef={contactRef} />
      <ProjectSections tr={tr} projectRef={projectRef} />
      <ContactSection tr={tr} contactRef={contactRef} />
      <SocialLinks aside />
    </>
  );
}
