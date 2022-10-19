import React, { useEffect, useState } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";

function FetchAllCustomers() {

    const [customers, setCustomers] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8080/customer/all").then(resp => setCustomers(resp.data))
    }, []);   


    return (
        <div className="container">
            <h2 style={{ color: "blue", textAlign: "center" }}>All Customers</h2>

            {
                customers.length > 0 &&


                <table className="table" style={{ width: "100%", textAlign: "center" }}>
                    <thead className="thead-dark">
                        <tr>
                            <th>Id</th>
                            <th>Username</th>
                            <th>Password</th>
                            <th>Firstname</th>
                            <th>Lastname</th>
                            <th>Email</th>
                            <th>Mobile</th>
                            <th>House No</th>
                            <th>City</th>
                            <th>State</th>
                            <th>Pincode</th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            customers.map((c) => (
                                <tr key={c.id}>
                                    <td> {c.id} </td>
                                    <td> {c.username} </td>
                                    <td> {c.password} </td>
                                    <td> {c.firstName} </td>
                                    <td> {c.lastName} </td>
                                    <td> {c.email} </td>
                                    <td> {c.mobile} </td>
                                    <td> {c.address.houseNo} </td>
                                    <td> {c.address.city} </td>
                                    <td> {c.address.state} </td>
                                    <td> {c.address.pincode} </td>

                                    {/* <td><Link to={`/customer/details/${c.id}`} className="btn btn-info">View</Link></td>
                        <td><Link to={`/customer/update/${c.id}`}  className="btn btn-secondary">Update</Link></td>
                        <td><Link to={`/customer/delete/${c.id}`}  className="btn btn-danger">Delete</Link></td> */}
                                </tr>)
                            )}
                    </tbody>
                </table>
            }

            <div>
                <Link to="/admin/dashboard" className="btn btn-danger">Back </Link>
            </div>
        </div>
    )
}


export default FetchAllCustomers;