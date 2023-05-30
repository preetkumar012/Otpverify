import React from 'react'
import "../App.css";
import { ToastContainer, toast } from 'react-toastify';

import { NavLink, useNavigate } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = React.useState("");
    const navigate = useNavigate();


    const SendOtp = async (e) => {
        e.preventDefault();
        console.log(email);
        let result = await fetch("http://localhost:5000/otpsend", {
            method: "post",
            body: JSON.stringify({ email }),
            headers: {
                "Content-Type": "application/json",
            }
        });
        result = await result.json()
        console.log(result);
        if (result) {
            alert("email has been sent successfully");
            navigate("/otp");
        } else {
            toast.error({ result: "result not found" });
        }

        // if (email === "") {
        //     toast.error("enter your otp !");
        // } else if (!email.includes("@")) {
        //     toast.error("please enter valid email !")
        // } else {
        //     toast.success("login done");
        // }


    }
    return (
        <>
            <div className='container px-5 py-5'>
                <h3 className='ms-4'>welcome back to log in </h3>
                <input type="text" placeholder="Email" onChange={(e) => setEmail(e.target.value)} value={email} name="email" />
                <button type="submit" onClick={SendOtp}> Login </button>
                <p>Don't have an account <NavLink to="/register">Sign Up</NavLink></p>
                <ToastContainer />
            </div>
        </>
    )
}

export default Login