// Categories.jsx

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useFetch from "../../hooks/usefetch";

const Categories = () => {
  const [categories, setCategories] = useState([]);
  const { data, loading, error } = useFetch("/api/categories"); // Adjust the API endpoint as per your backend setup

  useEffect(() => {
    if (data && data.data) {
      setCategories(data.data);
    }
  }, [data]);

  if (loading) {
    return <div>Loading categories...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="categories-list">
      <h2>Categories</h2>
      <ul>
        {categories.map((category) => (
          <li key={category.id}>
            <Link to={`/categories/${category.id}`}>{category.attributes.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
