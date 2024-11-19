import { useEffect, useState } from "react";
import DonationCampaign from "../DonationCampaign/DonationCampaign";
import AOS from 'aos';
import 'aos/dist/aos.css';

const DonationCampaigns = () => {
    const [donations,setDonations]=useState(null)
    useEffect(()=>{
        fetch("/donations.json")
        .then(res=>res.json())
        .then(data=>setDonations(data))
    },[])

    useEffect(()=>{
        AOS.init()
    },[])
    return (
        <div className="mb-10 grid lg:grid-cols-3 md:grid-cols-2 " data-aos="zoom-in" data-aos-duration="2000">
            {
                donations?.map(donation=><DonationCampaign key={donation.id} donation={donation}></DonationCampaign>)
            }
        </div>
    );
};

export default DonationCampaigns;