import React from 'react'
import "./banner.css"



const Banner = () => {
  return (
    <div className='banner'>
        <p className='bannerText'>We work with people from over the world</p>
        
        <div className='bannerContainer'>
            <div>
                <img src="./assets/logo 01.svg" alt="" />
            </div>
            <div>
                <img src="./assets/logo 02.svg" alt="" />
            </div>
            <div>
            <img src="./assets/logo 03.svg" alt="" />
            </div>
            <div>
                <img src="./assets/logo 04.svg" alt="" />
            </div>
            <div>
                <img src="./assets/logo 05.svg" alt="" />
            </div>
            <div>
                <img src="./assets/logo 06.svg" alt="" />
            </div>
        </div>


        
     <div>
             <div>
                <div className='texts'>
                    <h1>How it work</h1>
                </div>

                <div className='text'>
                    <p>Stocks is a production-ready library of stockable content blocks <br /> built in React Native.</p>
                </div>
            </div>
       
    

            <div>
                <div className='iconLink'>
                    <img src="./assets/icon1.svg" alt="" />
                    <img src="./assets/connect line.svg" alt="" />
                    <img src="./assets/icon2.svg" alt="" />
                    <img src="./assets/connect line.svg" alt="" />
                    <img src="./assets/icon3.svg" alt="" />
                    <img src="./assets/connect line.svg" alt="" />
                    <img src="./assets/icon4.svg" alt="" />
                </div>

                <div className='steps'>
                    <div>
                        <header className='sp2'>Step 1</header>

                         <h2>Download</h2>

                        <p className='myp'>Fitness Pro tracks your workouts, get better results, and be the best version of you</p>
                    </div>

                    <div>
                         <header className='sp2'>Step 2</header>

                        <h2>Choose your trainer</h2>

                        <p className='myp'>Fitness Pro tracks your workouts, get better results, and be the best version of you.</p>
            
                    </div>

                    <div>
                        <header className='sp2'>Step 3</header>

                        <h2>Set the goals</h2>

                        <p className='myp'>Fitness Pro tracks your workouts, get better results, and be the best version of you.</p>

                    </div>

                    <div>
                        <header>Step 4</header>

                        <h2>Workut time</h2>

                        <p className='myp'>Fitness Pro tracks your workouts, get better results, and be the best version of you.</p>

                    </div>
                </div>
            </div>
        </div>
       
    </div>
  )
}

export default Banner