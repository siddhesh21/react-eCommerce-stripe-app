import { commerce } from "./lib/commerce";
import { Products, NavBar } from "./components";
import { useEffect, useState } from "react";

function App() {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    const { data } = await commerce.products.list();
    setProducts(data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  console.log(products);

  return (
    <div className="app">
      <NavBar />
      <Products />;
    </div>
  );
}

export default App;
