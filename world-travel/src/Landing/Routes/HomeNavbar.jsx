import { Link } from "react-router-dom"

function HomeNavbar(){
    
   return <div style={{display:"flex",alignItems:"center",justifyContent:"space-around",color:"white", background: "transparent"}}>
    <Link to={"/"}>Home</Link>
    <Link to={"/message"}>Message</Link>
    <Link to={"/about"}>About Us</Link>
    </div>
}
export default HomeNavbar