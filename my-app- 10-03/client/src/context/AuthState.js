import AuthContext from "./AuthContext";
import { useState } from "react";
import axios from "axios";

const UserState = ({ children }) => {
  const [state, setState] = useState({
    user: null,
    isAuth: false,
    error: null,
    users:null
  });

  const register = async () => {};

  const isAdmin = async (data) => {
    const uri = "http://localhost:8080/api/v1/admin";
    try {
      const res = await axios.post(uri, data);
      setState({ ...state, user: res.data.user,users : res.data.users ,isAuth: true });
    } catch (error) {
      setState({ ...state, user: null, isAuth: false });
      console.log(error);
    }
  };

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
      await axios.get(uri);
      setState({ ...state, isAuth: false , users : null });
    } catch (error) {
      console.log(error);
    }
  };

  const loadUser = async () => {
    try {
      const res = await axios.get("http://localhost:8080/api/v1/auth");
      console.log("load user res", res.data);
      setState({ ...state, user: res.data.user, isAuth: true });
    } catch (err) {
      setState({ ...state, user: null, isAuth: false });
    }
  };

  return (
    <AuthContext.Provider
      value={{ state, register, login, logout, loadUser, setState, isAdmin }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default UserState;
