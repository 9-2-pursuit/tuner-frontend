import React from "react";
import { Link } from "react-router-dom";
import "../Components/Song.css";

const Song = ({ song }) => {
  return (
    <div className="card">
      <Link to={`/songs/${song.id}/`}>
        <div className="Container">
          <h5>
            <b>{song.name}</b>
          </h5>
        </div>
      </Link>
      <div>{song.artist}</div>
      <div>{song.time}</div>
      <div className="is_favorite" >{song.is_favorite ? "⭐️ " : null}</div>
    </div>
  );
};

export default Song;
