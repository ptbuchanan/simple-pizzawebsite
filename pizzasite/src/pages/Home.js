import React from 'react'
import {Link} from "react-router-dom"
import Windows from "../assets/Windows.jpg"
import "../styles/Home.css"


// The style tag will allow us to have styling specifically for a div
function Home() {
  return (
    <div className="home" style={{backgroundImage: `url(${Windows})`}}>
      <div className="headerContainer">
        <h1>Pedro's Pizzeria</h1>
        <p>Pizza to fit any taste</p>
        <Link to="/menu">
          <button> Order Now</button>
        </Link>
        

      </div>

    </div>
  )
}

export default Home


/*
import React from "react";
import { Link } from "react-router-dom";
//import BannerImage from "../assets/pizza.jpeg";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home">
      <div className="headerContainer">
        <h1> Pedro's Pizzeria </h1>
        <p> PIZZA TO FIT ANY TASTE</p>
        <Link to="/menu">
          <button> ORDER NOW </button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
*/