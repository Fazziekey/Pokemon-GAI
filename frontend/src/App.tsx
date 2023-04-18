import React from "react";
import "./App.css";
import LoginPage from "./pages/LoginPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserPage from "./pages/UserPage";

const Test = () => {
  return <div>Test</div>;
}

const App = () => {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/user" element={<UserPage />} />
          <Route path="*" element={<div>404</div>} />
        </Routes>
      </Router>
    </div>
  );
};


export default App; 