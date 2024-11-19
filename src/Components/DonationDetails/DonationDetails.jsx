import React from 'react';
import toast from 'react-hot-toast';
import { Link, useLoaderData, useParams } from 'react-router-dom';

const DonationDetails = () => {
    const donations = useLoaderData()

    const { id } = useParams()

    console.log(donations)
    console.log(id)

    const donationDetails = donations?.find(donation => donation.id == id)
    const { title, image, description, status, contactInfo, division } = donationDetails
    const handledonate = (e) => {
        e.preventDefault();
        const item=e.target.item.value;
        const quantity=e.target.quantity.value;
        const location=e.target.location.value;
        const note=e.target.note.value;
        console.log(item,quantity,location,note)
        toast.success("Thank you ! We will reach your destination soon")
        e.target.reset()


    }
    console.log(donationDetails)
    return (
        <div>
            <div className="card bg-base-100 lg:w-4/5 mx-auto">
                <figure>
                    <img
                        src={image}
                        className="lg:h-[450px] w-full rounded-2xl"
                        alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <p>{description}</p>
                    <p><b>Division: </b>{division}</p>
                    <p><b>Contact Info: </b>{contactInfo}</p>

                </div>
            </div>

            <div>
                <div className="hero bg-base-200 py-10 rounded-2xl ">

                    <div className="hero-content">
                        <div className="card bg-base-100 w-full px-4 py-4 lg:px-20  lg:py-6  ">
                            <h1 className="text-4xl font-bold">Donate Winter Clothing </h1>
                            <form className="card-body" onSubmit={handledonate}>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Items Type</span>
                                    </label>
                                    <input type="text" placeholder="e.g., blanket,jacket,sweater" name="item" className="input input-bordered" required />
                                </div>
                                <div className="form-control ">
                                    <label className="label">
                                        <span className="label-text">Items Quantity</span>
                                    </label>
                                    <input type="text" placeholder="e.g., 2 jackets, 3 blankets" name="quantity" className="input input-bordered" required />
                                </div>
                                <div className="form-control ">
                                    <label className="label">
                                        <span className="label-text">PickUp Location</span>
                                    </label>
                                    <input type="text" placeholder="e.g. House 12, Road 5, Dhanmondi, Dhaka" name="location" className="input input-bordered" required />
                                </div>
                                <div className="form-control ">
                                    <label className="label">
                                        <span className="label-text">Additional Notes</span>
                                    </label>
                                    <textarea className="textarea textarea-bordered" placeholder="Additional notes" name='note'></textarea>
                                </div>

                                <div className="form-control mt-6">
                                    <button className="btn bg-black text-white">Donate</button>
                                </div>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DonationDetails;