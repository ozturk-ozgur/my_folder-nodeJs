import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import AuthContext from "../context/AuthContext";

function Dashboard() {
  const { state } = useContext(AuthContext);
  
  if (!state.isAuth) {
    return <Navigate to="/login" />;
  }

  return (
    <div className="App-header">
      <div>Dashboard</div>
      {state.isAuth && (
        <>
          <span>Hello , {state.user.fullname}!</span>
        </>
      )}
    </div>
  );
}

export default Dashboard;
