import React from "react";
import { createHashRouter, RouterProvider } from "react-router-dom";
import Layout from "./Layout";
import Home from "./Home";
import PrivacyPolicy from "./PrivacyPolicy";
import Author from "./Author";

const router = createHashRouter([
  {
    path: "/",
    element: <Layout />, // Layout acts as the parent for nested routes
    children: [
      {
        path: "",
        element: <Home />, // Default child route for the root path
      },
      {
        path: "author",
        element: <Author />, // Route for /author
      },
      {
        path: "privacy-policy",
        element: <PrivacyPolicy />, // Route for /privacy
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
