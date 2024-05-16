import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from'react';
import './App.css';
import HomePage from './homepage/HomePage';
import AboutUs from './homepage/AboutUs';
import TopNav from "./homepage/TopNav";
import Footer from "./homepage/Footer";

function App() {
  return (
    <BrowserRouter>
    <div className="">
      <TopNav />
    </div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="AboutUs" element={<AboutUs />} />
      </Routes>
    <Footer />
    </BrowserRouter>
  );
}

export default App;
