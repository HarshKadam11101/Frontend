
import 'bootstrap/dist/css/bootstrap.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { userDispatch } from 'react-redux';
import { Link } from "react-router-dom";

import React, { useState } from 'react';

//class Header extends React.Component{
  const Header = (props) => {
  
   // render(){
        return(
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <Link className="navbar-brand" to={"/"}><h2>Rent Car</h2></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to={"/"} >Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" to={"/login"}>Login</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" to={"/register"}>Register</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" to={"/carlist"}>Cars</Link>
        </li>  
      </ul>
    </div>
    <form className="d-flex" >
      
    <Link className="nav-link active text-light" to={"/about"}>About Us</Link>
    </form>
    
  </div>
</nav>
        )
    }

//}
export default Header;