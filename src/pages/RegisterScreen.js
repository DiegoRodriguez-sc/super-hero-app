import React from "react";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import logo from "../assets/Hero-App.svg";

const validate = (values) => {
  const errors = {};
  if (!values.name) {
     errors.name = "Required";
   } else if (
     ["admin", "god", "true", "false"].includes(values.name.toLowerCase())
   ) {
     errors.name = "Nice try";
   }

  if (!values.email) {
    errors.email = "Required";
   } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
     errors.email = "Invalid email address";
   }

  if (!values.password) {
    errors.password = "Required";
   } else if (values.password.length < 6) {
    errors.password = "Must be 6 characters or more";
   }

  if (!values.password2) {
    errors.password = "Required";
   } else if (values.password2.length < 6) {
    errors.password2 = "Must be 6 characters or more";
   } else if (values.password !== values.password2) {
     errors.password2 = "Must be equals passwords";
   }

  return errors;
};

const RegisterScreen = () => {
  const formik = useFormik({
    initialValues: {
      name:"",
      email: "",
      password: "",
      password2: "",
    },
    validate,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <img src={logo} alt="hero logo " style={{width:"13rem"}} />
      <h1 className="h3 mb-3 fw-normal">Super Register</h1>

      <div className="form-floating">
        <input
          type="text"
          className="form-control"
          id="floatingInputName"
          name="name"
          placeholder="name..."
          autoComplete="off"
          autoFocus
          onChange={formik.handleChange}
          value={formik.values.name}
        />
        <label htmlFor="floatingInputName">Name</label>
        {formik.errors.name ? (
          <div className="form-text text-danger ">{formik.errors.name}</div>
        ) : null}
      </div>

      <div className="form-floating">
        <input
          type="email"
          className="form-control"
          id="floatingInputEmail"
          name="email"
          placeholder="name@example.com..."
          autoComplete="off"
          onChange={formik.handleChange}
          value={formik.values.email}
        />
        <label htmlFor="floatingInputEmail">Email address</label>
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
          placeholder="Password..."
          onChange={formik.handleChange}
          value={formik.values.password}
        />
        <label htmlFor="floatingPassword">Password</label>
        {formik.errors.password ? (
          <div className="form-text text-danger ">{formik.errors.password}</div>
        ) : null}
      </div>

      <div className="form-floating">
        <input
          type="password"
          className="form-control"
          id="floatingPassword2"
          name="password2"
          placeholder="Confirm Password..."
          onChange={formik.handleChange}
          value={formik.values.password2}
        />
        <label htmlFor="floatingPassword2">Confirm Password</label>
        {formik.errors.password2 ? (
          <div className="form-text text-danger ">
            {formik.errors.password2}
          </div>
        ) : null}
      </div>

      <button className="w-100 btn btn-lg btn-primary" type="submit">
        Register
      </button>
      <Link className="btn btn-link text-black" to="/auth/login">
        Sing In
      </Link>
    </form>
  );
};

export default RegisterScreen;
