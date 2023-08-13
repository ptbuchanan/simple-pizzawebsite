import React from 'react'
import Windows from '../assets/Windows.jpg'
import '../styles/About.css'

function About() {
  return (
    <div className='about'>
        <div className="aboutTop" 
        style={{backgroundImage: `url(${Windows})`}}
        >
          foooo
        </div>
        <div className="aboutBottom">
          <h1>About Us</h1>
          <p>Lorem ispum foo</p>
        </div>   
    </div>
  )
}

export default About