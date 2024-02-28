import React from 'react'
import imggg from '../assets/0.breadcrumb-bg.jpg'
import { Navigate, useNavigate } from 'react-router-dom'
import imgg from '../assets/About/company-age-bg.jpg'
import img2 from '../assets/About/company-banner.png'
import "../component/About.css";
function About() {
  const Navigate = useNavigate('Home'); 
  return (
    <>

<div style={{ backgroundImage: `url(${imggg})`, backgroundSize: "cover" }} className=' text-white py-5 harmoni_event'>
        <div className='container text-center'>
          <h3>ALL YOU NNED TO 
            <br />KNOW</h3>
          <h1 className='yello text-warning'>ABOUT</h1>
          <h1>HARMONI</h1>
         
          <div className="d-flex justify-content-center">
            <li className="px-5 " style={{ "listStyle": "none" }}
            onClick={()=> Navigate("/")}>
            Home</li><span class="border border-danger border-right"></span>
            <li className="px-5" style={{ "listStyle": "none" }}>HARMONI</li>
          </div>
        </div>
      </div>
      <div className="asd bg-dark bg-gradient">
        <div className='container '>
          <div className="row pt-5 text-white">
            <div className="col-lg-4 col-sm-12">
              <p><b>we are Harmoni</b></p>
              <h2>NO.1 Events
                <br /> Management</h2>
              <p>get started!</p>
            </div>
            <div className="col-lg-4 col-sm-12">
              <h2>our mission</h2>
              <p>
                Lorem ipsum dolor site amet the best consectuer adipiscing elites sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat insignia the consectuer adipiscing elit.
                <br />
                <br /><b>Lorem ipsum dolor site amet the best consectuer adipiscing elites sed diam nonummy nibh euismod.</b>
              </p>
            </div>
            <div className="col-lg-4 col-sm-12 f-flex">
              <h2>Our Vission</h2>
              <p>
                Lorem ipsum dolor site amet the best consectuer adipiscing elites sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat insignia the consectuer adipiscing elit.
                <br />
                <br /><b>Lorem ipsum dolor site amet the best consectuer adipiscing elites sed diam nonummy nibh euismod.</b>
              </p>
            </div>
          </div>
        </div>
        <div className='container'>
          <div class='row'>
            <div class='col-6'>
              <div className='container position-relative ' style={{ backgroundImage: `url(${imgg})`, height: '700px', width: '99%', backgroundRepeat: 'no-repeat' }}>
                <img src={img2} className='position-absolute end-30 d-flex ' style={{ "width": "80%", "height": "90%" }}></img>
              </div>
            </div>
            <div class='col-6'>
              <p>Harmoni awaed</p>
              <h1>Our Winning Awards</h1>
              

              <div class="vl">
                <br />
                <br />
                <div class="vl-right">
              
                <h2> <span className='brbrbr '>AUG 2015</span>
                </h2>
                <div class="brbr d-flex">
                <p className='d-flex text-light'>   <br />1st place of unique Events  
                <br />
                2018
                <br />
                Lorem Ipsum is simply dummy text of 
                <br />the printing and typesetting industry.
                </p>
                <br />
              
                </div>
                </div>
                <br />
                <br />
              
              
                <div className='d-flex'>
                <h2> <span className='brbrbr '>AUG 2015</span>
                </h2>  
                <div class="brbr d-flex">
                <p className='d-flex text-light'>   <br />1st place of unique Events  
                <br />
                2018
                <br />
                Lorem Ipsum is simply dummy text of 
                <br />the printing and typesetting industry.
                </p>
                <br />
              
                </div>
                   </div>
                   
                   <br />
              
                
                
                <div className='d-flex'>
                <h2> <span className='brbrbr'>AUG 2015</span>
                </h2>
                <h4 className='text-white'>
                <br />1st place of unique Events  
                <br />
                </h4>
                   </div>
              </div>
            </div>
          </div>
        </div>

        <div className='container d-flex '>
          <div className="col-lg-4 col-sm-12 bg-white d-flex" >
          </div>        </div>
        <div class="container text-black ">
          <div class="row">
            <div class="col  p-4 bg-white">
              <p>Study with us </p>
              <p>
                visit our world class facillty
                for bsouth African Scienist
                and Spectrum
              </p>
            </div>
            <div class="col p-4 bg-white">
              <p>Study with us </p>
              <p>
                visit our world class facillty
                for bsouth African Scienist
                and Spectrum
              </p>
            </div>
            <div class="col  p-4 bg-white">
              <p>Study with us </p>
              <p>
                visit our world class facillty
                for bsouth African Scienist
                and Spectrum
              </p>
            </div>
            <div class="col p-4 bg-white">
              <p>Study with us </p>
              <p>
                visit our world class facillty
                for bsouth African Scienist
                and Spectrum
              </p>
            </div>
          </div>
        </div>
        <div class="container text-black ">
          <div class="row">
            <div class="col  p-4 bg-white">
              <p>Study with us </p>
              <p>
                visit our world class facillty
                for bsouth African Scienist
                and Spectrum
              </p>
            </div>
            <div class="col  p-4 bg-white">
              <p>Study with us </p>
              <p>
                visit our world class facillty
                for bsouth African Scienist
                and Spectrum
              </p>
            </div>
            <div class="col p-4  bg-white">
              <p>Study with us </p>
              <p>
                visit our world class facillty
                for bsouth African Scienist
                and Spectrum
              </p>
            </div>
            <div class="col p-4 bg-white">
              <p>Study with us </p>
              <p>
                visit our world class facillty
                for bsouth African Scienist
                and Spectrum
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center bg-primary py-5">
        <h1>Do You Want to Step in to the
          <br />
          future of Your Upcoming Event</h1>
        <br />
        <br />
        <br />
        <button className='btn border-white py-3 text-white'>
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

export default About