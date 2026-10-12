import Item from "../Item/Item";
import "./ItemList.css";

function ItemList({ products, onAddToCart }) {
  // Mostramos un mensaje si no hay productos
  if (!products || products.length === 0) {
    return <p>No hay productos disponibles.</p>;
  }

  return (
    <div className="item-list">
      {products.map((product) => (
        <Item key={product.id} product={product} onAddToCart={onAddToCart} />
      ))}
    </div>
  );
}

export default ItemList;
