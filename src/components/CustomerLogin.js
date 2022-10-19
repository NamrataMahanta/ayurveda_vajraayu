import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import './CustomerLogin.css';
import AppUser from './AppUser'

function CustomerLogin() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('');
    const [message, setMessage] = useState('');
    const [appUser, setAppUser] = useState(new AppUser());
    const [formErrors, setFormErrors] = useState({});
    const navigate = useNavigate();

    const handleAppUser = (event) => {
        setAppUser({
            ...appUser,
            [event.target.name]: event.target.value
        });
    };

    const handleSubmit = () => {

        let errors = {};
        if (!username) {
            errors['usernameError'] = "Username is required."
        }
        if (!password) {
            errors['passwordError'] = "Password is required."
        }
        setFormErrors(errors);
        const noErrors = Object.keys(errors).length === 0;

        if (noErrors) {

            const payload = {
                username: username,
                password: password
            }
            if (role === "admin") {
                if (username==="admin" && password==="admin123") {
                    localStorage.setItem('loginuser', JSON.stringify(username));
                    navigate("/admin/dashboard");
                    
                }

            }
            if (role === "customer") {
                axios.post("http://localhost:8080/customer/login", payload)
                .then(resp => {
                    localStorage.setItem('loginuser', JSON.stringify(resp.data));
                    navigate("/customer/dashboard");
                })

                .catch(error => {
                    setMessage(error.response.data);
                });

            }
        }
    }
    return (
        <div className="container">
            <div class="main">
                <div class="sub-main" >
                    <h2 class="form"   >Login </h2>
                    <div className="form-group" class="font-weight-bold" >
                        <label htmlFor='firstName' >Username</label>
                        <input type="text" className="form-control" name="firstName" id="firstName"
                            onChange={(event) => setUsername(event.target.value)} value={username} placeholder="Enter Username" style={{
                                backgroundColor: "darkseagreen",
                            }} />
                        {
                            formErrors.usernameError && <div style={{ color: "red" }}> {formErrors.usernameError}</div>
                        }
                    </div>
                    <div className="form-group" class="font-weight-bold" >
                        <label htmlFor='password'>Password</label>
                        <input type="password" className="form-control" name="password" id="password"
                            onChange={(event) => setPassword(event.target.value)} value={password} placeholder="Enter Password" style={{
                                backgroundColor: "darkseagreen",
                            }} />
                        {
                            formErrors.passwordError && <div style={{ color: "red" }}> {formErrors.passwordError}</div>
                        }
                    </div>
                    <br></br>
                    <div className="form-group">
                        <select className="form-control mb-3" class="font-weight-bold" name="role" id="role"  onChange={(event) => setRole(event.target.value)}>
                            <option value="#">Select a role</option>
                            <option value="admin">ADMIN</option>
                            <option value="customer">USER</option>
                        </select>
                    </div>
                    <Link to="/forgotpassword">forgot password?</Link>
                    <br></br>
                    <div>
                        <button onClick={handleSubmit} className="btn  btn-success">Login</button>
                    </div>

                    <p>
                        <label>NEW USER? </label><Link to="/customer/add">  Click here to register first</Link><br></br>
                       
                        </p>
                </div>
            </div>
        </div>


    )

}
export default CustomerLogin;