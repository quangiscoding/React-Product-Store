import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from "./App.jsx";
import Login from "./pages/Login.jsx";

import { AuthProvider } from "./context/AuthContext.jsx";
import { ThemeProvider } from "./context/ThemeContext.jsx";
import { CartProvider } from "./context/CartContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter basename="/React-Product-Store/">
      <AuthProvider>
        <ThemeProvider>
          <CartProvider>
            <Routes>
              <Route path="/" element={<App />} />
              <Route path="/login" element={<Login />} />
            </Routes>
          </CartProvider>
        </ThemeProvider>
      </AuthProvider>
    </BrowserRouter>
  </StrictMode>,
);
