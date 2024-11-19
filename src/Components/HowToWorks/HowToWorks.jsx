import { Link } from "react-router-dom";
import works from "../../../public/images/works.jpg"
import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
const HowToWorks = () => {
    useEffect(()=>{
        AOS.init()
    },[])
    return (
        <div className="mb-10 lg:mb-20 " data-aos="fade-right" data-aos-offset="200" data-aos-duration="1000" data-aos-easing="ease-in-sine">
            <div className="hero bg-base-100 ">
                <div className="hero-content flex-col lg:flex-row-reverse gap-5">
                    <div className="w-full lg:w-1/2 lg:ml-10">
                        <img
                            src={works}
                            className=" rounded-lg w-full  " />
                    </div>
                    <div className="w-full lg:w-1/2 ">
                        <h1 className="text-5xl font-bold">How TO Work</h1>
                        <p className="py-6 text-justify">
                            <span className="text-xl font-bold mb-4"> Donate</span>
                            <br />
                            Select the campaign you want to support on our website.
                            Choose from monetary contributions, in-kind donations like clothes or food, or both.
                            Securely complete your donation using our user-friendly platform.</p>

                        <p className="py-6 text-justify">
                            <span className="text-xl font-bold mb-4">Locate Collection Points</span>
                            <br />
                            Find nearby drop-off centers or collection points for physical donations.
                            Use our interactive map to get directions and details about each center.
                            Alternatively, schedule a free pickup for your items (available in select areas).</p>
                        <p className="py-6 text-justify">
                            <span className="text-xl font-bold mb-4">Supported Divisions</span>
                            <br />
                            Winter Warmth Drive: Distributing coats, scarves, gloves, and blankets to those in need.
                            Food for All Campaign: Providing nutritious meals and non-perishable food items to struggling families.
                            Holiday Cheer Program: Delivering gifts and festive supplies to underserved communities.
                            Emergency Relief Fund: Offering aid to those affected by extreme weather conditions or emergencies.</p>
                        
                        <Link to={"/donation-campaigns"} className="btn bg-black text-white  mt-6">Donate Campaigns</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HowToWorks;