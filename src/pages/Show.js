import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import { SparklesIcon, ClockIcon } from "@heroicons/react/24/solid";
const url = process.env.REACT_APP_API_URL;

function Show() {
  const { id } = useParams();
  const { data: song, loading, error } = useFetch(url + "/" + id);

  return (
    <div
      className="w-full min-h-screen  flex justify-center items-center mx-auto "
      style={{
        backgroundImage: `url(https://images.unsplash.com/photo-1603850121303-d4ade9e5ba65?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80)`,
      }}
    >
      <div className="card w-96 h-max glass">
        <figure>
          <img src="https://placeimg.com/400/225/arch" alt="car!" />
        </figure>
        <div className="card-body">
          <h2 className="card-title flex items-center justify-between">
            {song.name}
          </h2>
          <SparklesIcon className="block mx-auto w-20 text-center " />{" "}
          <span className="text-right "> {song.album}</span>
          <div className="mt-5 flex items-center justify-between">
            {song.artist}{" "}
            <span className="flex items-center gap-3">
              <ClockIcon className="w-5" /> {song.time}
            </span>
          </div>
          <div className="card-actions justify-end mt-5">
            <button className="btn btn-primary">Listen now!</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Show;
