import React from "react";
import ReactDOM from "react-dom/client";
import "./style/styles.scss";
import App from "./App";
import { AuthProvider } from "./contexts/AuthContext";
import { BrowserRouter } from "react-router-dom";
import { BookmarksProvider } from "./contexts/BookmarksContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <BookmarksProvider>
          <App />
        </BookmarksProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);
