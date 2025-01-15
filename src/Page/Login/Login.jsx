import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from "react-router";
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";
import useAxiosPublic from "../../hooks/useAxiosPublic";


const Login = () => {
    const [showpassword, setShowpassword] = useState(false)
    const { login, signInWithGoogle } = useAuth()
    const location = useLocation()
    const navigate = useNavigate()
    const form = location?.state?.form.pathName || '/'
    const { register, handleSubmit, } = useForm()
    const onSubmit = async (data) => {
        console.log(data)
        if (data) {
            try {
                await login(data.email, data.password)
                toast.success('login successful')
                navigate(form, { replace: true })
            } catch (error) {
                toast.error(error.message)

            }
        }
    }
const axiosPublic=useAxiosPublic()
    const handleSigninWithGoogle = async () => {

        try {
            const {user} = await signInWithGoogle()
            console.log(user)
            if(user){

                await axiosPublic.post(`/users/${user.email}`,{name:user.displayName,email:user.email})
                toast.success('Login Successful')
            }
        } catch (error) {
            toast.error(error.message)
        }

    }
    return (
        <div className="hero bg-base-200 min-h-screen">

            <div className="card bg-base-100 w-full max-w-lg shrink-0 shadow-2xl">
                <h1 className="text-3xl font-bold text-center">Login now!</h1>

                <form onSubmit={handleSubmit(onSubmit)} className="card-body">

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input {...register('email')} type="email" name="email" placeholder="email" className="input input-bordered" required />
                    </div>

                    <div className="form-control relative">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input {...register('password')} type={showpassword ? 'text' : 'password'} placeholder="password" name="password" className="input input-bordered" required />
                        <a><h1 onClick={() => setShowpassword(!showpassword)} className="btn btn-xs absolute right-4 top-12">{showpassword ? <FaEyeSlash /> : <FaEye />}
                        </h1></a>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn  bg-primarycolor">Login</button>
                    </div>
                </form>
                <p className="text-red-500"></p>
                <h2 className="text-center">Don't have an account? <Link to={'/register'} className="text-blue-500 hover:underline">Register</Link></h2>


                {/* <button onClick={handleSigninwithGoogle} className="btn w-11/12 mx-auto "><FcGoogle /> Sign in with Google</button> */}

                <hr />
                <button onClick={handleSigninWithGoogle} className="btn w-11/12 mx-auto mb-3 "><FcGoogle />Sign in with Google</button>
            </div>

        </div>
    );;
};

export default Login;