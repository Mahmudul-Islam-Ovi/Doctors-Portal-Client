import React from 'react';
import Navbar from './Pages/Shared/Navbar';
import { Routes, Route } from "react-router-dom";
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Login from './Pages/Login/Login';
import Appointment from './Pages/Appointment/Appointment';
import SingUp from './Pages/Login/SingUp';
import RequireAuth from './Pages/Login/RequireAuth';


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
                <Route path="/about" element={<About />} />
                <Route path="/login" element={<Login />} />
                <Route path="/singUp" element={<SingUp />} />
            </Routes>
            
        </div>
    );
};

export default Router;