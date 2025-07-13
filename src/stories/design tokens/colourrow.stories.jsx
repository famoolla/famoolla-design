import React from 'react';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';

const ColourRow = () => {   
    const theme = useTheme();
    return (
        <Stack direction="row" spacing={6}>
                <ColourBox 
                    colour="primary.main" 
                    colourCode={theme.palette.primary.main} 
                />
                <ColourBox 
                    colour="primary.light" 
                    colourCode={theme.palette.primary.light} 
                />
                <ColourBox 
                    colour="primary.dark" 
                    colourCode={theme.palette.primary.dark} 
                />
        </Stack>
    );
};


const ColourBox = ({ colour, colourCode}) => {
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
                <Typography variant="body2">{colourCode}</Typography>
            </Stack>
           </Stack>
    );
};

export default {
    title: 'Design Tokens/Colour',
    component: ColourRow,
    parameters:{
        layout: 'centered',
    },

    // !dev removes the story from showing in the Storybook UI
    tags: ['!dev'],
    args:{},

};

export const Default = {
    args:{},
};
