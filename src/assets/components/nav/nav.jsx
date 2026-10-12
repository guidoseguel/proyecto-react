import { Link, NavLink } from "react-router-dom";
import "./nav.css";

function Nav({ cartCount = 0 }) {
  return (
    <nav className="nav" aria-label="Navegación principal">
      <div className="nav__links">
        <NavLink
          to="/"
          end
          className={({ isActive }) =>
            `nav__link ${isActive ? "nav__link--active" : ""}`
          }
        >
          Inicio
        </NavLink>

        <Link to="/#productos" className="nav__link">
          Productos
        </Link>

        <NavLink
          to="/cart"
          aria-label={`Carrito, ${cartCount} productos`}
          className={({ isActive }) =>
            `nav__link nav__link--cart ${isActive ? "nav__link--active" : ""}`
          }
        >
          <svg
            className="nav__cart-icon"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <circle cx="9" cy="21" r="1" />
            <circle cx="20" cy="21" r="1" />
            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
          </svg>

          <span>Carrito</span>

          <span className="nav__cart-count">{cartCount}</span>
        </NavLink>
      </div>
    </nav>
  );
}

export default Nav;
