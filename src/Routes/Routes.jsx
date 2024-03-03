import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/main";
import Home from "../pages/Home/Home/Home";
import Menu from "../pages/Menu/Menu/Menu";
import Order from "../pages/Order/Order/Order";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../Layout/Dashboard";
import Cart from "../pages/DashBoard/Cart/Cart";

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
          <PrivateRoute>
            <h1 className="flex items-center justify-center h-screen text-4xl text-red-600 uppercase">
              under constraction
            </h1>
          </PrivateRoute>
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
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
    ],
  },
  {
    path: "dashboard",
    element: <Dashboard />,
    children: [
      {
        path: "cart",
        element: <Cart />,
      },
    ],
  },
]);
