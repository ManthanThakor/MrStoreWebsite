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

  const categoryTitle = data?.data?.[0]?.attributes?.categories?.data?.[0]?.attributes?.title || "Category";

  return (
    <div className="category-main-content">
      <div className="layout">
        <div className="category-title">
          {categoryTitle}
        </div>
        <Products products={data} innerPage={true} />
      </div>
    </div>
  );
};

export default Category;
