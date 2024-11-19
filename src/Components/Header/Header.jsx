import { Link, useNavigate } from "react-router-dom";

import donate from "../../../public/images/donate.jpg"
import { useContext } from "react";
import { AuthContext } from "../../Context/AuthProvider";
import toast from "react-hot-toast";

const Header = () => {
    const { user,logout } = useContext(AuthContext)
    const{photoURL,email}=user||""
    const navigate=useNavigate()

    const handlelogout=()=>{
        logout()
        .then(result=>{
            toast.success("successfully Log Out")
            navigate("/login")
        })
        .catch(error=>{
            toast.error(error.message)
        })
    }
    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            <li><Link to={"/"}>Home</Link></li>
                            <li><Link to={"/donation-campaigns"}>Donation Campaigns</Link></li>
                            <li><Link to={"/dashboard"}>Dashboard</Link></li>
                            <li><Link to={"/help"}>How To Help</Link></li>


                        </ul>
                    </div>
                    <img src={donate} className="w-14" alt="" />
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><Link to={"/"}>Home</Link></li>
                        <li><Link to={"/donation-campaigns"}>Donation Campaigns</Link></li>
                        <li><Link to={"/dashboard"}>Dashboard</Link></li>
                        <li><Link to={"/help"}>How To Help</Link></li>



                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user ? <Link onClick={handlelogout}>
                            <div className="avatar">
                                <div className="w-12 rounded-full">
                                    <img src={photoURL} />
                                    <p>{email}</p>
                                </div>
                            </div>
                        </Link>
                            : <Link to={"/login"} className="btn bg-black text-white">Log In</Link>

                    }
                </div>

            </div>
        </div>
    );
};

export default Header;