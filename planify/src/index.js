import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { SnackbarProvider } from "notistack";
import App from "./App";
import Dashboard  from "./pages/Admin/Dashboard";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <GoogleOAuthProvider clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}>
    <BrowserRouter>
      <SnackbarProvider anchorOrigin={{ vertical: "top", horizontal: "right" }}>
        <Dashboard />
      </SnackbarProvider>
    </BrowserRouter>
  </GoogleOAuthProvider>
);
