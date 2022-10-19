import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";

function DeleteMedicine() {

    const [medicine, setMedicine] = useState(null);
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        axios.get("http://localhost:8080/medicine/getmedicinebyid/" + id).then(resp => setMedicine(resp.data));
    }, [id]);
    const handleDelete = () => {
        axios.delete("http://localhost:8080/medicine/delete/" + id).then(resp => {
            alert("Medicine deleted");
            navigate("/admin/dashboard");
        });
    }
    return (
        <div className="container">
            <h2> Delete Medicine</h2>
            {
                medicine !== null &&
                <div>
                    <div>
                        <p>medicineId: {medicine.medicineId}</p>
                        <p>Name: {medicine.medicineName}</p>
                        <p>medicineCost: {medicine.medicineCost}</p>
                        <p>Mfd: {medicine.mfd}</p>
                        <p>expiryDate: {medicine.expiryDate}</p>
                        <p>CompanyName: {medicine.companyName}</p>
                    </div>
                    <p>
                        <button onClick={handleDelete} className="btn btn-danger">Delete</button>
                    </p>
                    <p>
                        <Link to={"/admin/dashboard"} className="btn btn-secondary">Back</Link>
                    </p>
                </div>

            }

        </div>
    )
}

export default DeleteMedicine;