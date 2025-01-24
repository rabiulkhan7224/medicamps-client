import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import CampsCard from "../../Components/CampsCard";
import { Link } from "react-router";

const Highest = () => {
    const axiosPublic=useAxiosPublic()
    const { data: camps = [], isLoading } = useQuery({
        queryKey: ['camps-h'],
        queryFn: async () => {
          const { data } = await axiosPublic.get('/camps-high', { params: {} })
          return data
    
        }
      })
      if(isLoading) return <><h1 className="text-center text-2xl font-bold">waiting for data....</h1></>
    return (
        <div className="mt-3">
             {/* Camp Cards */}

             <h1 className="text-center text-2xl font-bold">Our Top Participants</h1>
      <div
        className={`grid grid-cols-1  md:grid-cols-3 gap-6`}
      >
        {camps.map((camp) => <CampsCard key={camp._id} camp={camp}></CampsCard>)}
      </div>
            <div className="mx-auto text-center mb-4"><Link to={'/available'} className="btn bg-primarycolor font-bold text-xl">See More</Link></div>
        </div>
    );
};

export default Highest;