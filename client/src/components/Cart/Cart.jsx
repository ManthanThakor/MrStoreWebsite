import React, { useContext } from 'react';
import { MdClose } from "react-icons/md";
import { BsCartX } from "react-icons/bs";
import "./Cart.scss";
import CartItem from "./CartItem/CartItem";
import { Context } from "../../utils/context";
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom

const Cart = ({ setShowCart }) => {
  const { cartItems, cartSubTotal, handleClearCart } = useContext(Context);
  const navigate = useNavigate(); // Correct usage of useNavigate

  const returnToShop = () => {
    setShowCart(false);
    navigate("/");
  };

  const handleCheckout = () => {
    // Close the cart panel
    setShowCart(false);
    // Navigate to the checkout page
    navigate("/checkout");
  };

  return (
    <div className="cart-panel">
      <div className="opac-layer" onClick={() => setShowCart(false)}></div>
      <div className="cart-content">
        <div className="cart-header">
          <span className="heading">Shopping Cart</span>
          <span className="close-btn" onClick={() => setShowCart(false)}>
            <MdClose />
            <span className="text">close</span>
          </span>
        </div>

        {!cartItems.length && (
          <div className="empty-cart">
            <BsCartX />
            <span className="text">No products in the cart.</span>
            <button className="return-cta" onClick={returnToShop}>
              RETURN TO SHOP
            </button>
          </div>
        )}

        {cartItems.length > 0 && (
          <>
            {cartItems.map((item) => (
              <CartItem key={item.id} item={item} />
            ))}
            <div className="cart-footer">
              <div className="subtotal">
                <span className="text">Subtotal</span>
                <span className="text total">&#8377;{cartSubTotal}</span>
              </div>
              <div className="button">
                <button className="checkout-cta" onClick={handleCheckout}>
                  CHECKOUT
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;
