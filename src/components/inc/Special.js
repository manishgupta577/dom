import React from 'react';
import {Link} from 'react-router-dom';
import pic4 from '../images/about.png';
import sic1 from '../images/service_details.png';
import sic2 from '../images/x2.png.pagespeed.ic.U95_DAms4-.jpg';
import sic3 from '../images/x3.png.pagespeed.ic.lD8zXM-r9m.png';
import Aslider from './Aslider';
function Special(){
    return(
     <div >
         <section className="section">
             <div className="container">
             <div className="col-md-12 text-center">
              <h1 className="main-heading">DOUBTS?</h1>
         <div class="accordion" id="accordionExample">
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingOne">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
      Apartments frequently or motionless?
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingTwo">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
      Duis aute irure dolor in reprehenderit in voluptate?
      </button>
    </h2>
    <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingThree">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
      Voluptatem quia voluptas sit aspernatur?
      </button>
    </h2>
    <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
</div>
</div>
</div>


</section>
<div class="container">
        
      <hr class="dashed"></hr>
      </div>

 <section className="section">
 <div class="chose_area ">
<div class="container">
<div class="features_main_wrap">
<div class="row  align-items-center">
<div class="col-xl-5 col-lg-5 col-md-6">
<div class="about_image">
<img src={pic4} alt=""/>
</div>
</div>
<div class="col-xl-6 col-lg-6 col-md-6">
<div class="features_info">
<h3>Why Choose Us?</h3>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt.
</p>
<ul>
<li> Apartments frequently or motionless. </li>
<li> Duis aute irure dolor in reprehenderit in voluptate. </li>
<li> Voluptatem quia voluptas sit aspernatur.</li>
</ul>
<div class="about_btn">
<Link to="/about" className="btn btn-danger btn-lg">ABOUT US</Link>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
 </section>

 <div class="container">
        
      <hr class="dashed"></hr>
      </div>

<section className="section">
<div class="container">
<Aslider/>
</div>
</section>
     </div>
    );
}
export default Special;