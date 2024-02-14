import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/main";
import Home from "../pages/Home/Home/Home";
import Menu from "../pages/Menu/Menu/Menu";
import Order from "../pages/Order/Order/Order";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/menu",
        element: <Menu />,
      },
      {
        path: "/order",
        element: <Order />,
      },
      {
        path: "/order/:category",
        element: <Order />,
      },
      {
        path: "/dashboard",
        element: (
          <h1 className="flex items-center justify-center h-screen text-4xl text-red-600 uppercase">
            under constraction
          </h1>
        ),
      },
      {
        path: "/contact",
        element: (
          <h1 className="flex items-center justify-center h-screen text-4xl text-red-600 uppercase">
            under constraction
          </h1>
        ),
      },
    ],
  },
]);
