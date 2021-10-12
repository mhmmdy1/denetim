import React, { Component } from 'react'
import { Nav, NavItem,NavLink,ListGroupItem ,Table} from "reactstrap";

export default class ProductList extends Component {
    render() {
        return (
            <div>
             
      <Nav>
        <NavItem>
          <NavLink style={{color: "black"}} href="#">Anasayfa</NavLink>
        </NavItem>
        <NavItem>
          <NavLink style={{color: "black"}} href="#">Tanımlar</NavLink>
        </NavItem>
        <NavItem>
          <NavLink style={{color: "black"}} href="#">Denetim İşlemleri</NavLink>
        </NavItem>
        <NavItem>
          <NavLink style={{color: "black"}} href="#">Uygunsuzluk & DÖF</NavLink>
        </NavItem>
        <NavItem>
          <NavLink style={{color: "black"}} href="#">Yönetici İşlemleri</NavLink>
        </NavItem>
        <NavItem>
          <NavLink style={{color: "black"}}  href="#">Administrator</NavLink>
        </NavItem>
        <NavItem>
          <NavLink style={{color: "black"}} >test@gmail.com</NavLink>
        </NavItem>
        <NavItem>
          <NavLink style={{color: "black"}}  href="#">Çıkış</NavLink>
        </NavItem>
      </Nav>
      <hr />
   
            </div>
        )
    }
}
