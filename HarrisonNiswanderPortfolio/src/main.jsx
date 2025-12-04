import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/Home-Page/homePage.jsx";
import About from "./pages/About/about.jsx";

const router = createBrowserRouter([
  {
    //Home Page Route
    path: "/home",
    element: <HomePage />
  }, 

  {
    //About Page Route
    path: "/about",
    element: <About />
  }
  
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}> {router.element}</RouterProvider>
  </StrictMode>
);

