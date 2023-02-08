import React from "react";
import { Link } from "react-router-dom";

export default function Song({ song }) {
  return (
    <tr className="Song">
      <td>
        <Link to={`/songs/${song.id}`}>{song.name}</Link>
      </td>
      <td>{song.artist}</td>
      <td>{song.is_favorite ? "⭐️" : null}</td>
      <td>{song.time}</td>
    </tr>
  );
}
