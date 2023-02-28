import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import "./SongNew.css";

const API = process.env.REACT_APP_API_URL;

const SongNewForm = () => {
  const navigate = useNavigate();

  const [song, setSong] = useState({
    name: "",
    artist: "",
    album: "",
    time: "",
    playlist_id: "",
    is_favorite: false,
  });

  const [playlists, setPlaylists] = useState([]);

  useEffect(() => {
    axios
      .get(`${API}/playlists`)
      .then((response) => {
        console.log(response);
        setPlaylists(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleTextChange = (event) => {
    setSong({ ...song, [event.target.id]: event.target.value });
  };

  const handleSelect = (event) => {
    playlists.forEach(playlist => {
        if(playlist.name === event.target.value){
            setSong({ ...song, [event.target.id]: playlist.id });
        }
    })
    
  }

  function handleSubmit(e) {
    e.preventDefault();
    axios
      .post(`${API}/songs`, song)
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
          value={song.name}
        />

        <label htmlFor="artist" className="new_labels">
          Artist
        </label>
        <input
          onChange={handleTextChange}
          id="artist"
          name="artist"
          type="text"
          value={song.artist}
        />

        <label htmlFor="album" className="new_labels">
          Album
        </label>
        <input
          onChange={handleTextChange}
          id="album"
          name="album"
          type="text"
          value={song.album}
        />

        <label htmlFor="time" className="new_labels">
          Time
        </label>
        <input
          onChange={handleTextChange}
          id="time"
          name="time"
          type="text"
          value={song.time}
        />

        <label htmlFor="playlist_id" className="new_labels">
          Playlist
        </label>
        <select name="playlist" id="playlist_id" onChange={handleSelect}>
            <option></option>
          {playlists.map((playlist) => {
            return <option key={playlist.id} value={playlist.name}> {playlist.name} </option>;
          })}
        </select>
    
        {/* <label htmlFor="is_favorite" className="new_labels">
          Favorite
        </label>
        <input
          onChange={handleTextChange}
          id="is_favorite"
          name="is_favorite"
          type="text"
          value={song.is_favorite}
        /> */}

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

export default SongNewForm;
