import AuthContext from "./AuthContext";
import { useState } from "react";
import axios from "axios";

const UserState = ({ children }) => {
  const [state, setState] = useState({
    user: null,
    isAuth: false,
    error: null,
  });

  const register = async () => {};

  const login = async (data) => {
    const uri = "http://localhost:8080/api/v1/login";
    try {
      const res = await axios.post(uri, data);
      if (res.data) {
        setState({ ...state, user: res.data.user, isAuth: true });
      }
    } catch (error) {
      console.log(error);
    }
  };

  const logout = async () => {
    const uri = "http://localhost:8080/api/v1/logout";
    try {
      const res = await axios.get(uri);
      console.log(res);
      setState({ ...state, isAuth: false });
    } catch (error) {
      console.log(error);
    }
  };

  const loadUser = async () => {
    try {
      const res = await axios.get("http://localhost:8080/api/v1/auth",);
      console.log("load user res", res.data);
      setState({ ...state, user: res.data.user, isAuth: true });
    } catch (err) {
      setState({ ...state, user: null, isAuth: false });
    }
  };

  return (
    <AuthContext.Provider
      value={{ state, register, login, logout, loadUser, setState }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default UserState;
