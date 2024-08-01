import './App.css'
import NavBar from './NavBar'
import Footer from './Footer'
import React, { useState } from 'react'
import Header from './Header'
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import Cart from './Cart';



const App = () => {
   const [cart, setCart] = useState([]);
  return (
   <>
   <BrowserRouter>
   <NavBar cart={cart}/>
    <div>
      <Routes>
        <Route path="/" element={<Header cart={cart} setCart={setCart}/>} />
        <Route path="/Cart" element={<Cart cart={cart} setCart={setCart}/>}/>
      </Routes>
      
    </div>
     <Footer/>
   </BrowserRouter>
  
    
   </>

  );
};

export default App;




