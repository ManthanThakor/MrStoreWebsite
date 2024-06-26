import { MdClose } from "react-icons/md";
import { BsCartX } from "react-icons/bs";

import "./Cart.scss";
const Cart = () => {
  return (
    <>
      <div className="cart-panel">
        <div className="opac-layer"></div>
        <div className="cart-content">
          <span className="heading">Shopping Cart</span>
          <span className="close-btn">
            <MdClose />
            <span className="text">close</span>
          </span>
        </div>
      </div>
    </>
  );
};

export default Cart;
