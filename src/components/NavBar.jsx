import React, { Component } from "react";
import logo from '../assets/images/logo2.png';
import '../css/global.css';
import Contact from "../pages/Contact";
import Us from "../pages/Us";
import HomePage from "../pages/Home";
import * as Icon from 'react-bootstrap-icons';
import ListGame from "../components/ListGame";
// import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import { Navbar, Nav, NavDropdown} from 'react-bootstrap';
import ReactTooltip from 'react-tooltip';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
 
class NavBar extends Component {
  render() {
    return (
      <React.Fragment>
       <Router>
       <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="#home">
          <img
            alt=""
            src={logo} 
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{' '}
          World Gaming Reference
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link as={Link} to="/" ><Icon.House data-tip='Home' color="grey" size={35}  /></Nav.Link>
          {/* <NavDropdown title="List" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
          </NavDropdown> */}
          <Nav.Link as={Link} to="/list"><Icon.ListTask data-tip='List of games' color="grey" size={35}   /></Nav.Link>
          <Nav.Link as={Link} to="/us"><Icon.People data-tip='Who are we ?' color="grey" size={35}   /></Nav.Link>
          <Nav.Link as={Link} to="/contact" ><Icon.Mailbox data-tip='Contact us' color="grey" size={35}   /></Nav.Link>
        </Nav>
        {/* <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-info">Search</Button>
        </Form> */}
        </Navbar.Collapse>
      </Navbar>
      <Switch>
        <Route path="/list">
          <ListGame />
        </Route>
        <Route path="/us">
          <Us />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/">
          <HomePage />
        </Route>
        </Switch>
      </Router>
      <ReactTooltip />
      </React.Fragment>
    );
  }
}
 
export default NavBar;


