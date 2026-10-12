import { Link } from "react-router-dom";
import "./ItemDetail.css";

function ItemDetail({ product }) {
  const price = new Intl.NumberFormat("es-AR", {
    style: "currency",
    currency: "ARS",
    maximumFractionDigits: 0,
  }).format(product.price);

  return (
    <section className="item-detail">
      <Link to="/" className="item-detail__back">
        ← Volver al catálogo
      </Link>

      <article className="item-detail__card">
        <div className="item-detail__image-container">
          <img
            src={product.image}
            alt={product.name}
            className="item-detail__image"
          />
        </div>

        <div className="item-detail__content">
          <span className="item-detail__category">{product.category}</span>

          <h1 className="item-detail__name">{product.name}</h1>

          <p className="item-detail__description">{product.description}</p>

          <p className="item-detail__price">{price}</p>
        </div>
      </article>
    </section>
  );
}

export default ItemDetail;
