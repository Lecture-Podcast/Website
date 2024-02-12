import { Link } from "react-router-dom";
import { useState } from "react";

import "react-phone-input-2/lib/style.css";
import PhoneInput from "react-phone-input-2";

import { FcGoogle } from "react-icons/fc";
import { FaEyeSlash, FaTimes } from "react-icons/fa";
import { FaRegEye } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";

import Misc from "../img/Misc icon.png";
import LP from "../img/LP Logo.png";
import headset from "../img/headset.png";
import success2 from '../assets/Success.png'
import loading2 from '../assets/loading.json'
import "./css/signUp.css";
import usePost from "../Hooks/usePost";
import LottieAnimation from "../lotties";

function Modal({handlemodal}) {
    const [formData, setFormData] = useState({});
    const { response, error, loading, success } = usePost('https://lecture-backend.onrender.com/api/lecture/waitlist', formData);
    const [visible, setVisible] = useState(true);

    const [confirmPassVisible, setConfirmPassVisible] = useState(true);

    const [errMessage, setErrMessage] = useState(true);
    const [name, setname] = useState("")
    const [email, setemail] = useState("")
    const [phone, setPhone] = useState("")
    const [designation, setDesignation] = useState("")
    function removeErrMessage() {
        setErrMessage(false);
    }
    const handlename = (e)=>{
        const value = e.target.value
        setname(value)
    }
    const handlemail = (e)=>{
        const value = e.target.value
        setemail(value)
    }
    const handlephone = (e)=>{
        const value = e.target.value
        setPhone(value)
    }
    const handledes = (e)=>{
        const value = e.target.value
        setDesignation(value)
    }
    const handleSubmit=(e)=>{
        e.preventDefault();

        setFormData({
            name, 
            email, 
            phoneNumber: phone, 
            Designation:designation
        })
    }
    console.log({name,email,phone, designation})
    return (
        <div className="modal-background">
            <div className="sign-up modal">
            <div className="left-side">
                <div className="logo">
                <img src={LP} alt="" />
                </div>
                <p>Empower Content Creation with a User Friendly Platform</p>
            </div>
            <div className="right-side">
                {!success && (
                    <form onSubmit={handleSubmit}>
                    <div className="modal-close">
                        <div className="div" onClick={handlemodal}>
                            <FaTimes/>
                        </div> 
                    </div>
                    <div>
                        <h1 className="join-head">
                            Join the Waitlist
                        </h1>
                        <p className="join-body">Enter your details below to join the waitlist</p>
                    </div>
                    {error!==null && (
                        <div className="error">
                            <p>{error}</p>
                        </div>
                    )}
                    <label htmlFor="name">
                        <input 
                            type="text" 
                            id="name" 
                            placeholder="Name" 
                            required 
                            onChange={handlename}
                            onBlur={handlename}
                        />
                    </label>
                    <label htmlFor="email">
                        <input
                            type="email"
                            id="email"
                            placeholder="Email"
                            required
                            onChange={handlemail}
                            onBlur={handlemail}
                        />
                    </label>
                    <div className="phone-num">
                        <label htmlFor="number">
                        <input
                            className="number"
                            id="number"
                            required
                            maxLength={11}
                            onChange={handlephone}
                            onBlur={handlephone}
                            placeholder="Phone Number"
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
                        <select id="areaOfExpertise" onChange={handledes}>
                            <option>Area of expertise</option>
                            <option value="lecturer">Lecturer</option>
                            <option value="student">Student</option>
                            <option value="contentCreators">Content Creators</option>
                        </select>
                    </label>
                    
                    {loading ? (
                        <button  className="modal-submit">
                            <div className="loading-2">
                                <LottieAnimation data={loading2} />
                            </div>
                        </button>
                    ) : (
                        <button type="submit" className="modal-submit">Join The Waitlist</button>
                    )}
                   
                </form>
                )}
                {success && (
                    <div className="success-con">
                        <div className="image-con">
                            <img src={success2}></img>
                        </div>
                        <p className="join-body">You Have Successfully Joined the Waitlist</p>
                        <button className="done-button" onClick={handlemodal}>Done</button>
                    </div>
                )}
               
            </div>
            </div>
        </div>
    );
}

export default Modal;
