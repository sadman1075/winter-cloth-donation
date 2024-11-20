import { Link, Navigate, useNavigate } from "react-router-dom";
import Header from "../Header/Header";
import { FcGoogle } from "react-icons/fc";
import { useContext, useState } from "react";
import { AuthContext } from "../../Context/AuthProvider";
import toast from "react-hot-toast";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Registration = () => {
    const { GoogleSingup, createuser, updateprofile, setuser } = useContext(AuthContext)
    const navigate = useNavigate()
    const [showpassword, setshowpassword] = useState(false)



    const googlecreateuser = () => {
        GoogleSingup()
            .then(result => {
                toast.success("Successfully Logged In");
                navigate("/")

            })
            .catch(error => {
                toast.error(error.message)
            })
    }
    const handlecrateuser = (e) => {

        e.preventDefault()
        const name = e.target.name.value;
        const photo = e.target.photo.value;
        const email = e.target.email.value;
        const password = e.target.password.value;

        if (!/(?=.*?[A-Z])/.test(password)) {
            return toast.error("Password At least one upper case English letter")
        }
        else if (!/(?=.*?[a-z])/.test(password)) {
            return toast.error("password At least one Lower case English letter ")
        }

        else if (!/.{6,}/.test(password)) {
            return toast.error("password length must be 6 or above")
        }
        createuser(email, password)
            .then(result => {
                toast.success("Successfully Logged In");
                updateprofile({ displayName: name, photoURL: photo })
                    .then(result => {
                        // toast.success("successfully Update your profile")
                        setuser((prevoususer) => {
                            return { ...prevoususer, displayName: name, photoURL: photo }
                        })
                    })
                    .catch(error => {
                        // toast.error(error.message)
                    })
                e.target.reset();
                navigate("/")
            })
            .catch(error => {
                toast.error(error.message)
            })
    }
    return (
        <div className="bg-base-200 ml-4 mr-4 md:ml-40 md:mr-40">
            <div className="">
                <Header></Header>
            </div>
            <div className="hero bg-base-200 py-10">

                <div className="hero-content">
                    <div className="card bg-base-100 w-full px-4 py-4 lg:px-20  lg:py-6  ">
                        <h1 className="text-4xl font-bold">Register Your Account</h1>
                        <form className="card-body" onSubmit={handlecrateuser}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Your Name</span>
                                </label>
                                <input type="text" placeholder="Enter your name" name="name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input type="text" placeholder="Enter your Photo Url" name="photo" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="Enter your email address" name="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control relative">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type={showpassword ? "text" : "password"} placeholder="Enter your password" name="password" className="input input-bordered" required />
                                <Link onClick={() => setshowpassword(!showpassword)} className="btn btn-sm bg-white border-0 absolute right-1 top-12">
                                    {
                                        showpassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>
                                    }
                                </Link>
                                <label className="label">
                                    <div className="form-control">
                                        <label className="label cursor-pointer gap-4">

                                            <input type="checkbox" className="checkbox" />
                                            <span className="label-text">Accept Terms & Condition</span>
                                        </label>
                                    </div>                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn bg-black text-white">Registration</button>
                            </div>
                            <div className="divider">OR</div>
                            <div className="form-control ">
                                <Link onClick={googlecreateuser} className="btn bg-white border-1 border-gray-400 "> <FcGoogle className="text-lg" /> Sign up with Google</Link>
                            </div>
                            <p className="text-sm lg:text-lg text-center">Already Have An Account? <Link className="text-red-500 font-bold" to={"/login"}>Login</Link></p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Registration;