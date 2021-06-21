import React from 'react';
import {Link} from 'react-router-dom';
import Slider2 from '../images/1 (1).jpg';
import Slider1 from '../images/Water transport.jpeg';
import Slider3 from '../images/Estimate_bg.png';
import Slider4 from '../images/bradcam2.png';
function Slider(){
    return(
      <div>
        <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      
    <div class="carousel-caption d-none d-md-block">
      <Link to="/about" className="btn btn-warning btn-lg">ABOUT US</Link>
      </div>
      
      
      
        
        
      
      <img src={Slider1} class="d-block w-100" alt="..."/>
      
    </div>
    <div class="carousel-item">
      <img src={Slider4} class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
      <Link to="/about" className="btn btn-warning btn-lg">ABOUT US</Link>
       
        
      </div>
    </div>
    <div class="carousel-item">
      <img src={Slider3} class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
      <Link to="/about" className="btn btn-warning btn-lg">ABOUT US</Link>
      
        
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="false"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="false"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
</div>
    );
}
export default Slider;
