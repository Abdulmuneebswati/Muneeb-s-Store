import './App.css';
import Home from './pages/home/Home';
import Login from "./pages/login/Login";
import List from "./pages/list/List";
import Singlepage from "./pages/singlePage/Singlepage"
import Newpage from "./pages/newPage/Newpage";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { productInputs, userInputs } from './newsrc';
import "./style/dark.scss";
import { useContext } from 'react';
import darkModeContext from './context/darkModeContext';



function App() {
  const {mode} = useContext(darkModeContext);
  return (
    <div className={mode ? "App dark":"App"}>
    <Router> 
          <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/login" element={<Login/>}></Route>
          <Route exact path="/users" element={<List />}></Route>
          <Route exact path="/users/:userId" element={<Singlepage/>}></Route>
          <Route exact path="/users/new" element={<Newpage input = {userInputs} title="Add new users"/>}></Route>
          <Route  exact path='/products' element={<List/>}></Route>
          <Route exact path="/products/:productId" element={<Singlepage/>}></Route>
          <Route exact path="/products/new" element={<Newpage input = {productInputs} title="Add new products"/>}></Route>

          </Routes>
        </Router>
    </div>
  );
}

export default App;
