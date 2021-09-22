import React from "react"
import Modal from 'react-bootstrap/Modal';
import ReactPlayer from 'react-player';
import Button from 'react-bootstrap/Button';


function MyVerticallyCenteredModal(props) {

  return (
    <Modal
      {...props}
      size= "lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered>
      <Modal.Body className="body-wrapper">
        <ReactPlayer loop url={props.projectLink}/>
      </Modal.Body>
    </Modal>
  );
}


const Card = ({ heading, paragraph, imgUrl, projectLink }) => {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <div
      onClick={() => setModalShow(true)}
      className="card"
      style={{
        backgroundImage:
          "linear-gradient(to bottom, rgba(245, 246, 252, 0), rgba(0, 0, 0, 0.2)),url(" +
          imgUrl + ")",
      }}
    >
      <div className="content">
        <h1 className="header">{heading}</h1>
        <p className="text">{paragraph}</p>
      </div>
      <MyVerticallyCenteredModal 
      show={modalShow} 
      onHide={() => setModalShow(false)} 
      projectLink = {projectLink}/>
    </div>
  )
}

export default Card
