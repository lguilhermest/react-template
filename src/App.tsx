import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { HomePage, NotFoundPage } from "./pages";
import { AuthProvider } from "./context";

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
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  )
}

export default App;