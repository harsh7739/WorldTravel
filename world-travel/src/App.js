import Login from "./Components/Login"
import './App.css';
import Message from "./Landing/Message/Message";
import About from "./Landing/About/About";
import HomePage from "./Landing/HomePage/HomePage";
import HomeNavbar from "./Landing/Routes/HomeNavbar";
import HomeMainRoute from "./Landing/Routes/HomeMainRoute";



function App() {
  return (
    <div className="App" >
  {/* <Message /> */}
  {/* <About /> */}
    {/* <Login/> */}
    {/* <HomePage /> */}
    {/* <HomeNavbar /> */}
    <HomeMainRoute />

    </div>
  );
}

export default App;
