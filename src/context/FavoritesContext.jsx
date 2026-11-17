import { createContext, useContext, useState } from "react"
import { useAuth } from "./AuthContext"

// Favoris gardés dans le localStorage, séparés par utilisateur :
// { "1": ["japan", "peru"], "5": ["france"] }  (id utilisateur -> slugs des destinations)
const STORAGE_KEY = "voyages_favorites"

function readFavorites() {
  try {
    const value = localStorage.getItem(STORAGE_KEY)
    return value ? JSON.parse(value) : {}
  } catch {
    return {}
  }
}

const FavoritesContext = createContext(null)

export function FavoritesProvider({ children }) {
  const { user } = useAuth()
  const [allFavorites, setAllFavorites] = useState(readFavorites)

  // Favoris de l'utilisateur connecté (aucun si personne n'est connecté)
  const favorites = user ? allFavorites[user.id] ?? [] : []

  const saveFavorites = (list) => {
    const updated = { ...allFavorites, [user.id]: list }
    setAllFavorites(updated)
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updated))
    } catch {
      // localStorage indisponible : on garde seulement l'état en mémoire
    }
  }

  const isFavorite = (slug) => favorites.includes(slug)

  // Ajout seulement si connecté et si la destination n'est pas déjà dans les favoris
  const addFavorite = (slug) => {
    if (!user || isFavorite(slug)) return
    saveFavorites([...favorites, slug])
  }

  const removeFavorite = (slug) => {
    if (!user) return
    saveFavorites(favorites.filter((s) => s !== slug))
  }

  return (
    <FavoritesContext.Provider value={{ favorites, isFavorite, addFavorite, removeFavorite }}>
      {children}
    </FavoritesContext.Provider>
  )
}

// eslint-disable-next-line react/only-export-components
export function useFavorites() {
  return useContext(FavoritesContext)
}
