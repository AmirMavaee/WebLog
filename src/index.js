import React from "react";
import ReactDOM from "react-dom/client";
//component
import App from "./App";
//styles
import "./styles/index.css";
import "./styles/font.css";
// graphql
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
// material ui
import { ThemeProvider } from "@mui/material";
import theme from "./Mui/theme";
//react-router-dom
import { BrowserRouter } from "react-router-dom";

const client = new ApolloClient({
  uri: process.env.REACT_APP_HYGRAPH_URI,
  cache: new InMemoryCache(),
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ApolloProvider client={client}>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </ApolloProvider>
);
