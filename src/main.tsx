import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { setupStore } from "./store/store";

import { Home } from "./pages/Home";
import { Shop } from "./pages/Shop";

import "./design/index.scss";
import { Product } from "./pages/Product";

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
]);

const store = setupStore();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
