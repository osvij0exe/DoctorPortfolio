
import { createBrowserRouter, Navigate } from "react-router";
import { DoctorProfileLayout } from "./modules/DoctorsPortfolio/layouts/DoctorProfileLayout";
import { HomePage } from "./modules/DoctorsPortfolio/pages/home/HomePage";


export const appRouter = createBrowserRouter(
    [
        {
            path: "/",
            element: <DoctorProfileLayout />,
            children:[
                {
                    index: true,
                    element: <HomePage />
                }
            ],
        },
        {
            path: '*',
            element: <Navigate to="/" />    
        }
    ])
