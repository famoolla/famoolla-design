import React from 'react';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import ColourBox from './colourbox';

const ColourRow = () => {   
    return (
        <Stack direction="row" spacing={6}>
                <ColourBox colour="primary.main" colourCode="#1976D2" />
                <ColourBox colour="primary.light" colourCode="#1565C0" />
                <ColourBox colour="primary.dark" colourCode="#1976D2" />
        </Stack>
    );
};

export default ColourRow;
