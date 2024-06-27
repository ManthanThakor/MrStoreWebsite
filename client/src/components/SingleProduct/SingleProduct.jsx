
import "./SingleProduct.scss";
import RelatedProducts from "./RelatedProducts/RelatedProducts";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaPinterest,
  FaCartPlus,
} from "react-icons/fa";
import { useParams } from "react-router-dom";
import { useState , useContext } from "react";
import useFetch from "../../hooks/usefetch";
import { Context } from "../../utils/context";

const SingleProduct = () => {
  const [quantity, setQuantity] = useState(1);
  const { id } = useParams();
  const {handleAddToCart} = useContext(Context);
  const { data, error } = useFetch(`/api/products?populate=*&filters[id]=${id}`);

  if (!data) return <div>Loading...</div>;
  if (error) return <div>Error loading product details</div>;

  const product = data.data[0].attributes;
  const imageUrll = import.meta.env.VITE_DEV_URL + product.img.data[0].attributes.url;

  const increment = () => {
    setQuantity(prevState => prevState + 1);
  };

  const decrement = () => {
    setQuantity(prevState => Math.max(prevState - 1, 1));
  };

  return (
    <div className="single-product-main-content">
      <div className="layout">
        <div className="single-product-page">
          <div className="left">
            <img src={imageUrll} alt="" />
          </div>
          <div className="right">
            <span className="name">{product.title}</span>
            <span className="price">&#8377;{product.price}</span>
            <span className="desc">{product.desc}</span>
            <div className="cart-button">
              <div className="quantity-buttons">
                <span onClick={decrement}>-</span>
                <span>{quantity}</span>
                <span onClick={increment}>+</span>
              </div>
              <button className="add-to-cart-button" onClick={() => {handleAddToCart(data.data[0], quantity);
                setQuantity(1);
              } }>
                <FaCartPlus size={20} />
                ADD TO CART
              </button>
            </div>
            <span className="divider" />
            <div className="info-item">
              <span className="text-bold">
                Category:{" "}
                <span>{product.categories.data[0].attributes.title}</span>
              </span>
              <span className="text-bold">
                Share:
                <span className="social-icons">
                  <FaFacebookF size={16} />
                  <FaTwitter size={16} />
                  <FaInstagram size={16} />
                  <FaLinkedinIn size={16} />
                  <FaPinterest size={16} />
                </span>
              </span>
            </div>
          </div>
        </div>
        <RelatedProducts productId={id} categoryId={product.categories.data[0].id} />
      </div>
    </div>
  );
};

export default SingleProduct;
