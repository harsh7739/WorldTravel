import styled from "styled-components";
import Carousel from "../../Components/CaptionCarousel";
import HomeCarousel from "../Carousel/Carousel";
// import pic from "../Images/homepic.jpg";
import HomeNavbar from "../Routes/HomeNavbar";
import Accordion from "./Accordion";
import Footer from "./Footer";
import Holiday from "./Holiday";
import styles from "./HomePage.module.css";
import TravelTrip from "./TravelTrip";
import WhyBook from "./WhyBook";

// https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSe-zW0DHpg5WPwHJzR-6ztXH1id1WrpyE45v9Gmkdzyx5bpVXAe3x6CClPQAi_23ulLDY&usqp=CAU

function HomePage() {
  return (
    <>
      <DIV className={styles.main_cont}>
        {/* <HomeNavbar /> */}
        <img
          className={styles.img_tag}
          src="https://images.unsplash.com/photo-1594814532732-37c265b0dd3c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
          alt="hero section"
        />

        <div style={{ width : "100%" }} className={styles.centered}>
          <h1  className={styles.heading1st}>
            Let's Explore The World Together!
          </h1>
          <h2 style={{ fontWeight : 'bold' }} className={styles.heading2nd} >Find awesome tour, flights and activities in World</h2>
        </div>

        {/* Top Deal */}
      </DIV>
      <div className={styles.top_deal}>
        <h1 className="head-text" style={{ fontWeight : 'bold', borderBottom : "2px solid #567EB9", paddingBottom : "20px", width : '50%', margin : 'auto', fontSize : "45px" }} >Today's Top Deals</h1>
        {/* <hr className={styles.hrTag}/> */}
      </div>

      <div className="container">
        <div className="row">
          <HomeCarousel />
        </div>
      </div>

      <div className="container-fluid px-0 mb-5">
        <div className="row">
          <TravelTrip />
        </div>
      </div>

      <div className={styles.book_with_us}>
        <h1 className="head-text" style={{ fontWeight : 'bold', borderBottom : "2px solid #567EB9", paddingBottom : "20px", width : '50%', margin : 'auto', fontSize : "45px" }}  >Why Book With Us?</h1>
        <hr className={styles.hrTag} />
      </div>

      <div className="container">
        <WhyBook />
      </div>
      <div className={styles.book_with_us}>
        <h1 className="head-text" style={{ fontWeight : 'bold', borderBottom : "2px solid #567EB9", paddingBottom : "20px", width : '50%', margin : 'auto', fontSize : "45px" }}  >Holidays & Immigration</h1>
        <hr className={styles.hrTag} />
      </div>
      <Holiday />
      <br />
      <br />
      <div className="container text-center my-4">
        <h1 className="head-text" style={{ fontWeight : 'bold', borderBottom : "2px solid #567EB9", paddingBottom : "20px", width : '50%', margin : 'auto', fontSize : "45px" }}  >Frequently Asked Questions.</h1>
      <br />
      <br />
        <Accordion />
      </div>
      <br />
      <br />
      <Footer />
    </>
  );
}
export default HomePage;


const DIV = styled.div`
  @media screen and (max-width : 590px) and (min-width : 200px) {
    .head-text {
      font-size: 20px;
    }
}
`