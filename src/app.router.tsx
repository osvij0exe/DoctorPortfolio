
import { createBrowserRouter, Navigate } from "react-router";


export const appRouter = createBrowserRouter(
    [
        {
        path: "/",
        element: <Navigate to="/doctors" />
        },
        {
        path: "/doctors",
        element: <div>Doctors Page</div>
        }
    ]
)
