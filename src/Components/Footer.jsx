import React from 'react'
import logo from "../Assets/Logo.jpg"

const Footer = () => {
  return (
    <div>
      <footer>
        <div className='footer-content'>
        <div className='footer-list'>
            <ul>
                <a href='#'><li>About Us</li></a>
                <a href='#'><li>Contact Us</li></a>
                <a href='#'><li>Our Portfolio</li></a>
                <a href='#'><li>Our Achievements</li></a>
                <a href='#'><li>Our Office</li></a>
                <a href='#'><li>Carrers</li></a>
                <a href='#'><li>Privacy Policy</li></a>
            </ul>
        </div>
        <div>
            <img src={logo} alt='logo' className='footer-logo'></img>
        </div>
        </div>
        <p className='footer-text'>@ 20223 - William Thaddeus</p>
      </footer>
    </div>
  )
}

export default Footer
