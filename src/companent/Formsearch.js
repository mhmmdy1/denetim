import React, { Component } from "react";
import "../css/formsearch.css";

export default class Formsearch extends Component {
  
  render() {
    
    return (
      <div>
        <form className="form-inline d-flex justify-content-center md-form form-sm mt-0">
          <div className="container">
            <div className="row">

              <div className="col col-12 jsend ">
                <div className="col-3">
                  <button
                    type="button"
                    className="btn btn-primary mb-2"
                    data-toggle="modal"
                    data-target="#addCustomer"
                    data-whatever="@mdo"
                  >
                  Yeni Ekle
                  </button></div>
              </div>
              
             
            </div>
            <div className="row"></div>
          </div>
        </form>

        {/* Modal Search */}
        <div
          className="modal fade"
          id="search"
          tabindex="-1"
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Search
                </h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
           
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Close
                </button>
                <button type="button" className="btn btn-primary">
                  Search
                </button>
              </div>
            </div>

          </div>
        </div>
        {/* Modal Search  End*/}

        {/* Modal Add Customer */}
      
        {/* End */}
      </div>
    );
  }
}
