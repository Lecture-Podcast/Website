import { useState } from "react";

import Misc from "../img/Misc icon.png";
import { IoMdClose } from "react-icons/io";
// import ErrorMessage from "./ErrorMessage";

import LP from "../img/LP Logo.png";
import headset from "../img/headset.png";
import chevron from "../img/chevron-right.png";
import Mail from "../img/freepik--Mail--inject-20.png";
import ErrorMessage from "./ErrorMessage";

function ResetPassword() {
  const [openModal, setOpenModal] = useState(false);

  //   const [password, setPassword] = useState("");

  const [errMessage, setErrMessage] = useState(true);

  function removeErrMessage() {
    setErrMessage(false);
    console.log(1);
  }

  function submitForm() {
    setOpenModal(true);
    console.log(2);
  }

  return (
    <div className="forget-pass-con">
      <div className="forget-pass-left-background-con">
        <div className="forget-pass-left-background-pic">
          <img src={LP} alt="" />
        </div>
        <p>Empower Content Creation with a User Friendly Platform</p>
      </div>

      <div className="forget-pass-form-con">
        <div className="back">
          <div>
            <img src={chevron} alt="" />
          </div>
          <p>Go back to Login</p>
        </div>

        <form onClick={() => submitForm()}>
          {errMessage && (
            <div className="error-message">
              <div>
                <div className="error-img">
                  <img src={Misc} alt="" />
                </div>
                <p className="reset-error">
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
          <div>
            <h1>Set new password</h1>
            <p>
              Must be at least 8 characters, must contain at least one number
              and <span>one special character</span>
            </p>
          </div>

          <div className="password">
            <label htmlFor="password"></label>
            <input
              //   value={password}
              id="password"
              type="password"
              placeholder="Password"
              //   onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="password">
            <label htmlFor="confirm-password"></label>
            <input
              //   value={password}
              id="confirm-password"
              type="password"
              placeholder="Confirm Password"
              //   onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button type="submit" className="reset-password">
            Reset Password
          </button>
        </form>

        <div className="headset-p">
          <img src={headset} alt="" />
          <p>Help and support</p>
        </div>
      </div>
      {openModal && (
        <div className="modal-con">
          <div className="modal">
            <div>
              <img src={Mail} alt="" />
            </div>
            <h1>Password changed </h1>
            <p className="message-sent">
			Your password has been reset succsessfully
            </p>
            <p className="wrong-e-address">
              Wrong email address?{" "}
              <span className="re-enter-e-address">
                Re-enter your email address
              </span>
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default ResetPassword;
