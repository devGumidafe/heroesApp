import React, { useContext } from "react";
import { AuthContext } from "../../auth/AuthContext";
import { Link, NavLink, useHistory } from "react-router-dom";
import { types } from "../../types/types";
import { heroImages } from "../../helpers/heroImages";

export const Navbar = () => {
  const { user, dispatch } = useContext(AuthContext);

  const history = useHistory();

  const handleLogout = () => {
    dispatch({
      type: types.logout,
    });

    history.replace("/login");
  };

  return (
    <nav className="navbar sticky-top navbar-expand-sm navbar-dark bg-dark">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand">
          <img
            src={heroImages("./avatarHero.png").default}
            className="d-inline-block align-top navbar-image"
            alt=""
            width="80"
            height="40"
          />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink to="/marvel" className="nav-link">
                Marvel
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/dc" className="nav-link">
                DC
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/search" className="nav-link">
                Buscar
              </NavLink>
            </li>
          </ul>

          <ul className="navbar-nav ml-auto">
            <li>
              <span className="nav-item nav-link text-info">{user.name}</span>
            </li>
            <li>
              <button className="nav-item nav-link btn" onClick={handleLogout}>
                Logout
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
