import React from 'react';
import { Login } from './pages/Account/Login';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Admin } from './pages/Admin/Admin';
import PrivateRoute from './components/PrivateRoute';
import AccountRoute from './components/AccountRoute';
import { FinancialFund } from './pages/Admin/Financial_Fund/FinancialFund';
import { Home } from './pages/Admin/Home/Home';

function App() {
  return (
    <div className="App" id="wrapper">
      <Router>
        <Routes>
          <Route path="/dang-nhap" element={<AccountRoute element={<Login />} />} />
          <Route path="/" element={<PrivateRoute element={<Admin />} />} >
            <Route index element={<Home />} />
            <Route path="/quy-tai-chinh" element={<FinancialFund />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;