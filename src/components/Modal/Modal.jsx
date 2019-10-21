import React from "react";
import "./Modal.css";

const Modal = ({ sendOrder }) => {
  return (
    <div
      className="modal fade"
      id="exampleModalCenter"
      tabIndex="-1"
      role="dialog"
      aria-labelledby="exampleModalCenterTitle"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLongTitle">
              Confirm order
            </h5>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <form>
              <div className="form-group">
                <label htmlFor="first-name">First name:</label>
                <input type="text" className="form-control" id="first-name" />
              </div>
              <div className="form-group">
                <label htmlFor="second-name">Second Name</label>
                <input type="text" className="form-control" id="second-name" />
              </div>
              <div className="form-group">
                <label htmlFor="adress">Adress</label>
                <input type="text" className="form-control" id="adress" />
              </div>
              <div className="form-group">
                <label htmlFor="tel-number">Telefon Number:</label>
                <input
                  type="number"
                  className="form-control no-arrow"
                  id="tel-number"
                />
              </div>
            </form>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-dismiss="modal"
            >
              Back
            </button>
            <button
              onClick={sendOrder}
              type="button"
              className="btn btn-primary"
              data-dismiss="modal"
            >
              Confirm
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
