import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import { Container, CssBaseline } from "@mui/material";
import theme from "./app/theme";

import HomePage from "./components/homepage/Homepage";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Container>
          <HomePage />
        </Container>
      </ThemeProvider>
    </>
  );
}

export default App;
