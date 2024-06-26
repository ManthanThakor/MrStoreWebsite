import "./Product.scss";

const Product = ({ id, data }) => {
  const imageUrl = import.meta.env.VITE_DEV_URL + data.img.data[0].attributes.url;
  return (
    <div className="product-card">
      <div className="thumbnail">
        <img src={imageUrl} alt="" />
      </div>
      <div className="prod-details">
        <span className="name">{data.title}</span>
        <span className="price">&#8377;{data.price}</span>
      </div>
    </div>
  );
};

export default Product;
