import React from 'react';
import {Link} from 'react-router-dom';


function Footer(){
    return(
       <section className="section footer bg-dark text-white">
           <div className="container">
           <div className="row">
               <div className="col-md-4">
                   <h6>Comapny Information</h6>
                   <hr/>
                   <p>
                   Mango Tree Group is a professional enterprise engaged in shipbuilding,ship maintenance and water project. Currently the shipbuilding includes passenger ship, ferry, cargo ship, push boat, tugboat, patrol boat, fishing boat, dredger and others; water project includes: waterway dredging, cleaning of the water surface, port construction, water transport, water building etc. it is all provided with a comprehensive package of program planning, professional technical support, design, installation and after-sales service.
                   </p>
                  
                   
               </div>
          
               <div className="col-md-4">
                   <h6>Quick links</h6>
                   <hr/>
                   <div><Link to ="/">Home</Link></div>
                   <div><Link to ="/about">About Us</Link></div>
                   <div><Link to ="/contact">Contact Us</Link></div>
                   <div><Link to ="/project">Products</Link></div>
                   <p> 


                       
                   </p>
                   <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"
        ><i class="fab fa-facebook-f"></i
      ></a>

   
      <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"
        ><i class="fab fa-twitter"></i
      ></a>

    
      <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"
        ><i class="fab fa-google"></i
      ></a>

      
      <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"
        ><i class="fab fa-instagram"></i
      ></a>

      
      
      
      
               </div>
               <div className="col-md-4">
                   <h6>Contact information</h6>
                   <hr/>
                   <div><p className="text-white mb-1">Address:Bugiri,Kawuku Entebbe road,Uganda</p></div>
                   
                   <div><p className="text-white mb-1">+256-777376666</p></div>
                   <div><p className="text-white mb-1">+256-778155530</p></div>
                   <div><p className="text-white mb-1">+256-782993007 </p></div>
                   
                   <div><p className="text-white mb-1">Email:mangotreeafrica@gmail.com</p></div>
         
               </div>
               <div className="copyright">
               <p class="text-muted">All rights reserved  © 2017 Mango Tree Group limited Copyright Reserved.</p>
               </div>
           </div>
           </div>
       
       </section>
         
    );

}
export default Footer;