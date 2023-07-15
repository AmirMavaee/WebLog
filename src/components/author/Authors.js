import React from "react";
//graph ql
import { useQuery } from "@apollo/client";
import { GET_AUTHORS_INFO } from "../../graphql/queries";
//material ui
import { Avatar, Divider, Grid, Typography } from "@mui/material";
//react-router-dom
import { Link } from "react-router-dom";
//component
import Loader from "../shared/Loader";

function Authors() {
  const { loading, data, error } = useQuery(GET_AUTHORS_INFO);
  if (loading) return <Loader/>;
  if (error) return <h3>Error ...</h3>;
  return (
    <Grid
      container
      sx={{ boxShadow: "rgba(0,0,0,0.1) 0px 4px 12px", borderRadius: 4 }}
    >
      {data.authors.map((author, index) => (
        <React.Fragment key={author.id}>
          <Grid item xs={12} padding={2}>
            <Link
              to={`/authors/${author.slug}`}
              style={{ display:"flex" , alignItems:"center" , textDecoration: "none" }}
            >
              <Avatar src={author.avatar.url} sx={{ marginRight: 2 }} />
              <Typography variant="p" color="text.secondary">
                {author.name}
              </Typography>
            </Link>
          </Grid>
          {data.authors.length - 1 !== index && (
            <Grid item xs={12}>
              <Divider variant="middle" />
            </Grid>
          )}
        </React.Fragment>
      ))}
    </Grid>
  );
}

export default Authors;
