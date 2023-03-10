import React, { useContext, useEffect } from "react";
import { NavLink } from "react-router-dom";
import AuthContext from "../context/AuthContext";

function Navbar() {
  const { state, logout, loadUser } = useContext(AuthContext);

  useEffect(() => {
    if (!state.isAuth) {
      loadUser();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleLogout = () => {
    logout();
  };

  return (
    <>
      <NavLink to="/">Home</NavLink>
      {!state.isAuth ? (
        <>
          <NavLink to="/register">Register</NavLink>
          <NavLink to="/login">Login</NavLink>
        </>
      ) : (
        <>
          <NavLink to="/dashboard">Dashboard</NavLink>
          <NavLink to="/" onClick={handleLogout}>
            Logout
          </NavLink>
        </>
      )}
    </>
  );
}

export default Navbar;
