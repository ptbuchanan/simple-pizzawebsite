import React from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App


/*
import "./App.css";
import Navbar from "./components/Navbar";
//import Footer from "./components/Footer";
import Home from "./pages/Home";
//import Menu from "./pages/Menu";
//import About from "./pages/About";
//import Contact from "./pages/Contact";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Home/>} />
      </Routes>
   </Router>
    </div>
  );
}

export default App;
*/

