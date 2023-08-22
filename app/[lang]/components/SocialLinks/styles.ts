import { Box, styled } from '@mui/material';

interface ISocialLinksWrapper {
  aside?: string;
}

export const SocialLinksWrapper = styled(Box)<ISocialLinksWrapper>(({
  theme,
  aside,
}) => {
  return {
    display: aside === 'true' ? 'flex' : 'contents',
    position: 'fixed',
    flexDirection: 'column',
    top: '30%',
    left: 0,
    borderRadius: '0 5px 5px 0',
    background: theme.palette.black.main,

    [theme.breakpoints.down('sm')]: {
      display: aside === 'true' ? 'none' : 'contents',
    },
  };
});
