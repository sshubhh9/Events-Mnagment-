import React from 'react'
import "../component/Event.css";
import { Outlet, useNavigate } from 'react-router-dom'
import imggg from '../assets/0.breadcrumb-bg.jpg'


function Event() {
  const Navigate = useNavigate();

  return (
    <>
      <style>
        {`
        .harmoni_event {
          backgroundImage: url(${imggg}),
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover'
          }`

        }

      </style>
      <div style={{ backgroundImage: `url(${imggg})`, backgroundSize: "cover", width: "100%", height: "250px" }} className="grid justify-center bg-no-repeat opacity-90 bg-center bg-cover">

        <div className='container'>
          <div className="row pt-5  ">
            <div className="col-lg-4 col-sm-12">

            </div>
            <div className="col-lg-4 col-sm-12 text-white ">
              <h4><samp><b>ALL YOU NEED TO
                <br />KNOW</b></samp></h4>
              <h1 className='yello text-warning'><b>Events</b></h1>

              <div className="d-flex text-white">
                <li className="px-5 " style={{ "listStyle": "none" }}
                  onClick={() => Navigate("/")}>
                  <b> Home</b></li><span class="border border-danger border-right"></span>
                <li className="px-5" style={{ "listStyle": "none" }}><b>HARMONI</b></li>
              </div>
            </div>
            <div className="col-lg-4 col-sm-12">

            </div>
          </div>
        </div>
      </div>
      <div className="bg-dark text-white justify-content-center d-flex p-3">

        <li className='mx-5 border rounded' style={{ "listStyle": 'none' }}
          onClick={() => Navigate('/event/category')}>Category</li>
        <li className='mx-5  border rounded' style={{ "listStyle": 'none' }}
          onClick={() => Navigate('/event/wedding')}>Wedding</li>
        <li className='mx-5  border rounded' style={{ "listStyle": 'none' }}
          onClick={() => Navigate('/event/Birthday')}>Birthday PARTY</li>
        <li className='mx-5  border rounded ' style={{ "listStyle": 'none' }}
          onClick={() => Navigate('/event/Sport')}>SPORTS EVENTS</li>
      </div>
      <Outlet />
    </>
  )
}

export default Event