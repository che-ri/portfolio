import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Resume from "./pages/Resume";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/resume",
        element: <Resume />,
    },
]);

export default function AppRouter() {
    return <RouterProvider router={router} />;
}
