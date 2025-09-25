import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Component/Navbar";
import Home from "./Component/Home";
import About from "./Component/About";
import Contact from "./Component/Contact";
import FAQs from "./Component/Faq";
import Registeration from "./Component/Registeration";
import Footer from "./Component/Footerr";
import SignIN from "./Component/signIN";


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" Component={Home} exact></Route>
        <Route path="/about" Component={About}></Route>
        <Route path="/contact" Component={Contact}></Route>
        <Route path="/faq" Component={FAQs}></Route>
        <Route path="/register" Component={Registeration}/>
        <Route path="/SignIN" Component={SignIN}></Route>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
