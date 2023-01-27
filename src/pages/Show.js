import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import ReactAudioPlayer from "react-audio-player";

import { SparklesIcon, ClockIcon, HeartIcon } from "@heroicons/react/24/solid";

function Show() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [deleted, setDeleted] = useState(false);
  const URL = process.env.REACT_APP_API_URL + "songs/" + id;
  const { data: song, loading, error } = useFetch(URL);
  console.log(deleted);
  function deleteSong(id) {
    fetch(URL, { method: "DELETE" })
      .then((res) => {
        console.log(res);
        if (!res.ok) throw new Error(res.statusText);
        if (res.ok) {
          setDeleted(true);

          setTimeout(() => {
            navigate("/songs");
          }, 2000);
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
          className="w-full h-screen  flex flex-col  justify-center items-center mx-auto  bg-no-repeat bg-cover "
          style={{
            backgroundImage: `url("https://source.unsplash.com/random/?abstract")`,
          }}
        >
          <div className="card max-w-min  max-h-[580px]   glass bg-opacity-50 bg-gray-800 text-white shadow-lg">
            <figure>
              {song.picture ? (
                <img
                  src={song.picture}
                  alt="album cover"
                  className=" object-contain "
                  aspectratio="16/9"
                />
              ) : (
                <img
                  src="https://source.unsplash.com/random/400x300"
                  alt="random album cover image"
                />
              )}
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
      {deleted && (
        <div className="toast toast-top toast-end mt-12">
          <div className="alert alert-success">
            <div>
              <span>Song deleted successfully.</span>
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
