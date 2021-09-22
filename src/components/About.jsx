import React from "react";
import Fade from "react-reveal/Fade";
import Me from '../images/josefine_pic_thin_2.jpg'

const About = () => {
    return (
      <div className="section" id="about">
          <Fade bottom cascade>
        <div className="about-container">            
            <div className="about-section">
                <div className="content">
                    <h1>About</h1>              
                    <p>With a master degree in interactive media technology, specified towards sound and music computing, my previous projects have been in the intersection of art, technology and HCI research. Experience lies within physical interaction combined with digital computing, which includes prototyping with everything from microcontrollers, sensors and 3D-printing to various design methods. Previous projects have mainly been around audio-visual interaction, which have included profound user research and testing. </p>
                    <p>I spent the first half of 2021 as an intern at Manyone, which gave me great insight in cross-disciplinary teams out in the real world. Parallel to my intern position, I worked at KTH with being a studio manager of the creative studio MIDDLA, which included maintenance of 3D-printers, laser cutters and other machines, managing prototyping material as well as teaching other students how to use the space.</p>
                    <p>I am currently improving my skills in frontend programing as well as in graphic design. If you have a position where I can develop within that, UX, or interaction design field, feel free to <a href="#contact">contact me.</a>   </p>
                                      
                </div>
                <div className="image-wrapper">
                <img src={Me} alt="about"></img>
                </div>
            </div>
            
        </div>
        </Fade>
      </div>
    )
  }
  
  export default About