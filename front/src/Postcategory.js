import React from 'react';
import { useNavigate } from 'react-router-dom';

const Postcategory = ()  => {
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
        <a style={{...sidebarLinkStyle}} href="/Admin" onClick={()=> navigate("/Admin")}>User Events</a>
        <a style={sidebarLinkStyle} href="/eventpost" onClick={()=> navigate("/eventpost")}>event Post</a>
        <a style={sidebarLinkStyle} href="/bookedevent" onClick={()=> navigate("/bookedevent")}>Booked Events</a>
        <a style={{...sidebarLinkStyle, ...activeLinkStyle}} href="/postcategory" onClick={()=> navigate("/postcategory")}>Post Category</a>
        <hr></hr>
        <p className='text-center'>Authentication</p>
        <a style={sidebarLinkStyle} href="/logout" onClick={()=> navigate("/Logout")}>Logout</a>
      </div>
      <div >
      <a style={sidebarLinkStyle} href="#contact">Log out </a>
      </div>
      <div style={contentStyle}>
        
        
      </div>
    </div>
  );
};

export default Postcategory  ;
