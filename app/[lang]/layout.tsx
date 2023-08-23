import { Source_Sans_3 } from 'next/font/google';
import { i18n, Locale } from '@/i18n.config';
import RootProvider from './components/RootProvider';
import { getDictionary } from '@/lib/dictionary';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { MetaProps } from '@/types';
import { Analytics } from '@vercel/analytics/react';

const source_sans = Source_Sans_3({ subsets: ['latin'] });

export async function generateMetadata({ params }: MetaProps) {
  const { tr } = await getDictionary(params.lang);

  return {
    title: tr.alexpervitin,
    description: tr.descaboutme,
    generator: tr.alexpervitin,
    applicationName: `${tr.portfolio} ${tr.alexpervitin}`,
    keywords: tr.keywords,
    authors: [
      { name: tr.alexpervitin },
      { name: tr.alexpervitin, url: process.env.NEXT_PUBLIC_BASE_URL },
    ],
    creator: tr.alexpervitin,
    publisher: tr.alexpervitin,
    openGraph: {
      title: tr.alexpervitin,
      description: tr.descaboutme,
      ulr: process.env.NEXT_PUBLIC_BASE_URL,
      type: 'website',
      siteName: process.env.NEXT_PUBLIC_BASE_URL,
      locale: params.lang,
    },
    alternates: {
      canonical: process.env.NEXT_PUBLIC_BASE_URL,
      languages: {
        en: `${process.env.NEXT_PUBLIC_BASE_URL}/en`,
        ua: `${process.env.NEXT_PUBLIC_BASE_URL}/ua`,
      },
    },
    robots: {
      index: true,
      follow: true,
      nocache: true,
    },
    icons: {
      icon: '/app/favicon.ico',
      shortcut: '/app/favicon.ico',
      apple: '/app/favicon.ico',
      other: {
        rel: '/app/favicon.ico',
        url: '/app/favicon.ico',
      },
    },
  };
}

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: Locale };
}) {
  const { tr } = await getDictionary(params.lang);

  return (
    <html lang={params.lang}>
      <body className={source_sans.className}>
        <RootProvider tr={tr}>{children}</RootProvider>
        <ToastContainer newestOnTop />
        <Analytics />
      </body>
    </html>
  );
}
