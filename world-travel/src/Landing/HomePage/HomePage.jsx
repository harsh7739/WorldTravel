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
      <div className={styles.main_cont}>
        {/* <HomeNavbar /> */}
        <img
          className={styles.img_tag}
          src="https://images.unsplash.com/photo-1594814532732-37c265b0dd3c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
          alt="hero section"
        />

        <div className={styles.centered}>
          <h1 className={styles.heading1st}>
            Let's Explore The World Together!
          </h1>
          <h3>Find awesome tour, flights and activities in World</h3>
        </div>

        {/* Top Deal */}
      </div>
      <div className={styles.top_deal}>
        <h1>Today's Top Deals</h1>
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
        <h1>Why Book With Us?</h1>
        <hr className={styles.hrTag} />
      </div>

      <div className="container">
        <WhyBook />
      </div>
      <div className={styles.book_with_us}>
        <h1>Holidays & Immigration</h1>
        <hr className={styles.hrTag} />
      </div>
      <Holiday />
      <div className="container my-4">
        <h1>Frequently Asked Questions.</h1>
        <Accordion />
      </div>
      <Footer />
    </>
  );
}
export default HomePage;
