import React from 'react';
//react-router-dom
import { useNavigate, useParams } from "react-router-dom";
//graph ql
import { useQuery } from "@apollo/client";
import { GET_POST_INFO  } from "../../graphql/queries";
//component
import Loader from '../shared/Loader';
import { Avatar, Box, Container, Grid, Typography } from '@mui/material';
//material ui
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';
import sanitizeHtml from "sanitize-html";
//style
import "./BlogPage.css"
import CommentForm from '../comment/CommentForm';
import Comments from '../comment/Comments';


function BlogPage() {
    const {slug} = useParams();
    const { loading, data, error } = useQuery(GET_POST_INFO , {
      variables:{slug}
    });
    const navigate = useNavigate();

    if (loading) return <Loader/>;
    if (error) return <h3>Error ...</h3>;
    
    const {post} = data;
    return (
        <Container maxWidth="xl">
          <Grid container>
            <Grid item xs={12} mt={9} display="flex" justifyContent="space-between">
              <Typography component="h2" variant="h4" fontWeight={700} color="primary">{post.title}</Typography>
              <ArrowForwardRoundedIcon onClick={()=> navigate(-1)}/>
            </Grid>
            <Grid item xs={12} mt={6}>
              <img src={post.coverPhoto.url} alt={post.slug} width="100%" height="625px" style={{borderRadius:15}}/>
            </Grid>
            <Grid item xs={12} mt={7} display="flex" alignItems="center">
             <Avatar src={post.author.avatar.url} sx={{width:80 , height:80 , marginRight:2}}/>
             <Box component="div">
              <Typography component="p" variant="h5" fontWeight={700}>{post.author.name}</Typography>
              <Typography component="p" variant="p" color="text.secondary">{post.author.field}</Typography>
             </Box>
            </Grid>
            <Grid item xs={12} mt={5}>
             <div dangerouslySetInnerHTML={{__html:sanitizeHtml(post.content.html)}}></div>
            </Grid>
            <Grid item xs={12}>
              <CommentForm slug={slug}/>
            </Grid>
            <Grid item xs={12}>
              <Comments slug={slug}/>
            </Grid>
          </Grid>
        </Container>
      );
}

export default BlogPage;