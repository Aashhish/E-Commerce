import React from "react";
import "../ComponentsCss/Home.css"
import Swiper1 from "../assets/Swiper1.png"
import Swiper2 from "../assets/Swiper2.png"
import Swiper3 from "../assets/Swiper3.png"
import Swiper4 from "../assets/Swiper4.png"
import Swiper5 from "../assets/Swiper5.png"
import Swiper6 from "../assets/Swiper6.png"
import ProductDetailA1 from "../assets/ProductDetailA1.jpg"
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { useNavigate } from "react-router-dom";

const Home =()=>{
    const navigate = useNavigate();
    const handledetail =()=>{
        navigate("/ProductDetail")
    }
        
    return(
        <>
        <div className="Home-Main">
        <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={0}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
        >
              <SwiperSlide><img src={Swiper1} alt="Swiper" className="slides"/></SwiperSlide>
              <SwiperSlide><img src={Swiper2} alt="Swiper" className="slides"/></SwiperSlide>  
              <SwiperSlide><img src={Swiper3} alt="Swiper" className="slides"/></SwiperSlide>  
              <SwiperSlide><img src={Swiper4} alt="Swiper" className="slides"/></SwiperSlide>  
              <SwiperSlide><img src={Swiper5} alt="Swiper" className="slides"/></SwiperSlide>  
              <SwiperSlide><img src={Swiper6} alt="Swiper" className="slides"/></SwiperSlide>        
        </Swiper>
        <span className="Home-Head">Our Products</span>
        <div className="Product-cards">
            <div className="Products-Card">
                <img src={ProductDetailA1} onClick={()=>handledetail()} className="Home-Products"></img>
                <p className="Product-Title">Sonata Poze Quartz Analog Black Dial Metal Strap Watch for Men</p>
                <div className="Product-Details">
                    <span className="Product-Price">₹1,999</span>
                    <span className="Product-MRP">₹7,990</span>
                    <span className="Product-Discount">75% off</span>
                </div>
                <button className="Cart-Button">Add To Cart</button>
            </div>

            <div className="Products-Card">
                <img src={Swiper1} className="Home-Products"></img>
                <span className="Product-Title">Title</span>
                <div className="Product-Details">
                    <span className="Product-Price">₹1,999</span>
                    <span className="Product-MRP">₹7,990</span>
                    <span className="Product-Discount">75% off</span>
                </div>
                <button className="Cart-Button">Add To Cart</button>
            </div>

            <div className="Products-Card">
                <img src={Swiper1} className="Home-Products"></img>
                <span className="Product-Title">Title</span>
                <div className="Product-Details">
                    <span className="Product-Price">₹1,999</span>
                    <span className="Product-MRP">₹7,990</span>
                    <span className="Product-Discount">75% off</span>
                </div>
                <button className="Cart-Button">Add To Cart</button>
            </div>

            <div className="Products-Card">
                <img src={Swiper1} className="Home-Products"></img>
                <span className="Product-Title">Title</span>
                <div className="Product-Details">
                    <span className="Product-Price">₹1,999</span>
                    <span className="Product-MRP">₹7,990</span>
                    <span className="Product-Discount">75% off</span>
                </div>
                <button className="Cart-Button">Add To Cart</button>
            </div>
        </div>


        </div>
        
        </>
    )
}
export default Home;