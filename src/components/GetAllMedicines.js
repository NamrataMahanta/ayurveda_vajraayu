import React, { useEffect, useState } from "react";
import axios from 'axios';
import { Link } from 'react-router-dom';
import bottlesimage from '../assests/images/bottlesimage.jpg';
import logo from '../assests/images/logo.jpg';

function GetAllMedicines() {
    const [medicines, setMedicines] = useState([]);



    const [checked, setChecked] = useState([]);
    const handleCheck = (event) => {
        var updatedList = [...checked];
        if (event.target.checked) {
            updatedList = [...checked, event.target.value];
        } else {
            updatedList.slice(checked.indexOf(event.target.value), 1);
        }
        setChecked(updatedList);
    };
    const placeOrder = () => {
        console.log("total:" + checked.length);
        console.log(checked);
        const user = JSON.parse(localStorage.getItem("loginuser"));
        console.log(user);

        const payload = {
            customerId: user.id,
            medicines: [...checked]

        }


        axios.post("http://localhost:8080/order/addorder", payload)
            .then((resp) => alert("order added successfully"));
        setChecked([]);
    }


    useEffect(() => {
        axios
            .get("http://localhost:8080/medicine/getallmedicines")
            .then((resp) => setMedicines(resp.data));
    }, []);

    return (
        <div>
            <nav class="navbar bg-secondary">
                <div class="container-fluid">
                    <img src={logo} alt="Avatar Logo" width="30" height="30" class="rounded-pill" />
                    <Link to="/customer/dashboard"  class="btn btn-warning">dashboard</Link>
                    <Link to="/customer/details" class="btn btn-primary">MyDetails</Link>

                    <Link to="/customer/order" class="btn btn-success btn-rounded">MyOrder</Link>
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
                                {/* <th>MedicineId</th> */}
                                <th>Name</th>

                            </tr>
                        </thead>
                        <tbody>
                            {medicines.map((p) => (
                                <tr key={p.medicineId}>
                                    <div>
                                        <img src={bottlesimage} width="100" height="100" />
                                    </div>

                                    <td> {p.medicineName}</td>

                                    <td><Link to={`/medicine/details/${p.medicineId}`} className="btn btn-dark">View</Link></td>


                                    <td>
                                        <input value={p.medicineId} type="checkbox" onChange={handleCheck} />


                                    </td>



                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}
                <button onClick={placeOrder} class="btn btn-success">Place order</button>
                {
                    checked.length > 0 &&
                    checked.map(i => <div>
                        {i}
                    </div>
                    )
                }
            </div>
        </div>

    );
}

export default GetAllMedicines;