import React from "react";
import { CssBaseline } from "@mui/material";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "./routes/Homepage";
import ML from "./routes/ML";

function App() {
  return (
    <BrowserRouter>
      <CssBaseline />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="ML" element={<ML />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
