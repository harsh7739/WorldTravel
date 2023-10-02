// import Login from "./Components/Login"
import './App.css';

import AllRoutes from './MainRoutes/AllRoutes'
import Navbar from '../src/Common/Navbar'
import Checkout from "../src/Landing/checkout/Checkout"

function App() {
  return (
    <div className="App" >
     <Navbar />
     <AllRoutes />
    </div>
  );
}

export default App;
