import React from "react";
import { Box } from "@mui/material";


import Posts from "./Post";

const Feed = () => {
  return (
    <Box bgcolor="pink" flex={4} p={2}>
      <Posts />
      <Posts />
      <Posts />
      <Posts />
    </Box>
  );
};

export default Feed;
