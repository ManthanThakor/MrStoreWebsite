import "./Category.scss";
import { useParams } from "react-router-dom";
import Products from "../Products/Products";
import useFetch from "../../hooks/usefetch";

const Category = () => {
  const { id } = useParams();
  const { data, loading, error } = useFetch(`/api/products?populate=*&filters[categories][id]=${id}`);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="category-main-content">
      <div className="layout">
        <div className="category-title">
          Category Title
        </div>
        <Products products={data} innerPage={true} />
      </div>
    </div>
  );
};

export default Category;
