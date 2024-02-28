import React from 'react'
import imges from '../assets/iamge.jpg';
import { Navigate, useNavigate } from 'react-router-dom'

function Sport() {
  const Navigate = useNavigate('');
  return (
    <>
       <div className='box bg-dark text-black'>
      <div class="container">
        <div class="row">
          <div class="col w-5  bg-white reletive-position" style={{backgroundImage : `url(${imges})`}}>
            <img class="rounded-5" src='https://www.insidesport.in/wp-content/uploads/2020/04/aaa-1.jpg'></img>
            <h3 className='text-center   buttom-50 '>WADDING PARTY</h3>
            <h3 className='text-center   buttom-50 '>10/05/2023</h3>
            <p className='text-center'>🕓 Start 20:00-22:00pm</p>
            <p className='text-center'>💒Good morning all of you</p>
            <div className=''>
            <button className='btn btn-primary '
             onClick={()=> Navigate("/deatail")}>DEATAIL</button></div>
          </div>
          <div class="col bg-white" style={{backgroundImage : `url(${imges})`}}>
          <img  src="https://www.redasiainsurance.com/wp-content/uploads/2022/02/Sports-events-insurance-Main-scaled-e1644805433386.jpg"></img>
          <h3 className='text-center buttom-50 '>WADDING PARTY</h3>
            <h3 className='text-center   buttom-50 '>10/05/2023</h3>
            <p>🕓 Start 20:00-22:00pm</p>
            <p>💒Good morning all of you</p>
          </div>
          <div class="col bg-white" style={{backgroundImage : `url(${imges})`}}>
          <img src='https://cdn.bleacherreport.net/images_root/slides/photos/000/870/060/Fifa_World_Cup_2010_Champions_Spain_31142_original.jpg?1303139682'></img>
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

export default Sport