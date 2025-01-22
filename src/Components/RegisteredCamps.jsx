import { useQuery } from "@tanstack/react-query";
import useAuth from "../hooks/useAuth";
import useAxiosSecure from "../hooks/useAxiosSecure";
import Loader from "../Page/shared/Loader";
import { Link } from "react-router";

const RegisteredCamps = () => {
    const {user}=useAuth()
    const axiosSecure=useAxiosSecure()
    const {data:registerdatas=[],isLoading}=useQuery({queryKey:['registercamps',user],
        queryFn:async()=>{
            const {data}=await axiosSecure.get(`/myregister/${user?.email}`)
            return data

        }
    })
    if(isLoading) return <Loader></Loader>
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
        <td><Link to={`/dashboard/payment/${regidata._id}`} disabled={regidata.paymentStatus==='paid'} className={`btn `}>{regidata.paymentStatus}</Link></td>
        <td>{regidata.confirmationStatus}</td>
        <td><button className="btn">cancel</button></td>
        <td><button className="btn">feedback</button></td>
        
      </tr>))}
     
      
     
    </tbody>
  </table>
</div>
    );
};

export default RegisteredCamps;