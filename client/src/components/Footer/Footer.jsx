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
              eaque ipsa quae ab illo inventore veritatis et
            </div>
            quasi architecto beatae vitae dicta sunt explicabo eaque ipsa quae
            ab illo.
          </div>
          <div className="col">col2</div> <div className="col">col3</div>{" "}
          <div className="col">col4</div>{" "}
        </div>
      </footer>
    </>
  );
};
export default Footer;
