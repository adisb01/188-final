import React, { Component, useRef } from "react";
import { Link } from "react-router-dom";
import "bulma/css/bulma.min.css";

function MovieCard(props) {
  const { movie, deleteFunc } = props;

  function deleteMovie() {
    console.log("hiw");
  }
  // Create a list from 1 to 5 stars
  let stars = [];
  for (let i = 1; i <= movie.rating; i++) {
    stars.push(<div className="level-item">⭐</div>);
  }

  return (
    <div className="card">
      <div className="card-content">
        <div className="media">
          <div className="media-content">
            <p className="title is-4">{movie.name}</p>
          </div>
        </div>
        <div className="content">
          <div className="level-left">{stars}</div>
          <br />
          Released: {movie.time}
        </div>
      </div>
      <footer className="card-footer">
        <Link to={"/movies/update/" + movie._id} className="card-footer-item">
          Update
        </Link>
        <div onclick={() => deleteMovie()} className="card-footer-item">
          Delete
        </div>
      </footer>
    </div>
  );
}

export default MovieCard;
