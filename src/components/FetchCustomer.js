import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import logo from '../assests/images/logo.jpg';


function FetchCustomer() {

    const [customer, setCustomers] = useState(null);
    
    const user = JSON.parse(localStorage.getItem("loginuser"));
    console.log(user);

    useEffect(() => {
        axios.get("http://localhost:8080/customer/" + user.id).then(resp => setCustomers(resp.data));
    }, [user.id]);

    return (
        <div className="container" style={{
            backgroundColor: "lightblue", alignItems: 'center',
            justifyContent: 'center'
        }}>
            <nav class="navbar bg-secondary ">
                <div class="container-fluid">
                    <img src={logo} alt="Avatar Logo" width="30" height="30" class="rounded-pill" />
                    <Link to = "/medicine/all" class="btn btn-primary">Back to medicines</Link>
                    <Link to="/" class="fa fa-fw fa-user" >Logout</Link>
                </div>
            </nav>
            <h2 style={{color: 'midnightblue',textAlign: "center"}}
            >Customer Details</h2>
            {
                customer != null &&
                <div style={{color: 'black',alignItems: 'center',justifyContent: 'center',textAlign: "center"}}>
                    <p> id : {customer.id} </p>
                    <p> username : {customer.username} </p>
                    <p> password : {customer.password} </p>
                    <p> firstName: {customer.firstName}</p>
                    <p> lastName: {customer.lastName}</p>
                    <p> email : {customer.email}</p>
                    <p> mobile : {customer.mobile} </p>
                    <p> houseNo : {customer.address.houseNo}</p>
                    <p> city : {customer.address.city} </p>
                    <p> state : {customer.address.state}</p>
                    <p> pincode : {customer.address.pincode}</p>
                </div>
            }
            <div style={{color: 'red',alignItems: 'center',justifyContent: 'center',textAlign: "center"}}>
                <Link to="/customer/update" className="btn btn-success">update</Link>
            </div>
        </div>


    )

}

export default FetchCustomer;