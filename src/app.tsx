import React, { useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { Home } from "./pages/Home";
import { Shop } from "./pages/Shop";
import { Product } from "./pages/Product";
import { Account } from "./pages/Account";
import { useTypedDispatch } from "./hooks/redux";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/shop",
    element: <Shop />,
  },
  {
    path: "/shop/:shopId",
    element: <Product />,
  },
  {
    path: "/account",
    element: <Account />,
  },
]);

export const App: React.FC = () => {
  return <RouterProvider router={router} />;
};