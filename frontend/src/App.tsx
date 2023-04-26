import React from "react";
import "./App.css";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Overview from "./components/Overview";
import Create from "./components/Create";
import Gallery from "./components/Gallery";
import Friends from "./components/Friends";
import pikachuSleep from "./assets/pikachu-sleep.gif";


const ErrorPage = () => {
  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      height: "100vh",
    }}>
      <h1>404 Page not found</h1>
      <p>Please check if you use the correct URL QwQ</p>
      <img src={pikachuSleep} alt="pikachu sleeping" />
    </div>
  );
};


const App = () => {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/home" element={<HomePage />} >
            <Route path="overview" element={<Overview/> } />
            <Route path="create" element={<Create />} />
            <Route path="gallery" element={<Gallery/>}  />
            <Route path="friends" element={<Friends/>} />
          </Route>
          <Route path="*" element={<ErrorPage/>} />
        </Routes>
      </Router>
    </div>
  );
};


export default App; 