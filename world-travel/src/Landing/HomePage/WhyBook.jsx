import styled from "styled-components"

function WhyBook(){
    return (
        <DIV>
            <div  className="main_cont">
                <div className="imgDiv">
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
            </div>
        
        </DIV>
    )
}
export default WhyBook

const DIV = styled.div`
    
    width: 90%;
    margin: auto;
    display: grid;
    grid-template-columns: repeat(4,1fr);

   .main_cont{
    width: 90%;
    display: flex;
    /* border: 1px solid red; */
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
    /* border: 1px solid red; */
    border-radius: 50%;
  /* color: aqua; */
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
    /* border: 1px solid red; */
    padding: 20px 0px 20px 0px;
   }
   .imgTag1{
    width: 96%;
    /* border: 1px solid red; */
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

@media screen and (max-width: 400px) {
    width: 90%;
    margin: auto;
    display: grid;
    grid-template-columns: repeat(1,1fr);
}
`