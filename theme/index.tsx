import { experimental_extendTheme } from '@mui/material';

export const theme = experimental_extendTheme({
  components: {
    MuiButton: {
      defaultProps: {
        variant: 'contained',
      },
      variants: [
        {
          props: {
            variant: 'contained',
          },
          style: {
            background: '#7843e9',
            borderRadius: '5px',
            height: '60px',
            fontSize: '20px',
            lineHeight: '30px',
            fontWeight: '700',
            width: '100%',
            color: '#fff',
            textTransform: 'uppercase',
            ':hover': {
              background: '#7843e9',
            },
          },
        },
      ],
    },
    MuiSelect: {
      variants: [
        {
          props: {
            variant: 'standard',
          },
          style: {
            maxWidth: '120px',
            ':before, :after': {
              display: 'none',
            },
            svg: {
              minWidth: '20px !important',
              top: 'initial',
            },
            '.MuiSelect-select': {
              display: 'flex',
              gap: '8px',
              padding: '0 24px 0 0 !important',
              minWidth: 'initial !important',
              '&:focus': {
                backgroundColor: 'transparent',
              },
            },
          },
        },
      ],
    },
    MuiContainer: {
      styleOverrides: {
        root: {
          '&.MuiContainer-root': {
            width: '100%',
            maxWidth: '1440px',
            margin: 0,
            padding: '32px 50px',
          },
        },
      },
    },
    MuiDivider: {
      defaultProps: {
        variant: 'middle',
      },
      variants: [
        {
          props: {
            variant: 'middle',
          },
          style: {
            margin: '20px auto',
            borderRightWidth: '30px',
            borderBottomWidth: '5px',
            borderRadius: '5px',
            borderColor: '#7843e9',
          },
        },
      ],
    },
    MuiTextField: {
      defaultProps: {
        variant: 'filled',
      },
    },
  },
  colorSchemes: {
    light: {
      palette: {
        primary: {
          main: '#000',
        },
        background: {
          default: '#fff',
        },
        purple: {
          main: '#7843e9',
        },
        black: {
          main: '#000',
        },
        white: {
          main: '#fff',
        },
        grey: {
          '700': 'rgb(238, 242, 250)',
          '600': 'rgba(153,153,153,.2)',
          '500': '#fafafa',
          '400':
            'linear-gradient(to right,rgba(245,245,245,.8),rgba(245,245,245,.8))',
          '300': '#e5e5e5',
        },
      },
    },
    dark: {
      palette: {
        primary: {
          main: '#fff',
        },
        background: { default: '#000' },
        purple: {
          main: '#7843e9',
        },
        black: {
          main: '#000',
        },
        white: {
          main: '#fff',
        },
        grey: {
          '700': 'rgb(238, 242, 250)',
          '600': '#757575',
          '500': '#333',
          '400': '#121212',
          '300': '#1A1A1A',
        },
      },
    },
  },
  typography: {
    allVariants: {
      WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
    },
    sm700: {
      fontSize: '18px',
      fontWeight: 700,
      lineHeight: '28px',
    },
    md500: {
      fontSize: '14px',
      fontWeight: 500,
      lineHeight: '18px',
    },
    md700: {
      fontSize: '28px',
      fontWeight: 700,
      lineHeight: '42px',
    },
    lg500: {
      fontSize: '22px',
      fontWeight: 500,
      lineHeight: '36px',
    },
    lg700: {
      fontSize: '40px',
      fontWeight: 700,
      lineHeight: '60px',
    },
    lg800: {
      fontSize: '60px',
      fontWeight: 800,
      lineHeight: '90px',
    },
  },
  breakpoints: {
    values: {
      xl: 1920,
      lg: 1440,
      md: 960,
      sm: 480,
      xs: 320,
    },
  },
});

declare module '@mui/material/styles' {
  interface TypographyVariants {
    sm700: React.CSSProperties;
  }

  // allow configuration using `createTheme`
  interface TypographyVariantsOptions {
    sm700?: React.CSSProperties;
  }

  interface TypographyVariants {
    md500: React.CSSProperties;
  }

  // allow configuration using `createTheme`
  interface TypographyVariantsOptions {
    md500?: React.CSSProperties;
  }
  interface TypographyVariants {
    md700: React.CSSProperties;
  }

  // allow configuration using `createTheme`
  interface TypographyVariantsOptions {
    md700?: React.CSSProperties;
  }

  interface TypographyVariants {
    lg500: React.CSSProperties;
  }

  // allow configuration using `createTheme`
  interface TypographyVariantsOptions {
    lg500?: React.CSSProperties;
  }

  interface TypographyVariants {
    lg700: React.CSSProperties;
  }

  // allow configuration using `createTheme`
  interface TypographyVariantsOptions {
    lg700?: React.CSSProperties;
  }
  interface TypographyVariants {
    lg800: React.CSSProperties;
  }

  // allow configuration using `createTheme`
  interface TypographyVariantsOptions {
    lg800?: React.CSSProperties;
  }
}

// Update the Typography's variant prop options
declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    sm700: true;
  }

  interface TypographyPropsVariantOverrides {
    md500: true;
  }
  interface TypographyPropsVariantOverrides {
    md700: true;
  }

  interface TypographyPropsVariantOverrides {
    lg500: true;
  }

  interface TypographyPropsVariantOverrides {
    lg700: true;
  }

  interface TypographyPropsVariantOverrides {
    lg800: true;
  }
}

declare module '@mui/material/styles' {
  interface Palette {
    purple: Palette['primary'];
  }

  interface PaletteOptions {
    purple: PaletteOptions['primary'];
  }

  interface Palette {
    black: Palette['primary'];
  }

  interface PaletteOptions {
    black: PaletteOptions['primary'];
  }

  interface Palette {
    white: Palette['primary'];
  }

  interface PaletteOptions {
    white: PaletteOptions['primary'];
  }
}
