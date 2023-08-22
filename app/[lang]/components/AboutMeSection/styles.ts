import { Box, styled } from '@mui/material';

export const HomeSectionWrapper = styled(Box)(({ theme }) => {
  return {
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
    minHeight: 'calc(100vh - 70px)',
    background: theme.palette.grey[500],
  };
});

export const AboutSectionContent = styled(Box)(() => {
  return {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  };
});

export const SkillItem = styled(Box)(({ theme }) => {
  return {
    padding: '10px 20px',
    textAlign: 'center',
    borderRadius: '5px',
    background: theme.palette.grey[600],
    fontWeight: 700,
    textTransform: 'uppercase',
  };
});

export const ContentBlock = styled(Box)(({ theme }) => {
  return {
    width: '50%',
    display: 'flex',
    flexDirection: 'column',
    gap: '40px',

    [theme.breakpoints.down('md')]: {
      width: '100%',
    },
  };
});

export const ContentWrapper = styled(Box)(({ theme }) => {
  return {
    display: 'flex',
    width: '100%',
    gap: '50px',

    [theme.breakpoints.down('md')]: {
      flexDirection: 'column',
    },
  };
});
