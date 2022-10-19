
import axios from 'axios';
import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import bottlesimage from '../assests/images/bottlesimage.jpg';
import logo from '../assests/images/logo.jpg';

function AdminDashbord() {

    const [medicines, setMedicines] = useState([]);



    useEffect(() => {
        axios
            .get("http://localhost:8080/medicine/getallmedicines")
            .then((resp) => setMedicines(resp.data));
    }, []);
    return (
        <div>
            <div>
                <nav   className="fa fa-cube" class="navbar bg-secondary">Vajraayu
                    <div class="container-fluid">
                        <img src={logo} alt="Avatar Logo" width="30" height="30" class="rounded-pill" />
                        {/* <Link to="/customer/details" class="btn btn-primary">MyDetails</Link> */}
                        <p><Link to="/medicine/add" class="btn btn-primary">Add medicine</Link></p>
                        <Link to="/customer/all" class="btn btn-warning btn-rounded" >All Customers</Link>
                        {/* <button type="button" class="btn btn-success">MyOrders</button> */}
                        <Link to="/" class="btn btn-warning btn-rounded" >Logout</Link>
                    </div>
                </nav>
                <div className="container" style={{
                    backgroundColor: "lightblue", alignItems: 'center',
                    justifyContent: 'center'
                }} >
                    {medicines.length > 0 && (
                        <table className="table">
                            <thead className="thead-striped">
                                <tr>
                                    <th>medicine Image</th>
                                    <th>MedicineId</th>
                                    <th>Name</th>
                                    <th>Mfd</th>

                                </tr>
                            </thead>
                            <tbody>
                                {medicines.map((p) => (
                                    <tr key={p.medicineId}>
                                        <div>
                                            <img src={bottlesimage} width="100" height="100" />
                                        </div>
                                        <td> {p.medicineId}</td>
                                        <td> {p.medicineName}</td>
                                        <td>{p.mfd}</td>
                                        <td><Link to={`/admin/view/${p.medicineId}`} className="btn btn-dark">View</Link></td>
                                        <td><Link to={`/medicine/update/${p.medicineId}`} className="btn btn-secondary">Update</Link></td>
                                        <td><Link to={`/medicine/delete/${p.medicineId}`}  className="btn btn-danger">Delete</Link></td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    )}
                </div>
         </div>
         </div>   
    )
}
export default AdminDashbord