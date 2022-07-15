
import Navbarr from './components/Navbar';
import Home from './Pages/Home';
import React from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import CartPage from './Pages/CartPage';
import Register from './Pages/Register';
import Login from './Pages/Login';
import Orderpage from './Pages/Orderpage';
import Adminpage from './Pages/Adminpage';
import AOS from 'aos'
import 'aos/dist/aos.css';

function App() {
  AOS.init()
  return (
    <div className="App">
      <Navbarr />
      <BrowserRouter>
        <Routes>
            <Route path="/" exact element={<Home />}/>
            <Route path='/cart' exact element={<CartPage />} />
            <Route path='/register' exact element={<Register/>}/>
            <Route path='/login' exact element={<Login/>}/>
            <Route path='/orders' exact element={<Orderpage/>}/>
            <Route path='/admin/*' element={<Adminpage />}/>
        </Routes>            
      </BrowserRouter>
    </div>
  );
}

export default App;
