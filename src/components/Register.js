import React from 'react'
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import "../App.css"


const Register = () => {
    const [name, setName] = React.useState();
    const [email, setEmail] = React.useState();
    const [password, setPassword] = React.useState();
    const navigate=useNavigate();

 
 


    const HandleRegister = async (e) => {
        e.preventDefault();
        console.log(name, email, password);
        if (name === "") {
            toast.error("enter valid name");
        } else if (email === "") {
            toast.error("enter valid email")
        } else if (!email.includes("@")) {
            toast.error("enter valid email");
        } else if (password === "") {
            toast.error("enter valid password");
        } else if (password.length < 6) {
            toast.error("password length minimum 6 character");
        } else {
            toast.success("login done");
            let result = await fetch("http://localhost:4000/register", {
                method: "post",
                body: JSON.stringify({ name, email, password }),
                headers: {
                    "Content-Type": "application/json"
                },
             
            })
            result = await result.json();
            console.log(result);
            if(result){
                alert("data inserted")
            }
            navigate("/login");
        }
     
        


    }




    return (
        <>
            <div className='container px-5 py-5'>

                <h3>Sign up</h3>
                <input type="name" placeholder="Name" onChange={(e) => setName(e.target.value)} value={name} />
                <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} value={email} />
                <input type= "password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} value={password} />



                <button type="submit" onClick={HandleRegister}> sign up </button>


                <ToastContainer />
            </div>
        </>
    )
}

export default Register