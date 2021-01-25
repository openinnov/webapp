import React, { Component } from "react";
import '../css/global.css';
import { Form, Button } from 'react-bootstrap';

class Contact extends Component {
 
  render() {
    return (
      <React.Fragment>
       <p>If you want to contact us, it's here : </p>
       <Form>
            <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="name@example.com" />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Label>Comment</Form.Label>
                <Form.Control as="textarea" rows={3} />
            </Form.Group>
                <Form.Group controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
      </React.Fragment>
    );
  }
}
 
export default Contact;
