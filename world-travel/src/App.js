// import Login from "./Components/Login"
import './App.css';
import Admin from './Components/Admin/Admin';
import Destination from './Destination Page/Destination';
import DestinationCard from './Destination Page/DestinationCard';
import Filter from './Destination Page/Filter';
import Hotels from './Destination Page/Hotels';
import SingleHotel from './Destination Page/SingleHotel';
import SinlgeDestination from './Destination Page/SinlgeDestination';
import HomePage from './Landing/HomePage/HomePage';
import AllRoutes from './MainRoutes/AllRoutes'
import Login from "./Components/Login"
function App() {
  return (
    <div className="App" >
      {/* <Admin/> */}
      
<Login/>
    </div>
  );
}

export default App;



// import React, { useState } from "react";
// import adminPic from '../Image/profile-pic.png';
// import logo from "../Image/LogoImage.png";
// import {
//   Tabs,
//   TabList,
//   Tab,
//   TabPanels,
//   TabPanel,
// } from "@chakra-ui/react";
// import 'bootstrap-icons/font/bootstrap-icons.css';
// import { BiSolidDashboard } from 'react-icons/bi';
// import { HiOutlineLogout } from "react-icons/hi";
// import { useNavigate } from "react-router-dom";
// import styled from "styled-components";
// import Analysis from "./Analysis";
// import AddProducts from "./AddProducts";
// import AdminUsers from "./AdminUsers";
// import { useDispatch } from "react-redux";
// import { getProduct } from "../Admin/AdminReducer/action";
// export default function Admin() {
//   const [activeTab, setActiveTab] = useState("dashboard");
//   const dispatch = useDispatch()
//   const handleTabChange = (tabName) => {
//     setActiveTab(tabName);
//   };

//   const navigate = useNavigate();
//   const handleClick = () => {
//     dispatch(getProduct())
// }

//   return (
//     <>
      
//       <div style={{ display: 'flex', alignItems: 'center',float:"right",marginRight: '20px', marginTop: '20px' }}>
     
//         <div>
//           <p>Hey, <b>Admin</b></p>
//           <p style={{ marginTop: '-20px', marginLeft: '40px' }}>admin</p>
//         </div>
//         <div>
//           <img
//             style={{
//               width: ' 2.8rem',
//               height: '2.8rem',
//               borderRadius: '50%',
//               overflow: 'hidden',
//               marginLeft: '15px',
//               marginTop: '-10px',
//             }}
//             src={adminPic}
//             alt=""
//           />
//         </div>
//       </div>
//       <DIV>
       
//         <Tabs 
//           sx={{ display: "flex" }}
//         >
//           <TabList style={{
//             position: "sticky",
//             top: "0",
//             boxShadow : "rgba(0, 0, 0, 0.24) 0px 3px 8px",
//             width:"260px"
//           }}
//             sx={{
//               display: "flex",
//               flexDirection: "column",
//               height: "100vh",
//               width: "30%",
//               padding: "20px",
//               gap: "3%",
//             }}
//           >
//             <img
//               src={logo}
//               alt=""
//               onClick={() => navigate("/")}
//               style={{
//                 cursor: "pointer", width: "100px", marginLeft: "20px", position: "sticky",
//                 top: "0%"
//               }}
//             />
           
//             <DIV>
//               <Tab className='list-group-item py-2' style={{ marginTop: "20px" }} onClick={() => handleTabChange("dashboard")}>
//                 <BiSolidDashboard />
//                 <span> Dashboard</span>
//               </Tab>
//               <Tab className='list-group-item py-2 ' onClick={() => handleTabChange("products")}>
//                 <i className="bi bi-table"></i>
//                 <span>Products</span>
//               </Tab>
//               <Tab className='list-group-item py-2'  onClick={() => handleTabChange("addusers")}>
//                 <i className='bi bi-people'></i>
//                 <span>Add Users</span>
//               </Tab>
//               {/* <Tab className='list-group-item py-2' >
//                 <i className='bi bi-clipboard-data '></i>
//                 <span >Analytics</span>
//               </Tab> */}
//               <Tab className='list-group-item py-2' onClick={() => navigate("/")}>
//                 <HiOutlineLogout />
//                 <span> Logout</span>
//               </Tab>
//             </DIV>
//           </TabList>
//           <TabPanels style={{ marginTop:"70px",marginLeft:"30px"}}>
//             <TabPanel >
//               {activeTab === "dashboard" && <Analysis/>}
//             </TabPanel>
//             <TabPanel>
//               {activeTab === "products" && <AddProducts  onClick={handleClick}/>}
//             </TabPanel>
//             <TabPanel>
//             {activeTab === "addusers" && <AdminUsers />}
//             </TabPanel>
//           </TabPanels>
//         </Tabs>
//       </DIV>
      
//     </>
//   );
// }

// const DIV = styled.div`

// .list-group-item
// {
//     font-size: 24px;
//     margin-bottom:15px;
// }
//   .tab {
//     font-size: 24px;
//     display: flex;
//     align-items: center;
//     /* gap: 5px; */
//     color: black;
//   }
//   span{
//     margin-left:15px;
//     /* margin-bottom:15px; */
//   }

//   .addProduct form {
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//     gap: 10px;
//     /* height: 80vh; */
//     button {
//       background-color: #bee3f8;
//       font-size: 18px;
//       color: #2c5282;
//       border-radius: 20px;
//       font-weight: 700;
//       padding: 5px 20px 5px 20px;
//     }
//     input,
//     select {
//       width: 35%;
//       border: 2px solid black;
//       height: 60px;
//       padding: 10px;
//       font-size: 18px;
//       border-radius: 5px;
//     }
//   }
//   /* .editProduct{
//     margin-top:"50px"
//   } */
//   #edit {
//     background-color: green;
//     padding: 5px 20px 5px 20px;
//     color: white;
//     border-radius: 5px;
//     font-weight: 600;
//   }
//   #delete {
//     background-color: red;
//     padding: 5px 20px 5px 20px;
//     color: white;
//     border-radius: 5px;
//     font-weight: 600;
//   }
//   @media screen and (max-width: 900px) {
//     span{
//         display:none;
//     }
//   }

// `;