import "./App.css";
import HomePage from "./Components/Home/HomePage"
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Login from "./Components/Login/Login";
import Register from "./Components/Register/Register";
import NavBar from "./Components/NavBar/NavBar";


import "./dist/output.css"
import ProductDetails from "./Components/ProductDetails/ProductDetails";

function App() {
  return (
    <Router>
      
      <NavBar />
      <div className="App"> 
        <Routes>
          <Route path="/productDetails" element={<ProductDetails/>}/>
          <Route path="/"exact element={<HomePage />} />
          <Route path="/login" element={ <Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/"exact element={<HomePage />} />
          

        </Routes>
        
      </div>
     
    </Router>
  );
}

export default App;
