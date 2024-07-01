import React from "react";
import "./Footer.scss";
import { FaLocationArrow, FaMobileAlt, FaEnvelope } from "react-icons/fa";
import { Link } from "react-router-dom";
import Payment from "../../assets/payments.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="col">
          <div className="title">About</div>
          <div className="text">
            Voluptatem accusantium doloremque laudantium, totam rem aperiam,
            eaque ipsa quae ab illo inventore veritatis et quasi architecto
            beatae vitae dicta sunt explicabo eaque ipsa quaeab illo.
          </div>
        </div>
        <div className="col">
          <div className="title">Contact</div>
          <div className="c-item">
            <FaLocationArrow />
            <div className="text">
              Building Number 10, Kalita Street, 36 Sukriti Society,
              TanujaGunj, Noida, Sikkim, 334273.
            </div>
          </div>
          <div className="c-item">
            <FaMobileAlt />
            <div className="text">Phone: 0371 280 0295</div>
          </div>
          <div className="c-item">
            <FaEnvelope />
            <div className="text">Email: MrStore@gmail.com</div>
          </div>
        </div>
        <div className="col cate-foot">
          <div className="title">Categories</div>
          <Link to="/categories" className="text">Headphones</Link>
          <Link to="/categories" className="text">Smart Watches</Link>
          <Link to="/categories" className="text">Bluetooth Speakers</Link>
          <Link to="/categories" className="text">Wireless Earbuds</Link>
          {/* <Link to="/categories" className="text">Home Theatre</Link> */}
          {/* <Link to="/categories" className="text">Projectors</Link> */}
        </div>
        <div className="col page-foot">
          <div className="title">Pages</div>
          <Link to="/" className="text">Home</Link>
          <Link to="/about" className="text">About</Link>
          <Link to="/returns" className="text">Returns</Link>
          <Link to="/contact-us" className="text">Contact us</Link>
        </div>
      </div>
      <div className="bottom-bar">
        <div className="bottom-bar-content">
          <div className="text">
            &copy; 2024 MRSTORE. Created by Manthan. All rights reserved
          </div>
          <img src={Payment} alt="Accepted Payments" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
