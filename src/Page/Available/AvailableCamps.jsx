import React, { useState } from "react";

import { useQuery } from "@tanstack/react-query";
import CampsCard from "../../Components/CampsCard";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import Loader from "../shared/Loader";
import useRole from "../../hooks/useRole";

const AvailableCamps = () => {
  const axiosPublic = useAxiosPublic()
  const [searchTerm, setSearchTerm] = useState("");
  const [sortCriteria, setSortCriteria] = useState("alphabetical");
  const [columns, setColumns] = useState(3);

  // Fetch camps data using TanStack Query
  const { data: camps = [], isLoading } = useQuery({
    queryKey: ['camps'],
    queryFn: async () => {
      const { data } = await axiosPublic.get('/camps', { params: {} })
      return data

    }
  })

  if (isLoading) return <Loader></Loader>;

  // Filter and Sort Camps
  //   const filteredCamps = camps
  //     .filter((camp) =>
  //       searchTerm
  //         ? camp.campName.toLowerCase().includes(searchTerm.toLowerCase()) ||
  //           camp.location.toLowerCase().includes(searchTerm.toLowerCase())
  //         : true
  //     )
  //     .sort((a, b) => {
  //       if (sortCriteria === "mostRegistered") return b.participantCount - a.participantCount;
  //       if (sortCriteria === "campFees") return a.campFees - b.campFees;
  //       if (sortCriteria === "alphabetical") return a.campName.localeCompare(b.campName);
  //       return 0;
  //     });

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
          <option value="campFees">Camp Fees</option>
        </select>
        <button
          className="btn bg-secondarycolor"
          onClick={() => setColumns(columns === 3 ? 2 : 3)}
        >
          Toggle Layout ({columns === 3 ? "Two Columns" : "Three Columns"})
        </button>
      </div>

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
