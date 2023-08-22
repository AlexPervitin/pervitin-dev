import { styled } from '@mui/material';
import Link from 'next/link';

export const StyledLink = styled(Link)(({ theme }) => {
  return {
    textDecoration: 'none',
    color: theme.palette.primary.main,
  };
});
