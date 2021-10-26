import React from "react";
import { FaUserAlt } from "react-icons/fa";
import { IoExitOutline } from "react-icons/io5";
import DataTable from "./DataTable";
import Rapor1 from "./Rapor1";
import Formsearch from "./Formsearch";
import Chartjs from "./Chartjs";
import Addmodal  from "../view/modal/Addmodal";
import Addmodal1 from "../view/modal/AddMahal"; 

import { BrowserRouter as Router, Switch, Link, Route } from "react-router-dom";

const Table1 = (props) => {

  return (
    
  
    <Router>
      <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              {" "}
              <div className="dropdown">
                  <Link className="dropdown-item" to="/anasayfa">Anasayfa</Link>
              </div>
              <div className="dropdown">
                <button
                  className="btn  dropdown-toggle"
                  type="button"
                  id="dropdownMenuButton"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Tanımlar
                </button>
                <div
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuButton"
                >
                  <a  href="/">
                  <Link className="dropdown-item" to="/tesistanımı">Tesis Tanımı-Lokasyonlar</Link>
                  </a>
                  <a  href="/">
                  <Link className="dropdown-item" to="/mahaltipitanımı">Mahal Tipi Tanımı</Link>
                    
                  </a>
                  <a  href="/">
                  <Link className="dropdown-item" to="/tesistipitanımı">Tesis Tipi Tanımı</Link>
                    
                  </a>
                  <a href="/">
                  <Link className="dropdown-item" to="/hizmettanımı">Hizmet Tanımı</Link>
                  
                  </a>
                </div>
              </div>
              <div className="dropdown">
                <button
                  className="btn  dropdown-toggle"
                  type="button"
                  id="dropdownMenuButton"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Denetim İşlemleri
                </button>
                <div
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuButton"
                >
                 <a href="/">
                  <Link className="dropdown-item" to="/periyottanımı">Periyot Tanımı</Link>
                  
                  </a>
                  <a href="/">
                  <Link className="dropdown-item" to="/cevapsetidetayı">Cevap Seti & Detayı</Link>
                  
                  </a>
                  <a  href="/">
                  <Link className="dropdown-item" to="/denetimsetisorular">Denetim Seti / Soruları</Link>
                  </a>
                    <a  href="/">
                  <Link className="dropdown-item" to="/denetimolustur">Denetim Oluştur / Devam Et</Link>
                  </a>
                </div>
              </div>
              <div className="dropdown">
                <button
                  className="btn  dropdown-toggle"
                  type="button"
                  id="dropdownMenuButton"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Uygunsuzluk & DÖF
                </button>
                <div
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuButton"
                >
                    <a  href="/">
                  <Link className="dropdown-item" to="/uygunsuzluklar">Uygunsuzluklar</Link>
                  </a>
                  <a  href="/">
                  <Link className="dropdown-item" to="/döfler">Döf'ler</Link>
                  </a>
                </div>
              </div>
              <div className="dropdown">
                <button
                  className="btn  dropdown-toggle"
                  type="button"
                  id="dropdownMenuButton"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Yönetici İşlemleri
                </button>
                <div
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuButton"
                >               
                  <a  href="/">
                  <Link className="dropdown-item" to="/kullanicilar">Kullanıcılar</Link>
                  </a>
                  <a  href="/">
                  <Link className="dropdown-item" to="/roller">Roller</Link>
                  </a>
                </div>
              </div>
              <div className="dropdown">
                <button
                  className="btn  dropdown-toggle"
                  type="button"
                  id="dropdownMenuButton"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Administrator
                </button>
                <div
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuButton"
                >
                   <a  href="/">
                  <Link className="dropdown-item" to="/firmalar">Firmalar</Link>
                  </a>
                </div>
              </div>
            </ul>
            <form className="form-inline my-2 my-lg-0">
              <button
                className="btn  "
                type="button"
                id="dropdownMenuButton"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <FaUserAlt /> test@gmail.com
              </button>

              <button
                className="btn btn-outline-success my-2 my-sm-0"
                type="submit"
              >
                <IoExitOutline /> Çıkış
              </button>
            </form>
          </div>
        </nav>

        <div>
          <Switch>
            <Route path="/home">
              <Rapor1 />
            </Route>
            <Route path="/mahaltipitanımı">
              <div class="container margin40">
                <Formsearch  title="Mahal Tipi Ekle" title2="Mahal Tipi Adı *" title3="Mahal Tipi Kodu *"/>
                <Addmodal1 title="Mahal Tipi Ekle" title2="Mahal Tipi Adı *" title3="Mahal Tipi Kodu *"/>
               <hr></hr><br />
                <DataTable title="Mahal Tipi Adı" title2="Mahal Tipi Kodu"/>
              </div>
            </Route>
            <Route path="/tesistipitanımı">
              <div class="container margin40">
                <Formsearch />
                <Addmodal title="Tesis Tipi ekle" title2="Tesis Tipi Adı *" title3="Tesis Tipi Kodu *"/>
                <hr></hr><br />
                <DataTable title="Tesis Tipi Adı" title2="Tesis Tipi Kodu" />
              </div>
            </Route>
            <Route path="/hizmettanımı">
              <div class="container margin40">
                <Formsearch  title="Hizmet ekle" title2="Hizmet Adı *" title3="Hizmet Kodu *" />
                <hr></hr><br />
                <DataTable title="Hizmet Tanımı Adı" title2="Hizmet Tanımı Kodu"/>
              </div>
            </Route>
            <Route path="/periyottanımı">
              <div class="container margin40">
                <Formsearch title="Periyot add" title2="Periyot Adı *" title3="Periyot Kodu *" />
                <hr></hr><br />
                <DataTable title="Periyot Adı" title2="Başlangıç Tarihi"/>
              </div>
            </Route>
            <Route path="/">
              <div class="container margin40">
                <Chartjs></Chartjs>
                <Rapor1 /></div>
            </Route>
            <Route path="/contracts">
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default Table1;
