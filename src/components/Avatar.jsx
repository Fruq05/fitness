import React from 'react'
import "./avatar.css"


const Avatar = () => {
  return (
    <div className='border'>
    <div className='boxing-text'>
        <p className='firstp'>TRAIN SMARTER.GET STRONGER</p>
        <p className='secondp'>Simple Fitness <br /> experience for <br /> everyone.</p>
        <p className='thirdp'>Track your workouts get better results, and be the best <br /> 
        version of you. Less thinking, more lifting.</p>
        <button className='button1'>Download App</button>
        <button className='button2'>Book a Class</button>
        <br />
        <img src="./assets/circle-button.svg" alt="" className='img2' />
    </div>
    <div>
        <img src="./assets/1dark.png" alt="" className='img1'/>
    </div>
</div>
  )
}

export default Avatar