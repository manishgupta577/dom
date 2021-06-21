import React from 'react';

import Footer from '../inc/Footer';
import Aslider from '../inc/Aslider';


import {Link} from 'react-router-dom';
function Aboutus() {
  return(
    <div>
    <div className="container">
      <ol class="breadcrumb ">
          <li class="breadcrumb-item"><Link to="/">Home</Link></li>
    <     li class="breadcrumb-item active" aria-current="page">ABOUT US</li>
        </ol>
        
            <div className="card">
              <Aslider/>
              <section class ="section">
               <div class="container">
        <div class="card card-cascade wider reverse">





        <div class="card-body card-body-cascade text-left">

  
  <h4 class="card-title"><strong>Our Journey</strong></h4>
  
  
 
  <p class="card-text">
  Mango Tree Group is a professional enterprise engaged in shipbuilding,ship maintenance and water project. Currently the shipbuilding includes passenger ship, ferry, cargo ship, push boat, tugboat, patrol boat, fishing boat, dredger and others; water project includes: waterway dredging, cleaning of the water surface, port construction, water transport, water building etc. it is all provided with a comprehensive package of program planning, professional technical support, design, installation and after-sales service.


  <br/>
  Mango Tree Group since its establishment in 2011, has been fully implementing the strategies as "brand, quality, efficiency, integrity" to enable it to rapidly grow and develop. Its branches were successively incorporated in Juba, South Sudan, Kampala, Uganda and Kinshasa DRC. Currently, the Africa operation center of  the Group has been set in Kampala, Uganda. the factory was built on the lakeside of Lake Victoria, the world's second largest freshwater lake. Headquarters covers an area of about 40 acres which is being planned for the construction of dock, port, office building, shipping college, large-scale warehouse and oil depot. At present, there are more than 90 skilled and experienced engineers and technicians and over 100 African employees in its Africa branches. The shipbuilding base in Kampala is currently the largest shipyard in East Africa, with the capacity of building all kinds of ships within 10,000 tons loading capacity.
  <br/>
  Mango Tree Group is committed to being the best maritime enterprise in Africa, through strengthening cooperation and more high tech to develop safe and efficient water transport services to reduce the living cost of African people, Mango Tree Group has been taking great efforts to provide Africa people with more job opportunities and wishes be always hand in hand with African people!
  </p>

  <a class="px-2 fa-lg li-ic"><i class="fab fa-linkedin-in"></i></a>
 
  <a class="px-2 fa-lg tw-ic"><i class="fab fa-twitter"></i></a>
  
  <a class="px-2 fa-lg fb-ic"><i class="fab fa-facebook-f"></i></a>

</div>

</div>
</div>
</section>
              <section class="section">
                <div class="container">
                <h4 class="title"><strong>Testimonials</strong></h4>
                <div class="row">


<div class="col-md-4 mb-4">

  
  <div class="">

    <div class="view z-depth-1 rounded-circle avatar-sm mx-auto">
      <img class="img-fluid w-100" src="https://mdbootstrap.com/img/Photos/Avatars/img%20(1).jpg"
        alt="Sample"/>
    </div>

    <div class="text-center pt-4">

      <h5>Maria Dolores</h5>
      <p class="mb-2 text-muted text-uppercase small">Web Designer</p>
      
      <hr/>
      <p class="mb-0">
        <i class="fas fa-quote-left pr-2"></i>
        Sunt laudantium veritatis doloremque tempore, ipsam soluta doloribus praesentium modi totam repudiandae incidunt.


      </p>
    </div>

  </div>
 

</div>

<div class="col-md-4 mb-4">

  
  <div class="">

    <div class="view z-depth-1 rounded-circle avatar-sm mx-auto">
      <img class="img-fluid w-100" src="https://mdbootstrap.com/img/Photos/Avatars/img%20(2).jpg"
        alt="Sample"/>
    </div>

    <div class="text-center pt-4">

      <h5>Carmen Martinez</h5>
      <p class="mb-2 text-muted text-uppercase small">Frontend Developer</p>
      
      <hr/>
      <p class="mb-0">
        <i class="fas fa-quote-left pr-2"></i>
        Sunt laudantium veritatis doloremque tempore, ipsam soluta doloribus praesentium modi totam
        repudiandae incidunt.
      </p>
    </div>

  </div>


</div>

<div class="col-md-4 mb-4">

  
  <div class="">

    <div class="view z-depth-1 rounded-circle avatar-sm mx-auto">
      <img class="img-fluid w-100" src="https://mdbootstrap.com/img/Photos/Avatars/img%20(3).jpg"
        alt="Sample"/>
    </div>

    <div class="text-center pt-4">

      <h5>Hugo Romero</h5>
      <p class="mb-2 text-muted text-uppercase small">Digital Marketing Analyst</p>
      
      <hr/>
      <p class="mb-0">
        <i class="fas fa-quote-left pr-2"></i>
        Blanditiis esse impedit, adipisci cum ratione itaque rem labore eos
        quos aliquam, est inventore repellat vel aut necessitatibus.
      </p>
    </div>

  </div>
 

</div>


</div>



                </div>
                </section>
             
        
       
               
            </div>
        </div>
    
    
     

       

    <Footer/>
    </div>
    
   )

 }

export default Aboutus;