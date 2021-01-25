import React, { Component } from "react";
import '../css/global.css';
import Games from '../games.json';

import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';


class ListGame extends Component {
    
    render() {
        function imageFormatter(cell){
            return "<img width='100rem' style='border-radius: 50%;' height='100rem'src='"+cell+"'/>" ;
          }
        return (
          <div>
            <BootstrapTable 
              data={ Games.Games }
              bordered={ false }
              striped
              pagination>
              <TableHeaderColumn width='40' dataField='id' isKey>#</TableHeaderColumn>
              <TableHeaderColumn width='150' dataField="logo" dataFormat={imageFormatter}>Game</TableHeaderColumn>
              <TableHeaderColumn width='150' dataField='name'>Name</TableHeaderColumn>
              <TableHeaderColumn width='150' dataField='url'>Url</TableHeaderColumn>
            </BootstrapTable>
          </div>
        );
      }
}
 
export default ListGame;
