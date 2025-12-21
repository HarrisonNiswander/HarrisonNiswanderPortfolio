import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/Home-Page/homePage.jsx";
import About from "./pages/About/about.jsx";
import Portfolio from "./pages/Portfolio/portfolio.jsx";
import Contact from "./pages/Contact/contact.jsx";
import NotFound from "./pages/Not-Found-Page/notFoundPage.jsx";
import PortfolioIslandSong from "./pages/Portfolio/Island-Song/island-song.jsx";
import PortfolioSigningBee from "./pages/Portfolio/Signing-Bee/signing-bee.jsx";

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
  }, 

  {
    //Portfolio Page Route
    path: "/portfolio",
    element: <Portfolio />
  }, 

  {
    //Portfolio -> Island Song Page
    path: "/portfolio/island-song",
    element: <PortfolioIslandSong />
  }, 

  {
    //Portfolio -> Signing Bee Page
    path: "/portfolio/signing-bee",
    element: <PortfolioSigningBee />
  }, 

  {
    //Contact Page Route
    path: "/contact",
    element: <Contact />
  },

  {
    //Not Found Page Route
    path: "*",
    element: <NotFound />
  }
  
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}> {router.element}</RouterProvider>
  </StrictMode>
);

