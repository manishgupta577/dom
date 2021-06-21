
import Footer from '../inc/Footer';
import {Link} from 'react-router-dom';
import sic1 from '../images/water1.jpg';
import sic2 from '../images/water2.jpg';
import sic3 from '../images/water3.jpg';
import sic4 from '../images/water4.jpg';
import sic5 from '../images/water5.jpg';
import sic6 from '../images/water6.jpg';
import sic7 from '../images/water8.jpg';
function Projectus(){
    return(
       
          <div>
    <div className="container">
      <ol class="breadcrumb ">
          <li class="breadcrumb-item"><Link to="/">Home</Link></li>
    <     li class="breadcrumb-item active" aria-current="page">Products</li>
        </ol>
        <div class="section1">
        
               
<div class="container">
<h3 className="main-heading text-center">Our Products</h3>
<div class="row row-cols-1 row-cols-md-3 g-4">
  <div class="col">
    <div class="card h-100">
      <img
        src={sic1}
        class="card-img-top"
        alt="..."
      />
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">
          This is a wider card with supporting text below as a natural lead-in to
          additional content. This content is a little bit longer.
        </p>
      </div>
      <div class="card-footer">
      <button type="button" class="btn btn-warning">Read more..</button>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card h-100">
      <img
        src={sic2}
        class="card-img-top"
        alt="..."
      />
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">
          This card has supporting text below as a natural lead-in to additional
          content.
        </p>
      </div>
      <div class="card-footer">
      <button type="button" class="btn btn-warning">Read more..</button>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card h-100">
      <img
        src={sic7}
        class="card-img-top"
        alt="..."
      />
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">
          This is a wider card with supporting text below as a natural lead-in to
          additional content. This card has even longer content than the first to show
          that equal height action.
        </p>
      </div>
      <div class="card-footer">
      <button type="button" class="btn btn-warning">Read more..</button>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card h-100">
      <img
        src={sic4}
        class="card-img-top"
        alt="..."
      />
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">
          This is a wider card with supporting text below as a natural lead-in to
          additional content. This content is a little bit longer.
        </p>
      </div>
      <div class="card-footer">
      <button type="button" class="btn btn-warning">Read more..</button>
      </div>
    </div>
  </div><div class="col">
    <div class="card h-100">
      <img
        src={sic5}
        class="card-img-top"
        alt="..."
      />
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">
          This is a wider card with supporting text below as a natural lead-in to
          additional content. This content is a little bit longer.
        </p>
      </div>
      <div class="card-footer">
      <button type="button" class="btn btn-warning">Read more..</button>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card h-100">
      <img
        src={sic6}
        class="card-img-top"
        alt="..."
      />
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">
          This is a wider card with supporting text below as a natural lead-in to
          additional content. This content is a little bit longer.
        </p>
      </div>
      <div class="card-footer">
      <button type="button" class="btn btn-warning">Read more..</button>
      </div>
    </div>
  </div>
</div>
</div>

               </div>
               
         
              </div>
    
    <Footer/>
    
    </div>
       
    );
}
export default Projectus;