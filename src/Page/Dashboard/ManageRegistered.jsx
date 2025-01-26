import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Loader from "../shared/Loader";
import toast from "react-hot-toast";

const ManageRegistered = () => {
  const axiosSecure = useAxiosSecure();

  // Fetch registered camps data
  const { data: registerdatas = [], isLoading, refetch } = useQuery({
    queryKey: ["allregister"],
    queryFn: async () => {
      const { data } = await axiosSecure.get("/allregisterdata");
      return data;
    },
  });

  // Handle confirmation status update
  const handleConfirmation = async (id) => {
    try {
      const response = await axiosSecure.patch(`/update-confirmation/${id}`, {
        confirmationStatus: "Confirmed",
      });
      if (response.data.modifiedCount > 0) {
        toast.success("Confirmation updated successfully!");
        refetch(); // Refresh data
      }
    } catch (error) {
      console.error("Error confirming:", error);
      toast.error("Failed to update confirmation status.");
    }
  };

  // Handle cancellation with confirmation dialog
  const handleCancel = async (id) => {
    toast.custom((t) => (
      <div className="flex flex-col items-center p-4 bg-white shadow-lg rounded-md">
        <p className="font-semibold mb-2">Are you sure you want to cancel?</p>
        <div className="flex gap-2">
          <button
            onClick={async () => {
              ; // Dismiss toast
              try {
                const response = await axiosSecure.patch(`/cancel-registration/${id}`);
                
                  toast.success("Registration canceled successfully!");
                  refetch(); // Refresh data
                
              } catch (error) {
                console.error("Error canceling registration:", error);
                toast.error("Failed to cancel registration.");
              }finally{
                toast.dismiss(t.id)
              }
            }}
            className="btn btn-error btn-sm"
          >
            Confirm
          </button>
          <button onClick={() => toast.dismiss(t.id)} className="btn btn-secondary btn-sm">
            Cancel
          </button>
        </div>
      </div>
    ));
  };

  if (isLoading) return <Loader />;
  

  return (
    <div className="overflow-x-auto">
      <h2 className="text-xl font-bold mb-4">Manage Registered Camps</h2>
      <table className="table">
        {/* Table Head */}
        <thead>
          <tr>
            <th>No.</th>
            <th>Camp Name</th>
            <th>Fees</th>
            <th>Participant Name</th>
            <th>Payment Status</th>
            <th>Confirmation Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {/* Render Registered Data */}
          {registerdatas.map((regidata, index) => (
            <tr key={regidata._id} className="hover">
              <th>{index + 1}</th>
              <td>{regidata.campName}</td>
              <td>${regidata.campFees}</td>
              <td>{regidata.participantName}</td>
              <td
                className={`${
                  regidata.paymentStatus === "paid" ? "text-green-600" : "text-red-600"
                }`}
              >
                {regidata.paymentStatus}
              </td>
              <td>
                {regidata.confirmationStatus === "pending" ? (
                  <button
                  
                    onClick={() => handleConfirmation(regidata._id)}
                    className="btn btn-warning btn-xs"
                  >
                    Pending
                  </button>
                ) : (
                  <span className={` font-bold ${regidata.confirmationStatus==="Canceled"?'text-red-500':'bg-white'}`}>{regidata.confirmationStatus}</span>
                )}
              </td>
              <td>
                <button
                  onClick={() => handleCancel(regidata._id)}
                  disabled={
                    regidata.paymentStatus === "paid" ||
                    regidata.confirmationStatus === "Confirmed" || regidata.confirmationStatus=== "Canceled"
                  }
                  className="btn btn-outline btn-xs"
                >
                  Cancel
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageRegistered;
