import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Song from "./Song";

const API = process.env.REACT_APP_API_URL;
const Songs = () => {
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    axios
      .get(`${API}/songs`)
      .then((resp) => setSongs(resp.data))
      .catch((e) => console.error("catch", e));

    console.log(songs);
  }, []);

  return (
    <div className="Songs">
      <section>
        <table>
          <thead>
            <tr>
              <th></th>
              <th>Song Name</th>
              <th>See this song</th>
              <th>Artist Name</th>
              <th>Duration</th>
            </tr>
          </thead>
          <tbody>
            {songs.map((song) => {
              return <Song key={song.id} song={song} />;
            })}
          </tbody>
        </table>
      </section>
      <button>
        <Link to="/songs/new">New Song</Link>
      </button>
    </div>
  );
};

export default Songs;
