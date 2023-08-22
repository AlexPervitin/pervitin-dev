'use client';

import {
  Box,
  Button,
  Container,
  Divider,
  List,
  ListItem,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import {
  AboutSectionContent,
  ContentBlock,
  ContentWrapper,
  HomeSectionWrapper,
  SkillItem,
} from './styles';
import { SKILLS } from '@/constants';
import { Translations } from '@/i18n.config';
import { MutableRefObject } from 'react';
import { scrollToRef } from '@/utils';

interface IAboutMeSection {
  tr: Translations;
  contactRef: MutableRefObject<null>;
}

export default function AboutMeSection({ tr, contactRef }: IAboutMeSection) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const handleGoContactBlock = () => {
    scrollToRef(contactRef);
  };

  return (
    <HomeSectionWrapper id='about'>
      <Container>
        <AboutSectionContent>
          <Typography variant='lg700' sx={{ textTransform: 'uppercase' }}>
            {tr.aboutme}
          </Typography>
          <Divider />
          <Typography
            variant='lg500'
            sx={{
              maxWidth: '900px',
              textAlign: 'center',
              marginBottom: '60px',
            }}
          >
            {tr.aboutmedesc}
          </Typography>
          <ContentWrapper>
            <ContentBlock>
              <Typography variant='md700'>{tr.getme}!</Typography>
              <Box>
                <Typography>{tr.iamfront}</Typography>
                <Typography>{tr.workexp}:</Typography>
                <List>
                  <ListItem>- {tr.devprojects}</ListItem>
                  <ListItem>- {tr.projectscratchtoend}</ListItem>
                  <ListItem>- {tr.workinteam}</ListItem>
                  <ListItem>- {tr.writingcleancode}</ListItem>
                  <ListItem>- {tr.unfamiliartech}</ListItem>
                </List>
                <Typography>{tr.openttojob}</Typography>
              </Box>
              <Button
                sx={{
                  maxWidth: !isMobile ? '170px' : 'initial',
                  height: '50px',
                }}
                onClick={handleGoContactBlock}
              >
                {tr.contact}
              </Button>
            </ContentBlock>
            <ContentBlock>
              <Typography variant='md700'>{tr.myskills}</Typography>
              <Box sx={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                {SKILLS.map((skill) => {
                  return <SkillItem key={skill.name}>{skill.name}</SkillItem>;
                })}
              </Box>
            </ContentBlock>
          </ContentWrapper>
        </AboutSectionContent>
      </Container>
    </HomeSectionWrapper>
  );
}
