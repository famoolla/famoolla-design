
import React from 'react';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import oceanTheme from '../../themes/oceantheme';
import darktheme from '../../themes/darktheme';


function getThemeFromUrl() {
    const urlParams = new URLSearchParams(window.location.search);
    const globals = urlParams.get('globals');
  
    if (globals) {
      const match = globals.match(/theme:(\w+)/);
      if (match && match[1]) {
        return match[1];
      }
    }
    return null;
  }


const ColourShow = ({ colourArray }) => {  
    
    // Get the theme from storybook global context
    const selectedTheme = getThemeFromUrl();

    
    
    return (
        <ThemeProvider theme={selectedTheme === 'dark' ? darktheme : oceanTheme}>
        <CssBaseline />
        <Stack direction="row" spacing={6}>
                {colourArray.map((colour, index) => (
                    <ColourBox key={index} colour={colour} />
                ))}
{/*                 
                <ColourBox 
                    colour="primary.main" 
                />
                <ColourBox 
                    colour="primary.light" 
                />
                <ColourBox 
                    colour="primary.dark" 
                /> */}
        </Stack>
        </ThemeProvider>
    );
};


const ColourBox = ({ colour }) => {
    const theme = useTheme();

    // Split the colour code which is a string by full stop into an array
    const colourArray = colour.split('.');
    // console.log("Colour Array: ", colourArray);

    // Get the palette from the split array by referencing the theme object
    const palette = theme.palette[colourArray[0]][colourArray[1]];
    // console.log(palette);
    
    return (
        <Stack direction="row" spacing={2}>
            <Box sx={{ bgcolor: colour, width: 50, height: 50, borderRadius: '5px' }} />
            {/* <Box
                sx={{
                    bgcolor: colour,
                    width: 50,
                    height: 50,
                    borderRadius: '5px',
                }}
            /> */}
            <Stack direction="column" spacing={0}>
                <Typography variant="body2">{colour}</Typography>
                <Typography variant="body2">{palette}</Typography>
            </Stack>
           </Stack>
    );
};

export default ColourShow;
