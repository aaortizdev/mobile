import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: { main: '#2563eb' },
    background: { default: '#f4f6f8' },
  },
  shape: { borderRadius: 12 },
  typography: { fontFamily: 'Inter, Roboto, sans-serif' },
});

export default theme;