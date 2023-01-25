import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./pages/auth/Login";
import Home from "./pages/Home";
import Detail from "./pages/Movies/Detail";
import Profile from "./pages/Profile";
import SignUp from "./pages/Sign-up";
import ViewMovie from "./pages/View-movie";
import Payment from "./pages/Payment";
import { Provider } from "react-redux";
import store, { persistor } from "./stores/index";
//import redux-persist
import { PersistGate } from "redux-persist/integration/react";

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
    {
      path: "/detail/:id",
      element: <Detail />,
    },
    {
      path: "/profile",
      element: <Profile />,
    },
    {
      path: "/payment",
      element: <Payment />,
    },
  ]);

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <RouterProvider router={router} />
      </PersistGate>
    </Provider>
  );
}

export default App;
