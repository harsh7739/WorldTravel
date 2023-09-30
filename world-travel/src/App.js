// import Login from "./Components/Login"
import './App.css';
import Message from "./Landing/Message/Message";
import About from "./Landing/About/About";
import HomePage from "./Landing/HomePage/HomePage";
import HomeNavbar from "./Landing/Routes/HomeNavbar";
import HomeMainRoute from "./Landing/Routes/HomeMainRoute";

import Destination from "./Destination Page/Destination";

import AllRoutes from './MainRoutes/AllRoutes'
import Checkout from './Landing/checkout/Checkout';


function App() {
  return (
    <div className="App" >
    {/* <HomeMainRoute /> */}
    <Checkout />
    </div>
  );
}

export default App;
