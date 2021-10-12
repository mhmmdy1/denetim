import React, { Component } from "react";
import { ListGroup, ListGroupItem ,Table} from "reactstrap";

export default class CategoryList extends Component {
 
  
  render() {
    return (
        //map fonksiyonu listenin elemanlarını tek tek döner yeni nesne yapar
        //=> fonksiyon tanımı
      <div>
          
          <Table>
      <thead>
        <tr>
          
          <th>Durum</th>
          <th>Deadline</th>
          <th>Döf Sahibi</th>
          <th>Supervisor</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
      
      </tbody>
    </Table>
      </div>
    );
  }
}
