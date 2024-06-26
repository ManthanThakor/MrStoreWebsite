import { MdClose } from "react-icons/md";
import "./CartItem.scss";
import prod from "../../../assets/products/earbuds-prod-1.webp";
const CartItem = () => {
  return (
    <>
      <div className="card-products">
        <div className="card-product">
          <div className="img-container">
            <img src={prod} alt="" />
          </div>
          <div className="prod-details">
            <span className="name">Product Name</span>
            <MdClose className="close-btn" />
            <div className="quantity-buttons">
              <span>-</span>
              <span>5</span>
              <span>+</span>
            </div>
            <div className="text">
                <span>3</span>                <span>x</span>
                <span className="highlight">&#8377;324</span>

            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartItem;
