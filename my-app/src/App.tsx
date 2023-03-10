import React, { Component} from "react";
import {hot} from "react-hot-loader";
import "./App.css";
import LoginPage from "./login_page/LoginPage";

// TODO: find a proper way to set the image as background.
// const backgroundImage = require("../images/login_background.png");

const App = () => {
  return (
    // TODO: find a proper way to set the image as background.
    // <div className="App" style={{backgroundImage: `url(${backgroundImage})`}}>

    <div className="App">
      <LoginPage />
    </div>
  );
};

export default hot(module)(App);