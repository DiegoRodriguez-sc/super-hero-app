import React from "react";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import logo from "../assets/Hero-App.svg";
import { useDispatch } from "react-redux";
import { startLogin } from "../actions/auth";

const validate = (values) => {
  const errors = {};
  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }

  if (!values.password) {
    errors.password = "Required";
  } else if (values.password.length < 3) {
    errors.password = "Must be 3 characters or more";
  }

  return errors;
};

const LoginScreen = () => {

  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      email: "challenge@alkemy.org",
      password: "react",
    },
    validate,
    onSubmit: (values) => {
      dispatch(startLogin(values));
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <img src={logo} alt="asd" style={{width:"15rem"}} />
      <h1 className="h3 mb-3 fw-normal">Super Login</h1>

      <div className="form-floating">
        <input
          type="email"
          className="form-control"
          id="floatingInput"
          name="email"
          placeholder="name@example.com"
          autoComplete="off"
          autoFocus
          onChange={formik.handleChange}
          value={formik.values.email}
        />
        <label htmlFor="floatingInput">Email address</label>
        {formik.errors.email ? (
          <div className="form-text text-danger ">{formik.errors.email}</div>
        ) : null}
      </div>
      <div className="form-floating">
        <input
          type="password"
          className="form-control"
          id="floatingPassword"
          name="password"
          placeholder="Password"
          onChange={formik.handleChange}
          value={formik.values.password}
        />
        <label htmlFor="floatingPassword">Password</label>
        {formik.errors.password ? (
          <div className="form-text text-danger ">{formik.errors.password}</div>
        ) : null}
      </div>
      <button className="w-100 btn btn-lg btn-primary" type="submit">
        Sign in
      </button>
      <Link className="btn btn-link text-black" to="/auth/register">
        Create Account
      </Link>
    </form>
  );
};

export default LoginScreen;
