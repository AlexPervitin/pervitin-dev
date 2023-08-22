import { Locale } from '@/i18n.config';
import { getDictionary } from '@/lib/dictionary';
import HomeSections from './components/HomeSections';

export default async function Home({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const { tr } = await getDictionary(lang);

  return <HomeSections tr={tr} />;
}
