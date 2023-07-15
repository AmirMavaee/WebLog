import React from "react";
// material ui
import { AppBar, Toolbar, Typography, Container } from "@mui/material";
import BookIcon from "@mui/icons-material/Book";
//react-router-dom
import { Link } from "react-router-dom";

function Header() {
  return (
    <AppBar position="sticky">
      <Container maxWidth="xl">
        <Toolbar>
          <Typography component="h1" variant="h5" fontWeight="900" flex="1">
            <Link to="/" style={{textDecoration:"none" , color:"#fff"}}>My Weblog</Link>
          </Typography>
          <Link to="/" style={{color:"#fff"}}>
            <BookIcon />
          </Link> 
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Header;
