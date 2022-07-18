import React from 'react';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import AddUser from '../pages/AddUser';
import Login from '../pages/Login';
import CustomerProducts from '../pages/CustomerProducts';

export default function Rotas() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route exact path="/" element={ <Navigate to="/login" /> } /> */}
        <Route exact path="/" element={ <Login /> } />
        <Route exact path="/login" element={ <Login /> } />
        <Route exact path="/register" element={ <AddUser /> } />
        <Route exact path="/customer/products" element={ <CustomerProducts /> } />
      </Routes>
    </BrowserRouter>
  );
}
