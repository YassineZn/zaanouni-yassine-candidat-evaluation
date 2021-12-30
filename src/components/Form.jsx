import React from "react";
import "./Form.css";
export default function Form({ handleSubmit, handleChange }) {
  return (
    <div className="formContainer">
      <form onSubmit={handleSubmit} className="mainForm">
        <div className="nameContainer">
          <label htmlFor="name">Nom</label>
          <input
            type="text"
            name="name"
            id="name"
            onChange={handleChange}
            required
          />
        </div>
        <div className="nameContainer">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            onChange={handleChange}
            required
          />
        </div>
        <div className="btnContainer">
          <input className="btn btn-annuler" type="reset" value="Annuler" />
          <input className="btn btn-valider" type="submit" value="Valider" />
        </div>
      </form>
    </div>
  );
}
