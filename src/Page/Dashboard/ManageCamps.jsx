import { useQuery } from "@tanstack/react-query";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useState } from "react";
import toast from "react-hot-toast";
import useImageDB from "../../hooks/useImageDB";

const ManageCamps = () => {

    const {user}=useAuth()
    const axiosSecure=useAxiosSecure()
    const [selectedCamp, setSelectedCamp] = useState(null)
    const {data:campdata=[],isLoading,refetch}=useQuery({queryKey:['managecapms',user?.email],
        queryFn:async()=>{
           const {data}= await axiosSecure.get(`/manage-camps/${user?.email}`)
            return data;
        }
    })

    // Handle update
  const handleUpdate = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const updatedCamp = {
      
      campName: formData.get("campName"),
      description: formData.get("description"),
      campFees: parseFloat(formData.get("campFees")),
    };

    try {
        const imageFile = formData.get("image");
        
        
        if (imageFile && imageFile.size > 0) {
          const imageUrl = await useImageDB(imageFile); // Get the image URL
          updatedCamp.image = imageUrl;
          
        }

        
      const response = await axiosSecure.put(`/update-camp/${selectedCamp._id}`, updatedCamp);
      if (response.data.modifiedCount > 0) {
        toast.success("Camp updated successfully!");
        refetch(); // Refresh data after update
        setSelectedCamp(null); // Close the modal
      }
    } catch (error) {
      console.error("Error updating camp:", error);
      toast.error(error.message);
    }
  };

  // Handle delete
  const handleDelete = async (campId) => {

    toast.custom((t) => (
        <div
          className={`flex flex-col p-4 bg-white rounded shadow-lg ${
            t.visible ? 'animate-enter' : 'animate-leave'
          }`}
        >
          <p className="text-gray-800 font-medium">Are you sure you want to delete this camp?</p>
          <div className="flex justify-end gap-4 mt-4">
            <button
              className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
              onClick={async () => {
                try {
                    const response = await axiosSecure.delete(`/delete-camp/${campId}`);
                    if (response.data.deletedCount > 0) {
                      toast.success("Camp deleted successfully!");
                      refetch(); // Refresh data after deletion
                    }
                  } catch (error) {
                    console.error("Error deleting camp:", error);
                    toast.error(error.message);
                  }finally {
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
  if(isLoading) return <><h1>waiting...</h1></>

  return (
    <div className="overflow-x-auto">
      <table className="table">
        {/* Table Head */}
        <thead>
          <tr>
            <th>No.</th>
            <th>Camps Name</th>
            <th>Description</th>
            <th>Camp Fees</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {campdata.map((camp, index) => (
            <tr key={camp._id}>
              <th>{index + 1}</th>
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle h-12 w-12">
                      <img src={camp.image} alt={camp.campName} />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">{camp.campName}</div>
                  </div>
                </div>
              </td>
              <td className="overflow-x-auto">{camp.description.slice(0, 40)}...</td>
              <td>{camp.campFees}</td>
              <td  className="flex flex-col justify-center items-center">
                <button
                  onClick={() => setSelectedCamp(camp)}
                  className="btn btn-primary btn-xs"
                >
                  Update
                </button>
                <button
                  onClick={() => handleDelete(camp._id)}
                  className="btn btn-error btn-xs ml-2"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Update Modal */}
      {selectedCamp && (
        <div className="modal modal-open">
          <div className="modal-box">
            <h3 className="font-bold text-lg">Update Camp</h3>
            <form onSubmit={handleUpdate}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Camp Name</span>
                </label>
                <input
                  type="text"
                  name="campName"
                  defaultValue={selectedCamp.campName}
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Description</span>
                </label>
                <textarea
                  name="description"
                  defaultValue={selectedCamp.description}
                  className="textarea textarea-bordered"
                ></textarea>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Camp Fees</span>
                </label>
                <input
                  type="number"
                  name="campFees"
                  defaultValue={selectedCamp.campFees}
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Image</span>
                </label>
                <input type="file" name="image" className="file-input file-input-bordered" />
              </div>
              <div className="modal-action">
                <button type="submit" className="btn btn-success">
                  Update
                </button>
                <button
                  onClick={() => setSelectedCamp(null)}
                  className="btn btn-ghost"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
export default ManageCamps;