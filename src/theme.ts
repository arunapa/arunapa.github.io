import { Noto_Sans } from 'next/font/google';
import { createTheme, responsiveFontSizes } from '@mui/material/styles';
import { red } from '@mui/material/colors';

export const noto = Noto_Sans({
  weight: ['300', '400', '700', '900'],
  subsets: ['latin'],
  display: 'swap',
  fallback: ['Helvetica', 'Arial', 'sans-serif'],
});

// Create a theme instance.
let theme = createTheme({
  palette: {
    primary: {
      main: '#153cb4',
    },
    secondary: {
      main: '#94167f',
    },
    error: {
      main: red.A400,
    },
  },
  typography: {
    fontFamily: noto.style.fontFamily,
  },
});

theme = responsiveFontSizes(theme);

export default theme;
