'use client';

import { Box, Button, Container, Typography } from '@mui/material';
import { HomeSectionContent, HomeSectionWrapper } from './styles';
import { Translations } from '@/i18n.config';
import { MutableRefObject } from 'react';
import { scrollToRef } from '@/utils';

interface IHomeSection {
  tr: Translations;
  projectRef: MutableRefObject<null>;
}

export default function HomeSection({ tr, projectRef }: IHomeSection) {
  const handleGoProjectBlock = () => {
    scrollToRef(projectRef);
  };

  return (
    <HomeSectionWrapper id='home'>
      <Container>
        <HomeSectionContent>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              maxWidth: '900px',
              textAlign: 'center',
              gap: '30px',
            }}
          >
            <Typography variant='lg800' sx={{ textTransform: 'uppercase' }}>
              {tr.iam} {tr.alexpervitin}
            </Typography>
            <Typography variant='lg500'>{tr.descaboutme}</Typography>
            <Button sx={{ maxWidth: '260px' }} onClick={handleGoProjectBlock}>
              {tr.projects}
            </Button>
          </Box>
        </HomeSectionContent>
      </Container>
    </HomeSectionWrapper>
  );
}
