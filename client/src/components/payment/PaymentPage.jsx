
import React, { useContext, useState, useRef } from "react";
import { Context } from "../../utils/context";
import CartItem from "../Cart/CartItem/CartItem";
import "./Paymentpage.scss";

const PaymentPage = () => {
  const { cartItems, cartSubTotal } = useContext(Context);
  const [cardName, setCardName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [cardMonth, setCardMonth] = useState("");
  const [cardYear, setCardYear] = useState("");
  const [cardCvv, setCardCvv] = useState("");
  const [isCardFlipped, setIsCardFlipped] = useState(false);
  const [focusElementStyle, setFocusElementStyle] = useState(null);
  const [isInputFocused, setIsInputFocused] = useState(false);

  const cardNumberRef = useRef(null);
  const cardNameRef = useRef(null);
  const cardDateRef = useRef(null);

  const amexCardMask = "#### ###### #####";
  const otherCardMask = "#### #### #### ####";

  const currentCardBackground = Math.floor(Math.random() * 25 + 1); // just for fun :D

  const getCardType = () => {
    let number = cardNumber.replace(/\s/g, "");
    let re = /^4/;
    if (number.match(re)) return "visa";

    re = /^(34|37)/;
    if (number.match(re)) return "amex";

    re = /^5[1-5]/;
    if (number.match(re)) return "mastercard";

    re = /^6011/;
    if (number.match(re)) return "discover";

    re = /^9792/;
    if (number.match(re)) return "troy";

    return "visa"; // default type
  };

  const generateCardNumberMask = () => {
    return getCardType() === "amex" ? amexCardMask : otherCardMask;
  };

  const minCardYear = new Date().getFullYear();

  const minCardMonth = () => {
    if (cardYear === minCardYear) return new Date().getMonth() + 1;
    return 1;
  };

  const focusInput = (e) => {
    setIsInputFocused(true);
    let targetRef = e.target.dataset.ref;
    let target = document.querySelector(`[data-ref=${targetRef}]`);
    setFocusElementStyle({
      width: `${target.offsetWidth}px`,
      height: `${target.offsetHeight}px`,
      transform: `translateX(${target.offsetLeft}px) translateY(${target.offsetTop}px)`,
    });
  };

  const blurInput = () => {
    setTimeout(() => {
      if (!isInputFocused) {
        setFocusElementStyle(null);
      }
    }, 300);
    setIsInputFocused(false);
  };

  const flipCard = (status) => {
    setIsCardFlipped(status);
  };

  const handleCardNumberChange = (e) => {
    let value = e.target.value.replace(/\D/g, ""); // Remove non-digit characters
    if (value.length > 16) {
      value = value.slice(0, 16); // Limit to 16 digits
    }
    value = value.replace(/(\d{4})/g, "$1 ").trim(); // Add space after every 4 digits
    setCardNumber(value);

    // Optionally, you can animate the card number update
    const cardNumberLabel = document.querySelector(".card-item__number");
    if (cardNumberLabel) {
      cardNumberLabel.classList.add("animate"); // Add a CSS class for animation
      setTimeout(() => {
        cardNumberLabel.classList.remove("animate");
      }, 500); // Remove the animation class after 500ms (adjust timing as needed)
    }

    // Flip card to front view when entering card number
    if (cardCvv.length > 0) {
      flipCard(false);
    }
  };

  const handleCardCvvChange = (e) => {
    let value = e.target.value.replace(/\D/g, ""); // Remove non-digit characters
    if (value.length > 4) {
      value = value.slice(0, 4); // Limit to 4 digits
    }
    setCardCvv(value);

    // Flip card to back view when entering CVV
    flipCard(true);
  };

  const getMaskedCardNumber = () => {
    const digits = cardNumber.replace(/\s/g, ""); // Remove spaces
    const visibleDigits = digits.slice(-4); // Get last 4 visible digits
    const maskedSection = digits.slice(0, -4).replace(/\d/g, "*"); // Mask the rest

    return `${maskedSection} ${visibleDigits}`.trim();
  };

  const handleCardNameChange = (e) => {
    const value = e.target.value;
    if (/^[a-zA-Z\s]*$/.test(value) && value.length <= 20) {
      setCardName(value);
    }
  };

  const handleCardMonthChange = (e) => {
    let value = e.target.value.replace(/\D/g, ""); // Remove non-digit characters
    if (value.length > 2) {
      value = value.slice(0, 2); // Limit to 2 digits
    }
    setCardMonth(value);
  };

  const handleCardYearChange = (e) => {
    let value = e.target.value.replace(/\D/g, ""); // Remove non-digit characters
    if (value.length > 2) {
      value = value.slice(0, 2); // Limit to 2 digits
    }
    setCardYear(value);
  };

  return (
    <div className="payment-page">
      <h2>Payment Details</h2>

      <div className="cart-items">
        {cartItems.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
      </div>

      <div className="subtotal">
        <span className="text">Subtotal</span>
        <span className="text total">&#8377;{cartSubTotal}</span>
      </div>

    

      <div className="wrapper" id="app">
        <div className="card-form">
          <div className="card-list">
            <div className={`card-item ${isCardFlipped ? "-active" : ""}`}>
              <div className="card-item__side -front">
                <div
                  className="card-item__focus"
                  style={focusElementStyle}
                ></div>
                <div className="card-item__cover">
                  <img
                    src="https://assets.bwbx.io/images/users/iqjWHBFdfxIU/i98YsJ0Nxn1U/v0/-1x-1.jpg"
                    className="card-item__bg"
                    alt="card background"
                  />
                </div>

                <div className="card-item__wrapper">
                  <div className="card-item__top">
                    <div className="card-item__type">
                      <img
                        src={`https://raw.githubusercontent.com/muhammederdem/credit-card-form/master/src/assets/images/${getCardType()}.png`}
                        className="card-item__typeImg"
                        alt="card type"
                      />
                    </div>
                  </div>
                  <label
                    htmlFor="cardNumber"
                    className="card-item__number"
                    ref={cardNumberRef}
                  >
                    <span>
                      {getMaskedCardNumber()
                        .split("")
                        .map((char, index) => (
                          <div
                            key={index}
                            className={`card-item__numberItem ${
                              char === "*" ? "masked" : ""
                            }`}
                          >
                            {char}
                          </div>
                        ))}
                    </span>
                  </label>
                  <div className="card-item__content">
                    <label
                      htmlFor="cardName"
                      className="card-item__info"
                      ref={cardNameRef}
                    >
                      <div className="card-item__holder">Card Holder</div>
                      <div className="card-item__name">
                        {cardName || "Full Name"}
                      </div>
                    </label>
                    <div className="card-item__date" ref={cardDateRef}>
                      <div className="card-item__dateTitle">Expires</div>
                      <div className="card-item__dateItem">
                        {cardMonth || "MM"}
                      </div>
                      /
                      <div className="card-item__dateItem">
                        {cardYear ? String(cardYear).slice(2, 4) : "YY"}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card-item__side -back">
                <div className="card-item__cover">
                  <img
                    src="https://assets.bwbx.io/images/users/iqjWHBFdfxIU/i98YsJ0Nxn1U/v0/-1x-1.jpg"
                    className="card-item__bg"
                    alt="card background"
                  />
                </div>
                <div className="card-item__band"></div>
                <div className="card-item__cvv">
                  <div className="card-item__cvvTitle">CVV</div>
                  <div className="card-item__cvvBand">{cardCvv.replace(/\d/g, "*")}</div>
                  <div className="card-item__type">
                    <img
                      src={`https://raw.githubusercontent.com/muhammederdem/credit-card-form/master/src/assets/images/${getCardType()}.png`}
                      className="card-item__typeImg"
                      alt="card type"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="card-form__inner">
            <div className="card-input">
              <label htmlFor="cardNumber" className="card-input__label">
                Card Number
              </label>
              <input
                type="text"
                id="cardNumber"
                name="cardNumber"
                className="card-input__input"
                autoComplete="off"
                onChange={handleCardNumberChange}
                maxLength="19" // Maximum length for card number with spaces
                onFocus={focusInput}
                onBlur={blurInput}
                data-ref="cardNumberRef"
                value={cardNumber}
              />
            </div>

            <div className="card-input">
              <label htmlFor="cardName" className="card-input__label">
                Card Holder
              </label>
              <input
                type="text"
                id="cardName"
                name="cardName"
                className="card-input__input"
                autoComplete="off"
                onChange={handleCardNameChange}
                onFocus={focusInput}
                onBlur={blurInput}
                maxLength="20"
                data-ref="cardNameRef"
                value={cardName}
              />
            </div>

            <div className="card-form__row">
              <div className="card-form__col">
                <div className="card-input">
                  <label htmlFor="cardMonth" className="card-input__label">
                    Expiration Date
                  </label>
                  <select
                    className="card-input__input -select"
                    value={cardMonth}
                    onChange={handleCardMonthChange}
                    onFocus={focusInput}
                    onBlur={blurInput}
                    data-ref="cardDateRef"
                  >
                    <option value="" disabled>
                      Month
                    </option>
                    {Array.from({ length: 12 }, (_, i) => i + 1).map((month) => (
                      <option key={month} value={month < 10 ? `0${month}` : month}>
                        {month < 10 ? `0${month}` : month}
                      </option>
                    ))}
                  </select>
                  <select
                    className="card-input__input -select"
                    value={cardYear}
                    onChange={handleCardYearChange}
                    onFocus={focusInput}
                    onBlur={blurInput}
                    data-ref="cardDateRef"
                  >
                    <option value="" disabled>
                      Year
                    </option>
                    {Array.from({ length: 9 }, (_, i) => minCardYear + i).map(
                      (year) => (
                        <option key={year} value={year.toString().slice(2)}>
                          {year.toString().slice(2)}
                        </option>
                      )
                    )}
                  </select>
                </div>
              </div>

              <div className="card-form__col -cvv">
                <div className="card-input">
                  <label htmlFor="cardCvv" className="card-input__label">
                    CVV
                  </label>
                  <input
                    type="text"
                    className="card-input__input"
                    maxLength="4"
                    autoComplete="off"
                    onFocus={() => {
                      focusInput();
                      flipCard(true);
                    }}
                    onBlur={() => {
                      blurInput();
                      flipCard(false);
                    }}
                    onChange={handleCardCvvChange}
                    value={cardCvv}
                  />
                </div>
              </div>
            </div>
            <button className="card-form__button">Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;
