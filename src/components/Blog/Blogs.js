import React from 'react';
//component
import Loader from '../shared/Loader';
// grapgql
import { useQuery } from '@apollo/client';
import { GET_BLOGS_INFO } from '../../graphql/queries';
// material ui
import { Grid } from '@mui/material';
import CardEL from '../shared/CardEL';

function Blogs() {
    const {data , loading , error} = useQuery(GET_BLOGS_INFO);
    
    if(loading) return <Loader/>
    if(error) return <h4>Error ...</h4>
    return (
       <Grid container spacing={2}>
            {data.posts.map(post =>
                <Grid item xs={12} sm={6} md={4}>
                    <CardEL {... post}/>
                </Grid>
            )}
       </Grid>
    );
}

export default Blogs;