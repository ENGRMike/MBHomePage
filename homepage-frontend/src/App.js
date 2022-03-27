import React from 'react';
import { ThemeProvider } from "@mui/material/styles"
import { CssBaseline } from '@mui/material';
import theme from "./app/theme"

import HomePage from "./components/homepage/Homepage"

function App() {
  return (
    <>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <HomePage />
      </ThemeProvider>
    </>
  );
}

export default App;
