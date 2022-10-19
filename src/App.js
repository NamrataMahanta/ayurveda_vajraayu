import './App.css';

import MedicineDashbord from './components/MedicineDashbord';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import GetAllMedicines from './components/GetAllMedicines';
import GetAMedicine from './components/GetAMedicine';
import AddMedicine from './components/AddMedicine';
import DeleteMedicine from './components/DeleteMedicine';
import UpdateMedicine from './components/UpdateMedicine';
import Home from './components/Home';
import AddCustomer from './components/AddCustomer';
import CustomerLogin from './components/CustomerLogin';
import FetchCustomer from './components/FetchCustomer';
import UpdateCustomer from './components/UpdateCustomer';
import MyOrder from './components/MyOrder';
import AdminDashbord from './components/AdminDashbord';
import AdminView from './components/AdminView';
import About from './components/About';
import FetchAllCustomers from './components/FetchAllCustomers';
import ForgotPassword from './components/ForgetPassword';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/about' element={<About/>}/>
        <Route path="/customer/add" element={<AddCustomer />} />
        <Route path="/login" element={<CustomerLogin />} />
        <Route path="/customer/dashboard" element={<MedicineDashbord />} />
        <Route path="/medicine/all" element={<GetAllMedicines />} />
        <Route path="/medicine/details/:id" element={<GetAMedicine />} />
        <Route path="/medicine/add" element={<AddMedicine />} />
        <Route path="/medicine/delete/:id" element={<DeleteMedicine />} />
        <Route path="/medicine/update/:id" element={<UpdateMedicine />} />
        <Route path="/customer/details" element={<FetchCustomer />} />
        <Route path="/customer/update" element={<UpdateCustomer />} />
        <Route path="/customer/order" element={<MyOrder />} />
        <Route path="/admin/dashboard" element={<AdminDashbord />} />
        <Route path="/admin/view/:id" element={<AdminView />}></Route>
        <Route path="/customer/all" element={<FetchAllCustomers/>} />
        <Route path="/forgotpassword" element={<ForgotPassword/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
