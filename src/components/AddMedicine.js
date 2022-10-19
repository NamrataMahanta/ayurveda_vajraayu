import React, { useState } from "react";
import axios from 'axios';
import { Link, useNavigate } from "react-router-dom";

function AddMedicine() {
    const [mName, setMName] = useState('');
    const [mCost, setMCost] = useState('');
    const [mMfd, setMMfd] = useState('');
    const [mExpiryDate, setMexpiryDate] = useState('');
    const [mCompanyName, setMCompanyName] = useState('');
    const [formErrors, setFormErrors] = useState({});
    const navigate = useNavigate();
    const handleSubmit = () => {
        let errors = {};
        if (!mName) {
            errors['mNameError'] = "medicine name is required."
        }

        if (!mCost) {
            errors['mPriceError'] = "medicine price is required."
        }

        if (!mMfd) {
            errors['mmfdError'] = "medicine Mfd is required."
        }
        if (!mExpiryDate) {
            errors['mExpiryDateError'] = "medicine ExpiryDate is required."
        }
        if (mCost < 0) {
            errors['mPriceError'] = "Please enter positive number."
        }
        setFormErrors(errors);
        const noErrors = Object.keys(errors).length === 0;
        if (noErrors) {
            const payload = {
                medicineName: mName,
                medicineCost: mCost,
                mfd: mMfd,
                expiryDate: mExpiryDate,
                companyName: mCompanyName
            }
            axios.post("http://localhost:8080/medicine/medicine/save", payload)
                .then(resp => {
                    alert("New Medicine added with id: " + resp.data.medicineId);
                    navigate("/admin/dashboard");
                });
        }
    }
    return (
        <div className="container">
            <div className="form-group">
                <label htmlFor="mName">MedicineName</label>
                <input type="text" className="form-control" name="mName" id="mName" placeholder="Enter Medicine Name" style={{
                    backgroundColor: "wheat",
                }}
                    onChange={(event) => setMName(event.target.value)} value={mName} />
                {
                    formErrors.mNameError && <div style={{ color: "red" }}>{formErrors.mNameError}</div>
                }
            </div>

            <div className="form-group">
                <label htmlFor="pPrice">MedicinePrice</label>
                <input type="text" className="form-control" name="pPrice" id="mPrice" placeholder="Enter Medicine Price" style={{
                    backgroundColor: "wheat",
                }}
                    onChange={(event) => setMCost(event.target.value)} value={mCost} />
                {
                    formErrors.mPriceError && <div style={{ color: "red" }}>{formErrors.mPriceError}</div>
                }
            </div>

            <div className="form-group">
                <label htmlFor="mMfd">MedicineMfd</label>
                <input type="date" className="form-control" name="mMfd" id="mMfd" placeholder="Enter Medicine Manufactured Date" style={{
                    backgroundColor: "wheat",
                }}
                    onChange={(event) => setMMfd(event.target.value)} value={mMfd} />
                {
                    formErrors.mmfdError && <div style={{ color: "red" }}>{formErrors.mmfdError}</div>
                }
            </div>

            <div className="form-group">
                <label htmlFor="mExpiryDate">Medicine ExpiryDate </label>
                <input type="date" className="form-control" name="mExpiryDate" id="mExpiryDate" placeholder="Enter Medicine Expiry Date" style={{
                    backgroundColor: "wheat",
                }}
                    onChange={(event) => setMexpiryDate(event.target.value)} value={mExpiryDate} />
                {
                    formErrors.mExpiryDateError && <div style={{ color: "red" }}>{formErrors.mExpiryDateError}</div>
                }
            </div>
            <div className="form-group">
                <label>Company Name</label>
                <input type="mCompanyName" className="form-control" name="mCompanyName" id="mCompanyName" placeholder="select Company Name" style={{
                    backgroundColor: "wheat",
                }}
                    onChange={(event) => setMCompanyName(event.target.value)} value={mCompanyName} />
            </div>

            <div>
                <button onClick={handleSubmit} className="btn btn-primary">Submit</button>
            </div>

            <div>

                <br></br>

                <Link to="/admin/dashboard" className="btn btn-danger">Back </Link>

            </div>

        </div>
    )
}
export default AddMedicine;