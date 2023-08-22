import { Box, styled } from '@mui/material';

export const ProjectsSectionWrapper = styled(Box)(({ theme }) => {
  return {
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
    minHeight: 'calc(100vh - 70px)',
    background: theme.palette.grey[300],
  };
});

export const ProjectSectionContent = styled(Box)(() => {
  return {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  };
});

export const ProjectItem = styled(Box)(({ theme }) => {
  return {
    display: 'flex',
    gap: '30px',
    width: '100%',

    [theme.breakpoints.down('md')]: {
      flexDirection: 'column',
    },
  };
});

export const SliderBlock = styled(Box)(({ theme }) => {
  return {
    width: '50%',

    [theme.breakpoints.down('md')]: {
      width: '100%',
    },
  };
});

export const AboutProjectBlock = styled(Box)(({ theme }) => {
  return {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '30px',
    width: '50%',

    [theme.breakpoints.down('md')]: {
      width: '100%',
    },
  };
});
