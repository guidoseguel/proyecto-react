import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";

function ItemDetailContainer() {
  const { id } = useParams();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let cancelRequest = false;

    setLoading(true);
    setError("");
    setProduct(null);

    fetch("/data/products.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("No se pudieron cargar los productos");
        }

        return response.json();
      })
      .then((products) => {
        const foundProduct = products.find(
          (product) => String(product.id) === id,
        );

        if (!foundProduct) {
          throw new Error("No encontramos ese producto");
        }

        if (!cancelRequest) {
          setProduct(foundProduct);
        }
      })
      .catch((error) => {
        console.error("Error al cargar el producto:", error);

        if (!cancelRequest) {
          setError("No encontramos el producto solicitado.");
        }
      })
      .finally(() => {
        if (!cancelRequest) {
          setLoading(false);
        }
      });

    return () => {
      cancelRequest = true;
    };
  }, [id]);

  if (loading) {
    return <p>Cargando producto...</p>;
  }

  if (error) {
    return <p role="alert">{error}</p>;
  }

  if (!product) {
    return <p>No hay información disponible del producto.</p>;
  }

  return <ItemDetail product={product} />;
}

export default ItemDetailContainer;
