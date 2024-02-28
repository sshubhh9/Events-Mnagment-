import React from 'react';
import { useNavigate } from 'react-router-dom';

const Userlist = ()  => {
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
        <a style={{...sidebarLinkStyle, ...activeLinkStyle}} href="/Admin" onClick={()=> navigate("/Admin")}>User Events</a>
        <a style={sidebarLinkStyle} href="/eventpost" onClick={()=> navigate("/Eventpost")}>Event Post</a>
        <a style={sidebarLinkStyle} href="/bookedevents" onClick={()=> navigate("/bookedevents")}>Booked Events</a>
        <a style={sidebarLinkStyle} href="/postcategory" onClick={()=> navigate("/postcategory")}>Post Category</a>
        <hr></hr>
        <p className='text-center'>Authentication</p>
      </div>
      <div >
      <a style={sidebarLinkStyle} href="#contact">Log outt </a>
      </div>
      <div style={contentStyle}>
        
        <h3>Resize the browser window to see the effect.</h3>
        <h1>jbb</h1>
      </div>
    </div>
  );
};

export default Userlist  ;
