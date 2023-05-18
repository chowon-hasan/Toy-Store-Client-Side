import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../pages/Home";
import LogIn from "../pages/Login/LogIn";
import Register from "../pages/Rgister/Register";
import AddToys from "../pages/AddToys/AddToys";
import AllToys from "../pages/AllToys/AllToys";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <LogIn></LogIn>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/addtoys",
        element: <AddToys></AddToys>,
      },
      {
        path: "/alltoys",
        element: <AllToys></AllToys>,
      },
    ],
  },
]);

export default router;
