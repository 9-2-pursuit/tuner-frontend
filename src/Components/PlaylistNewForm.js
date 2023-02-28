import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

// import "./SongNew.css"

const API = process.env.REACT_APP_API_URL;

const PlaylistNewForm = () => {
  const navigate = useNavigate();

  const [playlist, setPlaylist] = useState({
    name: ""
  });

  const handleTextChange = (event) => {
    setPlaylist({ ...playlist, [event.target.id]: event.target.value });
  };

  function handleSubmit(e) {
    e.preventDefault();
    axios
      .post(`${API}/playlists`, playlist)
      .then(() => {
        navigate("/songs");
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  return (
    <div className="newSong">
      <form onSubmit={handleSubmit}>
        <label htmlFor="name" className="new_labels">
          Name
        </label>
        <input
          onChange={handleTextChange}
          id="name"
          name="name"
          type="text"
          value={playlist.name}
        />

        <br />

        <input
          className="new-submit"
          type="submit"
          value="Submit"
          style={{ color: "black" }}
        />
      </form>
    </div>
  );
};

export default PlaylistNewForm;
