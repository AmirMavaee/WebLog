import React from "react";
//material ui
import {
  Avatar,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Divider,
  Typography,
} from "@mui/material";
// react-router-dom
import { Link } from "react-router-dom";

function CardEL({ author, title, slug, coverPhoto }) {
  return (
    <Card sx={{ boxShadow: "rgba(0,0,0,0.1) 0px 4px 12px", borderRadius: 4 }}>
      {author && (
        <CardHeader
          avatar={<Avatar src={author.avatar.url} />}
          title={
            <Typography
              component="p"
              variant="p"
              color="text.primary"
              fontWeight={700}
            >
              {author.name}
            </Typography>
          }
        />
      )}
      <CardMedia
        component="img"
        height="250"
        image={coverPhoto.url}
        alt={slug}
      />
      <CardContent>
        <Typography variant="h6">{title}</Typography>
      </CardContent>
      <Divider variant="middle" sx={{ margin: "10px" }} />
      <Link to={`/blogs/${slug}`} style={{ textDecoration: "none" }}>
        <CardActions sx={{ paddingTop: "0" }}>
          <Button variant="outlined" sx={{ width: "100%", borderRadius: 3.5 }}>
            Read Article
          </Button>
        </CardActions>
      </Link>
    </Card>
  );
}

export default CardEL;
