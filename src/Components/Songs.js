import { useState, useEffect } from "react";
import axios from "axios";
import Song from "./Song";
import Table from "react-bootstrap/Table";

export default function Songs() {
  const [songs, setSongs] = useState([]);

  const API = process.env.REACT_APP_API_URL;

  useEffect(() => {
    axios
      .get(`${API}/songs`)
      .then((response) => {
        setSongs(response.data);
      })
      .catch((e) => console.log(e));
  }, []);

  return (
    <div className="Songs">
      <h2>Songs</h2>
      <div className="songCards">
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Title</th>
              <th>Artist</th>
              <th></th>
              <th>Time</th>
            </tr>
          </thead>
          <tbody>
            {songs.map((song) => {
              return <Song key={song.id} song={song} />;
            })}
          </tbody>
        </Table>
      </div>
    </div>
  );
}
