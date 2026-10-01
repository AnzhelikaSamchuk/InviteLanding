import { createTheme } from '@mui/material/styles';

export default createTheme(
  {
    breakpoints: {
      values: {
        xs: 320,
        sm: 480,
        md: 768,
        lg: 1024,
        xl: 1280,
      },
      step: 0,
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            color: '#ffffff',
          },
          outlined: {
            padding: '12px 24px',
            height: '48px',
            borderRadius: '12px',
            border: '2px solid #16BB76',
            fontWeight: 600,
            fontSize: '1rem',
            lineHeight: '24px',
            letterSpacing: '0.01rem',
            color: '#16BB76',
            '&:hover': {
              backgroundColor: '#16BB76',
              color: '#ffffff',
              border: '2px solid #16BB76',
            },
            '&:active': {
              backgroundColor: '#05A364',
              color: '#ffffff',
            },
          },
          contained: {
            padding: '12px 32px',
            height: '56px',
            borderRadius: '16px',
            boxShadow: '0 20px 15px -12px rgba(22, 187, 118, 0.2)',
            '&:hover': {
              backgroundColor: '#18D184',
              boxShadow: '0 24px 20px -12px rgba(22, 187, 118, 0.3)',
            },
            '&:active': {
              backgroundColor: '#05A364',
              boxShadow: '7px 13px 15px -5px rgba(22, 187, 118, 0.2)',
            },
          },
          text: {
            color: '#16BB76',
            '&:hover': {
              color: '#05A364',
              backgroundColor: '#ffffff',
            },
            '&:active': {
              color: '#05A364',
            },
          },
        },
      },
    },
    typography: {
      htmlFontSize: 16,
      fontFamily: ['Montserrat ', 'sans-serif'].join(','),
      fontWeightRegular: 400,
      //h0-design
      h1: {
        fontSize: '2.75rem',
        lineHeight: '56px',
        fontWeight: 700,
      },
      //h1-design
      h2: {
        fontSize: '2.25rem',
        lineHeight: '48px',
        fontWeight: 700,
      },
      //h2-design
      h3: {
        fontSize: '1.5rem',
        lineHeight: '32px',
        fontWeight: 700,
      },
      h4: {
        fontSize: '1.25rem',
        lineHeight: '28px',
        fontWeight: 600,
      },
      //smallText-design
      subtitle1: {
        fontSize: '0.875rem',
        fontWeight: 400,
        lineHeight: '20px',
      },
      //TAB-design
      subtitle2: {
        fontSize: '0.875rem',
        fontWeight: 500,
        lineHeight: '40px',
      },
      //body-design
      body1: {
        fontSize: '1rem',
        lineHeight: '28px',
        fontWeight: 500,
      },
      //button-design
      button: {
        fontSize: '1.125rem',
        fontWeight: 700,
        lineHeight: '32px',
        textTransform: 'none',
      },
    },
    palette: {
      common: {
        white: '#ffffff',
        black: '#303443',
      },
      primary: {
        main: '#16BB76',
        dark: '#05A364',
      },
      error: {
        main: '#FA4D4D',
      },
      success: {
        main: '#16BB76',
      },
      grey: {
        100: '#585981',
        200: '#8A8BA7',
        300: '#BCBDCD',
        400: '#DEDEE6',
        500: '#F6F7FC',
        600: '#030303',
        700: '#DCDCEB',
      },
    },
  },
  {
    section: {
      background: '#F2F2F2',
    },
    gradient: {
      first: '#16BB76',
      second: '#1C6A48',
    },
    speakersTag: {
      background: '#33aa3380',
    },
    letterSpacing: {
      letterSpacingGeneral: '0.02rem',
      letterSpacingTab: '0.2rem',
    },
  }
);
