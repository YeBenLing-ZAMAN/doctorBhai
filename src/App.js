import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Components/Pages/About/About';
import Appointment from './Components/Pages/Appointment/Appointment';
import Home from './Components/Pages/Home/Home';
import Login from './Components/Pages/Login/Login';
import RequireAuth from './Components/Pages/Login/RequireAuth';
import SignUp from './Components/Pages/Login/SignUp';
import Navbar from './Components/Shared/Navbar';
import NotFound from './Components/Shared/NotFound';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import DashBoard from './Components/Pages/DashBoard/DashBoard';
import MyAppointment from './Components/Pages/DashBoard/MyAppointment';
import MyReview from './Components/Pages/DashBoard/MyReview';
import MyHistory from './Components/Pages/DashBoard/MyHistory';
import Users from './Components/Pages/DashBoard/Users';
import RequireAdmin from './Components/Pages/Login/RequireAdmin';
import AddDoctor from './Components/Pages/DashBoard/AddDoctor';
import ManageDoctor from './Components/Pages/DashBoard/ManageDoctor';
import Payment from './Components/Pages/DashBoard/Payment';

function App() {
  return (
    <div className='max-w-7xl mx-auto'>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="appointment" element={
          <RequireAuth>
            <Appointment />
          </RequireAuth>
        } />
        <Route path="dashboard" element={
          <RequireAuth>
            <DashBoard />
          </RequireAuth>
        }>
          <Route index element={<MyAppointment></MyAppointment>}></Route>
          <Route path='review' element={<MyReview></MyReview>}></Route>
          <Route path='history' element={<MyHistory></MyHistory>}></Route>
          <Route path='payment/:id' element={<Payment/>}></Route>
          <Route path='users' element={
            <RequireAdmin>
              <Users />
            </RequireAdmin>
          }></Route>
          <Route path='adddoctor' element={
            <RequireAdmin>
              <AddDoctor />
            </RequireAdmin>
          }></Route>
          <Route path='managedoctor' element={
            <RequireAdmin>
              <ManageDoctor />
            </RequireAdmin>
          }></Route>
        </Route>
        <Route path="about" element={<About />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
