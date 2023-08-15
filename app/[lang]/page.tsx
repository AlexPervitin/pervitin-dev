import { Locale } from '@/i18n.config';
import { getDictionary } from '@/lib/dictionary';
import Switcher from './components/Switcher';

export default async function Home({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const { app } = await getDictionary(lang);

  return (
    <div>
      HOME<h1>{app.home}</h1>
      <Switcher />
    </div>
  );
}
