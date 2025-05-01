import { createBrowserRouter } from "react-router";
import Root from "../Root/Root";
import Login from "../pages/Login";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        children: [
            {
                path: '/login',
                element: <Login></Login>
            }
        ]
    }
])