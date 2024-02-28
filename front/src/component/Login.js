import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


export default function Login(){
    const Navigate = useNavigate();
    
    return (
        <>
            <section className="bg-image" style={{ backgroundImage: 'url("https://t4.ftcdn.net/jpg/04/60/71/01/360_F_460710131_YkD6NsivdyYsHupNvO3Y8MPEwxTAhORh.jpg")' }}>
                <div className="container py-5">
                    <div className="row justify-content-center align-items-center">
                        <div className="col-xl-10">
                            <div className="card" style={{ borderRadius: "1rem" }}>
                                <div className="row g-0">
                                    <div className="col-md-6 col-lg-5 d-none d-md-block">
                                        <img
                                            src="https://images.unsplash.com/photo-1432821596592-e2c18b78144f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bG9naW58ZW58MHx8MHx8fDA%3D&w=1000&q=80"
                                            alt="login form"
                                            className="img-fluid h-100"
                                            style={{ borderRadius: "1rem 0 0 1rem" }}
                                        />
                                    </div>
                                    <div className="col-md-6 col-lg-7 d-flex align-items-center">
                                        <LoginForm />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    );



function LoginForm() {

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();


    async function logins(e) {
      e.preventDefault();
  
      let items = { email, password };
  
      let ans = await fetch("http://localhost:2020/signin", {
        method: "POST",
        body: JSON.stringify(items),
        headers: {
          "Content-type": "application/json",
          Accept: "application/json",
        },
      });

   
      ans = await ans.json();
      console.log(ans, "ans");
      if (ans.success == 1) {
      alert('Login successful')
      Navigate("/");
  console.log("Successfully")

   
       
 
      }else{
        alert("Failed to login")
      }
    }
  

     

    return (
        <div className="card-body p-4 p-lg-5 text-black">
            <form>
                <div className="d-flex align-items-center mb-3 pb-1">
                    <span className="h3 fw-bold mb-0 mx-auto my-0">Login</span>
                </div>
                <h5 className="fw-normal mb-3 pb-3" style={{ letterSpacing: "1px" }}>Sign into your account</h5>
                <div className="form-outline mb-4">
                    <input type="email" id="form2Example17" className="form-control form-control-lg" placeholder="Email address"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="form-outline mb-4">
                    <input type="password" id="form2Example27" className="form-control form-control-lg" placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)} />
                </div>
                <div className="pt-1 mb-4">
                    <button className="btn btn-dark btn-lg btn-block" type="button" onClick={logins}>Login</button>
                </div>
                <a href="Forgot">Forgot password?</a>
                <p className="mb-5 pb-lg-2" style={{ color: "#393f81" }}>Don't have an account? <a href="/Register">Register here</a></p>
            </form>
        </div>
    );
}

function Footer() {
    return (

        <div className="text-center bg-dark py-5 text-primary text-white">
            <h1>Do You Want to Step into the future of Your Upcoming Event</h1>
            <button className="btn border-white py-3 text-white">Request Early Access</button>
            <div className="row pt-5 text-light">
                <div className="col-lg-4 col-sm-12 text-light">
                    <p>Crechrwoord 182 Dk Alknkcb</p>
                    <p>Get in touch</p>
                    <p>Crechrwoord K12 182 DK Alknjkcd</p>
                    <p>085-132567</p>
                    <p>info@payme.net</p>
                </div>
                <div className="col-lg-4 col-sm-12 text-light">
                    <p>Links</p>
                    <p>Overons</p>
                    <p>Social Media</p>
                    <p>Contact</p>
                    <p>Counters</p>
                </div>
                <div className="col-lg-4 col-sm-12">
                    <p>Company</p>
                    <p>Terms & Conditions</p>
                    <p>Privacy Policy</p>
                    <p>Contact</p>
                </div>
            </div>
        </div>
    );
    }
}

