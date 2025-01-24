import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useNavigate, useParams } from "react-router";
import { Dialog } from "@headlessui/react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import useAuth from "../../hooks/useAuth";
import { format } from "date-fns";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { FaCalendarDay } from "react-icons/fa";
import { FaLocationArrow, FaPeopleGroup } from "react-icons/fa6";

const CampDetails = () => {
    const axiosPublic = useAxiosPublic()
    const axiosSecure=useAxiosSecure()
    const navigate=useNavigate()
    const { user } = useAuth()
    const { id } = useParams()
    const { data: camp = {}, isLoading, } = useQuery({
        queryKey: ['camp', id],
        queryFn: async () => {

            const { data } = await axiosPublic.get(`/camps/${id}`)
            return data;
        }
    })
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [loading, setLoading] = useState(false);

    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = async (formData) => {
        
        
        setLoading(true);
        const participantData = {
            campId: camp._id,
            campFees: camp.campFees,
            campName:camp.campName,
            participantName: user?.displayName,
            participantEmail: user?.email,
            ...formData,
        };
       
        

        try {
            await axiosSecure.post("/registercamps", participantData);
            toast.success("You have successfully joined the camp!");

            setIsModalOpen(false);
            navigate('/dashboard/registered')
            
        } catch (error) {
            toast.error("Error: " + error.message || "Failed to join camp.");
        } finally {
            setLoading(false);
        }
    };

    if (isLoading) return <div>Loading...</div>;



    return (
        <div className="container mx-auto py-8 relative">

            <div className="card lg:card-side bg-base-100 shadow-xl">
                <figure>
                    <img
                        src={camp.image}
                        alt="Album" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{camp.campName}</h2>
                    <p className="text-gray-600 font-bold">Fees: ${camp.campFees}</p>
                    <p className="text-gray-600"><FaCalendarDay />
                    {format(new Date(camp.dateTime), "PPPpp")}</p>
                    <p className="text-gray-600 flex"><FaLocationArrow></FaLocationArrow> {camp.location}</p>
                    <p className="text-gray-600">Healthcare Professional: {camp.healthcareProfessional}</p>
                    <p className="text-gray-600"> <FaPeopleGroup />Participants: {camp.participantCount}</p>
                    <p className="text-gray-600">{camp.description}</p>
                    <div className="card-actions justify-center">
                        <button
                            onClick={() => {
                                if(!user){
                                    navigate('/login')
                                    return;
                                }
                                setIsModalOpen(true)}}
                            className="btn bg-primarycolor mt-4"
                        >
                            Join Camp
                        </button>
                    </div>
                </div>
            </div>

            {/* Modal */}
            <Dialog open={isModalOpen} onClose={() => setIsModalOpen(false)} className="fixed inset-0 z-50   flex items-center justify-center overflow-scroll ">
                <div className="bg-white p-6 pt-6 rounded-lg shadow-lg max-w-md w-full ">
                    <button onClick={() => setIsModalOpen(false)} className="btn btn-circle right-0">close</button>
                    <h2 className="text-xl font-bold mb-4">Register for {camp.campName}</h2>
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-2 ">
                        <p>Camp Name: {camp.campName}</p>
                        <p>Fees: ${camp.campFees}</p>
                        <p>Location: {camp.location}</p>
                        <p>Healthcare Professional: {camp.healthcareProfessional}</p>
                        <p>Name: {user?.displayName}</p>
            <p>Email: {user?.email}</p>


                        <input
                            type="number"
                            placeholder="Age"
                            {...register("age", { required: "Age is required" })}
                            className="input input-bordered w-full"
                        />
                        {errors.age && <p className="text-red-500 text-sm">{errors.age.message}</p>}

                        <input
                            type="text"
                            placeholder="Phone"
                            {...register("phone", { required: "Phone number is required" })}
                            className="input input-bordered w-full"
                        />
                        {errors.phone && <p className="text-red-500 text-sm">{errors.phone.message}</p>}

                        <select
                            {...register("gender", { required: "Gender is required" })}
                            className="select select-bordered w-full"
                        >
                            <option value="">Select Gender</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                            <option value="Other">Other</option>
                        </select>
                        {errors.gender && <p className="text-red-500 text-sm">{errors.gender.message}</p>}

                        <input
                            type="text"
                            placeholder="Emergency Contact"
                            {...register("emergencyContact", { required: "Emergency contact is required" })}
                            className="input input-bordered w-full"
                        />
                        {errors.emergencyContact && <p className="text-red-500 text-sm">{errors.emergencyContact.message}</p>}

                        <button
                            type="submit"
                            className="btn bg-primarycolor mt-4 w-full"
                            disabled={loading}
                        >
                            {loading ? "Submitting..." : "Confirm Registration"}
                        </button>
                    </form>
                </div>
            </Dialog>
        </div>
    );
};

export default CampDetails;