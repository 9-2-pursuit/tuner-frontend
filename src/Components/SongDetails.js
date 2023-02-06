import { useParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import { Container } from "react-bootstrap";

export default function SongDetails() {
  const [song, setSong] = useState([]);
  let { id } = useParams();
  const API = process.env.REACT_APP_API_URL;

  useEffect(() => {
    axios
      .get(`${API}/songs/${id}`)
      .then((response) => {
        console.log(response.data);
        setSong(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  return (
    <div className="Song-Details">
      <Container>
        <h2>{song.name}</h2>
        <p>{song.artist}</p>
        <p>{song.album}</p>
        <p>{song.is_favorite ? "⭐️" : null}</p>
        <p>{song.time}</p>
      </Container>
    </div>
  );
}
