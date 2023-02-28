import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

import "./SongEditForm.css";

const SongEditForm = () => {
  const API = process.env.REACT_APP_API_URL;
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

  const handleText = (e) => {
    setEdit({ ...edit, [e.target.id]: e.target.value });
  };

  useEffect(() => {
    axios.get(`${API}/songs/${id}`)
    .then(
      (res) => setEdit(res.data),
      (error) => navigate(`/not-found`)
    );
  }, [id, navigate, API]);

  const handleSubmit = (e) => {
    e.preventDefault();
    updateSong(edit, id);
  };

  return (
    <div className="Edit">
      <form onSubmit={handleSubmit}>
        <label htmlFor="name" className="edit_labels">
          Name:
        </label>
        <input
          id="name"
          value={edit.name}
          type="text"
          onChange={handleText}
          placeholder="Product Name"
          required
        />
        <label htmlFor="artist" className="edit_labels">
          Artist:
        </label>
        <input
          id="artist"
          type="text"
          value={edit.artist}
          onChange={handleText}
        />
        <label htmlFor="album" className="edit_labels">
          Album:
        </label>
        <input
          id="album"
          type="text"
          name="album"
          value={edit.album}
          onChange={handleText}
        />
        <label htmlFor="time" className="edit_labels">
          Time:
        </label>
        <input
          id="time"
          type="text"
          name="time"
          onChange={handleText}
          value={edit.time}
        />
        {/* <label htmlFor="is_favorite" className="edit_labels">
          Image:
        </label>
        <input
          id="is_favorite"
          type="text"
          pattern="https://.*"
          name="img"
          onChange={handleText}
          value={edit.img}
        /> */}

        <br />

        <input
          className="edit-submit"
          type="submit"
        />
      </form>
      <Link to={`/songs/${id}`}>
        <button className="edit-button">Nevermind!</button>
      </Link>
    </div>
  );
};

export default SongEditForm;
