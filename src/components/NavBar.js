import React from "react";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { startLogout } from "../actions/auth";
import img from "../assets/Hero-App.svg"

const NavBar = () => {

  const dispatch = useDispatch();
  const handleLogin = () => {
      dispatch(startLogout());
  };


  return (
    <nav className="navbar navbar-expand-lg sticky-top navbar-dark bg-dark">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">
          <img src={img} width="30" height="24" className="d-inline-block align-text-top" alt="logo home" />
          Hero-Team
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo02"
          aria-controls="navbarTogglerDemo02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link active" aria-current="page" to="/search">
                Search
              </NavLink>
            </li>
          </ul>
          <div className="d-flex">
            <div className="nav-item dropdown">
              <p className="nav-link dropdown-toggle text-primary" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                user
              </p>
              <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDarkDropdownMenuLink">
                <li><button className="dropdown-item" onClick={handleLogin} >logout</button></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
