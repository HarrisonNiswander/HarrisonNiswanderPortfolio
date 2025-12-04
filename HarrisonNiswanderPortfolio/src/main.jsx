import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/homePage.jsx";

const router = createBrowserRouter([
  {
    //Home Page Route
    path: "/",
    element: <HomePage />
  }
  
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}> {router.element}</RouterProvider>
  </StrictMode>
);

