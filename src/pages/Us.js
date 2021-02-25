import React, { Component } from "react";
import '../css/global.css';
import { Form, Button, Card } from 'react-bootstrap';
import Amelie from '../assets/images/amelie.png';
import Mael from '../assets/images/mael.png';
import Jeremy from '../assets/images/jeremy.png';

class Us extends Component {
 
  render() {
    return (
      <React.Fragment>
       <h1 style={{ marginLeft: '2rem'}}>Who are we ?</h1>
       <div style={{display: 'flex', lineHeight: '40px'}}>
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={Amelie} />
            <Card.Body>
              <Card.Title style={{ color: '#000' }} >Amélie LUNEAU</Card.Title>
              <Card.Text style={{ color: '#000' }} >
                Développeuse
              </Card.Text>
            </Card.Body>
          </Card>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={Mael} />
            <Card.Body>
              <Card.Title style={{ color: '#000' }} >Maël CHAUVET</Card.Title>
              <Card.Text style={{ color: '#000' }} >
                Investigateur du projet
              </Card.Text>
            </Card.Body>
          </Card>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={Jeremy} />
            <Card.Body>
              <Card.Title style={{ color: '#000' }} >Jérémy CHAUVIN</Card.Title>
              <Card.Text style={{ color: '#000' }} >
                Développeur
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </React.Fragment>
    );
  }
}
 
export default Us;
