import { Link } from "react-router-dom";
import { useState } from "react";

import "react-phone-input-2/lib/style.css";
import PhoneInput from "react-phone-input-2";

import { FcGoogle } from "react-icons/fc";
import { FaEyeSlash } from "react-icons/fa";
import { FaRegEye } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";

import Misc from "../img/Misc icon.png";
import LP from "../img/LP Logo.png";
import headset from "../img/headset.png";

import "./css/signUp.css";

function SignUp() {
  const [visible, setVisible] = useState(true);

  const [confirmPassVisible, setConfirmPassVisible] = useState(true);

  const [errMessage, setErrMessage] = useState(true);

  function removeErrMessage() {
    setErrMessage(false);
  }

  return (
    <div className="sign-up">
      <div className="left-side">
        <div className="logo">
          <img src={LP} alt="" />
        </div>
        <p>Empower Content Creation with a User Friendly Platform</p>
      </div>
      <div className="right-side">
        {errMessage && (
          <div className="error-message">
            <div>
              <div className="error-img">
                <img src={Misc} alt="" />
              </div>
              <p>
                Passwords do not match. Please ensure both entries are
                identical.
              </p>
              <IoMdClose
                className="cancel"
                onClick={() => removeErrMessage()}
              />
            </div>
          </div>
        )}
        <form>
          <div>
            <h1>
              <span>Welcome to</span> <span>Lecture</span> Podcast
            </h1>
            <p>Enter your details below to create an account.</p>
          </div>
          <label htmlFor="name">
            <input type="text" id="name" placeholder="Ayodaji Aloba" required />
          </label>
          <label htmlFor="email">
            <input
              type="email"
              id="email"
              placeholder="ayodajialoba@gmail.com"
              required
            />
          </label>
          <div className="phone-num">
            <label htmlFor="number">
              <PhoneInput
                className="number"
                id="number"
                country={"ng"}
                // 			value={***}
                //   onChange={****}
                // inputProps={{
                //   required: true
                // }}
              />
              {/* <div>
                <img src={nigNumber} alt="country-flag-number" />
              </div>
              <input type="number" id="number" /> */}
            </label>
          </div>
          <label htmlFor="areaOfExpertise">
            <select id="areaOfExpertise">
              <option>Area of expertise</option>
              <option value="lecturer">Lecturer</option>
              <option value="student">Student</option>
              <option value="contentCreators">Content Creators</option>
            </select>
          </label>
          <label htmlFor="affiliatedInstitution">
            <select id="affiliatedInstitution">
              <option>Affiliated Institution</option>
              <option value="Abubakar Tafawa Balewa University (ATBU)">
                Abubakar Tafawa Balewa University (ATBU)
              </option>
              <option value="Alex Ekwueme Federal University Ndufu-Alike, Ebonyi">
                Alex Ekwueme Federal University Ndufu-Alike, Ebonyi
              </option>
              <option value="University of Abuja">University of Abuja</option>
              <option value="University of Ibadan (UI)">
                University of Ibadan (UI)
              </option>
              <option value="University of Lagos (UNILAG)">
                University of Lagos (UNILAG)
              </option>
              <option value="Lagos State University (LASU)">
                Lagos State University (LASU)
              </option>
              <option value="Account settings">Account settings</option>
              <option value="Account settings">Account settings</option>
            </select>
          </label>

          <div className="password">
            <label htmlFor="password"></label>
            <input
              id="password"
              type={visible ? "text" : "password"}
              placeholder="Password"
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

          <div className="password">
            <label htmlFor="confirm-password"></label>
            <input
              id="confirm-password"
              type={confirmPassVisible ? "text" : "password"}
              placeholder="Confirm Password"
            />
            <div
              className="input-absolute"
              onClick={() => setConfirmPassVisible(!confirmPassVisible)}>
              {confirmPassVisible ? (
                <FaRegEye className="eyes" />
              ) : (
                <FaEyeSlash className="eyes" />
              )}
            </div>
          </div>

          <div className="check-con">
            <input type="checkbox" />
            <p>Agree to terms of service and privacy policy</p>
          </div>
          <button type="submit">Sign up</button>
          <div className="google-btn">
            <div>
              <FcGoogle />
            </div>
            <p>Sign up with google</p>
          </div>
        </form>

        <div className="login-support">
          <div>
            Already have an account? <Link to="/login">Login</Link>
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

export default SignUp;
