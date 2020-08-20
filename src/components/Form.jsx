import React, { Fragment, useState } from "react";
import uuid from "uuid/dist/v4";
import PropTypes from "prop-types";

const Form = ({ addPatient }) => {
  const [patient, newPatient] = useState({
    name: "",
    dni: "",
    hour: "",
    severity: "",
    symptoms: "",
  });
  //control the error state
  const [error, setError] = useState(false);
  //handler the interactions with the form
  const handleState = (e) => {
    newPatient({
      ...patient,
      [e.target.name]: e.target.value,
    });
  };

  const { name, dni, hour, severity, symptoms } = patient;
  //this function validate,assign a id,reset the form and pass the state to patients state
  const submitPatient = (e) => {
    e.preventDefault();

    if (
      name.trim() === "" ||
      dni.trim() === "" ||
      hour.trim() === "" ||
      severity.trim() === "" ||
      symptoms.trim() === ""
    ) {
      return setError(true);
    }
    setError(false);
    patient.id = uuid();
    addPatient(patient);
    newPatient({
      name: "",
      dni: "",
      hour: "",
      severity: "",
      symptoms: "",
    });
  };

  return (
    <Fragment>
        <h2 className="font-weight-bold">New Patient</h2>
      <div className="jumbotron bg-light shadow-lg text-dark p-3 m-1">

        {error === true ? (
          <div className="alert alert-danger m-n1 p-1" role="alert">
            all field its required!
          </div>
        ) : null}

        <form
          className="form-group text-left"
          onSubmit={submitPatient}
          method="post"
        >
          <label>Fullname</label>

          <input
            className="form-control"
            type="text"
            name="name"
            placeholder="Patient Fullname"
            onChange={handleState}
            value={name}
          />

          <label>DNI</label>

          <input
            className="form-control"
            type="text"
            name="dni"
            placeholder="Patient DNI"
            onChange={handleState}
            value={dni}
          />

          <label>Admission Hour</label>

          <input
            className="form-control"
            type="time"
            name="hour"
            onChange={handleState}
            value={hour}
          />

          <label>Severity</label>

          <select
            className="form-control"
            onChange={handleState}
            name="severity"
            value={severity}
          >
            <option value="null">Select a severity</option>
            <option value="surgery">0 - surgery</option>
            <option value="Low">1 - low</option>
            <option value="Medium">2 - medium</option>
            <option value="High">3 - high</option>
            <option value="Emergency">4 - emergency</option>
          </select>

          <label>Symptoms</label>

          <textarea
            className="form-control"
            name="symptoms"
            cols="2"
            rows="2"
            placeholder="Patient symptoms"
            onChange={handleState}
            value={symptoms}
          ></textarea>

          <button
            className="form-control btn btn-primary btn-block mt-1"
            type="submit"
          >
            Register
          </button>
        </form>
      </div>
    </Fragment>
  );
};

Form.propTypes = {
  addPatient: PropTypes.func.isRequired,
};

export default Form;
