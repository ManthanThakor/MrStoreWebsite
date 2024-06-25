import React from "react";
import "./Footer.scss";
import { FaLocationArrow, FaMobileAlt, FaEnvelope } from "react-icons/fa";
import Payment from "../../assets/payments.png";

const Footer = () => {
  return (
    <>
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
            <div className="title">contact</div>
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
          <div className="col">
            <div className="title">Categories</div>
            <span className="text">Headphones</span>
            <span className="text">Smart Watches</span>
            <span className="text">Bluetooth Speakers</span>
            <span className="text">Wireless Earbuds</span>
            <span className="text">Home Theatre</span>
            <span className="text">Projectors</span>
          </div>
          <div className="col">
            <div className="title">Pages</div>
            <span className="text">Home</span>
            <span className="text">About</span>
            <span className="text">Privacy Policy</span>
            <span className="text">Returns</span>
            <span className="text">Terms & Conditions</span>
            <span className="text">Contact us</span>
          </div>
        </div>
        <div className="bottom-bar">
          <div className="bottom-bar-content">
            <div className="text">
              &copy; 2024 MRSTORE. Created by Manthan. All rights reserved
            </div>
            <img src={Payment} />
          </div>
        </div>
      </footer>
    </>
  );
};
export default Footer;
