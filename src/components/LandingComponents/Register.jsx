import React from "react";
import { useFormik } from "formik";
import axios from "axios";
import swal from "sweetalert";

function Register() {
  const initialValues = {
    firstName: "",
    lastName: "",
    username: "",
    password: "",
    passwordTwo: "",
  };

  const onSubmit = (values) => {
    if (values.password === values.passwordTwo) {
      const bodyObj = {
        firstName: values.firstName,
        lastName: values.lastName,
        username: values.username,
        password: values.password,
      };
      axios
        .post("/employee", bodyObj)
        .then((res) => {
          console.log(res.data)
          localStorage.setItem("user", res.data[0][0].id);
          localStorage.setItem("username", res.data[0][0].username);
          localStorage.setItem("name", res.data[0][0].first_name);
        })
        .catch((err) => swal("Oops!", err.response.data));
    }
  };

  const validate = (values) => {
    const errors = {};
    if (!values.username) {
      errors.username = "Username Required";
    } else if (!/^[a-z0-9_-]{3,16}$/i.test(values.username)) {
      errors.username =
        "Must be between 3-16 characters, alphanumeric, and can include '-' or '_'.";
    }
    if (!values.password) {
      errors.password = "Password Required";
    } else if (values.password != values.passwordTwo) {
      errors.password = "Passwords must match";
      // errors.passwordTwo = "Passwords must match";
    }
    if (values.password.length > 20 || values.password.length < 5) {
      errors.password = "Password must be between 5 - 20 characters"
    }
    return errors;
  };
  const formik = useFormik({
    initialValues,
    onSubmit,
    validate,
  });

  return (
    <div>
      <h1>Please Input your Info</h1>
      <form onSubmit={formik.handleSubmit}>
        
        <input
          type="text"
          placeholder="First Name"
          onChange={formik.handleChange}
          value={formik.values.firstName}
          name="firstName" />
        <input
          type="text"
          placeholder="Last Name"
          onChange={formik.handleChange}
          value={formik.values.lastName}
          name="lastName" />
        <input
          type="text"
          placeholder="Username"
          onChange={formik.handleChange}
          value={formik.values.username}
          name="username" />
        <input
          type="password"
          placeholder="Password"
          onChange={formik.handleChange}
          value={formik.values.password}
          name="password" />
          <div className="form-control">
            {formik.errors.passwordTwo ? (
              <div className="error">{formik.errors.passwordTwo}</div>
            ) : null}
          </div>
        <input
          type="password"
          placeholder="Confirm Password"
          onChange={formik.handleChange}
          value={formik.values.passwordTwo}
          name="passwordTwo"
        />
        <button type="submit" disabled={!formik.isValid}>Register</button>
        <div className="form-control">
            {formik.errors.username ? (
              <div className="error">{formik.errors.username}</div>
            ) : null}
          </div>
          <div className="form-control">
            {formik.errors.password ? (
              <div className="error">{formik.errors.password}</div>
            ) : null}
          </div>
      </form>
    </div>
  );
}

export default Register;
