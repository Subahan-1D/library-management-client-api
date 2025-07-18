import Main from "@/Layout/Main";
import AddBook from "@/Pages/AddBook";
import AllBooks from "@/Pages/AllBooks";
import BorrowSummary from "@/Pages/BorrowSummary";
import DetailsPage from "@/Pages/DetailsPage";
import EditPage from "@/Pages/EditPage";
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
            {
                path: "/addBooks",
                element: <AddBook></AddBook>
            },
            {
                path: "/books",
                element: <AllBooks></AllBooks>
            },
            {
                path: "/borrowSummary",
                element: <BorrowSummary></BorrowSummary>
            },
            {
                path: "/details/:id",
                element: <DetailsPage></DetailsPage>
            },
            {
                path: "/edit/:id",
                element: <EditPage></EditPage>
            },
        ]
    }


]);