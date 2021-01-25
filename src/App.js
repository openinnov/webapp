import React, { Component } from "react";
import './css/global.css';
import NavBar from "./components/NavBar";

class App extends Component {
 
  render() {
    return (
      <React.Fragment>
        <NavBar/>
      </React.Fragment>
    );
  }
}
 
export default (App);
