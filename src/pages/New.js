import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Toast from "../components/Toast";

function New() {
  const navigate = useNavigate();
  const URL = process.env.REACT_APP_API_URL + "songs";
  const [created, setCreated] = useState(false);
  const [songData, setSongData] = useState({
    name: "",
    artist: "",
    album: "",
    time: "",
    is_favorite: false,
  });

  function handleChange(e) {
    const newSongData = { ...songData };
    if (e.target.type === "checkbox") {
      newSongData.is_favorite = !newSongData.is_favorite;
    } else {
      newSongData[e.target.id] = e.target.value;
    }
    setSongData(newSongData);
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(JSON.stringify(songData));
    fetch(URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(songData),
    })
      .then((res) => {
        console.log(res);
        return res.json();
      })
      .then((data) => {
        setCreated(true);
        setTimeout(() => {
          navigate("/songs");
        }, 1800);
      })
      .catch((err) => console.log(err));
  }

  return (
    <div>
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-lg">
          <h1 className="text-center text-2xl font-bold text-indigo-500 sm:text-3xl">
            Add a new song
          </h1>

          <form className="mt-6 mb-0 space-y-4 rounded-lg p-8 shadow-2xl ">
            <div>
              <label htmlFor="name" className="text-sm font-medium">
                Name
              </label>

              <div className="relative mt-1">
                <input
                  type="text"
                  id="name"
                  className="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm"
                  placeholder="Enter Song Name"
                  value={songData.name}
                  onChange={(e) => handleChange(e)}
                />
              </div>
            </div>

            <div>
              <label htmlFor="artist" className="text-sm font-medium">
                Artist
              </label>

              <div className="relative mt-1">
                <input
                  type="text"
                  id="artist"
                  className="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm"
                  placeholder="Enter Artist "
                  value={songData.artist}
                  onChange={(e) => handleChange(e)}
                />
              </div>
            </div>
            <div>
              <label htmlFor="album" className="text-sm font-medium">
                Album
              </label>

              <div className="relative mt-1">
                <input
                  type="text"
                  id="album"
                  className="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm"
                  placeholder="Enter Album "
                  value={songData.album}
                  onChange={(e) => handleChange(e)}
                />
              </div>
            </div>

            <div>
              <label htmlFor="time" className="text-sm font-medium">
                Duration
              </label>

              <div className="relative mt-1">
                <input
                  type="text"
                  id="time"
                  min="00:02:00"
                  max="00:10:00"
                  className="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm"
                  placeholder="Enter Duration In seconds eg. 120"
                  value={songData.time}
                  onChange={(e) => handleChange(e)}
                />
              </div>
            </div>

            <label className="label cursor-pointer">
              <span className="label-text">Add to Favorite List</span>
              <input
                id="is_favorite"
                type="checkbox"
                value={songData.is_favorite}
                checked={songData.is_favorite}
                className="checkbox checkbox-primary"
                onChange={(e) => handleChange(e)}
              />
            </label>

            <button
              onClick={handleSubmit}
              className="block w-full rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white"
            >
              Create
            </button>
          </form>
        </div>
      </div>
      {created && <Toast message={"Song created successfully."} />}
    </div>
  );
}

export default New;
