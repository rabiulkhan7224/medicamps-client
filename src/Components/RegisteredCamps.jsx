import { useQuery } from "@tanstack/react-query";
import useAuth from "../hooks/useAuth";
import useAxiosSecure from "../hooks/useAxiosSecure";
import Loader from "../Page/shared/Loader";
import { Link } from "react-router";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";
import { useState } from "react";
import ReactStars from "react-rating-stars-component"

const RegisteredCamps = () => {
    const {user}=useAuth()
    const axiosSecure=useAxiosSecure()
    const [isFeedbackModalOpen, setIsFeedbackModalOpen] = useState(false);
    const {data:registerdatas=[],isLoading,refetch}=useQuery({queryKey:['registercamps',user],
        queryFn:async()=>{
            const {data}=await axiosSecure.get(`/myregister/${user?.email}`)
            return data

        }
    })

    const handleCancel = async (id,campId) => {
      toast.custom((t) => (
        <div
          className={`flex flex-col p-4 bg-white rounded shadow-lg ${
            t.visible ? 'animate-enter' : 'animate-leave'
          }`}
        >
          <p className="text-gray-800 font-medium">Are you sure you want to cancel this registration?</p>
          <div className="flex justify-end gap-4 mt-4">
            <button
              className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
              onClick={async () => {
                try {
                  await axiosSecure.post(`/registercancel/${id}`,{campId}); // Perform cancellation
                  toast.success('Registration canceled successfully!');
                  refetch()
                } catch (error) {
                  toast.error('Failed to cancel registration.');
                  console.error(error);
                  refetch()
                } finally {
                  toast.dismiss(t.id); // Dismiss the confirmation toast
                }
              }}
            >
              Confirm
            </button>
            <button
              className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
              onClick={() => toast.dismiss(t.id)} // Dismiss the toast on cancel
            >
              Cancel
            </button>
          </div>
        </div>
      ),{position:"top-center"});
    };

    const { register: feedbackRegister, handleSubmit: handleFeedbackSubmit, setValue, formState: { errors: feedbackErrors } } = useForm();

    const onFeedbackSubmit = async (data) => {
      // Send feedback to server (e.g., rating, feedback, and name)
      console.log(data);
      if(data){
try {

 await axiosSecure.post('/review',data)
  toast.success('Thank you for FeedBack ')
  
} catch (error) {
  toast.error(error.message)
}


      }


      // Close the feedback modal after submitting feedback
      setIsFeedbackModalOpen(false);
    };




    if(isLoading) return <Loader></Loader>

if(registerdatas.length===0)return<><h1 className="text-red-500 text-center text-2xl"> No register data </h1></>
    return (

      
    <div>
        <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>NO.</th>
        <th>Camp Name</th>
        <th>Fees</th>
        <th>participant Name</th>
        <th>payment Status</th>
        <th>confirmation Status</th>
        <th>Canceling</th>
        <th>Feedback</th>
      </tr>
    </thead>
    <tbody>

        
        {registerdatas.map((regidata,index)=>(<tr key={regidata._id} className="hover">
        <th>{index+1}</th>
        <td>{regidata.campName}</td>
        <td>{regidata.campFees}</td>
        <td>{regidata.participantName}</td>
        <td><Link to={`/dashboard/payment/${regidata._id}`} disabled={regidata.paymentStatus==='paid'} className={`btn btn-outline ${regidata.paymentStatus==='paid'?'text-green-500':'bg-yellow-500'} `}>{regidata.paymentStatus}</Link></td>
        <td className={` ${regidata.confirmationStatus==="Confirmed"?'text-green-600 font-bold':'text-yellow-500'}`}>{regidata.confirmationStatus}</td>
        <td><button onClick={()=>handleCancel(regidata._id,regidata.campId)} disabled={regidata.paymentStatus==='paid'} className="btn btn-outline">cancel</button></td>
        <td><button disabled={regidata.paymentStatus==='unPaid'}  onClick={() => setIsFeedbackModalOpen(true)} className="btn btn-outline">feedback</button></td>
        
      </tr>))}
     
      
     
    </tbody>
  </table>
 {/* Feedback Modal */}
 {isFeedbackModalOpen && (
        <div className="modal modal-open">
          <div className="modal-box w-96 bg-white">
            <h1 className="text-xl font-semibold text-indigo-800 mb-4">Give Feedback</h1>
            <form onSubmit={handleFeedbackSubmit(onFeedbackSubmit)} className="space-y-4">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Your Name</span>
                </label>
                <input
                  type="text"
                  defaultValue={user?.displayName}
                  {...feedbackRegister("name",{ required: "Name is required" })}
                  className="input input-bordered w-full"
                />
                {feedbackErrors.name && <p className="text-red-500 text-sm">{feedbackErrors.name.message}</p>}
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Rating</span>
                </label>
                <ReactStars
          count={5}
          size={24}
          activeColor="#ffd700"
          onChange={(newRating) => {
            setValue("rating", newRating); // Set the rating value in the form
          }}
        />
                {feedbackErrors.rating && <p className="text-red-500 text-sm">{feedbackErrors.rating.message}</p>}
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Feedback</span>
                </label>
                <textarea
                  {...feedbackRegister("feedback", { required: "Feedback is required" })}
                  className="textarea textarea-bordered w-full"
                />
                {feedbackErrors.feedback && <p className="text-red-500 text-sm">{feedbackErrors.feedback.message}</p>}
              </div>

              <div className="modal-action">
                <button type="button" className="btn btn-ghost" onClick={() => setIsFeedbackModalOpen(false)}>
                  Close
                </button>
                <button type="submit" className="btn btn-primary">Submit Feedback</button>
              </div>
            </form>
          </div>
        </div>
      )}

</div>
</div>
    );
};

export default RegisteredCamps;