import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Sidenav from "./components/Sidenav";
import NoteCard from "./components/NoteCard";
import { Modal, Form, Button } from "react-bootstrap";
import { FiPlus, FiTrash2 } from "react-icons/fi";
import { Formik } from "formik";
import * as yup from "yup";
import { connect } from "react-redux";
import * as actionTypes from "./store/action";
import { dateTimeFumc } from "./utilities/utilities";

const schema = yup.object().shape({
  noteTitle: yup
    .string()
    .min(3)
    .required("Note title is required"),
  noteDesc: yup
    .string()
    .min(3)
    .required("Note description is required")
});

const App = props => {
  return (
    <div className="app">
      <Sidenav />
      {/* Mobile add new */}
      <div className="d-md-none mobile-add-note" onClick={props.onToggleModal}>
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
              onClick={props.onToggleModal}
            >
              Add new
            </button>
          </div>
        </div>
        <div className="row">
          {props.notes.length < 1
            ? null
            : props.notes.map((note, index) => (
                <div className="col-xl-3 col-lg-4 col-6">
                  <NoteCard
                    key={index}
                    title={note.noteTitle}
                    desc={note.noteDesc}
                    date={dateTimeFumc(note.timeStamp, {
                      strokeDate: "DD/MM/YYYY"
                    })}
                    deleteClick={() => props.onDeleteNote(note.timeStamp)}
                  />
                </div>
              ))}
        </div>
      </main>
      <Modal centered show={props.show} onHide={props.onToggleModal}>
        <Modal.Body>
          <h5 className="title mb-0">Add Note</h5>
          <p className="">Enter details of your note to save</p>
          <Formik
            validationSchema={schema}
            initialValues={{
              noteTitle: "",
              noteDesc: "",
              timeStamp: new Date()
            }}
            onSubmit={(values, setSubmitting) => {
              console.log(values);
              props.onAddNote(values);
              props.onToggleModal();
            }}
          >
            {({
              handleSubmit,
              handleChange,
              handleBlur,
              values,
              touched,
              isValid,
              errors
            }) => (
              <Form noValidate onSubmit={handleSubmit}>
                <Form.Group controlId="validationFormik03">
                  <Form.Label>Note title</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter note title"
                    name="noteTitle"
                    value={values.noteTitle}
                    onChange={handleChange}
                    isInvalid={!!errors.noteTitle}
                  />

                  <Form.Control.Feedback type="invalid">
                    {errors.noteTitle}
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlTextarea1">
                  <Form.Label>Note description</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    placeholder="Enter note description"
                    name="noteDesc"
                    value={values.noteDesc}
                    onChange={handleChange}
                    isInvalid={!!errors.noteDesc}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.noteDesc}
                  </Form.Control.Feedback>
                </Form.Group>
                <div className="d-flex justify-content-end">
                  <button
                    className="btn btn-primary-outline mr-3"
                    onClick={props.onToggleModal}
                    type="button"
                  >
                    <FiTrash2 className="icon mr-3" />
                    <span className="d-iline-block align-middle">Discard</span>
                  </button>
                  <button className="btn btn-primary" type="submit">
                    Add Note
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        </Modal.Body>
      </Modal>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    show: state.show,
    notes: state.allNotes
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onToggleModal: () => dispatch({ type: actionTypes.TOGGLE_MODAL }),
    onAddNote: note => dispatch({ type: actionTypes.ADD_NOTE, value: note }),
    onDeleteNote: timeStamp =>
      dispatch({ type: actionTypes.DELETE_NOTE, timeStamp })
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
