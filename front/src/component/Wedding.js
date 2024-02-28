import React from 'react'
import "../component/Wedding.css";
import imges from '../assets/iamge.jpg';
import { Navigate, useNavigate } from 'react-router-dom'

function Wedding() {
  const Navigate = useNavigate('');
  return (
    <>
        <div className='box bg-dark text-black'>
      <div class="container">
        <div class="row">
          <div class="col w-5  bg-white reletive-position" style={{backgroundImage : `url(${imges})`}}>
           <img src="https://images.yourstory.com/cs/7/3fb20ae02dc911e9af58c17e6cc3d915/Imagefsds-1617892084378.jpg?w=1152&fm=auto&ar=2:1&mode=crop&crop=faces"></img>
            <h3 className='text-center   buttom-50 '>WADDING PARTY</h3>
            <h3 className='text-center   buttom-50 '>10/05/2023</h3>
            <p className='text-center'>🕓 Start 20:00-22:00pm</p>
            <p className='text-center'>💒Good morning all of you</p>
            <div className=''>
            <button className='btn btn-primary '
             onClick={()=> Navigate("/deatail")}>DEATAIL</button></div>
          </div>
          <div class="col bg-white" style={{backgroundImage : `url(${imges})`}}>
         <img src="https://bsmedia.business-standard.com/_media/bs/img/misc/2022-04/17/full/20220414319L.jpg?im=FeatureCrop,size=(826,465)"></img>
          <h3 className='text-center buttom-50 '>WADDING PARTY</h3>
            <h3 className='text-center   buttom-50 '>10/05/2023</h3>
            <p>🕓 Start 20:00-22:00pm</p>
            <p>💒Good morning all of you</p>
          </div>
          <div class="col bg-white" style={{backgroundImage : `url(${imges})`}}>
          <img src='https://media.istockphoto.com/id/1190043570/photo/happy-wedding-photography-of-bride-and-groom-at-wedding-ceremony-wedding-tradition-sprinkled.jpg?s=612x612&w=0&k=20&c=_aCIW5-iOIiaDdqin_50kvBcbFbIxSULHHamPUILE0c='/>
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
export default Wedding