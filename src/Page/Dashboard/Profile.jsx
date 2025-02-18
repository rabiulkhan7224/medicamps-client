import { useQuery } from "@tanstack/react-query";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

const Profile = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, loading, updateUserProfile } = useAuth();
  const axiosSecure = useAxiosSecure();
  const { data: userdata = {}, isLoading } = useQuery({
    queryKey: ["users", user?.email],
    enabled: !loading && !!user?.email,
    queryFn: async () => {
      const { data } = await axiosSecure.get(`/user/role/${user?.email}`);
      return data;
    },
  });

  // Modal Form (using React Hook Form)
  const { register, handleSubmit, formState: { errors } } = useForm();
  
  const onSubmit = async (data) => {
    // Example of calling updateUserProfile with the new data
    try {
        await updateUserProfile(data.name, data.photoURL);
    toast.success('successful update your Profile')
    
    } catch (error) {
        toast.error(error.message)
    }
    finally{
        setIsOpen(false);
    }
     // Close the modal after successful submission
  };
if(isLoading) return <><h1> waiting for data</h1></>
  return (
    <div>
      <div className="bg-gradient-to-r from-primarycolor to-secondarycolor min-h-screen flex items-center justify-center p-4">
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-2xl max-w-4xl w-full p-8 transition-all duration-300 animate-fade-in">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/3 text-center mb-8 md:mb-0">
              <img
                src={user?.photoURL}
                alt="Profile Picture"
                className="rounded-full w-48 h-48 mx-auto mb-4 border-4 border-indigo-800 dark:border-blue-900 transition-transform duration-300 hover:scale-105"
              />
              <h1 className="text-2xl font-bold text-indigo-800 dark:text-white mb-2">{user?.displayName}</h1>
              <p className="text-gray-600 dark:text-gray-300">{userdata.role}</p>
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="mt-4 bg-primarycolor text-white px-4 py-2 rounded-lg hover:bg-blue-900 transition-colors duration-300"
              >
                Edit Profile
              </button>
            </div>
            <div className="md:w-2/3 md:pl-8 flex items-center flex-col justify-center">
              <h2 className="text-xl font-semibold text-indigo-800 dark:text-white mb-4">Contact Information</h2>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                <li className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-indigo-800 dark:text-blue-900" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                  {user?.email}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Modal for editing profile */}
      {isOpen && (
        <div className="modal modal-open">
          <div className="modal-box w-96 bg-white">
            <h1 className="text-xl font-semibold text-indigo-800 mb-4">Edit Profile</h1>

            {/* Profile Update Form */}
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  defaultValue={user?.displayName}
                  {...register("name", { required: "Name is required" })}
                  className="input input-bordered w-full"
                />
                {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Profile Image URL</span>
                </label>
                <input
                  type="text"
                  defaultValue={user?.photoURL}
                  {...register("photoURL", { required: "Image URL is required" })}
                  className="input input-bordered w-full"
                />
                {errors.photoURL && <p className="text-red-500 text-sm">{errors.photoURL.message}</p>}
              </div>

              <div className="modal-action">
                <button type="button" className="btn btn-ghost" onClick={() => setIsOpen(false)}>
                  Close
                </button>
                <button type="submit" className="btn btn-primary">Save Changes</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;
