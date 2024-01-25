import Misc from "../img/Misc icon.png";
import { IoMdClose } from "react-icons/io";

function ErrorMessage({removeErrMessage}) {
  return (
    <div className="error-message">
      <div>
        <div className="error-img">
          <img src={Misc} alt="" />
        </div>
        <p>
          Incorrect login details. Please double-check your username
          <br /> and password and try again.
        </p>
        <IoMdClose className="cancel" onClick={() => removeErrMessage()} />
      </div>
    </div>
  );
}

export default ErrorMessage;
