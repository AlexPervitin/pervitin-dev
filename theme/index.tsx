import { experimental_extendTheme } from '@mui/material';

export const theme = experimental_extendTheme({
  components: {
    MuiButton: {
      defaultProps: {
        variant: 'contained',
      },
    },
  },
  colorSchemes: {
    light: {
      palette: {
        primary: {
          main: '#fff',
        },
      },
    },
    dark: {
      palette: {
        primary: {
          main: '#000',
        },
      },
    },
  },
});
