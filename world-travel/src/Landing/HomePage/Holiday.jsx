import styled from "styled-components";

function Holiday() {
  return (
    <DIV className="contain" >
      <div className="mainCont row">
        <div className="contain">
          <img
            className="imgTag"
            src="https://images.unsplash.com/photo-1570579984759-0915125b99bc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            alt="Couples on beach"
          />
          <div className="text_block">
            <p>Holiday Package</p>
            <hr className="hrTag" />
          </div>
        </div>

        <div className="contain">
          <img
            className="imgTag"
            src="https://images.unsplash.com/photo-1530469525856-cf37954301f7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            alt="Passport"
          />
          <div className="text_block">
            <p>Passport & Visa Service</p>
            <hr className="hrTag" />
          </div>
        </div>

        <div className="contain">
          <img
            className="imgTag"
            src="https://images.unsplash.com/photo-1615914143778-1a1a6e50c5dd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2068&q=80"
            alt="Insurance"
          />
          <div className="text_block">
            <p>Travel Insurance</p>
            <hr className="hrTag" />
          </div>
        </div>

        <div className="contain">
          <img
            className="imgTag"
            src="https://images.unsplash.com/photo-1517840901100-8179e982acb7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            alt="Hotel booking"
          />
          <div className="text_block">
            <p>Hotel Booking</p>
            <hr className="hrTag" />
          </div>
        </div>
      </div>
    </DIV>
  );
}

export default Holiday;

const DIV = styled.div`
  .mainCont {
    width: 90%;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    margin: auto;
  }
  .contain {
    position: relative;
    font-family: Arial;
    height: 320px;
    box-shadow: rgba(0, 0, 0, 0.45) 0px 25px 20px -20px;
    cursor: pointer;
  }

  p {
    text-align: center;
  }

  .text_block {
    position: absolute;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
    /* background-color: black; */
    color: white;
    padding-left: 20px;
    padding-right: 20px;
    font-weight: bolder;
    font-style: normal;
    font-size: 20px;
  }
  .imgTag {
    width: 100%;
    height: 280px;
  }
  .hrTag {
    width: 50px;
    /* margin: auto; */
    /* margin-top: 28px; */
    border: 1px solid rgb(8, 8, 240);
  }
  /* .contain:hover{
        position: relative;
        font-family: Arial;
        height: 320px;
        box-shadow: rgba(0, 0, 0, 0.45) 0px 25px 20px -20px;
        width: 102%;
        height: 325px;
    } */
  @media screen and (max-width: 1175px) {
    .mainCont {
      width: 80%;
      display: grid;
      gap: 10px;
      grid-template-columns: repeat(2, 1fr);
      margin: auto;
    }
    .contain {
      position: relative;
      font-family: Arial;
      height: 320px;
      box-shadow: rgba(0, 0, 0, 0.45) 0px 25px 20px -20px;
      cursor: pointer;
    }
    /* .contain:hover{
        position: relative;
        font-family: Arial;
        height: 320px;
        box-shadow: rgba(0, 0, 0, 0.45) 0px 25px 20px -20px;
        width: 102%;
        height: 325px;
    } */
  }





@media screen and (max-width: 400px) {
        .mainCont{
    width: 80%;
    display: grid;
    gap: 10px;
    grid-template-columns: repeat(1,1fr);
    margin: auto;
}
.contain{
        position: relative;
        font-family: Arial;
        height: 320px;
        box-shadow: rgba(0, 0, 0, 0.45) 0px 25px 20px -20px;
        cursor: pointer;
}
  @media screen and (max-width: 635px) {
    .mainCont {
      width: 90%;
      display: grid;
      gap: 10px;
      grid-template-columns: repeat(1, 1fr);
      margin: auto;

    }
    .contain {
      position: relative;
      font-family: Arial;
      height: 320px;
      box-shadow: rgba(0, 0, 0, 0.45) 0px 25px 20px -20px;
      cursor: pointer;
    }
    /* .contain:hover{
        position: relative;
        font-family: Arial;
        height: 320px;
        box-shadow: rgba(0, 0, 0, 0.45) 0px 25px 20px -20px;
        width: 102%;
        height: 325px;
    } */
  }
`;
