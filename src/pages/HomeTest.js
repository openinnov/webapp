import React, { Component } from "react";
import '../css/global.css';
import minecraft from '../assets/images/logoGame/minecraft.jpg';
import fortnite from '../assets/images/logoGame/fortnite.jpg';
import fallGuys from '../assets/images/logoGame/fallGuys.jpeg';
import overwatch from '../assets/images/logoGame/overwatch.jpeg';
import amongus from '../assets/images/logoGame/amongus.jpg';
import rocketlegue from '../assets/images/logoGame/rocketleague.jpeg';
import leagueof from '../assets/images/logoGame/leageof.jpg';
import roblox from '../assets/images/logoGame/roblox.jpg';
import smite from '../assets/images/logoGame/smite.jpg';
import worldofwarcraft from '../assets/images/logoGame/worldof.jpg';
import counterstrike from '../assets/images/logoGame/counterstrike.jpg';
import valorant from '../assets/images/logoGame/valorant.jpg';
import hearthstone from '../assets/images/logoGame/hearthstone.jpg';
import dota from '../assets/images/logoGame/dota.jpg';
import apex from '../assets/images/logoGame/apex.jpg';
import destiny from '../assets/images/logoGame/destiny.jpg';

import { Table, Image } from 'react-bootstrap';


class Contact extends Component {
 
  render() {
    return (
      <React.Fragment>        
        <Table striped bordered responsive="sm" variant="dark">
            <thead>
            <tr>
                <th>#</th>
                <th>Game</th>  
                <th>Name</th>        
                <th>Url</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>1</td>
                <td><Image src={minecraft} width="100rem" height="100rem" roundedCircle /></td>
                <td>Minecraft</td>
                <td>@minecraft</td>
            </tr>
            <tr>
                <td>2</td>
                <td><Image src={fortnite} width="100rem" height="100rem" roundedCircle  /></td>
                <td>Fortnite</td>
                <td>@fortnite</td>
            </tr>
            <tr>
                <td>3</td>
                <td><Image src={fallGuys} width="100rem" height="100rem" roundedCircle /></td>
                <td>Fall Guys: Ultimate Knockout</td>
                <td>@fallguys</td>
            </tr>
            <tr>
                <td>4</td>
                <td><Image src={rocketlegue} width="100rem" height="100rem" roundedCircle  /></td>
                <td>Rocket League</td>
                <td>@rocketleague</td>
            </tr>
            <tr>
                <td>5</td>
                <td><Image src={overwatch} width="100rem" height="100rem" roundedCircle /></td>
                <td>Overwatch</td>
                <td>@overwatch</td>
            </tr>
            <tr>
                <td>6</td>
                <td><Image src={amongus} width="100rem" height="100rem" roundedCircle  /></td>
                <td>Among Us</td>
                <td>@amongus</td>
            </tr>
            <tr>
                <td>7</td>
                <td><Image src={leagueof} width="100rem" height="100rem" roundedCircle /></td>
                <td>League of Legends</td>
                <td>@leagueoflegends</td>
            </tr>
            <tr>
                <td>8</td>
                <td><Image src={valorant} width="100rem" height="100rem" roundedCircle  /></td>
                <td>Valorant</td>
                <td>@valorant</td>
            </tr>
            <tr>
                <td>9</td>
                <td><Image src={counterstrike} width="100rem" height="100rem" roundedCircle /></td>
                <td>Counter-Strike: Global Offensive</td>
                <td>@counterstrike</td>
            </tr>
            <tr>
                <td>10</td>
                <td><Image src={worldofwarcraft} width="100rem" height="100rem" roundedCircle  /></td>
                <td>World of Warcraft</td>
                <td>@worldofwarcraft</td>
            </tr>
            <tr>
                <td>11</td>
                <td><Image src={roblox} width="100rem" height="100rem" roundedCircle  /></td>
                <td>Roblox</td>
                <td>@roblox</td>
            </tr>
            <tr>
                <td>12</td>
                <td><Image src={smite} width="100rem" height="100rem" roundedCircle  /></td>
                <td>Smite</td>
                <td>@smite</td>
            </tr>
            <tr>
                <td>13</td>
                <td><Image src={destiny} width="100rem" height="100rem" roundedCircle /></td>
                <td>Destiny 2</td>
                <td>@destiny2</td>
            </tr>
            <tr>
                <td>14</td>
                <td><Image src={hearthstone} width="100rem" height="100rem" roundedCircle  /></td>
                <td>Hearthstone</td>
                <td>@hearthstone</td>
            </tr>
            <tr>
                <td>15</td>
                <td><Image src={dota} width="100rem" height="100rem" roundedCircle  /></td>
                <td>Dota 2</td>
                <td>@dota2</td>
            </tr>
            <tr>
                <td>16</td>
                <td><Image src={apex} width="100rem" height="100rem" roundedCircle  /></td>
                <td>Apex Legends</td>
                <td>@apex</td>
            </tr>
            </tbody>
        </Table>
        
      </React.Fragment>
    );
  }
}
 
export default Contact;
