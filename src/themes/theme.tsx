import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    "colorSchemes": {
      "light": {
        "palette": {
          "primary": {
            "main": "#1976D2",
            "dark": "#1565C0",
            "contrastText": "#FFFFFF",
            // "_states": {
            //   "hover": "rgba(25, 118, 210, 0.04)",
            //   "selected": "rgba(25, 118, 210, 0.08)",
            //   "focus": "rgba(25, 118, 210, 0.12)",
            //   "focusVisible": "rgba(25, 118, 210, 0.3)",
            //   "outlinedBorder": "rgba(25, 118, 210, 0.5)"
            // }
          },
          "secondary": {
            "contrastText": "#FFFFFF",
            "main": "#9C27B0",
            // "_states": {
            //   "focusVisible": "rgba(156, 39, 176, 0.3)",
            //   "outlinedBorder": "rgba(156, 39, 176, 0.5)"
            // }
          },
          "error": {
            "contrastText": "#FFFFFF",
            "main": "#D32F2F",
            // "_states": {
            //   "focusVisible": "rgba(211, 47, 47, 0.3)",
            //   "outlinedBorder": "rgba(211, 47, 47, 0.5)"
            // }
          },
          "warning": {
            "contrastText": "#FFFFFF",
            "main": "#EF6C00",
            "dark": "#E65100",
            // "_states": {
            //   "focusVisible": "rgba(239, 108, 0, 0.3)",
            //   "outlinedBorder": "rgba(239, 108, 0, 0.5)"
            // }
          },
          "info": {
            "contrastText": "#FFFFFF",
            "main": "#0288D1",
            // "_states": {
            //   "outlinedBorder": "rgba(2, 136, 209, 0.5)"
            // }
          },
          "success": {
            "contrastText": "#FFFFFF",
            "main": "#2E7D32",
            // "_states": {
            //   "focusVisible": "rgba(46, 125, 50, 0.3)",
            //   "outlinedBorder": "rgba(46, 125, 50, 0.5)"
            // }
          },
          "text": {
            // "_states": {
            //   "focusVisible": "rgba(0, 0, 0, 0.3)"
            // },
            "primary": "rgba(0, 0, 0, 0.87)"
          },
          "common": {
            // "white_states": {
            //   "main": "#FFFFFF",
            //   "focusVisible": "rgba(255, 255, 255, 0.3)"
            // }
          },
          "action": {
            "disabledBackground": "rgba(0, 0, 0, 0.12)"
          },
        //   "_components": {
        //     "switch": {
        //       "knobFillEnabled": "#FAFAFA",
        //       "slideFill": "#000000"
        //     }
        //   }
        }
      },
      "dark": {
        "palette": {
          "primary": {
            "contrastText": "rgba(0, 0, 0, 0.87)",
            "main": "#90CAF9"
          },
          "secondary": {
            "contrastText": "rgba(0, 0, 0, 0.87)",
            "main": "#CE93D8",
            // "_states": {
            //   "focusVisible": "rgba(206, 147, 216, 0.3)",
            //   "outlinedBorder": "rgba(206, 147, 216, 0.5)"
            // }
          },
          "error": {
            "contrastText": "#FFFFFF",
            "main": "#F44336",
            // "_states": {
            //   "focusVisible": "rgba(244, 67, 54, 0.3)",
            //   "outlinedBorder": "rgba(244, 67, 54, 0.5)"
            // }
          },
          "warning": {
            "contrastText": "rgba(0, 0, 0, 0.87)",
            "main": "#FFA726",
            "dark": "#F57C00",
            // "_states": {
            //   "focusVisible": "rgba(255, 167, 38, 0.3)",
            //   "outlinedBorder": "rgba(255, 167, 38, 0.5)"
            // }
          },
          "info": {
            "contrastText": "rgba(0, 0, 0, 0.87)",
            "main": "#29B6F6",
            // "_states": {
            //   "outlinedBorder": "rgba(41, 182, 246, 0.5)"
            // }
          },
          "success": {
            "contrastText": "rgba(0, 0, 0, 0.87)",
            "main": "#66BB6A",
            // "_states": {
            //   "focusVisible": "rgba(102, 187, 106, 0.3)",
            //   "outlinedBorder": "rgba(102, 187, 106, 0.5)"
            // }
          },
          "text": {
            // "_states": {
            //   "focusVisible": "rgba(255, 255, 255, 0.3)"
            // },
            "primary": "#FFFFFF"
          },
          "common": {
            // "white_states": {
            //   "main": "#FFFFFF",
            //   "focusVisible": "rgba(255, 255, 255, 0.3)"
            // }
          },
          "action": {
            "disabledBackground": "rgba(255, 255, 255, 0.12)"
          },
        //   "_components": {
        //     "switch": {
        //       "knobFillEnabled": "#E0E0E0",
        //       "slideFill": "rgba(255, 255, 255, 0.38)"
        //     }
        //   }
        }
      }
    },
    "components": {
      "MuiButton": {
        "styleOverrides": {
          "root": {
            "&.MuiButton-sizeLarge.MuiButton-containedPrimary": {
              "&:not(.Mui-disabled):not(.Mui-focusVisible):not(:hover)": {
                "& .MuiTouchRipple-root": {
                  "width": "91px",
                  "height": "42px",
                  "opacity": "0.3",
                  "background": "var(--mui-palette-primary-contrastText)",
                  "padding": "0",
                  "borderRadius": "0",
                  "boxShadow": "none"
                },
                "color": "var(--mui-palette-primary-contrastText)",
                "fontFeatureSettings": "'liga' off, 'clig' off",
                "fontFamily": "Roboto, Helvetica, Arial, sans-serif",
                "fontSize": "0.9375rem",
                "fontStyle": "normal",
                "fontWeight": "500",
                "lineHeight": "26px /* 173.333% */",
                "letterSpacing": "0.46px",
                "textTransform": "uppercase",
                "padding": "8px 22px",
                "borderRadius": "var(--mui-shape-borderRadius)",
                "background": "var(--mui-palette-primary-main)",
                "boxShadow": "var(--mui-shadows-6)",
                "opacity": "1"
              }
            },
            "&.MuiButton-sizeLarge.MuiButton-containedInherit": {
              "&:not(.Mui-disabled):not(.Mui-focusVisible):not(:hover)": {
                "& .MuiTouchRipple-root": {
                  "width": "91px",
                  "height": "42px",
                  "background": "var(--mui-palette-text-_states-focusVisible)",
                  "padding": "0",
                  "opacity": "1",
                  "borderRadius": "0",
                  "boxShadow": "none"
                },
                "color": "var(--mui-palette-text-primary)",
                "fontFeatureSettings": "'liga' off, 'clig' off",
                "fontFamily": "Roboto, Helvetica, Arial, sans-serif",
                "fontSize": "0.9375rem",
                "fontStyle": "normal",
                "fontWeight": "500",
                "lineHeight": "26px /* 173.333% */",
                "letterSpacing": "0.46px",
                "textTransform": "uppercase",
                "padding": "8px 22px",
                "borderRadius": "var(--mui-shape-borderRadius)",
                "background": "#E0E0E0",
                "boxShadow": "var(--mui-shadows-6)",
                "opacity": "1"
              }
            },
            "&.MuiButton-sizeLarge.MuiButton-containedInherit (white)": {
              "&:not(.Mui-disabled):not(.Mui-focusVisible):not(:hover)": {
                "& .MuiTouchRipple-root": {
                  "width": "91px",
                  "height": "42px",
                  "opacity": "0.3",
                  "background": "var(--mui-palette-common-white_states-main)",
                  "padding": "0",
                  "borderRadius": "0",
                  "boxShadow": "none"
                },
                "color": "var(--mui-palette-common-white_states-main)",
                "fontFeatureSettings": "'liga' off, 'clig' off",
                "fontFamily": "Roboto, Helvetica, Arial, sans-serif",
                "fontSize": "0.9375rem",
                "fontStyle": "normal",
                "fontWeight": "500",
                "lineHeight": "26px /* 173.333% */",
                "letterSpacing": "0.46px",
                "textTransform": "uppercase",
                "padding": "8px 22px",
                "borderRadius": "var(--mui-shape-borderRadius)",
                "background": "#E0E0E0",
                "boxShadow": "var(--mui-shadows-6)",
                "opacity": "1"
              }
            },
            "&.MuiButton-sizeLarge.MuiButton-containedSecondary": {
              "&:not(.Mui-disabled):not(.Mui-focusVisible):not(:hover)": {
                "& .MuiTouchRipple-root": {
                  "width": "91px",
                  "height": "42px",
                  "opacity": "0.3",
                  "background": "var(--mui-palette-secondary-contrastText)",
                  "padding": "0",
                  "borderRadius": "0",
                  "boxShadow": "none"
                },
                "color": "var(--mui-palette-secondary-contrastText)",
                "fontFeatureSettings": "'liga' off, 'clig' off",
                "fontFamily": "Roboto, Helvetica, Arial, sans-serif",
                "fontSize": "0.9375rem",
                "fontStyle": "normal",
                "fontWeight": "500",
                "lineHeight": "26px /* 173.333% */",
                "letterSpacing": "0.46px",
                "textTransform": "uppercase",
                "padding": "8px 22px",
                "borderRadius": "var(--mui-shape-borderRadius)",
                "background": "var(--mui-palette-secondary-main)",
                "boxShadow": "var(--mui-shadows-6)",
                "opacity": "1"
              }
            },
            "&.MuiButton-sizeLarge.MuiButton-containedError": {
              "&:not(.Mui-disabled):not(.Mui-focusVisible):not(:hover)": {
                "& .MuiTouchRipple-root": {
                  "width": "91px",
                  "height": "42px",
                  "opacity": "0.3",
                  "background": "var(--mui-palette-error-contrastText)",
                  "padding": "0",
                  "borderRadius": "0",
                  "boxShadow": "none"
                },
                "color": "var(--mui-palette-error-contrastText)",
                "fontFeatureSettings": "'liga' off, 'clig' off",
                "fontFamily": "Roboto, Helvetica, Arial, sans-serif",
                "fontSize": "0.9375rem",
                "fontStyle": "normal",
                "fontWeight": "500",
                "lineHeight": "26px /* 173.333% */",
                "letterSpacing": "0.46px",
                "textTransform": "uppercase",
                "padding": "8px 22px",
                "borderRadius": "var(--mui-shape-borderRadius)",
                "background": "var(--mui-palette-error-main)",
                "boxShadow": "var(--mui-shadows-6)",
                "opacity": "1"
              }
            },
            "&.MuiButton-sizeLarge.MuiButton-containedWarning": {
              "padding": "8px 22px",
              "borderRadius": "var(--mui-shape-borderRadius)",
              "opacity": "1",
              "&:not(.Mui-disabled):not(.Mui-focusVisible):not(:hover)": {
                "& .MuiTouchRipple-root": {
                  "width": "91px",
                  "height": "42px",
                  "opacity": "0.3",
                  "background": "var(--mui-palette-warning-contrastText)",
                  "padding": "0",
                  "borderRadius": "0",
                  "boxShadow": "none"
                },
                "color": "var(--mui-palette-warning-contrastText)",
                "fontFeatureSettings": "'liga' off, 'clig' off",
                "fontFamily": "Roboto, Helvetica, Arial, sans-serif",
                "fontSize": "0.9375rem",
                "fontStyle": "normal",
                "fontWeight": "500",
                "lineHeight": "26px /* 173.333% */",
                "letterSpacing": "0.46px",
                "textTransform": "uppercase",
                "background": "var(--mui-palette-warning-main)",
                "boxShadow": "var(--mui-shadows-6)"
              },
              "&:not(.Mui-disabled):not(.Mui-focusVisible):hover": {
                "background": "var(--mui-palette-warning-dark)",
                "boxShadow": "var(--mui-shadows-4)"
              }
            },
            "&.MuiButton-sizeLarge.MuiButton-containedInfo": {
              "&:not(.Mui-disabled):not(.Mui-focusVisible):not(:hover)": {
                "& .MuiTouchRipple-root": {
                  "width": "91px",
                  "height": "42px",
                  "opacity": "0.3",
                  "background": "var(--mui-palette-info-contrastText)",
                  "padding": "0",
                  "borderRadius": "0",
                  "boxShadow": "none"
                },
                "color": "var(--mui-palette-info-contrastText)",
                "fontFeatureSettings": "'liga' off, 'clig' off",
                "fontFamily": "Roboto, Helvetica, Arial, sans-serif",
                "fontSize": "0.9375rem",
                "fontStyle": "normal",
                "fontWeight": "500",
                "lineHeight": "26px /* 173.333% */",
                "letterSpacing": "0.46px",
                "textTransform": "uppercase",
                "padding": "8px 22px",
                "borderRadius": "var(--mui-shape-borderRadius)",
                "background": "var(--mui-palette-info-main)",
                "boxShadow": "var(--mui-shadows-6)",
                "opacity": "1"
              }
            },
            "&.MuiButton-sizeLarge.MuiButton-containedSuccess": {
              "&:not(.Mui-disabled):not(.Mui-focusVisible):not(:hover)": {
                "& .MuiTouchRipple-root": {
                  "width": "91px",
                  "height": "42px",
                  "opacity": "0.3",
                  "background": "var(--mui-palette-success-contrastText)",
                  "padding": "0",
                  "borderRadius": "0",
                  "boxShadow": "none"
                },
                "color": "var(--mui-palette-success-contrastText)",
                "fontFeatureSettings": "'liga' off, 'clig' off",
                "fontFamily": "Roboto, Helvetica, Arial, sans-serif",
                "fontSize": "0.9375rem",
                "fontStyle": "normal",
                "fontWeight": "500",
                "lineHeight": "26px /* 173.333% */",
                "letterSpacing": "0.46px",
                "textTransform": "uppercase",
                "padding": "8px 22px",
                "borderRadius": "var(--mui-shape-borderRadius)",
                "background": "var(--mui-palette-success-main)",
                "boxShadow": "var(--mui-shadows-6)",
                "opacity": "1"
              }
            },
            "&.MuiButton-sizeMedium.MuiButton-containedPrimary": {
              "&:not(.Mui-disabled):not(.Mui-focusVisible):not(:hover)": {
                "& .MuiTouchRipple-root": {
                  "width": "75px",
                  "height": "36px",
                  "opacity": "0.3",
                  "background": "var(--mui-palette-primary-contrastText)",
                  "padding": "0",
                  "borderRadius": "0",
                  "boxShadow": "none"
                },
                "color": "var(--mui-palette-primary-contrastText)",
                "fontFamily": "Roboto, Helvetica, Arial, sans-serif",
                "fontSize": "0.875rem",
                "fontStyle": "normal",
                "fontWeight": "500",
                "lineHeight": "24px /* 171.429% */",
                "letterSpacing": "0.4px",
                "textTransform": "uppercase",
                "padding": "6px 16px",
                "borderRadius": "var(--mui-shape-borderRadius)",
                "background": "var(--mui-palette-primary-main)",
                "boxShadow": "var(--mui-shadows-6)",
                "opacity": "1"
              }
            },
            "&.MuiButton-sizeMedium.MuiButton-containedInherit": {
              "&:not(.Mui-disabled):not(.Mui-focusVisible):not(:hover)": {
                "& .MuiTouchRipple-root": {
                  "width": "75px",
                  "height": "36px",
                  "background": "var(--mui-palette-text-_states-focusVisible)",
                  "padding": "0",
                  "opacity": "1",
                  "borderRadius": "0",
                  "boxShadow": "none"
                },
                "color": "var(--mui-palette-text-primary)",
                "fontFamily": "Roboto, Helvetica, Arial, sans-serif",
                "fontSize": "0.875rem",
                "fontStyle": "normal",
                "fontWeight": "500",
                "lineHeight": "24px /* 171.429% */",
                "letterSpacing": "0.4px",
                "textTransform": "uppercase",
                "padding": "6px 16px",
                "borderRadius": "var(--mui-shape-borderRadius)",
                "background": "#E0E0E0",
                "boxShadow": "var(--mui-shadows-6)",
                "opacity": "1"
              }
            },
            "&.MuiButton-sizeMedium.MuiButton-containedInherit (white)": {
              "&:not(.Mui-disabled):not(.Mui-focusVisible):not(:hover)": {
                "& .MuiTouchRipple-root": {
                  "width": "75px",
                  "height": "36px",
                  "opacity": "0.3",
                  "background": "var(--mui-palette-common-white_states-main)",
                  "padding": "0",
                  "borderRadius": "0",
                  "boxShadow": "none"
                },
                "color": "var(--mui-palette-common-white_states-main)",
                "fontFamily": "Roboto, Helvetica, Arial, sans-serif",
                "fontSize": "0.875rem",
                "fontStyle": "normal",
                "fontWeight": "500",
                "lineHeight": "24px /* 171.429% */",
                "letterSpacing": "0.4px",
                "textTransform": "uppercase",
                "padding": "6px 16px",
                "borderRadius": "var(--mui-shape-borderRadius)",
                "background": "#E0E0E0",
                "boxShadow": "var(--mui-shadows-6)",
                "opacity": "1"
              }
            },
            "&.MuiButton-sizeMedium.MuiButton-containedSecondary": {
              "&:not(.Mui-disabled):not(.Mui-focusVisible):not(:hover)": {
                "& .MuiTouchRipple-root": {
                  "width": "75px",
                  "height": "36px",
                  "opacity": "0.3",
                  "background": "var(--mui-palette-secondary-contrastText)",
                  "padding": "0",
                  "borderRadius": "0",
                  "boxShadow": "none"
                },
                "color": "var(--mui-palette-secondary-contrastText)",
                "fontFamily": "Roboto, Helvetica, Arial, sans-serif",
                "fontSize": "0.875rem",
                "fontStyle": "normal",
                "fontWeight": "500",
                "lineHeight": "24px /* 171.429% */",
                "letterSpacing": "0.4px",
                "textTransform": "uppercase",
                "padding": "6px 16px",
                "borderRadius": "var(--mui-shape-borderRadius)",
                "background": "var(--mui-palette-secondary-main)",
                "boxShadow": "var(--mui-shadows-6)",
                "opacity": "1"
              }
            },
            "&.MuiButton-sizeMedium.MuiButton-containedError": {
              "&:not(.Mui-disabled):not(.Mui-focusVisible):not(:hover)": {
                "& .MuiTouchRipple-root": {
                  "width": "75px",
                  "height": "36px",
                  "opacity": "0.3",
                  "background": "var(--mui-palette-error-contrastText)",
                  "padding": "0",
                  "borderRadius": "0",
                  "boxShadow": "none"
                },
                "color": "var(--mui-palette-error-contrastText)",
                "fontFamily": "Roboto, Helvetica, Arial, sans-serif",
                "fontSize": "0.875rem",
                "fontStyle": "normal",
                "fontWeight": "500",
                "lineHeight": "24px /* 171.429% */",
                "letterSpacing": "0.4px",
                "textTransform": "uppercase",
                "padding": "6px 16px",
                "borderRadius": "var(--mui-shape-borderRadius)",
                "background": "var(--mui-palette-error-main)",
                "boxShadow": "var(--mui-shadows-6)",
                "opacity": "1"
              }
            },
            "&.MuiButton-sizeMedium.MuiButton-containedWarning": {
              "padding": "6px 16px",
              "borderRadius": "var(--mui-shape-borderRadius)",
              "opacity": "1",
              "&:not(.Mui-disabled):not(.Mui-focusVisible):not(:hover)": {
                "& .MuiTouchRipple-root": {
                  "width": "75px",
                  "height": "36px",
                  "opacity": "0.3",
                  "background": "var(--mui-palette-warning-contrastText)",
                  "padding": "0",
                  "borderRadius": "0",
                  "boxShadow": "none"
                },
                "color": "var(--mui-palette-warning-contrastText)",
                "fontFamily": "Roboto, Helvetica, Arial, sans-serif",
                "fontSize": "0.875rem",
                "fontStyle": "normal",
                "fontWeight": "500",
                "lineHeight": "24px /* 171.429% */",
                "letterSpacing": "0.4px",
                "textTransform": "uppercase",
                "background": "var(--mui-palette-warning-main)",
                "boxShadow": "var(--mui-shadows-6)"
              },
              "&:not(.Mui-disabled):not(.Mui-focusVisible):hover": {
                "background": "var(--mui-palette-warning-dark)",
                "boxShadow": "var(--mui-shadows-4)"
              }
            },
            "&.MuiButton-sizeMedium.MuiButton-containedInfo": {
              "&:not(.Mui-disabled):not(.Mui-focusVisible):not(:hover)": {
                "& .MuiTouchRipple-root": {
                  "width": "75px",
                  "height": "36px",
                  "opacity": "0.3",
                  "background": "var(--mui-palette-info-contrastText)",
                  "padding": "0",
                  "borderRadius": "0",
                  "boxShadow": "none"
                },
                "color": "var(--mui-palette-info-contrastText)",
                "fontFamily": "Roboto, Helvetica, Arial, sans-serif",
                "fontSize": "0.875rem",
                "fontStyle": "normal",
                "fontWeight": "500",
                "lineHeight": "24px /* 171.429% */",
                "letterSpacing": "0.4px",
                "textTransform": "uppercase",
                "padding": "6px 16px",
                "borderRadius": "var(--mui-shape-borderRadius)",
                "background": "var(--mui-palette-info-main)",
                "boxShadow": "var(--mui-shadows-6)",
                "opacity": "1"
              }
            },
            "&.MuiButton-sizeMedium.MuiButton-containedSuccess": {
              "&:not(.Mui-disabled):not(.Mui-focusVisible):not(:hover)": {
                "& .MuiTouchRipple-root": {
                  "width": "75px",
                  "height": "36px",
                  "opacity": "0.3",
                  "background": "var(--mui-palette-success-contrastText)",
                  "padding": "0",
                  "borderRadius": "0",
                  "boxShadow": "none"
                },
                "color": "var(--mui-palette-success-contrastText)",
                "fontFamily": "Roboto, Helvetica, Arial, sans-serif",
                "fontSize": "0.875rem",
                "fontStyle": "normal",
                "fontWeight": "500",
                "lineHeight": "24px /* 171.429% */",
                "letterSpacing": "0.4px",
                "textTransform": "uppercase",
                "padding": "6px 16px",
                "borderRadius": "var(--mui-shape-borderRadius)",
                "background": "var(--mui-palette-success-main)",
                "boxShadow": "var(--mui-shadows-6)",
                "opacity": "1"
              }
            },
            "&.MuiButton-sizeSmall.MuiButton-containedPrimary": {
              "&:not(.Mui-disabled):not(.Mui-focusVisible):not(:hover)": {
                "& .MuiTouchRipple-root": {
                  "width": "61px",
                  "height": "30px",
                  "opacity": "0.3",
                  "background": "var(--mui-palette-primary-contrastText)",
                  "padding": "0",
                  "borderRadius": "0",
                  "boxShadow": "none"
                },
                "color": "var(--mui-palette-primary-contrastText)",
                "fontFamily": "Roboto, Helvetica, Arial, sans-serif",
                "fontSize": "0.8125rem",
                "fontStyle": "normal",
                "fontWeight": "500",
                "lineHeight": "22px /* 169.231% */",
                "letterSpacing": "0.46px",
                "textTransform": "uppercase",
                "padding": "4px 10px",
                "borderRadius": "var(--mui-shape-borderRadius)",
                "background": "var(--mui-palette-primary-main)",
                "boxShadow": "var(--mui-shadows-6)",
                "opacity": "1"
              }
            },
            "&.MuiButton-sizeSmall.MuiButton-containedInherit": {
              "&:not(.Mui-disabled):not(.Mui-focusVisible):not(:hover)": {
                "& .MuiTouchRipple-root": {
                  "width": "61px",
                  "height": "30px",
                  "background": "var(--mui-palette-text-_states-focusVisible)",
                  "padding": "0",
                  "opacity": "1",
                  "borderRadius": "0",
                  "boxShadow": "none"
                },
                "color": "var(--mui-palette-text-primary)",
                "fontFamily": "Roboto, Helvetica, Arial, sans-serif",
                "fontSize": "0.8125rem",
                "fontStyle": "normal",
                "fontWeight": "500",
                "lineHeight": "22px /* 169.231% */",
                "letterSpacing": "0.46px",
                "textTransform": "uppercase",
                "padding": "4px 10px",
                "borderRadius": "var(--mui-shape-borderRadius)",
                "background": "#E0E0E0",
                "boxShadow": "var(--mui-shadows-6)",
                "opacity": "1"
              }
            },
            "&.MuiButton-sizeSmall.MuiButton-containedInherit (white)": {
              "&:not(.Mui-disabled):not(.Mui-focusVisible):not(:hover)": {
                "& .MuiTouchRipple-root": {
                  "width": "61px",
                  "height": "30px",
                  "opacity": "0.3",
                  "background": "var(--mui-palette-common-white_states-main)",
                  "padding": "0",
                  "borderRadius": "0",
                  "boxShadow": "none"
                },
                "color": "var(--mui-palette-common-white_states-main)",
                "fontFamily": "Roboto, Helvetica, Arial, sans-serif",
                "fontSize": "0.8125rem",
                "fontStyle": "normal",
                "fontWeight": "500",
                "lineHeight": "22px /* 169.231% */",
                "letterSpacing": "0.46px",
                "textTransform": "uppercase",
                "padding": "4px 10px",
                "borderRadius": "var(--mui-shape-borderRadius)",
                "background": "#E0E0E0",
                "boxShadow": "var(--mui-shadows-6)",
                "opacity": "1"
              }
            },
            "&.MuiButton-sizeSmall.MuiButton-containedSecondary": {
              "&:not(.Mui-disabled):not(.Mui-focusVisible):not(:hover)": {
                "& .MuiTouchRipple-root": {
                  "width": "61px",
                  "height": "30px",
                  "opacity": "0.3",
                  "background": "var(--mui-palette-secondary-contrastText)",
                  "padding": "0",
                  "borderRadius": "0",
                  "boxShadow": "none"
                },
                "color": "var(--mui-palette-secondary-contrastText)",
                "fontFamily": "Roboto, Helvetica, Arial, sans-serif",
                "fontSize": "0.8125rem",
                "fontStyle": "normal",
                "fontWeight": "500",
                "lineHeight": "22px /* 169.231% */",
                "letterSpacing": "0.46px",
                "textTransform": "uppercase",
                "padding": "4px 10px",
                "borderRadius": "var(--mui-shape-borderRadius)",
                "background": "var(--mui-palette-secondary-main)",
                "boxShadow": "var(--mui-shadows-6)",
                "opacity": "1"
              }
            },
            "&.MuiButton-sizeSmall.MuiButton-containedError": {
              "&:not(.Mui-disabled):not(.Mui-focusVisible):not(:hover)": {
                "& .MuiTouchRipple-root": {
                  "width": "61px",
                  "height": "30px",
                  "opacity": "0.3",
                  "background": "var(--mui-palette-error-contrastText)",
                  "padding": "0",
                  "borderRadius": "0",
                  "boxShadow": "none"
                },
                "color": "var(--mui-palette-error-contrastText)",
                "fontFamily": "Roboto, Helvetica, Arial, sans-serif",
                "fontSize": "0.8125rem",
                "fontStyle": "normal",
                "fontWeight": "500",
                "lineHeight": "22px /* 169.231% */",
                "letterSpacing": "0.46px",
                "textTransform": "uppercase",
                "padding": "4px 10px",
                "borderRadius": "var(--mui-shape-borderRadius)",
                "background": "var(--mui-palette-error-main)",
                "boxShadow": "var(--mui-shadows-6)",
                "opacity": "1"
              }
            },
            "&.MuiButton-sizeSmall.MuiButton-containedWarning": {
              "padding": "4px 10px",
              "borderRadius": "var(--mui-shape-borderRadius)",
              "opacity": "1",
              "&:not(.Mui-disabled):not(.Mui-focusVisible):not(:hover)": {
                "& .MuiTouchRipple-root": {
                  "width": "61px",
                  "height": "30px",
                  "opacity": "0.3",
                  "background": "var(--mui-palette-warning-contrastText)",
                  "padding": "0",
                  "borderRadius": "0",
                  "boxShadow": "none"
                },
                "color": "var(--mui-palette-warning-contrastText)",
                "fontFamily": "Roboto, Helvetica, Arial, sans-serif",
                "fontSize": "0.8125rem",
                "fontStyle": "normal",
                "fontWeight": "500",
                "lineHeight": "22px /* 169.231% */",
                "letterSpacing": "0.46px",
                "textTransform": "uppercase",
                "background": "var(--mui-palette-warning-main)",
                "boxShadow": "var(--mui-shadows-6)"
              },
              "&:not(.Mui-disabled):not(.Mui-focusVisible):hover": {
                "background": "var(--mui-palette-warning-dark)",
                "boxShadow": "var(--mui-shadows-4)"
              }
            },
            "&.MuiButton-sizeSmall.MuiButton-containedInfo": {
              "&:not(.Mui-disabled):not(.Mui-focusVisible):not(:hover)": {
                "& .MuiTouchRipple-root": {
                  "width": "61px",
                  "height": "30px",
                  "opacity": "0.3",
                  "background": "var(--mui-palette-info-contrastText)",
                  "padding": "0",
                  "borderRadius": "0",
                  "boxShadow": "none"
                },
                "color": "var(--mui-palette-info-contrastText)",
                "fontFamily": "Roboto, Helvetica, Arial, sans-serif",
                "fontSize": "0.8125rem",
                "fontStyle": "normal",
                "fontWeight": "500",
                "lineHeight": "22px /* 169.231% */",
                "letterSpacing": "0.46px",
                "textTransform": "uppercase",
                "padding": "4px 10px",
                "borderRadius": "var(--mui-shape-borderRadius)",
                "background": "var(--mui-palette-info-main)",
                "boxShadow": "var(--mui-shadows-6)",
                "opacity": "1"
              }
            },
            "&.MuiButton-sizeSmall.MuiButton-containedSuccess": {
              "&:not(.Mui-disabled):not(.Mui-focusVisible):not(:hover)": {
                "& .MuiTouchRipple-root": {
                  "width": "61px",
                  "height": "30px",
                  "opacity": "0.3",
                  "background": "var(--mui-palette-success-contrastText)",
                  "padding": "0",
                  "borderRadius": "0",
                  "boxShadow": "none"
                },
                "color": "var(--mui-palette-success-contrastText)",
                "fontFamily": "Roboto, Helvetica, Arial, sans-serif",
                "fontSize": "0.8125rem",
                "fontStyle": "normal",
                "fontWeight": "500",
                "lineHeight": "22px /* 169.231% */",
                "letterSpacing": "0.46px",
                "textTransform": "uppercase",
                "padding": "4px 10px",
                "borderRadius": "var(--mui-shape-borderRadius)",
                "background": "var(--mui-palette-success-main)",
                "boxShadow": "var(--mui-shadows-6)",
                "opacity": "1"
              }
            },
            "&.MuiButton-sizeLarge.MuiButton-outlinedPrimary": {
              "color": "var(--mui-palette-primary-main)",
              "fontFeatureSettings": "'liga' off, 'clig' off",
              "fontFamily": "Roboto, Helvetica, Arial, sans-serif",
              "fontSize": "0.9375rem",
              "fontStyle": "normal",
              "fontWeight": "500",
              "lineHeight": "26px /* 173.333% */",
              "letterSpacing": "0.46px",
              "textTransform": "uppercase",
              "&:not(.Mui-disabled):not(.Mui-focusVisible):not(:hover)": {
                "& .MuiTouchRipple-root": {
                  "width": "91px",
                  "height": "42px",
                  "background": "var(--mui-palette-primary-_states-focusVisible)",
                  "padding": "0",
                  "opacity": "1",
                  "borderRadius": "0",
                  "boxShadow": "none"
                },
                "padding": "8px 22px",
                "borderRadius": "var(--mui-shape-borderRadius)",
                "border": "1px solid var(--mui-palette-primary-_states-outlinedBorder)",
                "background": "none",
                "opacity": "1",
                "boxShadow": "none"
              }
            },
            "&.MuiButton-sizeLarge.MuiButton-outlinedInherit": {
              "&:not(.Mui-disabled):not(.Mui-focusVisible):not(:hover)": {
                "& .MuiTouchRipple-root": {
                  "width": "91px",
                  "height": "42px",
                  "background": "var(--mui-palette-text-_states-focusVisible)",
                  "padding": "0",
                  "opacity": "1",
                  "borderRadius": "0",
                  "boxShadow": "none"
                },
                "color": "var(--mui-palette-text-primary)",
                "fontFeatureSettings": "'liga' off, 'clig' off",
                "fontFamily": "Roboto, Helvetica, Arial, sans-serif",
                "fontSize": "0.9375rem",
                "fontStyle": "normal",
                "fontWeight": "500",
                "lineHeight": "26px /* 173.333% */",
                "letterSpacing": "0.46px",
                "textTransform": "uppercase",
                "padding": "8px 22px",
                "borderRadius": "var(--mui-shape-borderRadius)",
                "border": "1px solid var(--mui-palette-text-primary)",
                "background": "none",
                "opacity": "1",
                "boxShadow": "none"
              }
            },
            "&.MuiButton-sizeLarge.MuiButton-outlinedInherit (white)": {
              "&:not(.Mui-disabled):not(.Mui-focusVisible):not(:hover)": {
                "& .MuiTouchRipple-root": {
                  "width": "91px",
                  "height": "42px",
                  "background": "var(--mui-palette-common-white_states-focusVisible)",
                  "padding": "0",
                  "opacity": "1",
                  "borderRadius": "0",
                  "boxShadow": "none"
                },
                "color": "var(--mui-palette-common-white_states-main)",
                "fontFeatureSettings": "'liga' off, 'clig' off",
                "fontFamily": "Roboto, Helvetica, Arial, sans-serif",
                "fontSize": "0.9375rem",
                "fontStyle": "normal",
                "fontWeight": "500",
                "lineHeight": "26px /* 173.333% */",
                "letterSpacing": "0.46px",
                "textTransform": "uppercase",
                "padding": "8px 22px",
                "borderRadius": "var(--mui-shape-borderRadius)",
                "border": "1px solid var(--mui-palette-common-white_states-main)",
                "background": "none",
                "opacity": "1",
                "boxShadow": "none"
              }
            },
            "&.MuiButton-sizeLarge.MuiButton-outlinedSecondary": {
              "&:not(.Mui-disabled):not(.Mui-focusVisible):not(:hover)": {
                "& .MuiTouchRipple-root": {
                  "width": "91px",
                  "height": "42px",
                  "background": "var(--mui-palette-secondary-_states-focusVisible)",
                  "padding": "0",
                  "opacity": "1",
                  "borderRadius": "0",
                  "boxShadow": "none"
                },
                "color": "var(--mui-palette-secondary-main)",
                "fontFeatureSettings": "'liga' off, 'clig' off",
                "fontFamily": "Roboto, Helvetica, Arial, sans-serif",
                "fontSize": "0.9375rem",
                "fontStyle": "normal",
                "fontWeight": "500",
                "lineHeight": "26px /* 173.333% */",
                "letterSpacing": "0.46px",
                "textTransform": "uppercase",
                "padding": "8px 22px",
                "borderRadius": "var(--mui-shape-borderRadius)",
                "border": "1px solid var(--mui-palette-secondary-_states-outlinedBorder)",
                "background": "none",
                "opacity": "1",
                "boxShadow": "none"
              }
            },
            "&.MuiButton-sizeLarge.MuiButton-outlinedError": {
              "&:not(.Mui-disabled):not(.Mui-focusVisible):not(:hover)": {
                "& .MuiTouchRipple-root": {
                  "width": "91px",
                  "height": "42px",
                  "background": "var(--mui-palette-error-_states-focusVisible)",
                  "padding": "0",
                  "opacity": "1",
                  "borderRadius": "0",
                  "boxShadow": "none"
                },
                "color": "var(--mui-palette-error-main)",
                "fontFeatureSettings": "'liga' off, 'clig' off",
                "fontFamily": "Roboto, Helvetica, Arial, sans-serif",
                "fontSize": "0.9375rem",
                "fontStyle": "normal",
                "fontWeight": "500",
                "lineHeight": "26px /* 173.333% */",
                "letterSpacing": "0.46px",
                "textTransform": "uppercase",
                "padding": "8px 22px",
                "borderRadius": "var(--mui-shape-borderRadius)",
                "border": "1px solid var(--mui-palette-error-_states-outlinedBorder)",
                "background": "none",
                "opacity": "1",
                "boxShadow": "none"
              }
            },
            "&.MuiButton-sizeLarge.MuiButton-outlinedWarning": {
              "&:not(.Mui-disabled):not(.Mui-focusVisible):not(:hover)": {
                "& .MuiTouchRipple-root": {
                  "width": "91px",
                  "height": "42px",
                  "background": "var(--mui-palette-warning-_states-focusVisible)",
                  "padding": "0",
                  "opacity": "1",
                  "borderRadius": "0",
                  "boxShadow": "none"
                },
                "color": "var(--mui-palette-warning-main)",
                "fontFeatureSettings": "'liga' off, 'clig' off",
                "fontFamily": "Roboto, Helvetica, Arial, sans-serif",
                "fontSize": "0.9375rem",
                "fontStyle": "normal",
                "fontWeight": "500",
                "lineHeight": "26px /* 173.333% */",
                "letterSpacing": "0.46px",
                "textTransform": "uppercase",
                "padding": "8px 22px",
                "borderRadius": "var(--mui-shape-borderRadius)",
                "border": "1px solid var(--mui-palette-warning-_states-outlinedBorder)",
                "background": "none",
                "opacity": "1",
                "boxShadow": "none"
              }
            },
            "&.MuiButton-sizeLarge.MuiButton-outlinedInfo": {
              "&:not(.Mui-disabled):not(.Mui-focusVisible):not(:hover)": {
                "& .MuiTouchRipple-root": {
                  "width": "91px",
                  "height": "42px",
                  "background": "var(--mui-palette-primary-_states-focusVisible)",
                  "padding": "0",
                  "opacity": "1",
                  "borderRadius": "0",
                  "boxShadow": "none"
                },
                "color": "var(--mui-palette-info-main)",
                "fontFeatureSettings": "'liga' off, 'clig' off",
                "fontFamily": "Roboto, Helvetica, Arial, sans-serif",
                "fontSize": "0.9375rem",
                "fontStyle": "normal",
                "fontWeight": "500",
                "lineHeight": "26px /* 173.333% */",
                "letterSpacing": "0.46px",
                "textTransform": "uppercase",
                "padding": "8px 22px",
                "borderRadius": "var(--mui-shape-borderRadius)",
                "border": "1px solid var(--mui-palette-info-_states-outlinedBorder)",
                "background": "none",
                "opacity": "1",
                "boxShadow": "none"
              }
            },
            "&.MuiButton-sizeLarge.MuiButton-outlinedSuccess": {
              "&:not(.Mui-disabled):not(.Mui-focusVisible):not(:hover)": {
                "& .MuiTouchRipple-root": {
                  "width": "91px",
                  "height": "42px",
                  "background": "var(--mui-palette-success-_states-focusVisible)",
                  "padding": "0",
                  "opacity": "1",
                  "borderRadius": "0",
                  "boxShadow": "none"
                },
                "color": "var(--mui-palette-success-main)",
                "fontFeatureSettings": "'liga' off, 'clig' off",
                "fontFamily": "Roboto, Helvetica, Arial, sans-serif",
                "fontSize": "0.9375rem",
                "fontStyle": "normal",
                "fontWeight": "500",
                "lineHeight": "26px /* 173.333% */",
                "letterSpacing": "0.46px",
                "textTransform": "uppercase",
                "padding": "8px 22px",
                "borderRadius": "var(--mui-shape-borderRadius)",
                "border": "1px solid var(--mui-palette-success-_states-outlinedBorder)",
                "background": "none",
                "opacity": "1",
                "boxShadow": "none"
              }
            },
            "&.MuiButton-sizeMedium.MuiButton-outlinedPrimary": {
              "&:not(.Mui-disabled):not(.Mui-focusVisible):not(:hover)": {
                "& .MuiTouchRipple-root": {
                  "width": "75px",
                  "height": "36px",
                  "background": "var(--mui-palette-primary-_states-focusVisible)",
                  "padding": "0",
                  "opacity": "1",
                  "borderRadius": "0",
                  "boxShadow": "none"
                },
                "color": "var(--mui-palette-primary-main)",
                "fontFamily": "Roboto, Helvetica, Arial, sans-serif",
                "fontSize": "0.875rem",
                "fontStyle": "normal",
                "fontWeight": "500",
                "lineHeight": "24px /* 171.429% */",
                "letterSpacing": "0.4px",
                "textTransform": "uppercase",
                "padding": "6px 16px",
                "borderRadius": "var(--mui-shape-borderRadius)",
                "border": "1px solid var(--mui-palette-primary-_states-outlinedBorder)",
                "background": "none",
                "opacity": "1",
                "boxShadow": "none"
              }
            },
            "&.MuiButton-sizeMedium.MuiButton-outlinedInherit": {
              "&:not(.Mui-disabled):not(.Mui-focusVisible):not(:hover)": {
                "& .MuiTouchRipple-root": {
                  "width": "75px",
                  "height": "36px",
                  "background": "var(--mui-palette-text-_states-focusVisible)",
                  "padding": "0",
                  "opacity": "1",
                  "borderRadius": "0",
                  "boxShadow": "none"
                },
                "color": "var(--mui-palette-text-primary)",
                "fontFamily": "Roboto, Helvetica, Arial, sans-serif",
                "fontSize": "0.875rem",
                "fontStyle": "normal",
                "fontWeight": "500",
                "lineHeight": "24px /* 171.429% */",
                "letterSpacing": "0.4px",
                "textTransform": "uppercase",
                "padding": "6px 16px",
                "borderRadius": "var(--mui-shape-borderRadius)",
                "border": "1px solid var(--mui-palette-text-primary)",
                "background": "none",
                "opacity": "1",
                "boxShadow": "none"
              }
            },
            "&.MuiButton-sizeMedium.MuiButton-outlinedInherit (white)": {
              "&:not(.Mui-disabled):not(.Mui-focusVisible):not(:hover)": {
                "& .MuiTouchRipple-root": {
                  "width": "75px",
                  "height": "36px",
                  "background": "var(--mui-palette-common-white_states-focusVisible)",
                  "padding": "0",
                  "opacity": "1",
                  "borderRadius": "0",
                  "boxShadow": "none"
                },
                "color": "var(--mui-palette-common-white_states-main)",
                "fontFamily": "Roboto, Helvetica, Arial, sans-serif",
                "fontSize": "0.875rem",
                "fontStyle": "normal",
                "fontWeight": "500",
                "lineHeight": "24px /* 171.429% */",
                "letterSpacing": "0.4px",
                "textTransform": "uppercase",
                "padding": "6px 16px",
                "borderRadius": "var(--mui-shape-borderRadius)",
                "border": "1px solid var(--mui-palette-common-white_states-main)",
                "background": "none",
                "opacity": "1",
                "boxShadow": "none"
              }
            },
            "&.MuiButton-sizeMedium.MuiButton-outlinedSecondary": {
              "&:not(.Mui-disabled):not(.Mui-focusVisible):not(:hover)": {
                "& .MuiTouchRipple-root": {
                  "width": "75px",
                  "height": "36px",
                  "background": "var(--mui-palette-secondary-_states-focusVisible)",
                  "padding": "0",
                  "opacity": "1",
                  "borderRadius": "0",
                  "boxShadow": "none"
                },
                "color": "var(--mui-palette-secondary-main)",
                "fontFamily": "Roboto, Helvetica, Arial, sans-serif",
                "fontSize": "0.875rem",
                "fontStyle": "normal",
                "fontWeight": "500",
                "lineHeight": "24px /* 171.429% */",
                "letterSpacing": "0.4px",
                "textTransform": "uppercase",
                "padding": "6px 16px",
                "borderRadius": "var(--mui-shape-borderRadius)",
                "border": "1px solid var(--mui-palette-secondary-_states-outlinedBorder)",
                "background": "none",
                "opacity": "1",
                "boxShadow": "none"
              }
            },
            "&.MuiButton-sizeMedium.MuiButton-outlinedError": {
              "&:not(.Mui-disabled):not(.Mui-focusVisible):not(:hover)": {
                "& .MuiTouchRipple-root": {
                  "width": "75px",
                  "height": "36px",
                  "background": "var(--mui-palette-error-_states-focusVisible)",
                  "padding": "0",
                  "opacity": "1",
                  "borderRadius": "0",
                  "boxShadow": "none"
                },
                "color": "var(--mui-palette-error-main)",
                "fontFamily": "Roboto, Helvetica, Arial, sans-serif",
                "fontSize": "0.875rem",
                "fontStyle": "normal",
                "fontWeight": "500",
                "lineHeight": "24px /* 171.429% */",
                "letterSpacing": "0.4px",
                "textTransform": "uppercase",
                "padding": "6px 16px",
                "borderRadius": "var(--mui-shape-borderRadius)",
                "border": "1px solid var(--mui-palette-error-_states-outlinedBorder)",
                "background": "none",
                "opacity": "1",
                "boxShadow": "none"
              }
            },
            "&.MuiButton-sizeMedium.MuiButton-outlinedWarning": {
              "&:not(.Mui-disabled):not(.Mui-focusVisible):not(:hover)": {
                "& .MuiTouchRipple-root": {
                  "width": "75px",
                  "height": "36px",
                  "background": "var(--mui-palette-warning-_states-focusVisible)",
                  "padding": "0",
                  "opacity": "1",
                  "borderRadius": "0",
                  "boxShadow": "none"
                },
                "color": "var(--mui-palette-warning-main)",
                "fontFamily": "Roboto, Helvetica, Arial, sans-serif",
                "fontSize": "0.875rem",
                "fontStyle": "normal",
                "fontWeight": "500",
                "lineHeight": "24px /* 171.429% */",
                "letterSpacing": "0.4px",
                "textTransform": "uppercase",
                "padding": "6px 16px",
                "borderRadius": "var(--mui-shape-borderRadius)",
                "border": "1px solid var(--mui-palette-warning-_states-outlinedBorder)",
                "background": "none",
                "opacity": "1",
                "boxShadow": "none"
              }
            },
            "&.MuiButton-sizeMedium.MuiButton-outlinedInfo": {
              "&:not(.Mui-disabled):not(.Mui-focusVisible):not(:hover)": {
                "& .MuiTouchRipple-root": {
                  "width": "75px",
                  "height": "36px",
                  "background": "var(--mui-palette-primary-_states-focusVisible)",
                  "padding": "0",
                  "opacity": "1",
                  "borderRadius": "0",
                  "boxShadow": "none"
                },
                "color": "var(--mui-palette-info-main)",
                "fontFamily": "Roboto, Helvetica, Arial, sans-serif",
                "fontSize": "0.875rem",
                "fontStyle": "normal",
                "fontWeight": "500",
                "lineHeight": "24px /* 171.429% */",
                "letterSpacing": "0.4px",
                "textTransform": "uppercase",
                "padding": "6px 16px",
                "borderRadius": "var(--mui-shape-borderRadius)",
                "border": "1px solid var(--mui-palette-info-_states-outlinedBorder)",
                "background": "none",
                "opacity": "1",
                "boxShadow": "none"
              }
            },
            "&.MuiButton-sizeMedium.MuiButton-outlinedSuccess": {
              "&:not(.Mui-disabled):not(.Mui-focusVisible):not(:hover)": {
                "& .MuiTouchRipple-root": {
                  "width": "75px",
                  "height": "36px",
                  "background": "var(--mui-palette-success-_states-focusVisible)",
                  "padding": "0",
                  "opacity": "1",
                  "borderRadius": "0",
                  "boxShadow": "none"
                },
                "color": "var(--mui-palette-success-main)",
                "fontFamily": "Roboto, Helvetica, Arial, sans-serif",
                "fontSize": "0.875rem",
                "fontStyle": "normal",
                "fontWeight": "500",
                "lineHeight": "24px /* 171.429% */",
                "letterSpacing": "0.4px",
                "textTransform": "uppercase",
                "padding": "6px 16px",
                "borderRadius": "var(--mui-shape-borderRadius)",
                "border": "1px solid var(--mui-palette-success-_states-outlinedBorder)",
                "background": "none",
                "opacity": "1",
                "boxShadow": "none"
              }
            },
            "&.MuiButton-sizeSmall.MuiButton-outlinedPrimary": {
              "&:not(.Mui-disabled):not(.Mui-focusVisible):not(:hover)": {
                "& .MuiTouchRipple-root": {
                  "width": "61px",
                  "height": "30px",
                  "background": "var(--mui-palette-primary-_states-focusVisible)",
                  "padding": "0",
                  "opacity": "1",
                  "borderRadius": "0",
                  "boxShadow": "none"
                },
                "color": "var(--mui-palette-primary-main)",
                "fontFamily": "Roboto, Helvetica, Arial, sans-serif",
                "fontSize": "0.8125rem",
                "fontStyle": "normal",
                "fontWeight": "500",
                "lineHeight": "22px /* 169.231% */",
                "letterSpacing": "0.46px",
                "textTransform": "uppercase",
                "padding": "4px 10px",
                "borderRadius": "var(--mui-shape-borderRadius)",
                "border": "1px solid var(--mui-palette-primary-_states-outlinedBorder)",
                "background": "none",
                "opacity": "1",
                "boxShadow": "none"
              }
            },
            "&.MuiButton-sizeSmall.MuiButton-outlinedInherit": {
              "&:not(.Mui-disabled):not(.Mui-focusVisible):not(:hover)": {
                "& .MuiTouchRipple-root": {
                  "width": "61px",
                  "height": "30px",
                  "background": "var(--mui-palette-text-_states-focusVisible)",
                  "padding": "0",
                  "opacity": "1",
                  "borderRadius": "0",
                  "boxShadow": "none"
                },
                "color": "var(--mui-palette-text-primary)",
                "fontFamily": "Roboto, Helvetica, Arial, sans-serif",
                "fontSize": "0.8125rem",
                "fontStyle": "normal",
                "fontWeight": "500",
                "lineHeight": "22px /* 169.231% */",
                "letterSpacing": "0.46px",
                "textTransform": "uppercase",
                "padding": "4px 10px",
                "borderRadius": "var(--mui-shape-borderRadius)",
                "border": "1px solid var(--mui-palette-text-primary)",
                "background": "none",
                "opacity": "1",
                "boxShadow": "none"
              }
            },
            "&.MuiButton-sizeSmall.MuiButton-outlinedInherit (white)": {
              "&:not(.Mui-disabled):not(.Mui-focusVisible):not(:hover)": {
                "& .MuiTouchRipple-root": {
                  "width": "61px",
                  "height": "30px",
                  "background": "var(--mui-palette-common-white_states-focusVisible)",
                  "padding": "0",
                  "opacity": "1",
                  "borderRadius": "0",
                  "boxShadow": "none"
                },
                "color": "var(--mui-palette-common-white_states-main)",
                "fontFamily": "Roboto, Helvetica, Arial, sans-serif",
                "fontSize": "0.8125rem",
                "fontStyle": "normal",
                "fontWeight": "500",
                "lineHeight": "22px /* 169.231% */",
                "letterSpacing": "0.46px",
                "textTransform": "uppercase",
                "padding": "4px 10px",
                "borderRadius": "var(--mui-shape-borderRadius)",
                "border": "1px solid var(--mui-palette-common-white_states-main)",
                "background": "none",
                "opacity": "1",
                "boxShadow": "none"
              }
            },
            "&.MuiButton-sizeSmall.MuiButton-outlinedSecondary": {
              "&:not(.Mui-disabled):not(.Mui-focusVisible):not(:hover)": {
                "& .MuiTouchRipple-root": {
                  "width": "61px",
                  "height": "30px",
                  "background": "var(--mui-palette-secondary-_states-focusVisible)",
                  "padding": "0",
                  "opacity": "1",
                  "borderRadius": "0",
                  "boxShadow": "none"
                },
                "color": "var(--mui-palette-secondary-main)",
                "fontFamily": "Roboto, Helvetica, Arial, sans-serif",
                "fontSize": "0.8125rem",
                "fontStyle": "normal",
                "fontWeight": "500",
                "lineHeight": "22px /* 169.231% */",
                "letterSpacing": "0.46px",
                "textTransform": "uppercase",
                "padding": "4px 10px",
                "borderRadius": "var(--mui-shape-borderRadius)",
                "border": "1px solid var(--mui-palette-secondary-_states-outlinedBorder)",
                "background": "none",
                "opacity": "1",
                "boxShadow": "none"
              }
            },
            "&.MuiButton-sizeSmall.MuiButton-outlinedError": {
              "&:not(.Mui-disabled):not(.Mui-focusVisible):not(:hover)": {
                "& .MuiTouchRipple-root": {
                  "width": "61px",
                  "height": "30px",
                  "background": "var(--mui-palette-error-_states-focusVisible)",
                  "padding": "0",
                  "opacity": "1",
                  "borderRadius": "0",
                  "boxShadow": "none"
                },
                "color": "var(--mui-palette-error-main)",
                "fontFamily": "Roboto, Helvetica, Arial, sans-serif",
                "fontSize": "0.8125rem",
                "fontStyle": "normal",
                "fontWeight": "500",
                "lineHeight": "22px /* 169.231% */",
                "letterSpacing": "0.46px",
                "textTransform": "uppercase",
                "padding": "4px 10px",
                "borderRadius": "var(--mui-shape-borderRadius)",
                "border": "1px solid var(--mui-palette-error-_states-outlinedBorder)",
                "background": "none",
                "opacity": "1",
                "boxShadow": "none"
              }
            },
            "&.MuiButton-sizeSmall.MuiButton-outlinedWarning": {
              "&:not(.Mui-disabled):not(.Mui-focusVisible):not(:hover)": {
                "& .MuiTouchRipple-root": {
                  "width": "61px",
                  "height": "30px",
                  "background": "var(--mui-palette-warning-_states-focusVisible)",
                  "padding": "0",
                  "opacity": "1",
                  "borderRadius": "0",
                  "boxShadow": "none"
                },
                "color": "var(--mui-palette-warning-main)",
                "fontFamily": "Roboto, Helvetica, Arial, sans-serif",
                "fontSize": "0.8125rem",
                "fontStyle": "normal",
                "fontWeight": "500",
                "lineHeight": "22px /* 169.231% */",
                "letterSpacing": "0.46px",
                "textTransform": "uppercase",
                "padding": "4px 10px",
                "borderRadius": "var(--mui-shape-borderRadius)",
                "border": "1px solid var(--mui-palette-warning-_states-outlinedBorder)",
                "background": "none",
                "opacity": "1",
                "boxShadow": "none"
              }
            },
            "&.MuiButton-sizeSmall.MuiButton-outlinedInfo": {
              "&:not(.Mui-disabled):not(.Mui-focusVisible):not(:hover)": {
                "& .MuiTouchRipple-root": {
                  "width": "61px",
                  "height": "30px",
                  "background": "var(--mui-palette-primary-_states-focusVisible)",
                  "padding": "0",
                  "opacity": "1",
                  "borderRadius": "0",
                  "boxShadow": "none"
                },
                "color": "var(--mui-palette-info-main)",
                "fontFamily": "Roboto, Helvetica, Arial, sans-serif",
                "fontSize": "0.8125rem",
                "fontStyle": "normal",
                "fontWeight": "500",
                "lineHeight": "22px /* 169.231% */",
                "letterSpacing": "0.46px",
                "textTransform": "uppercase",
                "padding": "4px 10px",
                "borderRadius": "var(--mui-shape-borderRadius)",
                "border": "1px solid var(--mui-palette-info-_states-outlinedBorder)",
                "background": "none",
                "opacity": "1",
                "boxShadow": "none"
              }
            },
            "&.MuiButton-sizeSmall.MuiButton-outlinedSuccess": {
              "&:not(.Mui-disabled):not(.Mui-focusVisible):not(:hover)": {
                "& .MuiTouchRipple-root": {
                  "width": "61px",
                  "height": "30px",
                  "background": "var(--mui-palette-success-_states-focusVisible)",
                  "padding": "0",
                  "opacity": "1",
                  "borderRadius": "0",
                  "boxShadow": "none"
                },
                "color": "var(--mui-palette-success-main)",
                "fontFamily": "Roboto, Helvetica, Arial, sans-serif",
                "fontSize": "0.8125rem",
                "fontStyle": "normal",
                "fontWeight": "500",
                "lineHeight": "22px /* 169.231% */",
                "letterSpacing": "0.46px",
                "textTransform": "uppercase",
                "padding": "4px 10px",
                "borderRadius": "var(--mui-shape-borderRadius)",
                "border": "1px solid var(--mui-palette-success-_states-outlinedBorder)",
                "background": "none",
                "opacity": "1",
                "boxShadow": "none"
              }
            },
            "&.MuiButton-sizeMedium.MuiButton-textPrimary": {
              "padding": "6px 8px",
              "borderRadius": "var(--mui-shape-borderRadius)",
              "background": "none",
              "opacity": "1",
              "boxShadow": "none",
              "&:not(.Mui-disabled):not(.Mui-focusVisible):not(:hover)": {
                "& .MuiTouchRipple-root": {
                  "width": "59px",
                  "height": "36px",
                  "background": "var(--mui-palette-primary-_states-focusVisible)",
                  "padding": "0",
                  "opacity": "1",
                  "borderRadius": "0",
                  "boxShadow": "none"
                },
                "color": "var(--mui-palette-primary-main)",
                "fontFamily": "Roboto, Helvetica, Arial, sans-serif",
                "fontSize": "0.875rem",
                "fontStyle": "normal",
                "fontWeight": "500",
                "lineHeight": "24px /* 171.429% */",
                "letterSpacing": "0.4px",
                "textTransform": "uppercase"
              },
              "&.Mui-disabled:not(.Mui-focusVisible):not(:hover)": {
                "border": "0px solid var(--mui-palette-action-disabledBackground)"
              }
            },
            "&.MuiButton-sizeMedium.MuiButton-textInherit": {
              "padding": "6px 8px",
              "borderRadius": "var(--mui-shape-borderRadius)",
              "background": "none",
              "opacity": "1",
              "boxShadow": "none",
              "&:not(.Mui-disabled):not(.Mui-focusVisible):not(:hover)": {
                "& .MuiTouchRipple-root": {
                  "width": "59px",
                  "height": "36px",
                  "background": "var(--mui-palette-text-_states-focusVisible)",
                  "padding": "0",
                  "opacity": "1",
                  "borderRadius": "0",
                  "boxShadow": "none"
                },
                "color": "var(--mui-palette-text-primary)",
                "fontFamily": "Roboto, Helvetica, Arial, sans-serif",
                "fontSize": "0.875rem",
                "fontStyle": "normal",
                "fontWeight": "500",
                "lineHeight": "24px /* 171.429% */",
                "letterSpacing": "0.4px",
                "textTransform": "uppercase"
              },
              "&.Mui-disabled:not(.Mui-focusVisible):not(:hover)": {
                "border": "0px solid var(--mui-palette-action-disabledBackground)"
              }
            },
            "&.MuiButton-sizeMedium.MuiButton-textInherit (white)": {
              "padding": "6px 8px",
              "borderRadius": "var(--mui-shape-borderRadius)",
              "background": "none",
              "opacity": "1",
              "boxShadow": "none",
              "&:not(.Mui-disabled):not(.Mui-focusVisible):not(:hover)": {
                "& .MuiTouchRipple-root": {
                  "width": "59px",
                  "height": "36px",
                  "background": "var(--mui-palette-common-white_states-focusVisible)",
                  "padding": "0",
                  "opacity": "1",
                  "borderRadius": "0",
                  "boxShadow": "none"
                },
                "color": "var(--mui-palette-common-white_states-main)",
                "fontFamily": "Roboto, Helvetica, Arial, sans-serif",
                "fontSize": "0.875rem",
                "fontStyle": "normal",
                "fontWeight": "500",
                "lineHeight": "24px /* 171.429% */",
                "letterSpacing": "0.4px",
                "textTransform": "uppercase"
              },
              "&.Mui-disabled:not(.Mui-focusVisible):not(:hover)": {
                "border": "0px solid var(--mui-palette-action-disabledBackground)"
              }
            },
            "&.MuiButton-sizeMedium.MuiButton-textSecondary": {
              "padding": "6px 8px",
              "borderRadius": "var(--mui-shape-borderRadius)",
              "background": "none",
              "opacity": "1",
              "boxShadow": "none",
              "&:not(.Mui-disabled):not(.Mui-focusVisible):not(:hover)": {
                "& .MuiTouchRipple-root": {
                  "width": "59px",
                  "height": "36px",
                  "background": "var(--mui-palette-secondary-_states-focusVisible)",
                  "padding": "0",
                  "opacity": "1",
                  "borderRadius": "0",
                  "boxShadow": "none"
                },
                "color": "var(--mui-palette-secondary-main)",
                "fontFamily": "Roboto, Helvetica, Arial, sans-serif",
                "fontSize": "0.875rem",
                "fontStyle": "normal",
                "fontWeight": "500",
                "lineHeight": "24px /* 171.429% */",
                "letterSpacing": "0.4px",
                "textTransform": "uppercase"
              },
              "&.Mui-disabled:not(.Mui-focusVisible):not(:hover)": {
                "border": "0px solid var(--mui-palette-action-disabledBackground)"
              }
            },
            "&.MuiButton-sizeMedium.MuiButton-textError": {
              "padding": "6px 8px",
              "borderRadius": "var(--mui-shape-borderRadius)",
              "background": "none",
              "opacity": "1",
              "boxShadow": "none",
              "&:not(.Mui-disabled):not(.Mui-focusVisible):not(:hover)": {
                "& .MuiTouchRipple-root": {
                  "width": "59px",
                  "height": "36px",
                  "background": "var(--mui-palette-error-_states-focusVisible)",
                  "padding": "0",
                  "opacity": "1",
                  "borderRadius": "0",
                  "boxShadow": "none"
                },
                "color": "var(--mui-palette-error-main)",
                "fontFamily": "Roboto, Helvetica, Arial, sans-serif",
                "fontSize": "0.875rem",
                "fontStyle": "normal",
                "fontWeight": "500",
                "lineHeight": "24px /* 171.429% */",
                "letterSpacing": "0.4px",
                "textTransform": "uppercase"
              },
              "&.Mui-disabled:not(.Mui-focusVisible):not(:hover)": {
                "border": "0px solid var(--mui-palette-action-disabledBackground)"
              }
            },
            "&.MuiButton-sizeMedium.MuiButton-textWarning": {
              "padding": "6px 8px",
              "borderRadius": "var(--mui-shape-borderRadius)",
              "background": "none",
              "opacity": "1",
              "boxShadow": "none",
              "&:not(.Mui-disabled):not(.Mui-focusVisible):not(:hover)": {
                "& .MuiTouchRipple-root": {
                  "width": "59px",
                  "height": "36px",
                  "background": "var(--mui-palette-warning-_states-focusVisible)",
                  "padding": "0",
                  "opacity": "1",
                  "borderRadius": "0",
                  "boxShadow": "none"
                },
                "color": "var(--mui-palette-warning-main)",
                "fontFamily": "Roboto, Helvetica, Arial, sans-serif",
                "fontSize": "0.875rem",
                "fontStyle": "normal",
                "fontWeight": "500",
                "lineHeight": "24px /* 171.429% */",
                "letterSpacing": "0.4px",
                "textTransform": "uppercase"
              },
              "&.Mui-disabled:not(.Mui-focusVisible):not(:hover)": {
                "border": "0px solid var(--mui-palette-action-disabledBackground)"
              }
            },
            "&.MuiButton-sizeMedium.MuiButton-textInfo": {
              "padding": "6px 8px",
              "borderRadius": "var(--mui-shape-borderRadius)",
              "background": "none",
              "opacity": "1",
              "boxShadow": "none",
              "&:not(.Mui-disabled):not(.Mui-focusVisible):not(:hover)": {
                "& .MuiTouchRipple-root": {
                  "width": "59px",
                  "height": "36px",
                  "background": "var(--mui-palette-primary-_states-focusVisible)",
                  "padding": "0",
                  "opacity": "1",
                  "borderRadius": "0",
                  "boxShadow": "none"
                },
                "color": "var(--mui-palette-info-main)",
                "fontFamily": "Roboto, Helvetica, Arial, sans-serif",
                "fontSize": "0.875rem",
                "fontStyle": "normal",
                "fontWeight": "500",
                "lineHeight": "24px /* 171.429% */",
                "letterSpacing": "0.4px",
                "textTransform": "uppercase"
              },
              "&.Mui-disabled:not(.Mui-focusVisible):not(:hover)": {
                "border": "0px solid var(--mui-palette-action-disabledBackground)"
              }
            },
            "&.MuiButton-sizeMedium.MuiButton-textSuccess": {
              "padding": "6px 8px",
              "borderRadius": "var(--mui-shape-borderRadius)",
              "background": "none",
              "opacity": "1",
              "boxShadow": "none",
              "&:not(.Mui-disabled):not(.Mui-focusVisible):not(:hover)": {
                "& .MuiTouchRipple-root": {
                  "width": "59px",
                  "height": "36px",
                  "background": "var(--mui-palette-success-_states-focusVisible)",
                  "padding": "0",
                  "opacity": "1",
                  "borderRadius": "0",
                  "boxShadow": "none"
                },
                "color": "var(--mui-palette-success-main)",
                "fontFamily": "Roboto, Helvetica, Arial, sans-serif",
                "fontSize": "0.875rem",
                "fontStyle": "normal",
                "fontWeight": "500",
                "lineHeight": "24px /* 171.429% */",
                "letterSpacing": "0.4px",
                "textTransform": "uppercase"
              },
              "&.Mui-disabled:not(.Mui-focusVisible):not(:hover)": {
                "border": "0px solid var(--mui-palette-action-disabledBackground)"
              }
            },
            "&.MuiButton-sizeLarge.MuiButton-textPrimary": {
              "&:not(.Mui-disabled):not(.Mui-focusVisible):not(:hover)": {
                "color": "var(--mui-palette-primary-main)",
                "fontFeatureSettings": "'liga' off, 'clig' off",
                "fontFamily": "Roboto, Helvetica, Arial, sans-serif",
                "fontSize": "0.9375rem",
                "fontStyle": "normal",
                "fontWeight": "500",
                "lineHeight": "26px /* 173.333% */",
                "letterSpacing": "0.46px",
                "textTransform": "uppercase",
                "& .MuiTouchRipple-root": {
                  "width": "69px",
                  "height": "42px",
                  "background": "var(--mui-palette-primary-_states-focusVisible)",
                  "padding": "0",
                  "opacity": "1",
                  "borderRadius": "0",
                  "boxShadow": "none"
                },
                "padding": "8px 11px",
                "borderRadius": "var(--mui-shape-borderRadius)",
                "background": "none",
                "opacity": "1",
                "boxShadow": "none"
              },
              "&:not(.Mui-disabled).Mui-focusVisible:not(:hover)": {
                "color": "var(--mui-palette-primary-main)",
                "fontFeatureSettings": "'liga' off, 'clig' off",
                "fontFamily": "Roboto, Helvetica, Arial, sans-serif",
                "fontSize": "0.9375rem",
                "fontStyle": "normal",
                "fontWeight": "500",
                "lineHeight": "26px /* 173.333% */",
                "letterSpacing": "0.46px",
                "textTransform": "uppercase"
              },
              "&:not(.Mui-disabled):not(.Mui-focusVisible):hover": {
                "color": "var(--mui-palette-primary-main)",
                "fontFeatureSettings": "'liga' off, 'clig' off",
                "fontFamily": "Roboto, Helvetica, Arial, sans-serif",
                "fontSize": "0.9375rem",
                "fontStyle": "normal",
                "fontWeight": "500",
                "lineHeight": "26px /* 173.333% */",
                "letterSpacing": "0.46px",
                "textTransform": "uppercase"
              },
              "&.Mui-disabled:not(.Mui-focusVisible):not(:hover)": {
                "padding": "8px 11px",
                "borderRadius": "var(--mui-shape-borderRadius)",
                "border": "0px solid var(--mui-palette-action-disabledBackground)",
                "background": "none",
                "opacity": "1",
                "boxShadow": "none"
              }
            },
            "&.MuiButton-sizeLarge.MuiButton-textInherit": {
              "padding": "8px 11px",
              "borderRadius": "var(--mui-shape-borderRadius)",
              "background": "none",
              "opacity": "1",
              "boxShadow": "none",
              "&:not(.Mui-disabled):not(.Mui-focusVisible):not(:hover)": {
                "& .MuiTouchRipple-root": {
                  "width": "69px",
                  "height": "42px",
                  "background": "var(--mui-palette-text-_states-focusVisible)",
                  "padding": "0",
                  "opacity": "1",
                  "borderRadius": "0",
                  "boxShadow": "none"
                },
                "color": "var(--mui-palette-text-primary)",
                "fontFeatureSettings": "'liga' off, 'clig' off",
                "fontFamily": "Roboto, Helvetica, Arial, sans-serif",
                "fontSize": "0.9375rem",
                "fontStyle": "normal",
                "fontWeight": "500",
                "lineHeight": "26px /* 173.333% */",
                "letterSpacing": "0.46px",
                "textTransform": "uppercase"
              },
              "&.Mui-disabled:not(.Mui-focusVisible):not(:hover)": {
                "border": "0px solid var(--mui-palette-action-disabledBackground)"
              }
            },
            "&.MuiButton-sizeLarge.MuiButton-textInherit (white)": {
              "padding": "8px 11px",
              "borderRadius": "var(--mui-shape-borderRadius)",
              "background": "none",
              "opacity": "1",
              "boxShadow": "none",
              "&:not(.Mui-disabled):not(.Mui-focusVisible):not(:hover)": {
                "& .MuiTouchRipple-root": {
                  "width": "69px",
                  "height": "42px",
                  "background": "var(--mui-palette-common-white_states-focusVisible)",
                  "padding": "0",
                  "opacity": "1",
                  "borderRadius": "0",
                  "boxShadow": "none"
                },
                "color": "var(--mui-palette-common-white_states-main)",
                "fontFeatureSettings": "'liga' off, 'clig' off",
                "fontFamily": "Roboto, Helvetica, Arial, sans-serif",
                "fontSize": "0.9375rem",
                "fontStyle": "normal",
                "fontWeight": "500",
                "lineHeight": "26px /* 173.333% */",
                "letterSpacing": "0.46px",
                "textTransform": "uppercase"
              },
              "&.Mui-disabled:not(.Mui-focusVisible):not(:hover)": {
                "border": "0px solid var(--mui-palette-action-disabledBackground)"
              }
            },
            "&.MuiButton-sizeLarge.MuiButton-textSecondary": {
              "padding": "8px 11px",
              "borderRadius": "var(--mui-shape-borderRadius)",
              "background": "none",
              "opacity": "1",
              "boxShadow": "none",
              "&:not(.Mui-disabled):not(.Mui-focusVisible):not(:hover)": {
                "& .MuiTouchRipple-root": {
                  "width": "69px",
                  "height": "42px",
                  "background": "var(--mui-palette-secondary-_states-focusVisible)",
                  "padding": "0",
                  "opacity": "1",
                  "borderRadius": "0",
                  "boxShadow": "none"
                },
                "color": "var(--mui-palette-secondary-main)",
                "fontFeatureSettings": "'liga' off, 'clig' off",
                "fontFamily": "Roboto, Helvetica, Arial, sans-serif",
                "fontSize": "0.9375rem",
                "fontStyle": "normal",
                "fontWeight": "500",
                "lineHeight": "26px /* 173.333% */",
                "letterSpacing": "0.46px",
                "textTransform": "uppercase"
              },
              "&.Mui-disabled:not(.Mui-focusVisible):not(:hover)": {
                "border": "0px solid var(--mui-palette-action-disabledBackground)"
              }
            },
            "&.MuiButton-sizeLarge.MuiButton-textError": {
              "padding": "8px 11px",
              "borderRadius": "var(--mui-shape-borderRadius)",
              "background": "none",
              "opacity": "1",
              "boxShadow": "none",
              "&:not(.Mui-disabled):not(.Mui-focusVisible):not(:hover)": {
                "& .MuiTouchRipple-root": {
                  "width": "69px",
                  "height": "42px",
                  "background": "var(--mui-palette-error-_states-focusVisible)",
                  "padding": "0",
                  "opacity": "1",
                  "borderRadius": "0",
                  "boxShadow": "none"
                },
                "color": "var(--mui-palette-error-main)",
                "fontFeatureSettings": "'liga' off, 'clig' off",
                "fontFamily": "Roboto, Helvetica, Arial, sans-serif",
                "fontSize": "0.9375rem",
                "fontStyle": "normal",
                "fontWeight": "500",
                "lineHeight": "26px /* 173.333% */",
                "letterSpacing": "0.46px",
                "textTransform": "uppercase"
              },
              "&.Mui-disabled:not(.Mui-focusVisible):not(:hover)": {
                "border": "0px solid var(--mui-palette-action-disabledBackground)"
              }
            },
            "&.MuiButton-sizeLarge.MuiButton-textWarning": {
              "padding": "8px 11px",
              "borderRadius": "var(--mui-shape-borderRadius)",
              "background": "none",
              "opacity": "1",
              "boxShadow": "none",
              "&:not(.Mui-disabled):not(.Mui-focusVisible):not(:hover)": {
                "& .MuiTouchRipple-root": {
                  "width": "69px",
                  "height": "42px",
                  "background": "var(--mui-palette-warning-_states-focusVisible)",
                  "padding": "0",
                  "opacity": "1",
                  "borderRadius": "0",
                  "boxShadow": "none"
                },
                "color": "var(--mui-palette-warning-main)",
                "fontFeatureSettings": "'liga' off, 'clig' off",
                "fontFamily": "Roboto, Helvetica, Arial, sans-serif",
                "fontSize": "0.9375rem",
                "fontStyle": "normal",
                "fontWeight": "500",
                "lineHeight": "26px /* 173.333% */",
                "letterSpacing": "0.46px",
                "textTransform": "uppercase"
              },
              "&.Mui-disabled:not(.Mui-focusVisible):not(:hover)": {
                "border": "0px solid var(--mui-palette-action-disabledBackground)"
              }
            },
            "&.MuiButton-sizeLarge.MuiButton-textInfo": {
              "padding": "8px 11px",
              "borderRadius": "var(--mui-shape-borderRadius)",
              "background": "none",
              "opacity": "1",
              "boxShadow": "none",
              "&:not(.Mui-disabled):not(.Mui-focusVisible):not(:hover)": {
                "& .MuiTouchRipple-root": {
                  "width": "69px",
                  "height": "42px",
                  "background": "var(--mui-palette-primary-_states-focusVisible)",
                  "padding": "0",
                  "opacity": "1",
                  "borderRadius": "0",
                  "boxShadow": "none"
                },
                "color": "var(--mui-palette-info-main)",
                "fontFeatureSettings": "'liga' off, 'clig' off",
                "fontFamily": "Roboto, Helvetica, Arial, sans-serif",
                "fontSize": "0.9375rem",
                "fontStyle": "normal",
                "fontWeight": "500",
                "lineHeight": "26px /* 173.333% */",
                "letterSpacing": "0.46px",
                "textTransform": "uppercase"
              },
              "&.Mui-disabled:not(.Mui-focusVisible):not(:hover)": {
                "border": "0px solid var(--mui-palette-action-disabledBackground)"
              }
            },
            "&.MuiButton-sizeLarge.MuiButton-textSuccess": {
              "padding": "8px 11px",
              "borderRadius": "var(--mui-shape-borderRadius)",
              "background": "none",
              "opacity": "1",
              "boxShadow": "none",
              "&:not(.Mui-disabled):not(.Mui-focusVisible):not(:hover)": {
                "& .MuiTouchRipple-root": {
                  "width": "69px",
                  "height": "42px",
                  "background": "var(--mui-palette-success-_states-focusVisible)",
                  "padding": "0",
                  "opacity": "1",
                  "borderRadius": "0",
                  "boxShadow": "none"
                },
                "color": "var(--mui-palette-success-main)",
                "fontFeatureSettings": "'liga' off, 'clig' off",
                "fontFamily": "Roboto, Helvetica, Arial, sans-serif",
                "fontSize": "0.9375rem",
                "fontStyle": "normal",
                "fontWeight": "500",
                "lineHeight": "26px /* 173.333% */",
                "letterSpacing": "0.46px",
                "textTransform": "uppercase"
              },
              "&.Mui-disabled:not(.Mui-focusVisible):not(:hover)": {
                "border": "0px solid var(--mui-palette-action-disabledBackground)"
              }
            },
            "&.MuiButton-sizeSmall.MuiButton-textPrimary": {
              "&:not(.Mui-disabled):not(.Mui-focusVisible):not(:hover)": {
                "& .MuiTouchRipple-root": {
                  "width": "51px",
                  "height": "30px",
                  "background": "var(--mui-palette-primary-_states-focusVisible)",
                  "padding": "0",
                  "opacity": "1",
                  "borderRadius": "0",
                  "boxShadow": "none"
                },
                "color": "var(--mui-palette-primary-main)",
                "fontFamily": "Roboto, Helvetica, Arial, sans-serif",
                "fontSize": "0.8125rem",
                "fontStyle": "normal",
                "fontWeight": "500",
                "lineHeight": "22px /* 169.231% */",
                "letterSpacing": "0.46px",
                "textTransform": "uppercase",
                "padding": "4px 5px",
                "borderRadius": "var(--mui-shape-borderRadius)",
                "background": "none",
                "opacity": "1",
                "boxShadow": "none"
              }
            },
            "&.MuiButton-sizeSmall.MuiButton-textInherit": {
              "&:not(.Mui-disabled):not(.Mui-focusVisible):not(:hover)": {
                "& .MuiTouchRipple-root": {
                  "width": "51px",
                  "height": "30px",
                  "background": "var(--mui-palette-text-_states-focusVisible)",
                  "padding": "0",
                  "opacity": "1",
                  "borderRadius": "0",
                  "boxShadow": "none"
                },
                "color": "var(--mui-palette-text-primary)",
                "fontFamily": "Roboto, Helvetica, Arial, sans-serif",
                "fontSize": "0.8125rem",
                "fontStyle": "normal",
                "fontWeight": "500",
                "lineHeight": "22px /* 169.231% */",
                "letterSpacing": "0.46px",
                "textTransform": "uppercase",
                "padding": "4px 5px",
                "borderRadius": "var(--mui-shape-borderRadius)",
                "background": "none",
                "opacity": "1",
                "boxShadow": "none"
              }
            },
            "&.MuiButton-sizeSmall.MuiButton-textInherit (white)": {
              "&:not(.Mui-disabled):not(.Mui-focusVisible):not(:hover)": {
                "& .MuiTouchRipple-root": {
                  "width": "51px",
                  "height": "30px",
                  "background": "var(--mui-palette-common-white_states-focusVisible)",
                  "padding": "0",
                  "opacity": "1",
                  "borderRadius": "0",
                  "boxShadow": "none"
                },
                "color": "var(--mui-palette-common-white_states-main)",
                "fontFamily": "Roboto, Helvetica, Arial, sans-serif",
                "fontSize": "0.8125rem",
                "fontStyle": "normal",
                "fontWeight": "500",
                "lineHeight": "22px /* 169.231% */",
                "letterSpacing": "0.46px",
                "textTransform": "uppercase",
                "padding": "4px 5px",
                "borderRadius": "var(--mui-shape-borderRadius)",
                "background": "none",
                "opacity": "1",
                "boxShadow": "none"
              }
            },
            "&.MuiButton-sizeSmall.MuiButton-textSecondary": {
              "&:not(.Mui-disabled):not(.Mui-focusVisible):not(:hover)": {
                "& .MuiTouchRipple-root": {
                  "width": "51px",
                  "height": "30px",
                  "background": "var(--mui-palette-secondary-_states-focusVisible)",
                  "padding": "0",
                  "opacity": "1",
                  "borderRadius": "0",
                  "boxShadow": "none"
                },
                "color": "var(--mui-palette-secondary-main)",
                "fontFamily": "Roboto, Helvetica, Arial, sans-serif",
                "fontSize": "0.8125rem",
                "fontStyle": "normal",
                "fontWeight": "500",
                "lineHeight": "22px /* 169.231% */",
                "letterSpacing": "0.46px",
                "textTransform": "uppercase",
                "padding": "4px 5px",
                "borderRadius": "var(--mui-shape-borderRadius)",
                "background": "none",
                "opacity": "1",
                "boxShadow": "none"
              }
            },
            "&.MuiButton-sizeSmall.MuiButton-textError": {
              "&:not(.Mui-disabled):not(.Mui-focusVisible):not(:hover)": {
                "& .MuiTouchRipple-root": {
                  "width": "51px",
                  "height": "30px",
                  "background": "var(--mui-palette-error-_states-focusVisible)",
                  "padding": "0",
                  "opacity": "1",
                  "borderRadius": "0",
                  "boxShadow": "none"
                },
                "color": "var(--mui-palette-error-main)",
                "fontFamily": "Roboto, Helvetica, Arial, sans-serif",
                "fontSize": "0.8125rem",
                "fontStyle": "normal",
                "fontWeight": "500",
                "lineHeight": "22px /* 169.231% */",
                "letterSpacing": "0.46px",
                "textTransform": "uppercase",
                "padding": "4px 5px",
                "borderRadius": "var(--mui-shape-borderRadius)",
                "background": "none",
                "opacity": "1",
                "boxShadow": "none"
              }
            },
            "&.MuiButton-sizeSmall.MuiButton-textWarning": {
              "&:not(.Mui-disabled):not(.Mui-focusVisible):not(:hover)": {
                "& .MuiTouchRipple-root": {
                  "width": "51px",
                  "height": "30px",
                  "background": "var(--mui-palette-warning-_states-focusVisible)",
                  "padding": "0",
                  "opacity": "1",
                  "borderRadius": "0",
                  "boxShadow": "none"
                },
                "color": "var(--mui-palette-warning-main)",
                "fontFamily": "Roboto, Helvetica, Arial, sans-serif",
                "fontSize": "0.8125rem",
                "fontStyle": "normal",
                "fontWeight": "500",
                "lineHeight": "22px /* 169.231% */",
                "letterSpacing": "0.46px",
                "textTransform": "uppercase",
                "padding": "4px 5px",
                "borderRadius": "var(--mui-shape-borderRadius)",
                "background": "none",
                "opacity": "1",
                "boxShadow": "none"
              }
            },
            "&.MuiButton-sizeSmall.MuiButton-textInfo": {
              "&:not(.Mui-disabled):not(.Mui-focusVisible):not(:hover)": {
                "& .MuiTouchRipple-root": {
                  "width": "51px",
                  "height": "30px",
                  "background": "var(--mui-palette-primary-_states-focusVisible)",
                  "padding": "0",
                  "opacity": "1",
                  "borderRadius": "0",
                  "boxShadow": "none"
                },
                "color": "var(--mui-palette-info-main)",
                "fontFamily": "Roboto, Helvetica, Arial, sans-serif",
                "fontSize": "0.8125rem",
                "fontStyle": "normal",
                "fontWeight": "500",
                "lineHeight": "22px /* 169.231% */",
                "letterSpacing": "0.46px",
                "textTransform": "uppercase",
                "padding": "4px 5px",
                "borderRadius": "var(--mui-shape-borderRadius)",
                "background": "none",
                "opacity": "1",
                "boxShadow": "none"
              }
            },
            "&.MuiButton-sizeSmall.MuiButton-textSuccess": {
              "&:not(.Mui-disabled):not(.Mui-focusVisible):not(:hover)": {
                "& .MuiTouchRipple-root": {
                  "width": "51px",
                  "height": "30px",
                  "background": "var(--mui-palette-success-_states-focusVisible)",
                  "padding": "0",
                  "opacity": "1",
                  "borderRadius": "0",
                  "boxShadow": "none"
                },
                "color": "var(--mui-palette-success-main)",
                "fontFamily": "Roboto, Helvetica, Arial, sans-serif",
                "fontSize": "0.8125rem",
                "fontStyle": "normal",
                "fontWeight": "500",
                "lineHeight": "22px /* 169.231% */",
                "letterSpacing": "0.46px",
                "textTransform": "uppercase",
                "padding": "4px 5px",
                "borderRadius": "var(--mui-shape-borderRadius)",
                "background": "none",
                "opacity": "1",
                "boxShadow": "none"
              }
            }
          }
        }
      },
      "MuiSwitch": {
        "styleOverrides": {
          "root": {
            "&.MuiSwitch-sizeMedium:has(.MuiSwitch-colorDefault)": {
              "& .MuiSwitch-switchBase": {
                "padding": "9px",
                "borderRadius": "100px",
                "background": "none",
                "opacity": "1",
                "boxShadow": "none"
              },
              "&:not(:has(.Mui-checked)):not(:has(.Mui-disabled)):has(.Mui-focusVisible)": {
                "& .MuiSwitch-switchBase": {
                  "transform": "translateX(0px) translateY(0px)"
                }
              },
              "&:not(:has(.Mui-checked)):not(:has(.Mui-disabled)):not(:has(.Mui-focusVisible))": {
                "width": "58px",
                "height": "38px",
                "transform": "translateX(0px) translateY(0px)",
                "padding": "12px",
                "background": "none",
                "opacity": "1",
                "borderRadius": "0",
                "boxShadow": "none",
                "& .MuiSwitch-switchBase": {
                  "transform": "translateX(0px) translateY(0px)",
                  "& .MuiSwitch-thumb": {
                    "width": "20px",
                    "height": "20px",
                    "background": "var(--mui-palette-_components-switch-knobFillEnabled)",
                    "boxShadow": "var(--mui-shadows-1)",
                    "padding": "0",
                    "opacity": "1",
                    "borderRadius": "50%"
                  },
                  "& + .MuiSwitch-track": {
                    "width": "34px",
                    "height": "14px",
                    "borderRadius": "100px",
                    "background": "var(--mui-palette-_components-switch-slideFill)",
                    "padding": "0",
                    "opacity": "0.38",
                    "boxShadow": "none",
                    "transform": "translateX(0px) translateY(0px)"
                  }
                }
              },
              "&:has(.Mui-checked):not(:has(.Mui-disabled)):has(.Mui-focusVisible)": {
                "& .MuiSwitch-switchBase": {
                  "transform": "translateX(20px) translateY(0px)"
                }
              },
              "&:has(.Mui-checked):not(:has(.Mui-disabled)):not(:has(.Mui-focusVisible))": {
                "width": "58px",
                "height": "38px",
                "transform": "translateX(0px) translateY(0px)",
                "padding": "12px",
                "background": "none",
                "opacity": "1",
                "borderRadius": "0",
                "boxShadow": "none",
                "& .MuiSwitch-switchBase": {
                  "transform": "translateX(20px) translateY(0px)",
                  "& .MuiSwitch-thumb": {
                    "width": "20px",
                    "height": "20px",
                    "background": "var(--mui-palette-common-white_states-main)",
                    "boxShadow": "var(--mui-shadows-1)",
                    "padding": "0",
                    "opacity": "1",
                    "borderRadius": "50%"
                  },
                  "& + .MuiSwitch-track": {
                    "width": "34px",
                    "height": "14px",
                    "borderRadius": "100px",
                    "background": "var(--mui-palette-_components-switch-slideFill)",
                    "padding": "0",
                    "opacity": "0.5",
                    "boxShadow": "none",
                    "transform": "translateX(0px) translateY(0px)"
                  }
                }
              }
            },
            "&.MuiSwitch-sizeMedium:has(.MuiSwitch-colorPrimary)": {
              "& .MuiSwitch-switchBase": {
                "padding": "9px",
                "borderRadius": "100px",
                "background": "none",
                "opacity": "1",
                "boxShadow": "none"
              },
              "&:not(:has(.Mui-checked)):not(:has(.Mui-disabled)):has(.Mui-focusVisible)": {
                "& .MuiSwitch-switchBase": {
                  "transform": "translateX(0px) translateY(0px)"
                }
              },
              "&:not(:has(.Mui-checked)):not(:has(.Mui-disabled)):not(:has(.Mui-focusVisible))": {
                "width": "58px",
                "height": "38px",
                "transform": "translateX(0px) translateY(0px)",
                "padding": "12px",
                "background": "none",
                "opacity": "1",
                "borderRadius": "0",
                "boxShadow": "none",
                "& .MuiSwitch-switchBase": {
                  "transform": "translateX(0px) translateY(0px)",
                  "& .MuiSwitch-thumb": {
                    "width": "20px",
                    "height": "20px",
                    "background": "var(--mui-palette-_components-switch-knobFillEnabled)",
                    "boxShadow": "var(--mui-shadows-1)",
                    "padding": "0",
                    "opacity": "1",
                    "borderRadius": "50%"
                  },
                  "& + .MuiSwitch-track": {
                    "width": "34px",
                    "height": "14px",
                    "borderRadius": "100px",
                    "background": "var(--mui-palette-_components-switch-slideFill)",
                    "padding": "0",
                    "opacity": "0.38",
                    "boxShadow": "none",
                    "transform": "translateX(0px) translateY(0px)"
                  }
                }
              },
              "&:has(.Mui-checked):not(:has(.Mui-disabled)):has(.Mui-focusVisible)": {
                "& .MuiSwitch-switchBase": {
                  "transform": "translateX(20px) translateY(0px)"
                }
              },
              "&:has(.Mui-checked):not(:has(.Mui-disabled)):not(:has(.Mui-focusVisible))": {
                "width": "58px",
                "height": "38px",
                "transform": "translateX(0px) translateY(0px)",
                "padding": "12px",
                "background": "none",
                "opacity": "1",
                "borderRadius": "0",
                "boxShadow": "none",
                "& .MuiSwitch-switchBase": {
                  "transform": "translateX(20px) translateY(0px)",
                  "& .MuiSwitch-thumb": {
                    "width": "20px",
                    "height": "20px",
                    "background": "var(--mui-palette-primary-main)",
                    "boxShadow": "var(--mui-shadows-1)",
                    "padding": "0",
                    "opacity": "1",
                    "borderRadius": "50%"
                  },
                  "& + .MuiSwitch-track": {
                    "width": "34px",
                    "height": "14px",
                    "borderRadius": "100px",
                    "background": "var(--mui-palette-primary-main)",
                    "padding": "0",
                    "opacity": "0.5",
                    "boxShadow": "none",
                    "transform": "translateX(0px) translateY(0px)"
                  }
                }
              }
            },
            "&.MuiSwitch-sizeMedium:has(.MuiSwitch-colorError)": {
              "& .MuiSwitch-switchBase": {
                "padding": "9px",
                "borderRadius": "100px",
                "background": "none",
                "opacity": "1",
                "boxShadow": "none"
              },
              "&:not(:has(.Mui-checked)):not(:has(.Mui-disabled)):has(.Mui-focusVisible)": {
                "& .MuiSwitch-switchBase": {
                  "transform": "translateX(0px) translateY(0px)"
                }
              },
              "&:not(:has(.Mui-checked)):not(:has(.Mui-disabled)):not(:has(.Mui-focusVisible))": {
                "width": "58px",
                "height": "38px",
                "transform": "translateX(0px) translateY(0px)",
                "padding": "12px",
                "background": "none",
                "opacity": "1",
                "borderRadius": "0",
                "boxShadow": "none",
                "& .MuiSwitch-switchBase": {
                  "transform": "translateX(0px) translateY(0px)",
                  "& .MuiSwitch-thumb": {
                    "width": "20px",
                    "height": "20px",
                    "background": "var(--mui-palette-_components-switch-knobFillEnabled)",
                    "boxShadow": "var(--mui-shadows-1)",
                    "padding": "0",
                    "opacity": "1",
                    "borderRadius": "50%"
                  },
                  "& + .MuiSwitch-track": {
                    "width": "34px",
                    "height": "14px",
                    "borderRadius": "100px",
                    "background": "var(--mui-palette-_components-switch-slideFill)",
                    "padding": "0",
                    "opacity": "0.38",
                    "boxShadow": "none",
                    "transform": "translateX(0px) translateY(0px)"
                  }
                }
              },
              "&:has(.Mui-checked):not(:has(.Mui-disabled)):has(.Mui-focusVisible)": {
                "& .MuiSwitch-switchBase": {
                  "transform": "translateX(20px) translateY(0px)"
                }
              },
              "&:has(.Mui-checked):not(:has(.Mui-disabled)):not(:has(.Mui-focusVisible))": {
                "width": "58px",
                "height": "38px",
                "transform": "translateX(0px) translateY(0px)",
                "padding": "12px",
                "background": "none",
                "opacity": "1",
                "borderRadius": "0",
                "boxShadow": "none",
                "& .MuiSwitch-switchBase": {
                  "transform": "translateX(20px) translateY(0px)",
                  "& .MuiSwitch-thumb": {
                    "width": "20px",
                    "height": "20px",
                    "background": "var(--mui-palette-error-main)",
                    "boxShadow": "var(--mui-shadows-1)",
                    "padding": "0",
                    "opacity": "1",
                    "borderRadius": "50%"
                  },
                  "& + .MuiSwitch-track": {
                    "width": "34px",
                    "height": "14px",
                    "borderRadius": "100px",
                    "background": "var(--mui-palette-error-main)",
                    "padding": "0",
                    "opacity": "0.5",
                    "boxShadow": "none",
                    "transform": "translateX(0px) translateY(0px)"
                  }
                }
              }
            },
            "&.MuiSwitch-sizeMedium:has(.MuiSwitch-colorWarning)": {
              "& .MuiSwitch-switchBase": {
                "padding": "9px",
                "borderRadius": "100px",
                "background": "none",
                "opacity": "1",
                "boxShadow": "none"
              },
              "&:not(:has(.Mui-checked)):not(:has(.Mui-disabled)):has(.Mui-focusVisible)": {
                "& .MuiSwitch-switchBase": {
                  "transform": "translateX(0px) translateY(0px)"
                }
              },
              "&:not(:has(.Mui-checked)):not(:has(.Mui-disabled)):not(:has(.Mui-focusVisible))": {
                "width": "58px",
                "height": "38px",
                "transform": "translateX(0px) translateY(0px)",
                "padding": "12px",
                "background": "none",
                "opacity": "1",
                "borderRadius": "0",
                "boxShadow": "none",
                "& .MuiSwitch-switchBase": {
                  "transform": "translateX(0px) translateY(0px)",
                  "& .MuiSwitch-thumb": {
                    "width": "20px",
                    "height": "20px",
                    "background": "var(--mui-palette-_components-switch-knobFillEnabled)",
                    "boxShadow": "var(--mui-shadows-1)",
                    "padding": "0",
                    "opacity": "1",
                    "borderRadius": "50%"
                  },
                  "& + .MuiSwitch-track": {
                    "width": "34px",
                    "height": "14px",
                    "borderRadius": "100px",
                    "background": "var(--mui-palette-_components-switch-slideFill)",
                    "padding": "0",
                    "opacity": "0.38",
                    "boxShadow": "none",
                    "transform": "translateX(0px) translateY(0px)"
                  }
                }
              },
              "&:has(.Mui-checked):not(:has(.Mui-disabled)):has(.Mui-focusVisible)": {
                "& .MuiSwitch-switchBase": {
                  "transform": "translateX(20px) translateY(0px)"
                }
              },
              "&:has(.Mui-checked):not(:has(.Mui-disabled)):not(:has(.Mui-focusVisible))": {
                "width": "58px",
                "height": "38px",
                "transform": "translateX(0px) translateY(0px)",
                "padding": "12px",
                "background": "none",
                "opacity": "1",
                "borderRadius": "0",
                "boxShadow": "none",
                "& .MuiSwitch-switchBase": {
                  "transform": "translateX(20px) translateY(0px)",
                  "& .MuiSwitch-thumb": {
                    "width": "20px",
                    "height": "20px",
                    "background": "var(--mui-palette-warning-main)",
                    "boxShadow": "var(--mui-shadows-1)",
                    "padding": "0",
                    "opacity": "1",
                    "borderRadius": "50%"
                  },
                  "& + .MuiSwitch-track": {
                    "width": "34px",
                    "height": "14px",
                    "borderRadius": "100px",
                    "background": "var(--mui-palette-warning-main)",
                    "padding": "0",
                    "opacity": "0.5",
                    "boxShadow": "none",
                    "transform": "translateX(0px) translateY(0px)"
                  }
                }
              }
            },
            "&.MuiSwitch-sizeMedium:has(.MuiSwitch-colorInfo)": {
              "& .MuiSwitch-switchBase": {
                "padding": "9px",
                "borderRadius": "100px",
                "background": "none",
                "opacity": "1",
                "boxShadow": "none"
              },
              "&:not(:has(.Mui-checked)):not(:has(.Mui-disabled)):has(.Mui-focusVisible)": {
                "& .MuiSwitch-switchBase": {
                  "transform": "translateX(0px) translateY(0px)"
                }
              },
              "&:not(:has(.Mui-checked)):not(:has(.Mui-disabled)):not(:has(.Mui-focusVisible))": {
                "width": "58px",
                "height": "38px",
                "transform": "translateX(0px) translateY(0px)",
                "padding": "12px",
                "background": "none",
                "opacity": "1",
                "borderRadius": "0",
                "boxShadow": "none",
                "& .MuiSwitch-switchBase": {
                  "transform": "translateX(0px) translateY(0px)",
                  "& .MuiSwitch-thumb": {
                    "width": "20px",
                    "height": "20px",
                    "background": "var(--mui-palette-_components-switch-knobFillEnabled)",
                    "boxShadow": "var(--mui-shadows-1)",
                    "padding": "0",
                    "opacity": "1",
                    "borderRadius": "50%"
                  },
                  "& + .MuiSwitch-track": {
                    "width": "34px",
                    "height": "14px",
                    "borderRadius": "100px",
                    "background": "var(--mui-palette-_components-switch-slideFill)",
                    "padding": "0",
                    "opacity": "0.38",
                    "boxShadow": "none",
                    "transform": "translateX(0px) translateY(0px)"
                  }
                }
              },
              "&:has(.Mui-checked):not(:has(.Mui-disabled)):has(.Mui-focusVisible)": {
                "& .MuiSwitch-switchBase": {
                  "transform": "translateX(20px) translateY(0px)"
                }
              },
              "&:has(.Mui-checked):not(:has(.Mui-disabled)):not(:has(.Mui-focusVisible))": {
                "width": "58px",
                "height": "38px",
                "transform": "translateX(0px) translateY(0px)",
                "padding": "12px",
                "background": "none",
                "opacity": "1",
                "borderRadius": "0",
                "boxShadow": "none",
                "& .MuiSwitch-switchBase": {
                  "transform": "translateX(20px) translateY(0px)",
                  "& .MuiSwitch-thumb": {
                    "width": "20px",
                    "height": "20px",
                    "background": "var(--mui-palette-info-main)",
                    "boxShadow": "var(--mui-shadows-1)",
                    "padding": "0",
                    "opacity": "1",
                    "borderRadius": "50%"
                  },
                  "& + .MuiSwitch-track": {
                    "width": "34px",
                    "height": "14px",
                    "borderRadius": "100px",
                    "background": "var(--mui-palette-info-main)",
                    "padding": "0",
                    "opacity": "0.5",
                    "boxShadow": "none",
                    "transform": "translateX(0px) translateY(0px)"
                  }
                }
              }
            },
            "&.MuiSwitch-sizeMedium:has(.MuiSwitch-colorSuccess)": {
              "& .MuiSwitch-switchBase": {
                "padding": "9px",
                "borderRadius": "100px",
                "background": "none",
                "opacity": "1",
                "boxShadow": "none"
              },
              "&:not(:has(.Mui-checked)):not(:has(.Mui-disabled)):has(.Mui-focusVisible)": {
                "& .MuiSwitch-switchBase": {
                  "transform": "translateX(0px) translateY(0px)"
                }
              },
              "&:not(:has(.Mui-checked)):not(:has(.Mui-disabled)):not(:has(.Mui-focusVisible))": {
                "width": "58px",
                "height": "38px",
                "transform": "translateX(0px) translateY(0px)",
                "padding": "12px",
                "background": "none",
                "opacity": "1",
                "borderRadius": "0",
                "boxShadow": "none",
                "& .MuiSwitch-switchBase": {
                  "transform": "translateX(0px) translateY(0px)",
                  "& .MuiSwitch-thumb": {
                    "width": "20px",
                    "height": "20px",
                    "background": "var(--mui-palette-_components-switch-knobFillEnabled)",
                    "boxShadow": "var(--mui-shadows-1)",
                    "padding": "0",
                    "opacity": "1",
                    "borderRadius": "50%"
                  },
                  "& + .MuiSwitch-track": {
                    "width": "34px",
                    "height": "14px",
                    "borderRadius": "100px",
                    "background": "var(--mui-palette-_components-switch-slideFill)",
                    "padding": "0",
                    "opacity": "0.38",
                    "boxShadow": "none",
                    "transform": "translateX(0px) translateY(0px)"
                  }
                }
              },
              "&:has(.Mui-checked):not(:has(.Mui-disabled)):has(.Mui-focusVisible)": {
                "& .MuiSwitch-switchBase": {
                  "transform": "translateX(20px) translateY(0px)"
                }
              },
              "&:has(.Mui-checked):not(:has(.Mui-disabled)):not(:has(.Mui-focusVisible))": {
                "width": "58px",
                "height": "38px",
                "transform": "translateX(0px) translateY(0px)",
                "padding": "12px",
                "background": "none",
                "opacity": "1",
                "borderRadius": "0",
                "boxShadow": "none",
                "& .MuiSwitch-switchBase": {
                  "transform": "translateX(20px) translateY(0px)",
                  "& .MuiSwitch-thumb": {
                    "width": "20px",
                    "height": "20px",
                    "background": "var(--mui-palette-success-main)",
                    "boxShadow": "var(--mui-shadows-1)",
                    "padding": "0",
                    "opacity": "1",
                    "borderRadius": "50%"
                  },
                  "& + .MuiSwitch-track": {
                    "width": "34px",
                    "height": "14px",
                    "borderRadius": "100px",
                    "background": "var(--mui-palette-success-main)",
                    "padding": "0",
                    "opacity": "0.5",
                    "boxShadow": "none",
                    "transform": "translateX(0px) translateY(0px)"
                  }
                }
              }
            },
            "&.MuiSwitch-sizeMedium:has(.MuiSwitch-colorSecondary)": {
              "& .MuiSwitch-switchBase": {
                "padding": "9px",
                "borderRadius": "100px",
                "background": "none",
                "opacity": "1",
                "boxShadow": "none"
              },
              "&:has(.Mui-checked):not(:has(.Mui-disabled)):has(.Mui-focusVisible)": {
                "& .MuiSwitch-switchBase": {
                  "transform": "translateX(20px) translateY(0px)"
                }
              },
              "&:has(.Mui-checked):not(:has(.Mui-disabled)):not(:has(.Mui-focusVisible))": {
                "width": "58px",
                "height": "38px",
                "transform": "translateX(0px) translateY(0px)",
                "padding": "12px",
                "background": "none",
                "opacity": "1",
                "borderRadius": "0",
                "boxShadow": "none",
                "& .MuiSwitch-switchBase": {
                  "transform": "translateX(20px) translateY(0px)",
                  "& .MuiSwitch-thumb": {
                    "width": "20px",
                    "height": "20px",
                    "background": "var(--mui-palette-secondary-main)",
                    "boxShadow": "var(--mui-shadows-1)",
                    "padding": "0",
                    "opacity": "1",
                    "borderRadius": "50%"
                  },
                  "& + .MuiSwitch-track": {
                    "width": "34px",
                    "height": "14px",
                    "borderRadius": "100px",
                    "background": "var(--mui-palette-secondary-main)",
                    "padding": "0",
                    "opacity": "0.5",
                    "boxShadow": "none",
                    "transform": "translateX(0px) translateY(0px)"
                  }
                }
              },
              "&:not(:has(.Mui-checked)):not(:has(.Mui-disabled)):has(.Mui-focusVisible)": {
                "& .MuiSwitch-switchBase": {
                  "transform": "translateX(0px) translateY(0px)"
                }
              },
              "&:not(:has(.Mui-checked)):not(:has(.Mui-disabled)):not(:has(.Mui-focusVisible))": {
                "width": "58px",
                "height": "38px",
                "transform": "translateX(0px) translateY(0px)",
                "padding": "12px",
                "background": "none",
                "opacity": "1",
                "borderRadius": "0",
                "boxShadow": "none",
                "& .MuiSwitch-switchBase": {
                  "transform": "translateX(0px) translateY(0px)",
                  "& .MuiSwitch-thumb": {
                    "width": "20px",
                    "height": "20px",
                    "background": "var(--mui-palette-_components-switch-knobFillEnabled)",
                    "boxShadow": "var(--mui-shadows-1)",
                    "padding": "0",
                    "opacity": "1",
                    "borderRadius": "50%"
                  },
                  "& + .MuiSwitch-track": {
                    "width": "34px",
                    "height": "14px",
                    "borderRadius": "100px",
                    "background": "var(--mui-palette-_components-switch-slideFill)",
                    "padding": "0",
                    "opacity": "0.38",
                    "boxShadow": "none",
                    "transform": "translateX(0px) translateY(0px)"
                  }
                }
              }
            },
            "&.MuiSwitch-sizeSmall:has(.MuiSwitch-colorDefault)": {
              "& .MuiSwitch-switchBase": {
                "padding": "4px",
                "borderRadius": "100px",
                "background": "none",
                "opacity": "1",
                "boxShadow": "none"
              },
              "&:not(:has(.Mui-checked)):not(:has(.Mui-disabled)):has(.Mui-focusVisible)": {
                "& .MuiSwitch-switchBase": {
                  "transform": "translateX(0px) translateY(0px)"
                }
              },
              "&:not(:has(.Mui-checked)):not(:has(.Mui-disabled)):not(:has(.Mui-focusVisible))": {
                "width": "40px",
                "height": "24px",
                "transform": "translateX(0px) translateY(0px)",
                "padding": "7px",
                "background": "none",
                "opacity": "1",
                "borderRadius": "0",
                "boxShadow": "none",
                "& .MuiSwitch-switchBase": {
                  "transform": "translateX(0px) translateY(0px)",
                  "& .MuiSwitch-thumb": {
                    "width": "16px",
                    "height": "16px",
                    "background": "var(--mui-palette-_components-switch-knobFillEnabled)",
                    "boxShadow": "var(--mui-shadows-1)",
                    "padding": "0",
                    "opacity": "1",
                    "borderRadius": "50%"
                  },
                  "& + .MuiSwitch-track": {
                    "width": "26px",
                    "height": "10px",
                    "borderRadius": "100px",
                    "background": "var(--mui-palette-_components-switch-slideFill)",
                    "padding": "0",
                    "opacity": "0.38",
                    "boxShadow": "none",
                    "transform": "translateX(0px) translateY(0px)"
                  }
                }
              },
              "&:has(.Mui-checked):not(:has(.Mui-disabled)):has(.Mui-focusVisible)": {
                "& .MuiSwitch-switchBase": {
                  "transform": "translateX(16px) translateY(0px)"
                }
              },
              "&:has(.Mui-checked):not(:has(.Mui-disabled)):not(:has(.Mui-focusVisible))": {
                "width": "40px",
                "height": "24px",
                "transform": "translateX(0px) translateY(0px)",
                "padding": "7px",
                "background": "none",
                "opacity": "1",
                "borderRadius": "0",
                "boxShadow": "none",
                "& .MuiSwitch-switchBase": {
                  "transform": "translateX(16px) translateY(0px)",
                  "& .MuiSwitch-thumb": {
                    "width": "16px",
                    "height": "16px",
                    "background": "var(--mui-palette-common-white_states-main)",
                    "boxShadow": "var(--mui-shadows-1)",
                    "padding": "0",
                    "opacity": "1",
                    "borderRadius": "50%"
                  },
                  "& + .MuiSwitch-track": {
                    "width": "26px",
                    "height": "10px",
                    "borderRadius": "100px",
                    "background": "var(--mui-palette-_components-switch-slideFill)",
                    "padding": "0",
                    "opacity": "0.5",
                    "boxShadow": "none",
                    "transform": "translateX(0px) translateY(0px)"
                  }
                }
              }
            },
            "&.MuiSwitch-sizeSmall:has(.MuiSwitch-colorPrimary)": {
              "& .MuiSwitch-switchBase": {
                "padding": "4px",
                "borderRadius": "100px",
                "background": "none",
                "opacity": "1",
                "boxShadow": "none"
              },
              "&:not(:has(.Mui-checked)):not(:has(.Mui-disabled)):has(.Mui-focusVisible)": {
                "& .MuiSwitch-switchBase": {
                  "transform": "translateX(0px) translateY(0px)"
                }
              },
              "&:not(:has(.Mui-checked)):not(:has(.Mui-disabled)):not(:has(.Mui-focusVisible))": {
                "width": "40px",
                "height": "24px",
                "transform": "translateX(0px) translateY(0px)",
                "padding": "7px",
                "background": "none",
                "opacity": "1",
                "borderRadius": "0",
                "boxShadow": "none",
                "& .MuiSwitch-switchBase": {
                  "transform": "translateX(0px) translateY(0px)",
                  "& .MuiSwitch-thumb": {
                    "width": "16px",
                    "height": "16px",
                    "background": "var(--mui-palette-_components-switch-knobFillEnabled)",
                    "boxShadow": "var(--mui-shadows-1)",
                    "padding": "0",
                    "opacity": "1",
                    "borderRadius": "50%"
                  },
                  "& + .MuiSwitch-track": {
                    "width": "26px",
                    "height": "10px",
                    "borderRadius": "100px",
                    "background": "var(--mui-palette-_components-switch-slideFill)",
                    "padding": "0",
                    "opacity": "0.38",
                    "boxShadow": "none",
                    "transform": "translateX(0px) translateY(0px)"
                  }
                }
              },
              "&:has(.Mui-checked):not(:has(.Mui-disabled)):has(.Mui-focusVisible)": {
                "& .MuiSwitch-switchBase": {
                  "transform": "translateX(16px) translateY(0px)"
                }
              },
              "&:has(.Mui-checked):not(:has(.Mui-disabled)):not(:has(.Mui-focusVisible))": {
                "width": "40px",
                "height": "24px",
                "transform": "translateX(0px) translateY(0px)",
                "padding": "7px",
                "background": "none",
                "opacity": "1",
                "borderRadius": "0",
                "boxShadow": "none",
                "& .MuiSwitch-switchBase": {
                  "transform": "translateX(16px) translateY(0px)",
                  "& .MuiSwitch-thumb": {
                    "width": "16px",
                    "height": "16px",
                    "background": "var(--mui-palette-primary-main)",
                    "boxShadow": "var(--mui-shadows-1)",
                    "padding": "0",
                    "opacity": "1",
                    "borderRadius": "50%"
                  },
                  "& + .MuiSwitch-track": {
                    "width": "26px",
                    "height": "10px",
                    "borderRadius": "100px",
                    "background": "var(--mui-palette-primary-main)",
                    "padding": "0",
                    "opacity": "0.5",
                    "boxShadow": "none",
                    "transform": "translateX(0px) translateY(0px)"
                  }
                }
              }
            },
            "&.MuiSwitch-sizeSmall:has(.MuiSwitch-colorError)": {
              "& .MuiSwitch-switchBase": {
                "padding": "4px",
                "borderRadius": "100px",
                "background": "none",
                "opacity": "1",
                "boxShadow": "none"
              },
              "&:not(:has(.Mui-checked)):not(:has(.Mui-disabled)):has(.Mui-focusVisible)": {
                "& .MuiSwitch-switchBase": {
                  "transform": "translateX(0px) translateY(0px)"
                }
              },
              "&:not(:has(.Mui-checked)):not(:has(.Mui-disabled)):not(:has(.Mui-focusVisible))": {
                "width": "40px",
                "height": "24px",
                "transform": "translateX(0px) translateY(0px)",
                "padding": "7px",
                "background": "none",
                "opacity": "1",
                "borderRadius": "0",
                "boxShadow": "none",
                "& .MuiSwitch-switchBase": {
                  "transform": "translateX(0px) translateY(0px)",
                  "& .MuiSwitch-thumb": {
                    "width": "16px",
                    "height": "16px",
                    "background": "var(--mui-palette-_components-switch-knobFillEnabled)",
                    "boxShadow": "var(--mui-shadows-1)",
                    "padding": "0",
                    "opacity": "1",
                    "borderRadius": "50%"
                  },
                  "& + .MuiSwitch-track": {
                    "width": "26px",
                    "height": "10px",
                    "borderRadius": "100px",
                    "background": "var(--mui-palette-_components-switch-slideFill)",
                    "padding": "0",
                    "opacity": "0.38",
                    "boxShadow": "none",
                    "transform": "translateX(0px) translateY(0px)"
                  }
                }
              },
              "&:has(.Mui-checked):not(:has(.Mui-disabled)):has(.Mui-focusVisible)": {
                "& .MuiSwitch-switchBase": {
                  "transform": "translateX(16px) translateY(0px)"
                }
              },
              "&:has(.Mui-checked):not(:has(.Mui-disabled)):not(:has(.Mui-focusVisible))": {
                "width": "40px",
                "height": "24px",
                "transform": "translateX(0px) translateY(0px)",
                "padding": "7px",
                "background": "none",
                "opacity": "1",
                "borderRadius": "0",
                "boxShadow": "none",
                "& .MuiSwitch-switchBase": {
                  "transform": "translateX(16px) translateY(0px)",
                  "& .MuiSwitch-thumb": {
                    "width": "16px",
                    "height": "16px",
                    "background": "var(--mui-palette-error-main)",
                    "boxShadow": "var(--mui-shadows-1)",
                    "padding": "0",
                    "opacity": "1",
                    "borderRadius": "50%"
                  },
                  "& + .MuiSwitch-track": {
                    "width": "26px",
                    "height": "10px",
                    "borderRadius": "100px",
                    "background": "var(--mui-palette-error-main)",
                    "padding": "0",
                    "opacity": "0.5",
                    "boxShadow": "none",
                    "transform": "translateX(0px) translateY(0px)"
                  }
                }
              }
            },
            "&.MuiSwitch-sizeSmall:has(.MuiSwitch-colorWarning)": {
              "& .MuiSwitch-switchBase": {
                "padding": "4px",
                "borderRadius": "100px",
                "background": "none",
                "opacity": "1",
                "boxShadow": "none"
              },
              "&:not(:has(.Mui-checked)):not(:has(.Mui-disabled)):has(.Mui-focusVisible)": {
                "& .MuiSwitch-switchBase": {
                  "transform": "translateX(0px) translateY(0px)"
                }
              },
              "&:not(:has(.Mui-checked)):not(:has(.Mui-disabled)):not(:has(.Mui-focusVisible))": {
                "width": "40px",
                "height": "24px",
                "transform": "translateX(0px) translateY(0px)",
                "padding": "7px",
                "background": "none",
                "opacity": "1",
                "borderRadius": "0",
                "boxShadow": "none",
                "& .MuiSwitch-switchBase": {
                  "transform": "translateX(0px) translateY(0px)",
                  "& .MuiSwitch-thumb": {
                    "width": "16px",
                    "height": "16px",
                    "background": "var(--mui-palette-_components-switch-knobFillEnabled)",
                    "boxShadow": "var(--mui-shadows-1)",
                    "padding": "0",
                    "opacity": "1",
                    "borderRadius": "50%"
                  },
                  "& + .MuiSwitch-track": {
                    "width": "26px",
                    "height": "10px",
                    "borderRadius": "100px",
                    "background": "var(--mui-palette-_components-switch-slideFill)",
                    "padding": "0",
                    "opacity": "0.38",
                    "boxShadow": "none",
                    "transform": "translateX(0px) translateY(0px)"
                  }
                }
              },
              "&:has(.Mui-checked):not(:has(.Mui-disabled)):has(.Mui-focusVisible)": {
                "& .MuiSwitch-switchBase": {
                  "transform": "translateX(16px) translateY(0px)"
                }
              },
              "&:has(.Mui-checked):not(:has(.Mui-disabled)):not(:has(.Mui-focusVisible))": {
                "width": "40px",
                "height": "24px",
                "transform": "translateX(0px) translateY(0px)",
                "padding": "7px",
                "background": "none",
                "opacity": "1",
                "borderRadius": "0",
                "boxShadow": "none",
                "& .MuiSwitch-switchBase": {
                  "transform": "translateX(16px) translateY(0px)",
                  "& .MuiSwitch-thumb": {
                    "width": "16px",
                    "height": "16px",
                    "background": "var(--mui-palette-warning-main)",
                    "boxShadow": "var(--mui-shadows-1)",
                    "padding": "0",
                    "opacity": "1",
                    "borderRadius": "50%"
                  },
                  "& + .MuiSwitch-track": {
                    "width": "26px",
                    "height": "10px",
                    "borderRadius": "100px",
                    "background": "var(--mui-palette-warning-main)",
                    "padding": "0",
                    "opacity": "0.5",
                    "boxShadow": "none",
                    "transform": "translateX(0px) translateY(0px)"
                  }
                }
              }
            },
            "&.MuiSwitch-sizeSmall:has(.MuiSwitch-colorInfo)": {
              "& .MuiSwitch-switchBase": {
                "padding": "4px",
                "borderRadius": "100px",
                "background": "none",
                "opacity": "1",
                "boxShadow": "none"
              },
              "&:not(:has(.Mui-checked)):not(:has(.Mui-disabled)):has(.Mui-focusVisible)": {
                "& .MuiSwitch-switchBase": {
                  "transform": "translateX(0px) translateY(0px)"
                }
              },
              "&:not(:has(.Mui-checked)):not(:has(.Mui-disabled)):not(:has(.Mui-focusVisible))": {
                "width": "40px",
                "height": "24px",
                "transform": "translateX(0px) translateY(0px)",
                "padding": "7px",
                "background": "none",
                "opacity": "1",
                "borderRadius": "0",
                "boxShadow": "none",
                "& .MuiSwitch-switchBase": {
                  "transform": "translateX(0px) translateY(0px)",
                  "& .MuiSwitch-thumb": {
                    "width": "16px",
                    "height": "16px",
                    "background": "var(--mui-palette-_components-switch-knobFillEnabled)",
                    "boxShadow": "var(--mui-shadows-1)",
                    "padding": "0",
                    "opacity": "1",
                    "borderRadius": "50%"
                  },
                  "& + .MuiSwitch-track": {
                    "width": "26px",
                    "height": "10px",
                    "borderRadius": "100px",
                    "background": "var(--mui-palette-_components-switch-slideFill)",
                    "padding": "0",
                    "opacity": "0.38",
                    "boxShadow": "none",
                    "transform": "translateX(0px) translateY(0px)"
                  }
                }
              },
              "&:has(.Mui-checked):not(:has(.Mui-disabled)):has(.Mui-focusVisible)": {
                "& .MuiSwitch-switchBase": {
                  "transform": "translateX(16px) translateY(0px)"
                }
              },
              "&:has(.Mui-checked):not(:has(.Mui-disabled)):not(:has(.Mui-focusVisible))": {
                "width": "40px",
                "height": "24px",
                "transform": "translateX(0px) translateY(0px)",
                "padding": "7px",
                "background": "none",
                "opacity": "1",
                "borderRadius": "0",
                "boxShadow": "none",
                "& .MuiSwitch-switchBase": {
                  "transform": "translateX(16px) translateY(0px)",
                  "& .MuiSwitch-thumb": {
                    "width": "16px",
                    "height": "16px",
                    "background": "var(--mui-palette-info-main)",
                    "boxShadow": "var(--mui-shadows-1)",
                    "padding": "0",
                    "opacity": "1",
                    "borderRadius": "50%"
                  },
                  "& + .MuiSwitch-track": {
                    "width": "26px",
                    "height": "10px",
                    "borderRadius": "100px",
                    "background": "var(--mui-palette-info-main)",
                    "padding": "0",
                    "opacity": "0.5",
                    "boxShadow": "none",
                    "transform": "translateX(0px) translateY(0px)"
                  }
                }
              }
            },
            "&.MuiSwitch-sizeSmall:has(.MuiSwitch-colorSuccess)": {
              "& .MuiSwitch-switchBase": {
                "padding": "4px",
                "borderRadius": "100px",
                "background": "none",
                "opacity": "1",
                "boxShadow": "none"
              },
              "&:not(:has(.Mui-checked)):not(:has(.Mui-disabled)):has(.Mui-focusVisible)": {
                "& .MuiSwitch-switchBase": {
                  "transform": "translateX(0px) translateY(0px)"
                }
              },
              "&:not(:has(.Mui-checked)):not(:has(.Mui-disabled)):not(:has(.Mui-focusVisible))": {
                "width": "40px",
                "height": "24px",
                "transform": "translateX(0px) translateY(0px)",
                "padding": "7px",
                "background": "none",
                "opacity": "1",
                "borderRadius": "0",
                "boxShadow": "none",
                "& .MuiSwitch-switchBase": {
                  "transform": "translateX(0px) translateY(0px)",
                  "& .MuiSwitch-thumb": {
                    "width": "16px",
                    "height": "16px",
                    "background": "var(--mui-palette-_components-switch-knobFillEnabled)",
                    "boxShadow": "var(--mui-shadows-1)",
                    "padding": "0",
                    "opacity": "1",
                    "borderRadius": "50%"
                  },
                  "& + .MuiSwitch-track": {
                    "width": "26px",
                    "height": "10px",
                    "borderRadius": "100px",
                    "background": "var(--mui-palette-_components-switch-slideFill)",
                    "padding": "0",
                    "opacity": "0.38",
                    "boxShadow": "none",
                    "transform": "translateX(0px) translateY(0px)"
                  }
                }
              },
              "&:has(.Mui-checked):not(:has(.Mui-disabled)):has(.Mui-focusVisible)": {
                "& .MuiSwitch-switchBase": {
                  "transform": "translateX(16px) translateY(0px)"
                }
              },
              "&:has(.Mui-checked):not(:has(.Mui-disabled)):not(:has(.Mui-focusVisible))": {
                "width": "40px",
                "height": "24px",
                "transform": "translateX(0px) translateY(0px)",
                "padding": "7px",
                "background": "none",
                "opacity": "1",
                "borderRadius": "0",
                "boxShadow": "none",
                "& .MuiSwitch-switchBase": {
                  "transform": "translateX(16px) translateY(0px)",
                  "& .MuiSwitch-thumb": {
                    "width": "16px",
                    "height": "16px",
                    "background": "var(--mui-palette-success-main)",
                    "boxShadow": "var(--mui-shadows-1)",
                    "padding": "0",
                    "opacity": "1",
                    "borderRadius": "50%"
                  },
                  "& + .MuiSwitch-track": {
                    "width": "26px",
                    "height": "10px",
                    "borderRadius": "100px",
                    "background": "var(--mui-palette-success-main)",
                    "padding": "0",
                    "opacity": "0.5",
                    "boxShadow": "none",
                    "transform": "translateX(0px) translateY(0px)"
                  }
                }
              }
            },
            "&.MuiSwitch-sizeSmall:has(.MuiSwitch-colorSecondary)": {
              "& .MuiSwitch-switchBase": {
                "padding": "4px",
                "borderRadius": "100px",
                "background": "none",
                "opacity": "1",
                "boxShadow": "none"
              },
              "&:has(.Mui-checked):not(:has(.Mui-disabled)):has(.Mui-focusVisible)": {
                "& .MuiSwitch-switchBase": {
                  "transform": "translateX(16px) translateY(0px)"
                }
              },
              "&:has(.Mui-checked):not(:has(.Mui-disabled)):not(:has(.Mui-focusVisible))": {
                "width": "40px",
                "height": "24px",
                "transform": "translateX(0px) translateY(0px)",
                "padding": "7px",
                "background": "none",
                "opacity": "1",
                "borderRadius": "0",
                "boxShadow": "none",
                "& .MuiSwitch-switchBase": {
                  "transform": "translateX(16px) translateY(0px)",
                  "& .MuiSwitch-thumb": {
                    "width": "16px",
                    "height": "16px",
                    "background": "var(--mui-palette-secondary-main)",
                    "boxShadow": "var(--mui-shadows-1)",
                    "padding": "0",
                    "opacity": "1",
                    "borderRadius": "50%"
                  },
                  "& + .MuiSwitch-track": {
                    "width": "26px",
                    "height": "10px",
                    "borderRadius": "100px",
                    "background": "var(--mui-palette-secondary-main)",
                    "padding": "0",
                    "opacity": "0.5",
                    "boxShadow": "none",
                    "transform": "translateX(0px) translateY(0px)"
                  }
                }
              },
              "&:not(:has(.Mui-checked)):not(:has(.Mui-disabled)):has(.Mui-focusVisible)": {
                "& .MuiSwitch-switchBase": {
                  "transform": "translateX(0px) translateY(0px)"
                }
              },
              "&:not(:has(.Mui-checked)):not(:has(.Mui-disabled)):not(:has(.Mui-focusVisible))": {
                "width": "40px",
                "height": "24px",
                "transform": "translateX(0px) translateY(0px)",
                "padding": "7px",
                "background": "none",
                "opacity": "1",
                "borderRadius": "0",
                "boxShadow": "none",
                "& .MuiSwitch-switchBase": {
                  "transform": "translateX(0px) translateY(0px)",
                  "& .MuiSwitch-thumb": {
                    "width": "16px",
                    "height": "16px",
                    "background": "var(--mui-palette-_components-switch-knobFillEnabled)",
                    "boxShadow": "var(--mui-shadows-1)",
                    "padding": "0",
                    "opacity": "1",
                    "borderRadius": "50%"
                  },
                  "& + .MuiSwitch-track": {
                    "width": "26px",
                    "height": "10px",
                    "borderRadius": "100px",
                    "background": "var(--mui-palette-_components-switch-slideFill)",
                    "padding": "0",
                    "opacity": "0.38",
                    "boxShadow": "none",
                    "transform": "translateX(0px) translateY(0px)"
                  }
                }
              }
            }
          }
        }
      }
    }
  });
  export default theme