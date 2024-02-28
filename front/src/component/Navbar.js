import React from 'react';
import "../component/Navbar.css";
import logo from '../assets/1.site-logo.png'
import main from '../assets/abstract-art-celebration-crowd.jpg';
import { useNavigate } from 'react-router-dom';

function Navbar() {
    const navigate = useNavigate();

    return (
        <>
        <style>
{
    `
    .logo{
        
    }
    .main {
        background-image: url(${main})
    }
    .main{
        background-size: 100% 100%;
        background-repeat: no-repeat
    }
  

    .custom-padding {
        padding-right: 550px;
        line-height: 25px;
      }`
}
</style>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container">
                    <a className="navbar-brand" href="/">
                    <img src={logo}></img>
                    </a>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <a className="nav-link" href="/" onClick={() => navigate("/")}>HOME</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/about" onClick={() => navigate("/about")}>ABOUT</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/event/category" onClick={() => navigate("/event/category")}>EVENTS</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/gallary" onClick={() => navigate("/gallary")}>GALLERY</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/contact" onClick={() => navigate("/contact")}>CONTACT</a>
                            </li>
                        </ul>
                        <button className="btn btn-secondary px-5" onClick={() => navigate("/login")}>Signin</button>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Navbar;


