import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Pages/Home/Home";
import ProfileUpdate from "../Pages/ProfileUpdate/ProfileUpdate";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home/>
      },
      {
        path: '/profile',
        element: <ProfileUpdate/>
      },
      {
        path: '/login',
        element:<Login/>
      },
      {
        path: '/register',
        element: <Register/>
      }

    ],
  },
]);
