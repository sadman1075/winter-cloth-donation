import { Link } from "react-router-dom";
import about from "../../../public/images/about.jpg"

import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";



const About = () => {
    useEffect(() => {
        AOS.init()
    }, [])
    return (
        <div className="-mt-10 mb-10 lg:-mt-40 lg:mb-32" data-aos="zoom-in" data-aos-duration="2000">
            <div className="hero bg-base-100 ">
                <div className="hero-content flex-col lg:flex-row gap-5">
                    <div className="w-full lg:w-1/2">
                        <img
                            src={about}
                            className=" rounded-lg w-full  " />
                    </div>
                    <div className="w-full lg:w-1/2 lg:ml-10">
                        <h1 className="text-5xl font-bold ">About Our Website</h1>
                        <p className="py-6 text-justify">
                            At Winter Clothing donation, we aim to bring warmth, hope, and support to communities during the winter season and beyond. Through collective efforts, we create opportunities for individuals to contribute meaningfully to causes that make a difference. Whether it’s supporting local families, providing essentials, or spreading joy through acts of kindness, we believe in the power of unity and compassion.
                        </p>
                        <h1 className="text-xl font-bold">How You Can Contribute</h1>
                        <p className="mt-3  text-justify">
                            There is a Donate Campaigns button if you donate your cloth go to this section about donate your cloth !!
                        </p>
                        <Link to={"/donation-campaigns"} className="btn bg-black text-white  mt-6">Donate Campaigns</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;