import { createContext, useContext, useState } from "react"

// Pas de serveur dans ce TP : les comptes sont gardés dans le localStorage du navigateur
const USERS_KEY = "voyages_users"
const CURRENT_USER_KEY = "voyages_user"

function readStorage(key, defaultValue) {
  try {
    const value = localStorage.getItem(key)
    return value ? JSON.parse(value) : defaultValue
  } catch {
    return defaultValue
  }
}

function writeStorage(key, value) {
  try {
    if (value === null) localStorage.removeItem(key)
    else localStorage.setItem(key, JSON.stringify(value))
  } catch {
    // localStorage indisponible (navigation privée...) : on garde seulement l'état en mémoire
  }
}

// L'utilisateur connecté est gardé sans son mot de passe
function withoutPassword(user) {
  // eslint-disable-next-line no-unused-vars
  const { password, ...rest } = user
  return rest
}

const AuthContext = createContext(null)

export function AuthProvider({ children }) {
  // Utilisateur connecté (null si personne)
  const [user, setUser] = useState(() => readStorage(CURRENT_USER_KEY, null))

  const saveUser = (newUser) => {
    setUser(newUser)
    writeStorage(CURRENT_USER_KEY, newUser)
  }

  // Inscription : renvoie un message d'erreur, ou null si tout s'est bien passé
  // newUser : { username, password, email, firstname, lastname, gender, avatar }
  const register = (newUser) => {
    const users = readStorage(USERS_KEY, [])
    if (users.some((u) => u.username === newUser.username)) {
      return "Ce login est déjà utilisé"
    }
    writeStorage(USERS_KEY, [...users, newUser])
    saveUser(withoutPassword(newUser))
    return null
  }

  // Connexion : renvoie true si le login et le mot de passe sont corrects
  const login = (username, password) => {
    const users = readStorage(USERS_KEY, [])
    const found = users.find((u) => u.username === username && u.password === password)
    if (!found) return false
    saveUser(withoutPassword(found))
    return true
  }

  const logout = () => saveUser(null)

  return (
    <AuthContext.Provider value={{ user, register, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

// Hook pour utiliser le contexte dans les composants
// eslint-disable-next-line react/only-export-components
export function useAuth() {
  return useContext(AuthContext)
}
