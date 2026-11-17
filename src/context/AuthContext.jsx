import { createContext, useCallback, useContext, useState } from "react"

// API utilisée pour l'authentification : https://dummyjson.com/docs/auth
export const API_URL = "https://dummyjson.com"

// On garde le token et l'utilisateur connecté dans le localStorage
// pour rester connecté après un rechargement de la page
const STORAGE_KEY = "voyages_auth"

function readAuth() {
  try {
    const value = localStorage.getItem(STORAGE_KEY)
    return value ? JSON.parse(value) : { token: null, user: null }
  } catch {
    return { token: null, user: null }
  }
}

function writeAuth(auth) {
  try {
    if (auth.token) localStorage.setItem(STORAGE_KEY, JSON.stringify(auth))
    else localStorage.removeItem(STORAGE_KEY)
  } catch {
    // localStorage indisponible : on garde seulement l'état en mémoire
  }
}

const AuthContext = createContext(null)

export function AuthProvider({ children }) {
  const [auth, setAuth] = useState(readAuth)

  const saveAuth = (newAuth) => {
    setAuth(newAuth)
    writeAuth(newAuth)
  }

  // Connexion : appel à l'API, renvoie un message d'erreur ou null si tout va bien
  const login = async (username, password) => {
    try {
      const response = await fetch(`${API_URL}/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password, expiresInMins: 60 }),
      })
      const data = await response.json()

      if (!response.ok) {
        return "Login ou mot de passe incorrect"
      }

      saveAuth({
        token: data.accessToken,
        user: {
          id: data.id,
          username: data.username,
          email: data.email,
          firstName: data.firstName,
          lastName: data.lastName,
          image: data.image,
        },
      })
      return null
    } catch {
      return "Impossible de joindre le serveur, réessayez plus tard"
    }
  }

  // Déconnexion : on oublie le token et l'utilisateur
  // (useCallback : la fonction reste la même d'un rendu à l'autre,
  // utile car la page profil l'utilise dans un useEffect)
  const logout = useCallback(() => {
    setAuth({ token: null, user: null })
    writeAuth({ token: null, user: null })
  }, [])

  return (
    <AuthContext.Provider value={{ user: auth.user, token: auth.token, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

// Hook pour utiliser le contexte dans les composants
// eslint-disable-next-line react/only-export-components
export function useAuth() {
  return useContext(AuthContext)
}
