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
              <section class="section">
                <div class="container">
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
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod
        eos id officiis hic tenetur quae quaerat ad velit ab hic tenetur.
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
             
        
       
               <section class ="section1">
               <div class="container">
        <div class="card card-cascade wider reverse">





        <div class="card-body card-body-cascade text-left">

  
  <h4 class="card-title"><strong>Our Journey</strong></h4>
  
  
 
  <p class="card-text">
  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
  <br/>
  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
  <br/>
  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
  </p>

  <a class="px-2 fa-lg li-ic"><i class="fab fa-linkedin-in"></i></a>
 
  <a class="px-2 fa-lg tw-ic"><i class="fab fa-twitter"></i></a>
  
  <a class="px-2 fa-lg fb-ic"><i class="fab fa-facebook-f"></i></a>

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