import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";

import Header from "./assets/components/Header/Header.jsx";
import Footer from "./assets/components/Footer/Footer.jsx";
import ItemListContainer from "./assets/components/ItemListContainer/ItemListContainer.jsx";
import ItemDetailContainer from "./assets/components/ItemDetailContainer/ItemDetailContainer.jsx";

function App() {
  const [cartItems, setCartItems] = useState([]);

  // Agrega un producto al carrito
  function handleAddToCart(product) {
    setCartItems((currentItems) => [...currentItems, product]);
  }

  return (
    <>
      <Header cartCount={cartItems.length} />

      <main>
        <Routes>
          <Route
            path="/"
            element={<ItemListContainer onAddToCart={handleAddToCart} />}
          />

          <Route path="/cart" element={<h1>Carrito</h1>} />

          <Route path="/product/:id" element={<ItemDetailContainer />} />
        </Routes>
      </main>

      <Footer />
    </>
  );
}

export default App;
