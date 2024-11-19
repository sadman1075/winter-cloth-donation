import { Link } from "react-router-dom";
import error from "../../../public/images/error.jpg"

const Error = () => {
    return (
        <div className="">
            <img className="mx-auto mt-40" src={error} alt=""  />
            <div className="flex justify-center">
            <Link to={"/"} className="btn bg-red-500 text-white font font-semibold mt-5">Go back to home</Link>

            </div>
        </div>
    );
};

export default Error;