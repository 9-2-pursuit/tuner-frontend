import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";

import "../Components/SongDetails.css";

// import heart_solid from "../assets/heart-solid.png";
// import heart_outline from "../assets/heart-regular.png";
import ConfirmDelete from "./DeleteConfirmation";

const API = process.env.REACT_APP_API_URL;

const SongDetails = () => {
  const [song, setSong] = useState([]);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const { name, artist, album, time, is_favorite } = song;
  let { id } = useParams();
  let navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`${API}/songs/${id}`)
      .then((res) => {
        console.log(res.data);
        setSong(res.data);
      })
      .catch((c) => {
        navigate("/404");
        console.error("catch", c);
      });
  }, [id, navigate]);

  const goBack = (e) => {
    e.preventDefault();
    window.history.back();
  };

  return (
    <div className="card-body text-center">
      <article>
        <br />
        <h3>
        {is_favorite ? "⭐️ " : null}
          {name}{" "}
          {/* <img
            className="card-image-details"
            src={is_healthy ? heart_solid : heart_outline}
            height="20px"
            width="20px"
            alt="healthy-unhealthy"
          /> */}
        </h3>
        <br />
        {/* <img className="song-picture" src={img} alt={name} /> */}
        <br />
        <br />
        <container className="container">
          <div className="song-description">
            <h4>Artist: {artist}</h4>
            <h4>Album: {album}</h4>
            <h4>Time: {time}</h4>
          </div>
        </container>

        <div className="d-flex-show-buttons">
          <div className="back-btn">
            <button className="btn btn-dark" onClick={goBack}>
              Back
            </button>
          </div>
          <div className="edit-btn">
            <Link to={`/songs/${id}/edit`}>
              <button className="btn btn-warning">Edit</button>
            </Link>
          </div>
          <div className="delete-btn">
            <ConfirmDelete
              id={id}
              navigate={navigate}
              show={show}
              handleClose={handleClose}
              handleShow={handleShow}
            />
          </div>
        </div>
      </article>
    </div>
  );
};

export default SongDetails;
