import React from "react";
import { Link } from "react-router-dom";
import "./categories.scss";

const Categories = () => {
  // Updated hardcoded data for categories
  const categories = [
    {
      id: 2,
      title: 'Headphones',
      description: 'Immerse yourself in high-quality sound with our range of headphones. From over-ear to on-ear styles, find the perfect fit for comfort and clarity, whether you\'re at home, in the studio, or on the go.',
      image: './src/assets/category/cat-1.jpg',
    },
    {
      id: 3,
      title: 'Wireless Earbuds',
      description: 'Experience true freedom with our wireless earbuds. Designed for active lifestyles, these earbuds offer superior sound, long battery life, and seamless connectivity, making them perfect for workouts, commuting, and everything in between.',
      image: './src/assets/category/cat-4.jpg',
    },
    {
      id: 4,
      title: 'Bluetooth Speaker',
      description: 'Take your music anywhere with our Bluetooth speakers. Compact, portable, and powerful, these speakers deliver crisp, clear sound whether you\'re at the beach, having a picnic, or hosting a party at home.',
      image: './src/assets/category/cat-2.jpg',
    },
    {
      id: 5,
      title: 'Smart Watches',
      description: 'Stay connected and track your fitness goals with our smartwatches. Featuring the latest technology, these watches offer notifications, health monitoring, and customizable faces, all wrapped in stylish designs suitable for any occasion.',
      image: './src/assets/category/cat-3.jpg',
    }
  ];

  return (
    <div className="categories-list">
      <h2>Categories</h2>
      <div className="categories-grid">
        {categories.map(category => (
          <Link to={`/categories/${category.id}`} key={category.id} className="category-card">
            <div className="category-image">
              <img src={category.image} alt={category.title} />
            </div>
            <div className="category-info">
              <h3>{category.title}</h3>
              <p>{category.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Categories;
