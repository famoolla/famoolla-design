import { createTheme } from '@mui/material/styles';
import type { ThemeOptions } from '@mui/material/styles';

const lighttheme: ThemeOptions = createTheme({
    "palette": {
        mode: "light",

          "primary": {
            "main": "#1976D2",
            "dark": "#1565C0",
            "contrastText": "#FFFFFF",
          },
          "secondary": {
            "contrastText": "#FFFFFF",
            "main": "#9C27B0",

          },
          "error": {
            "contrastText": "#FFFFFF",
            "main": "#D32F2F",

 
          },
          "warning": {
            "contrastText": "#FFFFFF",
            "main": "#EF6C00",
            "dark": "#E65100",
          },
          "info": {
            "contrastText": "#FFFFFF",
            "main": "#0288D1",
          },
          "success": {
            "contrastText": "#FFFFFF",
            "main": "#2E7D32",
          },
          "text": {
            "primary": "rgba(0, 0, 0, 0.87)"
          },
          "common": {
          },
          "action": {
            "disabledBackground": "rgba(0, 0, 0, 0.12)"
          },
        }
     });

     export default lighttheme;