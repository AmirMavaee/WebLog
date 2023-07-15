import React from "react";
//react-router-dom
import { useParams } from "react-router-dom";
//graph ql
import { useQuery } from "@apollo/client";
import { GET_AUTHOR_INFO } from "../../graphql/queries";
//material ui
import { Avatar, Container, Grid, Typography } from "@mui/material";
//sanitize html
import sanitizeHtml from "sanitize-html";
//component
import CardEL from "../shared/CardEL";
import Loader from "../shared/Loader";

function AuthorPage() {
  const {slug} = useParams();
  const { loading, data, error } = useQuery(GET_AUTHOR_INFO , {
    variables:{slug}
  });
  
  if (loading) return <Loader/>;
  if (error) return <h3>Error ...</h3>;

  const {author:{avatar , name , field , description , posts}} = data;
  return (
    <Container maxWidth="xl">
      <Grid container mt={10} px={3}>
        <Grid xs={12} item display="flex" flexDirection="column" alignItems="center">
          <Avatar src={avatar.url} sx={{width:250 , height:250}}/>
          <Typography component="h3" variant="h5" fontWeight={700} mt={4}>{name}</Typography>
          <Typography component="p" variant="h5" color="text.secondary" mt={2}>{field}</Typography>
        </Grid>
        <Grid item xs={12}>
          <div dangerouslySetInnerHTML={{__html: sanitizeHtml(description.html)}}></div>
        </Grid>
        <Grid item xs={12} mt={6}>
          <Typography component="h3" variant="h5" fontWeight={700}>{name} Articles</Typography>
        </Grid>
        <Grid container spacing={2} mt={2}>
          {posts.map(post => 
            <Grid item xs={12} sm={6} md={4} ket={post.id}>
              <CardEL title={post.title} slug={post.slug} coverPhoto={post.coverPhoto}/>
            </Grid>  
          )}
        </Grid>
      </Grid>
    </Container>
  );
}

export default AuthorPage;
