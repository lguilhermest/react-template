import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks"

export function LoginPage() {
  const navigate = useNavigate();
  const { actions } = useAuth();

  return (
    <div className="h-dvh flex flex-col justify-center items-center">
      <h1 className="text-2xl mb-4">Login page</h1>
      <button
        onClick={() => { actions.login(); navigate('/') }}
        className="bg-gray-300 h-8 w-20 rounded"
      >
        Login
      </button>
    </div>
  )
}