// @ts-nocheck
import React, { useState, useEffect } from "react";
import Form from "./components/Form";
import Patient from "./components/Patient";
function App() {
  // *backend* (i use the local storage for expample)
  let initialPatients = JSON.parse(localStorage.getItem("patients"));
  if (!initialPatients) initialPatients = [];
  // end backend

  //first app state. contain the patients
  const [patients, setPatient] = useState(initialPatients);

  // send the states changes to the localstorage
  useEffect(() => {
    if (initialPatients) {
      localStorage.setItem("patients", JSON.stringify(patients));
    } else {
      localStorage.setItem("patients", JSON.stringify([]));
    }
  }, [patients, initialPatients]);

  const addPatient = (patient) => {
    setPatient([...patients, patient]);
  };

  const deletePatient = (id) => {
    const newState = patients.filter((patient) => patient.id !== id);
    setPatient(newState);
  };

  const patientsTitle =
    patients.length === 0 ? "Don't have Patients" : "Patients";

  return (
    <div className="container p-0 text-center color-white">
      <header>
        <h1 className="font-weight-bold">
          SERM
          <span role="img" aria-label="react icon">
            ⚛️
          </span>
        </h1>
        <small>Smart Emergency Room Manager</small>
      </header>

      <main>
        <div className="row">
          <div className="col-12 col-md-4 p-0">
            <Form addPatient={addPatient} />
          </div>

          <div className="col-12 col-md-8">
            <h2 className="font-weight-bold mb-2">{patientsTitle}</h2>
            <div className="row">
              {patients.map((patient) => (
                <Patient
                  key={patient.id}
                  patient={patient}
                  deletePatient={deletePatient}
                />
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
export default App;
