import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

export default class Navi extends Component {

  render() {
    return (
      <div>
        <nav className="navbar navbar-static-top navbar-scroll" role="navigation">
          <div className="container">
            <div className="navbar-header svd-page-scroller-arrow text-center">
              <p className="navbar-brand navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">SIS</p>
            </div>
            <div className="" id="navbar">
              <ul className="nav navbar-nav mr-auto">
                <li className="active">
                  <a aria-expanded="false" role="button" href="/"> Anasayfa</a>
                </li>
                <li className="dropdown">
                  <p aria-expanded="false" role="button" href="#" className="dropdown-toggle" data-toggle="dropdown"> Tanımlar</p>
                  <ul role="menu" className="dropdown-menu">
                    <li><a href="/Facility">Tesis Tanımı - Lokasyonlar</a></li>
                    <li><a href="/RoomType">Mahal Tipi Tanımı</a></li>
                    <li><a href="/FacilityType">Tesis Tipi Tanımı</a></li>
                    <li><a href="/SISService">Hizmet Tanımı</a></li>
                  </ul>
                </li>
                <li className="dropdown">
                  <ul role="menu" className="dropdown-menu">
                    <li><a href="/SurveyDesign">Anket Tasarımı</a></li>

                  </ul>
                </li>
                <li className="dropdown">
                  <p aria-expanded="false" role="button" href="#" className="dropdown-toggle" data-toggle="dropdown"> Denetim İşlemleri</p>
                  <ul role="menu" className="dropdown-menu">
                    <li><a href="/Period">Periyot Tanımı</a></li>
                    <li><a href="/AnswerSet">Cevap Seti &amp; Detayı</a></li>
                    <li><a href="/InspectionSet">Denetim Seti / Soruları</a></li>
                    <li><a href="/Audit">Denetim Oluştur / Devam Et</a></li>
                  </ul>
                </li>
                <li className="dropdown">
                  <p aria-expanded="false" role="button" href="#" className="dropdown-toggle" data-toggle="dropdown"> Uygunsuzluk &amp; DÖF </p>
                  <ul role="menu" className="dropdown-menu">
                    <li><a href="/InspectionUnsuitability">Uygunsuzluklar</a></li>
                    <li><a href="/PreventiveActivity">DÖF'ler</a></li>

                  </ul>
                </li>
                <li className="dropdown">
                  <p aria-expanded="false" role="button" href="#" className="dropdown-toggle" data-toggle="dropdown"> Yönetici İşlemleri</p>
                  <ul role="menu" className="dropdown-menu">
                    <li><a href="/Account">Kullanıcılar</a></li>
                    <li><a href="/Role">Roller</a></li>
                  </ul>
                </li>
                <li className="dropdown">
                  <p aria-expanded="false" role="button" href="#" className="dropdown-toggle" data-toggle="dropdown"> Administrator</p>
                  <ul role="menu" className="dropdown-menu">
                    <li><a href="/Company">Firmalar</a></li>
                  </ul>
                </li>

              </ul>
              <ul className="nav navbar-top-links navbar-right">


                <li>
                  <a href="/Logout">
                    <i className="fa fa-sign-out"></i> Çıkış
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div >
    );
  }
};