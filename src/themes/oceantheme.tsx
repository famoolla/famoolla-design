import { createTheme } from '@mui/material/styles';

// Extend the Theme type to include 'custom'
declare module '@mui/material/styles' {
  interface Theme {
    custom?: {
      gradients?: Record<string, string>;
      animations?: Record<string, string>;
      breakpoints?: Record<string, string>;
      keyframes?: Record<string, any>;
    };
  }
  interface ThemeOptions {
    custom?: {
      gradients?: Record<string, string>;
      animations?: Record<string, string>;
      breakpoints?: Record<string, string>;
      keyframes?: Record<string, any>;
    };
  }
}

const oceanTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#0369a1',
      light: '#0ea5e9',
      dark: '#075985',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#06b6d4',
      light: '#0891b2',
      dark: '#0e7490',
      contrastText: '#ffffff',
    },
    background: {
      default: '#f0f9ff',
      paper: 'rgba(255, 255, 255, 0.9)',
    },
    // surface property removed because it is not part of PaletteOptions
    text: {
      primary: '#1e293b',
      secondary: '#64748b',
    },
    action: {
      hover: 'rgba(14, 165, 233, 0.04)',
      selected: 'rgba(14, 165, 233, 0.08)',
      disabled: 'rgba(100, 116, 139, 0.3)',
      disabledBackground: 'rgba(100, 116, 139, 0.12)',
    },
    divider: 'rgba(14, 165, 233, 0.1)',
    success: {
      main: '#059669',
      light: '#10b981',
      dark: '#047857',
      contrastText: '#ffffff',
    },
    warning: {
      main: '#f59e0b',
      light: '#fbbf24',
      dark: '#d97706',
      contrastText: '#ffffff',
    },
    error: {
      main: '#dc2626',
      light: '#ef4444',
      dark: '#b91c1c',
      contrastText: '#ffffff',
    },
    info: {
      main: '#3b82f6',
      light: '#60a5fa',
      dark: '#2563eb',
      contrastText: '#ffffff',
    },
    // Custom colors from the Ocean theme
  },
  typography: {
    fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
    h1: {
      fontSize: '3rem',
      fontWeight: 700,
      lineHeight: 1.2,
      letterSpacing: '-0.02em',
      background: 'linear-gradient(135deg, #0369a1 0%, #075985 100%)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text',
    },
    h2: {
      fontSize: '1.4rem',
      fontWeight: 700,
      color: '#1e293b',
      lineHeight: 1.3,
    },
    h3: {
      fontSize: '1.2rem',
      fontWeight: 600,
      color: '#1e293b',
      lineHeight: 1.4,
    },
    h4: {
      fontSize: '1.1rem',
      fontWeight: 700,
      color: '#1e293b',
      lineHeight: 1.4,
    },
    h5: {
      fontSize: '0.9rem',
      fontWeight: 600,
      color: '#64748b',
      textTransform: 'uppercase',
      letterSpacing: '1px',
      lineHeight: 1.5,
    },
    h6: {
      fontSize: '0.85rem',
      fontWeight: 500,
      color: '#64748b',
      lineHeight: 1.5,
    },
    body1: {
      fontSize: '0.95rem',
      fontWeight: 400,
      color: '#1e293b',
      lineHeight: 1.6,
    },
    body2: {
      fontSize: '0.85rem',
      fontWeight: 400,
      color: '#64748b',
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
      color: '#64748b',
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
    '0 2px 8px rgba(14, 165, 233, 0.05)',
    '0 4px 12px rgba(14, 165, 233, 0.08)',
    '0 6px 16px rgba(14, 165, 233, 0.1)',
    '0 8px 20px rgba(14, 165, 233, 0.12)',
    '0 10px 24px rgba(14, 165, 233, 0.15)',
    '0 12px 28px rgba(14, 165, 233, 0.18)',
    '0 14px 32px rgba(14, 165, 233, 0.2)',
    '0 16px 36px rgba(14, 165, 233, 0.22)',
    '0 18px 40px rgba(14, 165, 233, 0.24)',
    '0 20px 44px rgba(14, 165, 233, 0.26)',
    '0 22px 48px rgba(14, 165, 233, 0.28)',
    '0 24px 52px rgba(14, 165, 233, 0.3)',
    '0 26px 56px rgba(14, 165, 233, 0.32)',
    '0 28px 60px rgba(14, 165, 233, 0.34)',
    '0 30px 64px rgba(14, 165, 233, 0.36)',
    '0 32px 68px rgba(14, 165, 233, 0.38)',
    '0 34px 72px rgba(14, 165, 233, 0.4)',
    '0 36px 76px rgba(14, 165, 233, 0.42)',
    '0 38px 80px rgba(14, 165, 233, 0.44)',
    '0 40px 84px rgba(14, 165, 233, 0.46)',
    '0 42px 88px rgba(14, 165, 233, 0.48)',
    '0 44px 92px rgba(14, 165, 233, 0.5)',
    '0 46px 96px rgba(14, 165, 233, 0.52)',
    '0 48px 100px rgba(14, 165, 233, 0.54)',
  ],
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          background: 'linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%)',
          minHeight: '100vh',
        },
        '*::-webkit-scrollbar': {
          width: '8px',
        },
        '*::-webkit-scrollbar-track': {
          background: 'rgba(0, 0, 0, 0.05)',
          borderRadius: '4px',
        },
        '*::-webkit-scrollbar-thumb': {
          background: 'rgba(0, 0, 0, 0.2)',
          borderRadius: '4px',
        },
        '*::-webkit-scrollbar-thumb:hover': {
          background: 'rgba(0, 0, 0, 0.3)',
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
          background: 'linear-gradient(135deg, #0369a1, #075985)',
          boxShadow: '0 8px 24px rgba(3, 105, 161, 0.4)',
          '&:hover': {
            background: 'linear-gradient(135deg, #075985, #0c4a6e)',
            boxShadow: '0 12px 32px rgba(3, 105, 161, 0.6)',
          },
        },
        outlined: {
          borderColor: 'rgba(14, 165, 233, 0.2)',
          '&:hover': {
            borderColor: '#0369a1',
            background: 'rgba(14, 165, 233, 0.04)',
          },
        },
        text: {
          '&:hover': {
            background: 'rgba(14, 165, 233, 0.04)',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          background: 'rgba(255, 255, 255, 0.9)',
          backdropFilter: 'blur(20px)',
          border: '1px solid rgba(14, 165, 233, 0.1)',
          borderRadius: 20,
          boxShadow: '0 10px 40px rgba(0, 0, 0, 0.06)',
          transition: 'all 0.3s ease',
          '&:hover': {
            transform: 'translateY(-8px)',
            boxShadow: '0 20px 60px rgba(0, 0, 0, 0.12)',
          },
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '4px',
            background: 'linear-gradient(90deg, #3b82f6, #8b5cf6, #06b6d4)',
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          background: 'rgba(255, 255, 255, 0.9)',
          backdropFilter: 'blur(20px)',
          border: '1px solid rgba(14, 165, 233, 0.1)',
        },
        elevation1: {
          boxShadow: '0 2px 8px rgba(14, 165, 233, 0.08)',
        },
        elevation2: {
          boxShadow: '0 4px 12px rgba(14, 165, 233, 0.12)',
        },
        elevation3: {
          boxShadow: '0 8px 24px rgba(14, 165, 233, 0.16)',
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
          background: '#dbeafe',
          color: '#1e40af',
        },
        colorSecondary: {
          background: '#dcfce7',
          color: '#166534',
        },
        colorWarning: {
          background: '#fef3c7',
          color: '#92400e',
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          padding: '10px 20px',
          borderRadius: 10,
          background: 'transparent',
          color: '#64748b',
          fontSize: '0.9rem',
          fontWeight: 500,
          textTransform: 'none',
          transition: 'all 0.2s ease',
          minHeight: 'auto',
          '&.Mui-selected': {
            background: '#0369a1',
            color: 'white',
            boxShadow: '0 4px 12px rgba(3, 105, 161, 0.3)',
          },
        },
      },
    },
    MuiTabs: {
      styleOverrides: {
        root: {
          background: 'rgba(0, 0, 0, 0.03)',
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
            background: 'rgba(255, 255, 255, 0.8)',
            '& fieldset': {
              borderColor: 'rgba(14, 165, 233, 0.2)',
            },
            '&:hover fieldset': {
              borderColor: '#0369a1',
            },
            '&.Mui-focused fieldset': {
              borderColor: '#0369a1',
              boxShadow: '0 0 0 3px rgba(3, 105, 161, 0.1)',
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
            background: 'rgba(14, 165, 233, 0.08)',
            transform: 'scale(1.05)',
          },
        },
      },
    },
    MuiFab: {
      styleOverrides: {
        root: {
          background: 'linear-gradient(135deg, #0369a1, #075985)',
          boxShadow: '0 8px 24px rgba(3, 105, 161, 0.4)',
          '&:hover': {
            background: 'linear-gradient(135deg, #075985, #0c4a6e)',
            transform: 'scale(1.1)',
            boxShadow: '0 12px 32px rgba(3, 105, 161, 0.6)',
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
            background: 'rgba(14, 165, 233, 0.04)',
            transform: 'translateX(5px)',
          },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          background: 'linear-gradient(135deg, #0369a1 0%, #075985 100%)',
          boxShadow: '0 8px 32px rgba(3, 105, 161, 0.3)',
          backdropFilter: 'blur(20px)',
        },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        paper: {
          background: 'rgba(255, 255, 255, 0.95)',
          backdropFilter: 'blur(20px)',
          borderRight: '1px solid rgba(14, 165, 233, 0.1)',
        },
      },
    },
  },
  // Custom theme extensions
  custom: {
    gradients: {
      primary: 'linear-gradient(135deg, #0369a1 0%, #075985 100%)',
      secondary: 'linear-gradient(135deg, #0ea5e9, #0284c7)',
      surface: 'linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%)',
      card: 'linear-gradient(135deg, #06b6d4, #0891b2)',
      warning: 'linear-gradient(135deg, #f59e0b, #d97706)',
      info: 'linear-gradient(135deg, #3b82f6, #2563eb)',
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

export default oceanTheme;
