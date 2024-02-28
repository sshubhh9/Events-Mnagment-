import React from 'react'

function Reset() {
  return (
    <>
    <div class="card text-center container  bg-dark mt-5 w-50" style={{"width": "300px;"}}>
    <div class="card-header h5 text-white bg-dark">Password Reset</div>
    <div class="card-body px-5">
        <p class="card-text   text-white py-2">
            Enter your current password and we'll send you an conform password with instructions to reset your password.
        </p>
        <div class="form-outline text-white">
            <input type="email" id="typeEmail" class="form-control my-3" />current password
            <input type="email" id="typeEmail" class="form-control my-3" />Password
            <input type="email" id="typeEmail" class="form-control my-3" />conform Password
            <label class="form-label" for="typeEmail">Email input</label>
        </div>
        <a href="/Reset" class="btn btn-primary   text-dark bg-white  w-50">Reset password</a>
        <div class="d-flex justify-content-between   text-white  mt-4">
        <a href="/Login">Login</a>
            <a href="/Register">Register here</a>
            
        </div>
    </div>
</div>
    </>
  )
}

export default Reset