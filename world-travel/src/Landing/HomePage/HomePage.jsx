import Carousel from "../../Components/CaptionCarousel"
import HomeCarousel from "../Carousel/Carousel"
import pic from "../Images/homepic.jpg"
import HomeNavbar from "../Routes/HomeNavbar"
import styles from "./HomePage.module.css"

function HomePage(){
    return (
        <>

        <div className={styles.main_cont}>
        <HomeNavbar />
           <img className={styles.img_tag} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSe-zW0DHpg5WPwHJzR-6ztXH1id1WrpyE45v9Gmkdzyx5bpVXAe3x6CClPQAi_23ulLDY&usqp=CAU" alt="" />
          
           <div className={styles.centered}>
           <h1 className={styles.heading1st}>Let's Explore The World Together!</h1>
           <h3>Find awesome tour, flights and activities in World</h3>
           </div>

           {/* Top Deal */}
        </div>
        <div className={styles.top_deal}>
        <h1>Today's Top Deals</h1>
        </div>

       <HomeCarousel />

        </>
    )
}
export default HomePage