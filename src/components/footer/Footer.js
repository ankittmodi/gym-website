import React from 'react'
import './footer.css';
import Github from '../../assets/github.png';
import Linkedin from '../../assets/linkedin.png';
import Instagram from '../../assets/instagram.png';
import Logo from '../../assets/logo.png';
export default function Footer() {
  return (
        <div className="footer-container">
            <hr />
            <div className="footer">
                <div className="social-links">
                    <a href="https://github.com/ankittmodi"><img src={Github} alt="" /></a>
                    <a href="#"><img src={Instagram} alt="" /></a>
                    <a href="https://www.linkedin.com/in/ankit-kumar-22210a268/"><img src={Linkedin} alt="" /></a>
                </div>
                <div className="logo-f">
                    <img src={Logo} alt="" />
                </div>
            </div>

            <div className="blur blur-f1"></div>
            <div className="blur blur-f2"></div>
        </div>
  )
}
