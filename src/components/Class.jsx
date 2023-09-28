import React from 'react'
import './class.css'

const Class = () => {
  return (
         <div className='firstclass'>
        <div className='secondclass'>
            <img src="./assets/darklyi.png" alt="" className='oneimg'/>
        </div>
        <div className='newclass'>
              <h1 className='book'>Book a class</h1>
              <p className='tra'>Track your workouts, get better results, and be the best
                <br/> version of you. less thinking, more lifting
              </p> 
               <div className='icon1'>
                <img src="./assets/iconp.svg" alt="" className='imgtwo'/>
                <p className='myp'><span>For the beginners</span> <br/> you never workout before.  its now a  <br/>
               good start</p>
              </div>
              <div className='icon2'>
                <img src="./assets/icona.svg" alt="" className='imgtwo'/>
                <p className='vance'><span>Advanced classes</span> <br/>you never workout before.  its now a  <br/>
               good start</p>
              </div>
              <div className='iconthree'>
                <img src="./assets/iconb.svg" alt="" className='imgtwo'/>
                <p className='myp'><span>Premium (limited)</span> <br/> you never workout before. its now a  <br/>
                good start</p>
              </div>
              <div className='pro'>
              <p ><span className='dic'>10% Discount</span> if you're already using the <span className='fit'>Fitness Pro</span> on App Store</p>
              </div>
              <button className='btns'>Book a Class {/* <img src="./assets/vec.svg" alt=""  /> */}
              </button>
           </div>
        </div>
        
  )
}

export default Class