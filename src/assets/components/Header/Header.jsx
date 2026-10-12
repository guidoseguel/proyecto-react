import { Link } from "react-router-dom";
import Nav from "../nav/nav";

function Header({ cartCount = 0 }) {
  return (
    <header className="site-header">
      <div className="site-header__identity">
        <Link to="/" className="site-header__brand">
          <span aria-hidden="true">🐱</span>
          <span>YuumiStore</span>
        </Link>

        <p className="site-header__tagline">GAMING & HARDWARE</p>
      </div>

      <Nav cartCount={cartCount} />
    </header>
  );
}

export default Header;
