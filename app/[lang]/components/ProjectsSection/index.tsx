'use client';

import { Button, Divider, Stack, Typography } from '@mui/material';
import {
  AboutProjectBlock,
  ProjectItem,
  ProjectSectionContent,
  ProjectsSectionWrapper,
  SliderBlock,
} from './styles';
import { PROJECT_DATA } from '@/constants';
import ProjectSlider from '../Sliders/ProjectSlider';
import { Translations } from '@/i18n.config';
import { MutableRefObject } from 'react';
import { CustomContainer } from '../HomeSections/styles';

interface IProjectSections {
  tr: Translations;
  projectRef: MutableRefObject<null>;
}

export default function ProjectSections({ tr, projectRef }: IProjectSections) {
  const projectData = PROJECT_DATA(tr);

  return (
    <ProjectsSectionWrapper ref={projectRef} id='projects'>
      <CustomContainer>
        <ProjectSectionContent>
          <Typography variant='lg700'>{tr.projects}</Typography>
          <Divider />
          <Typography
            variant='lg500'
            sx={{
              maxWidth: '900px',
              textAlign: 'center',
              marginBottom: '60px',
            }}
          >
            {tr.aboutmyprojects}
          </Typography>
          <Stack sx={{ gap: '40px' }}>
            {projectData.map((project) => {
              return (
                <ProjectItem key={project.id}>
                  <SliderBlock>
                    <ProjectSlider images={project.images} />
                  </SliderBlock>
                  <AboutProjectBlock>
                    <Typography variant='md700'>{project.title}</Typography>
                    <Typography sx={{ marginBottom: 'auto' }}>
                      {project.description}
                    </Typography>
                    <Button sx={{ width: '260px' }} disabled>
                      {tr.details}
                    </Button>
                  </AboutProjectBlock>
                </ProjectItem>
              );
            })}
          </Stack>
        </ProjectSectionContent>
      </CustomContainer>
    </ProjectsSectionWrapper>
  );
}
