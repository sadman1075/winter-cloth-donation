import { Link, useNavigate } from "react-router-dom";
import Header from "../Header/Header";
import { FcGoogle } from "react-icons/fc";
import { useContext, useRef, useState } from "react";
import { AuthContext } from "../../Context/AuthProvider";
import toast from "react-hot-toast";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Login = () => {
    const { GoogleSingup, loginuser,forgetpassword } = useContext(AuthContext)
    const navigate = useNavigate()
    const [showpassword, setshowpassword] = useState(false)
    const emailRef = useRef()
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

    const handlelogin = (e) => {
        e.preventDefault()
        const email = e.target.email.value;
        const password = e.target.password.value;
        loginuser(email, password)
            .then(result => {
                toast.success("Successfully Logged In");
                e.target.reset()
                navigate("/")

            })
            .catch(error => {
                toast.error(error.message)
            })
    }

    const handleforgetpassword = () => {
        const email=emailRef.current.value;
        if(!email){
            toast.error("Please Provide Your Email Address")
        }
        else{
            forgetpassword(email)
            .then(result=>{
                toast.success("Check your Email to reset password ")
            })
            .catch(error=>{
                toast.error(error.message)
            })
        }
    }
    return (
        <div className="bg-base-200 ml-4 mr-4 md:ml-40 md:mr-40">
            <div className="">
                <Header></Header>
            </div>
            <div className="hero bg-base-200 py-10">

                <div className="hero-content">
                    <div className="card bg-base-100 w-full px-4 py-4 lg:px-20  lg:py-6  ">
                        <h1 className="text-4xl font-bold">Login Your Account</h1>
                        <form className="card-body" onSubmit={handlelogin}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" ref={emailRef} placeholder="Enter your email address" name="email" className="input input-bordered" required />
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
                                <label onClick={handleforgetpassword} className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>

                            <div className="form-control mt-6">
                                <button className="btn bg-black text-white">Login</button>
                            </div>
                            <div className="divider">OR</div>
                            <div className="form-control ">
                                <Link onClick={googlecreateuser} className="btn bg-white border-1 border-gray-400 "> <FcGoogle className="text-lg" /> Sign in with Google</Link>
                            </div>
                            <p className="text-sm text-center lg:text-lg">Don't Have An Account? <Link className="text-red-500 font-bold" to={"/registration"}>Register</Link></p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;