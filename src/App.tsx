import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { HomePage, LoginPage, NotFoundPage } from "./pages";
import { useAuth } from "./hooks";
import { ProtectedRoute } from "./components";

function App() {
  const { state } = useAuth();
  const router = createBrowserRouter([
    {
      path: '/',
      element: <ProtectedRoute
        isAuthenticated={state.isAuthenticated}
        element={<HomePage />}
      />
    },
    {
      path: '/login',
      element: <LoginPage />
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