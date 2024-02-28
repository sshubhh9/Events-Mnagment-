import React from 'react'
import "../component/Gallary.css";
import imggg from '../assets/0.breadcrumb-bg.jpg'
import { Navigate, useNavigate } from 'react-router-dom'
import image3 from '../assets/gallary/3.image.jpg'
import image4 from '../assets/gallary/4.image.jpg'
import image5 from '../assets/gallary/5.image.jpg'
import image6 from '../assets/gallary/6.image.jpg'
import image7 from '../assets/gallary/7.image.jpg'
import image8 from '../assets/gallary/8.image.jpg'


function Gallary() {
  const Navigate = useNavigate('Home');
  return (
    <>
      <div style={{ backgroundImage: `url(${imggg})`, backgroundSize: "cover" }} className=' text-white py-5 harmoni_event'>
        <div className='container text-center'>
          <h3>HARMONI    EVENTS </h3>
          <h1 className='oop text-dark'>HARMONI </h1>
          <h1>Gallary</h1>

          <div className="d-flex justify-content-center">
            <li className="px-5 " style={{ "listStyle": "none" }}
              onClick={() => Navigate("/")}>
              Home</li><span class="border border-danger border-right"></span>
            <li className="px-5" style={{ "listStyle": "none" }}>HARMONI</li>
          </div>
        </div>
      </div>
      <div className="12 bg-dark">
        <h5>...</h5>
      </div>
      <div className='44  text-center px-3'>
        <h2>....✦✦Our Gallary✦✦....</h2>
      </div>
      <div className='bg-dark text-white'>
        <div className='container py-3'>
          <div className='row'>
            <div className='col-md-6 col-sm-12'>
              <img src={image3} style={{ "width": "100%", "height": '300px' }} />
            </div>
            <div className='col-md-6 col-sm-12'>
              <img src={image4} style={{ "width": "100%", "height": '300px' }} />
            </div>
          </div>
          <div className='row'>
            <div className='col-md-6 col-sm-12'>
              <img src={image5} style={{ "width": "100%", "height": '300px' }} />
            </div>
            <div className='col-md-6 col-sm-12'>
              <img src={image6} style={{ "width": "100%", "height": '300px' }} />
            </div>
          </div>
          <div className='row'> 
            <div className='col-md-6 col-sm-12 position-relative'>
              <div>
                <img src={image7} style={{ "width": "100%", "height": '300px' }} />
              </div>
              <div className='position-absolute top-75'>
              </div>
            </div>
            <div className='col-md-6 col-sm-12 position-relative'>
              <img src={image8} style={{ "width": "100%", "height": '300px' }} />
            </div>
          </div>
        </div>
      </div>
      <map>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d59301.67860147195!2d73.00362989999999!3d21.72776225!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be020a2b22ac421%3A0xa4116c424622fd2a!2sBharuch%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1698216441404!5m2!1sen!2sin"
          width="100%" height="200px"></iframe></map>

      {/* <div className='black bg-warning d-flex'>
        <h1 className='text-dark text-aling-center d-flex'>30%Off in junejuly~ For Birthday Events</h1>
                <button class="btn btn-success btn-lg float-right d-flex"
                        type="submit">
                     Submit 
                </button>
            
      </div> */}
      <div className='black bg-warning justify-content-center pt-5 d-flex'>
      <h1 className='text-dark text-aling-center d-flex'>30%Off in junejuly~ For Birthday Events</h1>
     <button className='maxg'>click</button>
      </div>
      <div className="text-center bg-primary py-4">
        <h1>Do You Want to Step in to the
          <br />
          future of Your Upcoming Event</h1>
        <br />
        <br />
        <br />
        <button className='btn border-white py-2 text-white'>
          Request Early Acceess
        </button>
        <div className="row pt-5 text-white">
          <div className="col-lg-4 col-sm-12">

            <p>Crechrwoord 182 Dk Alknkcb</p>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            Get in touch
            <br />
            <br />
            Crechrwoord K12 182 DK Alknjkcd
            <br />
            085-132567
            <br />
            info@payme.net
          </div>
          <div className="col-lg-4 col-sm-12">
            <p>Links</p>
            <p>Overons</p>
            <p>Social Media</p>
            <p>Contact</p>
            <p>Counters</p>

          </div>
          <div className="col-lg-4 col-sm-12">
            <p>
              Compny  </p>
            <p>Teams & Condition</p>
            <p>Privacy Policy </p>
            <p>Contact</p>
          </div>
        </div>

      </div>

     

    </>
  )
}
export default Gallary