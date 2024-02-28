import React from 'react';
import { useNavigate } from 'react-router-dom';

const Bookedevents = () => {
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
        <a style={{ ...sidebarLinkStyle }} href="/Admin" onClick={() => navigate("/Admin")}>User Events</a>
        <a style={sidebarLinkStyle} href="/eventpost" onClick={() => navigate("/Eventpost")}>Event Post</a>
        <a style={{ ...sidebarLinkStyle, ...activeLinkStyle }} href="/bookedevent" onClick={() => navigate("/bookedevent")}>Booked Events</a>
        <a style={sidebarLinkStyle} href="/postcategory" onClick={() => navigate("/postcategory")}>Post Category</a>
        <hr></hr>
        <p className='text-center'>Authentication</p>
        <a style={sidebarLinkStyle} href="/logout" onClick={() => navigate("/Admin/Logout")}>Logout</a>
      </div>
      <div >
        <a style={sidebarLinkStyle} href="#contact">Log out </a>
      </div>
      <div style={contentStyle}>
        <div className='justify-content-center w-25 my-0 mx-auto'>

          <div class="mb-3 bg-primary">
            <label for="formFile" class="form-label">Default file input example</label>
            <input class="form-control
"type="file" id="formFile" />
          </div>
          <input type="email" class="form-control" placeholder='Category_name*' id="exampleInputEmail1" aria-describedby="emailHelp" />
          <br></br>
          <input type="email" class="form-control" placeholder='URL*' id="exampleInputEmail1" aria-describedby="emailHelp" />
          <br></br>
          <div class="d-grid gap-2">
            <button class="btn btn-primary" type="button">Post</button>
          </div>
        </div>
      </div>
    </div>

  );
};

export default Bookedevents;
