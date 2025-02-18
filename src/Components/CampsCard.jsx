import { format } from "date-fns";
import { FaLocationArrow, FaPeopleArrows } from "react-icons/fa";
import { FaDatabase, FaJoint, FaPeopleGroup } from "react-icons/fa6";
import { FcDataSheet } from "react-icons/fc";
import { Link } from "react-router";

const CampsCard = ({ camp }) => {
  return (
    <div

      className="card bg-base-100 shadow-xl p-4 flex flex-col"
    >
      <img
        src={camp.image}
        alt={camp.campName}
        className="w-full h-[200px] object-cover rounded-lg"
      />
      <div className="card-body">
        <h2 className="card-title text-lg font-bold">{camp.campName}</h2>

        <div className="flex items-center"><FcDataSheet /> <p className="text-sm text-gray-600">{format(new Date(camp.dateTime), "PPPpp")}</p> </div>


        <div className="flex items-center">
          <FaLocationArrow></FaLocationArrow>  <p className="text-sm">{camp.location}</p>
        </div>

        <p className="text-sm">

          <span className="font-semibold">Healthcare Professional:</span>{" "}
          {camp.healthcareProfessional}
        </p>
        <div className="flex items-center">

          <FaPeopleGroup /><p className="text-sm">
            Participants:{" "}
            {camp.participantCount}
          </p>
        </div>

        <p className="text-sm">
          
          {camp.description.slice(0, 50)}...
        </p>
        <h1 >$ <span className="font-semibold "></span>{camp.campFees}</h1>
        <div className="card-actions mt-4">
          <Link
            to={`/camps/${camp._id}`}
            className="btn rounded-3xl bg-secondarycolor "
          >
            Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CampsCard;