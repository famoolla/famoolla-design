import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';

export default function Types() {
    const theme = useTheme();
    return (
      <Box sx={{ width: '100%', maxWidth: 500 }}>
        <Typography variant="h2" gutterBottom>
          Font
        </Typography>
        <b>Font Family:</b> {theme.typography.fontFamily}<br />
        <b>Font Size:</b> {theme.typography.fontSize}<br />
        <b>Font Weights:</b> 
        <ul>
        <li>bold: {theme.typography.fontWeightBold}</li>
        <li>light: {theme.typography.fontWeightLight}</li>
        <li>medium: {theme.typography.fontWeightMedium}</li>
        <li>regular: {theme.typography.fontWeightRegular}</li>
        </ul>

        <br />
        <Typography variant="h2" gutterBottom>
          Font sizes
        </Typography>
        <Typography variant="h1" gutterBottom>
          h1. Heading
        </Typography>
        <Typography variant="h2" sx={{borderBottom: 0}} gutterBottom >
          h2. Heading
        </Typography>
        <Typography variant="h3" gutterBottom>
          h3. Heading
        </Typography>
        <Typography variant="h4" gutterBottom>
          h4. Heading
        </Typography>
        <Typography variant="h5" gutterBottom>
          h5. Heading
        </Typography>
        <Typography variant="h6" gutterBottom>
          h6. Heading
        </Typography>
        <br />
        <Typography variant="body1" gutterBottom>
          body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
          blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,
          neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum
          quasi quidem quibusdam.
        </Typography>
        <br />
        <Typography variant="body2" gutterBottom>
          body2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
          blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,
          neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum
          quasi quidem quibusdam.
        </Typography>
        <br />
        <Typography variant="button" gutterBottom sx={{ display: 'block' }}>
          button text
        </Typography>
        <br />
        <Typography variant="caption" gutterBottom sx={{ display: 'block' }}>
          caption text
        </Typography>
        <br />
        <Typography variant="overline" gutterBottom sx={{ display: 'block' }}>
          overline text
        </Typography>
      </Box>
    );
  }
    