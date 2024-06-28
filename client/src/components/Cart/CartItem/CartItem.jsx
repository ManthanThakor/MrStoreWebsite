// import { MdClose } from "react-icons/md";
// import "./CartItem.scss";
// import { useContext } from "react";
// import { Context } from "../../../utils/context";

// const CartItem = ({ item }) => {
//   const { handleRemoveFromCart, handleCartProductQuantity } =
//     useContext(Context);
//   const imageUrl =
//     import.meta.env.VITE_DEV_URL + item.attributes.img.data[0].attributes.url;

//   return (
//     <div className="card-products">
//       <div className="card-product">
//         <div className="img-container">
//           <img src={imageUrl} alt="Product" />
//         </div>
//         <div className="prod-details">
//           <span className="name">
//             {item.attributes.title}
//             <MdClose
//               className="close-btn"
//               onClick={() => handleRemoveFromCart(item)}
//             />
//           </span>
//           <div className="quantity-buttons">
//             <span onClick={() => handleCartProductQuantity("dec", item)}>
//               -
//             </span>
//             <span>{item.attributes.quantity}</span>
//             <span onClick={() => handleCartProductQuantity("inc", item)}>
//               +
//             </span>
//           </div>
//           <div className="text">
//             <span>{item.attributes.quantity}</span>
//             <span>x</span>
//             <span className="highlight">
//               &#8377;{item.attributes.price * item.attributes.quantity}
//             </span>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CartItem;


import { MdClose } from "react-icons/md";
import "./CartItem.scss";
import { useContext } from "react";
import { Context } from "../../../utils/context";

const CartItem = ({ item }) => {
  const { handleRemoveFromCart, handleCartProductQuantity } = useContext(Context);
  const imageUrl = import.meta.env.VITE_DEV_URL + item.attributes.img.data[0].attributes.url;

  return (
    <div className="card-products">
      <div className="card-product">
        <div className="img-container">
          <img src={imageUrl} alt="Product" />
        </div>
        <div className="prod-details">
          <span className="name">
            {item.attributes.title}
            <MdClose className="close-btn" onClick={() => handleRemoveFromCart(item)} />
          </span>
          <div className="quantity-buttons">
            <span onClick={() => handleCartProductQuantity("dec", item)}>-</span>
            <span>{item.attributes.quantity}</span>
            <span onClick={() => handleCartProductQuantity("inc", item)}>+</span>
          </div>
          <div className="text">
            <span>{item.attributes.quantity}</span>
            <span>x</span>
            <span className="highlight">&#8377;{item.attributes.price * item.attributes.quantity}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
