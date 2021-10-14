import React, { Component } from "react";
import "../css/formsearch.css";

export default class Formsearch extends Component {
  
  render() {
    
    return (
      <div>
        <form class="form-inline d-flex justify-content-center md-form form-sm mt-0">
          <div class="container">
            <div class="row">

              <div class="col col-12 jsend ">
                <div class="col-3">
                  <button
                    type="button"
                    class="btn btn-primary mb-2"
                    data-toggle="modal"
                    data-target="#addCustomer"
                    data-whatever="@mdo"
                  >
                  Yeni Ekle
                  </button></div>
              </div>
              
             
            </div>
            <div class="row"></div>
          </div>
        </form>

        {/* Modal Search */}
        <div
          class="modal fade"
          id="search"
          tabindex="-1"
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">
                  Search
                </h5>
                <button
                  type="button"
                  class="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
           
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Close
                </button>
                <button type="button" class="btn btn-primary">
                  Search
                </button>
              </div>
            </div>

          </div>
        </div>
        {/* Modal Search  End*/}

        {/* Modal Add Customer */}
        <div
          class="modal fade"
          id="addCustomer"
          tabindex="-1"
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">
                  {this.props.title}
                </h5>
                <button
                  type="button"
                  class="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <form>
                  <div class="form-group">
                 
                  
                    <div class="col-10 margin-20">
                      <label for="inputEmail3" class="col-form-label">
                      {this.props.title}
                      </label>
                      <input
                        class="form-control form-control-sm  "
                        type="text"
                      
                        aria-label="Search"
                      />
                    </div>
                    <div class="col-10 margin-20">
                      <label for="inputEmail3" class="col-form-label">
                      Mahal Tipi Kodu *
                      </label>
                      <input
                        class="form-control form-control-sm  "
                        type="text"
                     
                        aria-label="Search"
                      />
                    </div>
                  </div>

                </form>
              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Geri
                </button>
                <button type="button" class="btn btn-primary">
                  Kaydet
                </button>
              </div>
            </div>

          </div>
        </div>
        {/* End */}
      </div>
    );
  }
}
