// context.js
import React, { createContext, useState, useEffect, useContext } from "react";

// Step 1: Create a context
const MyContext = createContext();

// Step 2: Create a provider component
function MyProvider({ children }) {
  // Use the useState hook to manage the shared data
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch data from the API only if it's not already cached
    if (products.length === 0) {
      fetch("https://fakestoreapi.com/products")
        .then((response) => response.json())
        .then((data) => setProducts(data))
        .catch((error) => console.error("Error:", error));
    }
  }, [products]);

  return <MyContext.Provider value={products}>{children}</MyContext.Provider>;
}

// Step 3: Create a custom hook for consuming the context
function useMyContext() {
  return useContext(MyContext);
}

export { MyProvider, useMyContext };
