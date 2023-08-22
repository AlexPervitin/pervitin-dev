import { Box, styled } from '@mui/material';

export const FooterWrapper = styled(Box)(({ theme }) => {
  return {
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
    padding: '0 16px',
    borderTop: `1px solid rgb(238, 242, 250)`,
    background: theme.palette.black.main,
    color: theme.palette.white.main,
  };
});

export const FooterInner = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  maxWidth: '1440px',
  padding: '40px 0',
});

export const ContentBlock = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  gap: '30px',
});

export const Copyright = styled(Box)(({ theme }) => {
  return {
    display: 'flex',
    justifyContent: 'center',
    borderTop: `1px solid ${theme.palette.grey[700]}`,
    paddingTop: '20px',
    marginTop: '60px',
  };
});

export const ContentWrapper = styled(Box)(({ theme }) => {
  return {
    display: 'flex',
    justifyContent: 'space-between',
    gap: '30px',

    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
    },
  };
});
