// import Login from "./Components/Login"
import './App.css';
import AllRoutes from './MainRoutes/AllRoutes'
import Navbar from './Common/Navbar';


function App() {
  return (
    <div className="App" >
       <Navbar />
       <AllRoutes />
    </div>
  );
}

export default App;
