import React from "react"
import Fade from "react-reveal/Fade"
import linkedinIcon from '../images/linkedin.svg';
import spotifyIcon from '../images/spotify.svg';

const Footer = () => {
  return (
    <div className="footer-section" id="contact">
      <div className="container">
        <div className="footer-container">
          <Fade bottom cascade>
            <h1>Contact</h1>
            <h2>{'Lets have a talk!'}</h2>
          </Fade>
          <a className="email-link" >
            {'josefine.holling@gmail.com'}
          </a>

          <h2>...or meet me at my LinkedIn...</h2>
          <div className="social-icons">
            
              <a
                key="1"
                href={"https://www.linkedin.com/in/josefine-h%C3%B6lling-053378205/"}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={linkedinIcon} alt="icons"></img>
              </a>
          </div>


        </div>
      </div>
    </div>
  )
}

export default Footer
