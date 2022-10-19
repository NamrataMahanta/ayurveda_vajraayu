import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

function UpdateMedicine() {

    const [mId, setMId] = useState('');
    const [mName, setMName] = useState('');
    const [mCost, setMCost] = useState('');
    const [mMfd, setMMfd] = useState('');
    const [mExpiryDate, setMExpiryDate] = useState('');
    const [mcompanyName, setMcompanyName] = useState('');
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        axios.get("http://localhost:8080/medicine/getmedicinebyid/" + id).then(resp => {
            setMId(resp.data.medicineId);
            setMName(resp.data.medicineName);
            setMCost(resp.data.medicineCost);
            setMMfd(resp.data.mfd);
            setMExpiryDate(resp.data.expiryDate);
            setMcompanyName(resp.data.companyName);

        });
    }, [id]);

    const handleSubmit = () => {

        const payload = {
            medicineId:mId,
            medicineName: mName,
            medicineCost: mCost,
            mfd: mMfd,
            ExpiryDate: mExpiryDate,
            companyName: mcompanyName
        }
        axios.put("http://localhost:8080/medicine/updatemedicine" , payload)
            .then(resp => {
                alert("Medicine Updated");
                navigate("/admin/dashboard");
            });
    }
    return (
        <div class="container">
            <h2> Update Medicine</h2>
            <div className="form-group">
                <label htmlFor="mId">Medicine Id : </label>
                <input type="text" className="form-control" name="mId" id="cid" value={mId}
                    onChange={(event) => setMId(event.target.value)} disabled />

            </div>

            <div className="form-group">
                <label htmlFor="mName">MedicineName</label>
                <input type="text" className="form-control" name="mName" id="mName" placeholder="Enter Medicine Name" style={{
                        backgroundColor: "wheat",
                    }}
                    onChange={(event) => setMName(event.target.value)} value={mName} />

            </div>
            <div className="form-group">
                <label htmlFor="pPrice">MedicinePrice</label>
                <input type="text" className="form-control" name="pPrice" id="mPrice" placeholder="Enter Medicine Price" style={{
                        backgroundColor: "wheat",
                    }}
                    onChange={(event) => setMCost(event.target.value)} value={mCost} />

            </div>

            <div className="form-group">
                <label htmlFor="mMfd">MedicineMfd</label>
                <input type="date" className="form-control" name="mMfd" id="mMfd" placeholder="Enter Medicine Manufactured Date" style={{
                        backgroundColor: "wheat",
                    }}
                    onChange={(event) => setMMfd(event.target.value)} value={mMfd} />

            </div>
            <div className="form-group">
                <label htmlFor="mExpiryDate">Medicine ExpiryDate </label>
                <input type="date" className="form-control" name="mExpiryDate" id="mExpiryDate" placeholder="Enter Medicine Expiry Date" style={{
                        backgroundColor: "wheat",
                    }}
                    onChange={(event) => setMExpiryDate(event.target.value)} value={mExpiryDate} />
            </div>
            <div className="form-group">
                <label>companyName</label>
                <input type="mCompanyName" className="form-control" name="mCompanyName" id="mCompanyName" placeholder="select Company Name" style={{
                        backgroundColor: "wheat",
                    }}
                    onChange={(event) => setMcompanyName(event.target.value)} value={mcompanyName} />
            </div>
            <div>
                <button onClick={handleSubmit} className="btn btn-primary">Update</button>
            </div>
            <div>
                <br></br>

                <Link to="/admin/dashboard" className="btn btn-secondary">Back to All Medicines</Link>

            </div>

        </div>
    )
}

export default UpdateMedicine;