import { MdClose } from 'react-icons/md';
import './CartItem.scss';
import prod from '../../../assets/products/earbuds-prod-1.webp';
import { useContext } from 'react';
import { Context } from '../../../utils/context';

const CartItem = () => {
const { cartItems ,   handleRemoveFromCart ,   handleCartProductQuantity} = useContext(Context);
   return (
    <div className="card-products">
      {cartItems.map(item => (
        <div key={item.id} className="card-product">
        <div className="img-container">
          <img src={prod} alt="Product" />
        </div>
        <div className="prod-details">
          <span className="name">
{item.attributes.title}
            <MdClose className="close-btn" onClick={() => handleRemoveFromCart(item)}/>
          </span>
          <div className="quantity-buttons">
            <span onClick={() =>   handleCartProductQuantity("dec",item)}>-</span>
            <span>{item.attributes.quantity}</span>
            <span onClick={() =>   handleCartProductQuantity("inc",item)}>+</span>
          </div>
          <div className="text">
            <span>{item.attributes.quantity}</span>
            <span>x</span>
            <span className="highlight">&#8377;{item.attributes.price * item.attributes.quantity}</span>
          </div>
        </div>
      </div>

      ))}
      
    </div>
  );
};

export default CartItem;
