// import Login from "./Components/Login"
import './App.css';
import Navbar from './Common/Navbar';
import Checkout from './Landing/checkout/Checkout';
import AllRoutes from './MainRoutes/AllRoutes'

function App() {
  return (
    <div className="App" >
     <Navbar />
     <AllRoutes />
     {/* <Checkout /> */}
    </div>
  );
}

export default App;
