import React from "react";
import SongNewForm from "../Components/SongNewForm";

import "./New.css"

const New = () => {
  return (
    <div className="new-page">
      <h1 className="new-h1">My Songs</h1>
      <SongNewForm />
    </div>
  );
};

export default New;
