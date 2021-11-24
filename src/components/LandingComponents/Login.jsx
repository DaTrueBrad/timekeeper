import axios from "axios";
import React from "react";
import swal from "sweetalert";
import {FormikProvider, useFormik} from 'formik'

function Login(props) {
  const initialValues = {
    username: "",
    password: "",
  };
  const onSubmit = (values) => {
    const userData = {
      username: values.username,
      password: values.password,
    };

    axios
      .post("/login", userData)
      .then((res) => {
        console.log(res)
        localStorage.setItem("user", res.data.id);
        localStorage.setItem("username", res.data.username);
        localStorage.setItem("name", res.data.first_name);
        props.isLoggedIn()
      })
      .catch((err) => swal("Oops!", err.response.data));
  };
  const formik = useFormik({
    initialValues,
    onSubmit
  });

  return (
    <div className="page-container">
      <h1>Please Log In</h1>
      <form onSubmit={formik.handleSubmit}>
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
        <button type="submit" disabled={!formik.isValid}>Login</button>
      </form>
      <small>
        Not Registered? <a href="/register">Click Here</a>
      </small>
    </div>
  );
}

export default Login;
