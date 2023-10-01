import { useState } from "react"
import { useNavigate } from "react-router-dom"
import styled from "styled-components"


function Checkout(){
    const [userName,setUserName] = useState("")
    const [card,setCard] = useState(0)
    const navigate = useNavigate()
    const handleClick = ()=>{
      if(card.length<16 || card.length>16){
        alert("card No. is not Valid")
      }
        else if(userName && card){
            alert(`Hi, ${userName}, thank you for choosing to stay with us. Your reservation has been confirmed. Please feel free to connect with us for any queries`)
            navigate("/")
        }
    }
    return (
      <DIV>
        <div className="model">

        
      <form className="form">
        <div className="online_pay">
            <div className="online_indiidual">
                <img className="online_img" src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTGZGXAB9AoLGbroKZUK3KHCAUf03Q3Bh3D5_zp8CXJelx9FSAA" alt="" />
            </div>
            <div className="online_indiidual">
                <img className="online_img" src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcT7iZ7J8Kuaa9Mm3em8Vlt4j6ambh27ZedGR5ssz4arcSFR8gWa" alt="" />
            </div>

            <div className="online_indiidual">
                <img className="online_img" src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQ4AGjeK0ZoxvqlsNF_GIcSZpscAIvyVQ4VO9Wye3iaCqeJunEJ" alt="" />
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
                <input type="text" className="input_field" placeholder="Enter Your Full Name"
                value={userName} onChange={(e)=>setUserName(e.target.value)} required/>
            </div>

            <div className="input_container">
                <label className="input_label">Card Number</label>
                <input type="number" className="input_field"  onChange={(e)=>setCard(e.target.value)} placeholder="0000 0000 0000 0000" required />

            </div>

            <div className="input_container">
                <label className="input_label">Expiry Date / CVV</label>
                <div className="split">

                <input type="date" className="input_field" placeholder="01/23"  required/>
                <input type="password" className="input_field" placeholder="CVV" required/>
                </div>

            </div>

         </div>
          <button className="purchase_btn" onClick={handleClick}>Payment</button>
      </form>
      </div>
    </DIV>
    )
}
export default Checkout


const DIV = styled.div`
width: 40%;
margin: auto;
background: #FFFFFF;
 box-shadow: 0px 187px 75px rgba(0, 0, 0, 0.01), 0px 105px 63px rgba(0, 0, 0, 0.05), 0px 47px 47px rgba(0, 0, 0, 0.09), 0px 12px 26px rgba(0, 0, 0, 0.1), 0px 0px 0px rgba(0, 0, 0, 0.1);
 border-radius: 26px;
 padding: 30px;
.model{

    /* width: fit-content; */
    width: 90%;
 height: fit-content;
 background: #FFFFFF;
 box-shadow: 0px 187px 75px rgba(0, 0, 0, 0.01), 0px 105px 63px rgba(0, 0, 0, 0.05), 0px 47px 47px rgba(0, 0, 0, 0.09), 0px 12px 26px rgba(0, 0, 0, 0.1), 0px 0px 0px rgba(0, 0, 0, 0.1);
 border-radius: 26px;
 max-width: 450px;
 margin: auto;
}

.online_pay{
    width: calc(100% - 40px);
  display: grid;
  grid-template-columns: 33% 34% 33%;
  gap: 20px;
  padding: 10px;
}
.online_indiidual{
    /* height: 55px; */
  background: #fcfbfb;
  border-radius: 11px;
  padding: 0;
  border: 0;
  outline: none;
  box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
  cursor: pointer;
}
.online_img{
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
.online_pay{
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
  color: #8B8E98;
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
.credit_card_info_form{
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
  color: #8B8E98;
  font-weight: 600;
}

.input_field {
  width: auto;
  height: 40px;
  padding: 0 0 0 16px;
  border-radius: 9px;
  outline: none;
  background-color: #F2F2F2;
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
  background: #F2F2F2;
  border-radius: 11px;
  border: 0;
  outline: none;
  color: #ffffff;
  font-size: 13px;
  font-weight: 700;
  background: linear-gradient(180deg, #363636 0%, #1B1B1B 50%, #000000 100%);
  box-shadow: 0px 0px 0px 0px #FFFFFF, 0px 0px 0px 0px #000000;
  transition: all 0.3s cubic-bezier(0.15, 0.83, 0.66, 1);
}

.purchase_btn:hover {
  box-shadow: 0px 0px 0px 2px #FFFFFF, 0px 0px 0px 4px #0000003a;
  font-weight: bolder;
  font-style: italic;
  
}

@media screen and (max-width: 850px) {
    width: 90%;
    padding: 8px;
    height: 80vh;
    .model{

/* width: fit-content; */
width: 100%;
height: fit-content;
background: #FFFFFF;
box-shadow: 0px 187px 75px rgba(0, 0, 0, 0.01), 0px 105px 63px rgba(0, 0, 0, 0.05), 0px 47px 47px rgba(0, 0, 0, 0.09), 0px 12px 26px rgba(0, 0, 0, 0.1), 0px 0px 0px rgba(0, 0, 0, 0.1);
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
`