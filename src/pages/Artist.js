import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
const URL = process.env.REACT_APP_API_URL;

function Artist() {
  const { id } = useParams();
  const [songs, setSongs] = useState([]);
  console.log(URL + "artist/" + id);

  useEffect(() => {
    fetch(URL + "artist/" + id)
      .then((res) => res.json())
      .then((data) => setSongs(data))
      .catch(console.error);
  }, [id]);

  return (
    <div>
      Artist
      {songs.map((song) => (
        <p>{song.name}</p>
      ))}
    </div>
  );
}

export default Artist;
