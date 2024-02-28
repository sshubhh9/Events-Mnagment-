import React from 'react'
import imggg from '../assets/0.breadcrumb-bg.jpg'
import { Navigate, useNavigate } from 'react-router-dom'


function Contact() {
  const Navigate = useNavigate('Home'); 
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
      <div style={{ backgroundImage: `url(${imggg})`, backgroundSize: "cover" }} className=' text-white py-5 harmoni_event'>
        <div className='container text-center'>
          <h3>C O N T A C T    _ US    _ N O W </h3>
          <h1 className='yello text-warning'>KEEP </h1><h1>IN TOUCH</h1>
          
          <div className="d-flex justify-content-center">
            <li className="px-5 " style={{ "listStyle": "none" }}
            onClick={()=> Navigate("/")}>
            Home</li><span class="border border-danger border-right"></span>
            <li className="px-5" style={{ "listStyle": "none" }}>HARMONI</li>
          </div>
        </div>
      </div>
      <div class=" py-5">
        <div class="row justify-content-center align-items-center">
          <div class="col">
            <div class="card" style={{ "border-radius": "1rem" }}>
              <div class="row g-0">
                <div class="col-md-6 col-lg-5 d-none d-md-block">
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnF5OLJKKfHUjW9ZOKhxRsYVe0PQjRjuQzEA&usqp=CAU"
                    alt="login form" class="img-fluid h-100" style={{ "border-radius": "1rem 0 0 1rem" }} />
                </div>
                <div class="col-md-6 col-lg-7 d-flex align-items-center">
                  <div class="card-body p-4 p-lg-5 text-black">

                    <form>

                      <div class="d-flex align-items-center mb-3 pb-1">
                        <span class="h3 fw-bold mb-0 mx-auto my-0"> ☎️Contact</span>
                      </div>


                      <div class="form-outline mb-4">
                        <input type="email" id="form2Example17" class="form-control form-control-lg" placeholder="Name*" />
                      </div>

                      <div class="form-outline mb-4">
                        <input type="email" id="form2Example17" class="form-control form-control-lg" placeholder="Email address*" />
                      </div>

                      <div class="form-outline mb-4">
                        <input type="email" id="form2Example17" class="form-control form-control-lg" placeholder="County*" />
                      </div>

                      <div class="form-outline mb-4">
                        <input type="email" id="form2Example17" class="form-control form-control-lg" placeholder="Phone Number*" />
                      </div>

                      <div class="form-outline mb-4">
                        <input type="password" id="form2Example27" class="form-control form-control-lg" placeholder="Password*" />
                      </div>

                      <div class="pt-1 mb-4 w-50">
                        <button class="btn btn-dark btn-lg btn-block" type="button" >Send</button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="d bg-dark">
        <h1>....</h1>
      </div>
      <div className="aa bg-white text-center text-black">
        <h1>Your Location</h1>
      </div>
      <map>
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d59301.67860147195!2d73.00362989999999!3d21.72776225!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be020a2b22ac421%3A0xa4116c424622fd2a!2sBharuch%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1698216441404!5m2!1sen!2sin" 
                    width="100%" height="200px"></iframe></map>
    </>
  )
}

export default Contact