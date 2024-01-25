import { Link } from "react-router-dom";
import { useState } from "react";

import { FcGoogle } from "react-icons/fc";

import { FaEyeSlash } from "react-icons/fa";
import { FaRegEye } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";

import LP from "../img/LP Logo.png";
import headset from "../img/headset.png";
import Misc from "../img/Misc icon.png";

import "./css/login.css";

function SignUp() {
  const [visible, setVisible] = useState(true);

  const [errMessage, setErrMessage] = useState(true);

  function removeErrMessage() {
    setErrMessage(false);
    console.log(1);
  }

  return (
    <div className="login-con">
      <div className="left-background-con">
        <div className="left-background-pic">
          <img src={LP} alt="" />
        </div>
        <p>Empower Content Creation with a User Friendly Platform</p>
      </div>

      <div className="form-con">
        <form>
          {errMessage && (
            <div className="error-message">
              <div>
                <div className="error-img">
                  <img src={Misc} alt="" />
                </div>
                <p>
                  Incorrect login details. Please double-check your username
                  <br /> and password and try again.
                </p>
                <IoMdClose
                  className="cancel"
                  onClick={() => removeErrMessage()}
                />
              </div>
            </div>
          )}
          <div>
            <h1>
              Welcome to <span>Lecture</span> <span>Podcast</span>
            </h1>
            <p className="form-header">
              Enter your details below to create an account.
            </p>
          </div>
          <label htmlFor="email">
            <input
              type="email"
              id="email"
              placeholder="ayodajialoba@gmail.com"
              required
            />
          </label>

          <div className="password-eye">
            <label htmlFor="password"></label>
            <input
              id="password"
              type={visible ? "text" : "password"}
              placeholder="Password"
            />
            <div onClick={() => setVisible(!visible)}>
              {visible ? (
                <FaRegEye className="eyes" />
              ) : (
                <FaEyeSlash className="eyes" />
              )}
            </div>
          </div>

          <div className="check-p-con">
            <div>
              <div>
                <input type="checkbox" />
              </div>
              <p>Remember me?</p>
            </div>
            <p className="forget-para">Forgot Password ?</p>
          </div>
          <button type="submit" className="login-btn">
            Login
          </button>
          <div className="google-btn">
            <div>
              <FcGoogle />
            </div>
            <div>
              <button>Sign up with google</button>
            </div>
          </div>

          <div className="login-link-headset">
            <div>
              <p>
                Already have an account? <Link to="/signup">Login</Link>
              </p>
            </div>

            <div>
              <img src={headset} alt="" />
              <p>Help and support</p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
