import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "src/pages/Home";
import Resume from "src/pages/Resume";

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
