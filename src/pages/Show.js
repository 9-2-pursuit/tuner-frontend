import { useParams, useNavigate } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import {
  SparklesIcon,
  ClockIcon,
  TrashIcon,
  BackspaceIcon,
  PencilIcon,
  HeartIcon,
} from "@heroicons/react/24/solid";

function Show() {
  const { id } = useParams();
  const URL = process.env.REACT_APP_API_URL + "/" + id;
  const navigate = useNavigate();
  const { data: song, loading, error } = useFetch(URL);

  function deleteSong(id) {
    fetch(URL, { method: "DELETE" })
      .then((res) => {
        console.log(res);
        if (!res.ok) throw new Error(res.statusText);
        if (res.ok) {
          navigate("/songs");
        }
        return res.json();
      })
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  }

  return (
    <div
      className="w-full min-h-screen  flex justify-center items-center mx-auto  bg-no-repeat bg-cover "
      style={{
        backgroundImage: `url(https://placeimg.com/1000/800/nature)`,
      }}
    >
      <div className="card w-90 h-max glass bg-opacity-50 bg-gray-800 text-white shadow-lg">
        <figure>
          <img src="https://placeimg.com/400/225/arch" alt="car!" />
        </figure>
        <div className="card-body">
          <h2 className="card-title flex items-center justify-between">
            {song.name}
            <HeartIcon
              className={song.is_favorite ? "text-violet-500 w-10" : "w-10"}
            />
          </h2>
          <SparklesIcon className="block mx-auto w-10 text-center " />{" "}
          <span className="text-right "> {song.album}</span>
          <div className="mt-5 flex items-center justify-between">
            {song.artist}{" "}
            <span className="flex items-center gap-3">
              <ClockIcon className="w-5" /> {song.time}
            </span>
          </div>
          <div className="card-actions justify-center mt-5">
            <div className="btn-group">
              <button className="btn" onClick={() => navigate("/songs")}>
                <BackspaceIcon className="w-5" />
              </button>
              <button className="btn" onClick={() => navigate("edit")}>
                <PencilIcon className="w-5" />
              </button>
              <button className="btn" onClick={deleteSong}>
                <TrashIcon className="w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Show;
