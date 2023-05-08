import React from 'react'
import './Maincontent.css';
import car from  './images/kkk.png';

export const Maincontent = () => {
  return (
    <>
    
    <div className='maincons'>
      
      
        <div className='box1'>
          
         <h1>Introducing yourself in English can be a daunting task.</h1>
         <h3>You may be asked to do this in a job interview or in the IELTS test in Part One. You could also be asked to me..</h3>
          {/* <h1>It could be anywhere.</h1>  */}

          
        </div>
        <div className='box2'>
        <img src={car} alt='' className='kkk'/>
        </div>
      </div>
        </>
    
  )
}
export default Maincontent;
