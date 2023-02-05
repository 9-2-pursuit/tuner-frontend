import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
const API = process.env.REACT_APP_API_URL;

const SongDetails = () => {
  let navigate = useNavigate();
  let { id } = useParams();
  const [details, setDetails] = useState([]);

  useEffect(() => {
    axios
    .get(`${API}/songs/${id}`)
    .then((resp) => setDetails(resp.data));
  }, [id]);

  const deleteSong = () => {
    axios
      .delete(`${API}/songs/${id}`)
      .then(
        () => {
          navigate(`/songs`);
        },
        (error) => console.error(error)
      )
      .catch((c) => {
        console.warn("catch", c);
      });
  };

  const handleDelete = () => {
    deleteSong();
  };

  console.log(details);
  return (
    <div className="Song-Details">
      <h3>
        {details.is_favorite ? <span role="img" aria-label="star">⭐️</span> : null}{" "}
        {details.name}
      </h3>
      <h5>
        <span>
         {details.artist}
        </span>
      </h5>

      <h6>{details.album}</h6>
      <p>{details.time}</p>
      <div className="showNavigation">
        <div>
          {" "}
          <Link to={`/songs`}>
            <button>Back</button>
          </Link>
        </div>
        <div>
          <Link to={`/songs/${id}/edit`}>
            <button>Edit</button>
          </Link>
        </div>
        <div>
          <button onClick={handleDelete}>Delete</button>
        </div>
      </div>
    </div>
  );
};

export default SongDetails;
