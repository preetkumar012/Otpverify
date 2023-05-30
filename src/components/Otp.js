import React from 'react'
import "../App.css";
import { ToastContainer, toast } from 'react-toastify';
import {useNavigate } from 'react-router-dom';

const Otp = () => {
  const [otp, setOtp] = React.useState();
  const navigate = useNavigate();


  const HandleOtp = async (e) => {
    e.preventDefault();
      let result = await fetch("http://localhost:5000/sendotp", {
      method: "post",
      body: JSON.stringify({ otp }),
      headers: {
        "Content-Type": "application/json",
      }
    })
    if (result) {
      alert("otp sent successfully");
      console.log(result);
      navigate("/dashboard");
    } else {
      toast.error("otp not send");
    }

    // if (otp === "") {
    //   toast.error("please enter otp");
    // } else if (!/[^a-zA-Z]/.test(otp)) {
    //   toast.error("please enter digit not character");
    // } else if (otp.length <= 6) {
    //   toast.success("verify otp");

    // } else {
      
    // }

  }
  return (
    <div className='container px-5 py-5'>
      <h3 className='ms-4'>welcome to Otp page</h3>
      <input placeholder="enter otp" onChange={(e) => setOtp(e.target.value)} value={otp} name="otp" />
      <button type="submit" onClick={HandleOtp}> send </button>
      <ToastContainer />
    </div>
  )
}

export default Otp