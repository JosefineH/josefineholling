import React from 'react';
import Modal from 'react-bootstrap/Modal';
import ReactPlayer from 'react-player';
import Fade from 'react-reveal/Fade';

import Rullen from '../images/rullen-band.png'
import Zebra from '../images/ZEBRA-jpg.jpg'
import Soypiano from '../images/Sushitable.JPG'


function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size= "lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered>
      <Modal.Body className="body-wrapper">
        <ReactPlayer loop url='https://vimeo.com/574431240'/>
      </Modal.Body>
    </Modal>
  );
}

function Projects() {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <div className="projects-section" id="work">
      
      <Fade>
        <div className="projects-container">
          <h1>Work</h1>
          <div className="modal-section" onClick={() => setModalShow(true)}>
            <div className="content">
            <h1>Zebra</h1>
              <p>ZEBRA is an audio-visual eyetracking system that let artists turn their analogue art piece into an interactive experience. It's providing an unique possibilities for artists to create, and viewers to experience, interactive audio-visual art. </p>
              <p> ZEBRA was used in the art piece "Rymdbruk" created by the visual artist Kim Demåne (Delicious Brains) and the musician Frej Larsson, diplayed at the art exhibit in Ronneby Konsthall 2021.
                  The system and research around it regarding visual attention and cross-modalities influence on short-term memory was presented and published at AudioMostly 2021.</p>
            </div>
            <div className="image-wrapper"> 
              <img src={Zebra} alt="project-1" width="320px"/>
            </div>
          </div>

          <div className="modal-section" onClick={() => setModalShow(true)}>
            <div className="image-wrapper"> 
              <img src={Rullen} alt="project-1" width="320px"/>
            </div>
            <div className="content">
              <h1>The Rullen Band</h1>
              <p>The Rullen band is a set of four instruments designed to be played by people with severe to moderate cognitive and physical disabilities. The aim is that with inclusive design enable anyone to be a part of a band, regardless of their abilities. </p>
              <p> The Rullen Band makes music inclusive and accessible, and states that everyone should have the opportunity of enjoying music together with others.
              The Rullen Band has been used at Dibber Rullen School, Stockholm, in their musical education spring term of 2021 with great success. The work has also been presented and published at NIME 2021.</p>
          </div>
          </div>

          <div className="modal-section" onClick={() => setModalShow(true)}>
            <div className="content">
            <h1>Soy Piano</h1>
              <p>An interactive sushi table that lets the user explore the sonification of having a dinner. 
                  The work is a result of a voice and gesture sketching session with a four-year-old, that got to describe his dream imaginary instrument.</p>
              <p> The work was presented at the Swedish Museum of Performing Arts. .</p>
            </div>
            <div className="image-wrapper"> 
              <img src={Soypiano} alt="project-1" width="320px"/>
            </div>
          </div>
        </div>
      </Fade>
        


        <MyVerticallyCenteredModal show={modalShow} onHide={() => setModalShow(false)} />

    </div>
  );
}

export default Projects





//<Button className="primary-btn" variant="primary" onClick={() => setModalShow(true)}>
//Klicka
//</Button>