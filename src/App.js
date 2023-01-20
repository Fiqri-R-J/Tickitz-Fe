import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./pages/auth/Login";
import SignUp from './pages/Sign-up'

function App() {
  const router = createBrowserRouter([
    {

      path: "/sign-up",
      element: <SignUp  />
    }, {
      path: "/login",
      element: <Login />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
