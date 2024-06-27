import React from "react";
import Product from "../../Products/Product/Product";
import Products from "../../Products/Products";
import useFetch from "../../../hooks/usefetch";


const RelatedProducts = ({ productId, categoryId }) => {
  const { data, error } = useFetch(`/api/products?populate=*&filters[id][$ne]=${productId}&filters[categories][id]=${categoryId}&pagination[start]=0&pagination[limit]=4`);

  if (error) {
    return <div>Error loading related products</div>;
  }

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div className="related-products">
      <Products headingText="Related Products" products={data} />
    </div>
  );
};

export default RelatedProducts;
