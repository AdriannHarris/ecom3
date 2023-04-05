import React from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  Outlet,
} from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import ErrorPage from "./pages/ErrorPage";

const AppLayout = () => {
  return (
    <>
    <Navbar />
    < Outlet />
    </>
  );
};


const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "products",
        element: <Products />,
      },
      {
        path: "contact",
        element: <Contact />
      }
    ]
  },
  
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);



