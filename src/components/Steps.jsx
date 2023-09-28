import React from 'react'
import './steps.css'

const Steps = () => {
  return (
    <div className='border'>
        <div className='boxing-text'>
            <h1>Train Smarter,</h1>
            <h1>get stronger.</h1>
            <p>Fitness Pro helps track your workouts, get better results, and be the best version of you. Less thinking, more lifting 🔥🏀</p>
            <button className='button'><span>Start free trial</span></button>
        </div>
        <div>
            <img src="./assets/image.png" alt="" className='img1'/>
        </div>
    </div>
  )
}

export default Steps