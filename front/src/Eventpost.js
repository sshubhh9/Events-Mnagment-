import React from 'react';
import { useNavigate } from 'react-router-dom';

const Eventpost = ()  => {
  const navigate = useNavigate();
  const sidebarStyle = {
    margin: 0,
    padding: 0,
    width: '200px',
    backgroundColor: '#f1f1f1',
    position: 'fixed',
    height: '100%',
    overflow: 'auto',
  };

  const sidebarLinkStyle = {
    display: 'block',
    color: 'black',
    padding: '16px',
    textDecoration: 'none',
  };

  const activeLinkStyle = {
    backgroundColor: '#04AA6D',
    color: 'white',
  };

  const hoverLinkStyle = {
    backgroundColor: '#555',
    color: 'white',
  };

  const contentStyle = {
    marginLeft: '200px',
    padding: '1px 16px',
    height: '1000px',
  };

  return (

 
    <div>
      <div style={sidebarStyle}>
        <a style={sidebarLinkStyle} href="/Admin" onClick={()=> navigate("/Admin")}>User Events</a>
        <a style={{...sidebarLinkStyle, ...activeLinkStyle}} href="/eventpost" onClick={()=> navigate("/eventpost")}>event Post</a>
        <a style={sidebarLinkStyle} href="/bookedevent" onClick={()=> navigate("/bookedevent")}>Booked Events</a>
        <a style={sidebarLinkStyle} href="/postcategory" onClick={()=> navigate("/postcategory")}>Post Category</a>
        <hr></hr>
           <p className='text-center'>Authentication</p>
           <a style={sidebarLinkStyle} href="/logout" onClick={()=> navigate("/Admin/Logout")}>Logout</a>
      </div>
    
      <div >
      <a style={sidebarLinkStyle} href="#contact">Log out </a>
      </div>
      <div style={contentStyle}>
        <div className='w-25 justify-content-center mx-auto my-0'>
      <div class="mb-3 bg-primary">
  <label for="formFile" class="form-label">Default file input example</label>
  <input class="form-control
"type="file" id="formFile"/>
</div>
<label for="formFile" class="form-label"> Event Start Date</label>
  <input type="date"  placeholder="Event Start Date" class="form-control" aria-label="Username" aria-describedby="basic-addon1"/>
  <label for="formFile" class="form-label">Event End Date</label>
  <input type="date"  placeholder="Event End Date" class="form-control" aria-label="Username" aria-describedby="basic-addon1"/>
  <label for="formFile" class="form-label">Start Time</label>
  <div class="cs-form">
  <input type="time" class="form-control" value="10:05 AM" />
  <label for="formFile" class="form-label">Select Event Category</label>
  <select class="form-select" aria-label="Default select example">
  <option selected>Open this select menu</option>
  <option value="1">One</option>
  <option value="2">Two</option>
  <option value="3">Three</option>
  </select>
  <label for="formFile" class="form-label">Location</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <label for="formFile" class="form-label">Discription</label>
  <textarea class="form-control" aria-label="With textarea"></textarea>
</div>
</div>
</div>
</div>
  );
};

export default Eventpost  ;
