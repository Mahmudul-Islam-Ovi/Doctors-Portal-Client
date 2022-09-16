import React from 'react';
import Navbar from './Pages/Shared/Navbar';
import { Routes, Route } from "react-router-dom";
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Login from './Pages/Login/Login';
import Appointment from './Pages/Appointment/Appointment';
import SingUp from './Pages/Login/SingUp';
import RequireAuth from './Pages/Login/RequireAuth';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Dashboard from './Pages/Dashboard/Dashboard';
import MyAppointment from './Pages/Dashboard/MyAppointment';
import MyReview from './Pages/Dashboard/MyReview';
import AllUsers from './Pages/Dashboard/AllUsers';
import RequireAdmin from './Pages/Login/RequireAdmin';


const Router = () => {
    return (
        <div className="max-w-7xl mx-auto px-5">
            <Navbar></Navbar>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/appointment" element={
                    <RequireAuth>
                        <Appointment />
                    </RequireAuth>
                } />
                {/* nasted route  */}
                <Route path="/dashboard" element={
                    <RequireAuth>
                        <Dashboard />
                    </RequireAuth>
                } >
                    <Route index element={<MyAppointment />}> </Route>
                    <Route path="myReview" element={<MyReview />}> </Route>
                    <Route path="users" element={
                        <RequireAdmin>
                            <AllUsers />
                        </RequireAdmin>
                    }> </Route>
                </Route>


                <Route path="/about" element={<About />} />
                <Route path="/login" element={<Login />} />
                <Route path="/singUp" element={<SingUp />} />
            </Routes>
            <ToastContainer />
        </div>
    );
};

export default Router;