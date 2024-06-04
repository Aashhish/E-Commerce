import { useNavigate } from "react-router-dom";
import Logo1 from "../assets/Logo1.png"
import { CiShoppingCart } from "react-icons/ci";
import { SlLogout } from "react-icons/sl";

const NavBar1 =()=>{
    const navigate = useNavigate()

    const handleCart =()=>{
        navigate("/Cart")
    }

    const handleProfile=()=>{
        navigate("Profile")
    }

    const handleLogo =()=>{
        navigate("/Home")
    }

    const handleLogout =()=> {
        localStorage.removeItem("token");
        localStorage.removeItem("userID");
        navigate("/");
    }
    return(
        <>
        <div className="NavbarParent">
                <div className="navbar">
                
                    <img className="logo"src={Logo1} alt="Logo" onClick={()=>handleLogo()}></img>
                    <div className="Profile" onClick={()=>handleProfile()} >
                        <img className="UserProfilePic" src="" alt="Profile"></img>
                        <span className="UserName">UserName</span>
                    </div>
                    <div onClick={()=>handleCart()}><CiShoppingCart className="cart-icon" /></div>
                    <div onClick={()=>handleLogout()}><SlLogout className="cart-icon" /></div>
                    
                    
                    
            </div>
            </div>
        </>
    )
}
export default NavBar1;