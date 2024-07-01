import React, { useState, useContext, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { TbSearch } from "react-icons/tb";
import { CgShoppingCart } from "react-icons/cg";
import { AiOutlineHeart } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdCloseCircle } from "react-icons/io";
import Search from "./Search/Search";
import Cart from "../Cart/Cart";
import { Context } from "../../utils/context";
import "./Header.scss";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [showNav, setShowNav] = useState(false);
  const { cartCount } = useContext(Context);
  const navigate = useNavigate();

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 200) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <header className={`main-header ${scrolled ? "sticky-header" : ""}`}>
        <div className="header-content">
          <ul className="left">
            <li><NavLink exact to="/" className="nav-link" activeClassName="active">Home</NavLink></li>
            <li><NavLink to="/about" className="nav-link" activeClassName="active">About</NavLink></li>
            <li><NavLink to="/categories" className="nav-link" activeClassName="active">Categories</NavLink></li>
            <li><NavLink to="/contact-us" className="nav-link" activeClassName="active">Contact Us</NavLink></li>
          </ul>
          <div className="center" onClick={() => navigate("/")}>
            MRSTORE
          </div>
          <div className="right">
            <TbSearch onClick={() => setShowSearch(true)} />
            <AiOutlineHeart />
            <span className="cart-icon" onClick={() => setShowCart(true)}>
              <CgShoppingCart />
              {!!cartCount && <span>{cartCount}</span>}
            </span>
          </div>
          <GiHamburgerMenu className="hamburger" onClick={() => setShowNav(true)} />
        </div>
      </header>
      <div className={`nav-modal ${showNav ? "show" : ""}`}>
        <div className="nav-content">
          <IoMdCloseCircle className="close-icon" onClick={() => setShowNav(false)} />
          <NavLink exact to="/" className="nav-link" activeClassName="active" onClick={() => setShowNav(false)}>Home</NavLink>
          <NavLink to="/about" className="nav-link" activeClassName="active" onClick={() => setShowNav(false)}>About</NavLink>
          <NavLink to="/categories" className="nav-link" activeClassName="active" onClick={() => setShowNav(false)}>Categories</NavLink>
          <NavLink to="/contact-us" className="nav-link" activeClassName="active" onClick={() => setShowNav(false)}>Contact Us</NavLink>
        </div>
      </div>
      {showCart && <Cart setShowCart={setShowCart} />}
      {showSearch && <Search setShowSearch={setShowSearch} />}
    </>
  );
};

export default Header;
