import { Box, styled } from '@mui/material';

export const ContactSectionWrapper = styled(Box)(({ theme }) => {
  return {
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
    minHeight: 'calc(100vh - 70px)',
    background: theme.palette.grey[400],
  };
});

export const ContactSectionContent = styled(Box)(() => {
  return {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  };
});

export const ContactSectionForm = styled(Box)(({ theme }) => {
  return {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    borderRadius: '5px',
    padding: '32px',
    background: theme.palette.background.default,
    gap: '24px',
    width: '100%',
    maxWidth: '800px',
    margin: '0 auto',
  };
});
