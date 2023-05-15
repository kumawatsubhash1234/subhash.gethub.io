import React from 'react'
import './Maincontent.css';
import car from './images/kkk.png';
import TopNav from './TopNav';
import { Link } from 'react-router-dom';


export const Maincontent = () => {
  return (
    <>

      <div className='maincons'>


        <div className='box1'>

        <h2>Hi There!</h2>
          <h1>I'm Subhash Kumawat</h1>
          <h3>I Am Passionate Web Developer</h3>
          <h4>Creative Web Developer Offering 1+ Years Of Experience Providing High-Impact Web Solutions For Many Different Organizations.</h4>
          {/* <h1>It could be anywhere.</h1>  */}
         


          <div className="buttons">
    
          <Link to='/Contact' className='inse'><button className="btn-hover color-6">Contact me</button></Link>


   
</div>





        </div>
        <div className='box2'>
          <img src={car} alt='' className='kkk' />
        </div>
      </div>
    </>

  )
}
export default Maincontent;
