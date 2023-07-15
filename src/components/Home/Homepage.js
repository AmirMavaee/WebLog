import React from 'react';
//material ui
import { Container, Grid, Typography } from '@mui/material';
// components
import Authors from '../author/Authors';
import Blogs from '../Blog/Blogs';

function Homepage() {
    return ( 
       <Container maxWidth="xl">
            <Grid container spacing={2} px={3}>
                <Grid item xs={12} md={3} mt={3}>
                    <Typography component="h3" variant="h5" mb={3} fontWeight="700">AUTHOR</Typography>
                    <Authors/>
                </Grid>
                <Grid item xs={12} md={9} mt={3}>
                    <Typography component="h3" variant="h5" mb={3} fontWeight="700">BLOG</Typography>
                    <Blogs/>
                </Grid>
            </Grid>
       </Container>
    );
}

export default Homepage;