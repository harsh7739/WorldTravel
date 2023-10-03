import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

function Checkout() {
  const [userName, setUserName] = useState("");
  const [card, setCard] = useState(0);
  const [confirm, setConfirm] = useState(false);
  const navigate = useNavigate();
  const handleClick = (e) => {
    e.preventDefault()
    if (card.length < 16 || card.length > 16) {
      alert("card No. is not Valid");
    } else if (userName && card) {
      setConfirm(true);
      // alert(
      //   `Hi, ${userName}, thank you for choosing to stay with us. Your reservation has been confirmed. Please feel free to connect with us for any queries`
      // );
      // navigate("/");
      setTimeout(() => {
        navigate("/")
      }, 5000)
    }
  };
  return (
    <DIV>
      {
        confirm ? <div className="confirmation">
        <div className="card">
          <button className="dismiss" type="button">
            ×
          </button>
          <div className="header">
            <div className="div_image_v">
              <div className="image">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <path
                      d="M20 7L9.00004 18L3.99994 13"
                      stroke="#000000"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>{" "}
                  </g>
                </svg>
              </div>
            </div>
            <div className="content">
              <span className="title">Purchase Successful</span>
              <p className="message">
                Thank you for your purchase. you will receive a mail
                within few hours of your purchase
              </p>
              <p className="message">
                You will be redirected to Homepage automatically
              </p>
            </div>
          </div>
        </div>
      </div> : null
      }
      <div className="model">
        <form className="form">
          <div className="online_pay">
            <div className="online_indiidual">
              <img
                className="online_img"
                src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTGZGXAB9AoLGbroKZUK3KHCAUf03Q3Bh3D5_zp8CXJelx9FSAA"
                alt=""
              />
            </div>
            <div className="online_indiidual">
              <img
                className="online_img"
                src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcT7iZ7J8Kuaa9Mm3em8Vlt4j6ambh27ZedGR5ssz4arcSFR8gWa"
                alt=""
              />
            </div>

            <div className="online_indiidual">
              <img
                className="online_img"
                src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQ4AGjeK0ZoxvqlsNF_GIcSZpscAIvyVQ4VO9Wye3iaCqeJunEJ"
                alt=""
              />
            </div>
          </div>

          <div class="separator">
            <hr class="line" />
            <p>or pay using credit card</p>
            <hr class="line" />
          </div>

          <div className="credit_card_info_form">
            <div className="input_container">
              <label className="input_label">Card holder full name</label>
              <input
                type="text"
                className="input_field"
                placeholder="Enter Your Full Name"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                required
              />
            </div>

            <div className="input_container">
              <label className="input_label">Card Number</label>
              <input
                type="number"
                className="input_field"
                onChange={(e) => setCard(e.target.value)}
                placeholder="0000 0000 0000 0000"
                required
              />
            </div>

            <div className="input_container">
              <label className="input_label">Expiry Date / CVV</label>
              <div className="split">
                <input
                  type="date"
                  className="input_field"
                  placeholder="01/23"
                  required
                />
                <input
                  type="password"
                  className="input_field"
                  placeholder="CVV"
                  required
                />
              </div>
            </div>
          </div>
          <button className="purchase_btn" onClick={handleClick}>
            Payment
          </button>
        </form>
      </div>
    </DIV>
  );
}
export default Checkout;

const DIV = styled.div`
  width: 40%;
  margin: auto;
  background: #ffffff;
  box-shadow: 0px 187px 75px rgba(0, 0, 0, 0.01),
    0px 105px 63px rgba(0, 0, 0, 0.05), 0px 47px 47px rgba(0, 0, 0, 0.09),
    0px 12px 26px rgba(0, 0, 0, 0.1), 0px 0px 0px rgba(0, 0, 0, 0.1);
  border-radius: 26px;
  padding: 30px;
  margin-top: 140px;

  .confirmation {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    animation: confirm 0.6s;
  }

  @keyframes confirm {
    0% {
      opacity: 0;
    }
    100% {
      opacity : 1;
    }
  }

  .card {
    overflow: hidden;
    position: relative;
    text-align: left;
    border-radius: 0.5rem;
    max-width: 590px;
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1),
      0 10px 10px -5px rgba(0, 0, 0, 0.04);
    background-color: #fff;
  }

  .div_image_v {
    background: #47c9a2;
    border-bottom: none;
    position: relative;
    text-align: center;
    margin: -20px -20px 0;
    border-radius: 5px 5px 0 0;
    padding: 35px;
  }

  .dismiss {
    position: absolute;
    right: 10px;
    top: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.5rem 1rem;
    background-color: #fff;
    color: black;
    border: 2px solid #d1d5db;
    font-size: 1rem;
    font-weight: 300;
    width: 30px;
    height: 30px;
    border-radius: 7px;
    transition: 0.3s ease;
  }

  .dismiss:hover {
    background-color: #ee0d0d;
    border: 2px solid #ee0d0d;
    color: #fff;
  }

  .header {
    padding: 1.25rem 1rem 1rem 1rem;
  }

  .image {
    display: flex;
    margin-left: auto;
    margin-right: auto;
    background-color: #e2feee;
    flex-shrink: 0;
    justify-content: center;
    align-items: center;
    width: 3rem;
    height: 3rem;
    border-radius: 9999px;
    animation: animate 0.6s linear alternate-reverse infinite;
    transition: 0.6s ease;
  }

  .image svg {
    color: #0afa2a;
    width: 2rem;
    height: 2rem;
  }

  .content {
    margin-top: 0.75rem;
    text-align: center;
  }

  .title {
    color: #066e29;
    font-size: 1rem;
    font-weight: 600;
    line-height: 1.5rem;
  }

  .message {
    margin-top: 0.5rem;
    color: #595b5f;
    font-size: 0.875rem;
    line-height: 1.25rem;
  }

  @keyframes animate {
    from {
      transform: scale(1);
    }

    to {
      transform: scale(1.09);
    }
  }

  .model {
    /* width: fit-content; */
    width: 90%;
    height: fit-content;
    background: #ffffff;
    box-shadow: 0px 187px 75px rgba(0, 0, 0, 0.01),
      0px 105px 63px rgba(0, 0, 0, 0.05), 0px 47px 47px rgba(0, 0, 0, 0.09),
      0px 12px 26px rgba(0, 0, 0, 0.1), 0px 0px 0px rgba(0, 0, 0, 0.1);
    border-radius: 26px;
    max-width: 450px;
    margin: auto;
  }

  .online_pay {
    width: calc(100% - 40px);
    display: grid;
    grid-template-columns: 33% 34% 33%;
    gap: 20px;
    padding: 10px;
  }
  .online_indiidual {
    /* height: 55px; */
    background: #fcfbfb;
    border-radius: 11px;
    padding: 0;
    border: 0;
    outline: none;
    box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,
      rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
    cursor: pointer;
  }
  .online_img {
    width: 80%;
    margin: auto;
    height: auto;
    border-radius: 10px;
  }

  .form {
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 20px;
  }
  .online_pay {
    width: calc(100% - 40px);
    display: grid;
    grid-template-columns: 33% 34% 33%;
    gap: 20px;
    padding: 10px;
  }
  .separator {
    width: calc(100% - 20px);
    display: grid;
    grid-template-columns: 1fr 2fr 1fr;
    gap: 10px;
    color: #8b8e98;
    margin: 0 10px;
  }

  .separator > p {
    word-break: keep-all;
    display: block;
    text-align: center;
    font-weight: 600;
    font-size: 11px;
    margin: auto;
  }

  .separator .line {
    display: inline-block;
    width: 100%;
    height: 2px;
    border: 0;
    background-color: #ef9e9e;
    margin: auto;
  }
  .credit_card_info_form {
    display: flex;
    flex-direction: column;
    gap: 15px;
  }
  .input_container {
    width: 100%;
    height: fit-content;
    display: flex;
    flex-direction: column;
    gap: 5px;
  }

  .split {
    display: grid;
    grid-template-columns: 4fr 2fr;
    gap: 15px;
  }

  .split input {
    width: 100%;
  }

  .input_label {
    font-size: 14px;
    color: #8b8e98;
    font-weight: 600;
  }

  .input_field {
    width: auto;
    height: 40px;
    padding: 0 0 0 16px;
    border-radius: 9px;
    outline: none;
    background-color: #f2f2f2;
    border: 1px solid #e5e5e500;
    transition: all 0.3s cubic-bezier(0.15, 0.83, 0.66, 1);
  }

  .input_field:focus {
    border: 1px solid transparent;
    box-shadow: 0px 0px 0px 2px #242424;
    background-color: transparent;
  }

  .purchase_btn {
    height: 55px;
    background: #f2f2f2;
    border-radius: 11px;
    border: 0;
    outline: none;
    color: #ffffff;
    font-size: 13px;
    font-weight: 700;
    background: linear-gradient(180deg, #363636 0%, #1b1b1b 50%, #000000 100%);
    box-shadow: 0px 0px 0px 0px #ffffff, 0px 0px 0px 0px #000000;
    transition: all 0.3s cubic-bezier(0.15, 0.83, 0.66, 1);
  }

  .purchase_btn:hover {
    box-shadow: 0px 0px 0px 2px #ffffff, 0px 0px 0px 4px #0000003a;
    font-weight: bolder;
    font-style: italic;
  }

  @media screen and (max-width: 850px) {
    width: 90%;
    padding: 8px;
    height: 80vh;
    .model {
      /* width: fit-content; */
      width: 100%;
      height: fit-content;
      background: #ffffff;
      box-shadow: 0px 187px 75px rgba(0, 0, 0, 0.01),
        0px 105px 63px rgba(0, 0, 0, 0.05), 0px 47px 47px rgba(0, 0, 0, 0.09),
        0px 12px 26px rgba(0, 0, 0, 0.1), 0px 0px 0px rgba(0, 0, 0, 0.1);
      border-radius: 26px;
      max-width: 450px;
      margin: auto;
      /* border: 1px solid red; */
    }
    .split {
      display: flex;
      flex-direction: column;
      gap: 15px;
    }
  }

  @media screen and (max-width: 400px) {
    width: 100%;
    padding: 8px;
    .split {
      display: flex;
      flex-direction: column;

      gap: 15px;
    }
  }
`;
