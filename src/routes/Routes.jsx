import { createBrowserRouter } from "react-router-dom";

import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import OurProject from "../Pages/OurProject/OurProject";
import OurTeam from "../Pages/OurTeam/OurTeam";
import Contact from "../Pages/Contact/Contact";

export const router = createBrowserRouter([
   {
      path: "/",
      element: <MainLayout></MainLayout>,
      errorElement: <p className="text-3xl text-center py-24 text-green-600">Error</p>,
      children: [
         {
            index: true,
            element: <Home></Home>
         },
         {
            path:'/project',
            element: <OurProject></OurProject>
         },
         {
            path:'/our-team',
            element: <OurTeam></OurTeam>
         },
         {
            path:'/contact',
            element: <Contact></Contact>
         },
      ]
   },
]);