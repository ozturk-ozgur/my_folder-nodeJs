import { useContext, useState } from "react";
import AuthContext from "../context/AuthContext";
import { Navigate } from "react-router-dom";

function Login() {
  const { state, login,isAdmin } = useContext(AuthContext);

  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const submitUserForm = async (e) => {
    e.preventDefault();
    login(user);
  };

  const submitAdminForm = async (e) => {
    e.preventDefault();
    isAdmin(user)
  };

  if (state.isAuth) return <Navigate to="/dashboard" />;

  return (
    <form className="App-header" >
      <h2>Login Form</h2>
      <input
        type="text"
        placeholder="username"
        value={user.username}
        onChange={(e) => setUser({ ...user, username: e.target.value })}
        required={true}
      />
      <input
        type="password"
        placeholder="password"
        value={user.password}
        onChange={(e) => setUser({ ...user, password: e.target.value })}
        required={true}
      />
      <button type="submit" onClick={submitUserForm}>login user</button>
      <button type="submit" onClick={submitAdminForm}>login admin</button>

    </form>
  );
}

export default Login;
