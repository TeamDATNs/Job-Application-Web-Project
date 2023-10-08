/* import { motion } from "framer-motion";
import { useState } from "react"; */
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import ForgotPassword from "./Pages/ForgotPassword/ForgotPassword";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={<Layout />}> */}
          <Route path="/">
            <Route path="login" element={<Login />} />
            <Route path="Register" element={<Register />} />
            <Route path="ForgotPass" element={<ForgotPassword />} />
            {/* <Route path="registerSuccess" element={<RegisterSuccess />} /> */}
          </Route>
        </Routes>
      </BrowserRouter>
      {/* <Login /> */}
    </>
  );
}

export default App;
