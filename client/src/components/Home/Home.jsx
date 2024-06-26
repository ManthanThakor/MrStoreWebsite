// import "./Home.scss";
// import Banner from "./Banner/Banner";
// import Category from "./Category/Category";
// import Products from "../Products/Products";
// import { useEffect } from "react";
// import { fetchDataFromApi } from "../../utils/api";

// const Home = () => {
//   useEffect(() => {
//     getCategory();
//   }, []);

//   const getCategory = () => {
//     fetchDataFromApi("/api/categories?populate=*").then((res) =>
//       console.log(res)
//     );
//   };

//   return (
//     <>
//       <div>
//         <Banner />
//         <div className="main-content">
//           <div className="layout">
//             <Category />
//             <Products headingText="Popular Products" />
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Home;


import "./Home.scss";
import Banner from "./Banner/Banner";
import Category from "./Category/Category";
import Products from "../Products/Products";
import { useEffect } from "react";
import { fetchDataFromApi } from "../../utils/api";

const Home = () => {
  useEffect(() => {
    getCategory();
  }, []);

  const getCategory = () => {
    fetchDataFromApi("/api/categories?populate=*").then((res) =>
      console.log(res)
    );
  };

  return (
    <>
      <div>
        <Banner />
        <div className="main-content">
          <div className="layout">
            <Category />
            <Products headingText="Popular Products" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
