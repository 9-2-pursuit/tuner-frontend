import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const API = process.env.REACT_APP_API_URL;

export default function SongEditForm() {
  let navigate = useNavigate();
  let { id } = useParams();

  const [song, setSong] = useState({
    name: "",
    artist: "",
    album: "",
    time: "",
    is_favorite: false,
  });

  const updateSong = () => {
    // delete song.id;
    console.log("Updating song", song);
    axios
      .put(`${API}/songs/${id}`, song)
      .then(() => {
        navigate(`/songs/${id}`);
      })
      .catch((error) => console.error(error));
  };

  const handleTextChange = (event) => {
    setSong({ ...song, [event.target.id]: event.target.value });
  };

  const handleCheckboxChange = () => {
    setSong({ ...song, is_favorite: !song.is_favorite });
  };

  useEffect(() => {
    axios
      .get(`${API}/songs/${id}`)
      .then(
        (response) => {
          setSong(response.data);
        },
        (error) => {
          navigate(`/not-found`);
        }
      )
      .catch((error) => {
        console.log(error);
      });
  }, [id, navigate]);

  const handleSubmit = (event) => {
    event.preventDefault();
    updateSong();
  };

  return (
    <div className="New">
      <h1>Song Edit Form</h1>
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
