import React from 'react'
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './components/Header';
import Footer from './components/Footer';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={ <Home />} />
        <Route path="/about" element={ <About /> } />
        <Route path="/service" element={ <Services /> } />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
