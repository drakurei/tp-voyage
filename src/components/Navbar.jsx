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
    </header>
  );
}

export default Navbar;
