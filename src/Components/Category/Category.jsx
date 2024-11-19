
import mdonate1 from "../../../public/images/mdonate1.jpg"
import mdonate2 from "../../../public/images/mdonate2.jpg"
import mdonate3 from "../../../public/images/mdonate3.jfif"
import mdonate4 from "../../../public/images/mdonate4.jpg"
import mdonate5 from "../../../public/images/mdonate5.jpg"
import mdonate6 from "../../../public/images/mdonate6.jpg"
import Marquee from 'react-fast-marquee';

const Category = () => {
    return (
       <div>
        <div>
            <p className='text-5xl font-bold text-center mb-10'>Donation </p>
        </div>
         <Marquee className='mb-20'>
            <div className="card card-compact bg-base-100 w-80 shadow-xl ml-5">
                <figure>
                    <img
                        src={mdonate1}
                        className="h-60 rounded-2xl"
                        alt="Shoes" />
                </figure>
              
            </div>
            <div className="card card-compact bg-base-100 w-80 shadow-xl ml-5">
                <figure>
                    <img
                        src={mdonate2}
                        className="h-60 rounded-2xl"
                        alt="Shoes" />
                </figure>
                
            </div>
            <div className="card card-compact bg-base-100 w-80 shadow-xl ml-5">
                <figure>
                    <img
                        src={mdonate3}
                        className="h-60 rounded-2xl"
                        alt="Shoes" />
                </figure>
              
            </div>
            <div className="card card-compact bg-base-100 w-80 shadow-xl ml-5">
                <figure>
                    <img
                        src={mdonate4}
                        className="h-60 rounded-2xl"
                        alt="Shoes" />
                </figure>
              
            </div>
            <div className="card card-compact bg-base-100 w-80 shadow-xl ml-5">
                <figure>
                    <img
                        src={mdonate5}
                        className="h-60 rounded-2xl"
                        alt="Shoes" />
                </figure>
              
            </div>
            <div className="card card-compact bg-base-100 w-80 shadow-xl ml-5">
                <figure>
                    <img
                        src={mdonate6}
                        className="h-60 rounded-2xl"
                        alt="Shoes" />
                </figure>
              
            </div>
        </Marquee>
       </div>
    );
};

export default Category;