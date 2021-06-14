import React from 'react';
import Slider from '../inc/Slider';
import {Link} from 'react-router-dom';
import Transportation from '../inc/transportation';
import Special from '../inc/Special';
import Footer from '../inc/Footer';
import Reach from '../inc/Reach';




function Home() {
  return(
      <div>
      <Slider/>
      

      <Transportation/>
      <Special/>
      
      <Reach/>
      <Footer/>
      

   </div>
   )

 }

export default Home;