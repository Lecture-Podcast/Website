import "./App.css";
import ForgetPassword from "./components/ForgetPassword";
import Home from "./components/Home";
import Login from "./components/Login";
import ResetPassword from "./components/ResetPassword";
import SignUp from "./components/SignUp";

import { BrowserRouter, Route, Routes } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="login" element={<Login />} />
        <Route path="forget" element={<ForgetPassword />} />
        <Route path="reset" element={<ResetPassword />} />
       
          

      </Routes>
      
      
    </BrowserRouter>
  );
}

export default App;
