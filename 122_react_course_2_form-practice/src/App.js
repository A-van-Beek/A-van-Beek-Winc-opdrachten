import React from "react";
import "./App.css";

export default function App() {
  const [formData, setFormData] = React.useState({
    email: "",
    password: "",
    confirmPassword: "",
    okayToEmail: true,
  });

  console.log(formData);

  function handleChange(event) {
    const { name, value, type, checked } = event.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log(formData);
  }

  return (
    <div className="form-container">
      <form className="form" onSubmit={handleSubmit}>
        <input
          name="email"
          type="email"
          placeholder="Email address"
          className="form--input"
          onChange={handleChange}
          value={formData.email}
        />
        <input
          name="password"
          type="password"
          placeholder="Password"
          className="form--input"
          onChange={handleChange}
          value={formData.password}
        />
        <input
          name="confirmPassword"
          type="password"
          placeholder="Confirm password"
          className="form--input"
          onChange={handleChange}
          value={formData.confirmPassword}
        />

        <div className="form--marketing">
          <input
            name="okayToEmail"
            id="okayToEmail"
            type="checkbox"
            onChange={handleChange}
            checked={formData.okayToEmail}
          />
          <label htmlFor="okayToEmail">I want to join the newsletter</label>
        </div>
        <button className="form--submit">Sign up</button>
      </form>
    </div>
  );
}
