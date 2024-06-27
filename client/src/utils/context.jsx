import React, { createContext, useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

export const Context = createContext();

const AppContext = ({ children }) => {
  const [state, setState] = useState(null);
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [cartSubTotal, setCartSubTotal] = useState(0);
  const location = useLocation();

  useEffect(() => {
    let subTotal = 0;
    let itemCount = 0;
    cartItems.map((item) => {
      subTotal += item.attributes.price * item.attributes.quantity;
      itemCount += item.attributes.quantity;
      return null; // add this line to avoid warnings
    });
    setCartSubTotal(subTotal);
    setCartCount(itemCount); // you may want to keep track of item count as well
  }, [cartItems]);

  const handleAddToCart = (product, quantity) => {
    let items = [...cartItems];
    let index = items.findIndex((p) => p.id === product.id);
    if (index !== -1) {
      items[index].attributes.quantity += quantity;
    } else {
      product.attributes.quantity = quantity;
      items = [...items, product];
    }
    setCartItems(items);
  };

  const handleRemoveFromCart = (product) => {
    let items = [...cartItems];
    items = items.filter((p) => p.id !== product.id);
    setCartItems(items);
  };

  const handleCartProductQuantity = (type, product) => {
    let items = [...cartItems];
    let index = items.findIndex((p) => p.id === product.id);
    if (type === "inc") {
      items[index].attributes.quantity += 1;
    } else if (type === "dec") {
      if (items[index].attributes.quantity === 1) return;
      items[index].attributes.quantity -= 1;
    }
    setCartItems(items);
  };

  const value = {
    state,
    setState,
    categories,
    setCategories,
    products,
    setProducts,
    cartItems,
    setCartItems,
    cartCount,
    setCartCount,
    cartSubTotal,
    setCartSubTotal,
    handleAddToCart,
    handleRemoveFromCart,
    handleCartProductQuantity,
  };

  return <Context.Provider value={value}>{children}</Context.Provider>;
};

export default AppContext;
