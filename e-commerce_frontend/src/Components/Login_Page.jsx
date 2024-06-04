import React, { useState } from "react";
import "../ComponentsCss/Login.css"
import LoginImg from "../assets/LoginImg.jpg"
import { useNavigate } from "react-router-dom";
import { loginAdmin, loginUser } from "../API/endpoints";

const Login =()=>{
    const navigate = useNavigate()

    const [Data, setData] = useState({
        Email: "",
        Password: "",
    });

    const [errors, seterrors] = useState({});

    const handleUserLogin =async (event)=>{
        event.preventDefault();
        let empty = {};
        if(!Data.Email.trim()) {
            empty.Email = "Required Field";
        }
        if (!Data.Password.trim()) {
            empty.Password = "Required Field";
        }
        if (Object.keys(empty).length > 0) {
            seterrors(empty);
            return;
        }

        seterrors({}); // Clear previous errors

        try {
            const res = await loginUser(Data);
            if(res.data.Token){
                localStorage.setItem("token", res.data.Token);
                localStorage.setItem("userID", res.data.userID);
                navigate("/Home");
            }
        } catch (err) {
            console.error("API error:", err);
        } 
              
        
    }
    const handleAdminLogin =async (event)=>{
        event.preventDefault();
        let empty = {};
        if(!Data.Email.trim()) {
            empty.Email = "Required Field";
        }
        if (!Data.Password.trim()) {
            empty.Password = "Required Field";
        }
        if (Object.keys(empty).length > 0) {
            seterrors(empty);
            return;
        }

        seterrors({});

        try {
            const res = await loginAdmin(Data);
            if(res.data.Token){
                localStorage.setItem("token", res.data.Token);
                localStorage.setItem("userID", res.data.userID);
                navigate("/AdminHome");
            }
        } catch (err) {
            console.error("API error:", err);
        } 
              
        
    }

    const handleSignUp =()=>{
        navigate("/SignUp")
    }
    return(
        <>
        <div className="Main">
    <div className="container">
        <div className="left">
        <img src={LoginImg} className="Login-img"></img>
            <h1>Welcome Back to<br/>NextGenTime</h1>
        </div>
        <div className="right">
            <h2>Login</h2>
            <p>Access your account to stay connected with the latest jobs, networking, events & training</p>
            <form onSubmit={handleUserLogin}>
                <div className="form-group">
                    <input type="email" placeholder="Email Id" value={Data.Email} onChange={(e)=> setData({...Data, Email: e.target.value})}></input>
                    {errors.Email && <span style={ {color: "red"}}>{errors.Email}</span>}
                </div>
                <div className="form-group">
                    <input type="password" placeholder="Password" value={Data.Password} onChange={(e)=> setData({...Data,Password: e.target.value})}></input>
                    {errors.Password && <span style={ {color: "red"}}>{errors.Password}</span>}
                </div>
                <button type="submit" className="SignUp-Button">LOGIN</button>
                <p>Don't have an account? <a onClick={()=>handleSignUp()}>Sign Up</a></p>
            </form>
            <form onSubmit={handleAdminLogin}>
                <button type="submit" className="SignUp-Button">ADMIN LOGIN</button>
            </form>
        </div>
    </div>
    </div>
        </>
    )
}
export default Login;