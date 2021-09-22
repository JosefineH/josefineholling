import React from "react"
import Card from "./Card"
import Fade from "react-reveal/Fade"
import Soypiano from '../images/Sushitable.JPG'
import Rullen from '../images/rullen-band.png'
import Zebra from '../images/ZEBRA-jpg.jpg'


const Work = () => {
  
  return (
    <div className="work-section" id="work">
      <div className="work-container">
        <div className="work-wrapper">
          <Fade bottom cascade>
            <h1>Work</h1>
          </Fade>

          <div className="grid" >
            <Fade bottom>
                <Card 
                  key="1"
                  heading="Zebra"
                  paragraph="ZEBRA is an audio-visual eyetracking system that let artists turn their analogue art piece into an interactive experience. It's providing an unique possibilities for artists to create, and viewers to experience, interactive audio-visual art.
                  ZEBRA was used in the art piece Rymdbruk created by the visual artist Kim Demåne (Delicious Brains) and the musician Frej Larsson, diplayed at the art exhibit in Ronneby Konsthall 2021.
                  The system and research around it regarding visual attention and cross-modalities influence on short-term memory was presented and published at AudioMostly 2021."
                  imgUrl={Zebra}
                  projectLink={"https://vimeo.com/574431240"}
                ></Card>
                <Card
                  key="2"
                  heading="The Rullen Band"
                  paragraph="The Rullen band is a set of four instruments designed to be played by people with severe to moderate cognitive and physical disabilities. The aim is that with inclusive design enable anyone to be a part of a band, regardless of their abilities.
                  The Rullen Band makes music inclusive and accessible, and states that everyone should have the opportunity of enjoying music together with others.
                  The Rullen Band has been used at Dibber Rullen School, Stockholm, in their musical education spring term of 2021 with great success. The work has also been presented and published at NIME 2021."
                  imgUrl={Rullen}
                  projectLink={"https://vimeo.com/607694507"}
                ></Card>
                <Card
                  key="3"
                  heading="Soypiano"
                  paragraph="An interactive sushi table that lets the user explore the sonification of having a dinner. 
                  The work is a result of a voice and gesture sketching session with a four-year-old, that got to describe his dream imaginary instrument.
                  The work was presented at the Swedish Museum of Performing Arts. ."
                  imgUrl={Soypiano}
                  projectLink={"https://vimeo.com/607696089"}
                ></Card>

            </Fade>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default Work


//https://vimeo.com/574431240