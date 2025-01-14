import React from 'react';
import './App.css';
import { Login } from './pages/Account/Login';
import PrivateRoute from './components/PrivateRoute';

import './styles/sb-admin-2.min.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { Admin } from './pages/Admin/Admin';

function App() {
  const isAuthenticated = true; // Replace with actual authentication logic

  return (
    <div className="App" id="wrapper">
      <Router>
        <Routes>
          <Route path="/" element={<Admin />} /> {/* Route for the root path */}
          <Route path="/admin" element={<PrivateRoute isAuthenticated={true}><Admin /></PrivateRoute>} />
          <Route path="/login" element={<Login />} />
          <Route path="/admin" element={
            <PrivateRoute isAuthenticated={isAuthenticated}>
              <Admin />
            </PrivateRoute>
          } />
        </Routes>
      </Router>
    </div>
  );
}

export default App;