import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";
import useAuth from '../../hooks/useAuth';
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const Analytics = () => {
    const {user}=useAuth()
    const axiosSecure=useAxiosSecure()
    const {data:campData=[],isLoading,refetch,error}=useQuery({queryKey:['registercamps',user],
        queryFn:async()=>{
            const {data}=await axiosSecure.get(`/myregister/${user?.email}`)
            return data

        }
    })

    if (isLoading) return <p>Loading analytics...</p>;
    if (error) return <p>Failed to load analytics. Please try again later.</p>;
  
    // Prepare data for analytics
    const chartData = campData.map((camp) => ({
      name: camp.campName,
      fees: parseInt(camp.campFees?.$numberInt || camp.campFees, 10),
    }));
  
    const totalPaid = campData
      .filter((camp) => camp.paymentStatus.toLowerCase() === "paid")
      .reduce((sum, camp) => sum + parseInt(camp.campFees?.$numberInt || camp.campFees, 10), 0);
  
    const totalUnpaid = campData
      .filter((camp) => camp.paymentStatus.toLowerCase() === "unpaid")
      .reduce((sum, camp) => sum + parseInt(camp.campFees?.$numberInt || camp.campFees, 10), 0);
  
    const paidCount = campData.filter((camp) => camp.paymentStatus.toLowerCase() === "paid").length;
    const unpaidCount = campData.filter((camp) => camp.paymentStatus.toLowerCase() === "unpaid").length;
  
    return (
      <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md ">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">Camp Analytics</h2>
  
        {/* Totals Section */}
        <div className="mb-6 grid grid-cols-2 gap-4">
          <div className="bg-green-100 p-4 rounded-md shadow">
            <p className="text-lg font-semibold text-green-800">Total Paid</p>
            <p className="text-xl font-bold text-green-900">${totalPaid}</p>
            <p className="text-sm text-green-600">{paidCount} Camps</p>
          </div>
          <div className="bg-red-100 p-4 rounded-md shadow">
            <p className="text-lg font-semibold text-red-800">Total Unpaid</p>
            <p className="text-xl font-bold text-red-900">${totalUnpaid}</p>
            <p className="text-sm text-red-600">{unpaidCount} Camps</p>
          </div>
        </div>
  
        {/* Chart Section */}
       <div className="w-full mx-auto overflow-auto">
       <BarChart
          width={700}
          height={400}
          className=""
          
          data={chartData}
          margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="fees" fill="#8884d8" name="Camp Fees" />
        </BarChart>
       </div>
      </div>
    );
  };
  
  
export default Analytics;