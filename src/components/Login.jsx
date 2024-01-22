import { Link } from "react-router-dom";
import { useState } from "react";

import { FcGoogle } from "react-icons/fc";
import { IoMdClose } from "react-icons/io";

import { FaEyeSlash } from "react-icons/fa";
import { FaRegEye } from "react-icons/fa";

import LP from "../img/LP Logo.png";
import headset from "../img/headset.png";
import Misc from "../img/Misc icon.png";

function Login() {
  //   const [password, setPassword] = useState("");

  const [visible, setVisible] = useState(true);

  return (
    <div className="container">
      <div className="left-side">
        <div className="logo">
          <img src={LP} alt="" />
        </div>
        <p>Empower Content Creation with a User Friendly Platform</p>
      </div>
      <div className="right-side">
        <div className="error-message">
          <div>
            {/* <div> */}
            <img src={Misc} alt="" />
            {/* </div> */}
            <p>
              Incorrect login details. Please double-check your username and
              password and try again.
            </p>
            <IoMdClose />
          </div>
        </div>
        <form>
          <div>
            <h1>
              <span>Welcome to</span> <span>Lecture</span> Podcast
            </h1>
            <p>Enter your details below to create an account.</p>
          </div>

          <label htmlFor="email">
            <input type="email" id="email" placeholder="Email" required />
          </label>

          <div className="password">
            <label htmlFor="password"></label>
            <input
              //   value={password}
              id="password"
              type={visible ? "text" : "password"}
              placeholder="Password"
              //   onChange={(e) => setPassword(e.target.value)}
            />
            <div
              className="input-absolute"
              onClick={() => setVisible(!visible)}>
              {visible ? (
                <FaRegEye className="eyes" />
              ) : (
                <FaEyeSlash className="eyes" />
              )}
            </div>
          </div>

          <div className="check-con-forget-password">
            <div>
              <input type="checkbox" />
              <span>Remember Me</span>
            </div>
            <p>Forget Password?</p>
          </div>
          <button type="submit">Login</button>
          <div className="google-btn">
            <div>
              <FcGoogle />
            </div>
            <p>Sign up with google</p>
          </div>
        </form>

        <div className="login-support">
          <div>
            Already have an account? <Link to="/signup">Sign up</Link>
          </div>

          <div>
            <img src={headset} alt="" />
            <p>Help and support</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
