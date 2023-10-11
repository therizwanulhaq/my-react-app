import { useParams } from "react-router-dom";

import Spinner from "./Spinner";
import styles from "../website/component.module.css";

function ProductDetails({ products }) {
  const { id } = useParams();

  // Convert the id to a number
  const productId = parseInt(id, 10);

  const product = products.find((product) => product.id === productId);

  if (!product) {
    return (
      <div>
        <Spinner />
      </div>
    );
  }
  return (
    <div>
      <h2>Product Details</h2>
      <div className={styles.productTile}>
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
    </div>
  );
}

export default ProductDetails;
