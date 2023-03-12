import React from "react";
import {hot} from "react-hot-loader";
import "./App.css";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";

// TODO: find a proper way to set the image as background.
// const backgroundImage = require("../images/login_background.png");

const App = () => {
  return (
    // TODO: find a proper way to set the image as background.
    // <div className="App" style={{backgroundImage: `url(${backgroundImage})`}}>

    <div className="App">

      {/* Test home page without request from the server */}
      <HomePage />

      {/* Test register page without request from the server */}
      {/* <RegisterPage /> */}

      {/* Test login page without request from the server */}
      {/* <LoginPage /> */}
    </div>
  );
};

export default hot(module)(App);