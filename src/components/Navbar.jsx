import { startTransition } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useTheme } from "../context/ThemeContext";

function Navbar() {
  const { user, logout } = useAuth();
  const { theme, toggleTheme } = useTheme();
  const navigate = useNavigate();
  const isDark = theme === "dark";

  const handleLogout = () => {
    // React Router fait ses navigations dans une transition : on y met aussi
    // la déconnexion pour que les deux changements arrivent ensemble
    // (sinon, depuis la page profil, on serait renvoyé vers /login)
    startTransition(() => {
      navigate("/");
      logout();
    });
  };

  return (
    <header className="site-header">
      <p className="header-side header-left">TP Voyage React</p>

      <nav className="nav-bubble">
        <Link to="/" className="brand">
          Voyages
        </Link>
        <div className="nav-links">
          <NavLink to="/" end>
            Accueil
          </NavLink>
          <NavLink to="/destinations">Destinations</NavLink>
          <NavLink to="/about">À propos</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </div>
      </nav>

      <div className="header-actions">
        {/* Choix du thème clair / sombre */}
        <button
          type="button"
          className="theme-toggle"
          onClick={toggleTheme}
          aria-label={isDark ? "Passer au thème clair" : "Passer au thème sombre"}
          title={isDark ? "Thème clair" : "Thème sombre"}
        >
          {isDark ? (
            // soleil
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <circle cx="12" cy="12" r="4" />
              <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
            </svg>
          ) : (
            // lune
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" />
            </svg>
          )}
        </button>

        {user ? (
          <>
            <NavLink to="/favorites" className="account-link account-secondary">
              Favoris
            </NavLink>
            <NavLink to="/profile" className="account-link">
              Profil
            </NavLink>
            <button type="button" className="account-link account-secondary" onClick={handleLogout}>
              Déconnexion
            </button>
          </>
        ) : (
          <>
            <NavLink to="/login" className="account-link">
              Connexion
            </NavLink>
            <NavLink to="/register" className="account-link account-secondary">
              Inscription
            </NavLink>
          </>
        )}
      </div>
    </header>
  );
}

export default Navbar;
