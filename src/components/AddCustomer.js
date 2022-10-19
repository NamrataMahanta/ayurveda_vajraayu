import React, { useState } from "react";
import axios from 'axios';
import { Link, useNavigate } from "react-router-dom";
function AddCustomer() {
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
    const [formErrors, setFormErrors] = useState({});
    const navigate = useNavigate();

    const handleSubmit = () => {
        let errors = {};
        if (!cusername) {
            errors['cusernameError'] = "Username is required."
        }
        if (!cpassword) {
            errors['cpasswordError'] = "Password is required."
        }
        if (!cfirstName) {
            errors['cFirstNameError'] = "Customer first name is required."
        }
        if (!clastName) {
            errors['cLastNameError'] = "Customer last name is required."
        }
        if (!cemail) {
            errors['cemailError'] = "Customer mail is required."
        }
        if (!cmobile) {

            errors['cMobileError'] = "MobileNo is required."
        }
        if(cmobile.length!=10){
            errors['cMobileError'] = "MobileNo must be 10 digits."
        }
        if (!chouseNo) {

            errors['chouseNoError'] = "HouseNo is required."
        }
        if (!ccity) {

            errors['cCityError'] = "City is required."
        }
        if (!cstate) {

            errors['cStateError'] = "State is required."
        }
        if (!cpincode) {

            errors['cPincodeError'] = "Pincode is required."
        }
        const mobileregx = /^\d{10}$/;
        if (!cmobile.match(mobileregx)) {
            errors['cMobileError'] = "Enter a valid mobile number"
        }
        const emailregex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        if (!cemail.match(emailregex)) {
            errors['cemailError'] = "Email is invalid."
        }

        setFormErrors(errors);
        const noErrors = Object.keys(errors).length === 0;
        if (noErrors) {
            const payload = {
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

            axios.post("http://localhost:8080/customer/save", payload)
                .then(resp => {
                    alert("New Customer added successfully with Id : " + resp.data.id);
                    navigate("/customer/dashboard");
                });
        }
    }
    return (
        <div
            className="container" style={{ backgroundColor: "lightblue" }}>
            <h1  class="text-center"  >REGISTER </h1>
            <div className="form-group" class="font-weight-bold"  >
                <label htmlFor="username">Username : </label>
                <input type="text" className="form-control" name="cusername" id="cusername" value={cusername}
                    onChange={(event) => setCUsername(event.target.value)} placeholder="Enter Username" style={{
                        backgroundColor: "wheat",
                    }}/>
                {
                    formErrors.cusernameError && <div style={{ color: "red" }}> {formErrors.cusernameError}</div>
                }
            </div>
            <div className="form-group" class="font-weight-bold"  >
                <label htmlFor="password">Password : </label>
                <input type="password" className="form-control" name="cpassword" id="cpassword" value={cpassword}
                    onChange={(event) => setCPassword(event.target.value)} placeholder="Enter Password" />
                {
                    formErrors.cpasswordError && <div style={{ color: "red" }}> {formErrors.cpasswordError}</div>
                }
            </div>
            <div className="form-group" class="font-weight-bold" >
                <label htmlFor="firstName">First Name : </label>
                <input type="text" className="form-control" name="cfirstName" id="cfirstName" value={cfirstName}
                    onChange={(event) => setCFirstName(event.target.value)} placeholder="Enter Firstname" />
                {
                    formErrors.cFirstNameError && <div style={{ color: "red" }}> {formErrors.cFirstNameError}</div>
                }
            </div>
            <div className="form-group" class="font-weight-bold" >
                <label htmlFor="lastName">Last Name: </label>
                <input type="text" className="form-control" name="clastName" id="clastName" value={clastName}
                    onChange={(event) => setCLastName(event.target.value)} placeholder="Enter Lastname" />
                {
                    formErrors.cLastNameError && <div style={{ color: "red" }}> {formErrors.cLastNameError}</div>
                }
            </div>
            <div className="form-group" class="font-weight-bold" >
                <label htmlfor="email"> Email : </label>
                <input type="email" className="form-control" name="cemail" id="cemail" value={cemail}
                    onChange={(event) => setCEmail(event.target.value)} placeholder="Enter email" />
                {
                    formErrors.cemailError && <div style={{ color: "red" }}> {formErrors.cemailError}</div>
                }
            </div>
            <div className="form-group" class="font-weight-bold">
                <label htmlfor='phone-input'>Mobileno:  </label>
                <input type="text"  className="form-control" name="cmobile" id="cmobile" value={cmobile}
                onChange={(event) => setCMobile(event.target.value)
                } 
                placeholder="Enter MobileNo"/>
                {
                    formErrors.cMobileError && <div style={{ color: "red" }}> {formErrors.cMobileError}</div>
                }
                
            </div>
            <div className="form-group" class="font-weight-bold" >
                <label htmlFor="houseNo">House No : </label>
                <input type="houseNo" className="form-control" name="chouseNo" id="chouseNo" value={chouseNo}
                    onChange={(event) => setCHouseNo(event.target.value)} placeholder="Enter House No" />
                {
                    formErrors.chouseNoError && <div style={{ color: "red" }}> {formErrors.chouseNoError}</div>
                }
            </div>
            <div className="form-group" class="font-weight-bold" >
                <label htmlFor="city">city : </label>
                <input type="text" className="form-control" name="ccity" id="ccity" value={ccity}
                    onChange={(event) => setCCity(event.target.value)} placeholder="Enter City" />
                {
                    formErrors.cCityError && <div style={{ color: "red" }}> {formErrors.cCityError}</div>
                }
            </div>

            <div className="form-group" class="font-weight-bold" >
                <label htmlFor="state">State : </label>
                <input type="text" className="form-control" name="cstate" id="cstate" value={cstate}
                    onChange={(event) => setCState(event.target.value)} placeholder="Enter State" />
                {
                    formErrors.cStateError && <div style={{ color: "red" }}> {formErrors.cStateError}</div>
                }
            </div>
            <div className="form-group" class="font-weight-bold" >
                <label htmlFor="pincode">Pincode : </label>
                <input type="pincode" className="form-control" name="cpincode" id="cpincode" value={cpincode}
                    onChange={(event) => setCPincode(event.target.value)} placeholder="Enter pincode" />
                {
                    formErrors.cPincodeError && <div style={{ color: "red" }}> {formErrors.cPincodeError}</div>
                }
            </div>
            <button className="btn btn-primary" onClick={handleSubmit}>Submit</button>
            <div>
                <br></br>
                <Link to="/" className="btn btn-danger">Back to Home</Link>
                <div>
                    <br></br>
                    < Link to="/login" className="btn btn-warning">Already registered click here </Link>
                </div>
            </div>
        </div>

    )
}
export default AddCustomer;