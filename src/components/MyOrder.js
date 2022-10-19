import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import logo from '../assests/images/logo.jpg';
function MyOrder() {
    const [orders, setOrders] = useState([]);
    const user = JSON.parse(localStorage.getItem("loginuser"));

    useEffect(() => {
        axios.get("http://localhost:8080/order/getallorderById/" + user.id).then(resp => setOrders(resp.data.orderList));
    }, [user.id]);
    return (
        <div style={{ backgroundColor: "lightblue" }}>
            <nav class="navbar bg-secondary">

                <div class="container-fluid">

                    <img src={logo} alt="Avatar Logo" width="30" height="30" class="rounded-pill" />

                    <Link to="/customer/details" class="btn btn-primary">MyDetails</Link>

                    <Link to = "/medicine/all" class="btn btn-primary">Back to medicines</Link>

                    <Link to="/ " class="fa fa-fw fa-user">Logout</Link>





                </div>

            </nav>
            <h2>Your order details: </h2>
            {
                orders.length > 0 &&
                orders.map((p) => (

                    <div>
                        <div>
                            <p>orderDate : {p.orderDate} </p>
                            <p>dispatchDate : {p.dispatchDate} </p>
                            <p>totalCost : {p.totalCost} </p>

                        </div>
                        {p.orderItems.map((o) => (
                            <div key={o.orderItemId} >
                                <div style={{ textAlign: "center" }}>
                                    <p>medicineId: {o.medicine.medicineId}</p>
                                    <p>Name: {o.medicine.medicineName}</p>
                                    {/* <p>medicineCost: {o.medicine.medicineCost}</p> */}
                                    <p>Mfd: {o.medicine.mfd}</p>
                                    <p>expiryDate: {o.medicine.expiryDate}</p>
                                    <p>CompanyName: {o.medicine.companyName}</p>
                                    <p>cost:{o.cost}</p>
                                    <p>----------------------------------------------------------------------------------------</p>
                                </div>
                            </div>
                        )
                        )
                        }
                    </div>
                )
                )
            }
        </div >
    )
}
export default MyOrder;