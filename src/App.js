import Home from "./pages/Home";
import Cart from "./pages/Cart";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Product from "./pages/Product";
import {
  BrowserRouter as Router,
  Routes,
  Route, } from "react-router-dom";
function App() {
  return (
<>
<Router>
<Routes>
 <Route path="/" element={<Home/>}></Route> 
 <Route path="/Cart" element={<Cart/>}></Route> 

 <Route path="/productList" element={<ProductList/>}></Route> 
 <Route path="/register" element={<Register/>}></Route> 
 <Route path="/login" element={<Login/>}></Route> 
  <Route path="/product" element={ <Product/>}></Route>
  
  </Routes>
  </Router>
</>
);
}

export default App;
