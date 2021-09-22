import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Josefine from '../images/josefine_live_500px.jpg'
import Rapcamp from '../images/rapcamp_500px.jpg'
import Spugatti from '../images/spugatti_500px.jpg'

const Slideshow = () => {
  return (
    <div className="slide-section" id="slide">
        <div className="slide-container">
          <Carousel>
            <Carousel.Item>
              <a href={"https://open.spotify.com/artist/0PV8a0xZbBYtdGB3dLyWU5?si=OC2cHqFkSMOt6kUKfhg_Gg&dl_branch=1"}>
              <img
                className="d-block w-100"
                src={Josefine}
                alt="First slide"
              />
              </a>
              <Carousel.Caption>
                <h3>Music</h3>
                <p>Producing, live sets and DJ. Check me out on Spotify!</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <a href={"https://open.spotify.com/album/5mZfgm2TvZUEqyoDorqGce?si=BiQLZnyATxGlsjxh0VAfIQ&dl_branch=1"}>
              <img
                className="d-block w-100"
                src={Rapcamp}
                alt="Second slide"
              />
              </a>
              <Carousel.Caption>
                <h3>Pizzaslize Rapcamp</h3>
                <p>Organizer of Rapcamp - a music and art camp for young adults. Check out Rapcamp Vol.1! </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <a href={"https://youtu.be/WmwgdFoJ4L4"}>
              <img
                width="100%"
                className="d-block w-100"
                src={Spugatti}
                alt="Third slide"
              />
              </a>
              <Carousel.Caption>                
                <h3>Spugatti</h3>
                <p>A fully functional Lamborghini Avendor in Cardboard. Made Leavin' La Vida Larsson album promotion.</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
    </div>
  )
}

export default Slideshow
