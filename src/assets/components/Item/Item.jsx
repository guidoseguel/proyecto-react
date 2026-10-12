import { Link } from "react-router-dom";
import "./Item.css";

function Item({ product, onAddToCart }) {
  // Le damos formato de moneda al precio
  const price = new Intl.NumberFormat("es-AR", {
    style: "currency",
    currency: "ARS",
    maximumFractionDigits: 0,
  }).format(product.price);

  return (
    <article className="item-card">
      <Link to={"/product/" + product.id} className="item-card__link">
        <div className="item-card__image-container">
          <img
            src={product.image}
            alt={product.name}
            className="item-card__image"
            loading="lazy"
          />
        </div>

        <div className="item-card__content">
          <span className="item-card__category">{product.category}</span>

          <h2 className="item-card__name">{product.name}</h2>

          <p className="item-card__description">{product.description}</p>

          <div className="item-card__footer">
            <span className="item-card__price">{price}</span>
            <span className="item-card__action">Ver producto →</span>
          </div>
        </div>
      </Link>

      <button
        type="button"
        className="item-card__add"
        onClick={() => onAddToCart(product)}
      >
        Añadir al carrito
      </button>
    </article>
  );
}

export default Item;
