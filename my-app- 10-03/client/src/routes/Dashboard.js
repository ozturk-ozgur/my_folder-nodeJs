import React, { useContext, useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import AuthContext from "../context/AuthContext";

function Dashboard() {
  const { state } = useContext(AuthContext);
  const [users, setUsers] = useState([]);
  const [list, setList] = useState(false);

  useEffect(() => {
    setUsers(state.users);
    if (state.users !== null) {
      setList(true);
    }
  }, [state.users]);

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

      {list && (
        <table>
          <thead>
            <tr>
              <td>no</td>
              <td>name</td>
              <td>username</td>
              <td>role</td>
              <td>created at</td>
            </tr>
          </thead>
          {users.map((user, index) => (
            <tbody key={crypto.randomUUID()}>
              <tr>
                <td>{index}</td>
                <td>{user.fullname}</td>
                <td>{user.username}</td>
                <td>{user.role}</td>
                <td>{user.createdAt}</td>
              </tr>
            </tbody>
          ))}
        </table>
      )}
    </div>
  );
}

export default Dashboard;
