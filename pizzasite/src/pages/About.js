import React from 'react'
import Windows from '../assets/Windows.jpg'

function About() {
  return (
    <div className='about'>
        <div className="aboutTop" style={{backgroundImage: `url(${Windows})`}}></div>
        <div className="aboutBottom"></div>   
    </div>
  )
}

export default About