'use client';

import EnglishIcon from '@/assets/Icons/EnglishIcon';
import LanguageIcon from '@/assets/Icons/LanguageIcon';
import UkraineIcon from '@/assets/Icons/UkraineIcon';
import {
  MenuItem,
  Select,
  SelectChangeEvent,
  useColorScheme,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { useParams, usePathname, useRouter } from 'next/navigation';

export default function LanguageSelect() {
  const pathName = usePathname();
  const { mode } = useColorScheme();
  const router = useRouter();
  const theme = useTheme();
  const isLaptop = useMediaQuery(theme.breakpoints.down('md'));
  const { lang } = useParams();

  const redirectedPathName = (locale: string) => {
    if (!pathName) return '/';
    const segments = pathName.split('/');
    segments[1] = locale;
    return router.push(segments.join('/'));
  };

  const handleChangeLanguage = (event: SelectChangeEvent) => {
    redirectedPathName(event.target.value);
  };

  const getRenderValue = (value: 'en' | 'ua') => {
    switch (value) {
      case 'en':
        return (
          <>
            <EnglishIcon />
            EN
          </>
        );
      case 'ua':
        return (
          <>
            <UkraineIcon />
            UA
          </>
        );
      default:
        return (
          <>
            <UkraineIcon />
            UA
          </>
        );
    }
  };

  return (
    <Select
      id='demo-simple-select'
      value={lang as 'en' | 'ua'}
      onChange={handleChangeLanguage}
      variant='standard'
      IconComponent={({ ...rest }) => (
        <LanguageIcon fill={mode === 'dark' ? '#fff' : '#0F172A'} {...rest} />
      )}
      MenuProps={{
        PaperProps: {
          sx: {
            '.MuiMenuItem-root': {
              gap: '8px',
            },
          },
        },
      }}
      renderValue={(value) => (isLaptop ? '' : getRenderValue(value))}
    >
      <MenuItem value={'en'}>{getRenderValue('en')}</MenuItem>
      <MenuItem value={'ua'}>{getRenderValue('ua')}</MenuItem>
    </Select>
  );
}
