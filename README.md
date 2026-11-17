# TP Voyage

Site de présentation de destinations de voyage, réalisé avec React et React Router dans le cadre d'un TP.

Site en ligne : https://drakurei.github.io/tp-voyage/

## Pages

- **Accueil** : présentation du projet
- **Destinations** : liste des pays avec un lien vers chaque fiche, et une recherche rapide
- **Détails** : description, capitale, région (lien vers la région), photos et bouton favoris
- **Région** (`/region/:region`) : destinations d'une région
- **Recherche** : par mots-clés et/ou région, validée avec yup
- **Contact** : formulaire validé avec react-hook-form et yup
- **Connexion / Inscription** : via l'API [dummyjson](https://dummyjson.com/docs/auth)
- **Profil** (connecté) : informations récupérées avec `/auth/me`
- **Favoris** (connecté) : destinations ajoutées en favoris, possibilité de les retirer
- **À propos**
- **404** : page affichée pour une adresse inconnue

## Fonctionnalités

- Authentification avec `AuthContext` (login, logout, token) et routes protégées avec `ProtectedRoute`
- Thème clair / sombre avec `ThemeContext`, choix gardé dans le localStorage
- Favoris par utilisateur avec `FavoritesContext`, stockés dans le localStorage, sans doublon

Compte de test dummyjson : `emilys` / `emilyspass`

## Technologies

- React
- React Router
- React Bootstrap
- React Hook Form et Yup
- Vite

## Installation

```bash
npm install
npm run dev
```

## Déploiement

```bash
npm run deploy
```

Le site est publié sur GitHub Pages depuis la branche `gh-pages`.

## Arborescence

```
src/
  components/   Navbar, ProtectedRoute
  context/      AuthContext, ThemeContext, FavoritesContext
  data/         destinations
  layouts/      MainLayout
  pages/        Accueil, Destinations, Détails, Région, Recherche, Contact,
                Connexion, Inscription, Profil, Favoris, À propos, 404
  router/       Router
```

## Auteur

Jonathan Davy
