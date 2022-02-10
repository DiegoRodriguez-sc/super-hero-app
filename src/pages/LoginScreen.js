import React, { useState } from "react";

import { useDispatch } from "react-redux";
import { useFormik } from "formik";
import { startLogin } from "../actions/auth";
import logo from "../assets/Hero-App.svg";

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
  const [loading, setLoading] = useState(false);

  const formik = useFormik({
    initialValues: {
      email: "challenge@alkemy.org",
      password: "react",
    },
    validate,
    onSubmit: (values) => {
      setLoading(true);
      dispatch(startLogin(values));
      setLoading(false);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className="text-light">
      <img src={logo} alt="asd" style={{width:"15rem"}} />
      <h1 className="h3 mb-3 fw-normal">Super Login</h1>

      <div className="form-floating">
        <input
          type="email"
          className="form-control bg-dark text-light"
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
          className="form-control bg-dark text-light"
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
      <button 
       className="w-100 btn btn-lg btn-warning"
       type="submit"
       disabled={loading}
       >
        Sign in
      </button>
    </form>
  );
};

export default LoginScreen;
