import { useContext } from "react";
import { AuthContext } from "../../Context/AuthProvider";
import { Link } from "react-router-dom";



const Dashboard = () => {
    const { user } = useContext(AuthContext)
    const { email,photoURL,displayName } = user
    console.log(user)
    return (
        <div className="mt-10 mb-10">
            <h1 className="text-center font-bold md:text-3xl">welcome {email}</h1>
            <img className="mt-5 w-40 mx-auto"  src={photoURL||"not available"} alt="" />
            <p className="text-center lg:text-xl mt-3"><b>User Name:</b> {displayName || "Not available"}</p>
            <p className="text-center lg:text-xl mt-2"><b>Email:</b> {email}</p>
            <div className="flex justify-center">
            <Link to={"/update-profile"} className="btn mt-3 bg-black text-white">Update Profile</Link>

            </div>
        </div>
    );
};

export default Dashboard;