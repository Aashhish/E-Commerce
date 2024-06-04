// import React, { useState } from "react";
// import img1 from "../assets/img1.jpg"
// import LoginImg from "../assets/LoginImg.jpg"
// import "../ComponentsCss/SignUp.css"
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
// import { createUser } from "../API/endpoints";
// const SignUp = () => {
//     const navigate = useNavigate()
//     const [Data, setData] = useState({
//         UserName: "",
//         Email: "",
//         Number: "",
//         Password: "",
//         ConfirmPassword: ""
//     })
//     const [errors, seterrors] = useState({});

//     const handleLogin=()=>{
//         navigate("/")
//     }

//     const handleSignUp =async()=>{
//         let empty = {};
//         if(!Data.UserName.trim()){
//             empty.UserName = "Required Field";
//         }
//         if(!Data.Email.trim()){
//             empty.Email = "Required Field";
//         }
//         if(!Data.Number.trim()){
//             empty.Number = "Required Field";
//         }
//         if(!Data.Password.trim()){
//             empty.Password = "Required Field";
//         }
//         if(!Data.ConfirmPassword.trim()){
//             empty.ConfirmPassword = "Required Field";
//         }
//         else if(Object.keys(errors).length===0){
//             try{
//                 const res = await createUser(Data)
//                 navigate("/")
//             }catch(err){
//                 console.log(err)
//             }
//         }
//         seterrors(empty);
//         setData({
//             UserName: "",
//             Email: "",
//             Password: "",
//             ConfirmPassword: "",
//         });
       
//     }
//     return(
//         <>
//         <div className="Main">       
//     <div className="container">
//         <div className="left">
//             <img src={LoginImg} className="Login-img"></img>
//             <h1 className="Text">Welcome to<br/>NextGenTime</h1>
//         </div>
//         <div className="right">
//             <h2>Sign Up</h2>
//             <p>Create an account to access the latest Generation</p>
//             <form>
//                 <div className="form-group">
//                     <input type="text" placeholder="First Name"  value={Data.UserName} onChange={(e) => setData({ ...Data, UserName: e.target.value })}></input>
//                     {errors.UserName && <span style={{ color: "red" }}>{errors.UserName}</span>}
//                     <input type="text" placeholder="Last Name" ></input>
//                 </div>
//                 <div className="form-group">
//                     <input type="email" placeholder="Email Id" value={Data.Email} onChange={(e) => setData({ ...Data, Email: e.target.value })}></input>
//                     {errors.Email && <span style={{ color: "red" }}>{errors.Email}</span>}
//                     <select >
//                         <option value="" disabled selected>Gender</option>
//                         <option value="male">Male</option>
//                         <option value="female">Female</option>
//                         <option value="other">Pefer not to say</option>
//                     </select>
//                 </div>
//                 <div class="form-group">
//                     <input type="tel" placeholder="Phone Number"></input>
//                     <input placeholder="DOB" ></input>
//                 </div>
//                 <div className="form-group">
//                     <input type="password" placeholder="Password" value={Data.Password} onChange={(e) => setData({ ...Data, Password: e.target.value })}></input>
//                     <input type="password" placeholder="Confirm Password" value={Data.ConfirmPassword} onChange={(e) => setData({ ...Data, ConfirmPassword: e.target.value })}></input>
//                 </div>
//                 <div class="form-group">
//                     <input type="checkbox"></input>
//                     <label>I've read and agree with <a>Terms of Service</a> and our <a>Privacy Policy</a></label>
//                 </div>
//                 <button type="submit" className="SignUp-Button"  onClick={()=>handleSignUp()}>SIGN UP</button>
//                 <p>Already have an account? <a onClick={()=>handleLogin()}>Sign In</a></p>
//             </form>
            
//         </div>
//     </div>
//     </div> 
//         </>
//     )
// }
// export default SignUp;




import React, { useState } from "react";
import img1 from "../assets/img1.jpg";
import LoginImg from "../assets/LoginImg.jpg";
import "../ComponentsCss/SignUp.css";
import { useNavigate } from "react-router-dom";
import { createUser } from "../API/endpoints";

const SignUp = () => {
    const navigate = useNavigate();
    const [Data, setData] = useState({
        UserName: "",
        Email: "",
        Number: "",
        Password: "",
        ConfirmPassword: ""
    });
    const [errors, setErrors] = useState({});

    const handleLogin = () => {
        navigate("/");
    };

    const handleSignUp = async (event) => {
        event.preventDefault(); // Prevent default form submission behavior

        let empty = {};
        if (!Data.UserName.trim()) {
            empty.UserName = "Required Field";
        }
        if (!Data.Email.trim()) {
            empty.Email = "Required Field";
        }
        if (!Data.Number.trim()) {
            empty.Number = "Required Field";
        }
        if (!Data.Password.trim()) {
            empty.Password = "Required Field";
        }
        if (!Data.ConfirmPassword.trim()) {
            empty.ConfirmPassword = "Required Field";
        }
        if (Object.keys(empty).length > 0) {
            setErrors(empty);
            return;
        }

        setErrors({}); // Clear previous errors

        try {
            console.log("Sending data to API:", Data);
            const res = await createUser(Data);
            console.log("API response:", res);
            navigate("/");
        } catch (err) {
            console.error("API error:", err);
        }
        
        setData({
            UserName: "",
            Email: "",
            Number: "",
            Password: "",
            ConfirmPassword: "",
        });
    };

    return (
        <div className="Main">
            <div className="container">
                <div className="left">
                    <img src={LoginImg} className="Login-img" alt="Login" />
                    <h1 className="Text">Welcome to<br />NextGenTime</h1>
                </div>
                <div className="right">
                    <h2>Sign Up</h2>
                    <p>Create an account to access the latest Generation</p>
                    <form onSubmit={handleSignUp}>
                        <div className="form-group">
                            <input type="text" placeholder="First Name" value={Data.UserName} onChange={(e) => setData({ ...Data, UserName: e.target.value })} />
                            {errors.UserName && <span style={{ color: "red" }}>{errors.UserName}</span>}
                            <input type="text" placeholder="Last Name" />
                        </div>
                        <div className="form-group">
                            <input type="email" placeholder="Email Id" value={Data.Email} onChange={(e) => setData({ ...Data, Email: e.target.value })} />
                            {errors.Email && <span style={{ color: "red" }}>{errors.Email}</span>}
                            <select>
                                <option value="" disabled selected>Gender</option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                                <option value="other">Prefer not to say</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <input type="tel" placeholder="Phone Number" value={Data.Number} onChange={(e) => setData({ ...Data, Number: e.target.value })} />
                            {errors.Number && <span style={{ color: "red" }}>{errors.Number}</span>}
                            <input placeholder="DOB" />
                        </div>
                        <div className="form-group">
                            <input type="password" placeholder="Password" value={Data.Password} onChange={(e) => setData({ ...Data, Password: e.target.value })} />
                            {errors.Password && <span style={{ color: "red" }}>{errors.Password}</span>}
                            <input type="password" placeholder="Confirm Password" value={Data.ConfirmPassword} onChange={(e) => setData({ ...Data, ConfirmPassword: e.target.value })} />
                            {errors.ConfirmPassword && <span style={{ color: "red" }}>{errors.ConfirmPassword}</span>}
                        </div>
                        <div className="form-group">
                            <input type="checkbox" required />
                            <label>I've read and agree with <a href="#">Terms of Service</a> and our <a href="#">Privacy Policy</a></label>
                        </div>
                        <button type="submit" className="SignUp-Button">SIGN UP</button>
                        <p>Already have an account? <a onClick={handleLogin}>Sign In</a></p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
