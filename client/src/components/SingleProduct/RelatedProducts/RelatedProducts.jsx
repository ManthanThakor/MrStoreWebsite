// import React from "react";
// import Product from "../../Products/Product/Product";
// import Products from "../../Products/Products";
// import useFetch from "../../../hooks/usefetch";


// const RelatedProducts = ({ productId, categoryId }) => {
//   const { data, error } = useFetch(`/api/products?populate=*&filters[id][$ne]=${productId}&filters[categories][id]=${categoryId}&pagination[start]=0&pagination[limit]=4`);

//   if (error) {
//     return <div>Error loading related products</div>;
//   }

//   if (!data) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div className="related-products">
//       <Products headingText="Related Products" products={data} />
//     </div>
//   );
// };

// export default RelatedProducts;


import "./relatedproduct.scss";
import React from "react";
import Product from "../../Products/Product/Product";
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
      <h2>Related Products</h2>
      <div className="products-list">
        {data.data.map(product => (
          <Product key={product.id} id={product.id} data={product.attributes} />
        ))}
      </div>
    </div>
  );
};

export default RelatedProducts;
