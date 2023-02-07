import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import { Toast } from "../components/Imports";

function Edit() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [updated, setUpdated] = useState(false);
  const URL = process.env.REACT_APP_API_URL + "songs/" + id;
  const { data: songData, setData: setSongData } = useFetch(URL);

  console.log("songdata", songData);

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
      method: "PUT",
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
        console.log(data);
        setUpdated(true);
        setTimeout(() => {
          navigate("/songs");
        }, 1200);
      })
      .catch((err) => console.log(err));
  }

  return (
    <div>
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-lg">
          <h1 className="text-center text-2xl font-bold text-indigo-500 sm:text-3xl">
            Edit song
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
                  value={songData.name || ""}
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
                  value={songData.artist || ""}
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
                  value={songData.album || ""}
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
                  placeholder="Enter Duration eg. 03:12"
                  value={songData.time || ""}
                  onChange={(e) => handleChange(e)}
                />
              </div>
            </div>

            <label className="label cursor-pointer">
              <span className="label-text">Add to Favorite List</span>
              <input
                id="is_favorite"
                type="checkbox"
                value={songData.is_favorite || false}
                checked={songData.is_favorite || false}
                className="checkbox checkbox-primary"
                onChange={(e) => handleChange(e)}
              />
            </label>

            <button
              onClick={handleSubmit}
              className="block w-full rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white"
            >
              Save Edit
            </button>
          </form>
        </div>
      </div>
      {updated && <Toast message="Song updated successfully." />}
    </div>
  );
}

export default Edit;
