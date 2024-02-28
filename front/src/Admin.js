import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';


const Admin = ()  => {
  const[userdetail,setUserDetail] = useState("");

  const Getsignup = async() =>{
    console.log(userdetail);
    fetch("http://localhost:2020/Allusers")
    .then((response)=>{
      if(!response.ok){
        throw new Error("error show");

      }
      return response.json();
    })
    .then((userdetail)=>{
      if(userdetail){
        setUserDetail(userdetail);
      } else{
        console.log("error");
      }
    })
    .catch((error)=>{
      console.log("error fetching data",error);
    })
  }

  useEffect(()=>{
    Getsignup();
  },[])
 
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
        <a style={{...sidebarLinkStyle, ...activeLinkStyle}} href="/Admin">User Events</a>
        <a style={sidebarLinkStyle} href="/eventpost" onClick={()=> navigate("/Admin/eventpost")}>
          event Post</a>
        <a style={sidebarLinkStyle} href="/bookedevent" onClick={()=> navigate("/Admin/bookedevent")}>Booked Events</a>
        <a style={sidebarLinkStyle} href="/Postcategory" onClick={()=> navigate("/Admin/Postcategory")}>Post Category</a>
        <hr></hr>
        <p className='text-center'>Authentication</p>
        <a style={sidebarLinkStyle} href="/eventpost" onClick={()=> navigate("/Admin/eventpost")}>Logout</a>
      </div>
      <div >
      <a style={sidebarLinkStyle} href="#contact"onClick={()=> navigate("/Home")}>Log out </a>
      </div>
      <div style={contentStyle}>
      <table class="table">
  <thead>
    <tr>
      <th class="cole d-flex">
      <div class="col">id</div>
      <div class="col">Name</div>
      <div class="col">Email</div>
      <div class="col">Gender</div>
      <div class="col">Phone</div>
      </th>
      
    </tr>
  </thead>
  <tbody>
    {userdetail
     ?userdetail.users.map((ele,i)=>{
      return (
        <div class="row" key={i}>
          <div id="/enterlist" class="col">
            {ele.id}
          </div>
          <div class="col">{ele.name}</div>
          <div class="col">{ele.email}</div>
          <div class="col">{ele.gender}</div>
          <div class="col">{ele.phno}</div>
        </div>
      );
     }):null
     }
  </tbody> 
</table>
      </div>
    </div>
  );
}
 
export default Admin  ;