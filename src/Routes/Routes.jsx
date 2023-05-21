import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../pages/Home";
import LogIn from "../pages/Login/LogIn";
import Register from "../pages/Rgister/Register";
import AddToys from "../pages/AddToys/AddToys";
import AllToys from "../pages/AllToys/AllToys";
import MyToys from "../pages/MyToys/MyToys";
import PrivateRoute from "./PrivateRoute";
import SingleToys from "../pages/SingleToys/SingleToys";
import UpdateToys from "../pages/UpadetToys/UpdateToys";
import Blogs from "../pages/Blogs page/Blogs";
import ErrorPage from "../pages/ErrorPage/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    errorElement: <ErrorPage></ErrorPage>,
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
      {
        path: "/mytoys",
        element: <MyToys></MyToys>,
      },
      {
        path: "/updateToys/:id",
        element: <UpdateToys></UpdateToys>,
        loader: ({ params }) =>
          fetch(
            `https://toy-store-server-iota.vercel.app/singletoys/${params.id}`
          ),
      },
      {
        path: "/blogs",
        element: <Blogs></Blogs>,
      },
      {
        path: "/singletoys/:id",
        element: (
          <PrivateRoute>
            <SingleToys></SingleToys>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://toy-store-server-iota.vercel.app/singletoys/${params.id}`
          ),
      },
    ],
  },
]);

export default router;
