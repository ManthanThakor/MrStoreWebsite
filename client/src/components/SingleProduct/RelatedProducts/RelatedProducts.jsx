import Product from "../../Products/Product/Product";
import Products from "../../Products/Products";
import useFetch from "../../hooks/usefetch";

const RelatedProducts = () => {
  const { data } = useFetch(`/api/products?populate=*&filters[id][$ne]=${productId}&filters[categories][id]=${categoryId}&pagination[start]=0&pagination[limit]=4`);
  return (
    <>
      <div className="related-products">
        <Products headingText="Related Products" />
      </div>
    </>
  );
};

export default RelatedProducts;
