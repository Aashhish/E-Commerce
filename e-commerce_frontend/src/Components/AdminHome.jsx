import ProductDetailA1 from "../assets/ProductDetailA1.jpg";
import "../ComponentsCss/AdminHome.css"
const AdminHome =()=>{
    return(
        <>
        <div className="Admin-Main">
            
            <h1 className="Admin-head">All Products</h1>
            <div>
                <div className="Admin-Card">
                    <img src={ProductDetailA1} className="Home-Products"></img>
                    <p className="Admin-Title">Sonata Poze Quartz Analog Black Dial Metal Strap Watch for Men</p>
                    <div className="Admin-Details">
                        <span className="Admin-Price">₹1,999</span>
                        <span className="Admin-MRP">₹7,990</span>
                        <span className="Admin-Discount">75% off</span>
                    </div>
                    <button className="Delete-Button">Delete</button>
                </div>
            </div>
        </div>
        </>
    )
}
export default AdminHome;