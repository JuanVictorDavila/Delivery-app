import React from 'react';
import { Route, Routes as Switch, Navigate } from 'react-router-dom';
import Login from '../pages/login';

function Routes() {
  return (
    <Switch>
      <Route path="/" element={ <Navigate to="/login" /> } />
      <Route path="/login" element={ <Login /> } />
    </Switch>
  );
}

export default Routes;
