import React from 'react';
import { Box, Button, Typography } from '@mui/material';

const NotFoundPage = () => {
    return ( 
        <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          minHeight: '100vh',
          backgroundColor: '#52796F',
        }}
      >
        <Typography variant="h1" style={{ color: 'white' }}>
          404
        </Typography>
        <Typography variant="h6" style={{ color: 'white' }}>
          The page you’re looking for doesn’t exist.
        </Typography>
        <Button variant="contained" href="/"sx={{backgroundColor:'#354F52', my:'5px'}}>Go Home</Button>
      </Box>
     );
}
 
export default NotFoundPage;
