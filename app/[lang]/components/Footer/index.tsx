'use client';

import { Box, Stack, Typography } from '@mui/material';
import {
  ContentBlock,
  ContentWrapper,
  Copyright,
  FooterInner,
  FooterWrapper,
} from './styles';
import SocialLinks from '../SocialLinks';
import { Translations } from '@/i18n.config';

interface IFooter {
  tr: Translations;
}

export default function Footer({ tr }: IFooter) {
  const currentYear = new Date().getFullYear();

  return (
    <FooterWrapper>
      <FooterInner>
        <ContentWrapper>
          <ContentBlock>
            <Typography variant='sm700'>{tr.alexpervitin}</Typography>
            <Typography sx={{ maxWidth: '500px' }}>{tr.descaboutme}</Typography>
          </ContentBlock>
          <ContentBlock>
            <Typography variant='sm700'>{tr.social}</Typography>
            <Box sx={{ maxWidth: '500px' }}>
              <Stack direction={'row'}>
                <SocialLinks />
              </Stack>
            </Box>
          </ContentBlock>
        </ContentWrapper>
        <Copyright>
          <Typography variant='md500'>
            © Copyright {currentYear}. {tr.hasbeendevby} {tr.alexpervitin}
          </Typography>
        </Copyright>
      </FooterInner>
    </FooterWrapper>
  );
}
