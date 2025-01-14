import { data } from "autoprefixer";
import { useForm } from "react-hook-form";

const SingUp = () => {

    const {register,handleSubmit,reset,formState:{errors}}=useForm()

    const onSubmit=data=>{
        console.log(data)
    }
    return (
        <section className=" ">
    <div className="flex justify-center min-h-screen">
        <div className="hidden bg-cover lg:block lg:w-2/5"   style={{backgroundImage: `url('https://images.unsplash.com/photo-1494621930069-4fd4b2e24a11?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=715&q=80')`}} >
        </div>

        <div className="flex items-center w-full max-w-3xl p-8 mx-auto lg:px-12 lg:w-3/5">
            <div className="w-full">
                <h1 className="text-2xl font-semibold tracking-wider text-gray-800 capitalize ">
                    Get your free account now.
                </h1>

                <p className="mt-4 text-gray-500 dark:text-gray-400">
                    Let’s get you all set up so you can verify your personal account and begin setting up your profile.
                </p>

               

                <form onSubmit={handleSubmit(onSubmit)}  className="grid grid-cols-1 gap-6 mt-8 md:grid-cols-2">
                    <div>
                        <label className="block mb-2 text-sm text-gray-600 "> Name</label>
                        <input {...register('name',{required:true})} type="text" placeholder="full name" className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600  dark:text-gray-700 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                    </div>

                    <div>
                        <label className="block mb-2 text-sm text-gray-600 ">Email address</label>
                        <input {...register('email',{required:true})} type="email" placeholder="johnsnow@example.com" className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600  dark:text-gray-700 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                    </div>
                    

                    <div>
                        <label className="block mb-2 text-sm text-gray-600 ">Profile photo</label>
                        <input {...register('photo',{required:true})} type="file" className="file-input file-input-bordered w-full max-w-xs" />
                    </div>


                    <div>
                        <label className="block mb-2 text-sm text-gray-600 ">Password</label>
                        <input {...register('password',{required:true,
                            minLength:6,
                            maxLength:15,
                            pattern:/(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/
                        })} type="password" placeholder="Enter your password" className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600  dark:text-gray-700 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                   <label>  {errors.password?.type === 'required' && <p className="text-red-600">Password is required</p>}
                                {errors.password?.type === 'minLength' && <p className="text-red-600">Password must be 6 characters</p>}
                                {errors.password?.type === 'maxLength' && <p className="text-red-600">Password must be less than 15 characters</p>}
                                {errors.password?.type === 'pattern' && <p className="text-red-600">Password must have one Uppercase one lower case, one number and one special character.</p>}</label>
                   
                    </div>
                    <div>
                        
                        <input type="submit" value={'Sign Up'}  className="w-full px-6 py-3 text-sm tracking-wide text-white capitalize transition-colors duration-300 transform bg-primarycolor rounded-lg hover:bg-primarycolor/55 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50" />
                    </div>

                    

                    
                </form>
            </div>
        </div>
    </div>
</section>
    );
};

export default SingUp;