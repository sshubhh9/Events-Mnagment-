import React from 'react'
import imges from '../assets/iamge.jpg';
import "../component/Birthday.css";
import { Navigate, useNavigate } from 'react-router-dom'

function Birthday() {
  const Navigate = useNavigate('');
  return (
    <>
        <div className='box bg-dark text-black'>
      <div class="container">
        <div class="row">
          <div class="col w-5  bg-white reletive-position" style={{backgroundImage : `url(${imges})`}}>
           <img src="https://res.cloudinary.com/hz3gmuqw6/image/upload/c_fill,f_auto,q_60,w_750/v1/goldenapron/63d2fc869c60e"></img>
            <h3 className='text-center   buttom-50 '>WADDING PARTY</h3>
            <h3 className='text-center   buttom-50 '>10/05/2023</h3>
            <p className='text-center'>🕓 Start 20:00-22:00pm</p>
            <p className='text-center'>💒Good morning all of you</p>
            <div className=''>
            <button className='btn btn-primary '
             onClick={()=> Navigate("/deatail")}>DEATAIL</button></div>
          </div>
          <div class="col bg-white" style={{backgroundImage : `url(${imges})`}}>
         <img src="https://d1ljk4x3je7yy3.cloudfront.net/images/Party-planning-birthday-party.original.original.jpg"></img>
          <h3 className='text-center buttom-50 '>WADDING PARTY</h3>
            <h3 className='text-center   buttom-50 '>10/05/2023</h3>
            <p>🕓 Start 20:00-22:00pm</p>
            <p>💒Good morning all of you</p>
          </div>
          <div class="col bg-white" style={{backgroundImage : `url(${imges})`}}>
          <img src='https://media.istockphoto.com/id/1421627943/photo/colorful-birthday-cake-with-sprinkles-and-burning-candles-and-festive-caps-on-the-sparkling.webp?b=1&s=170667a&w=0&k=20&c=z8tqkDVBzWE4V0ZM2c4IP_MoDM8XMDmuOXqpR6dtBTA='/>
          <h3 className='text-center buttom-50 '>WADDING PARTY</h3>
            <h3 className='text-center   buttom-50 '>10/05/2023</h3>
            <p>🕓 Start 20:00-22:00pm</p>
            <p>💒Good morning all of you</p>
          </div>
        </div>
        </div>
        </div>
   </>
  )
}

export default Birthday