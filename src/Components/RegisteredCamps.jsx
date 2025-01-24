import { useQuery } from "@tanstack/react-query";
import useAuth from "../hooks/useAuth";
import useAxiosSecure from "../hooks/useAxiosSecure";
import Loader from "../Page/shared/Loader";
import { Link } from "react-router";
import toast from "react-hot-toast";

const RegisteredCamps = () => {
    const {user}=useAuth()
    const axiosSecure=useAxiosSecure()
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
    if(isLoading) return <Loader></Loader>

if(registerdatas.length===0)return<><h1 className="text-red-500 text-center text-2xl"> No register data </h1></>
    return (
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
        <td><button disabled={regidata.paymentStatus==='unPaid'} className="btn btn-outline">feedback</button></td>
        
      </tr>))}
     
      
     
    </tbody>
  </table>
</div>
    );
};

export default RegisteredCamps;