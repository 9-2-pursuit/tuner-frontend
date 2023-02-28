import { useState, useEffect } from "react";
import axios from "axios";

// import "../Components/Products.css"
import Song from "./Song";

const API = process.env.REACT_APP_API_URL;

const Songs = () => {
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    axios
      .get(`${API}/songs`)
      .then((response) => {
        console.log(response);
        setSongs(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="Songs">
      <div className="name">
        {/* <button onClick={sortByNameAsc}>Sort by Name ⬇️</button> */}
      </div>
      <div className="cards">
        {songs.map((song) => {
            console.log(song);
          return <Song key={song.id} song={song} />;
        })}
      </div>
    </div>
  );
};

export default Songs;
