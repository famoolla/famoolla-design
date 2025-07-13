import { createTheme } from '@mui/material/styles';
import type { ThemeOptions } from '@mui/material/styles';

const darktheme: ThemeOptions = createTheme({
    "palette": {
        mode: "dark",
      
            "primary": {
              "contrastText": "rgba(0, 0, 0, 0.87)",
              "main": "#90CAF9"
            },
            "secondary": {
              "contrastText": "rgba(0, 0, 0, 0.87)",
              "main": "#CE93D8",

            },
            "error": {
              "contrastText": "#FFFFFF",
              "main": "#F44336",
              
            },
            "warning": {
              "contrastText": "rgba(0, 0, 0, 0.87)",
              "main": "#FFA726",
              "dark": "#F57C00",

            },
            "info": {
              "contrastText": "rgba(0, 0, 0, 0.87)",
              "main": "#29B6F6",

            },
            "success": {
              "contrastText": "rgba(0, 0, 0, 0.87)",
              "main": "#66BB6A",
            },
            "text": {
              "primary": "#FFFFFF"
            },
            "common": {

            },
            "action": {
              "disabledBackground": "rgba(255, 255, 255, 0.12)"
            },
          }
        
         

     });

     export default darktheme;