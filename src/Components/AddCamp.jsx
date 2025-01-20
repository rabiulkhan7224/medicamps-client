import { useForm } from 'react-hook-form';
import useImageDB from '../hooks/useImageDB';

const AddCamp = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
      } = useForm();
    
      const onSubmit =async (data) => {

          console.log('Submitted Data:', data.image[0]);
        if(data){
            try {
               const imageUrl= await useImageDB(data.image[0])

                
            } catch (error) {
                
            }
        }
        // Simulated API Call
    
        // Clear form after submission
        reset();
      };
    return (
        <div className="container mx-auto px-4 py-8">
        <div className=" p-6 rounded-lg shadow-md max-w-3xl mx-auto">
          <h1 className="text-2xl font-bold text-center mb-6">Add A Camp</h1>
          <form onSubmit={handleSubmit(onSubmit)} className="grid gap-2 grid-cols-1 md:grid-cols-2 ">
            {/* Camp Name */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Camp Name</span>
              </label>
              <input
                type="text"
                {...register('campName', { required: 'Camp Name is required' })}
                placeholder="Enter camp name"
                className={`input input-bordered w-full ${
                  errors.campName ? 'input-error' : ''
                }`}
              />
              {errors.campName && (
                <span className="text-error text-sm">{errors.campName.message}</span>
              )}
            </div>
  
            {/* Image URL */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Image</span>
              </label>
              <input
                type="file"
                {...register('image', { required: 'Image  is required' })}
                placeholder="Enter image "
                className={`file-input file-input-bordered w-full max-w-xs ${
                  errors.image ? 'input-error' : ''
                }`}
              />
              {errors.image && (
                <span className="text-error text-sm">{errors.image.message}</span>
              )}
            </div>
  
            {/* Camp Fees */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Camp Fees</span>
              </label>
              <input
                type="number"
                {...register('campFees', { required: 'Camp Fees are required', min: 0 })}
                placeholder="Enter camp fees"
                className={`input input-bordered w-full ${
                  errors.campFees ? 'input-error' : ''
                }`}
              />
              {errors.campFees && (
                <span className="text-error text-sm">{errors.campFees.message}</span>
              )}
            </div>
  
            {/* Date & Time */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Date & Time</span>
              </label>
              <input
                type="datetime-local"
                {...register('dateTime', { required: 'Date & Time is required' })}
                className={`input input-bordered w-full ${
                  errors.dateTime ? 'input-error' : ''
                }`}
              />
              {errors.dateTime && (
                <span className="text-error text-sm">{errors.dateTime.message}</span>
              )}
            </div>
  
            {/* Location */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Location</span>
              </label>
              <input
                type="text"
                {...register('location', { required: 'Location is required' })}
                placeholder="Enter location"
                className={`input input-bordered w-full ${
                  errors.location ? 'input-error' : ''
                }`}
              />
              {errors.location && (
                <span className="text-error text-sm">{errors.location.message}</span>
              )}
            </div>
  
            {/* Healthcare Professional */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Healthcare Professional Name</span>
              </label>
              <input
                type="text"
                {...register('healthcareProfessional', {
                  required: 'Healthcare Professional Name is required',
                })}
                placeholder="Enter professional's name"
                className={`input input-bordered w-full ${
                  errors.healthcareProfessional ? 'input-error' : ''
                }`}
              />
              {errors.healthcareProfessional && (
                <span className="text-error text-sm">
                  {errors.healthcareProfessional.message}
                </span>
              )}
            </div>
  
            
              <div>


            {/* Description */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Description</span>
              </label>
              <textarea
                {...register('description', { required: 'Description is required' })}
                placeholder="Enter camp description"
                className={`textarea textarea-bordered w-full ${
                  errors.description ? 'textarea-error' : ''
                }`}
                rows="4"
              ></textarea>
              {errors.description && (
                <span className="text-error text-sm">{errors.description.message}</span>
              )}
            </div>
            {/* Submit Button */}
            <div className="form-control mt-6 ">
              <button className="btn bg-primarycolor w-full">Submit</button>
            </div>

              </div>
  
          </form>
        </div>
      </div>
  
    );
};

export default AddCamp;