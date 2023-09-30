import styled from "styled-components";

function WhyBook() {
  return (
    <DIV className="row px-3 text-center py-5">
      {/* <div  className="main_cont">
                <div className="imgDiv d-flex align-items-center ">
                <img className="imgTag1" src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTSRkxmzKIHAec3tkh0Jyn-i9k0aUkubIwOc65zSGjlZ1k21VXu" alt="" />
                </div>
                <p className="ptag">Assured Best Fares</p>
            </div>
            <div  className="main_cont">
                <div className="imgDiv">
                <img className="imgTag" src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSlmM_bVGqzt4YlVfna2VxgCvYCJLg8Fh8SD6etfX9DkG-KxEKm" alt="" />
                </div>
                <p className="ptag">Customer Support</p>
            </div>
            <div  className="main_cont">
                <div className="imgDiv">
                <img className="imgTag" src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSKe4JXAaWaERxO2fcyW5LIfzILetrgIk_AzTSSMjCAyIMBQiGe" alt="" />
                </div>
                <p className="ptag">One Stop for All Travel Services</p>
            </div>
            <div  className="main_cont">
                <div className="imgDiv4">
                <img className="imgTag4" src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRvzBzqkAayDC_--Ebh0uBkxyXrCzJldlIE8ETI8aoliofLRE0G" alt="" />
                </div>
                <p className="ptag">Instant Deals on Flights & Holidays</p>
            </div> */}
      <div className="col-lg-3 col-md-5 my-3 d-flex align-items-center gap-3">
        <svg
          width="80"
          height="80"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="black"
            d="M21 11c0 5.55-3.84 10.74-9 12c-5.16-1.26-9-6.45-9-12V5l9-4l9 4v6m-9 10c3.75-1 7-5.46 7-9.78V6.3l-7-3.12L5 6.3v4.92C5 15.54 8.25 20 12 21m-2-4l-4-4l1.41-1.41L10 14.17l6.59-6.59L18 9"
          />
        </svg>{" "}
        <p>Assured Best Fares</p>
      </div>
      <div className="col-lg-3 col-md-5 my-3  d-flex align-items-center gap-3">
        <svg
          width="80"
          height="80"
          viewBox="0 0 16 16"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="black"
            d="M8 1a5 5 0 0 0-5 5v1h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a6 6 0 1 1 12 0v6a2.5 2.5 0 0 1-2.5 2.5H9.366a1 1 0 0 1-.866.5h-1a1 1 0 1 1 0-2h1a1 1 0 0 1 .866.5H11.5A1.5 1.5 0 0 0 13 12h-1a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1h1V6a5 5 0 0 0-5-5z"
          />
        </svg>{" "}
        <p>24hrs Customer Support</p>
      </div>
      <div className="col-lg-3 col-md-5 my-3  d-flex align-items-center gap-3">
        <svg
          width="80"
          height="80"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="black"
            d="M20.56 3.91c.59.59.59 1.54 0 2.12l-3.89 3.89l2.12 9.19l-1.41 1.42l-3.88-7.43L9.6 17l.36 2.47l-1.07 1.06l-1.76-3.18l-3.19-1.77L5 14.5l2.5.37L11.37 11L3.94 7.09l1.42-1.41l9.19 2.12l3.89-3.89c.56-.58 1.56-.58 2.12 0Z"
          />
        </svg>{" "}
        <p>All Travel Services</p>
      </div>
      <div className="col-lg-3 col-md-5 my-3 d-flex align-items-center gap-3">
        <svg
          width="80"
          height="80"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="black"
            d="M12.79 21L3 11.21v2c0 .53.21 1.04.59 1.41l7.79 7.79c.78.78 2.05.78 2.83 0l6.21-6.21c.78-.78.78-2.05 0-2.83L12.79 21z"
          />
          <path
            fill="black"
            d="M11.38 17.41c.78.78 2.05.78 2.83 0l6.21-6.21c.78-.78.78-2.05 0-2.83L12.63.58A2.04 2.04 0 0 0 11.21 0H5C3.9 0 3 .9 3 2v6.21c0 .53.21 1.04.59 1.41l7.79 7.79zM7.25 3a1.25 1.25 0 1 1 0 2.5a1.25 1.25 0 0 1 0-2.5z"
          />
        </svg>{" "}
        <p>Instant Deals on Flights</p>
      </div>
    </DIV>
  );
}
export default WhyBook;

const DIV = styled.div`
  color: black;

  svg {
    border: 1px solid #a7a7a7;
    border-radius: 50%;
    padding: 20px;
    transition: transform 0.3s;
  }

  svg:hover {
    background-color: #42c161;
    transform: scale(1.1);
  }

  p {
    font-weight: bold;
  }

  /* width: 90%;
    margin: auto;
    display: grid;
    grid-template-columns: repeat(4,1fr);

   .main_cont{
    width: 90%;
    display: flex;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    padding: 20px;
   }

   .imgDiv{
    width: 35%;
    border: 1px solid black;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: auto;
   }

  
   .imgTag{
    width: 96%;
    border-radius: 50%;
   }

   .imgDiv4{
    width: 45%;
   
    border: 1px solid black;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: auto;
   }
   .imgTag4{
    border-radius: 50%;
    width: 50%;
    padding: 20px 0px 20px 0px;
   }
   .imgTag1{
    width: 96%;
    border-radius: 50%;
    padding: 15px 0px 15px 0px;
   }

   .ptag{
  font-size: 20px;
   }

   @media screen and (max-width: 850px) {
    width: 90%;
    margin: auto;
    display: grid;
    grid-template-columns: repeat(2,1fr);
}

@media screen and (max-width: 300px) {
    width: 90%;
    margin: auto;
    display: grid;
    grid-template-columns: repeat(1,1fr);
} */
`;
