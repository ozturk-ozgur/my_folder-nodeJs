import { useContext, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import AuthContext from "../context/AuthContext";

function Register() {
  const { state, setState } = useContext(AuthContext);
  const [username, setUsername] = useState("");
  const [fullname, setFullname] = useState("");
  const [password, setPassword] = useState("");
  const uri = "http://localhost:8080/api/v1/register";
  const navigate = useNavigate();
  const submitForm = async (e) => {
    try {
      e.preventDefault();
      const { data } = await axios.post(uri, {
        username: username,
        fullname: fullname,
        password: password,
      });
      setState({ ...state, user: data.user, isAuth: true });
      console.log(data);
      navigate("/dashboard");
    } catch (error) {
      console.log(error.response);
    }
  };
  return (
    <form className="App-header" onSubmit={submitForm}>
      <h2>Register Form</h2>
      <input
        type="text"
        placeholder="username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        required={true}
      />
      <input
        type="text"
        placeholder="fullname"
        value={fullname}
        onChange={(e) => setFullname(e.target.value)}
        required={true}
      />
      <input
        type="password"
        placeholder="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required={true}
      />
      <button type="submit">register</button>
    </form>
  );
}

export default Register;
