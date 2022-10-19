import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { Link } from "react-router-dom";

import axios from "axios";
import logo from '../assests/images/logo.jpg';


function UpdateCustomer() {

    const [cid, setCId] = useState('');
    const [cusername, setCUsername] = useState('');
    const [cpassword, setCPassword] = useState('');
    const [cfirstName, setCFirstName] = useState('');
    const [clastName, setCLastName] = useState('');
    const [cemail, setCEmail] = useState('');
    const [cmobile, setCMobile] = useState('');
    const [chouseNo, setCHouseNo] = useState('')
    const [ccity, setCCity] = useState('')
    const [cstate, setCState] = useState('')
    const [cpincode, setCPincode] = useState('')

    const { id } = useParams();
    const navigate = useNavigate();
    const user = JSON.parse(localStorage.getItem("loginuser"));
    console.log(user);



    useEffect(() => {
        axios.get("http://localhost:8080/customer/" + user.id).then(resp => {
            setCId(resp.data.id);
            setCUsername(resp.data.username);
            setCPassword(resp.data.password);
            setCFirstName(resp.data.firstName);
            setCLastName(resp.data.lastName);
            setCEmail(resp.data.email);
            setCMobile(resp.data.mobile);
            setCHouseNo(resp.data.address.houseNo);
            setCCity(resp.data.address.city);
            setCState(resp.data.address.state);
            setCPincode(resp.data.address.pincode);

        })
    }, [id]);

    const handleSubmit = () => {
        const payload = {
            id: cid,
            username: cusername,
            password: cpassword,
            firstName: cfirstName,
            lastName: clastName,
            email: cemail,
            mobile: cmobile,
            address: {
                houseNo: chouseNo,
                city: ccity,
                state: cstate,
                pincode: cpincode
            }
        }

        axios.put("http://localhost:8080/customer/updatecustomer/", payload)
            .then(resp => {
                alert("Customer Updated successfully with Id :" + resp.data.id);
                navigate("/customer/details");
            });

    }

    return (
        <div className="container" style={{backgroundColor: "lightblue"}}>
            <nav class="navbar bg-secondary">
                <div class="container-fluid">
                    <img src={logo} alt="Avatar Logo" width="30" height="30" class="rounded-pill" />
                    
                    <button type="button" class="btn btn-dark">MyOrders</button>
                    <Link to="/"class="btn btn-warning btn-rounded" >Logout</Link>
                </div>

            </nav>
            <div className="form-group">
                <label htmlFor="cid">Customer Id : </label>
                <input type="text" className="form-control" name="cid" id="cid" value={cid}
                    onChange={(event) => setCId(event.target.value)} disabled />

            </div>

            <div className="form-group">
                <label htmlFor="username">Username : </label>
                <input type="text" className="form-control" name="cusername" id="cusername" value={cusername}
                    onChange={(event) => setCUsername(event.target.value)} placeholder="Enter Username" />

            </div>
            <div className="form-group">
                <label htmlFor="password">Password : </label>
                <input type="password" className="form-control" name="cpassword" id="cpassword" value={cpassword}
                    onChange={(event) => setCPassword(event.target.value)} placeholder="Enter Password" />

            </div>
            <div className="form-group">
                <label htmlFor="firstName">First Name : </label>
                <input type="text" className="form-control" name="cfirstName" id="cfirstName" value={cfirstName}
                    onChange={(event) => setCFirstName(event.target.value)} placeholder="Enter Firstname" />

            </div>
            <div className="form-group">
                <label htmlFor="lastName">Last Name: </label>
                <input type="text" className="form-control" name="clastName" id="clastName" value={clastName}
                    onChange={(event) => setCLastName(event.target.value)} placeholder="Enter Lastname" />

            </div>
            <div className="form-group">
                <label htmlfor="email"> Email : </label>
                <input type="email" className="form-control" name="cemail" id="cemail" value={cemail}
                    onChange={(event) => setCEmail(event.target.value)} placeholder="Enter email" />

            </div>
            <div className="form-group">
                <label htmlFor="mobile">Mobile No : </label>
                <input type="number" className="form-control" name="cmobile" id="cmobile" value={cmobile}
                    onChange={(event) => setCMobile(event.target.value)} placeholder="Enter Mobile Number" />

            </div>
            <div className="container">
                <div className="form-group">
                    <label htmlFor="chouseNo">House No : </label>
                    <input type="number" className="form-control" name="chouseNo" id="chouseNo" value={chouseNo}
                        onChange={(event) => setCHouseNo(event.target.value)} placeholder="Enter House No" />

                </div>
            </div>
            <div className="container">
                <div className="form-group">
                    <label htmlFor="city">city : </label>
                    <input type="text" className="form-control" name="ccity" id="ccity" value={ccity}
                        onChange={(event) => setCCity(event.target.value)} placeholder="Enter City" />

                </div> </div>
            <div className="container">
                <div className="form-group">
                    <label htmlFor="state">State : </label>
                    <input type="text" className="form-control" name="cstate" id="cstate" value={cstate}
                        onChange={(event) => setCState(event.target.value)} placeholder="Enter State" />

                </div> </div>

            <div className="container">
                <div className="form-group">
                    <label htmlFor="pincode">Pincode : </label>
                    <input type="number" className="form-control" name="cpincode" id="cpincode" value={cpincode}
                        onChange={(event) => setCPincode(event.target.value)} placeholder="Enter Username" />

                </div> </div>

            <button className="btn btn-primary" onClick={handleSubmit}>Submit</button>

            <div>
                <br></br>
                <Link to="/customer/details" className="btn btn-secondary">Back to MyDetails</Link>
            </div>
        </div>


    )
}

export default UpdateCustomer; 