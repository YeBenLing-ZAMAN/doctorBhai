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
            <DashBoard/>
          </RequireAuth>
        }>
          <Route index element={<MyAppointment></MyAppointment>}></Route>
          <Route path='review' element={<MyReview></MyReview>}></Route>
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
