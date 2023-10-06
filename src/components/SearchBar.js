import React, { useState } from "react";

import styles from "../website/component.module.css";

const SearchBar = (props) => {
  const [searchValue, setSearchValue] = useState("");

  const handleInputChange = (event) => {
    setSearchValue(event.target.value);
  };

  const clearAll = () => {
    setSearchValue("");
  };

  const displayClearIcon = searchValue.length > 0;

  const filteredProducts = props.products.filter((product) => {
    return product.toLowerCase().includes(searchValue.toLocaleLowerCase());
  });

  return (
    <div>
      <div className={styles.center}>
        <div className={styles.searchBoxClose}>
          <input
            type="text"
            value={searchValue}
            onChange={handleInputChange}
            placeholder="Search"
            className={styles.searchBox}
          />

          {displayClearIcon && (
            <i
              className="ri-close-circle-fill"
              id={styles.closeButton}
              onClick={clearAll}
            />
          )}
        </div>
      </div>
      <ul>
        {filteredProducts.map((product) => {
          return <li key={product}> {product} </li>;
        })}
      </ul>
    </div>
  );
};

export default SearchBar;
