
import React from 'react';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';


const ColourShow = ({ colourArray }) => {  
    return (

        <Stack direction="row" spacing={6}>
                {colourArray.map((colour, index) => (
                    <ColourBox key={index} colour={colour} />
                ))}
        </Stack>
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
            <Stack direction="column" spacing={0}>
            <Box sx={{  width: 150 }}>
                <Typography variant="body1">{colour}</Typography>
                <Typography variant="body1">{palette}</Typography>
            </Box>
            </Stack>
           </Stack>
    );
};

export default ColourShow;
