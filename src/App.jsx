import { useState, useMemo, useDeferredValue } from "react";

import Navbar from "./components/Navbar.jsx";
import ProductList from "./components/ProductList.jsx";
import Cart from "./components/Cart.jsx";

import products from "./mock/products.js";

const App = () => {
  const [search, setSearch] = useState("");
  const [showCart, setShowCart] = useState(false);
  const deferredSearch = useDeferredValue(search);

  const filteredProducts = useMemo(() => {
    return products.filter((product) =>
      product.title.toLowerCase().includes(deferredSearch.toLowerCase()),
    );
  }, [deferredSearch]);
  return (
    <div className="min-h-screen flex flex-col gap-10 bg-gray-100 dark:bg-gray-500 transition-colors duration-150">
      <Navbar search={search} setSearch={setSearch} setShowCart={setShowCart} />
      <ProductList products={filteredProducts} />
      {showCart && <Cart />}
    </div>
  );
};

export default App;
