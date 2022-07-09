import React from "react";
import { Button, styled, Typography } from '@mui/material';
import {Add, Settings } from '@mui/icons-material';

const App = () => {

    const BlueButton = styled(Button)({
        backgroundColor: 'skyblue',
          color: '#888',
          margin: 5,
          "&:hover": {
              backgroundColor: "lightblue"
          },
          "&:disabled": {
              background: 'gray',
              color: 'white'
          }
    });
  return (
    <div>
      <Button variant="text">Text</Button>
      <Button startIcon={<Settings />} variant="contained" color="success" size="small">Settings</Button>
      <Button startIcon={<Add/>} variant="outlined" disabled>Add new post</Button>
      <Typography variant="h1" >
          It uses h1 style but its a p tag
      </Typography>
      <BlueButton>My Button</BlueButton>
      <BlueButton>Another Button</BlueButton>
    </div>
  );
};

export default App;
