import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { HomePage, NotFoundPage } from "./pages";

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <HomePage />
    },
    {
      path: '*',
      element: <NotFoundPage />
    }
  ]);

  return (
    <RouterProvider router={router} />
  )
}

export default App;