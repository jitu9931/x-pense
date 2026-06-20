
import React from 'react'
import Header from './components/Header';
import { BrowserRouter, Route, Routes } from 'react-router';
import Features from './pages/Features';
import About from './pages/About';
import Pricing from './pages/Pricing';
import Feedback from './pages/Feedback';
import Home from './pages/Home';

const App = () => {
  return (
    <>
    <BrowserRouter>
    <Header/>

    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/features" element={<Features/>}></Route>
      <Route path="/about-us" element={<About/>}></Route>
      <Route path="/pricing" element={<Pricing/>}></Route>
      <Route path="/feedback" element={<Feedback/>}></Route>

    </Routes>


    
    </BrowserRouter>
    </>
  )
}

export default App;


