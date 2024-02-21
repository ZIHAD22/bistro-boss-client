import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./Routes/Routes.jsx";
import { HelmetProvider } from "react-helmet-async";
import AuthProvider from "./provider/AuthProvider.jsx";
import StoreProvider from "./provider/StoreProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <StoreProvider>
        <HelmetProvider>
          <RouterProvider router={router} />
        </HelmetProvider>
      </StoreProvider>
    </AuthProvider>
  </React.StrictMode>
);
