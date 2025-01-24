import React, { useState } from "react";

import { useQuery } from "@tanstack/react-query";
import CampsCard from "../../Components/CampsCard";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import Loader from "../shared/Loader";

const AvailableCamps = () => {
  const axiosPublic = useAxiosPublic()
  const [searchTerm, setSearchTerm] = useState("");
  const [sortCriteria, setSortCriteria] = useState("");
  const [columns, setColumns] = useState(3);

  // Fetch camps data using TanStack Query
  const { data: camps = [], isLoading } = useQuery({
    queryKey: ['camps', searchTerm, sortCriteria],
    queryFn: async () => {
      const { data } = await axiosPublic.get('/camps', {
        params: {
          search: searchTerm,
          sort: sortCriteria,
        },
      })
      return data

    }
  })

  // if (isLoading) return <Loader></Loader>;

  
  return (
    <div className="container mx-auto p-4">
      {/* Search Bar */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
        <input
          type="text"
          placeholder="Search camps by name or location..."
          className="input input-bordered w-full md:w-1/3"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <select
          className="select select-bordered w-full md:w-1/4"
          value={sortCriteria}
          onChange={(e) => setSortCriteria(e.target.value)}
        >
          <option value="alphabetical">Alphabetical Order</option>
          <option value="mostRegistered">Most Registered</option>
          <option value="campFeesHigh">Highest Camp Fees</option>
          <option value="campFeesLow">Lowest Camp Fees</option>
        </select>
        <button
          className="btn hidden md:flex bg-secondarycolor"
          onClick={() => setColumns(columns === 3 ? 2 : 3)}
        >
          Toggle Layout ({columns === 3 ? "Two Columns" : "Three Columns"})
        </button>
      </div>
 {isLoading && <Loader></Loader>}
      {/* Camp Cards */}
      <div
        className={`grid grid-cols-1 ${columns === 2 ? "md:grid-cols-2" : "md:grid-cols-3"
          } gap-6`}
      >
        {camps.map((camp) => <CampsCard key={camp._id} camp={camp}></CampsCard>)}
      </div>
    </div>
  );
};

export default AvailableCamps;
