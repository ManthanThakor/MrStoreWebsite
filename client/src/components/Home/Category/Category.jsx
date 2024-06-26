import "./Category.scss";
import cat1 from "../../../assets/category/cat-1.jpg";

const Category = ({ categories }) => {
  return (
    <>
      <div className="shop-by-category">
        <div className="categories">
          {categories && categories.data ? (
            categories.data.map((item) => (
              <div key={item.id} className="category">
                <img
                  src={
                    import.meta.env.VITE_DEV_URL +
                    item.attributes.img.data.attributes.url
                  }
                  alt=""
                />
              </div>
            ))
          ) : (
            <p>Loading categories...</p>
          )}
        </div>
      </div>
    </>
  );
};

export default Category;
