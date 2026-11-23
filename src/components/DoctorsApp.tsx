
import { RouterProvider } from "react-router";
import { appRouter } from "../app.router";

export const DoctorsApp = () => {
  return (
    <RouterProvider router={appRouter} />
  )
}
