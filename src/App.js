import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./pages/auth/Login";
import Home from "./pages/Home";
import Detail from "./pages/Movies/Detail";
import SignUp from "./pages/Sign-up";

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
      path: "/detail/:id",
      element: <Detail />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
