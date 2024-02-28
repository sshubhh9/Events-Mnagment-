import React, { useState } from 'react';

  function Register() {

    const [name, setname] = useState();
    const [email, setemail] = useState();
    const [gender, setgender] = useState();
    const [phno, setphno] = useState();
    const [password, setpassword,] = useState();
    const [cpassword, setcPassword] = useState();
 


    async function register(e) {
      e.preventDefault();
  
      let items = { name, email, gender, phno, password, cpassword };
  
      let ans = await fetch("http://localhost:2020/register", {
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
      alert('register successful')
  console.log("Successfully")
       
 
// }else{
//   alert("please fill the details")
      }
    }
    
  return (


    
    <>
    <section  style={{"background-color": "white"}}>
  <div class="container h-100 bg-white">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col-lg-12 col-xl-11">
        <div class="card text-black" style={{"border-radius": "25px;"}}>
          <div class="card-body p-md-5">
            <div class="row justify-content-center">
              <div class="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                <p class="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4" >Sign up</p>

                <form class="mx-1 mx-md-4">
                  <div class="d-flex flex-row align-items-center mb-4">
                    <i class="fas fa-user fa-lg me-3 fa-fw"></i>
                    <div class="form-outline flex-fill mb-0">
                      <input type="text" id="form3Example1c" class="form-control"   value={name}
                       onChange={(e) => setname(e.target.value)}  />
                      name
                    </div>
                  </div>

                  <div class="d-flex flex-row align-items-center mb-4">
                    <i class="fas fa-envelope fa-lg me-3 fa-fw"></i>
                    <div class="form-outline flex-fill mb-0">
                      <input type="email" id="form3Example3c" class="form-control"
                      value={email}
                      onChange={(e) => setemail(e.target.value)}  />
                    email
                    </div>
                  </div>
                  <div class="d-flex flex-row align-items-center mb-4">
                    <i class="fas fa-envelope fa-lg me-3 fa-fw"></i>
                    <div class="form-outline flex-fill mb-0">
                      <input type="email" id="form3Example3c" class="form-control"
                      value={gender}
                      onChange={(e) => setgender(e.target.value)}  />
                      gender
                    </div>
                  </div>
                  <div class="d-flex flex-row align-items-center mb-4">
                    <i class="fas fa-envelope fa-lg me-3 fa-fw"></i>
                    <div class="form-outline flex-fill mb-0">
                      <input type="number" id="form3Example3c" class="form-control" 
                       value={phno}
                       onChange={(e) => setphno(e.target.value)} 
                      />
                      Phno
                    </div>
                  </div>

                  <div class="d-flex flex-row align-items-center mb-4">
                    <i class="fas fa-lock fa-lg me-3 fa-fw"></i>
                    <div class="form-outline flex-fill mb-0">
                      <input type="password" id="form3Example4c" class="form-control"
                      value={password}
                      onChange={(e) => setpassword(e.target.value)} 
                      />
                     password
                    </div>
                  </div>

                  <div class="d-flex flex-row align-items-center mb-4">
                    <i class="fas fa-key fa-lg me-3 fa-fw"></i>
                    <div class="form-outline flex-fill mb-0">
                      <input type="password" id="form3Example4cd" class="form-control" 
                       value={cpassword}
                       onChange={(e) => setcPassword(e.target.value)} 
                      />
                           cpassword
                    </div>
                  </div>

                  <div class="form-check d-flex justify-content-center mb-5">
                    <input class="form-check-input me-2" type="checkbox" value="" id="form2Example3c" />
                   
                      I agree all statements in <a href="#!">Terms of service</a>
                    
                  </div>

                  <div class="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                    <button type="button" class="btn btn-primary btn-lg" onClick={register}>Register</button>
                  </div>

                </form>

              </div>
              <div class="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">

                <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                  class="img-fluid" alt="Sample image"/>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
    </> 
    
//(ans.success == 1) {
//         alert('register successful')
//     console.log("Successfully")
         
   

//       }
  )
 }

export default Register 
