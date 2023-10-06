import React, { useState, useEffect } from "react";

import styles from "../website/component.module.css";

function HomePage() {
  const [products, setProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error:", error));
  }, []);

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const hasProducts = products.length > 0;

  return (
    <div>
      <div className={styles.center}>
        <div className={styles.searchBoxClose}>
          <input
            type="search"
            placeholder="Search products..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className={styles.searchBox}
          />
        </div>
      </div>
      <h1>Product List</h1>
      {hasProducts ? (
        <ul>
          {filteredProducts.map((product) => (
            <div key={product.id} className={styles.productTile}>
              <div className={styles.imageContainer}>
                <img
                  className={styles.productImage}
                  src={product.image}
                  alt={product.title}
                />
              </div>
              <div>
                <h2>{product.title}</h2>
                <p>Price: ${product.price}</p>
                <p>Description: {product.description}</p>
              </div>
            </div>
          ))}
        </ul>
      ) : (
        "Loading..."
      )}
    </div>
  );
}

export default HomePage;
