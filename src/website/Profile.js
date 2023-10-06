import React, { useEffect, useState } from "react";

function Profile() {
  const [search, setSearch] = useState("");
  const [productData, setProductData] = useState([]);

  const filteredProducts = productData.filter((product) => {
    return product.title.toLowerCase().includes(search.toLowerCase());
  });

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProductData(data));
  }, []);

  return (
    <div>
      <input
        type="search"
        placeholder="Search Products..."
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
        }}
      />
      <div>
        {filteredProducts.map((product) => {
          return (
            <div key={product.id}>
              <p>{product.price}</p>
              <p>{product.title}</p>
              <img src={product.image} alt={product.title} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Profile;
