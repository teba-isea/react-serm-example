import React from "react";
import PropTypes from "prop-types";

const Patient = ({ patient, deletePatient }) => {
  const { name, dni, hour, severity, symptoms, id } = patient;

  return (
    <div className="m-0 col-6 col-md-4">
      <div
        className="card shadow text-left bg-primary"
        style={{ maxWidth: 14 + "rem" }}
      >
        <div className="card-body p-2">
          <h5 className="card-title">{severity}</h5>
          <p className="card-text">Name: {name}</p>
          <p className="card-text">DNI: {dni}</p>
          <p className="card-text">Admission: {hour}</p>
          <p className="card-text">Symptoms: {symptoms}</p>
          <button className="btn btn-success" onClick={() => deletePatient(id)}>
            cared &times;
          </button>
        </div>
      </div>
    </div>
  );
};

Patient.propTypes = {
  key: PropTypes.string.isRequired,
  patient: PropTypes.object.isRequired,
  deletePatient: PropTypes.func.isRequired,
};

export default Patient;
