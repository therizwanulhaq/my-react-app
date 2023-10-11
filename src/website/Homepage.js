import React, { useState } from "react";

import styles from "./styles/component.module.css";
import Spinner from "./Spinner";
import { useMyContext } from "./contextAPI/Context";

function HomePage() {
  const products = useMyContext();

  const [searchQuery, setSearchQuery] = useState("");

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
        <div>
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
        </div>
      ) : (
        <Spinner />
      )}
    </div>
  );
}

export default HomePage;
