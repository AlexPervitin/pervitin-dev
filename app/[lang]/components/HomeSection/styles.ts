import { Box, styled } from '@mui/material';

export const HomeSectionWrapper = styled(Box)(({ theme }) => {
  return {
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
    minHeight: '100vh',
    background: theme.palette.grey[400],
  };
});

export const HomeSectionContent = styled(Box)(() => {
  return {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  };
});
