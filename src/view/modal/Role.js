import React, { Component } from "react";

export default class Addmodal1 extends Component {
  render() {
    return (
      <div>
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
                        {this.props.title2}
                      </label>
                      <input
                        class="form-control form-control-sm  "
                        type="text"
                        aria-label="Search"
                      />
                    </div>
                    <div class="col-10 margin-20">
                      <label for="inputEmail3" class="col-form-label">
                        {this.props.title3}
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
      </div>
    );
  }
}
