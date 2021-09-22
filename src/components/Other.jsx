import React from "react"

import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';

const Other = () => {
  return (
    <div className="other-section" id="other">
      <div className="container">
        <div className="other-container">
            <Fade bottom cascade>
          <h1>Publications</h1>
          </Fade>
          <div className="other-grid">
            <Zoom>
              <div className="skill" key="1">
                <h2> <b>Audio-Visual Interactive Art: Investigating the effect of gaze-controlled audio on visual attention and short-term memory </b></h2>
                <p>Co-authors: Maria Svahn, Sandra Pauletto. Published through AudioMostly 2021. <a href="https://www.diva-portal.org/smash/record.jsf?dswid=-2697&pid=diva2%3A1591511">Full paper soon to be published.</a></p>
              </div>
            </Zoom>
            <Zoom>
              <div className="skill" key="3">
              <h2><b>The Rullen Band</b></h2>
                <p>Co-authors: Maria Svahn, Fanny Curtsson, Nina Nokelainen. Published through NIME 2021. <a href="https://nime.pubpub.org/pub/pvd6davm/release/1?readingCollection=71dd0131">Full paper here.</a></p>
              </div>
            </Zoom>
            <Zoom>
              <div className="skill" key="2">
              <h2><b>Rhythm as Sensorimotor Support: How sound affects stride length and step frequency.</b></h2>
                <p>Co-author: Maria Svahn. Presented at NSMC 2019. <a href="https://smcsweden.se/proceedings/NordicSMC_ISon_2019_Proceedings.pdf">Full paper here (p. 80).</a></p> 
              </div>
            </Zoom>
            <Zoom>
              <div className="skill" key="4">
              <h2><b>Soundscape From an Audio-Visual Perspective: A study on how visual feedback affects our perception of a soundscape</b></h2>
                <p>Master thesis project conducted together with Manyone. Full paper soon to be published.</p>
              </div>
            </Zoom>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Other
