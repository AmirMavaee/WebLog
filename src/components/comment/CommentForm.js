import React, { useReducer } from "react";
import { Button, Grid, TextField, Typography } from "@mui/material";
import { useMutation } from "@apollo/client";
import { SEND_COMMENT } from "../../graphql/mutations";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const initialState = {
  username: "",
  email: "",
  content: "",
};

const reducer = (currentState, action) => {
  switch (action.type) {
    case "TextField":
      return { ...currentState, [action.payload.key]: action.payload.value };
    default:
      return initialState;
  }
};

function CommentForm({ slug }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [sendComment, { loading, data }] = useMutation(SEND_COMMENT, {
    variables: {
      name: state.username,
      email: state.email,
      text: state.content,
      slug: slug,
    },
  });
  const sendHandler = () => {
    if (state.username && state.email && state.content) {
      sendComment();
    } else {
      toast.warn("Please Complete Form", {
        position: "top-center",
        theme: "dark",
      });
    }
  };

  if(data){
    toast.success("Your comment has been registered and waited to be published", {
        position: "top-center",
        theme: "dark",
      });
  }

  return (
    <Grid
      container
      sx={{
        boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
        borderRadius: 4,
        py: 1,
        mt: 5,
      }}
    >
      <Grid item xs={12} m={2}>
        <Typography component="p" variant="h6" fontWeight={700} color="primary">
          Send Comment
        </Typography>
      </Grid>
      <Grid item xs={12} m={2}>
        <TextField
          label="username"
          variant="outlined"
          sx={{ width: "100%" }}
          value={state.username}
          onChange={(e) =>
            dispatch({
              type: "TextField",
              payload: { key: "username", value: e.target.value },
            })
          }
        />
      </Grid>
      <Grid item xs={12} m={2}>
        <TextField
          label="email"
          variant="outlined"
          sx={{ width: "100%" }}
          value={state.email}
          onChange={(e) =>
            dispatch({
              type: "TextField",
              payload: { key: "email", value: e.target.value },
            })
          }
        />
      </Grid>
      <Grid item xs={12} m={2}>
        <TextField
          label="content"
          variant="outlined"
          sx={{ width: "100%" }}
          value={state.content}
          onChange={(e) =>
            dispatch({
              type: "TextField",
              payload: { key: "content", value: e.target.value },
            })
          }
          multiline
          minRows={4}
        />
      </Grid>
      <Grid item xs={12} m={2}>
        {loading ? (
          <Button variant="contained" disabled>
            Sending ...
          </Button>
        ) : (
          <Button variant="contained" onClick={sendHandler}>
            Send
          </Button>
        )}
      </Grid>
      <ToastContainer />
    </Grid>
  );
}

export default CommentForm;
