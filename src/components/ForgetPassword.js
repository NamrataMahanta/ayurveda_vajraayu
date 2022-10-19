import axios from "axios";
import React, { useState } from "react";

function ForgotPassword() {

    const [customer, setcustomer] = useState(null);
    const [email, setemailId] = useState(null);
    const [formErrors, setFormErrors] = useState({});
    const handleChange = event => { setemailId(event.target.value) };

    const handleSendcode = () => {
        let errors = {};
        if (!email) {
            errors['emailError'] = "email Id is required."
        }

        setFormErrors(errors);

        const noErrors = Object.keys(errors).length === 0;
        if (noErrors) {
            axios.get("http://localhost:8080/customer/customer/email?emailId=" + email).then(resp => {
                setcustomer(resp.data);
                alert(resp.data)
            }).catch(error => alert(error.response.data));

        }
    }

    return (
        <div>
            <div className="container1" style={{ backgroundColor: "lightblue" }}>
                <div className="row align-items-center vh-100">
                    <div className="col-6 mx-auto" >
                        <div>
                            <div className="card-body d-flex flex-column align-items-center">
                                <h2 className="card-title">Forgot Password</h2>
                            </div>
                            <div className="card">
                                <div className="card-boby">
                                    <div className='form'>
                                        <div className="form-group">
                                            <label htmlFor='email' style={{ "margin": "2%" }}> Email Id:- </label>
                                            <input type="text" className="form-control" name="email" id="email" placeholder="Enter email Id"
                                                onChange={handleChange} />
                                            {

                                                formErrors.emailIdError && <div style={{ color: "red" }}>{formErrors.emailIdError}</div>

                                            }
                                            <br></br>
                                            <div className="Button">
                                                <button onClick={handleSendcode} className="btn btn-success">
                                                    Send code
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default ForgotPassword;