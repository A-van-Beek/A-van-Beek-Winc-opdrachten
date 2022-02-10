import React from "react";
import "./App.css";

/**
 * Challenge: Connect the form to local state
 *
 * 4. Also when submitting the form, if the person checked
 *    the "newsletter" checkbox, log "Thanks for signing
 *    up for our newsletter!" to the console.
 */

export default function App() {
  const [formData, setFormData] = React.useState({
    email: "",
    password: "",
    confirmPassword: "",
    okayToEmail: false,
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

  // console.log(formData);

  function handleSubmit(event) {
    event.preventDefault();
    //via een ternary:
    formData.password === formData.confirmPassword
      ? console.log("Successfully signed up")
      : console.log("Passwords do not match");
    // of via een if-statement:
    // if (formData.password === formData.confirmPassword) {
    //   console.log("Successfully signed up");
    // } else console.log("passwords to not match");
    if (
      formData.password === formData.confirmPassword &&
      formData.okayToEmail === true
    ) {
      console.log("Thanks for signing up for our newsletter!");
    }
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
