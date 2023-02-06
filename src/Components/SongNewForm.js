import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const API = process.env.REACT_APP_API_URL;

export default function SongNewForm() {
  let navigate = useNavigate();

  const [song, setSong] = useState({
    name: "",
    artist: "",
    album: "",
    time: "",
    is_favorite: false,
  });

  const newLizzoSong = {
    name: "Break Up Twice",
    artist: "Lizzo",
    album: "Special 235",
    time: "2:57",
    is_favorite: true,
  };

  const addSong = () => {
    console.log("Adding song", song);
    axios
      .post(`${API}/songs`, song)
      .then(() => {
        navigate(`/songs`);
      })
      .catch((error) => console.log(error));
  };

  const handleTextChange = (event) => {
    setSong({ ...song, [event.target.id]: event.target.value });
  };

  const handleCheckboxChange = () => {
    setSong({ ...song, is_favorite: !song.is_favorite });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addSong(song);
  };

  return (
    <div className="New">
      <h1>Song New Form</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Song Title:</label>
        <input
          id="name"
          value={song.name}
          type="text"
          onChange={handleTextChange}
          placeholder="Song Title"
          required
        />
        <label htmlFor="artist">Artist Name:</label>
        <input
          id="artist"
          value={song.artist}
          type="text"
          onChange={handleTextChange}
          placeholder="artist"
        />
        <label htmlFor="album">Album Name:</label>
        <input
          id="album"
          value={song.album}
          type="text"
          onChange={handleTextChange}
          placeholder="album"
        />
        <label htmlFor="album">Time:</label>
        <input
          id="time"
          value={song.time}
          type="text"
          onChange={handleTextChange}
          placeholder="2:30"
        />
        <label htmlFor="is_favorite">Favorite:</label>
        <input
          id="is_favorite"
          type="checkbox"
          onChange={handleCheckboxChange}
          checked={song.is_favorite}
        />

        <br />
        <input type="submit" />
      </form>
    </div>
  );
}
