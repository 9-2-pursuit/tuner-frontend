import { Link } from "react-router-dom";
import React from "react";

function Song({ song }) {
  return (
    <tr className="Song">
      <td>
        {song.is_favorite ? (
          <span role="img" aria-label="star">⭐️</span>
        ) : (
          <span>&nbsp; &nbsp; &nbsp;</span>
        )}
      </td>
      <td className="Song">
        <Link to={`/songs/${song.id}`}>
          <span>{song.name}</span>
        </Link>
      </td>
      <td></td>
      <td>{song.artist}</td>
      <td>{song.time}</td>
    </tr>
  );
}

export default Song;
