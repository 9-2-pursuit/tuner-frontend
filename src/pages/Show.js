import { useParams, useNavigate } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import { SparklesIcon, ClockIcon } from "@heroicons/react/24/solid";
const url = process.env.REACT_APP_API_URL;

function Show() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data: song, loading, error } = useFetch(url + "/" + id);

  return (
    <div
      className="w-full min-h-screen  flex justify-center items-center mx-auto  bg-no-repeat bg-cover"
      style={{
        backgroundImage: `url(https://placeimg.com/1000/800/nature)`,
      }}
    >
      <div className="card w-96 h-max glass bg-opacity-50 bg-gray-800 text-white">
        <figure>
          <img src="https://placeimg.com/400/225/arch" alt="car!" />
        </figure>
        <div className="card-body">
          <h2 className="card-title flex items-center justify-between">
            {song.name}
          </h2>
          <SparklesIcon className="block mx-auto w-10 text-center " />{" "}
          <span className="text-right "> {song.album}</span>
          <div className="mt-5 flex items-center justify-between">
            {song.artist}{" "}
            <span className="flex items-center gap-3">
              <ClockIcon className="w-5" /> {song.time}
            </span>
          </div>
          <div className="card-actions justify-end mt-5">
            <button
              className="btn btn-primary"
              onClick={() => navigate("edit")}
            >
              Edit Song
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Show;
