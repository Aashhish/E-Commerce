import './App.css';
import SignUp from './Components/SignUp';
import Login from './Components/Login_Page';
import Home from './Components/Home';
import NavBar from './Components/NavBar';
import ProductDetail from './Components/ProductDetail';
import Cart from './Components/Cart';
import AdminHome from './Components/AdminHome';
import { useEffect, useState } from 'react';

import {
  BrowserRouter,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from "react-router-dom";

function App1() {
  const location = useLocation();
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  useEffect(() => {
    if (token) {
      navigate("/Home");
    }
  }, []);
  const [HideNavBar, setHideNavBar] = useState(false);
  useEffect(() => {
    if (
      location.pathname == "/" ||
      location.pathname == "/SignUp"
    ) {
      setHideNavBar(true);
    } else {
      setHideNavBar(false);
    }
  }, [location]);
  return (
   <>
   <div>
   {!HideNavBar && <NavBar></NavBar>}
   </div>
   <Routes>
    <Route path='/' element={<Login></Login>}></Route>
    <Route path='SignUp' element={<SignUp></SignUp>}></Route>
    <Route path='Home' element={<Home></Home>}></Route>
    <Route path='ProductDetail' element={<ProductDetail></ProductDetail>}></Route>
    <Route path='Cart' element={<Cart></Cart>}></Route>
    <Route path='AdminHome' element={<AdminHome></AdminHome>}></Route>
    
   </Routes>
   
   </>
  );
}

function App() {
  return(
    <div>
      <div>
          <BrowserRouter>
            <App1></App1>
          </BrowserRouter>
      </div>
    </div>
  )
}

export default App;
