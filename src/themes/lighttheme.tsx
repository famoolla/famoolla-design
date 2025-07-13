import { createTheme } from '@mui/material/styles';
import type { ThemeOptions } from '@mui/material/styles';

const lighttheme: ThemeOptions = createTheme({
  "palette": {
    "primary": {
      "main": "#1B5E63",
      "light": "#2E8B8B",
      "dark": "#0F4B50",
      "contrastText": "#FFFFFF"
    },
    "secondary": {
      "main": "#6B9080",
      "light": "#A8C4A2",
      "dark": "#4A6B5A",
      "contrastText": "#FFFFFF"
    },
    "error": {
      "main": "#FF6B6B",
      "light": "#FF9999",
      "dark": "#CC5555",
      "contrastText": "#FFFFFF"
    },
    "warning": {
      "main": "#DAA520",
      "light": "#E4C547",
      "dark": "#B8861A",
      "contrastText": "#FFFFFF"
    },
    "info": {
      "main": "#87CEEB",
      "light": "#B3DCF0",
      "dark": "#5BA8C7",
      "contrastText": "#000000"
    },
    "success": {
      "main": "#6B9080",
      "light": "#A8C4A2",
      "dark": "#4A6B5A",
      "contrastText": "#FFFFFF"
    },
    "text": {
      "primary": "#2C3E50",
      "secondary": "#5D6D7E",
      "disabled": "#718096"
    },
    "background": {
      "default": "#FDFCF8",
      "paper": "#FFFFFF"
    },
    "divider": "#E8EDF3",
    "action": {
      "hover": "#F7F9FC",
      "selected": "#E8EDF3",
      "disabled": "#718096"
    }
  },
  "typography": {
    "fontFamily": "Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
    "h1": {
      "fontFamily": "Playfair Display, Georgia, serif",
      "fontSize": "3rem",
      "fontWeight": 700,
      "lineHeight": 1.2,
      "color": "#2C3E50"
    },
    "h2": {
      "fontFamily": "Playfair Display, Georgia, serif",
      "fontSize": "2.25rem",
      "fontWeight": 600,
      "lineHeight": 1.3,
      "color": "#2C3E50"
    },
    "h3": {
      "fontSize": "1.5rem",
      "fontWeight": 600,
      "lineHeight": 1.4,
      "color": "#2C3E50"
    },
    "h4": {
      "fontSize": "1.25rem",
      "fontWeight": 500,
      "lineHeight": 1.4,
      "color": "#2C3E50"
    },
    "h5": {
      "fontSize": "1.125rem",
      "fontWeight": 500,
      "lineHeight": 1.4,
      "color": "#2C3E50"
    },
    "h6": {
      "fontSize": "1rem",
      "fontWeight": 500,
      "lineHeight": 1.4,
      "color": "#2C3E50"
    },
    "body1": {
      "fontSize": "1rem",
      "fontWeight": 400,
      "lineHeight": 1.6,
      "color": "#2C3E50"
    },
    "body2": {
      "fontSize": "0.875rem",
      "fontWeight": 400,
      "lineHeight": 1.5,
      "color": "#5D6D7E"
    },
    "caption": {
      "fontSize": "0.75rem",
      "fontWeight": 400,
      "lineHeight": 1.4,
      "color": "#718096"
    },
    "button": {
      "fontSize": "0.875rem",
      "fontWeight": 600,
      "textTransform": "none",
      "letterSpacing": "0.02em"
    }
  },
  "shape": {
    "borderRadius": 8
  },
  "spacing": 8,
  "components": {
    "MuiButton": {
      "styleOverrides": {
        "root": {
          "borderRadius": "8px",
          "textTransform": "none",
          "fontWeight": 600,
          "boxShadow": "0 2px 4px rgba(27, 94, 99, 0.1)",
          "transition": "all 0.2s ease-in-out"
        },
        "contained": {
          "boxShadow": "0 2px 8px rgba(27, 94, 99, 0.2)",
          "&:hover": {
            "boxShadow": "0 4px 12px rgba(27, 94, 99, 0.3)"
          }
        }
      }
    },
    "MuiCard": {
      "styleOverrides": {
        "root": {
          "borderRadius": "12px",
          "boxShadow": "0 2px 8px rgba(0, 0, 0, 0.08)",
          "border": "1px solid #E8EDF3"
        }
      }
    },
    "MuiAppBar": {
      "styleOverrides": {
        "root": {
          "boxShadow": "0 2px 4px rgba(0, 0, 0, 0.1)"
        }
      }
    },
    "MuiTextField": {
      "styleOverrides": {
        "root": {
          "& .MuiOutlinedInput-root": {
            "borderRadius": "8px"
          }
        }
      }
    }
  }
});

     export default lighttheme;