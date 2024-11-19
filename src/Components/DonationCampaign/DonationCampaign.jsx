import React from 'react';
import { Link } from 'react-router-dom';

const DonationCampaign = ({ donation }) => {
    const { id, title, image, description, status, contactInfo, division } = donation
    return (
        <div className='mt-6 lg:ml-5 md:ml-5'>
            <div className="card bg-base-100 w-full shadow-xl">
                <figure>
                    <img
                        src={image}
                        className='h-60 rounded-2xl'
                        alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <p>{description.slice(0,100)}...</p>

                    <p className='mt-3'><b>Division:</b> {division||""}</p>
                    
                    <div className="card-actions justify-end">
                        <Link to={`/donation-details/${id}`} className="btn bg-black text-white">Donate Now</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DonationCampaign;