import React from 'react';
import Footer from '../inc/Footer';
import {Link} from 'react-router-dom';
import kick1 from '../images/xpost_6.png.pagespeed.ic.e0_C88I_TX.jpg';
import kick2 from '../images/xpost_7.png.pagespeed.ic.w7kS-QUYhS.jpg';
import kick3 from '../images/xpost_9.png.pagespeed.ic.o025Y97fkm.jpg';
function Projectus(){
    return(
       
          <div>
    <div className="container">
      <ol class="breadcrumb ">
          <li class="breadcrumb-item"><Link to="/">Home</Link></li>
    <     li class="breadcrumb-item active" aria-current="page">Projects</li>
        </ol>
        <div class="section1">
        <div className="card mt-4">
            <div className="card">
             
        
       
               <h2>    Our Projects</h2>
               </div>
               </div>
               </div>
               
         
              </div>
    
    <Footer/>
    
    </div>
       
    );
}
export default Projectus;