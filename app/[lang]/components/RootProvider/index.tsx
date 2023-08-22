'use client';

import ThemeRegistry from '@/theme/ThemeRegistry';
import Header from '../Header';
import Footer from '../Footer';
import { Translations } from '@/i18n.config';

export default function RootProvider({
  children,
  tr,
}: {
  children: React.ReactNode;
  tr: Translations;
}) {
  return (
    <>
      <ThemeRegistry options={{ key: 'mui' }}>
        <Header tr={tr} />
        {children}
        <Footer tr={tr} />
      </ThemeRegistry>
    </>
  );
}
