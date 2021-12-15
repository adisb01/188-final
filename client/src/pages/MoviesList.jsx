import React, { Component } from "react";
import ReactTable from "react-table";
import api from "../api";
import MovieCard from "../components/MovieCard";

import styled from "styled-components";
import "bulma/css/bulma.min.css";

const Wrapper = styled.div`
  classname: "level";
  padding: 0 50px;
`;

const Update = styled.div`
  color: #ef9b0f;
  cursor: pointer;
`;

const Delete = styled.div`
  color: #ff0000;
  cursor: pointer;
`;

class UpdateMovie extends Component {
  updateUser = (event) => {
    event.preventDefault();

    window.location.href = `/movies/update/${this.props.id}`;
  };

  render() {
    return <Update onClick={this.updateUser}>Update</Update>;
  }
}

class DeleteMovie extends Component {
  deleteUser = (event) => {
    event.preventDefault();

    if (
      window.confirm(
        `Do tou want to delete the movie ${this.props.id} permanently?`
      )
    ) {
      api.deleteMovieById(this.props.id);
      window.location.reload();
    }
  };

  render() {
    return <Delete onClick={this.deleteUser}>Delete</Delete>;
  }
}

class MoviesList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      columns: [],
      isLoading: false,
    };
  }

  componentDidMount = async () => {
    console.log("List component mounted");
    this.setState({ isLoading: true });
    await api.getAllMovies().then((movies) => {
      this.setState({
        movies: movies.data.data,
        isLoading: false,
      });
      console.log(this.state.movies);
    });
  };

  render() {
    const { movies, isLoading } = this.state;
    console.log("TCL: MoviesList -> render -> movies", movies);
    // Create a movieCard for each movie
    const movieCards = movies.map((movie) => {
      return (
        <div className="level-item">
          <MovieCard key={movie._id} movie={movie} />
        </div>
      );
    });
    let movieCardsByRow = [];
    for (let i = 0; i < movieCards.length; i += 3) {
      movieCardsByRow.push(movieCards.slice(i, i + 3));
    }

    const movieRows = movieCardsByRow.map((rowCards) => {
      return (
        <div className="block">
          <div className="level-left">{rowCards}</div>
        </div>
      );
    });
    return <Wrapper>{movieRows}</Wrapper>;
  }
}

export default MoviesList;
