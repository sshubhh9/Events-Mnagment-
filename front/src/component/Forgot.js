import React from 'react'

function Forgot() {
  return (
  
  <>
<div class="card text-center container mt-5 w-50" style={{"width": "300px;"}}>
    <div class="card-header h5 text-white bg-primary">Password Reset</div>
    <div class="card-body px-5">
        <p class="card-text py-2">
            Enter your email address and we'll send you an email with instructions to reset your password.
        </p>
        <div class="form-outline ">
            <input type="email" id="typeEmail" class="form-control my-3" />
            <label class="form-label" for="typeEmail">Email input</label>
        </div>
        <a href="/Reset" class="btn btn-primary w-50">Reset password</a>
        <div class="d-flex justify-content-between mt-4">
        <a href="/Login">Login</a>
            <a href="/Register">Register here</a>
            
        </div>
    </div>
</div>
  </>
  )
}

export default Forgot