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
                   It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                   </p>
                  
                   
               </div>
          
               <div className="col-md-4">
                   <h6>Quick links</h6>
                   <hr/>
                   <div><Link to ="/">Home</Link></div>
                   <div><Link to ="/about">About Us</Link></div>
                   <div><Link to ="/contact">Contact Us</Link></div>
                   <div><Link to ="/">Project</Link></div>
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

      <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"
        ><i class="fab fa-linkedin-in"></i
      ></a>

      
      <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"
        ><i class="fab fa-github"></i
      ></a>
      
               </div>
               <div className="col-md-4">
                   <h6>Contact information</h6>
                   <hr/>
                   <div><p className="text-white mb-1">6th Block, Koramangala, Bengaluru, Karnataka</p></div>
                   <div><p className="text-white mb-1">+91 9211833829</p></div>
                   <div><p className="text-white mb-1">+91 9128833299</p></div>
                   <div><p className="text-white mb-1">abc@gmail.com</p></div>
         
               </div>
           </div>
           </div>
       
       </section>
         
    );

}
export default Footer;