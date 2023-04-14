import React, { Component } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/home';
import Cart from './pages/cart';

class App extends Component {
  render() {
    return (
       <BrowserRouter>
            <div className="App">
            

      <Routes>

      <Route path="/" element={<Home />}/>

                    <Route path="/cart" element={<Cart/>}/>
                  </Routes>
             </div>
       </BrowserRouter>
      
    );
  }
}

export default App;