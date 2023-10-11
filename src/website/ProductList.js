import React from "react";
import { Link } from "react-router-dom";

import styles from "../website/component.module.css";

function ProductList({ products }) {
  return (
    <div>
      <div className={styles.gridView}>
        {products.map((product) => (
          <div key={product.id} className={styles.productImage}>
            <Link to={`/products/${product.id}`}>
              <div>
                <img
                  src={product.image}
                  alt={product.title}
                  className={styles.productGrid}
                />
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;
