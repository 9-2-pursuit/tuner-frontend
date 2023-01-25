import { useParams, useNavigate } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import ReactAudioPlayer from "react-audio-player";

import { SparklesIcon, ClockIcon, HeartIcon } from "@heroicons/react/24/solid";

function Show() {
  const { id } = useParams();
  const URL = process.env.REACT_APP_API_URL + "songs/" + id;
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
    <>
      {song && (
        <div
          className="w-full h-screen flex flex-col  justify-center items-center mx-auto  bg-no-repeat bg-cover "
          style={{
            backgroundImage: `url(https://placeimg.com/1000/800/nature)`,
          }}
        >
          <div className="card max-w-min  max-h-min   glass bg-opacity-50 bg-gray-800 text-white shadow-lg">
            <figure>
              {/* <img src="https://placeimg.com/400/225/arch" alt="car!" /> */}
              <img
                src={song.picture}
                alt="album cover"
                className=" object-contain "
              />
            </figure>

            <div className="card-body ">
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
                  <ClockIcon className="w-5" />{" "}
                  {Math.trunc(song.time / 60) + ":" + (song.time % 60)}
                </span>
              </div>
              <ReactAudioPlayer
                src={song.preview}
                autoPlay
                controls
                className="mx-auto"
              />
            </div>
          </div>
          <div className="card-actions justify-center mt-5">
            <div className="btn-group">
              <button className="btn btn-md" onClick={() => navigate("/songs")}>
                Back
              </button>
              <button className="btn" onClick={() => navigate("edit")}>
                Edit
              </button>
              <button className="btn" onClick={deleteSong}>
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
      {loading && (
        <div className="w-full min-h-screen flex items-center justify-center">
          <progress className="progress bg-slate-600  w-56"></progress>{" "}
        </div>
      )}
      {error && (
        <div className="w-full min-h-screen flex items-center justify-center">
          <div className="card w-96 bg-base-200 shadow-xl text-red-400">
            <div className="card-body">
              <h2 className="card-title text-5xl mb-5">Error</h2>
              <p>Something went wrong!</p>
              <div className="card-actions justify-end">
                {/* <button className="btn btn-primary">Buy Now</button> */}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Show;
