import React from "react"

import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';
// Skills Icons
import htmlIcon from "../images/html.svg"
import cssIcon from "../images/css.svg"
import presentationIcon from "../images/presentation.svg"
import musicIcon from "../images/music.svg"
import designIcon from "../images/design.svg"
import codeIcon from '../images/code.svg';
import prototypingIcon from '../images/prototyping.svg';
import userIcon  from '../images/user.svg';

const Skills = () => {
  return (
    <div className="skills-section" id="skills">
      <div className="container">
        <div className="skills-container">
            <Fade bottom cascade>
          <h1>Skills</h1>
          </Fade>
          <div className="skills-grid">
            <Zoom>
              <div className="skill" key="1">
                <img src={codeIcon} alt="css"></img>
                <p>JavaScript (React, jQuery), CSS, Python, C#</p>
              </div>
            </Zoom>
            <Zoom>
              <div className="skill" key="3">
                <img src={musicIcon} alt="css"></img>
                <p>Max/MSP, Pure Data, sound design and audio processing</p>
              </div>
            </Zoom>
            <Zoom>
              <div className="skill" key="2">
                <img src={designIcon} alt="css"></img>
                <p>Adobe Photoshop, Illustrator, Figma</p>
              </div>
            </Zoom>
            <Zoom>
              <div className="skill" key="4">
                <img src={presentationIcon} alt="css"></img>
                <p>HCI user research and design methods</p>
              </div>
            </Zoom>
            <Zoom>
              <div className="skill" key="5">
                <img src={prototypingIcon} alt="css"></img>
                <p>Physical prototyping using Arduino, Bela, Raspberry Pi, sensors, 3D printing, lasercutting</p>
              </div>
            </Zoom>
            <Zoom>
              <div className="skill" key="6">
                <img src={userIcon} alt="css"></img>
                <p>
                  Profound experience in remote work, and well familiar with cross-functional agile methods, such as Scrum and Kanban.
                </p>
              </div>
            </Zoom>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills
