import { Route, Routes } from "react-router-dom";
import Home from "../routes/Home";
import Dashboard from "../routes/Dashboard";
import Login from "../routes/Login";
import Register from "../routes/Register";
import Header from "./Header";


function Layout() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  );
}

export default Layout;
