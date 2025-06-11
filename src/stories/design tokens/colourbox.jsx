import React from 'react';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';


const ColourBox = ({ colour, colourCode}) => {
    return (
        <Stack direction="row" spacing={2}>
            <Box
                sx={{
                    bgcolor: colour,
                    width: 50,
                    height: 50,
                    borderRadius: '5px',
                }}
            />
            <Stack direction="column" spacing={0}>
                <Typography variant="body2">{colour}</Typography>
                <Typography variant="body2">{colourCode}</Typography>
            </Stack>
           </Stack>
    );
};

export default ColourBox;
