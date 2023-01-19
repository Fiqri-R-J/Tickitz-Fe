import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import SignUp from './pages/Sign-up'

function App() {
  const router = createBrowserRouter([
    {
      path: "/sign-up",
      element: <SignUp  />
    },
  ])
  return  <RouterProvider router={router} />
}

export default App;
