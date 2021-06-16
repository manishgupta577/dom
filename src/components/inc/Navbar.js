import React from 'react';
import logo from '../images/world.png';
import {Link} from 'react-router-dom';


function Navbar() {
  return(
    <div className="navbar-dark sticky-top bg-warning">
    <div className="container">
        <div className="row">
            <div className="col-md-12">
            <nav class="navbar sticky-top navbar-expand-lg  ">
<div class="container-fluid">
<Link to="/" class="navbar-brand" ><img src={logo} alt="" width="40" height="35"/>                                                MANGO TREE    </Link>



<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
 <span class="navbar-toggler-icon"></span>
</button>
<div class="collapse navbar-collapse" id="navbarSupportedContent">
 <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
   
   <li class="nav-item ">
     <Link to ="/" class="nav-link active"><b>HOME</b></Link>
   </li>
   <li class="nav-item">
     <Link to ="/about" class="nav-link active"><b>ABOUT US</b></Link>
   </li>
   <li class="nav-item dropdown">
   <Link to ="/contact" class="nav-link active"><b>CONTACT US</b></Link>
   </li>
   
   
   <li class="nav-item dropdown">
   <Link to ="/project" class="nav-link active"><b>PROJECTS</b></Link>
   </li>
   <li class="nav-item dropdown">
     <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
      <b>OTHERS</b>
     </a>
     <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
       <li><a class="dropdown-item" href="#">Action</a></li>
       <li><a class="dropdown-item" href="#">Another action</a></li>
       <li><hr class="dropdown-divider"/></li>
       <li><a class="dropdown-item" href="#">Something else here</a></li>
     </ul>
   </li>
   
 </ul>
 
</div>
</div>
</nav>
            </div>
        </div>
    </div>
</div> 
    
   );

 }

export default Navbar;