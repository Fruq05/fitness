import React from 'react'
import "./experience.css"

const Experience = () => {
  return (
    <div className='firstwrk'>
        <div className='wrk2'>
            <p className='new'>New workouts added every week</p>
            <p className='fitness'>A new fitness experience <br/> for everyone</p>
        </div>

        <div className='fit2'>
            <div >
            <img src="./assets/icon 48.svg" alt=""  className='forty'/>
            <p className='keep'>Keep track of calories and <br/>macros</p>
            <p>Fitness Pro helps track your workouts, get better results, and be the best version of you. Less thinking!</p>
            </div>
            <div>
            <img src="./assets/divider.png" alt="" className='divider'/>
            </div>
            <div>
            <img src="./assets/icon 49.svg" alt="" className='forty'/>
            <p className='keep'>Access all premium class of <br/>Fitness Pro</p>
            <p>Fitness Pro helps track your workouts, get better results, and be the best version of you. Less thinking!</p>
            </div>
            <div>
            <img src="./assets/divider.png" alt="" className='divider'/>
            </div>
            <div>
            <img src="./assets/icon 50.svg" alt="" />
            <p className='keep'>Keep track of calories and <br/>macros</p>
            <p>Fitness Pro helps track your workouts, get better results, and be the best version of you. Less thinking!</p>
            </div>
        </div>
    </div>
  )
}

export default Experience