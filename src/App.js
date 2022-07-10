import React from "react";
import { Box, Container } from "@mui/material";

import Sidebar from "./components/Sidebar";
import Feed from "./components/Feed";
import Rightbar from "./components/Rightbar";

const App = () => {
  return (
    <Container
      sx={{
        backgroundColor: "red",
      }}
    >
      <Sidebar />
      <Feed />
      <Rightbar />
    </Container>
  );
};

export default App;
