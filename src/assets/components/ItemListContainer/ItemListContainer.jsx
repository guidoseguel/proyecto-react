import { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";

function ItemListContainer({ onAddToCart }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("/data/products.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("No se pudieron cargar los productos");
        }

        return response.json();
      })
      .then((data) => {
        setProducts(data);
      })
      .catch((error) => {
        console.error("Error al cargar los productos:", error);
        setError("No pudimos cargar los productos. Intentá nuevamente.");
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p className="catalog-message">Cargando productos...</p>;
  }

  if (error) {
    return (
      <p className="catalog-message" role="alert">
        {error}
      </p>
    );
  }

  return (
    <section className="catalog">
      <div className="catalog__intro">
        <p className="catalog__eyebrow">YUUMISTORE · GAMING & HARDWARE</p>

        <h1>Encontrá tu próximo setup</h1>

        <p>Componentes y periféricos para llevar tu PC al siguiente nivel.</p>
      </div>

      {products.length > 0 ? (
        <ItemList products={products} onAddToCart={onAddToCart} />
      ) : (
        <p className="catalog-message">Todavía no hay productos disponibles.</p>
      )}
    </section>
  );
}

export default ItemListContainer;
