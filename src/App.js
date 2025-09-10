import React from 'react';
import { BrowserRouter,Route, Routes } from 'react-router-dom';
import Navbar from './Component/Navbar';
import Home from './Component/Home';
import About from './Component/About';
import Contact from './Component/Contact';
import FAQs from './Component/Faq';

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
     <Route path='/' Component={Home} exact ></Route>
     <Route path='/About' Component={About}></Route>
     <Route path='/Contact' Component={Contact}></Route>
     <Route path='/faq' Component={FAQs}></Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;

