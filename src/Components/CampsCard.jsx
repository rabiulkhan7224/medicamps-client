import { format } from "date-fns";
import { Link } from "react-router";

const CampsCard = ({camp}) => {
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
              <p className="text-sm text-gray-600">
                {format(new Date(camp.dateTime), "PPPpp")}
              </p>
              <p className="text-sm">
                <span className="font-semibold">Location:</span> {camp.location}
              </p>
              <p className="text-sm">
                <span className="font-semibold">Healthcare Professional:</span>{" "}
                {camp.healthcareProfessional}
              </p>
              <p className="text-sm">
                <span className="font-semibold">Participants:</span>{" "}
                {camp.participantCount}
              </p>
              <p className="text-sm">
                <span className="font-semibold">Description:</span>{" "}
                {camp.description}
              </p>
              <div className="card-actions mt-4">
                <Link
                  to={`/camps/${camp._id}`}
                  className="btn bg-accentcolor btn-block"
                >
                  Details
                </Link>
              </div>
            </div>
          </div>
    );
};

export default CampsCard;