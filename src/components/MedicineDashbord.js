import React from "react";
import { Link } from 'react-router-dom';
import logo from '../assests/images/logo.jpg';
import medicine1 from '../assests/images/medicine1.jpeg';
import medicine2 from '../assests/images/medicine2.jpg';
import './Home.css';
function MedicineDashbord() {

  return (
    <div>
      <div>
        <nav class="navbar bg-secondary">Vajraayu
          <div class="container-fluid">
            <img src={logo} alt="Avatar Logo" width="30" height="30" class="rounded-pill" />
            <Link to="/medicine/all" class="btn btn-success btn-rounded">view All Medicine</Link>
            <Link to="/customer/order" class="btn btn-dark btn-rounded">MyOrder</Link>
            <Link to="/customer/details" class="btn btn-success">MyDetails</Link>
            <Link to="/" class="btn btn-warning btn-rounded" >Logout</Link>
            {/* <Link to="/ " class="fa fa-fw fa-user">Logout</Link> */}
            
          </div>
        </nav>
        <p class="typewriter"><h3>Time To Balance Your Life</h3></p>
      </div>
      {/* <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
        <a class="navbar-brand" href="">OnlineAyurvedaMedicine</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <a class="nav-link" href="">Home <span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/AboutUs">AboutUs</a>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                SignIn/SignUp
              </a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <a class="dropdown-item" href="signin">SignIn</a>
                <a class="dropdown-item" href="signup">SignUp</a>

              </div>
            </li>

          </ul>
          <form class="form-inline my-2 my-lg-0">
            <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"></input>
            <button class="btn btn-outline-danger my-2 my-sm-0" type="submit">Search</button>
          </form>
        </div>
      </nav> */}

      {/* <p><Link to="/medicine/all">All Medicines</Link></p> */}
       {/* <p><Link to="/medicine/add">Add medicine</Link></p> */}
      {/* <p><Link to="/customer/add">Add Customer</Link></p>
      <p><Link to="/customer/all">All Customers</Link></p> */}
     <div> 
        <img  src={medicine2} width='1280px' height='555px' 
         />
      </div> 
      

    </div>
  )
}

export default MedicineDashbord;