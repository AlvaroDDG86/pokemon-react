import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { CssBaseline } from "@mui/material";
import { SnackbarProvider } from "notistack";

ReactDOM.render(
  <BrowserRouter>
    <CssBaseline />
    <SnackbarProvider maxSnack={3}>
      <App />
    </SnackbarProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
