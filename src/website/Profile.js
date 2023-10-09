import React, { useState, useEffect } from "react";

function Profile() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <>
      {products.map((product) => (
        <li key={product.id}>{product.title}</li>
      ))}
    </>
  );
}
export default Profile;
