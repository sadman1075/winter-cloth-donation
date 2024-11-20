import { useContext } from "react";
import { AuthContext } from "../../Context/AuthProvider";
import toast from "react-hot-toast";

const UpdateProfile = () => {
    const { updateprofile, user, setuser } = useContext(AuthContext)
    const { email } = user
    const handaleUpdateProfile = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const photo = e.target.photo.value;


        updateprofile({ displayName: name, photoURL: photo })
            .then(result => {
                toast.success("successfully Update your profile")
                setuser((prevoususer) => {
                    return { ...prevoususer, displayName: name, photoURL: photo }
                })

                e.target.reset()
            })
            .catch(error => {
                toast.error(error.message)
            })

    }
    return (
        <div className="hero bg-base-200 py-10 mb-10 rounded-2xl">

            <div className="hero-content">
                <div className="card bg-base-100 w-full px-4 py-4 lg:px-20  lg:py-6  ">
                    <h1 className="text-4xl font-bold">Update Your Profile</h1>
                    <form className="card-body" onSubmit={handaleUpdateProfile}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">User Name</span>
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
                            <input type="email" defaultValue={email} readOnly name="email" className="input input-bordered" required />
                        </div>

                        <div className="form-control mt-6">
                            <button className="btn bg-black text-white">Update</button>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    );
};

export default UpdateProfile;