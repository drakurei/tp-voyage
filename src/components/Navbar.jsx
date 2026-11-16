import { Link, NavLink } from "react-router-dom";

function Navbar() {
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
        </div>
      </nav>

      <NavLink to="/search" className="search-icon" aria-label="Rechercher" title="Rechercher">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
          <circle cx="11" cy="11" r="7" />
          <line x1="16.5" y1="16.5" x2="21" y2="21" />
        </svg>
      </NavLink>
    </header>
  );
}

export default Navbar;
