import React, { Component } from "react";
import '../css/global.css';
import ListGame from "../components/ListGame";
import { Image } from 'react-bootstrap';

class Home extends Component {
    render() {
        return (
            <div>
                <div width="100%">
                    <Image 
                    className="ImageHeaderTitle"
                    src="https://compass-ssl.xbox.com/assets/cd/23/cd23b1a0-65c2-4986-b8f6-bce08f281ec9.jpg?n=PC-Gaming_Page-Hero_1084_XGPU_1920x1080_02.jpg">
                    </Image>
                    <h1 className="TitleImage" >WORLD GAMING REFERENCE</h1>
                </div>
                <ListGame />
            </div>
        );
    }
}

export default Home;
            
 
