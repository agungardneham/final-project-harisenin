import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginPage from "./pages/LoginPage.jsx";
import RegisterPage from "./pages/RegisterPage.jsx";
import HomePage from "./pages/HomePage.jsx";
import ErrorPage from "./pages/ErrorPage";
import NavbarProvider from "./contexts/NavbarContext";
import LoginProvider from "./contexts/LoginContext";
import CartProvider from "./contexts/CartContext";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <LoginProvider>
      <CartProvider>
        <NavbarProvider>
          <RouterProvider router={router}></RouterProvider>
        </NavbarProvider>
      </CartProvider>
    </LoginProvider>
  </React.StrictMode>
);
