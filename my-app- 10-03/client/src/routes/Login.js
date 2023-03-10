import { useContext, useState } from "react";
import AuthContext from "../context/AuthContext";
import { Navigate } from 'react-router-dom';


function Login() {
  const { state, login } = useContext(AuthContext);

  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const submitForm = async (e) => {
    e.preventDefault();
    login(user);
  };

 

  if (state.isAuth) return <Navigate to='/dashboard' />;

  return (
    <form className="App-header" onSubmit={submitForm}>
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
      <button type="submit">login</button>
    </form>
  );
}

export default Login;
