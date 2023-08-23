'use client';

import { SOCIAL_LINKS } from '@/constants';
import { IconButton } from '@mui/material';
import Link from 'next/link';
import { SocialLinksWrapper } from './styles';

interface ISocialLinks {
  aside?: boolean;
}

export default function SocialLinks({ aside }: ISocialLinks) {
  return (
    <SocialLinksWrapper aside={aside?.toString()}>
      {SOCIAL_LINKS.map(({ name, Icon, path }) => {
        return (
          <IconButton sx={{ color: '#fff' }} key={name}>
            <Link
              href={path}
              style={{ textDecoration: 'none', color: '#fff' }}
              target='_blank'
            >
              <Icon />
            </Link>
          </IconButton>
        );
      })}
    </SocialLinksWrapper>
  );
}
