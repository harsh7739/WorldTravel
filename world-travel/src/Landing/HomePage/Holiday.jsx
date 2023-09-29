import styled from "styled-components"

function Holiday(){
    return (
        <DIV>
            <div className="mainCont">
        <div className="container">
            <img className="imgTag" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbiQuKfI3ZyBtriqLelxORzhV6LPXyQIWrhw&usqp=CAU" alt="" />
            <div className="text_block">
                <p>Holiday Package</p>
                <hr  className="hrTag" />
            </div>
        </div>

        <div className="container">
            <img className="imgTag" src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRtHkFeyy9PpoYSr6ARv0C7aHo3ZFzzh0n50w_IapTz4ZowtMBp" alt="" />
            <div className="text_block">
                <p>Passport & Visa Service</p>
                <hr  className="hrTag" />
            </div>
        </div>

        <div className="container">
            <img className="imgTag" src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTGdKccDwmo8PnQkBBp6pPKM9AB1BqKKa6wqUswfwZfxR2DHNBh" alt="" />
            <div className="text_block">
                <p>Travel Insurance</p>
                <hr  className="hrTag" />
            </div>
        </div>

        <div className="container">
            <img className="imgTag" src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQoRMmEFEidRxiqzE_RMCfrcTqBYE4hHE35W7R9tTbQfHs1XneQ" alt="" />
            <div className="text_block">
                <p>Hotel Booking</p>
                <hr  className="hrTag" />
            </div>
        </div>
        </div>
        </DIV>
    )
}

export default Holiday

const DIV = styled.div`

.mainCont{
    width: 90%;
display: grid;
grid-template-columns: repeat(4,1fr);
margin: auto;
}
    .container{
        position: relative;
        font-family: Arial;
        height: 320px;
        box-shadow: rgba(0, 0, 0, 0.45) 0px 25px 20px -20px;
        cursor: pointer;
    }
.text_block{
    position: absolute;
  top: 20px;
  left: 20px;
  /* background-color: black; */
  color: #f08686;
  padding-left: 20px;
  padding-right: 20px;
  font-weight: bolder;
  font-style: normal;
  font-size: 25px;
}
.imgTag{
    width: 100%;
    height: 280px;
}
.hrTag{
   width: 50px;
   /* margin: auto; */
   /* margin-top: 28px; */
   border: 1px solid rgb(8, 8, 240);
}
.container:hover{
        position: relative;
        font-family: Arial;
        height: 320px;
        box-shadow: rgba(0, 0, 0, 0.45) 0px 25px 20px -20px;
        width: 102%;
        height: 325px;
    }
    @media screen and (max-width: 850px) {
        .mainCont{
    width: 80%;
    display: grid;
    gap: 10px;
    grid-template-columns: repeat(2,1fr);
    margin: auto;
}
.container{
        position: relative;
        font-family: Arial;
        height: 320px;
        box-shadow: rgba(0, 0, 0, 0.45) 0px 25px 20px -20px;
        cursor: pointer;
    }
    .container:hover{
        position: relative;
        font-family: Arial;
        height: 320px;
        box-shadow: rgba(0, 0, 0, 0.45) 0px 25px 20px -20px;
        width: 102%;
        height: 325px;
    }
}




@media screen and (max-width: 300px) {
        .mainCont{
    width: 80%;
    display: grid;
    gap: 10px;
    grid-template-columns: repeat(1,1fr);
    margin: auto;
}
.container{
        position: relative;
        font-family: Arial;
        height: 320px;
        box-shadow: rgba(0, 0, 0, 0.45) 0px 25px 20px -20px;
        cursor: pointer;
    }
    .container:hover{
        position: relative;
        font-family: Arial;
        height: 320px;
        box-shadow: rgba(0, 0, 0, 0.45) 0px 25px 20px -20px;
        width: 102%;
        height: 325px;
    }
}

`