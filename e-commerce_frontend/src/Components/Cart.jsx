import ProductDetailA1 from "../assets/ProductDetailA1.jpg"
import "../ComponentsCss/Cart.css"

const Cart =()=>{
    return(
        <>
        <h1 className="Cart"> Your Cart</h1>
            <div className="Cart-Container">
                <div className="Cart-main">
                    <img src={ProductDetailA1} className="Cart-Product"></img>
                    <div>
                        <p className="Cart-Title">Sonata Poze Quartz Analog Black Dial Metal Strap Watch for Men</p>
                        <p className="Cart-Price">₹1,999</p>
                        <span className="Cart-MRP">₹7,990</span>
                        <span className="Cart-Discount">75% off</span>
                        <button className="Cart-button">Remove</button>
                    </div>
                </div>
            </div>
        
        </>
    )
}
export default Cart;