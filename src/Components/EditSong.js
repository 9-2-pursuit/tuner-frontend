import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";

const API = process.env.REACT_APP_API_URL;

function EditSong() {
  let { id } = useParams();
  let navigate = useNavigate();

  const [edit, setEdit] = useState({
    name: "",
    artist: "",
    album: "",
    time: "",
    is_favorite: false,
  });

  const updateSong = (updatedSong) => {
    axios
      .put(`${API}/songs/${id}`, updatedSong)
      .then(
        () => {
          navigate(`/songs/${id}`);
        },
        (error) => console.error(error)
      )
      .catch((c) => console.warn("catch", c));
  };

  const handleTextChange = (event) => {
    setEdit({ ...edit, [event.target.id]: event.target.value });
  };

  const handleCheckboxChange = () => {
    setEdit({ ...edit, is_favorite: !edit.is_favorite });
  };

  useEffect(() => {
    axios.get(`${API}/SONGs/${id}`).then(
      (response) => setEdit(response.data),
      (error) => navigate(`/not-found`)
    );
  }, [id, navigate]);

  const handleSubmit = (event) => {
    event.preventDefault();
    updateSong(edit, id);
  };
  return (
    <div className="Edit">
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Song Name</label>
        <input
          id="name"
          value={edit.name}
          type="text"
          onChange={handleTextChange}
          placeholder="Name of Song"
          required
        />
        <label htmlFor="artist">Artist:</label>
        <input
          id="artist"
          type="text"
          required
          value={edit.artist}
          onChange={handleTextChange}
        />
        <label htmlFor="album">Album:</label>
        <input
          id="album"
          type="text"
          name="album"
          value={edit.album}
          onChange={handleTextChange}
        />
        <label htmlFor="time">Time:</label>
        <input
          id="time"
          type="text"
          name="time"
          value={edit.time}
          onChange={handleTextChange}
        />
        <label htmlFor="is_favorite">Favorite:</label>
        <input
          id="is_favorite"
          type="checkbox"
          onChange={handleCheckboxChange}
          checked={edit.is_favorite}
        />

        <br />

        <input type="submit" />
      </form>
      <Link to={`/bookmarks/${id}`}>
        <button>Nevermind!</button>
      </Link>
    </div>
  );
}

export default EditSong;
