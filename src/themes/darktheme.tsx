import { createTheme } from '@mui/material/styles';
import type { ThemeOptions } from '@mui/material/styles';

const darktheme: ThemeOptions = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#60A5FA',
      light: '#93C5FD',
      dark: '#3B82F6',
      contrastText: '#1e293b',
    },
    secondary: {
      main: '#22D3EE',
      light: '#67E8F9',
      dark: '#0891B2',
      contrastText: '#1e293b',
    },
    background: {
      default: '#0f172a',
      paper: 'rgba(15, 23, 42, 0.9)',
    },
    text: {
      primary: '#f1f5f9',
      secondary: '#94a3b8',
    },
    action: {
      hover: 'rgba(96, 165, 250, 0.08)',
      selected: 'rgba(96, 165, 250, 0.12)',
      disabled: 'rgba(148, 163, 184, 0.3)',
      disabledBackground: 'rgba(148, 163, 184, 0.12)',
    },
    divider: 'rgba(96, 165, 250, 0.15)',
    success: {
      main: '#22C55E',
      light: '#4ADE80',
      dark: '#16A34A',
      contrastText: '#1e293b',
    },
    warning: {
      main: '#F59E0B',
      light: '#FBBF24',
      dark: '#D97706',
      contrastText: '#1e293b',
    },
    error: {
      main: '#EF4444',
      light: '#F87171',
      dark: '#DC2626',
      contrastText: '#ffffff',
    },
    info: {
      main: '#60A5FA',
      light: '#93C5FD',
      dark: '#3B82F6',
      contrastText: '#1e293b',
    },
  },
  typography: {
    fontFamily: "Inter, sans-serif",
    h1: {
      fontSize: '3rem',
      fontWeight: 700,
      lineHeight: 1.2,
      color: '#f1f5f9',
    },
    h2: {
      fontSize: '1.4rem',
      fontWeight: 700,
      color: '#f1f5f9',
      lineHeight: 1.3,
    },
    h3: {
      fontSize: '1.2rem',
      fontWeight: 600,
      color: '#f1f5f9',
      lineHeight: 1.4,
    },
    h4: {
      fontSize: '1.1rem',
      fontWeight: 700,
      color: '#f1f5f9',
      lineHeight: 1.4,
    },
    h5: {
      fontSize: '0.9rem',
      fontWeight: 600,
      color: '#94a3b8',
      textTransform: 'uppercase',
      letterSpacing: '1px',
      lineHeight: 1.5,
    },
    h6: {
      fontSize: '0.85rem',
      fontWeight: 500,
      color: '#94a3b8',
      lineHeight: 1.5,
    },
    body1: {
      fontSize: '0.95rem',
      fontWeight: 400,
      color: '#f1f5f9',
      lineHeight: 1.6,
    },
    body2: {
      fontSize: '0.85rem',
      fontWeight: 400,
      color: '#94a3b8',
      lineHeight: 1.5,
    },
    button: {
      fontSize: '0.95rem',
      fontWeight: 600,
      textTransform: 'none',
      letterSpacing: '0.025em',
    },
    caption: {
      fontSize: '0.75rem',
      fontWeight: 500,
      color: '#94a3b8',
      lineHeight: 1.4,
    },
    overline: {
      fontSize: '0.75rem',
      fontWeight: 600,
      textTransform: 'uppercase',
      letterSpacing: '0.5px',
      lineHeight: 1.4,
    },
  },
  shape: {
    borderRadius: 16,
  },
  spacing: 8,
  shadows: [
    'none',
    '0 2px 8px rgba(0, 0, 0, 0.3)',
    '0 4px 12px rgba(0, 0, 0, 0.35)',
    '0 6px 16px rgba(0, 0, 0, 0.4)',
    '0 8px 20px rgba(0, 0, 0, 0.45)',
    '0 10px 24px rgba(0, 0, 0, 0.5)',
    '0 12px 28px rgba(0, 0, 0, 0.55)',
    '0 14px 32px rgba(0, 0, 0, 0.6)',
    '0 16px 36px rgba(0, 0, 0, 0.65)',
    '0 18px 40px rgba(0, 0, 0, 0.7)',
    '0 20px 44px rgba(0, 0, 0, 0.75)',
    '0 22px 48px rgba(0, 0, 0, 0.8)',
    '0 24px 52px rgba(0, 0, 0, 0.85)',
    '0 26px 56px rgba(0, 0, 0, 0.9)',
    '0 28px 60px rgba(0, 0, 0, 0.95)',
    '0 30px 64px rgba(0, 0, 0, 1)',
    '0 32px 68px rgba(0, 0, 0, 1)',
    '0 34px 72px rgba(0, 0, 0, 1)',
    '0 36px 76px rgba(0, 0, 0, 1)',
    '0 38px 80px rgba(0, 0, 0, 1)',
    '0 40px 84px rgba(0, 0, 0, 1)',
    '0 42px 88px rgba(0, 0, 0, 1)',
    '0 44px 92px rgba(0, 0, 0, 1)',
    '0 46px 96px rgba(0, 0, 0, 1)',
    '0 48px 100px rgba(0, 0, 0, 1)',
  ],
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
          minHeight: '100vh',
        },
        '*::-webkit-scrollbar': {
          width: '8px',
        },
        '*::-webkit-scrollbar-track': {
          background: 'rgba(255, 255, 255, 0.05)',
          borderRadius: '4px',
        },
        '*::-webkit-scrollbar-thumb': {
          background: 'rgba(96, 165, 250, 0.3)',
          borderRadius: '4px',
        },
        '*::-webkit-scrollbar-thumb:hover': {
          background: 'rgba(96, 165, 250, 0.5)',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          padding: '12px 24px',
          fontSize: '0.95rem',
          fontWeight: 600,
          textTransform: 'none',
          transition: 'all 0.2s ease',
          '&:hover': {
            transform: 'translateY(-2px)',
          },
        },
        contained: {
          background: 'linear-gradient(135deg, #60a5fa, #3b82f6)',
          boxShadow: '0 8px 24px rgba(96, 165, 250, 0.4)',
          '&:hover': {
            background: 'linear-gradient(135deg, #3b82f6, #2563eb)',
            boxShadow: '0 12px 32px rgba(96, 165, 250, 0.6)',
          },
        },
        outlined: {
          borderColor: 'rgba(96, 165, 250, 0.3)',
          '&:hover': {
            borderColor: '#60a5fa',
            background: 'rgba(96, 165, 250, 0.08)',
          },
        },
        text: {
          '&:hover': {
            background: 'rgba(96, 165, 250, 0.08)',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          background: 'rgba(15, 23, 42, 0.95)',
          backdropFilter: 'blur(20px)',
          border: '1px solid rgba(96, 165, 250, 0.15)',
          borderRadius: 20,
          boxShadow: '0 10px 40px rgba(0, 0, 0, 0.3)',
          transition: 'all 0.3s ease',
          '&:hover': {
            transform: 'translateY(-8px)',
            boxShadow: '0 20px 60px rgba(0, 0, 0, 0.5)',
            border: '1px solid rgba(96, 165, 250, 0.25)',
          },
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '4px',
            background: 'linear-gradient(90deg, #60a5fa, #a855f7, #22d3ee)',
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          background: 'rgba(15, 23, 42, 0.95)',
          backdropFilter: 'blur(20px)',
          border: '1px solid rgba(96, 165, 250, 0.15)',
        },
        elevation1: {
          boxShadow: '0 2px 8px rgba(0, 0, 0, 0.3)',
        },
        elevation2: {
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.35)',
        },
        elevation3: {
          boxShadow: '0 8px 24px rgba(0, 0, 0, 0.4)',
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 20,
          fontSize: '0.75rem',
          fontWeight: 600,
          textTransform: 'uppercase',
          letterSpacing: '0.5px',
        },
        colorPrimary: {
          background: 'rgba(96, 165, 250, 0.2)',
          color: '#93c5fd',
        },
        colorSecondary: {
          background: 'rgba(34, 211, 238, 0.2)',
          color: '#67e8f9',
        },
        colorWarning: {
          background: 'rgba(245, 158, 11, 0.2)',
          color: '#fbbf24',
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          padding: '10px 20px',
          borderRadius: 10,
          background: 'transparent',
          color: '#94a3b8',
          fontSize: '0.9rem',
          fontWeight: 500,
          textTransform: 'none',
          transition: 'all 0.2s ease',
          minHeight: 'auto',
          '&.Mui-selected': {
            background: '#60a5fa',
            color: '#1e293b',
            boxShadow: '0 4px 12px rgba(96, 165, 250, 0.4)',
          },
        },
      },
    },
    MuiTabs: {
      styleOverrides: {
        root: {
          background: 'rgba(255, 255, 255, 0.05)',
          padding: '6px',
          borderRadius: 14,
          minHeight: 'auto',
        },
        indicator: {
          display: 'none',
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            borderRadius: 12,
            background: 'rgba(15, 23, 42, 0.8)',
            '& fieldset': {
              borderColor: 'rgba(96, 165, 250, 0.3)',
            },
            '&:hover fieldset': {
              borderColor: '#60a5fa',
            },
            '&.Mui-focused fieldset': {
              borderColor: '#60a5fa',
              boxShadow: '0 0 0 3px rgba(96, 165, 250, 0.2)',
            },
          },
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          transition: 'all 0.2s ease',
          '&:hover': {
            background: 'rgba(96, 165, 250, 0.12)',
            transform: 'scale(1.05)',
          },
        },
      },
    },
    MuiFab: {
      styleOverrides: {
        root: {
          background: 'linear-gradient(135deg, #60a5fa, #3b82f6)',
          boxShadow: '0 8px 24px rgba(96, 165, 250, 0.4)',
          '&:hover': {
            background: 'linear-gradient(135deg, #3b82f6, #2563eb)',
            transform: 'scale(1.1)',
            boxShadow: '0 12px 32px rgba(96, 165, 250, 0.6)',
          },
        },
      },
    },
    MuiListItem: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          marginBottom: 8,
          transition: 'all 0.2s ease',
          '&:hover': {
            background: 'rgba(96, 165, 250, 0.08)',
            transform: 'translateX(5px)',
          },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          background: 'linear-gradient(135deg, #1e293b 0%, #0f172a 100%)',
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.5)',
          backdropFilter: 'blur(20px)',
          borderBottom: '1px solid rgba(96, 165, 250, 0.15)',
        },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        paper: {
          background: 'rgba(15, 23, 42, 0.98)',
          backdropFilter: 'blur(20px)',
          borderRight: '1px solid rgba(96, 165, 250, 0.15)',
        },
      },
    },
  },
  // Custom theme extensions
  custom: {
    gradients: {
      primary: 'linear-gradient(135deg, #60a5fa 0%, #3b82f6 100%)',
      secondary: 'linear-gradient(135deg, #22d3ee, #0891b2)',
      surface: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
      card: 'linear-gradient(135deg, #22d3ee, #0891b2)',
      warning: 'linear-gradient(135deg, #f59e0b, #d97706)',
      info: 'linear-gradient(135deg, #60a5fa, #3b82f6)',
    },
    animations: {
      slideIn: 'slideIn 0.3s ease-out',
      pulse: 'pulse 2s ease-in-out infinite',
      float: 'float 3s ease-in-out infinite',
    },
    breakpoints: {
      mobile: '768px',
      tablet: '1024px',
      desktop: '1400px',
    },
  },
});

     export default darktheme;