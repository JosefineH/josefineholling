import React from "react"
import Fade from "react-reveal/Fade"
import Typewriter from 'typewriter-effect';

const Header = () => {
  return (
    <div className="header-section" id="home">
      <div className="header-container">
        <div className="header-wrapper">
          <Fade bottom>
            <h2>
              I'm Josefine, and I like
            </h2>
          </Fade>
          <Fade bottom cascade>
            <div className="heading-wrapper">
              <div className="left-col">
              <h1>
              <Typewriter className='header-typewriter'
                  options={{
                    strings: ['interaction', 'sound', 'ux'],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </h1>
              </div>
              <div className="right-col">
                <h1>design</h1>
              </div>
            </div>
          </Fade>
        </div>
      </div>
    </div>
  )
}

export default Header
