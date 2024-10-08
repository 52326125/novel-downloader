import { createBrowserRouter, Navigate } from "react-router-dom";
import HomeView from "@/views/HomeView";
import DefaultLayout from "@/layouts/DefaultLayout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <DefaultLayout />,
    children: [
      { index: true, element: <Navigate to="/home" replace /> },
      { path: "home", element: <HomeView /> }
    ]
  }
]);
