import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { NavBar } from "../components";
import { MoviesList, MoviesInsert, MoviesUpdate } from "../pages";

function App() {
  return (
    <Router>
      <NavBar />
      <MoviesList />
      {/* <Routes> TODO: figuring out why switching isn't working 
        <Route path="/movies/list" element={MoviesList} />
        <Route path="/movies/create" element={MoviesInsert} />
        <Route path="/movies/update/:id" element={MoviesUpdate} />
      </Routes> */}
    </Router>
  );
}

export default App;
