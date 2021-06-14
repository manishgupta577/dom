import React from 'react';
import pic1 from '../images/xairplane.png.pagespeed.ic.PLccB_OHfG.png';
import pic2 from '../images/xlive.png.pagespeed.ic.hW0Hcc5eX-.png';
import pic3 from '../images/world.png';
import {Link} from 'react-router-dom';
function Transportation(){
    return(
        <div>
            <section className="section">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <h3 className="main-heading">Our Company</h3>
              
              <p>
              MCSE boot camps have its supporters and its detractors. Some people do not understand why you should have to spend money on boot camp when you can get the MCSE study materials yourself at a fraction of the camp price. However, who has the willpower
              </p>
              <Link to="/about" className="btn btn-warning shadow">READ MORE</Link>
            </div>
          </div>
        </div>

      </section>
            <div className="col-md-12 mb-6 text-center">
              <h1 className="main-heading"> Services We Offer</h1>
            
            </div>
           
            <div className="transportaion_area">
  <div className="container">
  <div className="row">
  <div className="col-xl-4 col-lg-4 col-md-6">
  <div className="single_transport">
  
  <h3>Transportation</h3>
  <div className="icon">
  <img src={pic1} alt=""/>
  </div>

  <p>Esteem spirit temper too say adieus who direct esteem. It look estee luckily or picture
  placing drawing.</p>
  </div>
  </div>
  <div className="col-xl-4 col-lg-4 col-md-6">
  <div className="single_transport">
  
  <h3>Live Monitoring</h3>
  <div className="icon">
  <img src={pic2} alt=""/>
  </div>
  <p>Esteem spirit temper too say adieus who direct esteem. It look estee luckily or picture
  placing drawing.</p>
  </div>
  </div>
  <div className="col-xl-4 col-lg-4 col-md-6">
  <div className="single_transport">
  
  <h3>Worldwide Service</h3>
  <div className="icon">
  <img src={pic3} alt=""/>
  </div>
  <p>Esteem spirit temper too say adieus who direct esteem. It look estee luckily or picture
  placing drawing.</p>
  </div>
  </div>
  </div>
  </div>
  </div>
      </div>
    );
}
export default Transportation;