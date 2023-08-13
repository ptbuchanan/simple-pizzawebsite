import React, {useState} from 'react'
import JPJ from '../assets/JPJ.png'
import {Link} from "react-router-dom"
import "../styles/Navbar.css"
import ReorderIcon from "@material-ui/icons/Reorder"

/* This button will determine whether or not to show the links or hide the links
we will be using states.  If true show and remove the logo, if false show logo and 
remove the links.  We will be using a hook to get this functionality.  Using turnery
operators to have if logic.
*/
function Navbar() {

  const [openLinks, setOpenLinks] = useState(false)

  /* Want to click the button and have the true / false to change
  based on the button click.  From there the display will change.
  To alternate the value in the links going to put ! the current value
  */
  const toggleNavbar = () => {
    setOpenLinks(!openLinks)

  }

  return (
    <div className="navbar">
      <div className='leftSide' id={openLinks ? "open" : "close"}>  
        <img src={JPJ}/>
        <div className='hiddenLinks'>
          <Link to="/">Home</Link>
          <Link to="/menu">Menu</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </div>
      <div className='rightSide'>
        <Link to="/"> Home </Link>
        <Link to="/menu"> Menu </Link>
        <Link to="/about"> About </Link>
        <Link to="/contact"> Contact </Link>      
        <button onClick={toggleNavbar}>            
          <ReorderIcon/>
        </button>
      </div>   
    </div>
  );
}

export default Navbar









/*
  return (
    <div className="navbar">
      <div className="leftSide" id={openLinks ? "open" : "close"}>
        <img src={JPJ}/>
        <div className='hiddenLinks'>
          <Link to="/">Home</Link>
          <Link to="/menu">Menu</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </div>
      <div className="rightSide">
        <Link to="/">Home</Link>
        <Link to="/menu">Menu</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <button onClick={toggleNavbar}>
          <ReorderIcon/>
        </button>
      </div>
    </div>
  )
}
*/














