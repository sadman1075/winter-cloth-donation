import { useEffect } from "react";
import banner1 from "../../../public/images/banner 1.jpg"
import banner2 from "../../../public/images/banner 2.jpeg"
import banner3 from "../../../public/images/banner 3.jpg"
import banner4 from "../../../public/images/banner 4.jpg"
import AOS from 'aos';
import 'aos/dist/aos.css';
const Banner = () => {
    useEffect(()=>{
        AOS.init()
    },[])
    return (
        <div className="mt-6 " data-aos="zoom-in" data-aos-duration="2000">
            <div className="carousel w-full ">
                <div id="slide1" className="carousel-item relative w-full ">
                    <img
                        src={banner1}
                        className="w-full h-2/3 rounded-xl" />
                    <div className="absolute left-5 right-5 top-1/3 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img
                        src={banner2}
                        className="w-full h-2/3 rounded-xl" />
                    <div className="absolute left-5 right-5 top-1/3 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full ">
                    <img
                        src={banner3}
                        className="w-full h-2/3 rounded-xl" />
                    <div className="absolute left-5 right-5 top-1/3 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <img
                        src={banner4}
                        className="w-full  h-2/3 rounded-xl" />
                    <div className="absolute left-5 right-5 top-1/3 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;