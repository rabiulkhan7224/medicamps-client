import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useAuth from "../../hooks/useAuth";
import { format } from "date-fns";
import Loader from "../shared/Loader";
import moment from "moment/moment";


const PaymentHistory = () => {
    const {user}=useAuth()
    const axiosSecure=useAxiosSecure()
    const {data:paymentdata=[],isLoading}=useQuery({queryKey:['history',user?.email],
        queryFn:async()=>{
           const {data}= await axiosSecure.get(`/payment-history/${user?.email}`)
            return data;
        }
    })
  
    if(isLoading || !paymentdata) return <Loader></Loader>
    return (
        <div>
            <h1>payment history </h1>
            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>NO.</th>
        <th>Camp Name</th>
        <th>payment($)</th>
        <th>Email</th>
       
        <th>Transaction Id</th>
        <th>Date</th></tr>
    </thead>
    <tbody>

        
        {paymentdata.map((payment,index)=>(<tr key={payment._id} className="hover:bg-blue-800/30 border">
        <th>{index+1}</th>
        <td>{payment.campName}</td>
        <td>{payment.campFees}</td>
        <td>{payment.email}</td>
        <td>{payment.transactionId}</td>
        <td>{moment(payment.date).format("MMMM Do YYYY, h:mm A")}</td>
       
      </tr>))}
     
      
     
    </tbody>
  </table>
</div>
        </div>
    );
};

export default PaymentHistory;