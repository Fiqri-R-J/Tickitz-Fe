import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./pages/auth/Login";
import Home from "./pages/Home";
import SignUp from "./pages/Sign-up";
import ViewMovie from "./pages/View-movie";

function App() {
  const router = createBrowserRouter([
    {
      path: "/sign-up",
      element: <SignUp />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/view-movie",
      element: <ViewMovie />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
