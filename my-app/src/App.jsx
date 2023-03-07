import React, { Component} from "react";
import {hot} from "react-hot-loader";
import "./App.css";

class App extends Component{
  render(){
    return(
      <div className="App">
        <h1> Pokemon GAI </h1>
      </div>
    );
  }
}

// export default App;
export default hot(module)(App);