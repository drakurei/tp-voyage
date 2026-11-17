import { Navigate, Outlet } from "react-router-dom"
import { useAuth } from "../context/AuthContext"

// Protège les routes qui demandent d'être connecté :
// si personne n'est connecté, on redirige vers la page de connexion
function ProtectedRoute() {
  const { user } = useAuth()

  if (!user) {
    return <Navigate to="/login" replace />
  }

  // Sinon on affiche la page demandée
  return <Outlet />
}

export default ProtectedRoute
