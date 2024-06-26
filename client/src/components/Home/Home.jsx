import "./Home.scss";
import Banner from "./Banner/Banner";
import Category from "./Category/Category";
import Products from "../Products/Products";
import { useEffect, useContext } from "react";
import { fetchDataFromApi } from "../../utils/api";
import { Context } from "../../utils/context";

const Home = () => {
  const { categories, setCategories, products, setProducts } = useContext(Context);

  useEffect(() => {
    getCategory();
    getProducts();
  }, []);

  const getCategory = async () => {
    const res = await fetchDataFromApi("/api/categories?populate=*");
    console.log(res);
    setCategories(res);
  };

  const getProducts = async () => {
    const res = await fetchDataFromApi("/api/products?populate=*");
    console.log(res);
    setProducts(res);
  };

  return (
    <>
      <div>
        <Banner />
        <div className="main-content">
          <div className="layout">
            <Category categories={categories} />
            <Products products={products} headingText="Popular Products" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;

