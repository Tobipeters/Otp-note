import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Sidenav from "./components/Sidenav";
import React, { useState } from "react";
import NoteCard from "./components/NoteCard";
import { Modal } from "react-bootstrap";
import { FiPlus, FiTrash2 } from "react-icons/fi";

const App = () => {
  const [show, setShow] = useState(false);

  const toggleModal = () => setShow(!show);

  return (
    <div className="app">
      <Sidenav />
      {/* Mobile add new */}
      <div className="d-md-none mobile-add-note" onClick={toggleModal}>
        <FiPlus className="icon" />
      </div>
      <main>
        <div className="row align-items-center mb-4">
          <div className="col-md-6">
            <div className="form-group mb-0 search-bar">
              <input
                type="text"
                className="form-control "
                placeholder="Search note title"
              />
            </div>
          </div>
          <div className="col-md-6 d-flex justify-content-end">
            <button
              className="btn btn-primary d-none d-md-inline-block"
              onClick={toggleModal}
            >
              Add new
            </button>
          </div>
        </div>
        <div className="row">
          <div className="col-xl-3 col-lg-4 col-6">
            <NoteCard />
          </div>
          <div className="col-xl-3 col-lg-4 col-6">
            <NoteCard />
          </div>
          <div className="col-xl-3 col-lg-4 col-6">
            <NoteCard />
          </div>{" "}
          <div className="col-xl-3 col-lg-4 col-6">
            <NoteCard />
          </div>
          <div className="col-xl-3 col-lg-4 col-6">
            <NoteCard />
          </div>
          <div className="col-xl-3 col-lg-4 col-6">
            <NoteCard />
          </div>
          <div className="col-xl-3 col-lg-4 col-6">
            <NoteCard />
          </div>
        </div>
      </main>
      <Modal centered show={show} onHide={toggleModal}>
        <Modal.Body>
          <h5 className="title mb-0">Add Note</h5>
          <p className="">Enter details of your note to save</p>
          <form>
            <div className="mb-3">
              <label for="exampleFormControlInput1" className="form-label">
                Note title
              </label>
              <input
                type="email"
                className="form-control"
                placeholder="Enter note title"
              />
            </div>
            <div className="mb-3">
              <label for="exampleFormControlTextarea1" className="form-label">
                Note description
              </label>
              <textarea className="form-control" rows="3"></textarea>
            </div>
            <div className="d-flex justify-content-end">
              <button
                className="btn btn-primary-outline mr-3"
                onClick={toggleModal}
                type="button"
              >
                <FiTrash2 className="icon mr-3" />
                <span className="d-iline-block align-middle">Discard</span>
              </button>
              <button className="btn btn-primary" type="button">
                Add Note
              </button>
            </div>
          </form>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default App;
