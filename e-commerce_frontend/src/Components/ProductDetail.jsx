import ProductDetailA1 from "../assets/ProductDetailA1.jpg"
import ProductDetailA2 from "../assets/ProductDetailA2.jpg"
import ProductDetailA3 from "../assets/ProductDetailA3.jpg"
import ProductDetailA4 from "../assets/ProductDetailA4.jpg"
import ProductDetailA5 from "../assets/ProductDetailA5.jpg"
import "../ComponentsCss/ProductDetail.css"
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const ProductDetail =()=>{
    return(
        <>
        <div className="ProductDetailMain">
            <div className="ProductDetailSwiper">
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
                <SwiperSlide><img src={ProductDetailA1} alt="Swiper" className="product-Gallery"/></SwiperSlide>
                <SwiperSlide><img src={ProductDetailA2} alt="Swiper" className="product-Gallery"/></SwiperSlide>  
                <SwiperSlide><img src={ProductDetailA3} alt="Swiper" className="product-Gallery"/></SwiperSlide>  
                <SwiperSlide><img src={ProductDetailA4} alt="Swiper" className="product-Gallery"/></SwiperSlide>  
                <SwiperSlide><img src={ProductDetailA5} alt="Swiper" className="product-Gallery"/></SwiperSlide>  
                        
            </Swiper>
            </div>
            <div className="ProductDetailRight">
                <p className="ProductDetail-Title">Sonata Poze Quartz Analog Black Dial Metal Strap Watch for Men</p>
                <p className="ProductDetail-Description">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum sit, fuga molestiae exercitationem mollitia quo dolores atque error vitae, explicabo magni, sapiente placeat culpa corrupti aspernatur quibusdam delectus nulla quis.</p>
                <span className="ProductDetail-Price">₹1,999</span>
                <span className="ProductDetail-MRP">₹7,990</span>
                <span className="ProductDetail-Discount">75% off</span>
                <button className="ProductDetail-button">Add To Cart</button>
            </div>
        </div>
        </>
    )
}
export default ProductDetail;