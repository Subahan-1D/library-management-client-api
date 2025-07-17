import Main from "@/Layout/Main";
import ErrorPage from "@/Pages/ErrorPage";

import Home from "@/Pages/Home";

import { createBrowserRouter } from "react-router";


export const routers = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
        ]
    }


]);