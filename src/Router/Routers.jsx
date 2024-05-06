import {
    createBrowserRouter,
  } from "react-router-dom";
import MainLayOut from "../layout/MainLayOut";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Contact from "../pages/Contact/Contact";
import ServiceViewDetails from "../pages/ServiceViewDetails/ServiceViewDetails";
import CheckOut from "../pages/CheckOut/CheckOut";
import Login from "../pages/Login/Login";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayOut />,
      children: [
        {
          index:true,
          element:<Home />
        },
        {
            path:'about',
            element:<About />,
        },
        {
            path:'contact',
            element:<Contact />
        },
        {
          path:'checkOut',
          element:<CheckOut />,
        },
        {
          path:'serviceViewDetails/:id',
          element:<ServiceViewDetails />,
          loader:({params})=> fetch(`http://localhost:4000/services/${params.id}`)
        },
      ],
    },
    {
      path:'/login',
      element:<Login />
    }
  ]);
  export default router
