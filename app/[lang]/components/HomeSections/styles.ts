import { Container, styled } from '@mui/material';

export const CustomContainer = styled(Container)(({ theme }) => {
  return {
    [theme.breakpoints.down('sm')]: {
      padding: '16px 24px !important',
    },
  };
});
