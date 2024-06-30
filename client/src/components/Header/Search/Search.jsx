import React, { useState, useEffect } from "react";
import { MdClose } from "react-icons/md";
import "./Search.scss";
import { useNavigate } from "react-router-dom";
import usefetch from "../../../hooks/usefetch";

const Search = ({ setShowSearch }) => {
  const [query, setQuery] = useState("");
  const [animateOut, setAnimateOut] = useState(false);
  const navigate = useNavigate();
  const { data } = usefetch(`/api/products?populate=*&filters[title][$contains]=${query}`);

  const onChange = (e) => {
    setQuery(e.target.value);
  };

  const handleClose = () => {
    setAnimateOut(true);
  };

  useEffect(() => {
    if (animateOut) {
      const timer = setTimeout(() => {
        setShowSearch(false);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [animateOut, setShowSearch]);

  return (
    <div className={`search-model ${animateOut ? "slide-out" : ""}`}>
      <div className="form-field">
        <input type="text" autoFocus placeholder="Search for Products" value={query} onChange={onChange} />
        <MdClose onClick={handleClose} />
      </div>
      <div className="search-result-content">
        <div className="search-result">
          {query.length > 0 && data && data.data.map((item) => (
            <div key={item.id} className="search-result-item" onClick={() => {
              navigate(`/product/${item.id}`);
              handleClose();
            }}>
              <div className="img-container">
                <img src={`${import.meta.env.VITE_DEV_URL}${item.attributes.img.data[0].attributes.url}`} alt="Product" />
              </div>
              <div className="prod-details">
                <span className="name">{item.attributes.title}</span>
                <span className="desc">{item.attributes.desc}</span>
              </div>
            </div>
          ))}
          {query.length === 0 && (
            <div className="no-results">Enter a search query to find products.</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Search;
