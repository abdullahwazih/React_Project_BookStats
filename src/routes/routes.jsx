import { createBrowserRouter } from "react-router";
import Root from "../pages/root/root";
import Home from "../pages/Home/Home";

export const router = createBrowserRouter([
    {
        path: "/",
        Component: Root,
        errorElement: <div>Error</div>,

        children: [
            {

                index: true,
                path: "/",
                Component: Home
            }
        ]
    },
]);