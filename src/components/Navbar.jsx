import { startTransition } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Navbar() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

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
        {user ? (
          <>
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
