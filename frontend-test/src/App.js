import React from 'react';
import {BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import Home from "./pages/home";
import Resultados from './pages/resultados';
import Footer from './components/footer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/resultados' element={<Resultados/>} />
        </Routes>
        <Footer />
      </BrowserRouter>

    </div>
  );
}

export default App;
