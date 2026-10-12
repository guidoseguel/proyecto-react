import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__content">
        <div className="footer__brand">
          <Link to="/" className="footer__logo">
            🐱 YuumiStore
          </Link>

          <p>Tu tienda de hardware, componentes y periféricos gaming.</p>
        </div>

        <div className="footer__links">
          <h2>Explorá YuumiStore</h2>

          <Link to="/">Inicio</Link>
          <Link to="/cart">Carrito</Link>
        </div>

        <div className="footer__info">
          <h2>Sobre nosotros</h2>

          <p>
            Tecnología y componentes para ayudarte a armar tu próximo setup.
          </p>
        </div>
      </div>

      <div className="footer__bottom">
        <p>
          © {new Date().getFullYear()} YuumiStore. Proyecto Para TalentoTech.
        </p>

        <span>Hecho por Guido Seguel.</span>
      </div>
    </footer>
  );
}

export default Footer;
