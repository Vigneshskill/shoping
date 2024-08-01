import React, { useState } from "react";
import data from "./assets/data.json";
import  Product  from "./Product";

const Header = ({ cart, setCart }) => {
  const [products] = useState(data);
  return (
    <div className="product-container mt-3 flex flex-wrap gap-5 justify-center ">
      {products.map((product) => (
        <Product  key={product.id} product={product} cart={cart} setCart={setCart} />
        
      ))}
    </div>
  );
};

export default Header;
