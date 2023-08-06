import React from 'react'
import JPJLogo from '../assets/JPJ.png'

function Navbar() {
  return (
    <div className="navbar">
        <div className="leftside"></div>  
            <img src={JPJLogo} />
        
        <div className="rightside"></div>  
    </div>
  )
}

export default Navbar