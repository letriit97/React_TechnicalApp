import React from 'react';
import './App.css';
import { Login } from './pages/Account/Login';
import './styles/sb-admin-2.min.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Admin } from './pages/Admin/Admin';
import PrivateRoute from './components/PrivateRoute';
import AccountRoute from './components/AccountRoute';

function App() {
  return (
    <div className="App" id="wrapper">
      <Router>
        <Routes>
          <Route path="/dang-nhap" element={<AccountRoute element={<Login />} /> } />
          <Route path="/" element={<PrivateRoute element={<Admin />} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;