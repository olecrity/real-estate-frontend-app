import React from "react";
import ReactDOM from "react-dom/client";
import "./style/styles.scss";
import App from "./App";
import { AuthProvider } from "./contexts/AuthContext";
import { BrowserRouter } from "react-router-dom";
import { BookmarksProvider } from "./contexts/BookmarksContext";
import { MessageProvider } from "./contexts/MessageContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <MessageProvider>
      <BrowserRouter>
        <AuthProvider>
          <BookmarksProvider>
            <App />
          </BookmarksProvider>
        </AuthProvider>
      </BrowserRouter>
    </MessageProvider>
  </React.StrictMode>
);
